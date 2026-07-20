// Proprioception (RFC-005): the report is a derived Camera — it composes
// existing checks, tags every fact by how it is known, detects conditions
// without ranking them, survives a damaged record, and archives only as an
// explicit Participant act.

import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, appendFileSync, existsSync } from "node:fs";
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
