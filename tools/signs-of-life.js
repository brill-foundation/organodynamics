#!/usr/bin/env node
// Signs of Life — deterministic per-Place content tokens.
//
//   node tools/signs-of-life.js            writes assets/signs-of-life.json
//
// A Place shows a sign of life only when it has genuinely changed. Each Place
// carries a *content token* — a hash of that Place's own files. The website
// (assets/signs-of-life.js) remembers, per visitor, the token each Place had the
// last time THAT visitor looked at it, and reveals a quiet sign only where the
// current token differs. The memory is personal and incremental: never "since
// production", never "since deployment" — only "since you last looked here".
//
// This tool computes nothing about the past and needs no git: it simply hashes
// the present. A Place's token changes iff its content changes, so a sign of life
// is always answerable to real change. Run it before committing whenever content
// changed. Build-time only, Node standard library only (Axiom 10 — zero deps).

import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, existsSync, writeFileSync } from "node:fs";
import path from "node:path";

// Each Place → the content that constitutes it. A directory is walked
// recursively; a file is taken as-is. Keys match the plan rail's Place keys and
// each reading page's data-place, so a page marks itself seen just by being read.
const PLACES = {
  threshold:    { href: "organodynamics/",    paths: ["organodynamics/index.html"] },
  laboratory:   { href: "laboratory/table/",  paths: ["laboratory/table/index.html"] },
  constitution: { href: "constitution/",      paths: ["constitution/"] },
  rfcs:         { href: "rfcs/",              paths: ["rfcs/"] },
  cabinet:      { href: "cabinet/",           paths: ["cabinet/"] },
  sessions:     { href: "laboratory/record/", paths: ["laboratory/record/log.jsonl", "laboratory/record/index.html"] },
};

function walk(p) {
  if (!existsSync(p)) return [];
  const st = statSync(p);
  if (st.isFile()) return [p];
  if (st.isDirectory()) {
    return readdirSync(p)
      .filter((n) => !n.startsWith("."))            // skip .gitkeep and dotfiles
      .flatMap((n) => walk(path.join(p, n)));
  }
  return [];
}

function tokenOf(paths) {
  const files = [...new Set(paths.flatMap(walk))].sort();
  if (!files.length) return "";
  const h = createHash("sha256");
  for (const f of files) h.update(f + "\0").update(readFileSync(f)).update("\0");
  return h.digest("hex").slice(0, 12);
}

const areas = {};
const summary = [];
for (const [key, def] of Object.entries(PLACES)) {
  const token = tokenOf(def.paths);
  areas[key] = { href: def.href, token };
  summary.push(`${key.padEnd(13)} ${token || "—"}`);
}

const manifest = {
  generatedAt: new Date().toISOString(),
  note: "Per-Place content tokens for the Signs of Life system. A sign appears only where a Place's token differs from the token that visitor last saw there — personal and incremental, never since production/deployment. Provenance: assets/signs-of-life.js, tools/signs-of-life.js.",
  areas,
};

writeFileSync("assets/signs-of-life.json", JSON.stringify(manifest, null, 2) + "\n");
console.log("wrote assets/signs-of-life.json\n" + summary.join("\n"));
