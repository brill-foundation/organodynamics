---
id: CAB-014
title: Reconciliation — declaration of divergence, declaration of continuity, and the comparison Camera
kind: reconciliation
participants: Adi Brill (Reality seat — authored the continuity declaration, §3.2); Claude (steward-instance, 2026-07-21 — authored the divergence declaration and comparison, deposited this artifact)
date: 2026-07-21
language: English
discoveries: the two lineages grew different organs — ei4jwx grew the body (code) and law-in-progress (RFCs) in its git tree while its Record barely moved (4 events); canonical grew the memory (Record, 72 events / 22 sessions) — so "preserve both" makes salvage (§3.5) load-bearing rather than optional
constitutional-questions: none newly opened; this instantiates RFC-007 stages §3.1–§3.3 on the live fork it was written for
related: rfcs/RFC-007-reconciliation.md (the protocol this executes), docs/HANDOFF.md (§2, §4), CAB-005 (continuity, mortality, Pencil→Ink), CAB-012 (stewardship mode)
provenance: the Reality seat declared continuity on 2026-07-21, invoking RFC-007 §3.2; the steward-instance computed the divergence facts and comparison from both lineage logs the same day
status: open — awaiting the human judgment (RFC-007 §3.4); nothing adopted, nothing archived, no Record write performed
---

# Reconciliation of the live fork — the opening stages

This artifact performs RFC-007 stages **§3.1 (declaration of divergence)**,
**§3.2 (declaration of continuity)**, and **§3.3 (comparison)** on the live
fork RFC-007 was written for. It is authored in the Cabinet — always writable —
so **no stage here writes to the forked Record** (RFC-007 §4, bypass-free by
sequencing). It stops before **§3.4**: the lineage judgment is a human's act
and is not taken here.

---

## 1. Declaration of divergence (§3.1) — factual, machine-computed

A divergence exists. Both lineages share one genesis and neither is a prefix of
the other; this is true divergence (substance), not containment (staleness).
Declaring it asserts **both lineages valid and names none superior** — it
converts a silent fork into a visible open matter, and decides nothing.

| | value |
|---|---|
| **Genesis (event #0)** | `45e2d8a94f91f29577abdeb989561552e81eda46b7c574b75845a328761d4858` |
| **Shared prefix** | events #0–#83 (84 events), **byte-identical** on both lineages (sha256 `410cb6de42ae5db9dec31b06213801550aa57341e6ef930164d88cf9b0224cee`) |
| **Last common event (#83)** | `fb788d1e943519f339b04c9a9105ed5fd0d0bd879e984a5cabad9720a1310d0b` |
| **Fork point** | both lineages diverge at **event #84** |

**Lineage A — `claude/organodynamics-stewardship-onboard-ei4jwx`**
- Record: **88 events**, tip event #87 (`ca47f3edc022eb02d4b869703076169561202d2047ba50a1eb509aef2c211de2`)
- Last seal: **#87 — session 12** ("Claude (2026-07-13)")
- Chain **verifies**; conformance **8/8**. Git tip `9690c7e`.

**Lineage B — `origin/claude/organodynamics-canonical-package-dfytfb`**
- Record: **156 events**, tip event #155 (`f8cd41eb184f2890bcc32bb01171c1c8ac0cdb22a89bd562fdaaed9596a5a985`)
- Last seal: **#155 — session 33**
- Chain **verifies** independently. Git tip `80f40ed`.

Both lineages verify and conform on their own. Per RFC-007 §1, neither is false;
reconciliation will change only which one *continues*, and even that is the
human's recorded judgment.

---

## 2. Declaration of continuity (§3.2) — the Reality seat's authored act

Pre-registered before the comparison below is interpreted, so the objective is
named before it is seen which lineage it favors (RFC-007 §3.2). Recorded
**verbatim**, attributed to the Reality seat, and — per the guardrails —
authored, plural, and challengeable; a frame, not an oracle; never a scalar the
machine optimizes.

> **Declared by Adi Brill (Reality seat), 2026-07-21:**
>
> "I declare that the continuity to be preserved is the continuity of the
> Laboratory itself: its living capacity to grow together with the integrity of
> its memory. The purpose of reconciliation is not to choose between growth and
> memory, but to preserve both whenever reality permits. If a conflict is
> demonstrated, I will judge that conflict explicitly rather than assume one
> continuity automatically outranks the other."

**What this declaration reorders (its operational consequence).** It privileges
neither lineage; it privileges *preserving both organs*. Because — as §3 shows —
the two lineages grew *different* organs, and neither tip carries the other's,
**salvage (§3.5) is load-bearing, not optional**: whichever lineage is adopted,
the other's unique organ must be carried across for both to survive. The
declaration therefore places `relate`-salvage on the critical path and rejects
preserve-only *unless* the comparison shows one lineage already contains the
other's growth (it does not). It leaves the lineage choice (§3.4) open and
reserves the explicit judgment of any genuine conflict to the human.

---

## 3. Comparison (§3.3) — a derived Camera; it ranks nothing

Mechanical, non-authoritative, computed this session directly from both logs
and both git trees. It **recommends no lineage** and orders nothing by
preference. Unique events are classified by kernel vocabulary; nothing is
described as *removed* (Axiom 3).

### 3a. Unique Record events (after the fork, #84 onward)

| kernel event type | Lineage A (ei4jwx) | Lineage B (canonical) |
|---|---:|---:|
| PARTICIPANT_REGISTERED | 1 | 0 |
| OBSERVATION_RECORDED | 2 | 23 |
| ASSERTION_MADE | 0 | 3 |
| ASSERTION_SUPERSEDED | 0 | 1 |
| JUDGMENT_RECORDED | 0 | 20 |
| UNKNOWN_RECORDED | 0 | 2 |
| ENTITY_CREATED | 0 | 1 |
| SEALED (sessions) | 1 | 22 |
| **unique events total** | **4** (#84–#87) | **72** (#84–#155) |
| **sessions added** | session 12 | sessions 12–33 (22 spans) |
| **new participants** | Claude (2026-07-13) | — |

### 3b. Unique artifacts in the git tree (organs that live outside the Record)

Lineage A's Record barely moved (4 events) because its work was **deliberately
not deposited to the forked Record**; that growth lives in the tree instead.

**Lineage A (ei4jwx) — the body and the law-in-progress (12 files):**
- `rfcs/RFC-005-proprioception.md`, `RFC-006-the-chronicle.md`, `RFC-007-reconciliation.md`, `RFC-008-interface-independence.md`
- `src/laboratory/habitat.js` (+test), `src/laboratory/report.js`, `tools/report.js` (+ `tests/laboratory/report.test.js`)
- `docs/CONSTITUTIONAL_MAP.md`, `docs/HANDOFF.md`, `cabinet/2026-07-20-mandate-proprioception.md` (CAB-013)

**Lineage B (canonical) — the memory, and its accompanying deposits (5 files):**
- `cabinet/2026-07-12-bug-003-sticky-note-legibility.md`, `2026-07-12-environmental-review-hospitality.md`, `2026-07-12-visual-ecology-lens.md`
- `docs/STEWARDSHIP.md`, `tests/tools/lab-cli.test.js`

### 3c. What the Camera shows, stated as fact (no ranking)

- **The organs are disjoint.** Lineage A advanced the *body* (habitat guard,
  proprioception report) and the *law-in-progress* (RFC-005–008, the
  Constitutional Map). Lineage B advanced the *memory* — 22 further sessions of
  stewardship (visual ecology, the hospitality review, the sessions 28–31
  distinctions including "the steward is an intention, not an office").
- **Neither tip contains the other's organ.** Lineage A's tree has the RFCs and
  code; Lineage B's Record has the 72 events. Length is not truth (RFC-007 §5,
  rejection 4): the 156-lineage is not *truer*, and the 88-lineage is not
  *poorer* — they are longer/shorter along different axes (memory vs law).
- **Therefore the collision named in RFC-007 §7 is real and mechanical:** the
  declared continuity ("preserve both") cannot be satisfied by adopting either
  tip alone. It requires adoption **plus** salvage of the other organ.

---

## 4. What waits on the human (§3.4) — presented, not concluded

Two directions of salvage satisfy the declaration; the machine presents both
and **judges neither**. The lineage judgment, and the reading of any conflict
inside it, are the Reality seat's:

- **If Lineage B (canonical, memory) is adopted as the continuing habitat:**
  carry Lineage A's *law and body* across — the RFCs, the habitat guard, the
  proprioception report, the Constitutional Map — as new authored events/commits
  citing their origin (`relate`, §3.5). Memory continues unbroken; growth is
  re-entered.
- **If Lineage A (ei4jwx, law+body) is adopted as the continuing habitat:**
  carry Lineage B's *72 memory events* across via `relate` re-entry (§3.5) —
  the heavier salvage, because Record events must be re-authored, not merely
  file-copied. Law continues unbroken; memory is re-entered.

Only one of these is the *continuing habitat*; the non-adopted lineage is then
preserved as an immutable, independently-verifiable artifact (§3.6), never
deleted (Axiom 3). Which lineage continues, and how much of the other's organ
is salvaged versus preserved-only, is the judgment RFC-007 §3.4 reserves to the
human — now made *within* the continuity declared in §2, not as a bare branch
preference.

---

## 5. Honest residue

This deposit was authored while the habitat still carries a forked Record; the
guard correctly refuses Record writes there, and none were attempted. Stages
§3.1–§3.3 live here in the Cabinet by design (RFC-007 §4). The **Record-side
recording of this reconciliation (§3.7) waits for adoption (§3.6)** to restore a
single live tip — at which point the divergence declaration, this comparison,
the human judgment, the adoption decision, and the preservation pointers become
Ink, closed by a seal. Until the human judges (§3.4), the fork stands, the
Record stays closed, and nothing below §3.4 is executed.
