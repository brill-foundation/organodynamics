// Source grounding at the boundary — obligation 2 where the record meets the
// world outside itself.
//
// Grounding refs INTO the record (observation, derivation) are checked by the
// Kernel against the record: a closed world, always decidable. A source ref
// points OUTSIDE the record, so it is checkable only where it names something
// this Laboratory can reach. No heuristics — the writer says what they mean:
//
//   cabinet:CAB-007   an authored Cabinet artifact — must exist in the catalog
//                     and declare that id in its frontmatter
//   file:<path>       a path under the Laboratory's root — must exist
//   anything else     a free citation (a book, a URL, a conversation) —
//                     accepted, but reported as unchecked, never as verified
//
// The check runs when the assertion is written (the writer's obligation) and
// again on demand (the reader's report). It never blocks free citation:
// closing the checkable hole must not pretend to close the honest one.
//
// Dependencies: node:fs, node:path.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

export function checkSource(ref, root) {
  const r = String(ref);

  if (r.startsWith("cabinet:")) {
    const id = r.slice("cabinet:".length).trim();
    const catalogFile = join(root, "cabinet", "catalog.json");
    if (!existsSync(catalogFile)) {
      return { ref: r, scheme: "cabinet", ok: false, detail: `no cabinet catalog at ${catalogFile}` };
    }
    for (const name of JSON.parse(readFileSync(catalogFile, "utf8"))) {
      const path = join(root, "cabinet", name);
      if (!existsSync(path)) continue;
      const head = readFileSync(path, "utf8").slice(0, 2000);
      const declared = head.match(/^id:\s*(\S+)\s*$/m);
      if (declared && declared[1] === id) {
        return { ref: r, scheme: "cabinet", ok: true, detail: `cabinet/${name}` };
      }
    }
    return { ref: r, scheme: "cabinet", ok: false, detail: `no catalogued artifact declares id ${id}` };
  }

  if (r.startsWith("file:")) {
    const path = r.slice("file:".length).trim();
    const ok = existsSync(join(root, path));
    return { ref: r, scheme: "file", ok, detail: ok ? path : `no file at ${path} under ${root}` };
  }

  return { ref: r, scheme: "citation", ok: null, detail: "free citation — not locally checkable" };
}

// Every source-grounded assertion in the record, with its check result now.
// A reader's tool: reality may have changed since writing; this says so.
export function sourceReport(lab, root) {
  const report = [];
  for (const a of lab.state().assertions.values()) {
    if (a.grounding?.kind !== "source") continue;
    report.push({ assertion: a.id, predicate: a.predicate, ...checkSource(a.grounding.ref, root) });
  }
  return report;
}
