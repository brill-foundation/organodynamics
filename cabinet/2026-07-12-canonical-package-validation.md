---
id: CAB-006
title: Validation of the Canonical Engineering Package (Bootstrap 0.1)
kind: package-validation
participants: Adi (package author, Reality seat); Claude (validator, steward per CAB-005)
date: 2026-07-12
language: English
discoveries: the package is internally coherent at the axiom level; "Canonical" in the package's own title is in tension with OIS-015's non-normativity; two constitutions now live in one Record
constitutional-questions: how the received corpus and the laboratory's grown charter relate (opened as RFC-004); which of the duplicate OIS files is authoritative (unresolved, listed below)
related: rfcs/RFC-004-two-constitutions.md, blueprint/ENGINEERING_PLAN.md, laboratory/CONSTITUTION.md, CAB-005
provenance: package received 2026-07-12 as a zip archive (Bootstrap 0.1, prepared July 2026 by Adi Brill with AI engineering assistance); validated the same day per the cover letter's first deliverable
status: complete
---

# Validation of the Canonical Engineering Package

The cover letter mandates three deliverables before code: **(1)** validate the
constitutional and architectural consistency of the package, **(2)** produce an
engineering execution plan, **(3)** only then begin implementation. This deposit
is deliverable 1. Facts, assumptions, findings, and recommendations are kept
separate, as the Project Bootstrap requires.

## 1. Facts — what was received

Archive `organodynamics-reference-implementation-bootstrap` (VERSION: Bootstrap 0.1),
4.5 MB, containing:

- **Package meta** (7 documents): START_HERE, ABOUT_THIS_PACKAGE, PACKAGE_MANIFEST,
  PROVENANCE, READING_ORDER, WHY_THIS_EXISTS, AI_HANDOFF.
- **Read-first** (3 documents): Cover Letter, Project Bootstrap, Engineering
  Operating Manual (a.k.a. Engineering Execution Prompt).
- **System Blueprint**, Parts I–IV (mission, architecture, execution plan,
  repository bootstrap).
- **Constitutional corpus** (PDF): OCS ×33, OAS ×32, OIS ×47 files, OGD ×24, ODM ×25.

Depth of this validation, stated honestly: every markdown document was read in
full; the corpus was validated by reading its foundational charters in full
(OCS-000 Constitutional Alphabet, OIS-CORE Constitutional Axioms, OIS-015
Reference Implementation) and by inventorying the remainder by title and volume
structure. A specification-by-specification reading is scheduled as ongoing work
in the engineering plan, not claimed here.

## 2. Findings — internal consistency

**Coherent at the foundation.** The 15 primitives of OCS-000, the 12 axioms of
OIS-CORE, and the Blueprint's layered architecture (Kernel → Engines → Services →
APIs → UX → Applications) are mutually consistent and consistently repeated
across the meta documents. The authority hierarchy (OCS > OAS > OIS > OGD > ODM >
Blueprint) is stated identically in the Blueprint and the Operating Manual. The
axioms are implementable: each one translates directly into a testable invariant
(see `tests/kernel/`).

**F-1 — "Canonical" vs. non-normativity.** The package everywhere names its goal
the *Canonical* Reference Implementation, while OIS-015 states the reference
implementation "is not the canonical system… exists to demonstrate possibility,
not authority" and "SHALL NOT become normative." These are reconcilable — the
*corpus* is canonical, the *implementation* is not — but the package's own title
invites the confusion OIS-015 forbids. Recorded, not silently resolved.

**F-2 — Manifest lists absent documents.** PACKAGE_MANIFEST and READING_ORDER
Stage 5 name two Working Drafts — **OCF** and **Book II (Foundations for
Builders)** — that are not present in the archive. The Project Bootstrap says OCF
"SHALL NOT block implementation," so this does not block; it is an inventory gap
between manifest and contents.

**F-3 — Reading order names files that do not exist under those names.**
START_HERE lists `PROJECT_BOOTSTRAP.md`, `COVER_LETTER.md`,
`ENGINEERING_EXECUTION_PROMPT.md`; the actual files are
`00_READ_FIRST/01_PROJECT_BOOTSTRAP.md`, `00_COVER_LETTER.md`, and
`02_ENGINEERING_OPERATING_MANUAL.md` (whose internal title *is* Engineering
Execution Prompt). Mapping is unambiguous; noted for future readers.

**F-4 — Duplicate and range-compiled OIS files.** The OIS volume contains both
individually titled specifications (e.g. `OIS-000 Implementation Charter.pdf`)
and untitled or range-compiled files covering the same numbers (`OIS-000.pdf`,
`OIS-003-005.pdf`, `OIS-101-107.pdf` … `OIS-900`). Which rendition is
authoritative when they differ is **unknown and remains visible as an unknown**
(Axiom 6). Until ruled on, this implementation treats the individually titled
files as primary and the compilations as convenience copies.

**F-5 — PDF as the corpus medium.** The corpus arrives as PDFs — faithful for
preservation, weak for the diffing, linking, and citation the corpus itself
demands (OCS asks that references remain traceable). CAB-004 (Knowledge Media,
OPEN) already studies exactly this. No conversion performed: transformation
without governance would violate the read-only rule of Blueprint Part IV §30.

## 3. Findings — consistency with this Record

The package was mailed to a Record that already has standing law. Three
collisions, all real, none fatal:

- **Two constitutions.** `laboratory/CONSTITUTION.md` is grown law ("reality has
  the final vote", OPEN clauses); the corpus is received law ("assume the
  Constitution is correct"). Their relation is a constitutional question, not an
  engineering one → **RFC-004**.
- **Authority shape.** The Operating Manual instates a "Chief Systems Engineer";
  CAB-005 rules the steward is a seat, not an authority, under RFC-002 §4. Read
  together consistently: engineering authority only, constitutional authority
  external — which is what the Manual itself says. Accepted under the CAB-005
  limits.
- **Prescribed repository layout.** Blueprint Part IV wants `rfc/`; the Record
  has `rfcs/` with three living RFCs. The existing name is kept — continuity of
  the Record outranks naming compliance (Axiom 3). All other prescribed
  directories (`constitution/`, `blueprint/`, `src/`, `tests/`, `docs/`,
  `.github/`) are adopted as specified. Recorded in RFC-004 §4.

## 4. Recommendation

**Sufficient to begin.** No finding blocks implementation; F-1…F-5 are recorded
here and the constitutional questions are open in RFC-004 rather than resolved in
code. Deliverable 2 is `blueprint/ENGINEERING_PLAN.md`; implementation begins, as
mandated, only at its Phase 1–2.
