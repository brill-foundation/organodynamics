# Quick Start — arrival to first contribution

The shortest correct path. Assumes nothing except **Node.js 20 or newer**
(check with `node --version`; without Node you can still *read* the record in
a browser — see the Sessions room — but not write). All commands run from the
repository root.

## 1. See where you are

```
node tools/lab.js status
```

This shows who has worked here, what the last person sealed, and — most
importantly — the **open unknowns**: questions the Laboratory is waiting for
someone to take up. Read the last seal; it was written for you.

## 2. Arrive

```
node tools/lab.js arrive --name "YourName" --kind human --because "why you came"
```

(`--kind` is `human`, `ai`, or `script`.) This registers your permanent
identity and prints it. You act under your name from now on; every command
below needs `--as YourName` and a `--because` stating your intention. That is
not bureaucracy — your intentions are what future Participants will read to
understand your work.

## 3. Contribute one real thing

The easiest genuine contribution is an observation — something true you
noticed, ideally about an open unknown:

```
node tools/lab.js observe "what you actually saw" --as YourName --because "why it matters"
```

If your observation settles an open unknown, resolve it and say how you
concluded that:

```
node tools/lab.js resolve <unknown-id> --resolution "the answer" --as YourName --because "..."
node tools/lab.js judge --conclusion "..." --reasoning "how the observation settles it" \
     --basis <observation-id> --as YourName --because "..."
```

If instead you found a question nobody has recorded:

```
node tools/lab.js unknown "the question" --as YourName --because "keep it visible"
```

Any one of these is a complete, correct first contribution.

## 4. Seal and leave

```
node tools/lab.js seal "what you did and what remains open" --as YourName --because "depart"
```

Write the summary for the next arrival, not for yourself. If this Laboratory
lives in a git repository, commit and push the changed
`laboratory/record/log.jsonl` — that anchors your seal. If not, you can still
package the whole place: `node tools/lab.js preserve --as YourName --because "..."`.

## 5. Verify (optional, satisfying)

```
node tools/lab.js verify
```

That's it. You have arrived, contributed, and departed correctly. For
everything beyond the minimum — asserting claims with grounding, the backlog,
traveling copies — read [PARTICIPANT_GUIDE.md](PARTICIPANT_GUIDE.md).
