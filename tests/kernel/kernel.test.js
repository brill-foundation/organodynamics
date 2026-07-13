// Constitutional validation (Blueprint Part IV §36: the first tests validate
// constitutional behavior, not interface behavior). Each test names the axiom
// or primitive of the corpus it verifies. Updated 2026-07-12 for the frozen
// Laboratory Protocol: actors register (obligation 1), assertions declare
// grounding (obligation 2) — the axioms themselves are unchanged.

import test from "node:test";
import assert from "node:assert/strict";
import { createKernel, derive } from "../../src/kernel/kernel.js";
import { mintIdentity, kindOf } from "../../src/kernel/identity.js";

const by = (actor, intention = "test the constitutional kernel") => ({ actor, intention });
const conjecture = { kind: "conjecture" };
const setup = () => {
  const k = createKernel();
  const me = k.registerParticipant({ name: "adi", kind: "human", intention: "test the kernel" });
  return { k, me };
};

test("Axiom 1 — identity is permanent and never reassigned", () => {
  const { k, me } = setup();
  const id = k.createEntity({ kind: "Place", provenance: by(me) });
  const a = k.assert({ about: id, predicate: "name", value: "Laboratory", grounding: conjecture, provenance: by(me) });
  k.supersedeAssertion(a, { value: "The Laboratory", provenance: by(me) });
  // the assertion's identity survived revision; the entity's survived everything
  assert.equal(k.state().assertions.get(a).id, a);
  assert.equal(k.state().entities.get(id).id, id);
  assert.notEqual(mintIdentity("entity"), mintIdentity("entity"));
  assert.equal(kindOf(id), "entity");
});

test("Axiom 3 — nothing constitutional ever disappears (supersede keeps every version)", () => {
  const { k, me } = setup();
  const e = k.createEntity({ kind: "Idea", provenance: by(me) });
  const a = k.assert({ about: e, predicate: "status", value: "draft", grounding: conjecture, provenance: by(me) });
  k.supersedeAssertion(a, { value: "reviewed", provenance: by(me) });
  k.supersedeAssertion(a, { value: "integrated", provenance: by(me) });
  const versions = k.state().assertions.get(a).versions;
  assert.deepEqual(versions.map((v) => v.value), ["draft", "reviewed", "integrated"]);
  assert.deepEqual(versions.map((v) => v.status), ["superseded", "superseded", "current"]);
});

test("Axiom 4 — nothing changes without an Event; events are immutable and chained", () => {
  const { k, me } = setup();
  k.createEntity({ kind: "Question", provenance: by(me) });
  const [event] = k.log.events();
  assert.throws(() => { event.payload.name = "tampered"; }, TypeError); // frozen
  assert.equal(k.log.verifyChain(), true);
  // mutating a derived snapshot must not touch constitutional state
  const snapshot = k.state();
  snapshot.entities.clear();
  assert.equal(k.state().entities.size, 1);
});

test("Axiom 5 — every statement is explainable from its event chain, with provenance", () => {
  const k = createKernel();
  const adi = k.registerParticipant({ name: "adi", kind: "human", intention: "open an experiment" });
  const claude = k.registerParticipant({ name: "claude", kind: "ai", intention: "record findings" });
  const e = k.createEntity({ kind: "Experiment", provenance: by(adi, "open an experiment") });
  const a = k.assert({
    about: e, predicate: "hypothesis", value: "the table rotates",
    grounding: { kind: "source", ref: "laboratory/rotating-table.md" },
    provenance: by(claude, "record the hypothesis"),
  });
  k.attachEvidence({ assertion: a, bearing: "supports", source: "laboratory/rotating-table.md", provenance: by(claude, "cite the observation") });
  const explanation = k.explain(a);
  assert.equal(explanation.length, 2); // made + evidenced
  assert.ok(explanation.every((ev) => ev.provenance.actor && ev.provenance.intention));
});

test("Axiom 6 / P-012 — unknowns are objects, stay visible, and survive resolution", () => {
  const { k, me } = setup();
  const e = k.createEntity({ kind: "Specification", provenance: by(me) });
  const u = k.recordUnknown({ about: e, question: "which OIS rendition is authoritative?", provenance: by(me) });
  assert.equal(k.state().unknowns.get(u).status, "open");
  k.resolveUnknown(u, { resolution: "titled files primary", provenance: by(me) });
  const resolved = k.state().unknowns.get(u);
  assert.equal(resolved.status, "resolved");
  assert.equal(resolved.question, "which OIS rendition is authoritative?"); // the unknown is kept, not erased
});

test("Axiom 7 — evidence modifies confidence, never history or identity", () => {
  const { k, me } = setup();
  const e = k.createEntity({ kind: "Claim", provenance: by(me) });
  const a = k.assert({ about: e, predicate: "holds", value: true, grounding: conjecture, provenance: by(me) });
  const before = k.state().assertions.get(a).versions;
  k.attachEvidence({ assertion: a, bearing: "contradicts", source: "an experiment", provenance: by(me) });
  const after = k.state().assertions.get(a);
  assert.deepEqual(after.versions, before); // history untouched
  assert.equal(after.id, a); // identity untouched
  assert.deepEqual(after.confidence.map((c) => c.bearing), ["contradicts"]);
});

test("Axiom 10 / P-006 — state is a deterministic pure replay of the log", () => {
  const { k, me } = setup();
  const e = k.createEntity({ kind: "Place", provenance: by(me) });
  const a = k.assert({ about: e, predicate: "sovereign", value: true, grounding: conjecture, provenance: by(me) });
  k.relate({ from: e, type: "contains", to: e, provenance: by(me) });
  k.supersedeAssertion(a, { value: "still true", provenance: by(me) });
  const events = k.log.events();
  assert.deepEqual(derive(events), derive(events)); // deterministic
  assert.deepEqual(derive(events), k.state()); // kernel state IS the replay
});

test("P-008 — an event without actor or intention is constitutionally invalid", () => {
  const { k, me } = setup();
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { actor: me } }), /intention/);
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { intention: "sneak in" } }), /actor/);
});

test("P-004 — relations are first-class, independently referenceable objects", () => {
  const { k, me } = setup();
  const a = k.createEntity({ kind: "Journal", provenance: by(me) });
  const b = k.createEntity({ kind: "Cabinet", provenance: by(me) });
  const r = k.relate({ from: a, type: "deposits-into", to: b, provenance: by(me) });
  assert.equal(kindOf(r), "relation");
  assert.equal(k.state().relations.get(r).type, "deposits-into");
  assert.ok(k.explain(r).length > 0);
});
