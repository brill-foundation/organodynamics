// The tip guard, one scope wider: a participant must never UNKNOWINGLY
// begin from a stale habitat. These tests replay the real failure — a git
// checkout whose record was a strict prefix of a longer record on a sibling
// branch — and assert the write boundary now refuses it.

import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { openLaboratory } from "../../src/laboratory/laboratory.js";
import { inspectHabitat, relateRecords } from "../../src/laboratory/habitat.js";

const LAB_CLI = fileURLToPath(new URL("../../tools/lab.js", import.meta.url));

const sh = (cwd, file, args) =>
  execFileSync(file, args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
const git = (cwd, ...args) => sh(cwd, "git", args);

// A real repo whose main holds a short record and whose `continued` branch
// holds the same record extended — the exact shape of the real failure.
function staleScenario() {
  const repo = mkdtempSync(join(tmpdir(), "od-habitat-"));
  git(repo, "init", "-q", "-b", "main");
  git(repo, "config", "user.email", "lab@test");
  git(repo, "config", "user.name", "lab test");

  const dir = join(repo, "laboratory", "record");
  mkdirSync(dir, { recursive: true });
  let lab = openLaboratory(dir);
  const me = lab.registerParticipant({ name: "founder", kind: "ai", intention: "test genesis" });
  lab.seal({ summary: "first session", provenance: { actor: me, intention: "close" } });
  git(repo, "add", "-A");
  git(repo, "commit", "-qm", "record at 2 events");

  git(repo, "checkout", "-qb", "continued");
  lab = openLaboratory(dir);
  lab.observe({ statement: "the work continued", provenance: { actor: me, intention: "continue" } });
  lab.seal({ summary: "second session", provenance: { actor: me, intention: "close" } });
  git(repo, "add", "-A");
  git(repo, "commit", "-qm", "record at 4 events");

  git(repo, "checkout", "-q", "main"); // the stale habitat: 2 events; `continued` holds 4
  return { repo, dir, me };
}

test("relateRecords — containment is a fact: equal, behind, extends, divergent, unrelated", () => {
  const a = ["g", "e1", "e2"];
  assert.equal(relateRecords(a, ["g", "e1", "e2"]).relation, "equal");
  assert.equal(relateRecords(a, ["g", "e1"]).relation, "behind");
  assert.equal(relateRecords(a, ["g", "e1", "e2", "e3"]).relation, "extends");
  assert.deepEqual(relateRecords(a, ["g", "e1", "x"]), { relation: "divergent", agree: 2 });
  assert.equal(relateRecords(a, ["other-genesis"]).relation, "unrelated");
  assert.equal(relateRecords([], ["g"]).relation, "extends"); // an empty record is behind any record
});

test("a stale checkout is detected: the sibling branch extends this record", () => {
  const { repo, dir } = staleScenario();
  const h = inspectHabitat(dir, { cwd: repo });
  assert.equal(h.habitat, "git");
  assert.equal(h.localEvents, 2);
  assert.ok(h.extenders.some((x) => x.ref === "refs/heads/continued" && x.events === 4));
  assert.equal(h.divergent.length, 0);
});

test("the true tip is quiet: no extenders, no divergence, writes proceed", () => {
  const { repo, dir, me } = staleScenario();
  git(repo, "checkout", "-q", "continued");
  const h = inspectHabitat(dir, { cwd: repo });
  assert.equal(h.extenders.length, 0);
  assert.equal(h.divergent.length, 0);
  const lab = openLaboratory(dir); // and the shell itself still writes normally here
  lab.observe({ statement: "still alive", provenance: { actor: me, intention: "confirm" } });
});

test("a fork (same genesis, neither contains the other) is detected, not resolved", () => {
  const { repo, dir, me } = staleScenario();
  // write on stale main directly through the shell, bypassing the CLI guard —
  // this manufactures exactly the fork the guard exists to prevent
  const lab = openLaboratory(dir);
  lab.observe({ statement: "written in ignorance", provenance: { actor: me, intention: "fork" } });
  const h = inspectHabitat(dir, { cwd: repo });
  assert.equal(h.extenders.length, 0);
  const d = h.divergent.find((x) => x.ref === "refs/heads/continued");
  assert.ok(d, "the sibling line is reported as divergent");
  assert.equal(d.agree, 2); // shares the 2-event prefix, diverges at #2
});

test("outside any git repository the habitat is sovereign — nothing to compare", () => {
  const dir = mkdtempSync(join(tmpdir(), "od-sovereign-"));
  assert.equal(inspectHabitat(join(dir, "record"), { cwd: dir }).habitat, "none");
});

test("the CLI refuses to arrive in a stale habitat — the original failure, replayed", () => {
  const { repo } = staleScenario();
  assert.throws(
    () => sh(repo, process.execPath, [LAB_CLI, "arrive", "--name", "Stranger", "--kind", "ai", "--because", "unknowingly beginning from a stale checkout"]),
    (err) => {
      assert.equal(err.status, 2);
      assert.match(err.stderr, /REFUSING TO WRITE — this habitat is stale/);
      assert.match(err.stderr, /continued/); // the refusal names the true tip
      return true;
    }
  );
  // and reading is never gated — an Observer may read a stale habitat freely
  const status = sh(repo, process.execPath, [LAB_CLI, "status"]);
  assert.match(status, /events\s+2/);
});
