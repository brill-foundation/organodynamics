// The backlog is a view over ordinary record objects — its whole lifecycle
// must leave nothing but entities, assertions, and superseded versions.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { openLaboratory } from "../../src/laboratory/laboratory.js";
import { deriveBacklog, addItem, setPriority, setStatus } from "../../src/laboratory/backlog.js";

test("backlog — add, reprioritize, close; every change keeps its history", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab = openLaboratory(dir);
  const me = lab.registerParticipant({ name: "engineer", kind: "ai", intention: "test" });
  const by = (intention) => ({ actor: me, intention });

  const a = addItem(lab, { title: "portable preservations", priority: 1, provenance: by("top of backlog") });
  const b = addItem(lab, { title: "cabinet grounding refs", priority: 2, provenance: by("second") });

  let items = deriveBacklog(lab);
  assert.deepEqual(items.map((i) => i.title), ["portable preservations", "cabinet grounding refs"]);

  // implementation taught us b matters more — reprioritize, with reasons in provenance
  setPriority(lab, b, 1, by("implementation evidence: needed first"));
  setPriority(lab, a, 2, by("displaced"));
  items = deriveBacklog(lab);
  assert.deepEqual(items.map((i) => i.title), ["cabinet grounding refs", "portable preservations"]);

  // close one; open items shrink but nothing disappears
  setStatus(lab, b, "done", by("implemented and verified"));
  items = deriveBacklog(lab);
  assert.equal(items.filter((i) => i.status === "open").length, 1);
  assert.equal(items.find((i) => i.id === b).status, "done");

  // the full priority history of b survives as superseded versions
  const priorityAssertion = items.find((i) => i.id === b).assertionIds.priority;
  const versions = lab.state().assertions.get(priorityAssertion).versions;
  assert.deepEqual(versions.map((v) => v.value), [2, 1]);

  // invalid moves are refused
  assert.throws(() => setStatus(lab, a, "later", by("nope")), /status must be/);
  assert.throws(() => setPriority(lab, a, 0, by("nope")), /integer/);
});
