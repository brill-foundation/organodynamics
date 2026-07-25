---
id: RFC-007
title: Reconciliation — divergent histories made whole without erasure
status: open
opened: 2026-07-20
revised: 2026-07-20 (rev 2 — the continuity precondition, and the bypass-free first-use path, both from the Reality seat)
concerns: how two or more valid, divergent laboratory histories are reconciled into one continuing lineage without an authority, an aggregation, or an erasure — and without any history ever becoming false
confidence: proposal
exposed-by: a live fork (an 88-event lineage diverging at #84 from a 156-event lineage), and the earlier finding that the Laboratory has no ratified procedure for this class — only the Reality seat as an unratified backstop
---

# RFC-007 — Reconciliation

**Epistemic status:** a proposed protocol, not a performed reconciliation.
Written before touching the current fork, at the Reality seat's instruction:
the protocol must exist first; only then do we decide how to reconcile.
Nothing here is executed. This RFC defines stages; it does not run them.

## 1. The one principle that separates this from a court

Reconciliation **adopts a continuing lineage; it never rules a history
invalid.** Both divergent histories are valid before examination and remain
valid after it — the non-adopted one does not become false, it becomes
*preserved and no longer continued*. This is the mature form of the earlier
finding that the Laboratory needs "a better arrival, not a court": a court
would rule a lineage void (an authority above the process, RFC-002 §4); this
protocol changes only which lineage *continues*, and even that is a human's
recorded judgment, not a machine's or a seat's decree.

Scope: this governs **divergence** — same genesis, neither history a prefix
of the other. It does *not* govern **containment** (one history a strict
prefix of the other), which is mere staleness and is already resolved
mechanically by the arrival/habitat guard ("continue from the true tip"). No
human is summoned for staleness; the human is summoned only where the machine
genuinely cannot choose — where both forms are valid and the difference is
substance (session 29: the machine certifies form, something outside owns
substance).

## 2. Constraints the protocol must satisfy

- **No authority (RFC-002 §4).** No machine and no standing office adjudicates.
  The steward is a participant adopting an intention, never a reified seat
  (session 31).
- **No aggregation (P4).** Histories are never merged into one by collapsing
  or interleaving. Disagreement is information.
- **Nothing erased (Axiom 3).** No event of either lineage is deleted or
  rewritten. Reconciliation is achieved by *addition and change of medium*,
  never by removal.
- **Valid until examined (P4: uncertainty gets a status).** A declared
  divergence is an open matter; both tips stand until a human examines them.
- **Preservation-exchange, not shared mutable state (§8a).** The model is Git
  exchanging commits, not one blessed branch — the non-adopted lineage
  survives as a sovereign preserved artifact.

## 3. The seven stages

### 3.1 Declaration of divergence
Any participant records that a divergence exists: the shared genesis, the fork
point (last common event), and each lineage's tip (hash, event count, last
seal). Declaration asserts **both lineages valid** and names none superior —
it converts a silent fork into a visible open matter. It is factual and
machine-supported (the habitat guard already computes exactly this; the status
report already surfaces `HABITAT_FORKED`). Declaration decides nothing.

### 3.2 Declaration of continuity — the precondition
Before the comparison is interpreted or any lineage is judged, the steward
authors **what continuity this reconciliation exists to preserve**: the
Record (episodic memory), the constitutional lineage (the reasoning/law),
the Laboratory's capacity to grow (CAB-005), ongoing work, knowledge, or a
continuity newly named. This is criterion **pre-registration** — the same
discipline as a pre-registered falsification condition (session 7) and
conditions-before-recommendations (RFC-005): the objective is declared before
the steward sees which lineage it favors, so the choice cannot be an intuition
back-filled with a convenient justification.

Three guardrails keep it constitutional, not a re-formed authority:

- **Authored, plural, challengeable.** It is a Judgment (obligation 4), not a
  machine objective; the rejected continuities are kept (P4). It never becomes
  a scalar the machine optimizes.
- **A frame, not an oracle.** It constrains and orders the later stages; it
  does not output a lineage. The human still judges within it (§3.4).
- **The trade-off made explicit.** A fork forces continuities into conflict —
  here the Record points toward the longer lineage, capability toward the one
  carrying the code and RFCs. Naming which continuity this act privileges
  *where they collide* is "surface the conflict before the solution" (the
  Reduction seat's duty, CAB-005), the opposite of a silent aggregation.

It terminates in the charter and does not regress: the steward invokes a
continuity the constitution already recognizes, or proposes a new one — which
is itself a recorded, challengeable, charter-level act. This declaration
reorders the operational tail: whether preservation alone suffices, whether
salvage is necessary, and whether `relate` is on the critical path (§3.5,
§6.2) all follow from the continuity named here. It is the steward's true
first authored act — prior to §6.2, prior to the lineage judgment.

### 3.3 Comparison
A mechanical, non-authoritative Camera over both lineages: the shared prefix,
then each lineage's unique events by kernel vocabulary (*added*, *superseded*
via `ASSERTION_SUPERSEDED`, *resolved* via `UNKNOWN_RESOLVED` — never
*removed*, cf. RFC-005 §5), each lineage's seals, sessions, verification
status, and unique artifacts. It ranks nothing and recommends nothing. It is
offered to the human; it is not a verdict.

### 3.4 Human judgment
Within the continuity frame declared in §3.2, a human steward examines the
comparison and authors a Judgment (obligation 4): which lineage continues as
the canonical habitat, the reasoning (which applies the declared continuity to
the compared facts), and the **rejected alternative kept** (P4). This is the
sole lineage choice, and it is a human's — but it is now a *principled reading*
(continuity applied to fact), not a bare branch preference. The machine may
present, never conclude. Both lineages were valid before this act; the
non-adopted remains valid after it.

### 3.5 Adoption
The chosen lineage becomes the continuing habitat. Unique content from the
non-adopted lineage that the steward chooses to carry forward is **re-entered
as new authored events** in the adopted lineage, each carrying a `relate`
lineage link back to its origin in the archived preservation. Salvage is
**authorship, not merge**: nothing is rewritten or interleaved; the carried
content enters as new events that cite where they came from. (This is the
kernel's `relate` primitive — unused to date — finding its first real use.)

### 3.6 Archival preservation
The non-adopted lineage(s) are preserved as immutable, self-contained,
independently verifiable artifacts (the existing `preserve` mechanism, whose
restore door already refuses overwrite and refuses an unverified chain). This
is the mechanical meaning of adoption: the non-adopted lineage stops being a
*competing live branch* and becomes a *preserved file* — a change of medium
(§8a), not a deletion. Because it is now a file and not a branch tip, the
habitat sees a single live tip again and ordinary writes flow. Axiom 3 is
honored: the archived history remains fully recoverable, verifiable, and
re-openable forever.

### 3.7 Recording the reconciliation
The reconciliation is written into the adopted lineage's Record: the declared
continuity (§3.2), the divergence declaration, the comparison artifact, the
human judgment (conclusion + reasoning + rejected alternative), the adoption
decision, and pointers to the archived preservation(s) — closed by a seal. The
fork and its resolution become permanent, grounded, replayable Ink (CAB-005).
A future steward can read exactly what diverged, *what continuity was being
preserved*, and why one lineage was continued — and can re-open the archived
one from the pointer. Recording the continuity is what makes the decision
re-openable along the right axis: if a later steward judges the Laboratory's
continuity to be something other than what was declared here, this
reconciliation is reopenable on that ground (P4).

## 4. Sequencing removes the need for a bypass

An earlier draft required a **narrow exception** to the habitat guard, so that
reconciliation events could be written on a still-forked habitat. On review
(and at the Reality seat's encouragement) the first-use path needs no such
exception, and the protocol is stronger for requiring none — a reconciliation
that resolves a fork should not itself invoke an exceptional authority.

The order that makes it bypass-free: **judge → adopt + archive → record.** By
the time recording happens (§3.7), the non-adopted lineage has changed medium
to a preservation *file* (§3.6); the habitat therefore has a single live tip,
is no longer forked, and recording is an ordinary write the guard already
permits. The stages that precede adoption need no Record write at all: the
divergence declaration (§3.1) and the continuity declaration (§3.2) may be
authored as Cabinet artifacts (always writable) or carried in the comparison
report, and the comparison (§3.3) is read-only. So no stage writes to a forked
Record, and the guard is never bypassed.

The exception survives only as a **deferred, still-open possibility** (§6.1),
needed only if some future reconciliation must declare or record *on* the
forked habitat before adopting — a need no reconciliation has yet shown.

## 5. Kept rejections

1. **A machine (or a seat) that picks the surviving lineage** — the authority
   RFC-002 §4 forbids. The machine compares; a human judges.
2. **Merge by interleaving or rewriting the two chains into one** — that
   fabricates a history that never happened and breaks Axiom 3. Reconciliation
   is adoption + preservation + re-entry, never a rewritten chain.
3. **Deleting the non-adopted lineage** — nothing is erased; it changes medium
   to a preserved artifact and stays recoverable.
4. **Auto-adopting a true fork** (even "adopt the longer") — length is an
   aggregation (P4); a longer lineage is not a truer one. Only containment
   (staleness) is mechanical; divergence always summons the human.
5. **Judging the lineage before declaring the continuity it serves** —
   rejected. It decides a charter-level question (what the Laboratory's
   continuity is) by operational convenience (which branch is cheaper to
   keep), and hides the trade-off a fork forces. The continuity is declared
   first (§3.2).

## 6. Open questions, held not resolved

1. **The bypass — now deferred, not required.** The first-use path is
   bypass-free by sequencing (§4). The exception remains only a held
   possibility for a future reconciliation that must write on a forked habitat
   before adopting; whether such a need is ever legitimate, and what would
   bound the exception, stays open. No longer on the critical path.
2. **Must adoption re-enter all unique content, or may some live only in the
   preservation?** Re-entry is authorship and costs effort; some non-adopted
   work may be worth preserving without carrying forward. Where is the line,
   and who draws it? Held.
3. **Multiple simultaneous forks (three or more lineages).** The stages
   generalize, but "the rejected alternatives kept" and the comparison Camera
   grow combinatorially. Unstudied until it occurs (two-occurrence rule).
4. **Who is "a human steward" here** without reifying the standing office
   session 31 warned against. The intention, not the seat — but a fork is
   exactly the kind of high-stakes act where an office tends to crystallize.
   Held.

## 7. The current fork — named, not touched

This RFC is motivated by a live divergence: an 88-event lineage (this
stewardship-onboard branch, carrying the habitat guard, the status report,
RFC-005/006/007, CAB-013) and a 156-event lineage (the canonical-package
branch, carrying 22 further sessions of Record — visual ecology, the
hospitality review, the steward-is-an-intention refinement), sharing events
#0–#83 and diverging at #84. The two lineages advanced *different organs* —
the fork grew the body (code) and the law-in-progress (RFCs); canonical grew
the memory (Record) — which is exactly why the continuity declaration (§3.2)
must come first: the choice turns on which continuity this act privileges, not
on which branch is longer. It is the protocol's first test case and is
**deliberately left untouched**: the protocol exists first; how to reconcile
this fork is the next decision, and it is the Reality seat's.

## Status

Open (rev 2). Nothing reconciled, nothing archived, no bypass exercised. The
stages reuse mechanisms that already exist (the habitat guard for divergence
declaration and comparison, `preserve` for archival, `relate` for salvage, the
event log and seal for recording); the two authored preconditions — declaring
the continuity (§3.2) and the lineage judgment (§3.4) — reuse the Judgment
primitive; no new primitive is proposed. The first-use path is bypass-free
(§4). This RFC preserves the protocol as reasoning, awaiting the Reality seat's
examination before any reconciliation is performed.
