# You have arrived at the Laboratory

This directory is a Laboratory record: an append-only, hash-chained event log
(`log.jsonl`) from which the Laboratory's entire state is derived. Nothing else
holds memory. There is no hidden context; if it is not in the log, it did not
happen.

The Laboratory is **passive**. It will not tell you what to do, schedule you,
or expect you. It only preserves reality. Participants — human, AI, script —
come and go independently.

## To understand the current state

```
node tools/lab.js status     # participants, counts, open unknowns, last seal
node tools/lab.js history    # every event, oldest first
node tools/lab.js verify     # mechanical integrity check
```

Or read `log.jsonl` directly — one JSON event per line. No tool is required to
understand the record; the tools are conveniences, not gatekeepers.

## To continue previous work

You owe the Laboratory five obligations (`../PROTOCOL.md` — frozen 2026-07-12):
**Identity** (register before contributing), **Grounding** (every assertion
says what it stands on; explicit conjecture is legal), **Provenance** (every
act carries who and why), **Explicit Judgment** (conclusions state their
reasoning), **Sealing** (close your session with a summary before departing).

Programmatically:

```js
import { openLaboratory } from "../../src/laboratory/laboratory.js";
const lab = openLaboratory("laboratory/record");

const me = lab.registerParticipant({ name: "…", kind: "human|ai|script", intention: "…" });
const by = (intention) => ({ actor: me, intention });

lab.status().openUnknowns;                              // what is unfinished
const o = lab.observe({ statement: "…", provenance: by("…") });
lab.assert({ about, predicate, value, grounding: { kind: "observation", ref: o }, provenance: by("…") });
lab.judge({ conclusion: "…", reasoning: "…", basis: [o], provenance: by("…") });
lab.seal({ summary: "what you did and what remains", provenance: by("depart") });
```

Every write is preserved immediately. When you seal and commit this directory
to the Record (git), your seal is externally anchored.

## The success test

If you can understand this Laboratory, continue its work, and leave it in a
better state using only what you found here — it has succeeded. If you cannot,
that failure is an observation: record it before you leave.
