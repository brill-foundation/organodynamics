// Canonical Knowledge Kernel — the constitutional core (Blueprint Part II §11).
//
// Constitutional responsibility: represent constitutional knowledge as an
// append-only history of Events from which all state is *derived* by pure
// replay. Realizes, and is tested against:
//
//   Axiom 1  identity is permanent, never reassigned
//   Axiom 3  nothing constitutional ever disappears (supersede, never delete)
//   Axiom 4  nothing changes without an Event
//   Axiom 5  every statement is explainable from its event chain
//   Axiom 6  unknowns are constitutional objects and stay visible
//   Axiom 7  evidence modifies confidence, never history or identity
//   Axiom 10 state is fully re-derivable: the log survives, everything else may go
//
// The Kernel knows nothing of storage, networks, UIs, or AI providers
// (Blueprint Part II §11). Public surface: entities, assertions (versioned),
// relations (first-class, P-004), unknowns (P-012), evidence (P-011),
// derive/replay, explain.
//
// Dependencies: ./identity.js, ./log.js (node:crypto transitively).

import { mintIdentity } from "./identity.js";
import { createLog } from "./log.js";

// Pure derivation: state is a function of the event history and nothing else.
// Exported so determinism itself is testable (derive(events) === derive(events)).
export function derive(events) {
  const state = {
    entities: new Map(),
    assertions: new Map(),
    relations: new Map(),
    unknowns: new Map(),
    evidence: new Map(),
  };
  for (const e of events) {
    const p = e.payload;
    switch (e.type) {
      case "ENTITY_CREATED":
        state.entities.set(e.subject, { id: e.subject, kind: p.kind, createdSeq: e.seq, status: "active" });
        break;
      case "ASSERTION_MADE":
        state.assertions.set(e.subject, {
          id: e.subject, about: p.about, predicate: p.predicate,
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
      case "UNKNOWN_RECORDED":
        state.unknowns.set(e.subject, { id: e.subject, about: p.about, question: p.question, seq: e.seq, status: "open" });
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
      default:
        throw new Error(`unknown event type in history: ${e.type}`);
    }
  }
  return state;
}

export function createKernel() {
  const log = createLog();

  const requireIn = (map, id, what) => {
    if (!derive(log.events())[map].has(id)) throw new Error(`${what} not found: ${id}`);
  };

  return {
    log,

    createEntity({ kind, provenance }) {
      const id = mintIdentity("entity");
      log.append({ type: "ENTITY_CREATED", subject: id, payload: { kind }, provenance });
      return id;
    },

    assert({ about, predicate, value, provenance }) {
      requireIn("entities", about, "entity");
      const id = mintIdentity("assertion");
      log.append({ type: "ASSERTION_MADE", subject: id, payload: { about, predicate, value }, provenance });
      return id;
    },

    supersedeAssertion(id, { value, provenance }) {
      requireIn("assertions", id, "assertion");
      log.append({ type: "ASSERTION_SUPERSEDED", subject: id, payload: { value }, provenance });
      return id; // identity is permanent across versions (Axiom 1)
    },

    relate({ from, type, to, provenance }) {
      const id = mintIdentity("relation");
      log.append({ type: "RELATION_ESTABLISHED", subject: id, payload: { from, type, to }, provenance });
      return id;
    },

    recordUnknown({ about, question, provenance }) {
      const id = mintIdentity("unknown");
      log.append({ type: "UNKNOWN_RECORDED", subject: id, payload: { about, question }, provenance });
      return id;
    },

    resolveUnknown(id, { resolution, provenance }) {
      requireIn("unknowns", id, "unknown");
      log.append({ type: "UNKNOWN_RESOLVED", subject: id, payload: { resolution }, provenance });
      return id;
    },

    attachEvidence({ assertion, bearing, source, provenance }) {
      requireIn("assertions", assertion, "assertion");
      if (!["supports", "contradicts"].includes(bearing)) throw new Error("bearing must be supports|contradicts");
      const id = mintIdentity("evidence");
      log.append({ type: "EVIDENCE_ATTACHED", subject: id, payload: { assertion, bearing, source }, provenance });
      return id;
    },

    state() {
      return derive(log.events());
    },

    // Axiom 5: reconstruct the full explanation of any constitutional object —
    // every event that created or touched it, with provenance intact.
    explain(id) {
      return log.events().filter(
        (e) => e.subject === id || Object.values(e.payload).includes(id)
      );
    },
  };
}
