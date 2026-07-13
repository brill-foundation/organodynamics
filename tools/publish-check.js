#!/usr/bin/env node
// Publication readiness — the mechanical gate before a Laboratory version
// becomes public. Publication is a constitutional act, not a Git operation
// (see docs/PUBLISHING.md): the published Door must be the reviewed Record,
// provably, without anyone remembering a checklist.
//
// This command runs every gate and prints the publication identity. Exit 0
// means the working branch is safe to publish; nonzero names what failed.
//
//   node tools/publish-check.js
//
// Dependencies: node:child_process, node:fs, node:crypto — no network, no
// tokens; it judges the local repository and Record only.

import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";

const results = [];
const gate = (name, fn) => {
  try {
    const detail = fn();
    results.push({ name, ok: true, detail: detail ?? "" });
  } catch (e) {
    results.push({ name, ok: false, detail: e.message.split("\n")[0] });
  }
};
const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

// 1. The working tree is clean — you publish what is committed, nothing loose.
gate("working tree is clean", () => {
  if (git("status", "--porcelain")) throw new Error("uncommitted changes present — commit or stash before publishing");
  return `HEAD ${git("rev-parse", "--short", "HEAD")}`;
});

// 2. The full constitutional test suite passes. (The glob form is required —
//    `node --test tests/` does not recurse into subdirectories correctly.)
gate("constitutional tests pass", () => {
  execFileSync("node", ["--test", "tests/**/*.test.js"], { stdio: "pipe" });
  return "all tests green";
});

// 3. The living Record conforms to the constitutional checks.
gate("living Record conforms", () => {
  execFileSync("node", ["tools/conformance.js", "laboratory/record"], { stdio: "pipe" });
  return "C1–C8 pass";
});

// 4. Publishing is a fast-forward over main — no divergence, no conflicts, and
//    main becomes exactly the reviewed commit. (Best-effort: needs origin/main.)
gate("publication is a clean fast-forward over main", () => {
  let base;
  try {
    base = git("merge-base", "HEAD", "origin/main");
  } catch {
    return "origin/main not fetched — run `git fetch origin main` to check (not a failure here)";
  }
  const mainTip = git("rev-parse", "origin/main");
  if (base !== mainTip) throw new Error("main has diverged from this branch — rebase before publishing");
  const ahead = git("rev-list", "--count", "origin/main..HEAD");
  return `fast-forward, ${ahead} commits ahead of main`;
});

// The publication identity: which Laboratory this is, answerable mechanically.
let identity = "";
if (existsSync("laboratory/record/log.jsonl")) {
  const events = readFileSync("laboratory/record/log.jsonl", "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
  const tip = events.at(-1);
  const fileHash = createHash("sha256").update(readFileSync("laboratory/record/log.jsonl")).digest("hex").slice(0, 12);
  identity =
    `\nPublication identity\n` +
    `  commit        ${git("rev-parse", "HEAD")}\n` +
    `  record events ${events.length}\n` +
    `  record tip    ${tip.hash.slice(0, 16)}…  (${tip.type})\n` +
    `  log.jsonl     sha256 ${fileHash}…`;
}

for (const r of results) console.log(`${r.ok ? "✓" : "✗"} ${r.name}${r.detail ? `  — ${r.detail}` : ""}`);
console.log(identity);
const ok = results.every((r) => r.ok);
console.log(ok ? "\nREADY TO PUBLISH" : "\nNOT READY — resolve the ✗ above");
process.exit(ok ? 0 : 1);
