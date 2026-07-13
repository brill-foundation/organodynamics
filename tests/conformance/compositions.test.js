// OCS-000 canonical compositions, executable. The Constitutional Alphabet
// defines complex constructs as compositions of primitives and rules that no
// construct introduces new constitutional meaning. Each test builds one
// canonical composition from kernel primitives alone and checks the OCS-000
// conformance criteria that bind it. If a composition cannot be expressed,
// the specification (or the kernel) is incomplete — that would be a finding,
// not a test to delete.

import test from "node:test";
import assert from "node:assert/strict";
import { createKernel } from "../../src/kernel/kernel.js";

const setup = () => {
  const k = createKernel();
  const me = k.registerParticipant({ name: "composer", kind: "ai", intention: "compose OCS-000 constructs" });
  const by = (intention) => ({ actor: me, intention });
  return { k, me, by };
};

test("Place = Existence + Identity + Context + Memory + Relations + Continuity", () => {
  const { k, by } = setup();
  const place = k.createEntity({ kind: "Place", provenance: by("bring a place into existence") }); // Existence + Identity
  const o = k.observe({ about: place, statement: "one folder, opens offline", provenance: by("context from reality") });
  k.assert({ about: place, predicate: "context", value: "sovereign", grounding: { kind: "observation", ref: o }, provenance: by("record its context") }); // Context
  const inner = k.createEntity({ kind: "Object", provenance: by("furnish it") });
  k.relate({ from: place, type: "contains", to: inner, provenance: by("relate place to furniture") }); // Relations
  // Memory: the events themselves; Continuity: identity survives full replay into a new kernel
  const revived = createKernel({ history: k.log.events() });
  assert.equal(revived.state().entities.get(place).id, place);
  assert.deepEqual(revived.state(), k.state());
});

test("Participant = Existence + Identity + Intention + Context (+ capability as implementation concern)", () => {
  const { k } = setup();
  const [registration] = k.log.events();
  assert.equal(registration.subject, registration.provenance.actor); // identity self-declared
  assert.ok(registration.provenance.intention); // Intention
  assert.equal(registration.payload.kind, "ai"); // capability hint — context, not standing
  // constitutional status equal: a human registers through the identical act
  const other = k.registerParticipant({ name: "peer", kind: "human", intention: "arrive" });
  assert.equal(k.log.events().at(-1).type, registration.type);
  assert.notEqual(other, registration.subject); // distinct permanent identities
});

test("Contribution = Event + Intention + Context + Interpretation + Identity + Memory", () => {
  const { k, by } = setup();
  const e = k.createEntity({ kind: "Idea", provenance: by("contribute an idea") });
  const contribution = k.log.events().at(-1);
  assert.equal(typeof contribution.seq, "number"); // Event in constitutional time
  assert.ok(contribution.provenance.intention); // Intention
  assert.equal(contribution.subject, e); // Identity
  assert.ok(Object.isFrozen(contribution)); // Memory: immutable once made
  // Interpretation rides on the contribution as a grounded assertion
  k.assert({ about: e, predicate: "meaning", value: "a first reading", grounding: { kind: "conjecture" }, provenance: by("interpret the contribution") });
  assert.ok(k.explain(e).length >= 2); // reconstructable from its events
});

test("Experiment = Question + Intention + Events + Observations + Evidence + Memory — exists to reduce uncertainty", () => {
  const { k, by } = setup();
  const exp = k.createEntity({ kind: "Experiment", provenance: by("open an experiment") });
  const q = k.recordUnknown({ about: exp, question: "does the chain survive restart?", provenance: by("state the question") }); // Question
  const o1 = k.observe({ about: exp, statement: "restarted; chain verified", provenance: by("run the experiment") }); // Observations
  const a = k.assert({ about: exp, predicate: "survives-restart", value: true, grounding: { kind: "observation", ref: o1 }, provenance: by("interpret the run") });
  k.attachEvidence({ assertion: a, bearing: "supports", source: "the run itself", provenance: by("attach the evidence") }); // Evidence
  k.resolveUnknown(q, { resolution: "yes — observed", provenance: by("reduce the uncertainty") });
  const u = k.state().unknowns.get(q);
  assert.equal(u.status, "resolved"); // uncertainty reduced…
  assert.ok(u.question); // …but the question is memory, not erased (P-012)
});

test("Knowledge = Observations + Interpretations + Evidence + Memory + Continuity — and SHALL remain revisable", () => {
  const { k, by } = setup();
  const topic = k.createEntity({ kind: "Topic", provenance: by("open a topic") });
  const o = k.observe({ about: topic, statement: "first light", provenance: by("observe") });
  const a = k.assert({ about: topic, predicate: "reading", value: "initial", grounding: { kind: "observation", ref: o }, provenance: by("interpret") });
  k.attachEvidence({ assertion: a, bearing: "contradicts", source: "second look", provenance: by("challenge it") });
  k.supersedeAssertion(a, { value: "revised", provenance: by("revise under evidence") }); // revisable
  const knowledge = k.state().assertions.get(a);
  assert.equal(knowledge.id, a); // Continuity
  assert.deepEqual(knowledge.versions.map((v) => v.value), ["initial", "revised"]); // Memory of every reading
  assert.equal(knowledge.confidence.length, 1); // Evidence moved confidence, not history (Axiom 7)
});

test("Decision = Understanding + Commitment + Context + Expected Review Conditions — SHALL remain explainable", () => {
  const { k, by } = setup();
  const o = k.observe({ statement: "two storage options behave identically under replay", provenance: by("gather grounds") });
  const understanding = k.judge({
    conclusion: "either storage serves; choose the simpler",
    reasoning: "replay equivalence observed; simplicity is the tiebreaker the blueprint prescribes",
    basis: [o],
    provenance: by("synthesize understanding"),
  }); // Understanding
  const decision = k.createEntity({ kind: "Decision", provenance: by("commit to act") });
  const commitment = k.assert({
    about: decision, predicate: "commitment", value: "adopt JSONL storage",
    grounding: { kind: "derivation", ref: [understanding] }, // Commitment references its Understanding
    provenance: by("record the commitment"),
  });
  k.assert({
    about: decision, predicate: "review-when", value: "if a second implementation needs a different medium",
    grounding: { kind: "conjecture" }, provenance: by("state expected review conditions"),
  });
  // revisable, never truth: the commitment can be superseded without erasing it
  k.supersedeAssertion(commitment, { value: "adopt JSONL storage; revisit at scale", provenance: by("revise the commitment") });
  const chain = k.explain(decision);
  assert.ok(chain.length >= 3); // explainable end to end
  assert.ok(chain.every((ev) => ev.provenance.intention));
});
