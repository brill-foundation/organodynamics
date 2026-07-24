#!/usr/bin/env node
// What's New — deterministic per-area content tokens for the review-marker system.
//
//   node tools/whats-new.js                writes assets/whats-new.json
//   WHATSNEW_BASE=origin/main node …       choose the baseline ref (default origin/main)
//
// A review marker is honest only if it answers to real change. Each Place of the
// Space carries a *content token* — a hash of that Place's files. The website
// (assets/whats-new.js) compares the current token against the token the visitor
// last saw; a visitor's memory is seeded, on first encounter, to the production
// (main) baseline. So a marker means exactly: "this Place holds work you have not
// looked at yet, since the version you last reviewed." Nothing is authored; the
// dot is a deterministic projection of the corpus's own bytes, with provenance.
//
// Build-time only, Node standard library only (Axiom 10 — zero runtime deps).
// Re-run before committing whenever content changed.

import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const BASE = process.env.WHATSNEW_BASE || "origin/main";

// Each Place → the content that constitutes it. A trailing "/" (or a real
// directory) is walked recursively; a file is taken as-is. Keys match the plan
// rail's Place keys and each reading page's data-place, so a page marks itself
// seen simply by being visited.
const AREAS = {
  threshold:    { href: "organodynamics/",    paths: ["organodynamics/index.html"] },
  laboratory:   { href: "laboratory/table/",  paths: ["laboratory/table/index.html"] },
  constitution: { href: "constitution/",      paths: ["constitution/"] },
  rfcs:         { href: "rfcs/",              paths: ["rfcs/"] },
  cabinet:      { href: "cabinet/",           paths: ["cabinet/"] },
  sessions:     { href: "laboratory/record/", paths: ["laboratory/record/log.jsonl", "laboratory/record/index.html"] },
};

const short = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 12);

// ---- current tokens: the working tree (fs truth, regardless of staging) --------
function walkFs(p) {
  if (!existsSync(p)) return [];
  const st = statSync(p);
  if (st.isFile()) return [p];
  if (st.isDirectory()) {
    return readdirSync(p)
      .filter((n) => !n.startsWith("."))          // skip .gitkeep etc.
      .flatMap((n) => walkFs(path.join(p, n)));
  }
  return [];
}
function currentToken(paths) {
  const files = [...new Set(paths.flatMap(walkFs))].sort();
  if (!files.length) return "";
  const h = createHash("sha256");
  for (const f of files) h.update(f + "\0").update(readFileSync(f)).update("\0");
  return h.digest("hex").slice(0, 12);
}

// ---- baseline tokens: the same paths as they exist on BASE (git) ---------------
function gitFilesAt(ref, p) {
  try {
    // -z + quotepath=false so paths with spaces / non-ASCII (the constitution
    // PDFs) come back raw and NUL-separated, not shell-quoted.
    const out = execFileSync(
      "git",
      ["-c", "core.quotepath=false", "ls-tree", "-r", "-z", "--name-only", ref, "--", p],
      { encoding: "utf8" }
    );
    return out.split("\0").map((s) => s.trim()).filter(Boolean);
  } catch { return []; }
}
function baselineToken(ref, paths) {
  const files = [...new Set(paths.flatMap((p) => gitFilesAt(ref, p)))].sort();
  if (!files.length) return "";
  const h = createHash("sha256");
  for (const f of files) {
    let content;
    try { content = execFileSync("git", ["show", `${ref}:${f}`]); } catch { content = Buffer.alloc(0); }
    h.update(f + "\0").update(content).update("\0");
  }
  return h.digest("hex").slice(0, 12);
}

let baseSha = BASE;
try { baseSha = execFileSync("git", ["rev-parse", "--short", BASE], { encoding: "utf8" }).trim(); } catch {}

const areas = {};
const summary = [];
for (const [key, def] of Object.entries(AREAS)) {
  const token = currentToken(def.paths);
  const baseline = baselineToken(BASE, def.paths);
  const isNew = baseline === "" && token !== "";
  areas[key] = { href: def.href, token, baseline, ...(isNew ? { new: true } : {}) };
  summary.push(`${key.padEnd(13)} ${token || "—"}  base ${baseline || "(absent)"}  ${token !== baseline ? (isNew ? "NEW" : "changed") : "unchanged"}`);
}

const manifest = {
  generatedAt: new Date().toISOString(),
  base: `${BASE}@${baseSha}`,
  note: "Per-Place content tokens for the review-marker system. A marker means the Place changed since the token the visitor last saw (seeded to the baseline on first visit). Provenance: assets/whats-new.js, tools/whats-new.js.",
  areas,
};

const outFile = "assets/whats-new.json";
writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`wrote ${outFile}  (baseline ${manifest.base})\n`);
console.log(summary.join("\n"));
