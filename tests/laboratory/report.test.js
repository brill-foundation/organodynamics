// Proprioception (RFC-005): the report is a derived Camera — it composes
// existing checks, tags every fact by how it is known, detects conditions
// without ranking them, survives a damaged record, and archives only as an
// explicit Participant act.

import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, appendFileSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { openLaboratory } from "../../src/laboratory/laboratory.js";
import { gatherReport, renderReport, keepReport } from "../../src/laboratory/report.js";

const git = (cwd, ...args) =>
  execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

function sovereignLab({ seal = true } = {}) {
  const cwd = mkdtempSync(join(tmpdir(), "od-report-"));
  const dir = "laboratory/record";
  mkdirSync(join(cwd, dir), { recursive: true });
  const lab = openLaboratory(join(cwd, dir));
  const me = lab.registerParticipant({ name: "reporter", kind: "ai", intention: "test" });
  lab.observe({ statement: "something true", provenance: { actor: me, intention: "test" } });
  if (seal) lab.seal({ summary: "closed", provenance: { actor: me, intention: "test" } });
  return { cwd, dir, me };
}

test("report on a healthy sovereign lab: verified chain, conformance, no habitat, no false conditions", () => {
  const { cwd, dir } = sovereignLab();
  const r = gatherReport(dir, { cwd });
  assert.equal(r.record.chainVerifies.value, true);
  assert.equal(r.record.chainVerifies.class, "VERIFIED");
  assert.equal(r.conformance.ok, true);
  assert.equal(r.habitat.habitat, "none"); // sovereign — nothing to compare against
  assert.equal(r.identity.genesisHash.length, 64);
  assert.deepEqual(r.conditions, []); // sealed, conformant, sovereign: nothing to flag
  assert.match(renderReport(r), /chain\s+verifies \[VERIFIED\]/);
});

test("unsealed work is a detected condition, not a judgment", () => {
  const { cwd, dir } = sovereignLab({ seal: false });
  const r = gatherReport(dir, { cwd });
  assert.ok(r.conditions.some((c) => c.condition === "UNSEALED_EVENTS"));
});

test("a damaged record does not kill the report — the damage becomes its first fact", () => {
  const { cwd, dir } = sovereignLab();
  appendFileSync(join(cwd, dir, "log.jsonl"), JSON.stringify({ seq: 99, type: "SEALED", hash: "forged", prevHash: "forged", payload: {}, provenance: {} }) + "\n");
  const r = gatherReport(dir, { cwd }); // must not throw
  assert.equal(r.record.chainVerifies.value, false);
  assert.ok(r.conditions.some((c) => c.condition === "RECORD_CHAIN_FAILS"));
  assert.ok(r.conditions.some((c) => c.condition === "CONFORMANCE_FAILS"));
});

test("a stale git habitat surfaces as HABITAT_STALE through the same guard the writes use", () => {
  const { cwd, dir, me } = sovereignLab();
  git(cwd, "init", "-q", "-b", "main");
  git(cwd, "config", "user.email", "t@t"); git(cwd, "config", "user.name", "t");
  git(cwd, "add", "-A"); git(cwd, "commit", "-qm", "short record");
  git(cwd, "checkout", "-qb", "continued");
  const lab = openLaboratory(join(cwd, dir));
  lab.observe({ statement: "more", provenance: { actor: me, intention: "extend" } });
  git(cwd, "add", "-A"); git(cwd, "commit", "-qm", "longer record");
  git(cwd, "checkout", "-q", "main"); // stale now
  const r = gatherReport(dir, { cwd });
  assert.ok(r.conditions.some((c) => c.condition === "HABITAT_STALE"));
  assert.ok(r.conditions.some((c) => c.condition === "WORKING_TREE_DIRTY") === false); // clean tree stays unflagged
});

test("with no prior snapshot, the delta is a verified state, not a gap", () => {
  const { cwd, dir } = sovereignLab();
  const r = gatherReport(dir, { cwd });
  assert.equal(r.delta.baseline, "NO_PRIOR_SNAPSHOT");
  assert.match(renderReport(r), /no snapshot kept yet/);
});

test("record-delta counts appended events by kernel event type — resolved/superseded grounded, never 'removed'", () => {
  const { cwd, dir, me } = sovereignLab();
  const by = { actor: me, intention: "t" };
  // keep a baseline first; then open a fresh handle for the work (keepReport
  // wrote through its own handle — reopening continues from the new tip)
  keepReport(gatherReport(dir, { cwd }), dir, { cwd, provenance: { actor: "reporter", intention: "baseline" } });
  const lab = openLaboratory(join(cwd, dir));
  const u = lab.recordUnknown({ question: "open?", provenance: by });
  lab.resolveUnknown(u, { resolution: "yes", provenance: by });
  const ent = lab.createEntity({ kind: "Thing", provenance: by });
  const a = lab.assert({ about: ent, predicate: "p", value: "v1", grounding: { kind: "conjecture" }, provenance: by });
  lab.supersedeAssertion(a, { value: "v2", provenance: by });

  const r = gatherReport(dir, { cwd });
  assert.notEqual(r.delta.baseline, "NO_PRIOR_SNAPSHOT");
  assert.equal(r.delta.recordDelta.resolved, 1);   // from UNKNOWN_RESOLVED, not from absence
  assert.equal(r.delta.recordDelta.superseded, 1); // from ASSERTION_SUPERSEDED
  assert.equal(r.delta.recordDelta.byType.UNKNOWN_RECORDED, 1);
  assert.ok(!("removed" in r.delta.recordDelta)); // append-only: no removal category exists
  // baseline is Record-identified, hence an ancestor on this lineage
  assert.equal(typeof r.delta.baseline.seq, "number");
});

test("condition-delta reports what changed state, and is honestly unavailable if the prior file is gone", () => {
  const { cwd, dir, me } = sovereignLab();
  keepReport(gatherReport(dir, { cwd }), dir, { cwd, provenance: { actor: "reporter", intention: "baseline" } });
  // create a condition that did not exist at baseline: unsealed work
  openLaboratory(join(cwd, dir)).observe({ statement: "after keep", provenance: { actor: me, intention: "t" } });
  let r = gatherReport(dir, { cwd });
  assert.equal(r.delta.conditionDelta.available, true);
  assert.ok(r.delta.conditionDelta.appeared.includes("UNSEALED_EVENTS"));

  // delete the kept file — legal (P3); condition-delta becomes unavailable, record-delta survives
  const kept = join(cwd, r.delta.baseline.file);
  rmSync(kept);
  r = gatherReport(dir, { cwd });
  assert.equal(r.delta.conditionDelta.available, false);
  assert.ok(r.delta.recordDelta.appended >= 1); // record-delta still replayable without the file
});

test("keepReport is a Participant act: writes the snapshot and records a provenanced observation", () => {
  const { cwd, dir } = sovereignLab();
  const r = gatherReport(dir, { cwd });
  const { file, observation } = keepReport(r, dir, { cwd, provenance: { actor: "reporter", intention: "keep the moment" } });
  assert.ok(existsSync(file));
  const lab = openLaboratory(join(cwd, dir));
  const last = lab.events().at(-1);
  assert.equal(last.type, "OBSERVATION_RECORDED");
  assert.match(last.payload.statement, /Status report kept at/);
  assert.equal(last.provenance.intention, "keep the moment");
  assert.equal(observation, last.subject);
  // an unknown name is refused — no anonymous archives
  assert.throws(() => keepReport(r, dir, { cwd, provenance: { actor: "nobody", intention: "x" } }), /no unique participant/);
});
