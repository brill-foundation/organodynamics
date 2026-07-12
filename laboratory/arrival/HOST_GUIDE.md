# Host Guide — inviting a Participant

You are inviting someone — a person, an AI system, or a script — to work in
the Laboratory. This guide assumes you are not a software engineer. Your job
is small by design: the Laboratory explains itself, and your main
responsibility is to *not* explain it privately.

## What you must provide

1. **The Laboratory itself** — one of:
   - the repository address (they clone it), or
   - a preservation file (one `.json` — see "Sending the place itself" below).
2. **The Node.js requirement** — version 20 or newer, from nodejs.org. That
   is the only software needed. (Without it they can read but not write.)
3. **Nothing else.** No verbal history, no "what we really meant," no private
   context. If you find yourself needing to explain something in person, that
   is a defect in the Arrival Kit — please record it in the Laboratory as an
   unknown, or ask your Participant to.

## What the new Participant should read

Point them at one file: `laboratory/arrival/WELCOME.md`. It routes them to
everything else. If they want the shortest path, it is
`laboratory/arrival/QUICK_START.md`.

## How they discover the current state

They run `node tools/lab.js status` — it shows who has worked here, the last
handoff summary, and the open questions. You do not need to brief them.

## How to verify a Participant followed the Protocol

After they finish, from the repository root, run:

```
node tools/lab.js verify
```

- **"chain and seals verify"** — the record is intact. Then run
  `node tools/lab.js sessions` and check the newest session: it should be
  **sealed** (⏺, not OPEN) and its summary should describe their work.
- Optionally run `node tools/lab.js sources` — any ✗ marks a claimed source
  that does not exist; ask the Participant about it (the tools refuse these
  at write time, so a ✗ usually means reality changed afterwards).
- **"VERIFICATION FAILED"** — the record file was altered outside the rules.
  Do not panic and do not delete anything; see
  [TROUBLESHOOTING.md](TROUBLESHOOTING.md) → "Verification fails."

You never need to judge whether their *content* is good — competing views are
legal here. You are only checking that the record is intact and the session
was sealed.

## If a Session is interrupted

If a Participant disappears without sealing, their events remain in the
record, visibly unsealed (`status` shows "N since last seal"). Nothing is
lost and nothing is corrupted. Any Participant — including you, if you
arrive as one — may close the abandoned work with an honest seal, e.g.:
*"Sealing on behalf of <name>, who departed without sealing; their work ends
at event #N."* See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for the exact
steps.

## Inviting many Participants over time

- **One at a time is effortless.** Each arrival reads the last seal and
  continues. This is the Laboratory's native rhythm.
- **Two at once, same copy:** safe. The Laboratory refuses to interleave
  their work incorrectly; the second writer is told to reopen and continue.
  They lose nothing but a retry.
- **Two at once, separate copies (e.g. two clones):** their records diverge
  and there is deliberately no automatic merge. Prefer serial work on one
  copy. If parallel copies happen anyway, treat each copy as its own
  sovereign place; a Participant re-enters its findings into the main record
  by hand, citing the other copy as a source. This is honest, if laborious.

## Sending the place itself

`node tools/lab.js preserve --as You --because "..."` produces a single file
containing the whole Laboratory — record, Protocol, and this Arrival Kit.
Anyone can open it with
`node tools/lab.js restore <file> --dir <new-folder>` and work in a living
copy, no repository access required.
