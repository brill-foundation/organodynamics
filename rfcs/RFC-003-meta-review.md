---
id: RFC-003
title: Meta Review
status: open
opened: 2026-07-06
concerns: how independent reviews are synthesized — the integration step made visible
confidence: speculative
exposed-by: the constitutional review of RFC-000 (reviews/RFC-000-constitutional-review.md)
---

# RFC-003 — Meta Review

**Epistemic status:** speculative. This RFC designs a stage that will first be
applied to the review that exposed it. It is therefore a calibration run twice
over: the process it defines has never run, and its first subject is the
critique of the constitution that will govern the process.

## 1. The exposure

The constitutional review of RFC-000 located the central defect of the current
methodology in one step: **Integration**. Reviews are produced in the open;
what happens to them is not. The mapping from "what reviewers said" to "what
the revised document says" occurs in the author's head — invisible,
unrecorded, and structurally biased toward the author's priors. Where the
integration function is undefined, the author is the integration function.

The proposal on the table inserts a stage between Independent Reviews and
Revision:

    RFC → Challenge → Independent Reviews → Meta Review → Synthesis
        → Revised RFC → Constitution

This RFC defines the Meta Review stage. One honesty note before anything
else: **Meta Review instruments integration; it does not supply the missing
ratification rule.** Making the synthesis visible does not answer *who
decides* and *by what rule* a synthesis is accepted. That constitutional debt
(review §1) remains open and is tracked here as Q-f. A visible synthesis
adopted by an invisible decider is progress, not resolution.

## 2. Definition (proposed)

> A Meta Review is a directed Inquiry (RFC-002) whose record is a corpus of
> independent reviews of one proposal, and whose product is two things kept
> strictly apart: **maps** — reproducible descriptions of where the corpus
> converges, diverges, and resists description — and a **recommendation** —
> an authored, confidence-bearing claim about the direction a synthesis
> should take.

It synthesizes perspectives, not proposals: it never produces the revised
text, and it never adjudicates the proposal's fate.

The definition deliberately reuses existing machinery. Reviews are
representations whose subject is another representation. A corpus of them is
a record. Mapping that corpus is instrumentation; the maps are readings. The
recommendation is an interpretation of readings and crosses the promotion
boundary (RFC-001 §5.4) exactly as any interpretation does: it becomes a
representation, bears confidence, and can be challenged. Nothing in this
paragraph is new ontology, and that is the point (§5).

## 3. Why this stage exists

Four arguments, in descending order of weight.

**3.1 It makes the power-laden step inspectable.** Integration is where
authority actually operates, and it was the one step the pipeline left dark.
A Meta Review converts "the author absorbed the reviews" into a recorded,
citable, challengeable artifact. This is the same move RFC-001 §2 makes for
measurement: the step that shapes everything cannot be left as an
implementation detail, because whoever performs it invisibly performs it
absolutely.

**3.2 Triangulation over reviews.** RFC-001 §6 argues a lone instrument
cannot detect its own artifacts. The identical argument applies one level up:
a lone review cannot be distinguished from its own artifacts — its blind
spots, its reviewer's theory of what matters. Only across multiple
independent reviews can convergence (signal) be separated from
reviewer-idiosyncrasy (artifact). A Meta Review is the comparator that makes
the separation, and like RFC-001's comparators it is flat, not towered: a
function of the corpus, not an authority over it.

**3.3 Batching preserves independence.** Revising immediately after the first
critique has two failure modes. It overfits: the revision chases the loudest
or earliest reviewer rather than the corpus. And it contaminates: every
subsequent reviewer now reviews a document already bent toward the first
reviewer, so later reviews are no longer independent measurements of the
original proposal — they are reviews of a negotiation in progress.
Synthesis-after-quorum is to review what blind review is to individual
reviewers: the same independence discipline, applied at the layer above.

**3.4 It protects representation before authority.** For the author, a single
critique arrives as an opponent; a corpus arrives as a phenomenon. The stage
converts "defend against the critic" into "study what independent
observations of your proposal agree about" — which is the posture the
methodology demands and human psychology does not supply on its own.

## 4. What a Meta Review is not

Four prohibitions, mirroring RFC-001 §5.3 in structure because they guard the
same line.

1. **Not a verdict.** A Meta Review never accepts or rejects the proposal.
   "Recommended synthesis direction" is a claim about *how to revise*, never
   a ruling on *whether to adopt*. Adoption belongs to ratification (Q-f).
2. **Not aggregation.** No scores, no composite assessments, no counting
   votes among reviews. The maps juxtapose; they never average. A Meta Review
   that outputs "7 of 9 reviews favor X" has already failed — convergence is
   reported by *independent process* with citations, never as arithmetic over
   documents (§7.2).
3. **Not a super-review.** The meta reviewer adds no new critique. Objections
   discovered while mapping the corpus are real and valuable — they are
   logged in the "exposed questions" section and routed back to the review
   layer or to new RFCs, not adjudicated in place. A synthesizer who both
   maps the arguments and adds their own becomes the strongest reviewer with
   the last word: an authority layer, which RFC-002 §4 forbids.
4. **Not exclusive.** Anyone may write a competing Meta Review of the same
   corpus. Divergence between Meta Reviews is information — the RFC-002 §3
   discipline (cheap, plural, recorded, contestable) applies verbatim,
   because a Meta Review *is* an Inquiry.

## 5. Primitive or governance mechanism?

Neither a new architectural primitive nor a mere convention. A Meta Review is
an **existing primitive applied at the next layer**: the comparison protocol
of the Observatory (RFC-001 §6), running over reviews instead of readings —
convened as a directed Inquiry (RFC-002) whose question is fixed: *what does
the independent review corpus of proposal X converge on, diverge on, and fail
to settle?*

RFC-001 Q-i predicted exactly this: "plural Instruments over readings, plural
challengers over claims, plural perspectives over proposals — no total
vantage point at any scale." Meta Review is that self-similarity made
operational at the proposal layer. And it partially answers RFC-002 Q-c (does
the tower of comparison protocols stop?): the tower is flat. A Meta Review of
Meta Reviews is not a higher kind — competing Meta Reviews are representations
in the record, so a comparator over them is just another Meta Review with a
wider corpus. Everything roots in the record; no regress.

This resolution matters practically: because Meta Review is built entirely
from existing primitives, it **inherits their disciplines for free** — no
aggregation, provenance, immutable readings, challengeability, the promotion
boundary — instead of needing parallel rules of its own. A genuinely new
primitive would have been a warning sign.

Its *use* is governance: it is the epistemic instrument doing a governance
job, which is the correct dependency direction. Governance mechanisms built
on the discipline's own primitives stay honest by construction; governance
mechanisms invented beside them drift.

## 6. Constitutional principle, RFC-level process, or convention?

All three questions have different answers, and the split is itself the
lesson of the RFC-000 review (invariants vs. bylaws):

- **Constitutional: one sentence, and it is not "Meta Review."** The
  invariant worth entrenching is smaller than the stage: *no revision of a
  canonical proposal may silently absorb its reviews — the mapping from
  review corpus to revision must itself be a recorded, challengeable
  artifact.* That clause is already implied by the proposed invariant core
  (Record + Plurality + Provenance + visible ratification); Meta Review needs
  **no new constitutional clause**, only the enforcement of ones already
  proposed. Constitutionalizing "Meta Review" by name would repeat RFC-000's
  category error of entrenching current process vocabulary.
- **RFC-level: the process rules.** Quorum, independence accounting, role
  separation, the two-zone structure, the handoff obligation (§7). That is
  this document. Like Instruments, the stage is commissioned by challenge
  (RFC-001 §6) — proposed, contested, versioned, retirable.
- **Convention: the artifacts.** The template, the `meta-reviews/` directory,
  section names, front-matter fields. Expected to churn without ceremony.

One warning in the same key: the new seven-stage pipeline should not be
constitutionalized as a sequence either. The RFC-000 review (§4.3) argued
that legislating a linear path makes the most common sources of insight
unconstitutional. The invariant is the checkpoint — *revision responds to a
recorded synthesis of independent reviews* — not the diagram. Keep the
diagram as the default path in bylaws, with declared exceptions legal.

## 7. Process rules (proposed)

**7.1 Quorum.** A Meta Review requires at least **three reviews from
independent processes** before its maps mean anything. Below quorum it is a
summary of one or two voices wearing the costume of a synthesis — worse than
nothing, because it launders a single perspective into apparent consensus.
Below quorum, the document exists in `awaiting-quorum` status with only its
mechanical sections filled (see META-REVIEW-000).

**7.2 Independence is provenanced, not asserted.** Convergence is counted per
independent *process*, never per document. Two reviews from the same model
family with similar prompts are one process. Ten AI reviews seeded from the
same brief are one process. The corpus index must record, for every review:
generating process (human / which model / which institution), what the
reviewer had seen (blind status, which prior reviews, which revision of the
proposal), and relationship to the author. Reviews missing provenance
front-matter still enter the corpus — the record keeps everything — but
cannot contribute to convergence counts.

**7.3 Role separation.** The meta reviewer must not be the proposal's author
and must not have authored any review in the corpus. (At current project
scale this rule will be strained immediately — see §9.1 — but the rule marks
the direction of travel, and violations must be disclosed in the provenance
section, not silently tolerated.)

**7.4 Two zones, kept apart.** The template separates the **reading zone**
(corpus index, convergence map, divergence map, assumptions surfaced,
exposed questions, residue) from the **claim zone** (recommended synthesis
direction). Reading-zone entries must be reproducible in principle — a
different meta reviewer over the same corpus should produce substantially the
same maps — and every entry cites the reviews it derives from, so
spot-checking any line costs minutes. Claim-zone content is authored, bears
confidence, and is challengeable like any representation.

**7.5 Residue is mandatory.** Perspectives that resist the maps — singular
observations, arguments that fit no cluster — are listed by citation, never
dropped. This is the anti-aggregation discipline enforced structurally: a
synthesis that only keeps what clusters has averaged, just without the
arithmetic.

**7.6 Divergences are classified, and may be held.** Each productive
disagreement is classified — factual (evidence can settle it), definitional
(vocabulary can dissolve it), value-ranking (a priority decision must settle
it), or scope (both sides right about different things) — because the classes
route differently: factual to evidence, definitional to refinement,
value-ranking to ratification, scope to decomposition. A divergence no class
settles is a candidate **held tension** (RFC-001 §5.5) and is recorded as
such rather than forced to a winner.

**7.7 The handoff closes the loop.** A revised RFC that follows a Meta Review
must carry a **disposition table**: for every convergence-map and
divergence-map entry, what the revision did — absorbed, declined with
reasons, deferred to an open question, or held. This is the "no silent
absorption" invariant made operational; it is the response-to-reviewers
discipline of journal practice, owed to the corpus rather than to any
reviewer.

**7.8 No reviewer metrics. Ever.** The Meta Review maps claims, not
reviewers. No review is scored, ranked, or graded; no per-reviewer statistics
exist. The Goodhart line (RFC-001 §5.3) applies with full force: the moment
being-cited-in-the-convergence-map becomes a prize, reviewers write to be
legible to the mapper, and perspective diversity — the input the whole stage
exists to protect — collapses.

## 8. Relationship to the current situation

Applied honestly to today: RFC-000 has **one** review from **one** process
(a single LLM, non-blind, having read RFC-001/002). META-REVIEW-000 therefore
opens in `awaiting-quorum` and must wait for at least two more reviews from
processes independent of that one — different humans, different model
families, or institutions — before its maps may be written. The strongest
thing the project can do next is not synthesize; it is commission the missing
independent reviews. Synthesizing now would canonize a single reviewer's
theory of RFC-000's defects, which is precisely the failure mode §3.2
describes.

## 9. Scalability

The stated future: reviews from humans, multiple LLMs, research groups,
institutions, automated analyzers. The stage scales along one axis naturally
and needs evolution along two others.

**9.1 What scales naturally: the reading zone.** Mapping convergence across
500 reviews is clustering and citation work — exactly what automated
analyzers are for, and legitimately so, because reading-zone content is
required to be reproducible (§7.4): it is instrumentation, and RFC-001
already governs instruments. The evolution path is to make review provenance
front-matter machine-readable now, while the corpus is tiny, so future
analyzers have structured input. Conversely, at *current* scale the stage is
strained from the other side: with two or three participants, role separation
(§7.3) is nearly unsatisfiable. The template's provenance disclosure exists
so that small-scale violations are recorded rather than hidden; a rule
honestly bent is data, a rule silently bent is rot.

**9.2 What must not scale by automation: the claim zone.** The recommendation
is an interpretation — authored, confidence-bearing, owned. At scale the
correct response to volume is not a bigger synthesizer but **plural competing
Meta Reviews** with the comparison protocol among them (the flat tower, §5).
Automating the claim zone would recreate the single-instrument fallacy at the
governance layer: one synthesis function, its theory of what matters hidden
in its weights.

**9.3 The two attack surfaces that arrive with scale.**

- *Flooding / Sybil convergence.* A thousand near-identical AI reviews
  simulate overwhelming agreement. Defense: §7.2 — convergence counts
  processes, not documents, and quorum is denominated in independent
  processes. This must be in place *before* it is needed; retrofitting
  independence accounting after a flood is archaeology.
- *The meta reviewer as capture point.* Whoever writes the synthesis that a
  human steward reads — because the steward cannot read the corpus — holds de
  facto integration power (RFC-000 review §4.6). Defenses, none sufficient
  alone: citation-traceability makes spot-checks cheap (§7.4); competing Meta
  Reviews are always legal (§4.4); the disposition table (§7.7) exposes what
  the revision did with each mapped item; and the recommendation is never a
  verdict (§4.1), so capture of the recommendation is not capture of the
  decision. The residual risk is real and is the price of conserving human
  attention; it is bounded, not eliminated.

**9.4 The conserved quantity.** Human attention is the scarce constitutional
resource. Meta Review is precisely its conservation mechanism — the artifact
a responsible human can actually read, with every line auditable on demand.
That is why the stage becomes *more* load-bearing as reviewer diversity
grows, and why its internal disciplines (§7) matter more at scale, not less.

## 10. What this RFC does not decide

Ratification — who adopts a synthesis and by what rule (the standing debt,
Q-f). Who convenes a Meta Review and when. Cadence. Whether the stage applies
to all RFCs or only those marked significant. The template's exact fields
(convention; see `meta-reviews/TEMPLATE.md`, which may churn without
reopening this RFC).

## 11. Open questions

- **Q-a.** May automated analyzers author the reading zone while a human
  authors the claim zone — mixed authorship inside one document — and does
  the provenance front-matter need per-section granularity to support that?
- **Q-b.** Does the meta reviewer role need rotation or lottery to prevent a
  synthesis priesthood, or do competing Meta Reviews discipline the role
  sufficiently?
- **Q-c.** What is the minimal quorum denominated in *provenance classes*
  (not documents) — and should quorum scale with the proposal's
  constitutional depth?
- **Q-d.** Does a Meta Review expire? Reviews arriving after synthesis are
  measurements of the same proposal — do they reopen the Meta Review, spawn
  a successor, or wait for the next revision cycle?
- **Q-e.** Is "recommended synthesis direction" already too verdict-shaped?
  Should the claim zone be required to offer directions *plural* — with the
  tensions among them — whenever the divergence map is non-empty?
- **Q-f** *(inherited from the constitutional review of RFC-000, §1).* The
  ratification rule. Meta Review makes integration visible; nothing yet makes
  it legitimate. This RFC deliberately does not answer it, and nothing in
  this RFC should be read as answering it by default.

## 12. Disposition

Resolved by challenge and revision like any other RFC. Note the recursion,
which is the point of the exercise: this RFC will itself receive independent
reviews, which will themselves await a Meta Review conducted under the rules
proposed here. If the stage cannot survive being applied to its own
definition, that is the cheapest possible place to find out — and the
rejection is kept, as always.
