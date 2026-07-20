#!/usr/bin/env node
// The Laboratory's status report — proprioception on request (RFC-005).
//
//   node tools/report.js                 human-readable report to stdout
//   node tools/report.js --json          the same facts, machine-readable
//   node tools/report.js --keep --as <participant> --because "<intention>"
//                                        additionally archive the snapshot
//                                        under laboratory/reports/ and record
//                                        an observation pointing at it
//
// Reading is free and side-effect-free: no identity needed, nothing written,
// and the report is derived — regenerate it whenever asked. Only --keep
// writes, and therefore only --keep needs a Participant and passes the same
// habitat guard as every other write (never extend a stale or forked copy).
// The Laboratory never runs this itself: reports are generated when a
// Participant asks, per the passivity clause.

import { parseArgs } from "node:util";
import { gatherReport, renderReport, keepReport } from "../src/laboratory/report.js";
import { inspectHabitat } from "../src/laboratory/habitat.js";

const { values: opt } = parseArgs({
  options: {
    dir: { type: "string", default: "laboratory/record" },
    json: { type: "boolean", default: false },
    keep: { type: "boolean", default: false },
    as: { type: "string" },
    because: { type: "string" },
  },
});

const fail = (msg) => { console.error(`report: ${msg}`); process.exit(2); };

const report = gatherReport(opt.dir);
console.log(opt.json ? JSON.stringify(report, null, 2) : renderReport(report));

if (opt.keep) {
  if (!opt.as) fail('--keep writes to the Record and needs --as <participant name or id>');
  if (!opt.because) fail('--keep needs --because "<intention>"');
  const h = inspectHabitat(opt.dir);
  if (h.habitat === "git" && (h.extenders?.length || h.divergent?.length)) {
    fail("refusing to archive from a stale or forked habitat — the same rule as every write; continue from the true tip first");
  }
  const { file, observation } = keepReport(report, opt.dir, {
    provenance: { actor: opt.as, intention: opt.because },
  });
  console.log(`\nkept ${file}\nobserved ${observation}`);
}
