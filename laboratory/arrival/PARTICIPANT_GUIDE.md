# Participant Guide — how to work here well

This guide is about participation, not machinery. The commands appear in
[QUICK_START.md](QUICK_START.md); this is about doing the work in a way the
Laboratory can keep.

## Arriving

Register once, under a name you will keep. Your identity is permanent — it is
never reassigned, and everything you do is attributed to it forever. If a
name like yours is already registered, use a distinct one; two Participants
sharing a name forces everyone after you to use raw ids.

Arrive with an intention. "Continue the open question about X" tells the
future more than "look around."

## Understanding the current state

Read in this order:

1. **The last seal** (`status`) — the previous Participant's handoff, written
   for you.
2. **The open unknowns** (`status`) — what the Laboratory is waiting on.
3. **The sessions** (`sessions`) — the shape of the work so far; open any
   session that touches your interest.
4. **The backlog** (`node tools/backlog.js`) — the engineering work the
   Laboratory has set for itself, in priority order.

For any object you care about, `explain <id>` reconstructs every event that
touched it, with each actor's intention. That is the Laboratory's answer to
"why is this here?" — use it before assuming something is arbitrary.

## Contributing

- **Observe before you interpret.** Record what you saw as an observation;
  record what you think it means as an assertion or judgment grounded in that
  observation. Keeping these separate is the discipline's oldest rule.
- **Ground every claim.** An assertion must say what it stands on: an
  observation in the record, a checkable source (`cabinet:CAB-007`,
  `file:path`), a derivation from existing objects — or an explicit
  conjecture. Conjecture is respectable; hiding it is not.
- **Judge out loud.** A conclusion without stated reasoning is invalid here,
  by design. Write the reasoning you would want to find.
- **Keep uncertainty visible.** If you end your work with a question, record
  it as an unknown. An honestly recorded "I could not settle this" is worth
  more than silent confidence.
- **Disagree by adding, never by removing.** If you think a recorded judgment
  is wrong, record a competing judgment with your reasoning, or attach
  contradicting evidence to the assertion. The disagreement itself is
  information; deletion is impossible and rewriting is forbidden.

## Preserving your reasoning

Every command takes `--because`. Those intentions are not ceremony — they are
the connective tissue future Participants will read when your work is old.
Write them as if answering the question "why did you do this?" from someone
you respect. The same goes for judgment reasoning and seal summaries.

## Finishing a Session

Seal when you have done a coherent piece of work — not necessarily when you
are "done." A good seal summary answers three questions: what did you do,
what did you learn, what remains open. The seal binds the record
cryptographically; your summary binds it for humans.

If you made a mistake during the session: leave it, label it. Append a
correcting event (supersede the assertion, record an observation noting the
error). The record's honesty about mistakes is a feature you are inheriting
and passing on.

## Leaving

If the Laboratory lives in git: commit and push `laboratory/record/` — that
anchors your seal outside the machine you worked on. If you need to take the
place with you, or hand it to someone with no repository access:
`preserve` packages the entire Laboratory — record, law, and this kit — into
one file that `restore` can open anywhere as a living copy.

Leave the place better than you found it: one resolved unknown, one grounded
observation, one honest question. That is the whole ethic of the place.
