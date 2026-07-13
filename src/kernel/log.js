// Event Log — realizes P-005 (Time), P-006 (Event), P-008 (Intention) and
// OIS-CORE Axiom 4 (nothing constitutional changes without an Event).
//
// Constitutional responsibility: the log IS constitutional history. Events are
// immutable (deep-frozen), append-only, hash-chained (tampering is detectable),
// and replayable. Constitutional time is the sequence number; clock time is
// carried only as non-authoritative context (P-005: clock time SHALL NOT define
// constitutional meaning).
//
// Every event carries provenance: actor and intention are mandatory (P-008,
// P-009: attribution), context is optional but preserved verbatim.
//
// Dependencies: node:crypto only.

import { createHash } from "node:crypto";

function deepFreeze(value) {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const key of Object.keys(value)) deepFreeze(value[key]);
  }
  return value;
}

// Deterministic serialization so hashes are reproducible across replays.
function canonical(value) {
  if (Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((k) => `${JSON.stringify(k)}:${canonical(value[k])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

// `history` restores previously preserved events verbatim (frozen as-is);
// the chain is verified on load so a corrupted history cannot be adopted.
export function createLog(history = []) {
  const events = [];
  for (const e of history) events.push(deepFreeze(e));
  const log = {
    append({ type, subject, payload = {}, provenance }) {
      if (!type) throw new Error("event requires a type");
      if (!provenance || !provenance.actor) {
        throw new Error("event requires provenance.actor (attribution is constitutional)");
      }
      if (!provenance.intention) {
        throw new Error("event requires provenance.intention (P-008: purpose behind every action)");
      }
      const seq = events.length; // constitutional time
      const prevHash = seq === 0 ? "genesis" : events[seq - 1].hash;
      const body = { seq, type, subject: subject ?? null, payload, provenance, prevHash };
      const hash = createHash("sha256").update(canonical(body)).digest("hex");
      const event = deepFreeze({ ...body, hash, recordedAt: new Date().toISOString() });
      events.push(event);
      return event;
    },
    // A read-only view; the array itself never leaves this module mutable.
    events() {
      return events.slice();
    },
    length() {
      return events.length;
    },
    // Replayability check: recompute the chain and compare (P-006).
    verifyChain() {
      let prevHash = "genesis";
      for (const e of events) {
        const { hash, recordedAt, ...rest } = e;
        const expected = createHash("sha256")
          .update(canonical({ ...rest, prevHash }))
          .digest("hex");
        if (e.prevHash !== prevHash || hash !== expected) return false;
        prevHash = hash;
      }
      return true;
    },
  };
  if (!log.verifyChain()) {
    throw new Error("history fails chain verification: the preserved record has been altered or truncated mid-chain");
  }
  return log;
}
