#!/usr/bin/env node
// Read-only discovery for arriving Participants (human, AI, or script):
//
//   node tools/lab.js status  [dir]   — where am I, what happened, what is open
//   node tools/lab.js verify  [dir]   — mechanical integrity check (exit 0/1)
//   node tools/lab.js history [dir]   — every event, oldest first
//
// dir defaults to laboratory/record. Writing to the record is done through
// the API (src/laboratory/laboratory.js), under the five obligations.

import { openLaboratory } from "../src/laboratory/laboratory.js";

const [cmd = "status", dir = "laboratory/record"] = process.argv.slice(2);
const lab = openLaboratory(dir);

if (cmd === "status") {
  console.log(JSON.stringify(lab.status(), null, 2));
} else if (cmd === "verify") {
  const ok = lab.verify();
  console.log(ok ? "chain and seals verify" : "VERIFICATION FAILED");
  process.exit(ok ? 0 : 1);
} else if (cmd === "history") {
  for (const e of lab.events()) {
    const summary =
      e.payload.summary ?? e.payload.statement ?? e.payload.conclusion ??
      e.payload.question ?? e.payload.name ?? e.payload.predicate ?? e.payload.kind ?? "";
    console.log(`#${e.seq}  ${e.type}  ${summary ? JSON.stringify(summary) + "  " : ""}[${e.provenance.actor} — ${e.provenance.intention}]`);
  }
} else {
  console.error(`unknown command: ${cmd} (expected status|verify|history)`);
  process.exit(2);
}
