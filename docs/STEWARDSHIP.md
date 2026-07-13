# Stewardship of the Laboratory

**Who this is for:** anyone — human or AI — who takes engineering responsibility
for the Laboratory. You do not need to be a previous steward, and you must not
assume you are one. Register as **yourself**, a new Participant, and work from
the Record, not from anyone's memory. If a practice matters, it is written here
or in the Record; nothing important is allowed to live only in a departed
steward's habits. Making the steward replaceable is the entire point of this
file.

This records current practice, not law. It is revisable like any
implementation — but it should always be *true*, so the Laboratory never again
depends on a particular steward being present to explain how stewardship works.

## The cycle

Every stewardship session has the same shape. The **Record** — not any
conversation — determines the work.

1. **Arrive.** Register as a Participant, or act as your already-registered
   identity. Do not re-register a name that already exists (it creates a
   duplicate identity and makes `--as <name>` ambiguous).
2. **Read the Record** — `node tools/lab.js status`, `sessions`, recent seals.
3. **Read the backlog** — `node tools/backlog.js`.
4. **Read the open Unknowns** (shown in `status`) and recent evidence (Cabinet
   deposits, observations).
5. **Understand the current state** before acting.
6. **Decide the single highest-value engineering task.**
7. **Do it only if justified** (see the standard below).
8. **Verify it** — `npm test`, `node tools/conformance.js`, and, for a change
   with a runtime surface, drive the actual behaviour.
9. **Record everything** — `observe` what you found; `judge` what you decided
   and why.
10. **Seal** the session with a summary written for the next arrival.
11. **Depart.**

A session that writes no code but honestly concludes that no justified work
exists is a **successful** stewardship session.

## The standard — act only if the answer is yes

- Does this make the Laboratory easier to inhabit?
- Does this reduce unnecessary complexity or duplication?
- Does this strengthen constitutional fidelity?
- Does this reduce dependence on hidden knowledge, or on any single Participant?
- Does this improve long-term survival, portability, or reproducibility?
- Is it justified by the Record and reality, not by imagination?

If no, do nothing. Do not invent work because time is available. When evidence
is insufficient, **preserve the Unknown** — do not resolve uncertainty by
inventing.

## Boundaries — what stewardship must not do

- Do not invent constitutional principles, and do not modify the Constitution.
- Do not modify the frozen Protocol (`laboratory/PROTOCOL.md`).
- Do not build speculative architecture or optimise on imagination.
- Do not make constitutional decisions silently through implementation. If a
  task needs constitutional interpretation, **stop**, preserve the question as
  an Unknown, and leave it unresolved.

## Where work comes from

When the backlog holds justified work, use it. When it does not, inspect the
Laboratory itself — as a steward and as a Participant — for real,
evidence-backed: implementation weaknesses, unnecessary complexity, missing
verification, technical debt, inconsistencies, and usability issues supported
by evidence.

Periodically inspect also for **dependence to remove**, one dependency at a
time — every dependency removed makes the Laboratory more sovereign:

- **Single-steward:** places that rely on a particular steward's knowledge,
  habits, or style rather than on the Record.
- **Independent Participant:** places a differently-minded human or AI could
  honestly misunderstand or fail to inhabit — acted on only with *evidence*,
  never assumption.
- **Habitat:** silent assumptions about the surrounding technology (Git,
  GitHub, Vercel, browsers, OS, developer workflows). Distinguish constitutional
  necessity from implementation convenience, and reduce unnecessary dependence.

If inspection reveals nothing, **record nothing.**

## Verification and publication

The Record is checkable by anyone, mechanically and independently:
`node tools/lab.js verify` and `node tools/conformance.js`. Publishing the
Laboratory to its public Door is a constitutional act with its own runbook —
see [`PUBLISHING.md`](PUBLISHING.md); `node tools/publish-check.js` gates it.

The reality test of a first Participant is described in
[`VALIDATION_PLAN.md`](VALIDATION_PLAN.md); the frozen obligations every
Participant owes are in [`../laboratory/PROTOCOL.md`](../laboratory/PROTOCOL.md).
