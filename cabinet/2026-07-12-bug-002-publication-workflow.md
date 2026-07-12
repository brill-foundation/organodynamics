---
id: CAB-011
title: BUG-002 — The Published Door Is Stale; Publication Must Join the Workflow
kind: engineering-advisory
participants: Adi (steward, reporting Host); Claude (Lead Engineer, advising)
date: 2026-07-12
language: English
discoveries: the experiment reviews the PUBLISHED Record, so a divergence between the working branch and the published branch makes "the Record is the source of truth" false for arrivals; publication is a constitutional act, not a chore
constitutional-questions: none — engineering governance; no protocol change
related: docs/VALIDATION_PLAN.md, the record (session 9), CAB-010 (BUG-001)
provenance: reported by the steward 2026-07-12 during the BUG-001 re-vote; verified and advised the same day
status: advisory — awaiting steward authorization
---

# BUG-002 — The Published Door Is Stale

## 1. The evidence, verified

While re-voting on BUG-001, the steward found the public `main` branch still
shows the old README pointing to `/drafts`. Verified: `main` contains **none**
of `src/`, `tools/`, or `laboratory/`, and is **30 commits behind** the
engineering branch `claude/organodynamics-canonical-package-dfytfb`. Vercel's
`vercel.json` pins no branch, so its production Door serves `main` — the stale
state. An invitation to the published Laboratory would send a Participant to a
place that does not exist there. This gates Cohort 1.

## 2. The advice the steward requested

**Is the work intentionally awaiting merge?** Yes, by construction: it has
been developed on the engineering branch under the branch mandate, and the
engineer was never granted authority to publish to `main`. Publishing is the
steward's act.

**Should publication become part of the engineering workflow?** Yes — and not
as housekeeping. The experiment reviews the *published* Record. If the working
Record and the published Record diverge, then "the Record is the source of
truth" is false for exactly the arrivals the Record exists to serve. That is a
constitutional failure dressed as a deployment lag. The consequence:

> A milestone that changes the arrival experience is not *done* until the
> published Door matches the Record.

This is now a backlog item (a named publication step, so `main` never silently
diverges again). The recurring discipline is engineering's; the one-time act
below is the steward's.

## 3. Recommended action, before Cohort 1

**Publish the engineering branch to `main`** (merge or fast-forward), so the
public default branch and the Vercel production Door become the current
Laboratory. Then the validation plan's Medium-A invitation — "clone the repo,
start at `laboratory/arrival/WELCOME.md`" — works against defaults, and the
Medium-B website Door shows the real place.

The alternative — repointing every invitation at a named non-default branch —
leaks engineering internals to Participants and is fragile; rejected.

The engineer will prepare the merge on request but will not publish to `main`
without explicit authorization. Cohort 1 remains blocked until the Door is
published.
