#!/usr/bin/env node
// The Laboratory's engineering backlog, from any shell. The backlog lives in
// the record itself (entities + assertions — see src/laboratory/backlog.js);
// this tool is only a view and a pen.
//
//   node tools/backlog.js                      open items by priority
//   node tools/backlog.js list --all           including done/dropped
//   node tools/backlog.js add --title "..." --priority N \
//        [--grounded-in observation:<id>|...] --as <who> --because "..."
//   node tools/backlog.js prioritize <id> --priority N --as <who> --because "..."
//   node tools/backlog.js done <id> --as <who> --because "..."
//   node tools/backlog.js drop <id> --as <who> --because "..."
//   node tools/backlog.js reopen <id> --as <who> --because "..."
//
// --dir <path> selects a record (default laboratory/record).

import { parseArgs } from "node:util";
import { openLaboratory } from "../src/laboratory/laboratory.js";
import { deriveBacklog, addItem, setPriority, setStatus } from "../src/laboratory/backlog.js";

const { values: opt, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    dir: { type: "string", default: "laboratory/record" },
    as: { type: "string" },
    because: { type: "string" },
    title: { type: "string" },
    priority: { type: "string" },
    "grounded-in": { type: "string" },
    all: { type: "boolean", default: false },
    json: { type: "boolean", default: false },
  },
});

const [cmd = "list", ...rest] = positionals;
const fail = (msg) => { console.error(`backlog: ${msg}`); process.exit(2); };
const need = (v, what) => { if (v === undefined || v === "") fail(`missing ${what}`); return v; };

const lab = openLaboratory(opt.dir);

function whoami() {
  const ref = need(opt.as, "--as <participant name or id>");
  const participants = [...lab.state().participants.values()];
  if (participants.some((p) => p.id === ref)) return ref;
  const byName = participants.filter((p) => p.name === ref);
  if (byName.length === 1) return byName[0].id;
  fail(byName.length ? `"${ref}" is ambiguous — use the id` : `no participant "${ref}" — arrive first via tools/lab.js`);
}
const provenance = () => ({ actor: whoami(), intention: need(opt.because, '--because "<intention>"') });

function parseGrounding(spec) {
  if (!spec) return undefined;
  if (spec === "conjecture") return { kind: "conjecture" };
  const at = spec.indexOf(":");
  if (at < 0) fail(`unrecognized grounding: ${spec}`);
  const kind = spec.slice(0, at), ref = spec.slice(at + 1);
  return kind === "derivation" ? { kind, ref: ref.split(",").map((r) => r.trim()) } : { kind, ref };
}

function show() {
  const items = deriveBacklog(lab).filter((i) => opt.all || i.status === "open");
  if (opt.json) { console.log(JSON.stringify(items, null, 2)); return; }
  if (!items.length) { console.log("the backlog is empty"); return; }
  for (const i of items) {
    console.log(`P${i.priority}  [${i.status}]  ${i.title}`);
    console.log(`      ${i.id}`);
  }
}

switch (cmd) {
  case "list":
    show();
    break;
  case "add": {
    const id = addItem(lab, {
      title: need(opt.title, "--title"),
      priority: parseInt(need(opt.priority, "--priority"), 10),
      grounding: parseGrounding(opt["grounded-in"]),
      provenance: provenance(),
    });
    console.log(id);
    break;
  }
  case "prioritize":
    setPriority(lab, need(rest[0], "an item id"), parseInt(need(opt.priority, "--priority"), 10), provenance());
    show();
    break;
  case "done":
  case "drop":
  case "reopen":
    setStatus(lab, need(rest[0], "an item id"), { done: "done", drop: "dropped", reopen: "open" }[cmd], provenance());
    show();
    break;
  default:
    fail(`unknown command: ${cmd}`);
}
