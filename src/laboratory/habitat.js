// Habitat inspection — the tip guard, one scope wider.
//
// laboratory.js refuses to write over unseen events in the SAME file
// (guardTip). Reality demonstrated the same failure across habitats: a
// participant arrived in a git checkout whose record was a strict prefix of
// a longer record on a sibling branch, and forked history at first write,
// because nothing compared the two before the pen touched paper.
//
// This module makes that comparison. It resolves lineage by CONTENT, never
// by trusting a ref: two records relate only through their event lines.
// Containment is a fact, not a vote — a record that is a byte-identical
// prefix of a longer verified record is simply behind it; nothing is
// aggregated, ranked, or ruled void. Divergence (same genesis, neither a
// prefix of the other) is reported, never resolved: forks are refused at
// the write boundary and left to reconciliation by the participants.
//
// Git is one habitat kind, and optional (laboratory charter §3). Outside a
// git repository this module reports habitat "none" and the Laboratory
// proceeds sovereignly. Network is best-effort: a failed fetch degrades to
// comparing last-known refs, reported honestly — the guarantee is "never
// SILENTLY stale", not "always online".
//
// Dependencies: node:child_process, node:fs, node:path, ../kernel/kernel.js.

import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join, resolve, relative } from "node:path";
import { createKernel } from "../kernel/kernel.js";

function git(args, cwd, timeout = 8000) {
  return execFileSync("git", args, {
    cwd, timeout, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"],
  }).trim();
}

// Compare two records line-by-line from genesis. Returns the relation of
// `theirs` to `ours`: "equal" | "behind" | "extends" | "divergent" |
// "unrelated" (different genesis), plus where agreement ends.
export function relateRecords(ourLines, theirLines) {
  let m = 0;
  while (m < ourLines.length && m < theirLines.length && ourLines[m] === theirLines[m]) m++;
  if (m === ourLines.length && m === theirLines.length) return { relation: "equal", agree: m };
  if (m === ourLines.length) return { relation: "extends", agree: m }; // ours ⊂ theirs
  if (m === theirLines.length) return { relation: "behind", agree: m }; // theirs ⊂ ours
  if (m === 0) return { relation: "unrelated", agree: 0 }; // different genesis
  return { relation: "divergent", agree: m };
}

// Inspect the habitat around a record directory. Pure reading — writes
// nothing, decides nothing; the caller owns the refusal.
export function inspectHabitat(dir, { cwd = process.cwd() } = {}) {
  let toplevel;
  try {
    toplevel = git(["rev-parse", "--show-toplevel"], cwd);
  } catch {
    return { habitat: "none" }; // sovereign folder — no sibling habitats exist
  }

  const relPath = relative(toplevel, resolve(cwd, join(dir, "log.jsonl")))
    .split("\\").join("/"); // git paths are always forward-slashed
  if (relPath.startsWith("..")) return { habitat: "none" }; // record lives outside this repo

  const file = resolve(cwd, join(dir, "log.jsonl"));
  const localLines = existsSync(file)
    ? readFileSync(file, "utf8").split("\n").filter(Boolean)
    : [];

  // Refresh remote refs, best-effort. Failure is degradation, not error:
  // the comparison still runs against last-known refs, and the caller is
  // told the view may be stale — knowing, never unknowing.
  let fetched = null;
  if (git(["remote"], cwd) !== "") {
    try { git(["fetch", "--all", "--quiet"], cwd, 15000); fetched = true; }
    catch { fetched = false; }
  }

  const refs = git(["for-each-ref", "--format=%(refname)", "refs/heads", "refs/remotes"], cwd)
    .split("\n").filter((r) => r && !r.endsWith("/HEAD"));

  const extenders = [], divergent = [], damaged = [];
  for (const ref of refs) {
    let content;
    try { content = git(["show", `${ref}:${relPath}`], cwd); }
    catch { continue; } // this ref carries no record at this path
    const theirLines = content.split("\n").filter(Boolean);
    const { relation, agree } = relateRecords(localLines, theirLines);
    if (relation !== "extends" && relation !== "divergent") continue;
    try {
      createKernel({ history: theirLines.map((l) => JSON.parse(l)) }); // throws unless the chain verifies
    } catch (e) {
      damaged.push({ ref, events: theirLines.length, error: e.message });
      continue;
    }
    const entry = { ref, events: theirLines.length, agree };
    (relation === "extends" ? extenders : divergent).push(entry);
  }
  extenders.sort((a, b) => b.events - a.events);
  divergent.sort((a, b) => b.events - a.events);

  return { habitat: "git", fetched, localEvents: localLines.length, extenders, divergent, damaged };
}
