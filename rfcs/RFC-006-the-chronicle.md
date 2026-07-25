---
id: RFC-006
title: The Chronicle — a temporal way of seeing
status: open
opened: 2026-07-20
concerns: whether the Laboratory's lived, temporal memory is a new Place, a derived Camera, or an authored Canvas — and where testimony that currently dies should enter
confidence: exploration
exposed-by: an architectural discussion opened by the Reality seat; the observation that no existing organ seems to preserve what it felt like to live the Laboratory's evolution
---

# RFC-006 — The Chronicle

**Epistemic status:** an exploration, not a mandate. Opened by the Reality
seat as a question, not a specification. This RFC records where the reasoning
landed, what was rejected, and — deliberately — what is left open. Nothing is
built. The two-occurrence rule and the frozen Protocol's reversed burden of
proof apply to anything this RFC might later become.

## 1. The proposal, and what it turned out to be

Proposed: a new Place, **The Chronicle**, the Laboratory's temporal memory —
open a day (20 July 2026) and see it *as it was lived*, weaving journal
entries, conversations, status reports, Record events, RFCs/CABs, and Garden
activity into layers of one moment.

Rejected as a **Place**, kept for the reason: the responsibility it claims is
already owned. The charter's object table assigns narrative to the Journal,
and the Table states the Journal's job in its own words — *"היומן לא מסכם ולא
מארגן — הוא זוכר גם איך זה הרגיש"* (the Journal remembers also how it felt).
A new Place owning "lived temporal memory" would be the charter's first
responsibility collision — two organs owning one thing — which §2's clean
table exists to prevent. The felt gap is real; it is not a missing organ.

## 2. The decomposition — three fragments, each on a mechanism that exists

- **A calendar Camera.** The fourth member of an existing family of derived
  projections over the one Record — `explain` (object axis), `sessions`
  (seal axis), `history` (sequence axis), and now the day (calendar axis).
  Pure derivation (P3): a fold over `recordedAt` across sources, storing
  nothing. If it ever stored "what happened on 20 July," it would be a second
  source of truth about time that can drift from the Record — the exact
  disease we lived through when `main` went stale.
- **A testimony deposit discipline.** The real substance. Conversations and
  path-of-formation currently die: CAB-005 moves the *deposit* from Pencil to
  Ink and discards the *dialogue*; CAB-004's Pencil Flow asks to preserve
  "the path of formation… one of the laboratory's most valuable research
  artifacts." A transcript is a path of formation. It enters through the
  front door already available: P2's envelope (identity + provenance + medium
  + body, no schema required at the gate), the Cabinet (which already keeps
  "seat conversations"), and the `--keep` pattern from RFC-005 (a file plus a
  provenanced observation pointing at it). A kept transcript is a kept report
  of a different organ — non-replayable testimony, kept by choice.
- **A sovereignty privacy model.** Privacy is not a status the institution
  grants a document; it is which sovereign Place you write into (§8a). A
  personal journal lives in your Place; it becomes institutional the moment
  you deposit it into the shared Laboratory, and not before. No privacy flag,
  no permission layer — the topology is the privacy model. (`protected-research`
  is the recorded middle state, cf. CAB-004.)

None introduces a new primitive. The frozen Protocol has nothing to justify.

## 3. Time is a camera angle, never an ordering

The Protocol ruled it: *"constitutional time is the event sequence, clock
time is context"* (obligation 3; enforced at `log.js`, seq = constitutional
time). A day-view promotes clock time to a *lens*, never to the *ordering*.
Where clock and sequence disagree (23:59 vs 00:01, timezones, sessions across
midnight), the view displays and defers to the sequence; it never adjudicates.

## 4. Organodynamics or Brill

Split on the RFC-004 seam. The **grammar** — the calendar Camera axis, the
deposit-with-observation pattern for testimony, the envelope — belongs to
Organodynamics. The **content** — journals, conversations, lived days, and
*the Garden* — belongs to Brill's sovereign instance. (Evidence the seam is
real: the Garden was named as one of the Laboratory's memories, yet exists
nowhere in this repository. The mental model already spans a Brill-world
larger than Organodynamics; that is the answer, not an error.) The discipline
ships the lens; the life stays with the instance.

## 5. OPEN — Camera or Canvas (held, not resolved)

The one distinction we deliberately leave open. A **Camera** filters existing
artifacts: no degrees of freedom beyond its filter, no author, the same
picture for everyone — a derived reading (P3). A **Canvas** is a temporal
surface onto which independent artifacts are *intentionally composed*:
arrangement is a *choice*, and choice is authorship (P2) — a different
constitutional kind, on the observation/authorship line the corpus draws
between Observatory and forge, instrument and seat.

The distinction is architecturally real; whether the Chronicle *needs* the
Canvas is the open question, and it has a sharpened form:

> Is the intended composition achievable **upstream** — by honest choices of
> what to deposit and how each fragment is written, so a mechanical calendar
> Camera simply reveals it (composition-by-deposit)? Or does some connective
> meaning live **only across** artifacts, belonging to no single deposit,
> requiring an authored layer (composition-by-Canvas)?

A load-bearing observation for whichever answer reality gives: **if the
Canvas is needed, it is not new architecture.** The kernel's `relate`
primitive is unused (relations count: 0). A Canvas — "these artifacts,
composed thus, mean *this* together" — is authored relations (co-occurrence,
lineage) plus connective testimony about a relationship that belongs to no
part. That honors the redline: a new source of truth about the *arrangement*
only (authored content, provenanced, plural, superseded-not-erased, never
aggregated), while the truth of the parts stays sovereign and uncopied.
Neither horn is a new Place: one is a Camera, the other is `relate` + a
deposit. Held open; reality has not voted.

## 6. The redline whatever is built

**Juxtapose; never narrate.** The machine may place a day's layers side by
side; it may never author "what today meant" — that is testimony, a
participant's act. A machine-written day-summary would be the recommendation
engine RFC-005 rejected, wearing a nostalgic mask. The furniture stays
unintelligent.

## 7. The honest limit

No viewer retrieves testimony that was never written. Days before the
practice begins render as they truly were — Record events with little life
around them — and that thinness is honest patina, not a defect to repair by
reconstruction. The Chronicle's substance is therefore ~90% **practice**
(contemporaneous deposit — keep the transcript, write the entry, *that day*)
and ~10% **lens**. The lens can wait; each day the practice waits, a day is
lost.

## Kept rejections

1. **The Chronicle as a new Place** — responsibility collision with the
   Journal; storage collision with the Record on time (§1).
2. **A machine-authored day narrative** — authorship of meaning is a
   participant's act, never furniture's (§6).
3. **Clock time as an organizing principle** — it is a lens, not the
   ordering; the sequence remains the truth (§3).
4. **Automatic capture of conversations** — deposit is a chosen act with
   provenance (passivity clause); testimony enters by intention, never by
   ambient recording.

## Status

Open. Nothing built. The calendar Camera and any Canvas await lived days and
reality's vote; the testimony practice can begin immediately with existing
mechanisms — this discussion could be its first artifact once the working
habitat is reconciled and writes flow again. This RFC preserves reasoning,
not a mandate.
