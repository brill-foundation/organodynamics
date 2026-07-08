# Session Handoff — organodynamics

Operational note (testimony, not a representation). Written at the end of the
first working session so a fresh session can continue with full continuity.

## State at handoff (2026-07-06)

Branch: `claude/organodynamics-constitution-review-56ztkm`
Unpushed commits: 10 (this handoff is the 10th). Base: `origin/main` @ 473f4a9.
Push status: blocked all session — session GitHub token is read-only for the
org repo (minted at session start, before the Claude GitHub App was connected
to `brill-foundation`). Not fixable inside this session.

## What exists on the branch (the whole record)

- `rfcs/RFC-000-development-manifest.md` — the manifest, imported verbatim
- `reviews/RFC-000-constitutional-review.md` — constitutional review of RFC-000
- `rfcs/RFC-003-meta-review.md` + `meta-reviews/TEMPLATE.md`, `META-REVIEW-000.md`
- `rfcs/RFC-004-the-substrate.md` (rev 2) — the substrate / narrow waist
- `rfcs/RFC-005-recognition.md` — recognition without authority
- `tools/journal.py` + `journal/journal.jsonl` — EXPERIMENT-001, 19 events, chain intact
- `research/EXPERIMENT-001-minimum-viable-journal.md`
- `research/SEASONS.md` — the five research seasons
- `research/READING-001-the-emergent-process.md`
- `research/THEORY-001-the-discovery-engine.md`

## Where things stand conceptually

- Season 1 (Establish the Record) is running; its termination needs: push
  access restored, RFC-000 + external reviews in the repo, ≥1 journal event
  from a non-Claude process, META-REVIEW-000 at quorum (3 independent processes).
- Standing debt: the ratification rule (RFC-003 Q-f) — still open, deliberately.
- THEORY-001 §11 is LOCKED against ratification-by-continuation until X2
  (independent replication of READING-001 by a non-Claude process) runs.
- Live conflict of law: invariant 5 has two texts (RFC-004 §7 vs RFC-005 §2) —
  Season 2's precedence test case.

## To land this work (do this from your own machine — you are the owner)

    git clone https://github.com/brill-foundation/organodynamics
    cd organodynamics
    git fetch /path/to/organodynamics-unpushed.bundle claude/organodynamics-constitution-review-56ztkm
    git push origin FETCH_HEAD:refs/heads/claude/organodynamics-constitution-review-56ztkm

This uses your local owner credentials and needs no Claude infrastructure.
Once the branch is on GitHub, a fresh session clones it and has the full record.

## To make FUTURE sessions able to push

Install the Claude GitHub App on the `brill-foundation` org with Contents:
write (via claude.ai/code onboarding), OR run `/web-setup` with a gh token that
has write. Then start a NEW session — the old session's token never upgrades.
