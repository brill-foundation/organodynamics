---
id: EXPERIMENT-002
title: Laboratory calibration — the lab tested against the reality it can reach
genre: experiment report (template: Question / Prediction / Observation / Decision Rule / Result / Architectural Consequence)
opened: 2026-07-07
status: complete — three runs, three findings, three evidence-driven fixes, all retested
provenance: claude-fable-5/session-56ztkm; all runs executed in isolated harnesses (fresh $HOME, throwaway bare remotes); the real journal was never touched by test data
---

# EXPERIMENT-002 — Laboratory Calibration

Why this before the alternatives: every future architectural decision is
supposed to emerge from evidence this laboratory produces, and an
uncalibrated instrument produces untrustworthy evidence (RFC-001 §2). The
lab had never run outside the container that built it. Two experiments
were runnable today without waiting on any other participant; waiting was
the only alternative, and it teaches nothing.

## Run 1 — Cold clone: does the doorway work on a fresh machine?

- **Question:** can a newcomer follow README verbatim (clone → setup →
  note) on a machine with no git identity and no prior state?
- **Prediction:** something in the documented path breaks.
- **Observation:** two failures on the *first note*. (1) The auto-commit
  fails — fresh machines have no git `user.email`. (2) Worse: `ods`
  printed `committed.` **after the commit failed** — the instrument
  reported success on failure.
- **Decision rule:** any break in the documented newcomer path is fixed
  the same day; an instrument that misreports is fixed before anything
  else.
- **Result:** `setup` now sets a repo-local git identity derived from the
  participant identity when none exists; `git_commit` reports failure
  honestly with the recovery step. Retested from a fresh `$HOME`: passes.
- **Architectural consequence:** none — no new concepts; two bugs. The
  doorway's admission cost stays where D-1/D-2 can measure it.

## Run 2 — Induced H5: the shape of the concurrent-append conflict

- **Question:** what actually happens when two participants append
  concurrently — and is `ods sync`'s guidance correct? (H5's registered
  success condition is "the conflict occurring and being recorded, with
  its shape described." This run *induces* the collision in a controlled
  harness; the natural-occurrence observation remains open.)
- **Prediction:** the linear chain conflicts (registered, EXPERIMENT-001
  H5).
- **Observation:** conflict occurred as registered — and deeper than
  predicted. The conflict is **structural, not textual**: keeping both
  event lines in order (exactly what `ods sync`'s guidance said to do)
  yields `chain break at event 30` — the later event's `prev` no longer
  matches. **The lab's own advice, followed faithfully, corrupts the
  chain.** The verified resolution: re-append the local event's *body* on
  the new tip — body and provenance unchanged, id changes with chain
  position. Corollary worth stating as a finding: **journal events are
  provisional until pushed**; locally, only the body is final.
- **Decision rule:** guidance falsified by experiment is replaced by the
  experimentally verified procedure; since the procedure is mechanical,
  it is automated — a newcomer must never face a mid-rebase state
  (doorway principle).
- **Result:** `ods sync` now tries a plain rebase first (a third run
  showed the previous version routed cleanly-rebaseable divergence to
  manual steps unnecessarily); on a journal-only conflict it auto-resolves
  by body re-append and pushes; on anything else it aborts the rebase and
  prints the *corrected* manual procedure. Retest matrix: pure journal
  collision auto-resolves with chain intact; non-overlapping divergence
  rebases cleanly; both verified.
- **Architectural consequence:** one sentence enters the lab's working
  knowledge, evidence-backed: *an event id is final only once pushed;
  bodies are the durable content, ids are chain position.* This was
  discovered, not designed — and it is the first constraint in this
  project justified by a run experiment rather than an argument.

## Run 3 — Unplanned: the dirty-tree failure

- **Question (post hoc):** the harness accidentally ran `sync` with an
  uncommitted file — what does a participant see?
- **Observation:** git's raw error, exit code 0, no guidance. A
  participant mid-edit (a review file, say) would hit exactly this.
- **Decision rule:** accidental findings are findings (this is the
  closest thing to genuine surprise the lab has produced — nobody
  designed this run).
- **Result:** `sync` now checks the tree first and fails honestly with
  the exact next step. Retested: exit 1, clear message.
- **Architectural consequence:** none. A bug.

## What was deliberately NOT built

No DAG/CRDT journal (the observed conflict is handled by body re-append;
a fancier structure has no evidence behind it — and natural H5 data is
still wanted); no retry queues, no daemons, no lock files. Also flagged
for the humans rather than acted on: `drafts/` contains nine 0-byte
placeholder files, unreferenced since the README rewrite — they cost a
newcomer confusion (D-3 relevance) and nothing else; deleting them is
proposed but is the authors' call, since the titles are their staked
intentions.

## The meta-result

For the first time in this project, the loop's reality half actually
turned: a built artifact (sync guidance) was staked, exposed to a real
mechanism (an induced collision), falsified, and replaced — and the whole
pass is in the record. This is not X3 (the surprise came from a run I
designed, not from outside), and it closes nothing that is locked. But
the engine's crank demonstrably turns when something real is fed into it.
The report template used here (Question/Prediction/Observation/Decision
Rule/Result/Consequence) has now earned its existence by use, per the
methodology adopted this week.
