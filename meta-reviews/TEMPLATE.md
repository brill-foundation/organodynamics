<!--
Canonical Meta Review template. Status: repository convention (RFC-003 §6) —
this file may churn without reopening RFC-003. The *rules* it enforces
(quorum, independence accounting, role separation, two zones, residue,
disposition handoff) live in RFC-003 §7 and change only by challenge there.

Structure: sections 1–7 are the READING ZONE — reproducible in principle,
citation-dense, no interpretation beyond classification. Section 8 is RESIDUE,
mandatory. Section 9 is the CLAIM ZONE — authored, confidence-bearing,
challengeable. Section 10 is the standing self-check. Do not blend zones.

Citation convention: cite reviews as [R1 §2], [R2 §4.1] using the corpus
index IDs from §2. Every map entry must carry at least one citation.
-->

---
id: META-REVIEW-NNN
subject: RFC-NNN            # the proposal under review, one per meta review
subject-revision: <commit>  # the exact revision of the proposal the corpus reviewed
status: awaiting-quorum     # awaiting-quorum | in-progress | recorded | superseded
opened: YYYY-MM-DD
meta-reviewer: <name / process>
meta-reviewer-provenance: <human | model+version | institution; see §1>
corpus-size: N reviews / M independent processes
quorum: met | not-met (M of 3 independent processes)   # RFC-003 §7.1
confidence: —               # applies to §9 only; set when claim zone is written
competing: <links to competing meta reviews of the same corpus, if any>
---

# META-REVIEW-NNN — <Subject Title>

## 1. Provenance and independence disclosure

Who is synthesizing, and what could bend the synthesis. Required before any
map is written; violations of role separation (RFC-003 §7.3) are disclosed
here, never silently tolerated.

- Generating process of this meta review (human / model+version / mixed —
  if mixed, which sections were produced by which process):
- Relationship to the proposal's author:
- Relationship to each review's author:
- What this meta reviewer had read before starting (prior reviews, prior
  meta reviews, discussion threads):
- Known constraints (scale, deadline, missing corpus items):

## 2. The proposal under review

Pointer and *descriptive* restatement only — no evaluation in this section.

- Subject: `<path>` at `<commit>`
- One-paragraph restatement of what the proposal claims and proposes:
- Revisions of the subject issued since the corpus was collected (these are
  NOT covered by this meta review):

## 3. The review corpus

Index every review, whether or not it counts toward quorum. Reviews lacking
provenance front-matter enter the corpus (the record keeps everything) but
cannot contribute to convergence counts (RFC-003 §7.2).

| ID | Review | Generating process | Provenance class | Blind? | Had seen | Counts toward quorum? |
|----|--------|--------------------|------------------|--------|----------|-----------------------|
| R1 | `<path>` | | | | | |

- Independent process count (M): —
- Grouping rationale (why any two reviews were judged the same process):

## 4. Convergence map

Where independent processes agree. Convergence is evidence only in
proportion to the independence of the processes converging — report the
process count, never a document count, and never a percentage.

| # | Converged claim | Reviews | Independent processes | Citations |
|---|-----------------|---------|-----------------------|-----------|
| C1 | | | | |

## 5. Divergence map — productive disagreements

Each divergence is classified, because the classes route differently
(RFC-003 §7.6): factual → evidence; definitional → vocabulary refinement;
value-ranking → ratification; scope → decomposition. A divergence that no
class settles is a candidate held tension (RFC-001 §5.5) — record it as
such; do not force a winner.

| # | Disagreement | Positions (with citations) | Class | Routing | Held-tension candidate? |
|---|--------------|----------------------------|-------|---------|-------------------------|
| D1 | | | | | |

## 6. Hidden assumptions surfaced

Assumptions of the proposal that reviews exposed, deduplicated across the
corpus, each with citations. State the assumption; do not adjudicate it.

| # | Assumption exposed | Surfaced by | Notes |
|---|--------------------|-------------|-------|
| A1 | | | |

## 7. New architectural questions exposed

Questions the corpus raised that the proposal did not contain. These are
ROUTED, not answered here (RFC-003 §4.3 — no new critique, no adjudication
in place): to a new RFC, to the subject's open questions, or back to the
review layer for a directed look.

| # | Question | Exposed by | Routed to |
|---|----------|------------|-----------|
| Q1 | | | |

### 7b. Unresolved by the corpus

What no review settled — and, separately, what this corpus *cannot* settle
in principle (missing perspective, missing evidence, missing scale). The
second list is a specification for commissioning the next reviews.

## 8. Residue — perspectives that resist the maps

Mandatory (RFC-003 §7.5). Singular observations, arguments that fit no
cluster, minority readings. Listed by citation, preserved without
classification. An empty residue section in a diverse corpus is a warning
sign about the mapper, not evidence of consensus.

## 9. Recommended synthesis direction   ⟨CLAIM ZONE⟩

Authored. Bears the confidence declared in the front-matter. Challengeable
like any representation. Constraints (RFC-003 §4): this is a claim about
*how to revise*, never about *whether to adopt* — adoption belongs to
ratification, which this document does not perform. No new critique may
appear here. If the divergence map is non-empty, consider offering plural
directions with the tensions among them (RFC-003 Q-e).

- Direction(s):
- What each direction absorbs from the convergence map:
- What each direction does with each divergence (settle / decompose / hold):
- What is deliberately left to ratification:

## 10. Self-check (standing)

Completed by the meta reviewer before marking status `recorded`:

- [ ] No verdict on the proposal appears anywhere in this document.
- [ ] No scores, rankings, vote counts, or percentages over reviews.
- [ ] No new critique introduced; everything I discovered went to §7.
- [ ] Every map entry carries citations; a spot-check takes minutes.
- [ ] Convergence counted in independent processes, not documents.
- [ ] Residue section honestly populated (or its emptiness explained).
- [ ] No statement about any reviewer as a person — specimens are
      representations (RFC-001 §5.3), at this layer too.

## Handoff

The revised RFC that follows this meta review owes a **disposition table**
(RFC-003 §7.7): for every C# and D# above — absorbed, declined with reasons,
deferred to an open question, or held. A revision without that table has
silently absorbed its reviews, which is the failure this stage exists to
prevent.
