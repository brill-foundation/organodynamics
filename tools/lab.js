#!/usr/bin/env node
// The Laboratory from any shell — every obligation of the frozen Protocol
// (laboratory/PROTOCOL.md) reachable without writing code. Identity is always
// explicit (--as); nothing is remembered between invocations: no hidden
// memory, the record is the only state.
//
// Reading:
//   node tools/lab.js status                       where am I, what is open
//   node tools/lab.js sessions                     the log, partitioned by seals
//   node tools/lab.js history                      every event, oldest first
//   node tools/lab.js explain <id>                 every event touching an object
//   node tools/lab.js verify                       mechanical integrity (exit 0/1)
//
// Writing (every command needs --because "<intention>"; all but arrive need
// --as <participant name or id>):
//   node tools/lab.js arrive --name "Ada" --kind human --because "..."
//   node tools/lab.js observe "<statement>" [--about <id>] --as Ada --because "..."
//   node tools/lab.js entity --kind Question --as Ada --because "..."
//   node tools/lab.js assert --about <id> --predicate p --value v \
//        --grounded-in observation:<id>|source:<ref>|derivation:<id[,id]>|conjecture \
//        --as Ada --because "..."
//   node tools/lab.js judge --conclusion "..." --reasoning "..." [--basis <id[,id]>] \
//        [--about <id>] --as Ada --because "..."
//   node tools/lab.js unknown "<question>" [--about <id>] --as Ada --because "..."
//   node tools/lab.js resolve <unknown-id> --resolution "..." --as Ada --because "..."
//   node tools/lab.js evidence --assertion <id> --bearing supports|contradicts \
//        --source "..." --as Ada --because "..."
//   node tools/lab.js seal "<summary>" --as Ada --because "..."
//
// --dir <path> selects a record (default laboratory/record).

import { parseArgs } from "node:util";
import { openLaboratory } from "../src/laboratory/laboratory.js";

const { values: opt, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    dir: { type: "string", default: "laboratory/record" },
    as: { type: "string" },
    because: { type: "string" },
    name: { type: "string" },
    kind: { type: "string" },
    about: { type: "string" },
    predicate: { type: "string" },
    value: { type: "string" },
    "grounded-in": { type: "string" },
    conclusion: { type: "string" },
    reasoning: { type: "string" },
    basis: { type: "string" },
    resolution: { type: "string" },
    assertion: { type: "string" },
    bearing: { type: "string" },
    source: { type: "string" },
    json: { type: "boolean", default: false },
  },
});

const [cmd = "status", ...rest] = positionals;
const fail = (msg) => { console.error(`lab: ${msg}`); process.exit(2); };
const need = (v, what) => { if (v === undefined || v === "") fail(`missing ${what}`); return v; };

const lab = openLaboratory(opt.dir);

// --as accepts a participant id or a registered name (if unique). Names live
// in the record, so this resolution reads state, never hidden config.
function whoami() {
  const ref = need(opt.as, "--as <participant name or id>");
  const participants = [...lab.state().participants.values()];
  if (participants.some((p) => p.id === ref)) return ref;
  const byName = participants.filter((p) => p.name === ref);
  if (byName.length === 1) return byName[0].id;
  if (byName.length > 1) fail(`"${ref}" names ${byName.length} participants — use the id`);
  fail(`no participant "${ref}" — arrive first: node tools/lab.js arrive --name "${ref}" --kind human|ai|script --because "..."`);
}

const provenance = () => ({ actor: whoami(), intention: need(opt.because, '--because "<intention>"') });

function parseGrounding(spec) {
  const s = need(spec, "--grounded-in observation:<id>|source:<ref>|derivation:<ids>|conjecture");
  if (s === "conjecture") return { kind: "conjecture" };
  const at = s.indexOf(":");
  if (at < 0) fail(`unrecognized grounding: ${s}`);
  const kind = s.slice(0, at);
  const ref = s.slice(at + 1);
  if (kind === "derivation") return { kind, ref: ref.split(",").map((r) => r.trim()) };
  if (kind === "observation" || kind === "source") return { kind, ref };
  fail(`unrecognized grounding kind: ${kind}`);
}

const out = (v) => console.log(typeof v === "string" ? v : JSON.stringify(v, null, 2));

switch (cmd) {
  case "status": {
    const s = lab.status();
    if (opt.json) { out(s); break; }
    console.log(`record        ${s.record}`);
    console.log(`events        ${s.events}  (${s.unsealedEvents} since last seal)`);
    console.log(`chain         ${s.chainValid ? "verifies" : "FAILS VERIFICATION"}`);
    console.log(`participants  ${s.participants.map((p) => `${p.name} (${p.kind})`).join(", ") || "none"}`);
    console.log(`counts        ${Object.entries(s.counts).map(([k, v]) => `${k}:${v}`).join("  ")}`);
    if (s.lastSeal) console.log(`last seal     #${s.lastSeal.at} by ${s.lastSeal.by}\n              "${s.lastSeal.summary}"`);
    if (s.openUnknowns.length) {
      console.log(`open unknowns`);
      for (const u of s.openUnknowns) console.log(`  ${u.id}\n    ${u.question}`);
    } else console.log(`open unknowns none`);
    break;
  }
  case "sessions": {
    const sessions = lab.sessions();
    if (opt.json) { out(sessions); break; }
    for (const s of sessions) {
      const head = s.sealed ? `session ${s.index}  events #${s.from}–#${s.to}  sealed by ${s.by}` : `session ${s.index}  events #${s.from}–#${s.to}  OPEN`;
      console.log(head);
      console.log(`  participants: ${s.participants.join(", ")}`);
      if (s.summary) console.log(`  "${s.summary}"`);
    }
    if (!sessions.length) console.log("the record is empty — this Laboratory awaits its first arrival");
    break;
  }
  case "history": {
    for (const e of lab.events()) {
      const p = e.payload;
      const gist = p.summary ?? p.statement ?? p.conclusion ?? p.question ?? p.name ?? p.predicate ?? p.kind ?? "";
      console.log(`#${e.seq}  ${e.type}  ${gist ? JSON.stringify(gist) + "  " : ""}[${e.provenance.actor} — ${e.provenance.intention}]`);
    }
    break;
  }
  case "explain": {
    const id = need(rest[0], "an object id");
    const chain = lab.explain(id);
    if (!chain.length) fail(`nothing in the record touches ${id}`);
    out(chain);
    break;
  }
  case "verify": {
    const ok = lab.verify();
    console.log(ok ? "chain and seals verify" : "VERIFICATION FAILED");
    process.exit(ok ? 0 : 1);
  }
  case "arrive": {
    const id = lab.registerParticipant({
      name: need(opt.name, "--name"),
      kind: need(opt.kind, "--kind human|ai|script|system"),
      intention: need(opt.because, '--because "<intention>"'),
    });
    out(id);
    break;
  }
  case "observe":
    out(lab.observe({ statement: need(rest[0], "a statement"), about: opt.about ?? null, provenance: provenance() }));
    break;
  case "entity":
    out(lab.createEntity({ kind: need(opt.kind, "--kind"), provenance: provenance() }));
    break;
  case "assert":
    out(lab.assert({
      about: need(opt.about, "--about <entity id>"),
      predicate: need(opt.predicate, "--predicate"),
      value: need(opt.value, "--value"),
      grounding: parseGrounding(opt["grounded-in"]),
      provenance: provenance(),
    }));
    break;
  case "judge":
    out(lab.judge({
      about: opt.about ?? null,
      conclusion: need(opt.conclusion, "--conclusion"),
      reasoning: need(opt.reasoning, "--reasoning"),
      basis: opt.basis ? opt.basis.split(",").map((b) => b.trim()) : [],
      provenance: provenance(),
    }));
    break;
  case "unknown":
    out(lab.recordUnknown({ question: need(rest[0], "a question"), about: opt.about ?? null, provenance: provenance() }));
    break;
  case "resolve":
    out(lab.resolveUnknown(need(rest[0], "an unknown id"), { resolution: need(opt.resolution, "--resolution"), provenance: provenance() }));
    break;
  case "evidence":
    out(lab.attachEvidence({
      assertion: need(opt.assertion, "--assertion <id>"),
      bearing: need(opt.bearing, "--bearing supports|contradicts"),
      source: need(opt.source, "--source"),
      provenance: provenance(),
    }));
    break;
  case "seal":
    out(lab.seal({ summary: need(rest[0], "a summary"), provenance: provenance() }));
    break;
  default:
    fail(`unknown command: ${cmd}`);
}
