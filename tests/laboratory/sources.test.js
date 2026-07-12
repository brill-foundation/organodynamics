// Obligation 2 at the boundary: checkable source schemes must resolve at
// write time; free citations pass but are never reported as verified.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { openLaboratory } from "../../src/laboratory/laboratory.js";

function world() {
  const root = mkdtempSync(join(tmpdir(), "od-root-"));
  mkdirSync(join(root, "cabinet"));
  writeFileSync(join(root, "cabinet", "catalog.json"), JSON.stringify(["real.md"]));
  writeFileSync(join(root, "cabinet", "real.md"), "---\nid: CAB-042\ntitle: Real\n---\nbody\n");
  writeFileSync(join(root, "notes.md"), "a real file\n");
  const lab = openLaboratory(join(root, "record"), { root });
  const me = lab.registerParticipant({ name: "writer", kind: "script", intention: "test sources" });
  const by = { actor: me, intention: "test source grounding" };
  const e = lab.createEntity({ kind: "Claim", provenance: by });
  return { lab, by, e };
}

test("cabinet: refs resolve against catalog + declared frontmatter id, or are refused", () => {
  const { lab, by, e } = world();
  const ok = lab.assert({ about: e, predicate: "cites", value: 1, grounding: { kind: "source", ref: "cabinet:CAB-042" }, provenance: by });
  assert.ok(ok);
  assert.throws(
    () => lab.assert({ about: e, predicate: "cites", value: 2, grounding: { kind: "source", ref: "cabinet:CAB-999" }, provenance: by }),
    /obligation 2.*CAB-999/s
  );
});

test("file: refs must exist under the root; free citations pass but stay unchecked", () => {
  const { lab, by, e } = world();
  lab.assert({ about: e, predicate: "reads", value: 1, grounding: { kind: "source", ref: "file:notes.md" }, provenance: by });
  assert.throws(
    () => lab.assert({ about: e, predicate: "reads", value: 2, grounding: { kind: "source", ref: "file:missing.md" }, provenance: by }),
    /obligation 2/
  );
  // a book citation is legal — checkability is not a precondition of honesty
  lab.assert({ about: e, predicate: "echoes", value: 3, grounding: { kind: "source", ref: "Fowler, Event Sourcing (2005)" }, provenance: by });

  const report = lab.sources();
  assert.deepEqual(
    report.map((r) => [r.scheme, r.ok]).sort(),
    [["citation", null], ["file", true]].sort()
  );
});

test("the reader's report re-checks against reality NOW, not against write time", () => {
  const { lab, by, e } = world();
  lab.assert({ about: e, predicate: "cites", value: 1, grounding: { kind: "source", ref: "cabinet:CAB-042" }, provenance: by });
  // reality changes after writing: the artifact is renamed out of the catalog
  writeFileSync(join(lab.dir, "..", "cabinet", "catalog.json"), JSON.stringify([]));
  const report = lab.sources();
  assert.equal(report[0].ok, false); // the report tells the truth of today
});
