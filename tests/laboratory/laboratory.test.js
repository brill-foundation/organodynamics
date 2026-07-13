// The shell's own guarantees: sessions are pure derivation over seals, and
// the record admits only one chain tip when Participants overlap.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, appendFileSync, readFileSync } from "node:fs";
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

test("a malformed final line fails clearly and actionably, not with a raw SyntaxError", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab = openLaboratory(dir);
  const a = arrive(lab, "writer");
  lab.observe({ statement: "good work, preserved", provenance: by(a) });

  // simulate a crash mid-append: a partial, unterminated final line
  appendFileSync(lab.file, '{"seq":2,"type":"OBSERVATION_RECOR');

  let err;
  try { openLaboratory(dir); } catch (e) { err = e; }
  assert.ok(err, "opening a record with a malformed line must throw");
  assert.match(err.message, /not valid JSON/);
  assert.match(err.message, /TROUBLESHOOTING/); // points to recovery
  assert.doesNotMatch(err.message, /Unexpected|SyntaxError/); // not the raw parser error

  // a clean record with a trailing newline still loads normally
  const dir2 = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab2 = openLaboratory(dir2);
  arrive(lab2, "writer");
  assert.equal(readFileSync(lab2.file, "utf8").endsWith("\n"), true);
  assert.equal(openLaboratory(dir2).events().length, 1); // trailing blank line skipped, not an error
});
