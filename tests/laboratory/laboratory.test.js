// The shell's own guarantees: sessions are pure derivation over seals, and
// the record admits only one chain tip when Participants overlap.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { openLaboratory } from "../../src/laboratory/laboratory.js";

const arrive = (lab, name) => lab.registerParticipant({ name, kind: "script", intention: "test" });
const by = (actor) => ({ actor, intention: "test the shell" });

test("sessions — seals partition the log; a trailing stretch is the open session", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab = openLaboratory(dir);
  const a = arrive(lab, "first");
  lab.observe({ statement: "one", provenance: by(a) });
  lab.seal({ summary: "session one", provenance: by(a) });
  const b = arrive(lab, "second");
  lab.observe({ statement: "two", provenance: by(b) });
  lab.seal({ summary: "session two", provenance: by(b) });
  lab.observe({ statement: "three", provenance: by(b) });

  const sessions = lab.sessions();
  assert.equal(sessions.length, 3);
  assert.deepEqual(sessions.map((s) => s.sealed), [true, true, false]);
  assert.equal(sessions[0].summary, "session one");
  assert.equal(sessions[1].by, "second");
  assert.deepEqual(sessions[1].participants, ["second"]);
  assert.equal(sessions[2].summary, null);
  // spans cover the whole log with no gaps
  assert.equal(sessions[0].from, 0);
  assert.equal(sessions[2].to, lab.events().length - 1);
});

test("tip guard — a Participant cannot write over another's unseen work", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab1 = openLaboratory(dir);
  const a = arrive(lab1, "first");

  const lab2 = openLaboratory(dir); // second participant opens the same record
  const lab1More = lab1.observe({ statement: "seen only by first", provenance: by(a) });
  assert.ok(lab1More);

  // lab2's view is now behind the file; writing would fork the chain
  assert.throws(() => arrive(lab2, "second"), /reopen the Laboratory/);

  // recovery is honest and simple: reopen and continue on the new tip
  const lab3 = openLaboratory(dir);
  const c = arrive(lab3, "second");
  assert.ok(c);
  assert.ok(lab3.verify());
  assert.equal(lab3.events().length, 3);
});
