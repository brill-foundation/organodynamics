# Troubleshooting — recovery without new rules

Every procedure here uses mechanisms that already exist. There is no
emergency mode: the Laboratory's answer to trouble is always the same
append-only record, used honestly.

## "N since last seal" but nobody is working — an interrupted Session

Someone departed without sealing. Nothing is corrupted; their events are in
the record, visibly unsealed.

1. Read what they did: `node tools/lab.js sessions` (the OPEN session) or
   `node tools/lab.js history`.
2. Either **continue** their work as your own session, or **close it on
   their behalf** with an honest summary:

```
node tools/lab.js seal "Sealing on behalf of <name>, who departed without sealing. Their work: <what the events show>. Status of that work: <finished/unclear>." --as You --because "close an abandoned session so the record has a clean handoff"
```

Sealing another's work is legal — the seal carries *your* identity and
intention, so the record stays honest about who closed what.

## "the record grew outside this session — reopen the Laboratory"

Another Participant preserved work while your view of the record was stale.
This is the Laboratory refusing to fork history — it is protection, not
failure. Recovery: re-run your command (each CLI invocation reopens fresh).
If it happens constantly, you and someone else are working simultaneously;
coordinate serially or accept the retries.

## "VERIFICATION FAILED" / "history fails chain verification"

The record file was altered outside the rules — edited, truncated, or
corrupted. The Laboratory refuses to adopt it, which is correct.

1. **Do not write anything.** Do not "fix" the file by hand.
2. Keep the damaged file as evidence (rename it, e.g. `log.jsonl.damaged`).
3. Recover the last good record from one of:
   - **git**: `git checkout -- laboratory/record/log.jsonl` (or an earlier
     commit of it) — every past commit anchored a verified state;
   - **a preservation**: `node tools/lab.js restore <preservation.json>
     --dir <fresh-dir>`, then continue in the fresh place.
4. When you next seal, record an observation stating that the damaged file
   existed and how you recovered — the incident is part of history too.

## "source grounding does not resolve"

You grounded an assertion in `cabinet:CAB-xxx` or `file:path` that does not
exist. Usually a typo — check `cabinet/catalog.json` or the path. If the
source genuinely lives outside this Laboratory (a book, a URL, a
conversation), write it as a plain citation without the `cabinet:`/`file:`
prefix: free citations are legal and honestly reported as unchecked. Do not
invent a file to satisfy the checker.

## "unregistered participant" / "names N participants — use the id"

You have not arrived yet (run `arrive` first), or your name matches several
registered Participants. Find yours with `node tools/lab.js status` and pass
the full `od:participant:…` id to `--as`.

## "nothing to seal: no work since the last seal"

Sealing an empty session is refused — an empty departure says nothing. If
you only read, just leave; reading needs no seal.

## Two people worked on separate copies of the Laboratory

Their records have diverged, and there is deliberately no automatic merge —
two histories cannot both be the one chain. Treat each copy as its own
sovereign place. To bring work home: a Participant re-enters the *findings*
(observations, judgments, unknowns) into the main record by hand, citing the
other copy as a source. Prefer preventing this: serial work on one copy, or
explicit hand-offs via preservation files.

## No Node.js

You can read but not write: open the Sessions room in a browser (the
Laboratory's web page renders the record and re-verifies its chain
client-side), or read `laboratory/record/log.jsonl` directly — one JSON
event per line. To contribute, install Node 20+ from nodejs.org.

## Something not covered here

That is a finding. Record it before you leave:

```
node tools/lab.js unknown "TROUBLESHOOTING gap: <what happened and what was unclear>" --as You --because "the Arrival Kit failed me here; the next person deserves better"
```

The Arrival Kit is engineering, and this is how it improves.
