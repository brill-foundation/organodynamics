// Canonical Knowledge Kernel — the constitutional core (Blueprint Part II §11).
//
// Constitutional responsibility: represent constitutional knowledge as an
// append-only history of Events from which all state is *derived* by pure
// replay. Realizes the OIS-CORE axioms (see tests/kernel/kernel.test.js) and
// enforces the five obligations of the frozen Laboratory Protocol
// (laboratory/PROTOCOL.md; audit in docs/audit-kernel-vs-protocol.md):
//
//   1 Identity          participants register a permanent identity before
//                       contributing; no object identity is ever reassigned
//   2 Grounding         every assertion declares what grounds it — an
//                       observation, a source, a derivation, or explicit
//                       conjecture; nothing floats silently
//   3 Provenance        no event without actor and intention (enforced in log.js)
//   4 Explicit Judgment conclusions are recorded acts with mandatory reasoning
//   5 Sealing           a departing participant closes work with a seal that
//                       binds the chain hash it covers
//
// The Kernel knows nothing of storage, networks, UIs, or AI providers.
// Persistence is a shell around it (src/laboratory/), never inside it.
//
// Dependencies: ./identity.js, ./log.js (node:crypto transitively).

import { mintIdentity } from "./identity.js";
import { createLog } from "./log.js";

const GROUNDING_KINDS = new Set(["observation", "source", "derivation", "conjecture"]);

function mentions(value, id) {
  if (value === id) return true;
  if (Array.isArray(value)) return value.some((v) => mentions(v, id));
  if (value && typeof value === "object") return Object.values(value).some((v) => mentions(v, id));
  return false;
}

// Pure derivation: state is a function of the event history and nothing else.
// Exported so determinism itself is testable (derive(events) === derive(events)).
export function derive(events) {
  const state = {
    participants: new Map(),
    entities: new Map(),
    assertions: new Map(),
    relations: new Map(),
    unknowns: new Map(),
    evidence: new Map(),
    observations: new Map(),
    judgments: new Map(),
    seals: [],
  };
  for (const e of events) {
    const p = e.payload;
    switch (e.type) {
      case "PARTICIPANT_REGISTERED":
        state.participants.set(e.subject, { id: e.subject, name: p.name, kind: p.kind, seq: e.seq });
        break;
      case "ENTITY_CREATED":
        state.entities.set(e.subject, { id: e.subject, kind: p.kind, createdSeq: e.seq, status: "active" });
        break;
      case "OBSERVATION_RECORDED":
        state.observations.set(e.subject, { id: e.subject, about: p.about ?? null, statement: p.statement, seq: e.seq });
        break;
      case "ASSERTION_MADE":
        state.assertions.set(e.subject, {
          id: e.subject, about: p.about, predicate: p.predicate, grounding: p.grounding,
          versions: [{ value: p.value, seq: e.seq, status: "current" }],
          confidence: [],
        });
        break;
      case "ASSERTION_SUPERSEDED": {
        const a = state.assertions.get(e.subject);
        a.versions.at(-1).status = "superseded";
        a.versions.push({ value: p.value, seq: e.seq, status: "current" });
        break;
      }
      case "RELATION_ESTABLISHED":
        state.relations.set(e.subject, { id: e.subject, from: p.from, type: p.type, to: p.to, seq: e.seq, status: "active" });
        break;
      case "JUDGMENT_RECORDED":
        state.judgments.set(e.subject, {
          id: e.subject, about: p.about ?? null, conclusion: p.conclusion,
          reasoning: p.reasoning, basis: p.basis, seq: e.seq,
        });
        break;
      case "UNKNOWN_RECORDED":
        state.unknowns.set(e.subject, { id: e.subject, about: p.about ?? null, question: p.question, seq: e.seq, status: "open" });
        break;
      case "UNKNOWN_RESOLVED": {
        const u = state.unknowns.get(e.subject);
        u.status = "resolved";
        u.resolution = p.resolution;
        u.resolvedSeq = e.seq; // the question itself remains (Axiom 6)
        break;
      }
      case "EVIDENCE_ATTACHED": {
        state.evidence.set(e.subject, { id: e.subject, assertion: p.assertion, bearing: p.bearing, source: p.source, seq: e.seq });
        state.assertions.get(p.assertion).confidence.push({ evidence: e.subject, bearing: p.bearing });
        break;
      }
      case "SEALED":
        state.seals.push({
          id: e.subject, at: e.seq, sealedThrough: p.sealedThrough, chainHash: p.chainHash,
          summary: p.summary, by: e.provenance.actor,
        });
        break;
      default:
        throw new Error(`unknown event type in history: ${e.type}`);
    }
  }
  return state;
}

// `history` restores a kernel from previously preserved events (verbatim,
// chain-verified by the log). The Kernel does not know where they came from.
export function createKernel({ history = [] } = {}) {
  const log = createLog(history);

  const state = () => derive(log.events());

  const requireIn = (map, id, what) => {
    if (!state()[map].has(id)) throw new Error(`${what} not found: ${id}`);
  };

  const requireInRecord = (id, what) => {
    const s = state();
    const found = Object.values(s).some((m) => m instanceof Map && m.has(id));
    if (!found) throw new Error(`${what} not found in record: ${id}`);
  };

  // Obligation 1 (Identity): only registered participants act. The single
  // exception is the self-registration event itself — arrival.
  const requireRegistered = (provenance, selfId = null) => {
    if (!provenance?.actor) return; // absence is rejected by the log (obligation 3)
    if (provenance.actor === selfId) return;
    if (!state().participants.has(provenance.actor)) {
      throw new Error(
        `unregistered participant: ${provenance.actor} — obligation 1 (Identity): register before contributing`
      );
    }
  };

  // Obligation 2 (Grounding): every assertion says what it stands on.
  const requireGrounding = (grounding) => {
    if (!grounding || !GROUNDING_KINDS.has(grounding.kind)) {
      throw new Error(
        "assertion requires grounding — obligation 2: {kind: observation|source|derivation|conjecture, ...}"
      );
    }
    if (grounding.kind === "observation") requireIn("observations", grounding.ref, "grounding observation");
    if (grounding.kind === "derivation") {
      const refs = Array.isArray(grounding.ref) ? grounding.ref : [grounding.ref];
      if (!refs.length || refs.some((r) => !r)) throw new Error("derivation grounding requires ref(s)");
      for (const r of refs) requireInRecord(r, "grounding derivation ref");
    }
    if (grounding.kind === "source" && !grounding.ref) {
      throw new Error("source grounding requires a citation ref");
    }
    // conjecture needs nothing further: being explicit IS the obligation
  };

  return {
    log,

    registerParticipant({ name, kind, intention }) {
      if (!name || !kind) throw new Error("participant requires name and kind (human|ai|script|system)");
      const id = mintIdentity("participant");
      log.append({
        type: "PARTICIPANT_REGISTERED", subject: id, payload: { name, kind },
        provenance: { actor: id, intention: intention ?? `arrive as ${name}` }, // arrival is self-declared
      });
      return id;
    },

    createEntity({ kind, provenance }) {
      requireRegistered(provenance);
      const id = mintIdentity("entity");
      log.append({ type: "ENTITY_CREATED", subject: id, payload: { kind }, provenance });
      return id;
    },

    observe({ about = null, statement, provenance }) {
      requireRegistered(provenance);
      if (!statement) throw new Error("observation requires a statement");
      if (about) requireInRecord(about, "observed subject");
      const id = mintIdentity("observation");
      log.append({ type: "OBSERVATION_RECORDED", subject: id, payload: { about, statement }, provenance });
      return id;
    },

    assert({ about, predicate, value, grounding, provenance }) {
      requireRegistered(provenance);
      requireIn("entities", about, "entity");
      requireGrounding(grounding);
      const id = mintIdentity("assertion");
      log.append({ type: "ASSERTION_MADE", subject: id, payload: { about, predicate, value, grounding }, provenance });
      return id;
    },

    supersedeAssertion(id, { value, provenance }) {
      requireRegistered(provenance);
      requireIn("assertions", id, "assertion");
      log.append({ type: "ASSERTION_SUPERSEDED", subject: id, payload: { value }, provenance });
      return id; // identity is permanent across versions (Axiom 1)
    },

    relate({ from, type, to, provenance }) {
      requireRegistered(provenance);
      const id = mintIdentity("relation");
      log.append({ type: "RELATION_ESTABLISHED", subject: id, payload: { from, type, to }, provenance });
      return id;
    },

    // Obligation 4: a conclusion is an act, and an act explains itself.
    judge({ about = null, conclusion, reasoning, basis = [], provenance }) {
      requireRegistered(provenance);
      if (!conclusion) throw new Error("judgment requires a conclusion");
      if (!reasoning || !String(reasoning).trim()) {
        throw new Error("judgment requires reasoning — obligation 4 (Explicit Judgment)");
      }
      for (const b of basis) requireInRecord(b, "judgment basis");
      const id = mintIdentity("judgment");
      log.append({ type: "JUDGMENT_RECORDED", subject: id, payload: { about, conclusion, reasoning, basis }, provenance });
      return id;
    },

    recordUnknown({ about = null, question, provenance }) {
      requireRegistered(provenance);
      const id = mintIdentity("unknown");
      log.append({ type: "UNKNOWN_RECORDED", subject: id, payload: { about, question }, provenance });
      return id;
    },

    resolveUnknown(id, { resolution, provenance }) {
      requireRegistered(provenance);
      requireIn("unknowns", id, "unknown");
      log.append({ type: "UNKNOWN_RESOLVED", subject: id, payload: { resolution }, provenance });
      return id;
    },

    attachEvidence({ assertion, bearing, source, provenance }) {
      requireRegistered(provenance);
      requireIn("assertions", assertion, "assertion");
      if (!["supports", "contradicts"].includes(bearing)) throw new Error("bearing must be supports|contradicts");
      const id = mintIdentity("evidence");
      log.append({ type: "EVIDENCE_ATTACHED", subject: id, payload: { assertion, bearing, source }, provenance });
      return id;
    },

    // Obligation 5: departure is an act. The seal binds the hash of the chain
    // it closes; git anchors the sealed file externally.
    seal({ summary, provenance }) {
      requireRegistered(provenance);
      if (!summary) throw new Error("a seal requires a summary of what it closes");
      const events = log.events();
      const last = events.at(-1);
      if (!last) throw new Error("nothing to seal: the record is empty");
      if (last.type === "SEALED") throw new Error("nothing to seal: no work since the last seal");
      const id = mintIdentity("seal");
      log.append({
        type: "SEALED", subject: id,
        payload: { summary, sealedThrough: last.seq, chainHash: last.hash },
        provenance,
      });
      return id;
    },

    state,

    // Axiom 5: reconstruct the full explanation of any constitutional object —
    // every event that created or touched it, with provenance intact.
    explain(id) {
      return log.events().filter((e) => e.subject === id || mentions(e.payload, id));
    },

    // Public, mechanical verification: the chain holds and every seal binds
    // the event it claims to close (obligation 5).
    verify() {
      if (!log.verifyChain()) return false;
      const events = log.events();
      return state().seals.every(
        (s) => events[s.sealedThrough] && events[s.sealedThrough].hash === s.chainHash
      );
    },
  };
}
