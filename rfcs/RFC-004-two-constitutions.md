---
id: RFC-004
title: Two Constitutions
status: open
opened: 2026-07-12
concerns: how the received canonical corpus and the laboratory's grown charter coexist in one Record
confidence: proposal
exposed-by: arrival of the Canonical Engineering Package (CAB-006)
---

# RFC-004 — Two Constitutions

**Epistemic status:** forced by an event, not invented. On 2026-07-12 the
Canonical Engineering Package arrived (CAB-006) carrying a mature constitutional
corpus — OCS, OAS, OIS, OGD, ODM — and a mandate to build its first Reference
Implementation. This Record already had a constitution: `laboratory/CONSTITUTION.md`,
grown clause by clause from what reality did to the architecture. Two
constitutions now live in one Record. Pretending otherwise would be the exact
silent resolution both of them forbid.

## 1. The two documents are different kinds of law

- **The corpus is received law.** Written top-down, complete before
  implementation, arriving with the instruction *"assume the Constitution is
  correct; assume implementation is incomplete; never reverse these
  assumptions."*
- **The charter is grown law.** Written bottom-up, after the fact, with OPEN
  clauses where "reality has not voted," and a method note that is its whole
  point: *when reality refuses an architecture, we change the architecture.*

These epistemics look opposed. The corpus itself narrows the gap more than
first reading suggests: OCS-000 makes Interpretation challengeable and
Understanding provisional; OIS-CORE Axiom 8 says understanding is never
absolute; ODM exists precisely to let discovered reality re-enter the
constitution through governed process. The corpus is received, but it receives
challenges. The charter is grown, but it grows by recorded principle. They
disagree mainly about *where the burden of proof sits during implementation*.

## 2. Proposal — two tracks, one Record

Adopt the reading that keeps both laws whole:

- **The reference-implementation track** (`constitution/`, `blueprint/`, `src/`,
  `tests/`) is governed by the corpus. Within this track the corpus is
  authoritative; ambiguity becomes an RFC, never code (Blueprint Part I §9).
- **The laboratory track** (`laboratory/`, the Door, the Cabinet, the earlier
  RFCs) remains governed by the grown charter. Reality keeps its final vote
  there; OPEN clauses stay open.
- **The Record holds both.** Neither track edits the other's law. Where the
  tracks touch — and they will, because the laboratory's Place/Journal/Cabinet
  are recognizably the corpus's Place/Memory/Contribution spoken in furniture —
  the contact is made *through this RFC and its successors*, not through quiet
  refactoring.

This is the same shape as CAB-005's ruling on stewardship: authority stays
where it was; the new role (here: the new law) enters as a bounded seat, not as
a governing host over everything that existed before it.

## 3. What supports the proposal

The corpus's own OIS-015: a Reference Implementation "demonstrates possibility,
not authority" and SHALL NOT become normative. If the *implementation* of the
corpus must not rule other implementations, the *arrival* of the corpus should
not rule the laboratory that predates it. And symmetrically: OIS-CORE Axiom 9
(knowledge belongs to Places; implementations only host them) is the
laboratory's sovereignty clause (§3, §8a) said in received language. The two
laws already believe things about each other.

## 4. Adaptations of Blueprint Part IV, recorded not hidden

- `rfc/` is prescribed; **`rfcs/` is kept** — it predates the package and the
  Record's continuity outranks a directory name (Axiom 3: nothing constitutional
  ever disappears, including naming history).
- The `constitution/` directory now holds the received corpus (OCS/OAS/OIS/OGD/ODM,
  read-only per Part IV §30) *while the Door's constitution room continues to
  render the grown charter*. Both facts are true and both are visible; whether
  the room should show both laws is a Door question, deliberately not decided in
  this RFC.
- Branch strategy (Part IV §39: main/develop/feature/*) is deferred until more
  than one line of engineering exists; recorded so the deferral is a decision,
  not a drift.

## 5. Open questions

1. Does the grown charter eventually *derive from* the corpus (a Place's local
   law under the constitutional alphabet), or does it remain a sibling law?
   OCS-000's composition rules suggest derivation is possible; nobody has done
   the derivation. Unowned until someone claims it.
2. Which rendition of the duplicate OIS files is authoritative (CAB-006 F-4)?
   Needs a ruling from the Reality seat.
3. The package calls the implementation *Canonical* while OIS-015 forbids it
   normativity (CAB-006 F-1). Proposed resolution: "canonical" names the
   *lineage* (first, reference, historically primary), never the *authority*.
   Awaiting challenge.
