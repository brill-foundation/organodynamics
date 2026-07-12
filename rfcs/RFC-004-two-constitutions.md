---
id: RFC-004
title: Two Constitutions
status: open
opened: 2026-07-12
revised: 2026-07-12 (rev 2)
concerns: how the received canonical corpus and the laboratory's grown charter coexist in one Record
confidence: proposal
exposed-by: arrival of the Canonical Engineering Package (CAB-006); rev 2 by a question from the Reality seat
---

# RFC-004 — Two Constitutions

**Epistemic status:** forced by an event, not invented. On 2026-07-12 the
Canonical Engineering Package arrived (CAB-006) carrying a mature constitutional
corpus — OCS, OAS, OIS, OGD, ODM — and a mandate to build its first Reference
Implementation. This Record already had `laboratory/CONSTITUTION.md`, grown
clause by clause from what reality did to the architecture. Rev 1 proposed
coexistence. Rev 2 proposes something sharper, and keeps rev 1 in the lineage.

## 1. Rev 1 position — two tracks, one Record (superseded as leading proposal)

Rev 1 read the two documents as two *kinds of law* — received and grown — and
proposed parallel governance: the corpus rules the reference-implementation
track (`constitution/`, `blueprint/`, `src/`, `tests/`); the grown charter
rules the laboratory track; contact only through RFCs. It treated "does the
charter derive from the corpus, or remain a sibling law?" as its first open
question, unowned. Kept here because a superseded position stays in the
lineage; superseded because the question found an owner.

## 2. Rev 2 proposal — one Constitution, many implementations

The Reality seat asked: *what if there is only one Constitution, and the
Laboratory is merely one Reference Implementation of it?*

Read that way, nothing in the Record is a rival law:

- **The corpus is the Constitution.** The only one. "Canonical" belongs to it
  alone — which also dissolves rev 1's naming tension (CAB-006 F-1) more
  cleanly than the lineage reading did.
- **The Laboratory is a Reference Implementation** — legal under OIS-015 §7,
  which invites multiple reference implementations specializing differently.
  The Laboratory specializes in *habitation and discovery*: a lived
  implementation. The Kernel (`src/kernel/`) specializes in *verification and
  education*: an executable one. OIS-015 §10 then gives the two of them a
  standing obligation to each other: constitutional equivalence must be
  demonstrable between them. That is a falsifiable research program, not a
  metaphor.
- **The grown charter is not a constitution.** It is the Laboratory's
  *implementation charter* — local law plus discovery record. Under OIS-015 §8
  (an implementation continuously verifies itself against the specifications),
  its history of refusals — `localStorage` failing the sovereignty test, the
  Save/Preserve split — becomes verification evidence, which is a promotion,
  not a demotion.

## 3. The derivation, first pass

Rev 1 said "nobody has done the derivation." A first pass, clause by clause:

| Laboratory charter | Corpus concept |
|---|---|
| §1 world → Place → objects | Place composition (OCS-000); Federation of Places (OAS-009) |
| §2 objects own responsibilities; implementations never enter the world's language | Axiom 10 replaceability; Axiom 2 meaning independent of representation |
| §3 Save / Preserve; Git optional, preservation not | P-007 Memory ≠ storage — near-verbatim in both, written independently; P-006 Event |
| §4 maturation derived from state, never decoration | state as pure replay of history; Axiom 4 |
| §5 unintelligent furniture | P-009/P-010 observation separate from interpretation; implementation never interprets silently |
| §6 emergency preservation | recovery behavior (OIS-015 §2); OAS-027 Resilience |
| §7–§8 OPEN clauses | Axiom 6 — unknowns are constitutional objects, kept visible |
| §8a ecosystem of sovereign Places exchanging Preservations | Axiom 9 sovereignty; Federation (OAS-009, OIS-010) |
| method note: reality refuses → architecture changes | ODM discovery lifecycle, operating at implementation level |

The table is evidence in both directions: the Laboratory converged on the
corpus's invariants *without having read them*. Independent convergence is the
strongest support the corpus has yet received — and the Laboratory's provenance
must say **converged with**, never **derived from** (Axiom 3: the history of
how a law came to be is also history).

## 4. What the reading costs, stated before ratification

1. **Reality's vote gets routed.** The charter's stamp says *reality has the
   final vote*. Under one Constitution, reality's refusals change
   *implementations* directly, but reach the *Constitution* only through ODM's
   lifecycle (observation → discovery → review → integration). The corpus does
   not deny the vote; it makes it governed. If reality one day refuses a
   constitutional invariant rather than an architecture, ODM is the only legal
   path. This residue is the real difference between the two documents and
   should be accepted knowingly or not at all.
2. **A renaming.** `laboratory/CONSTITUTION.md` cannot keep that name if this
   is ratified — it becomes the Laboratory's charter. The Door's constitution
   room currently renders it under the stamp of a constitution; the room would
   need to tell the new truth. Door questions stay Door questions; flagged, not
   decided here.
3. **"First" needs care.** The package mandates the *first* Canonical Reference
   Implementation. If the Laboratory is a reference implementation, it came
   first — unwittingly. Honest framing: the Laboratory is the first *convergent*
   implementation, discovered retroactively; the Kernel is the first
   implementation *derived from* the corpus deliberately.

## 5. What would ratify rev 2

1. Completing the derivation: any charter clause that cannot be expressed in
   the constitutional alphabet is either an implementation choice (fine) or a
   genuine counterexample (a discovery — escalate, don't hide).
2. A conformance reading of the Laboratory against OIS-CORE, the way
   `tests/kernel/` reads the Kernel: does the Journal preserve history? does
   Preserve behave as an Event? does anything delete? Failures are findings,
   not embarrassments.
3. A ruling from the Reality seat, with §4's costs in view.

## 6. Adaptations of Blueprint Part IV, recorded not hidden (unchanged from rev 1)

- `rfc/` is prescribed; **`rfcs/` is kept** — the Record's continuity outranks
  a directory name.
- `constitution/` holds the received corpus, read-only per Part IV §30.
- Branch strategy (Part IV §39) deferred until more than one line of
  engineering exists; a decision, not a drift.

## 7. Open questions

1. ~~Does the grown charter derive from the corpus or remain a sibling law?~~
   Owned by rev 2: it is the local charter of one Reference Implementation,
   pending §5 ratification.
2. Which rendition of the duplicate OIS files is authoritative (CAB-006 F-4)?
   Still needs a ruling.
3. Where does the *Reality Game* — the world above the Laboratory in the
   charter's §1 hierarchy — live under one Constitution? A Place containing
   Places is expressible in the alphabet (Federation), but nobody has written
   it down. New, opened by rev 2.
