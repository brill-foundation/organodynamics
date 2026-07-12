// The Laboratory — a passive persistence shell around the Kernel.
//
// Constitutional responsibility: preserve reality, nothing else
// (laboratory/PROTOCOL.md, passivity clause). The Laboratory does not
// orchestrate Participants, schedule work, or know who arrives next. It:
//
//   - replays the preserved record on open (refusing a tampered one),
//   - writes every new event through to an append-only JSONL file,
//   - answers questions (status, verify, explain) mechanically.
//
// Storage is replaceable: the Kernel never sees a file; this shell only turns
// events into lines and lines into events. Replace this file to replace
// storage — the record's meaning lives in the events, not here (Axiom 2, 10).
//
// Dependencies: node:fs, node:path, ../kernel/kernel.js.

import { readFileSync, appendFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { createKernel } from "../kernel/kernel.js";

const MUTATIONS = [
  "registerParticipant", "createEntity", "observe", "assert", "supersedeAssertion",
  "relate", "judge", "recordUnknown", "resolveUnknown", "attachEvidence", "seal",
];

export function openLaboratory(dir) {
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "log.jsonl");
  const history = existsSync(file)
    ? readFileSync(file, "utf8").split("\n").filter(Boolean).map((line) => JSON.parse(line))
    : [];
  const kernel = createKernel({ history }); // throws if the preserved chain fails verification

  let written = history.length;
  const preserve = () => {
    const events = kernel.log.events();
    if (events.length > written) {
      appendFileSync(file, events.slice(written).map((e) => JSON.stringify(e) + "\n").join(""));
      written = events.length;
    }
  };

  const lab = { dir, file };

  // Every mutation is preserved the moment it happens — quiet, continuous,
  // no ceremony (laboratory charter §3: Save has no ceremony).
  for (const m of MUTATIONS) {
    lab[m] = (...args) => {
      const result = kernel[m](...args);
      preserve();
      return result;
    };
  }

  lab.state = () => kernel.state();
  lab.events = () => kernel.log.events();
  lab.explain = (id) => kernel.explain(id);
  lab.verify = () => kernel.verify();

  // A mechanical answer to "where am I, what happened, what is open?" —
  // everything an arriving Participant needs, derived, never curated.
  lab.status = () => {
    const s = kernel.state();
    const lastSeal = s.seals.at(-1) ?? null;
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
