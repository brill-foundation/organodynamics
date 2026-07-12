// Constitutional validation (Blueprint Part IV §36: the first tests validate
// constitutional behavior, not interface behavior). Each test names the axiom
// or primitive of the corpus it verifies.

import test from "node:test";
import assert from "node:assert/strict";
import { createKernel, derive } from "../../src/kernel/kernel.js";
import { mintIdentity, kindOf } from "../../src/kernel/identity.js";

const by = (actor, intention) => ({ actor, intention });
const adi = by("participant:adi", "test the constitutional kernel");

test("Axiom 1 — identity is permanent and never reassigned", () => {
  const k = createKernel();
  const id = k.createEntity({ kind: "Place", provenance: adi });
  const a = k.assert({ about: id, predicate: "name", value: "Laboratory", provenance: adi });
  k.supersedeAssertion(a, { value: "The Laboratory", provenance: adi });
  // the assertion's identity survived revision; the entity's survived everything
  assert.equal(k.state().assertions.get(a).id, a);
  assert.equal(k.state().entities.get(id).id, id);
  assert.notEqual(mintIdentity("entity"), mintIdentity("entity"));
  assert.equal(kindOf(id), "entity");
});

test("Axiom 3 — nothing constitutional ever disappears (supersede keeps every version)", () => {
  const k = createKernel();
  const e = k.createEntity({ kind: "Idea", provenance: adi });
  const a = k.assert({ about: e, predicate: "status", value: "draft", provenance: adi });
  k.supersedeAssertion(a, { value: "reviewed", provenance: adi });
  k.supersedeAssertion(a, { value: "integrated", provenance: adi });
  const versions = k.state().assertions.get(a).versions;
  assert.deepEqual(versions.map((v) => v.value), ["draft", "reviewed", "integrated"]);
  assert.deepEqual(versions.map((v) => v.status), ["superseded", "superseded", "current"]);
});

test("Axiom 4 — nothing changes without an Event; events are immutable and chained", () => {
  const k = createKernel();
  k.createEntity({ kind: "Question", provenance: adi });
  const [event] = k.log.events();
  assert.throws(() => { event.payload.kind = "tampered"; }, TypeError); // frozen
  assert.equal(k.log.verifyChain(), true);
  // mutating a derived snapshot must not touch constitutional state
  const snapshot = k.state();
  snapshot.entities.clear();
  assert.equal(k.state().entities.size, 1);
});

test("Axiom 5 — every statement is explainable from its event chain, with provenance", () => {
  const k = createKernel();
  const e = k.createEntity({ kind: "Experiment", provenance: by("participant:adi", "open an experiment") });
  const a = k.assert({ about: e, predicate: "hypothesis", value: "the table rotates", provenance: by("participant:claude", "record the hypothesis") });
  k.attachEvidence({ assertion: a, bearing: "supports", source: "laboratory/rotating-table.md", provenance: by("participant:claude", "cite the observation") });
  const explanation = k.explain(a);
  assert.equal(explanation.length, 2); // made + evidenced
  assert.ok(explanation.every((ev) => ev.provenance.actor && ev.provenance.intention));
});

test("Axiom 6 / P-012 — unknowns are objects, stay visible, and survive resolution", () => {
  const k = createKernel();
  const e = k.createEntity({ kind: "Specification", provenance: adi });
  const u = k.recordUnknown({ about: e, question: "which OIS rendition is authoritative?", provenance: adi });
  assert.equal(k.state().unknowns.get(u).status, "open");
  k.resolveUnknown(u, { resolution: "titled files primary", provenance: adi });
  const resolved = k.state().unknowns.get(u);
  assert.equal(resolved.status, "resolved");
  assert.equal(resolved.question, "which OIS rendition is authoritative?"); // the unknown is kept, not erased
});

test("Axiom 7 — evidence modifies confidence, never history or identity", () => {
  const k = createKernel();
  const e = k.createEntity({ kind: "Claim", provenance: adi });
  const a = k.assert({ about: e, predicate: "holds", value: true, provenance: adi });
  const before = k.state().assertions.get(a).versions;
  k.attachEvidence({ assertion: a, bearing: "contradicts", source: "an experiment", provenance: adi });
  const after = k.state().assertions.get(a);
  assert.deepEqual(after.versions, before); // history untouched
  assert.equal(after.id, a); // identity untouched
  assert.deepEqual(after.confidence.map((c) => c.bearing), ["contradicts"]);
});

test("Axiom 10 / P-006 — state is a deterministic pure replay of the log", () => {
  const k = createKernel();
  const e = k.createEntity({ kind: "Place", provenance: adi });
  const a = k.assert({ about: e, predicate: "sovereign", value: true, provenance: adi });
  k.relate({ from: e, type: "contains", to: e, provenance: adi });
  k.supersedeAssertion(a, { value: "still true", provenance: adi });
  const events = k.log.events();
  assert.deepEqual(derive(events), derive(events)); // deterministic
  assert.deepEqual(derive(events), k.state()); // kernel state IS the replay
});

test("P-008 — an event without actor or intention is constitutionally invalid", () => {
  const k = createKernel();
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { actor: "someone" } }), /intention/);
  assert.throws(() => k.createEntity({ kind: "Idea", provenance: { intention: "sneak in" } }), /actor/);
});

test("P-004 — relations are first-class, independently referenceable objects", () => {
  const k = createKernel();
  const a = k.createEntity({ kind: "Journal", provenance: adi });
  const b = k.createEntity({ kind: "Cabinet", provenance: adi });
  const r = k.relate({ from: a, type: "deposits-into", to: b, provenance: adi });
  assert.equal(kindOf(r), "relation");
  assert.equal(k.state().relations.get(r).type, "deposits-into");
  assert.ok(k.explain(r).length > 0);
});
