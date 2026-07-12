// Preserve / Restore — the Place travels as one artifact (laboratory charter
// §3: Preserve packages the entire Place; Git is optional, preservation is
// not; and §8a: sovereign records interact by exchanging Preservations).
//
// A Preservation is a single self-contained JSON file: the full event history
// (the meaning), the chain tip it claims, and any sidecar documents found
// beside the record (arrival README, the Protocol) so the law travels with
// the place. Restore refuses to overwrite an existing record and refuses any
// preservation whose events fail chain verification — the same door the
// Laboratory itself guards.
//
// Dependencies: node:fs, node:path, ./laboratory.js.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { openLaboratory } from "./laboratory.js";

const FORMAT = "organodynamics-preservation";
const SIDECARS = ["README.md", "PROTOCOL.md"];

export function preserve(dir, outFile) {
  const lab = openLaboratory(dir);
  const events = lab.events();
  if (!events.length) throw new Error("nothing to preserve: the record is empty");
  if (!lab.verify()) throw new Error("refusing to preserve a record that fails verification");

  const docs = {};
  for (const name of SIDECARS) {
    for (const candidate of [join(dir, name), join(dir, "..", name)]) {
      if (existsSync(candidate)) { docs[name] = readFileSync(candidate, "utf8"); break; }
    }
  }

  const tip = events.at(-1);
  const artifact = {
    format: FORMAT,
    version: 1,
    preservedAt: new Date().toISOString(), // clock time: context, not meaning
    tip: { seq: tip.seq, hash: tip.hash },
    events,
    docs,
  };
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, JSON.stringify(artifact, null, 1) + "\n");
  return { file: outFile, events: events.length, tip: artifact.tip };
}

export function restore(file, dir) {
  const artifact = JSON.parse(readFileSync(file, "utf8"));
  if (artifact.format !== FORMAT) throw new Error(`not a preservation: ${file}`);
  if (!Array.isArray(artifact.events) || !artifact.events.length) {
    throw new Error("preservation carries no events");
  }
  const logFile = join(dir, "log.jsonl");
  if (existsSync(logFile)) {
    throw new Error(`refusing to overwrite an existing record at ${logFile} — restore into an empty place`);
  }
  const claimed = artifact.events.at(-1);
  if (!artifact.tip || claimed.hash !== artifact.tip.hash || claimed.seq !== artifact.tip.seq) {
    throw new Error("preservation tip does not match its own events");
  }

  mkdirSync(dir, { recursive: true });
  writeFileSync(logFile, artifact.events.map((e) => JSON.stringify(e) + "\n").join(""));
  for (const [name, text] of Object.entries(artifact.docs ?? {})) {
    writeFileSync(join(dir, name), text); // the law travels with the place
  }

  const lab = openLaboratory(dir); // throws if the restored chain fails verification
  if (!lab.verify()) throw new Error("restored record fails seal verification");
  return lab;
}
