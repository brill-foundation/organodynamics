// Protocol conformance (laboratory/PROTOCOL.md, frozen 2026-07-12).
// One suite per obligation, plus the mandate's success criterion: a later
// Participant continues solely from what was preserved.

import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { createKernel } from "../../src/kernel/kernel.js";
import { openLaboratory } from "../../src/laboratory/laboratory.js";

const arrive = (k, name = "tester", kind = "script") =>
  k.registerParticipant({ name, kind, intention: "protocol conformance test" });
const by = (actor) => ({ actor, intention: "test the protocol" });

test("Obligation 1 — Identity: unregistered participants cannot contribute", () => {
  const k = createKernel();
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: by("od:participant:nobody") }), /obligation 1/);
  const me = arrive(k);
  const e = k.createEntity({ kind: "Idea", provenance: by(me) });
  assert.equal(k.state().participants.get(me).name, "tester");
  assert.ok(e);
});

test("Obligation 2 — Grounding: no assertion floats free; conjecture must be explicit", () => {
  const k = createKernel();
  const me = arrive(k);
  const e = k.createEntity({ kind: "Claim", provenance: by(me) });
  // silent assertion refused
  assert.throws(() => k.assert({ about: e, predicate: "true", value: 1, provenance: by(me) }), /obligation 2/);
  // grounding in a nonexistent observation refused
  assert.throws(
    () => k.assert({ about: e, predicate: "true", value: 1, grounding: { kind: "observation", ref: "od:observation:missing" }, provenance: by(me) }),
    /not found/
  );
  // grounding in a real observation accepted
  const o = k.observe({ statement: "the chain verified after restart", provenance: by(me) });
  const a1 = k.assert({ about: e, predicate: "persists", value: true, grounding: { kind: "observation", ref: o }, provenance: by(me) });
  // explicit conjecture accepted — being explicit IS the obligation
  const a2 = k.assert({ about: e, predicate: "scales", value: "unknown", grounding: { kind: "conjecture" }, provenance: by(me) });
  assert.equal(k.state().assertions.get(a1).grounding.kind, "observation");
  assert.equal(k.state().assertions.get(a2).grounding.kind, "conjecture");
});

test("Obligation 3 — Provenance: no event exists without actor and intention", () => {
  const k = createKernel();
  const me = arrive(k);
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { actor: me } }), /intention/);
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { intention: "sneak" } }), /actor/);
});

test("Obligation 4 — Explicit Judgment: a conclusion without reasoning is invalid", () => {
  const k = createKernel();
  const me = arrive(k);
  const o = k.observe({ statement: "two derivations differed in event granularity", provenance: by(me) });
  assert.throws(
    () => k.judge({ conclusion: "granularity is unconstrained", reasoning: "  ", basis: [o], provenance: by(me) }),
    /obligation 4/
  );
  const j = k.judge({
    conclusion: "granularity is unconstrained by the corpus",
    reasoning: "the corpus fixes invariants, not event shapes; both derivations verified",
    basis: [o],
    provenance: by(me),
  });
  assert.deepEqual(k.state().judgments.get(j).basis, [o]);
});

test("Obligation 5 — Sealing: departure is an act; a seal binds the chain it closes", () => {
  const k = createKernel();
  const me = arrive(k);
  k.createEntity({ kind: "Session", provenance: by(me) });
  const s = k.seal({ summary: "first conformance session", provenance: by(me) });
  assert.ok(k.verify());
  assert.equal(k.state().seals.at(-1).id, s);
  // sealing with nothing new to close is refused — an empty departure says nothing
  assert.throws(() => k.seal({ summary: "again", provenance: by(me) }), /nothing to seal/);
});

test("Persistence — the record survives restart; a tampered record is refused", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));
  const lab1 = openLaboratory(dir);
  const me = arrive(lab1);
  const e = lab1.createEntity({ kind: "Place", provenance: by(me) });
  lab1.seal({ summary: "work preserved", provenance: by(me) });

  const lab2 = openLaboratory(dir); // restart
  assert.ok(lab2.verify());
  assert.equal(lab2.state().entities.get(e).kind, "Place");
  assert.equal(lab2.status().lastSeal.summary, "work preserved");

  // tamper with the preserved record → the Laboratory refuses to adopt it
  const file = join(dir, "log.jsonl");
  const lines = readFileSync(file, "utf8").trim().split("\n");
  const forged = JSON.parse(lines[1]);
  forged.payload = { ...forged.payload, kind: "Throne" };
  lines[1] = JSON.stringify(forged);
  writeFileSync(file, lines.join("\n") + "\n");
  assert.throws(() => openLaboratory(dir), /chain verification/);
});

test("Success criterion — a later Participant continues solely from what was preserved", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-lab-"));

  // First participant works and departs.
  const lab1 = openLaboratory(dir);
  const first = arrive(lab1, "first", "ai");
  const topic = lab1.createEntity({ kind: "Question", provenance: by(first) });
  lab1.recordUnknown({ about: topic, question: "does the table rotate?", provenance: by(first) });
  lab1.seal({ summary: "opened the question", provenance: by(first) });

  // A second, independent participant arrives later with no shared context —
  // only the record. It discovers the open unknown, grounds an answer, seals.
  const lab2 = openLaboratory(dir);
  const found = lab2.status().openUnknowns;
  assert.equal(found.length, 1);
  const second = arrive(lab2, "second", "script");
  const o = lab2.observe({ about: found[0].id, statement: "rotation confirmed at the table", provenance: by(second) });
  lab2.resolveUnknown(found[0].id, { resolution: "yes — observed", provenance: by(second) });
  lab2.judge({
    about: found[0].id,
    conclusion: "the question is answered",
    reasoning: "a grounded observation resolved the open unknown left by the first participant",
    basis: [o],
    provenance: by(second),
  });
  lab2.seal({ summary: "continued and closed the first participant's question", provenance: by(second) });

  // The record tells the whole story to a third arrival.
  const lab3 = openLaboratory(dir);
  assert.ok(lab3.verify());
  assert.equal(lab3.status().openUnknowns.length, 0);
  assert.equal(lab3.state().seals.length, 2);
  assert.equal(lab3.status().participants.length, 2);
});
