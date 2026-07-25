// Proprioception — the Laboratory's status report as a derived Camera.
//
// Constitutional grounding (RFC-005): the Laboratory knows itself two ways.
// Its HISTORY is replayed from the Record (identity, sessions, unknowns);
// its CONDITION is inspected now (habitat, working tree, chain checks) and
// is NOT replayable later — which is exactly why a steward may choose to
// keep a snapshot. The report composes only checks that already exist
// (kernel replay, conformance, sources, the habitat guard) and adds none.
//
// Epistemic discipline (obligation 2 made structural): every fact carries
// how it is known —
//   VERIFIED  mechanically checked at generation time (a proof ran)
//   OBSERVED  read from the world at generation time (true then, unproven)
//   DERIVED   computed from the Record by replay (as true as the chain)
// The machine states facts and detects CONDITIONS (boolean outcomes of the
// checks above). It never ranks, recommends, or summarizes with judgment:
// the furniture is intentionally unintelligent; recommendations are
// substance and belong to Participants as recorded judgments.
//
// This module is a pure reading — it writes nothing. Archiving (keepReport)
// is a separate, explicit Participant act carrying provenance.
//
// Dependencies: node:fs, node:path, node:child_process, sibling modules.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { openLaboratory } from "./laboratory.js";
import { inspectHabitat } from "./habitat.js";
import { deriveBacklog } from "./backlog.js";
import { checkRecord } from "../conformance/check.js";

const git = (args, cwd) => execFileSync("git", args, { cwd, encoding: "utf8", timeout: 8000, stdio: ["ignore", "pipe", "pipe"] }).trim();

// The signature keepReport leaves in the Record. The baseline for a delta is
// found HERE — in the replayed Record — never by scanning the reports folder,
// so it is always an ancestor on this lineage (a fabricated "removed" is thus
// structurally impossible) and always provenanced.
const KEEP_SIGNATURE = /^Status report kept at (laboratory\/reports\/\S+\.json)/;

// Since the previous KEPT snapshot (RFC-005 §5). Record-delta is replayed from
// the baseline's position — append-only, so it only ever grew; its categories
// are exactly the kernel's event types, never a "removed" the Record cannot
// witness. Condition-delta needs the baseline's body and may be legitimately
// absent (reports are deletable, P3): absence is a stated state, not a fault.
function computeDelta(events, current, cwd) {
  let base = null;
  for (let i = events.length - 1; i >= 0; i--) {
    if (events[i].type !== "OBSERVATION_RECORDED") continue;
    const m = KEEP_SIGNATURE.exec(events[i].payload.statement || "");
    if (m) { base = { index: i, seq: events[i].seq, file: m[1] }; break; }
  }
  if (!base) return { class: "DERIVED", baseline: "NO_PRIOR_SNAPSHOT" };

  const appended = events.slice(base.index + 1);
  const byType = {};
  for (const e of appended) byType[e.type] = (byType[e.type] || 0) + 1;
  const recordDelta = {
    appended: appended.length,
    byType,
    resolved: byType.UNKNOWN_RESOLVED || 0,     // grounded in the event, never in absence
    superseded: byType.ASSERTION_SUPERSEDED || 0, // the only in-place change the Record has
    // no "removed" — the append-only Record emits no removal event to witness one
  };

  let conditionDelta;
  const path = join(cwd, base.file);
  if (!existsSync(path)) {
    conditionDelta = { available: false, reason: "prior snapshot file not present (reports are deletable)" };
  } else {
    let prior = null;
    try { prior = JSON.parse(readFileSync(path, "utf8")); } catch { /* unreadable */ }
    if (!prior || prior.identity?.genesisHash !== current.identity.genesisHash) {
      conditionDelta = { available: false, reason: "prior snapshot unreadable or of a different Record" };
    } else {
      const now = new Set(current.conditions.map((x) => x.condition));
      const was = new Set((prior.conditions || []).map((x) => x.condition));
      conditionDelta = {
        available: true,
        keptAt: prior.meta?.generatedAt ?? null,
        appeared: [...now].filter((x) => !was.has(x)),
        cleared: [...was].filter((x) => !now.has(x)),
      };
    }
  }
  return { class: "DERIVED", baseline: { seq: base.seq, file: base.file }, recordDelta, conditionDelta };
}

// Gather the full snapshot. Never throws on a damaged Laboratory — a report
// that dies exactly when the place is broken would be useless proprioception;
// instead the damage becomes the report's first fact.
export function gatherReport(dir = "laboratory/record", { cwd = process.cwd() } = {}) {
  const report = {
    meta: {
      generatedAt: new Date().toISOString(),
      generator: "src/laboratory/report.js",
      epistemics: "VERIFIED = proof ran now; OBSERVED = read now, unproven; DERIVED = replayed from the Record. The machine states facts and detects conditions; recommendations belong to Participants.",
    },
  };

  // --- the Record: replayed history + verified integrity -------------------
  const logFile = join(cwd, dir, "log.jsonl");
  const rawLines = existsSync(logFile) ? readFileSync(logFile, "utf8").split("\n").filter(Boolean) : [];
  let lab = null, openError = null;
  try { lab = openLaboratory(join(cwd, dir)); } catch (e) { openError = e.message; }

  report.identity = {
    class: "DERIVED",
    recordPath: join(dir, "log.jsonl"),
    genesisHash: rawLines.length ? JSON.parse(rawLines[0]).hash : null, // the Record's identity anchor
    events: rawLines.length,
  };

  if (lab) {
    const s = lab.status();
    report.record = {
      class: "DERIVED",
      chainVerifies: { class: "VERIFIED", value: s.chainValid },
      counts: s.counts,
      participants: s.participants,
      sessions: lab.sessions().length,
      lastSeal: s.lastSeal ? { at: s.lastSeal.at, by: s.lastSeal.by, summary: s.lastSeal.summary } : null,
      unsealedEvents: s.unsealedEvents,
      openUnknowns: s.openUnknowns,
      backlog: deriveBacklog(lab).map(({ id, title, priority, status }) => ({ id, title, priority, status })),
    };
    report.sources = { class: "VERIFIED", checked: lab.sources() };
  } else {
    report.record = { class: "DERIVED", chainVerifies: { class: "VERIFIED", value: false }, openError };
  }

  // Conformance judges the artifact independently of the kernel that made it.
  const conf = rawLines.length ? checkRecord(rawLines.map((l) => JSON.parse(l))) : { ok: null, checks: [] };
  report.conformance = { class: "VERIFIED", ok: conf.ok, checks: conf.checks };

  // --- condition: the habitat and the repository, inspected now ------------
  report.habitat = { class: "OBSERVED", ...inspectHabitat(dir, { cwd }) };

  try {
    const branch = git(["branch", "--show-current"], cwd);
    const dirty = git(["status", "--porcelain"], cwd).split("\n").filter(Boolean).length;
    report.repository = { class: "OBSERVED", branch: branch || "(detached)", dirtyPaths: dirty };
  } catch { report.repository = { class: "OBSERVED", habitat: "none" }; }

  // --- conditions: boolean outcomes of the checks above, nothing weighed ---
  // Fixed constitutional order (integrity, then habitat, then hygiene) — an
  // order of KIND, deliberately not of severity: severity is judgment.
  const c = [];
  const chainOk = report.record.chainVerifies.value;
  if (!chainOk) c.push({ condition: "RECORD_CHAIN_FAILS", from: "kernel replay" });
  if (conf.ok === false) c.push({ condition: "CONFORMANCE_FAILS", from: "tools/conformance checks" });
  if (report.habitat.habitat === "git") {
    if (report.habitat.extenders?.length) c.push({ condition: "HABITAT_STALE", from: "habitat guard: a verified sibling record extends this one" });
    if (report.habitat.divergent?.length) c.push({ condition: "HABITAT_FORKED", from: "habitat guard: a same-genesis sibling diverges" });
    if (report.habitat.damaged?.length) c.push({ condition: "SIBLING_DAMAGED", from: "habitat guard: a sibling record fails verification" });
    if (report.habitat.fetched === false) c.push({ condition: "FRESHNESS_UNCONFIRMED", from: "habitat guard: remote refs could not be refreshed" });
  }
  if (report.sources?.checked?.some((r) => r.ok === false)) c.push({ condition: "SOURCE_BROKEN", from: "source grounding re-check" });
  if (lab && report.record.unsealedEvents > 0) c.push({ condition: "UNSEALED_EVENTS", from: "events after the last seal (obligation 5 open)" });
  if (report.repository.dirtyPaths > 0) c.push({ condition: "WORKING_TREE_DIRTY", from: "git status" });
  report.conditions = c;

  // --- delta: since the previous kept snapshot (needs conditions computed) --
  report.delta = computeDelta(rawLines.map((l) => JSON.parse(l)), report, cwd);

  return report;
}

// Render for a human. Same facts, same tags — a projection, not a summary.
export function renderReport(r) {
  const L = [];
  const tag = (t) => `[${t}]`;
  L.push(`ORGANODYNAMICS LABORATORY — status report (a derived Camera, RFC-005)`);
  L.push(`generated ${r.meta.generatedAt} — regenerate freely; this reading is not authoritative state`);
  L.push(``);
  L.push(`IDENTITY ${tag("DERIVED")}`);
  L.push(`  record   ${r.identity.recordPath} — ${r.identity.events} events`);
  L.push(`  genesis  ${r.identity.genesisHash ?? "(empty record)"}`);
  L.push(``);
  L.push(`RECORD ${tag("DERIVED")}`);
  L.push(`  chain    ${r.record.chainVerifies.value ? "verifies" : "FAILS VERIFICATION"} ${tag("VERIFIED")}${r.record.openError ? ` — ${r.record.openError}` : ""}`);
  if (r.record.counts) {
    L.push(`  counts   ${Object.entries(r.record.counts).map(([k, v]) => `${k}:${v}`).join("  ")}`);
    L.push(`  sessions ${r.record.sessions} sealed spans; ${r.record.unsealedEvents} events since last seal`);
    if (r.record.lastSeal) L.push(`  last seal #${r.record.lastSeal.at} by ${r.record.lastSeal.by}`);
    L.push(`  unknowns ${r.record.openUnknowns.length} open${r.record.openUnknowns.map((u) => `\n    - ${u.question.slice(0, 100)}`).join("")}`);
    L.push(`  backlog  ${r.record.backlog.length ? r.record.backlog.map((b) => `${b.title} (${b.status})`).join("; ") : "empty"}`);
  }
  L.push(``);
  L.push(`CONFORMANCE ${tag("VERIFIED")}`);
  L.push(`  ${r.conformance.ok === null ? "no events to check" : r.conformance.ok ? `CONFORMS — ${r.conformance.checks.length} checks passed` : "DOES NOT CONFORM"}`);
  L.push(``);
  L.push(`HABITAT ${tag("OBSERVED")}`);
  if (r.habitat.habitat !== "git") {
    L.push(`  sovereign folder — no sibling habitats known`);
  } else {
    L.push(`  git repository, branch ${r.repository.branch}, ${r.repository.dirtyPaths} uncommitted paths`);
    L.push(`  siblings: ${r.habitat.extenders.length} extend this record, ${r.habitat.divergent.length} diverge, ${r.habitat.damaged.length} damaged`);
    for (const x of r.habitat.extenders) L.push(`    ⊃ ${x.ref} — ${x.events} events ${tag("VERIFIED")}`);
    for (const d of r.habitat.divergent) L.push(`    ⑂ ${d.ref} — ${d.events} events, diverges at #${d.agree} ${tag("VERIFIED")}`);
    if (r.habitat.fetched === false) L.push(`    (remote refs not refreshed — view may be stale)`);
  }
  L.push(``);
  L.push(`CONDITIONS — mechanical findings, in an order of kind, not of severity`);
  L.push(r.conditions.length ? r.conditions.map((c) => `  ! ${c.condition}  (${c.from})`).join("\n") : `  none — every check that can pass, passes`);
  L.push(``);
  L.push(`SINCE PREVIOUS SNAPSHOT ${tag("DERIVED")} — since a Participant last chose to keep one`);
  if (r.delta.baseline === "NO_PRIOR_SNAPSHOT") {
    L.push(`  no snapshot kept yet — first report, or every prior snapshot was deleted (both are fine)`);
  } else {
    const rd = r.delta.recordDelta;
    const types = Object.entries(rd.byType).map(([t, n]) => `${t}×${n}`).join(", ") || "nothing";
    L.push(`  baseline #${r.delta.baseline.seq}`);
    L.push(`  record     +${rd.appended} appended (${types}); resolved:${rd.resolved} superseded:${rd.superseded}`);
    L.push(`             (no "removed" — the Record is append-only and emits no removal event)`);
    const cd = r.delta.conditionDelta;
    if (!cd.available) L.push(`  condition  unavailable — ${cd.reason}`);
    else L.push(`  condition  appeared [${cd.appeared.join(", ") || "none"}]; cleared [${cd.cleared.join(", ") || "none"}]`);
  }
  L.push(``);
  L.push(`This report states facts and detects conditions. What they mean, and what`);
  L.push(`to do about them, is a Participant's judgment — recorded, with reasoning.`);
  return L.join("\n");
}

// Keep a snapshot — the one Participant act in this module. Condition (unlike
// history) is not replayable later, so keeping it is a real contribution; but
// an archive must enter through the front door: an explicit actor, an
// intention, and an observation in the Record pointing at the artifact.
export function keepReport(report, dir, { cwd = process.cwd(), provenance }) {
  const reportsDir = join(cwd, "laboratory", "reports");
  mkdirSync(reportsDir, { recursive: true });
  const anchor = (report.identity.genesisHash ?? "empty").slice(0, 8);
  const file = join(reportsDir, `report-${report.meta.generatedAt.slice(0, 10)}-${anchor}-${report.identity.events}.json`);
  writeFileSync(file, JSON.stringify(report, null, 2) + "\n");
  const lab = openLaboratory(join(cwd, dir));
  // --as accepts a registered name or an id, same resolution as tools/lab.js
  const participants = [...lab.state().participants.values()];
  const ref = provenance.actor;
  const match = participants.some((p) => p.id === ref) ? ref
    : participants.filter((p) => p.name === ref).length === 1 ? participants.find((p) => p.name === ref).id
    : null;
  if (!match) throw new Error(`no unique participant "${ref}" — arrive first, or use the id`);
  provenance = { ...provenance, actor: match };
  const observation = lab.observe({
    statement: `Status report kept at ${file.slice(cwd.length + 1)} — condition snapshot: chain ${report.record.chainVerifies.value ? "verifies" : "FAILS"}, conformance ${report.conformance.ok === false ? "FAILS" : "ok"}, ${report.conditions.length} condition(s): ${report.conditions.map((c) => c.condition).join(", ") || "none"}.`,
    provenance,
  });
  return { file, observation };
}
