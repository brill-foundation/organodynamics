// The Laboratory — a passive persistence shell around the Kernel.
//
// Constitutional responsibility: preserve reality, nothing else
// (laboratory/PROTOCOL.md, passivity clause). The Laboratory does not
// orchestrate Participants, schedule work, or know who arrives next. It:
//
//   - replays the preserved record on open (refusing a tampered one),
//   - writes every new event through to an append-only JSONL file,
//   - refuses to write over another Participant's unseen work,
//   - answers questions (status, sessions, verify, explain) mechanically.
//
// Storage is replaceable: the Kernel never sees a file; this shell only turns
// events into lines and lines into events. Replace this file to replace
// storage — the record's meaning lives in the events, not here (Axiom 2, 10).
//
// Dependencies: node:fs, node:path, ../kernel/kernel.js.

import { readFileSync, appendFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { createKernel } from "../kernel/kernel.js";
import { checkSource, sourceReport } from "./sources.js";

const MUTATIONS = [
  "registerParticipant", "createEntity", "observe", "assert", "supersedeAssertion",
  "relate", "judge", "recordUnknown", "resolveUnknown", "attachEvidence", "seal",
];

export function openLaboratory(dir, { root = process.cwd() } = {}) {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "log.jsonl");
  const history = existsSync(file)
    ? readFileSync(file, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
    : [];
  const kernel = createKernel({ history }); // throws if the preserved chain fails verification

  let written = history.length;
  let bytes = existsSync(file) ? statSync(file).size : 0;

  // Two Participants may hold the same Laboratory open. The chain admits only
  // one tip, so writing over another's unseen events would fork history. The
  // guard is checked BEFORE the kernel mutates, keeping memory and file in
  // agreement; the honest recovery is always the same: reopen, replay, redo.
  const guardTip = () => {
    if (existsSync(file) && statSync(file).size !== bytes) {
      throw new Error(
        "the record grew outside this session (another Participant preserved work) — " +
        "reopen the Laboratory to continue from the new tip"
      );
    }
  };

  const preserve = () => {
    const events = kernel.log.events();
    if (events.length > written) {
      const chunk = events.slice(written).map((e) => JSON.stringify(e) + "\n").join("");
      appendFileSync(file, chunk);
      bytes += Buffer.byteLength(chunk);
      written = events.length;
    }
  };

  const lab = { dir, file };

  // Every mutation is preserved the moment it happens — quiet, continuous,
  // no ceremony (laboratory charter §3: Save has no ceremony).
  for (const m of MUTATIONS) {
    lab[m] = (...args) => {
      guardTip();
      const result = kernel[m](...args);
      preserve();
      return result;
    };
  }

  // Obligation 2 at the boundary: checkable source schemes (cabinet:, file:)
  // must resolve against local reality at write time; free citations pass
  // through and are reported honestly as unchecked (see ./sources.js).
  const assertThrough = lab.assert;
  lab.assert = (args) => {
    if (args?.grounding?.kind === "source") {
      const check = checkSource(args.grounding.ref, root);
      if (check.ok === false) {
        throw new Error(`source grounding does not resolve — obligation 2: ${check.detail}`);
      }
    }
    return assertThrough(args);
  };
  lab.sources = () => sourceReport(lab, root);

  lab.state = () => kernel.state();
  lab.events = () => kernel.log.events();
  lab.explain = (id) => kernel.explain(id);
  lab.verify = () => kernel.verify();

  // Sessions are not a new concept: seals already partition the log. This is
  // pure derivation — each seal closes the stretch since the previous one; a
  // trailing stretch without a seal is the open session.
  lab.sessions = () => {
    const events = kernel.log.events();
    const s = kernel.state();
    const names = (actor) => s.participants.get(actor)?.name ?? actor;
    const sessions = [];
    let from = 0;
    for (const e of events) {
      if (e.type !== "SEALED") continue;
      const span = events.slice(from, e.seq + 1);
      sessions.push({
        index: sessions.length + 1,
        from, to: e.seq,
        events: span.length,
        sealed: true,
        summary: e.payload.summary,
        by: names(e.provenance.actor),
        participants: [...new Set(span.map((ev) => names(ev.provenance.actor)))],
      });
      from = e.seq + 1;
    }
    if (from < events.length) {
      const span = events.slice(from);
      sessions.push({
        index: sessions.length + 1,
        from, to: events.length - 1,
        events: span.length,
        sealed: false,
        summary: null,
        by: null,
        participants: [...new Set(span.map((ev) => names(ev.provenance.actor)))],
      });
    }
    return sessions;
  };

  // A mechanical answer to "where am I, what happened, what is open?" —
  // everything an arriving Participant needs, derived, never curated.
  lab.status = () => {
    const s = kernel.state();
    const raw = s.seals.at(-1) ?? null;
    const lastSeal = raw ? { ...raw, by: s.participants.get(raw.by)?.name ?? raw.by } : null;
    return {
      record: file,
      events: kernel.log.length(),
      chainValid: kernel.verify(),
      participants: [...s.participants.values()].map(({ id, name, kind }) => ({ id, name, kind })),
      counts: {
        entities: s.entities.size, observations: s.observations.size,
        assertions: s.assertions.size, judgments: s.judgments.size,
        relations: s.relations.size, evidence: s.evidence.size, seals: s.seals.length,
      },
      openUnknowns: [...s.unknowns.values()]
        .filter((u) => u.status === "open")
        .map(({ id, question }) => ({ id, question })),
      lastSeal,
      unsealedEvents: kernel.log.length() - 1 - (lastSeal ? lastSeal.at : -1),
    };
  };

  return lab;
}
