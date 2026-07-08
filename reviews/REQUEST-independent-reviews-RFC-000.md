---
id: REQUEST-independent-reviews-RFC-000
title: Commissioning request — independent reviews of RFC-000
genre: operational note (testimony, not a representation) — a commissioning
  artifact under RFC-003 §8, not itself a review or an RFC
opened: 2026-07-07
status: open — awaiting R2, R3
provenance: claude-sonnet-5/session (organodynamics-constitution-review-56ztkm)
---

# Commissioning Request — Independent Reviews of RFC-000

META-REVIEW-000 is `awaiting-quorum`: it has one review (R1, by Claude) of
three required independent processes (RFC-003 §7.1). RFC-003 §8 names the
next action explicitly: **commission the missing reviews; do not
synthesize with a corpus of one.** This note is that commissioning act,
made recorded rather than left as conversation (the same defect the
project keeps finding and keeps fixing).

## What is being asked of each reviewer

A **constitutional review** of `rfcs/RFC-000-development-manifest.md`
(exact revision: draft 0.1, verbatim import, commit `9c4bc3f`) — the same
task R1 performed, described plainly so the ask can be given to a person
or a model without further interpretation:

> Treat this document as a proposed constitution for a civilization-scale
> knowledge project. Don't propose better sentences. Ask whether the
> structure would survive contact with scale, time, adversaries, and its
> own success: Is there a decision rule? A membership model? An
> adversarial assumption? A precedence rule between documents? What is
> missing that a real constitution needs? What would you keep, what would
> you cut, and why? Be as adversarial as the document's own values ask you
> to be — plurality and challenge, not agreement, is what makes a review
> count here.

Do not soften the ask. R1 was adversarial-constructive; a corpus of one
polite review and one harsh review is more informative than two polite
ones, and RFC-003 §3.2 exists precisely so idiosyncratic severity doesn't
get mistaken for consensus.

## What must NOT be shown to the reviewer, and why

To let each new review count as an *independent* data point (RFC-003
§7.2, §3.3) rather than a reaction to R1 or to this project's own later
vocabulary:

- **Do not show `reviews/RFC-000-constitutional-review.md` (R1).** A
  reviewer who has read R1 is no longer measuring RFC-000 — they are
  measuring R1 plus RFC-000, and their agreement with R1 becomes
  self-confirming rather than convergent (RFC-003 §3.3).
- **Do not show** `meta-reviews/META-REVIEW-000.md`, `research/SEASONS.md`,
  `research/READING-001-the-emergent-process.md`,
  `research/THEORY-001-the-discovery-engine.md`, `HANDOFF.md`, or the
  journal. These describe the project's own later self-analysis and would
  hand the reviewer this project's answers before they've formed their own.

## Two conditions, deliberately different (maximize what the corpus can learn)

Per the commissioning note in META-REVIEW-000 §3, run the two reviewers
under **different** exposure conditions so the corpus can separate
"defects visible from inside this project's own vocabulary" from "defects
visible without it":

- **Condition BLIND — recommended for one of {Gemini, ChatGPT}.** Show
  *only* `rfcs/RFC-000-development-manifest.md`. No other repository
  context at all.
- **Condition CONTEXTED — recommended for the other.** Show
  `rfcs/RFC-000-development-manifest.md` plus `rfcs/RFC-001-the-instrument.md`
  and `rfcs/RFC-002-inquiry.md` (the same context R1 had), but still
  **not** R1 itself.

Record which reviewer ran under which condition — this is required
provenance, not a detail.

## What to bring back

Paste the reviewer's response verbatim, plus this provenance block filled
in honestly (RFC-003 §7.2 — missing provenance still enters the corpus,
but cannot count toward quorum):

```
- Generating process (exact model/version as it self-identifies, or human name/affiliation):
- Interface used (chat UI, API, date):
- Condition: BLIND | CONTEXTED (state exactly what was shown)
- Had this process seen R1, this project's other RFCs, or any prior
  discussion of RFC-000 before this review, through any channel?
- Any system prompt / custom instructions given beyond the ask above:
```

Once returned, each review is added as `reviews/RFC-000-review-<source>.md`
with that provenance as front-matter (matching the shape of
`reviews/RFC-000-constitutional-review.md`), and META-REVIEW-000's corpus
table (§3) and quorum count are updated. At three independent processes,
META-REVIEW-000 moves from `awaiting-quorum` to `in-progress` and the
reading zone (§4-8) may finally be written — which is also the predicted
trigger for **X3** (THEORY-001 §9): the corpus is very likely to disagree
somewhere, and what happens to that disagreement is the first real test of
whether this process can be surprised.
