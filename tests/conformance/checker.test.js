// The checker must accept what the kernel produces and reject what a weaker
// implementation might produce: records that are chain-valid but violate the
// obligations. We forge those by writing through the raw log (which checks
// only provenance shape and hashes), bypassing the kernel's protocol
// enforcement — exactly what a nonconforming implementation would emit.

import test from "node:test";
import assert from "node:assert/strict";
import { createKernel } from "../../src/kernel/kernel.js";
import { createLog } from "../../src/kernel/log.js";
import { checkRecord } from "../../src/conformance/check.js";

test("a kernel-produced record conforms on all checks", () => {
  const k = createKernel();
  const me = k.registerParticipant({ name: "producer", kind: "script", intention: "produce a record" });
  const by = (intention) => ({ actor: me, intention });
  const e = k.createEntity({ kind: "Thing", provenance: by("create") });
  const o = k.observe({ about: e, statement: "seen", provenance: by("observe") });
  const a = k.assert({ about: e, predicate: "is", value: 1, grounding: { kind: "observation", ref: o }, provenance: by("interpret") });
  k.judge({ conclusion: "fine", reasoning: "grounded observation", basis: [o, a], provenance: by("conclude") });
  k.seal({ summary: "done", provenance: by("depart") });
  const { ok, checks } = checkRecord(k.log.events());
  assert.ok(ok, JSON.stringify(checks.filter((c) => !c.ok)));
});

test("chain-valid records that violate the obligations are rejected, per obligation", () => {
  // C4 — an unregistered actor acting
  let log = createLog();
  log.append({ type: "ENTITY_CREATED", subject: "od:entity:x", payload: { kind: "Thing" }, provenance: { actor: "od:participant:ghost", intention: "sneak" } });
  let result = checkRecord(log.events());
  assert.equal(result.ok, false);
  assert.equal(result.checks.find((c) => c.id === "C4").ok, false);

  // C5 — an assertion without grounding
  log = createLog();
  log.append({ type: "PARTICIPANT_REGISTERED", subject: "od:participant:p", payload: { name: "p", kind: "script" }, provenance: { actor: "od:participant:p", intention: "arrive" } });
  log.append({ type: "ENTITY_CREATED", subject: "od:entity:e", payload: { kind: "Thing" }, provenance: { actor: "od:participant:p", intention: "create" } });
  log.append({ type: "ASSERTION_MADE", subject: "od:assertion:a", payload: { about: "od:entity:e", predicate: "is", value: 1 }, provenance: { actor: "od:participant:p", intention: "float free" } });
  result = checkRecord(log.events());
  assert.equal(result.checks.find((c) => c.id === "C5").ok, false);

  // C6 — a judgment without reasoning
  log = createLog();
  log.append({ type: "PARTICIPANT_REGISTERED", subject: "od:participant:p", payload: { name: "p", kind: "script" }, provenance: { actor: "od:participant:p", intention: "arrive" } });
  log.append({ type: "JUDGMENT_RECORDED", subject: "od:judgment:j", payload: { conclusion: "because I said so", basis: [] }, provenance: { actor: "od:participant:p", intention: "conclude" } });
  result = checkRecord(log.events());
  assert.equal(result.checks.find((c) => c.id === "C6").ok, false);

  // C8 — a seal claiming a hash it does not bind
  log = createLog();
  log.append({ type: "PARTICIPANT_REGISTERED", subject: "od:participant:p", payload: { name: "p", kind: "script" }, provenance: { actor: "od:participant:p", intention: "arrive" } });
  log.append({ type: "SEALED", subject: "od:seal:s", payload: { summary: "forged", sealedThrough: 0, chainHash: "not-the-hash" }, provenance: { actor: "od:participant:p", intention: "seal" } });
  result = checkRecord(log.events());
  assert.equal(result.checks.find((c) => c.id === "C8").ok, false);

  // C1 — an invented event type (a hidden primitive)
  log = createLog();
  log.append({ type: "TRUTH_DECLARED", subject: "od:entity:t", payload: {}, provenance: { actor: "od:participant:p", intention: "decree" } });
  result = checkRecord(log.events());
  assert.equal(result.checks.find((c) => c.id === "C1").ok, false);
});

test("a tampered chain is rejected even when semantics look clean (C2)", () => {
  const k = createKernel();
  const me = k.registerParticipant({ name: "p", kind: "script", intention: "arrive" });
  k.createEntity({ kind: "Thing", provenance: { actor: me, intention: "create" } });
  const events = k.log.events().map((e) => ({ ...e, payload: { ...e.payload } }));
  events[1].payload.kind = "ForgedThing"; // altered content, stale hash
  const result = checkRecord(events);
  assert.equal(result.checks.find((c) => c.id === "C2").ok, false);
});
