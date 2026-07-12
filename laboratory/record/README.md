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
node tools/lab.js sessions   # the log, partitioned by seals
node tools/lab.js history    # every event, oldest first
node tools/lab.js explain <id>  # every event touching one object
node tools/lab.js verify     # mechanical integrity check
node tools/lab.js sources    # source groundings, re-checked against reality now
```

Or read `log.jsonl` directly — one JSON event per line. Or open this directory
in a browser through the Door: the page re-verifies the chain client-side. No
tool is required to understand the record; the tools are conveniences, not
gatekeepers.

## To continue previous work

You owe the Laboratory five obligations (`../PROTOCOL.md` — frozen 2026-07-12):
**Identity** (register before contributing), **Grounding** (every assertion
says what it stands on; explicit conjecture is legal), **Provenance** (every
act carries who and why), **Explicit Judgment** (conclusions state their
reasoning), **Sealing** (close your session with a summary before departing).

From any shell — identity is always explicit (`--as`), intention always stated
(`--because`); nothing is remembered between commands:

```
node tools/lab.js arrive --name "Ada" --kind human --because "continue the open question"
node tools/lab.js observe "what I saw" --as Ada --because "ground the next assertion"
node tools/lab.js assert --about <entity> --predicate p --value v \
     --grounded-in observation:<id> --as Ada --because "..."
# source grounding: "source:cabinet:CAB-007" and "source:file:<path>" are
# checked against reality at write time; anything else is a free citation,
# legal but reported as unchecked
node tools/lab.js judge --conclusion "..." --reasoning "..." --basis <id> --as Ada --because "..."
node tools/lab.js unknown "what I could not settle" --as Ada --because "keep it visible"
node tools/lab.js seal "what I did and what remains" --as Ada --because "depart"
```

If two Participants overlap, the Laboratory refuses to fork history: the one
whose view went stale is told to reopen and continue from the new tip.

## The engineering backlog

The Laboratory owns its engineering work. The backlog lives in this record as
ordinary entities and assertions — every reprioritization keeps its history:

```
node tools/backlog.js                       # open items by priority
node tools/backlog.js add --title "..." --priority N --as You --because "..."
node tools/backlog.js prioritize <id> --priority N --as You --because "..."
node tools/backlog.js done <id> --as You --because "..."
```

## To take the Place with you

```
node tools/lab.js preserve --as You --because "..."     # one portable artifact
node tools/lab.js restore <file> --dir <empty place>    # a living copy, law included
```

A preservation is a single JSON file carrying the full event history, the
chain tip, the Protocol, and this arrival document. Restore refuses tampered
artifacts and never overwrites an existing record.

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
