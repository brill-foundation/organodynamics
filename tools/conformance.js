#!/usr/bin/env node
// Public, executable constitutional conformance (CAB-007 §6).
//
//   node tools/conformance.js [target]
//
// target: a record directory (default laboratory/record), a log.jsonl file,
// or a preservation .json — the checker judges the ARTIFACT, independent of
// whatever implementation produced it. Exit 0 = conforms, 1 = does not.

import { readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { checkRecord } from "../src/conformance/check.js";

const target = process.argv[2] ?? "laboratory/record";

let events;
if (existsSync(target) && statSync(target).isDirectory()) {
  events = readFileSync(join(target, "log.jsonl"), "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
} else if (target.endsWith(".jsonl")) {
  events = readFileSync(target, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
} else {
  const artifact = JSON.parse(readFileSync(target, "utf8"));
  if (artifact.format !== "organodynamics-preservation") {
    console.error(`conformance: ${target} is neither a record directory, a .jsonl log, nor a preservation`);
    process.exit(2);
  }
  events = artifact.events;
}

const { ok, checks } = checkRecord(events);
for (const c of checks) {
  console.log(`${c.ok ? "✓" : "✗"} ${c.id}  ${c.title}`);
  for (const f of c.failures.slice(0, 5)) console.log(`     #${f.seq}: ${f.detail}`);
  if (c.failures.length > 5) console.log(`     … and ${c.failures.length - 5} more`);
}
console.log(ok ? `\nCONFORMS — ${events.length} events, all checks passed` : "\nDOES NOT CONFORM");
process.exit(ok ? 0 : 1);
