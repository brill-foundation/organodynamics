// Preserve/Restore — the Place travels as one artifact and arrives intact,
// or it does not arrive at all.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { openLaboratory } from "../../src/laboratory/laboratory.js";
import { preserve, restore } from "../../src/laboratory/preserve.js";

function seededRecord() {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab = openLaboratory(dir);
  const me = lab.registerParticipant({ name: "traveler", kind: "ai", intention: "test" });
  const by = (intention) => ({ actor: me, intention });
  lab.observe({ statement: "worth carrying", provenance: by("make content") });
  lab.seal({ summary: "packed", provenance: by("depart") });
  writeFileSync(join(dir, "README.md"), "arrival doc travels too\n");
  return { dir, lab };
}

test("preserve → restore — a sovereign roundtrip preserves meaning, history, and law", () => {
  const { dir, lab } = seededRecord();
  const artifactFile = join(mkdtempSync(join(tmpdir(), "od-out-")), "p.json");
  const result = preserve(dir, artifactFile);
  assert.equal(result.events, 3);

  const target = join(mkdtempSync(join(tmpdir(), "od-new-")), "place");
  const restored = restore(artifactFile, target);
  assert.ok(restored.verify());
  assert.deepEqual(restored.events(), lab.events()); // identical history, hashes included
  assert.equal(readFileSync(join(target, "README.md"), "utf8"), "arrival doc travels too\n");
  // the restored place is alive, not a museum copy: work continues on it
  const next = restored.registerParticipant({ name: "next", kind: "human", intention: "continue elsewhere" });
  assert.ok(next);
});

test("restore refuses a tampered preservation and never overwrites a record", () => {
  const { dir } = seededRecord();
  const artifactFile = join(mkdtempSync(join(tmpdir(), "od-out-")), "p.json");
  preserve(dir, artifactFile);

  // never overwrite an existing place
  assert.throws(() => restore(artifactFile, dir), /refusing to overwrite/);

  // a forged event inside the artifact breaks the chain → refused at the door
  const artifact = JSON.parse(readFileSync(artifactFile, "utf8"));
  artifact.events[1].payload = { ...artifact.events[1].payload, statement: "forged" };
  writeFileSync(artifactFile, JSON.stringify(artifact));
  assert.throws(
    () => restore(artifactFile, join(mkdtempSync(join(tmpdir(), "od-new-")), "place")),
    /chain verification/
  );
});
