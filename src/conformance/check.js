// Record-level constitutional conformance — the public, executable suite
// CAB-007 §6 called for ("it should exist before any Commons does").
//
// This module checks a RECORD (the portable artifact), not an implementation.
// It is deliberately self-contained: it imports nothing from src/kernel or
// src/laboratory, because a checker that trusts the implementation under test
// proves nothing. Any implementation, in any language, that emits this event
// format can be judged by these checks — that is what makes conformance an
// implementation-independent claim.
//
// Each check cites the axiom or protocol obligation it verifies. A check
// failure means the record does not conform; it never means the checker
// repairs anything.
//
// Dependencies: node:crypto only.

import { createHash } from "node:crypto";

// Must match the canonical serialization of the record format (an interop
// contract, restated here independently on purpose).
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonical(value[k])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
const sha = (text) => createHash("sha256").update(text).digest("hex");

const CREATION_TYPES = new Set([
  "PARTICIPANT_REGISTERED", "ENTITY_CREATED", "OBSERVATION_RECORDED", "ASSERTION_MADE",
  "RELATION_ESTABLISHED", "JUDGMENT_RECORDED", "UNKNOWN_RECORDED", "EVIDENCE_ATTACHED", "SEALED",
]);
const KNOWN_TYPES = new Set([...CREATION_TYPES, "ASSERTION_SUPERSEDED", "UNKNOWN_RESOLVED"]);
const GROUNDING_KINDS = new Set(["observation", "source", "derivation", "conjecture"]);

export function checkRecord(events) {
  const checks = [];
  const run = (id, title, fn) => {
    const failures = [];
    fn((seq, detail) => failures.push({ seq, detail }));
    checks.push({ id, title, ok: failures.length === 0, failures });
  };

  run("C1", "event vocabulary is closed — no hidden constitutional primitives (OCS-000 conformance)", (fail) => {
    events.forEach((e) => { if (!KNOWN_TYPES.has(e.type)) fail(e.seq, `unknown event type ${e.type}`); });
  });

  run("C2", "constitutional time and the hash chain hold; events are replayable (P-005, P-006, Axiom 4)", (fail) => {
    let prev = "genesis";
    events.forEach((e, i) => {
      if (e.seq !== i) fail(e.seq, `sequence gap: expected ${i}`);
      const { hash, recordedAt, ...rest } = e;
      if (e.prevHash !== prev) fail(e.seq, "chain link broken");
      else if (hash !== sha(canonical({ ...rest, prevHash: prev }))) fail(e.seq, "hash does not match content");
      prev = hash;
    });
  });

  run("C3", "every event carries actor and intention (obligation 3 — Provenance, P-008)", (fail) => {
    events.forEach((e) => {
      if (!e.provenance?.actor) fail(e.seq, "missing actor");
      if (!e.provenance?.intention) fail(e.seq, "missing intention");
    });
  });

  run("C4", "identities are unique, and only registered participants act (obligation 1 — Identity, Axiom 1)", (fail) => {
    const created = new Set();
    const participants = new Set();
    events.forEach((e) => {
      if (CREATION_TYPES.has(e.type)) {
        if (created.has(e.subject)) fail(e.seq, `identity reused: ${e.subject}`);
        created.add(e.subject);
      }
      if (e.type === "PARTICIPANT_REGISTERED") {
        if (e.provenance?.actor !== e.subject) fail(e.seq, "registration must be self-declared");
        participants.add(e.subject);
      } else if (e.provenance?.actor && !participants.has(e.provenance.actor)) {
        fail(e.seq, `unregistered actor: ${e.provenance.actor}`);
      }
    });
  });

  run("C5", "every assertion declares grounding; record-internal refs resolve (obligation 2 — Grounding)", (fail) => {
    const seen = new Set();
    const observations = new Set();
    events.forEach((e) => {
      if (e.type === "OBSERVATION_RECORDED") observations.add(e.subject);
      if (e.type === "ASSERTION_MADE") {
        const g = e.payload?.grounding;
        if (!g || !GROUNDING_KINDS.has(g.kind)) fail(e.seq, "assertion without valid grounding");
        else if (g.kind === "observation" && !observations.has(g.ref)) fail(e.seq, `grounding observation not in record: ${g.ref}`);
        else if (g.kind === "derivation") {
          for (const r of Array.isArray(g.ref) ? g.ref : [g.ref]) {
            if (!seen.has(r)) fail(e.seq, `derivation ref not in record: ${r}`);
          }
        } else if (g.kind === "source" && !g.ref) fail(e.seq, "source grounding without a ref");
      }
      if (CREATION_TYPES.has(e.type)) seen.add(e.subject);
    });
  });

  run("C6", "every judgment states reasoning; its basis resolves (obligation 4 — Explicit Judgment, P-013)", (fail) => {
    const seen = new Set();
    events.forEach((e) => {
      if (e.type === "JUDGMENT_RECORDED") {
        if (!e.payload?.reasoning || !String(e.payload.reasoning).trim()) fail(e.seq, "judgment without reasoning");
        for (const b of e.payload?.basis ?? []) {
          if (!seen.has(b)) fail(e.seq, `basis not in record: ${b}`);
        }
      }
      if (CREATION_TYPES.has(e.type)) seen.add(e.subject);
    });
  });

  run("C7", "revisions target existing objects; history is superseded, never replaced (Axiom 3)", (fail) => {
    const assertions = new Set(), unknowns = new Set();
    events.forEach((e) => {
      if (e.type === "ASSERTION_MADE") assertions.add(e.subject);
      if (e.type === "UNKNOWN_RECORDED") unknowns.add(e.subject);
      if (e.type === "ASSERTION_SUPERSEDED" && !assertions.has(e.subject)) fail(e.seq, "supersedes a nonexistent assertion");
      if (e.type === "UNKNOWN_RESOLVED" && !unknowns.has(e.subject)) fail(e.seq, "resolves a nonexistent unknown");
      if (e.type === "EVIDENCE_ATTACHED" && !assertions.has(e.payload?.assertion)) fail(e.seq, "evidence for a nonexistent assertion");
    });
  });

  run("C8", "every seal binds the event it claims to close (obligation 5 — Sealing)", (fail) => {
    events.forEach((e) => {
      if (e.type !== "SEALED") return;
      if (e.payload?.sealedThrough !== e.seq - 1) fail(e.seq, "seal does not close the event before it");
      const closed = events[e.payload?.sealedThrough];
      if (!closed || closed.hash !== e.payload?.chainHash) fail(e.seq, "seal hash does not bind the closed event");
      if (!e.payload?.summary) fail(e.seq, "seal without a summary");
      if (closed?.type === "SEALED") fail(e.seq, "seal closes nothing but another seal");
    });
  });

  return { ok: checks.every((c) => c.ok), checks };
}
