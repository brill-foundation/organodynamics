# Reality Validation Plan — the Arrival Experiment

**Status:** experiment design, 2026-07-12 · **Runs:** host = the steward ·
**Under test:** the Laboratory (never the Participant)
**Standing question:** the open unknown in the record — *has any completely
new Participant entered via the Arrival Kit alone?*

This file is host-facing. It deliberately does not live in
`laboratory/arrival/`: Participants must not read the test protocol they are
walking through.

---

## 1. What the experiment tests

**Claim under test** (recorded in the record as an assertion, evidence
accumulating): *the Arrival Kit enables a completely new Participant to
enter, contribute, and leave correctly, unaided.*

**Success criterion — an "unaided arrival":** using only the invitation and
the Laboratory's own contents, the Participant produces a sealed session that

- (a) passes `node tools/lab.js verify`,
- (b) passes `node tools/conformance.js`,
- (c) contains at least one genuine contribution — an observation, a new or
  resolved unknown, a grounded assertion, or a judgment; an empty ritual seal
  does not count,
- (d) required no host answers about the Laboratory's content ("assisted"
  arrivals are recorded but do not count toward confidence).

## 2. The invitation (fixed apparatus — do not improvise)

Send exactly this, varying only the bracketed part. The invitation is part of
the experimental apparatus: if it ever *needs* to say more, that need is
itself a finding.

> I'd like your help testing a research environment called the Laboratory.
> We are testing the place, not you — anywhere you get stuck is a defect in
> the Laboratory, and telling us where is the most valuable thing you can do.
>
> [Medium A — repository]: Clone <repo-url> and start at
> `laboratory/arrival/WELCOME.md`.
> [Medium B — website only]: Start at <door-url>. That page is the only thing
> I will give you.
> [Medium C — preservation]: Attached is a single file containing the entire
> Laboratory. Start by opening it; it contains its own instructions.
>
> Ground rules: I can't answer questions about the Laboratory — if you find
> yourself needing to ask one, write it down exactly as you would have asked
> it, and keep going if you can. Please keep rough notes of what you do, what
> you read, and where you pause. Stop whenever you want, and stop anyway if
> you've been stuck for a while — being stuck is a result, not a failure.
> When you're done (or stuck), send me your notes.

Notes on the media: **A** isolates kit quality (primary arm). **B** tests the
public discovery chain (Door → Sessions room → repository). **C** tests the
sovereign path — no git, no website. First cohorts run A; B and C follow.

## 3. The host's conduct during an arrival

- **Answer nothing about the Laboratory.** The boundary: everything up to the
  Participant *possessing* the artifact (repo access, broken link, attachment
  didn't arrive) is host support; everything after is evidence.
- **When asked anything past the boundary:** reply once — "that question is a
  finding; please record it exactly as you'd ask it" — and log the question
  verbatim yourself.
- **Emergency exception:** if the Participant would otherwise abandon, the
  host may answer *after* logging the question. The arrival is then marked
  **assisted**: full evidence value, zero confidence value.
- **Stop rule:** offer the Participant an exit after ~90 minutes stuck. The
  stuck point is the finding; their further time buys little.
- **The kit's author (Claude) is not in the loop.** No live help, no watching,
  no mid-arrival fixes. The author processes evidence only after the arrival
  ends.

## 4. Evidence to collect (per arrival — the dossier)

1. **Class & medium:** human-developer / human-technical-non-dev /
   human-non-technical / hosted-AI (note vendor & model family) / local-model
   / script; medium A/B/C; date; total time.
2. **Outcome:** unaided success / assisted success / stopped — plus where.
3. **Timeline:** time to first `status`, to `arrive`, to first contribution,
   to seal. Coarse is fine; order matters more than minutes.
4. **Friction, verbatim:** every question asked (even unanswered), every
   error message hit, every place they report pausing, everything they say
   they never found or didn't trust.
5. **Artifacts:** their session in the record (primary evidence — it is
   already there); their notes/transcript; for AI participants, the full
   transcript is the dossier.
6. **Exit questions (three, always the same):** What was hardest? What did
   you look for and never find? What did you not trust?
7. **Post-checks by host:** `verify`, `conformance`, `sessions`, `sources` —
   paste outputs into the dossier.

## 5. How arrivals are recorded

**Successes:** the Participant's sealed session already lives in the record.
After each arrival, the engineer (Claude) additionally records: one
observation summarizing the dossier (class, medium, timings, friction),
supporting **evidence attached to the claim assertion**, and deposits the
dossier/transcript in the Cabinet (one deposit per arrival, kind
`arrival-dossier`).

**Failures:** the Participant usually cannot record their own failure — the
host's dossier substitutes. The engineer records: one observation per failure
with the verbatim stuck point, **contradicting evidence** attached to the
claim assertion, and a Cabinet deposit. A distinct confusion becomes a
**backlog item only after two independent occurrences** — once is an
anecdote, twice is a defect. Single occurrences stay as observations, waiting
for their second witness.

**Cohort discipline:** the Laboratory is frozen during a cohort; fixes are
batched between cohorts so arrivals within a cohort are comparable. Never fix
mid-cohort.

## 6. Confidence threshold

This is qualitative usability research, not hypothesis testing; diversity
beats count (independent convergence means nothing between similar minds —
CAB-007). The unknown is resolved and the kit declared working when:

> **Five consecutive unaided successes, spanning at least three participant
> classes and at least two media, with no new distinct confusion point in the
> final three.**

Discounts, applied honestly: multiple successes from the same class count
once toward the class spread; arrivals by AI systems from the kit author's
own model family are recorded but count at half weight — they share the
author's priors, which is contamination, not independence.

## 7. Who to invite, in what order — and why

Each stage drains the cheapest defects before the next raises realism:

1. **A hosted AI system from a different vendor/model family** (medium A).
   Cheap, fast, fully transcripted, cannot receive accidental side-channel
   help. Finds mechanical defects (wrong paths, ambiguous commands) at near
   zero cost. Confound to note: frontier-AI patience can mask human-relevant
   friction.
2. **An experienced developer who has never seen this project** (medium A).
   The human baseline and the kit's primary audience; their failures are the
   credible ones.
3. **A local/small model driven by a script** (medium A or C). Tests whether
   the kit and CLI are machine-followable *without* frontier capability —
   the "script" participant class the Protocol promises to serve.
4. **A technically comfortable non-developer** (medium A, then B). Expect
   Node-install and terminal friction — that is the point; HOST_GUIDE and
   QUICK_START make promises this stage tests.
5. **A non-technical participant, website first** (medium B). Hardest; run
   last, after earlier cohorts' defects are fixed — otherwise it measures
   already-known gaps.

Between stages: batch fixes, re-freeze, next cohort.

## 8. What would falsify the kit

Stated in advance so nobody moves the goalposts: if, after the fixes
justified by two full cohorts, class-2 participants (experienced developer
strangers) still cannot produce unaided arrivals, the Arrival Kit's design is
wrong — not under-polished — and redesign becomes the evidence-justified next
milestone.
