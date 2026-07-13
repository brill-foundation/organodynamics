// The participant-facing CLI is the surface a stranger actually arrives
// through. The library beneath it is well tested; these smoke tests guard the
// glue the library tests cannot see — argument parsing, name→id resolution,
// the mandatory intention, and the "arrive first" guard — so a future refactor
// cannot silently break arrival.

import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const CLI = fileURLToPath(new URL("../../tools/lab.js", import.meta.url));
const REPO = fileURLToPath(new URL("../../", import.meta.url));
const run = (...args) => spawnSync("node", [CLI, ...args], { cwd: REPO, encoding: "utf8" });
const freshDir = () => mkdtempSync(join(tmpdir(), "od-cli-"));

test("CLI arrival flow: arrive → observe → seal → status round-trips", () => {
  const dir = freshDir();

  const arrive = run("arrive", "--name", "Tester", "--kind", "script", "--because", "smoke test", "--dir", dir);
  assert.equal(arrive.status, 0, arrive.stderr);
  assert.match(arrive.stdout.trim(), /^od:participant:/);

  const obs = run("observe", "a real observation", "--as", "Tester", "--because", "record it", "--dir", dir);
  assert.equal(obs.status, 0, obs.stderr);
  assert.match(obs.stdout.trim(), /^od:observation:/);

  const seal = run("seal", "closed the smoke session", "--as", "Tester", "--because", "depart", "--dir", dir);
  assert.equal(seal.status, 0, seal.stderr);

  const status = run("status", "--dir", dir);
  assert.equal(status.status, 0, status.stderr);
  assert.match(status.stdout, /Tester \(script\)/);
  assert.match(status.stdout, /chain\s+verifies/);
});

test("CLI refuses a write without a stated intention (obligation 3)", () => {
  const dir = freshDir();
  run("arrive", "--name", "T", "--kind", "script", "--because", "arrive", "--dir", dir);
  const r = run("observe", "no intention given", "--as", "T", "--dir", dir);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /because/);
});

test("CLI refuses to act before arriving, and names the fix", () => {
  const dir = freshDir();
  const r = run("entity", "--kind", "Idea", "--as", "Ghost", "--because", "sneak in", "--dir", dir);
  assert.notEqual(r.status, 0);
  assert.match(r.stderr, /no participant|arrive first/i);
});
