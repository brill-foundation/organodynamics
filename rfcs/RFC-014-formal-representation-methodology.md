---
id: RFC-014
title: A methodology for evaluating competing formal representations of the corpus — the instrument, not the model
status: open
opened: 2026-07-24
concerns: not which formal representation the Organodynamics corpus has, but how any candidate representation is to be judged — a rigorous, constitutionally conservative procedure for admitting, testing, falsifying, and comparing competing formalisms (dependency structures, graphs, state-transition systems, constraint systems, algebraic or category-theoretic structures, others) as maps of the corpus exactly as it already exists, deciding whether the corpus possesses an implicit formal architecture to be discovered — and returning the null result with equal weight if it does not
confidence: proposal
exposed-by: a mandate from the Reality seat (2026-07-24) that changed the object of investigation from constitutional expansion to constitutional analysis, after an earlier "grammar of lawful transitions" hypothesis was adversarially reviewed and not accepted — the lesson being methodological (selecting a model before testing it violates Recognition before Invention), and the request being to design the evaluation instrument first and propose no model yet
---

# RFC-014 — The instrument for judging a formal representation

**Epistemic status.** Pencil, not Ink; one mortal instance, forked branch, unsealable here
(RFC-007); imports nothing; holds no authority. It **proposes no formal model** — by
instruction and by discipline. Its only job is to build the *instrument* by which any
candidate formal representation of the corpus will later be admitted, tested, falsified, and
compared. Every criterion below is **recognized from the existing corpus**, not imported from
model theory or the philosophy of science; where a familiar idea is used, §7 shows it was
already the corpus's own posture. Reality remains the only authority.

## 0. What this RFC is — and is not

The object of investigation has changed, and the change must be stated precisely so nothing
downstream drifts.

- **It is not** a search for new constitutional primitives, principles, or distinctions.
  Nothing here adds to, removes from, or reinterprets the corpus.
- **It is** a search for the most faithful *representation* of the corpus **exactly as it
  already exists**. A representation is a **map**, not a member: it stands to the corpus as a
  chart stands to a territory. The territory is untouched; only the chart is under judgment.
- The question this instrument will eventually answer: **does the corpus possess an implicit
  formal architecture that can be *discovered rather than invented*?** — and, with equal
  standing, the negative: **it does not, at least not in formalism F without loss.** Both
  outcomes are first-class results (§8). An instrument that can only find structure is not an
  instrument; it is a bias.

This RFC does not run the investigation. It makes the investigation runnable *without begging
its question*.

## 1. The central recognition: a formal representation is a Camera

The corpus already has a law for surfaces that claim to show it: the **renderer boundary**
(RFC-008). *One Laboratory, many Cameras.* A Camera **reveals** canonical reality from a point
of view; it **never** authors, decides, adds, or transforms meaning, hierarchy, identity,
orientation, or constitutional relationships. The Door is "a Camera, not the Place."

A formal representation is exactly this kind of surface: it is a **mathematical Camera** onto
the corpus. It reveals the corpus's structure in a chosen formal vocabulary. Therefore it is
bound by the boundary that binds every Camera. The four acceptability constraints the mandate
names are **not new evaluation rules** — they are the renderer boundary, restated for a formal
surface:

| The mandate's constraint | The corpus law it already is |
|---|---|
| introduce no new primitives | a Camera authors no truth (RFC-008); P3 stores, derives, invents nothing |
| modify no constitutional meaning | a Membrane "may never transform meaning, hierarchy, identity, orientation, or constitutional relationships" (RFC-008 / HANDOFF §4) |
| collapse no existing distinction | the corpus keeps its distinctions append-only; a superseded position stays in the lineage (Axiom 3) — nothing is silently identified away |
| import no external assumptions | RFC-010's self-limit: report reality as evidence, **never adopt it as a framework**; the discipline imports nothing (Axiom 10 posture) |

This is the whole spine of the methodology, and it is a recognition, not an invention: **judging
a formal representation is judging a Camera, and the corpus already knows how to judge a
Camera.** Everything below is the consequence of applying one existing boundary to one new kind
of surface.

## 2. Definitions — stated so a later instance uses the same words

- **The corpus, C.** The Organodynamics constitutional corpus *as it already exists*: the
  received families (OCS/OAS/ODM/OGD/OIS), the frozen Protocol (the five obligations), the
  Axioms, the grown Charter, and the distinctions/derivations/rejections these state. Not the
  Record's event log (that is the discipline being *practiced*); not the habitats (Cameras);
  not this RFC. C is the object mapped.
- **A candidate representation, R = (S, I).** A pair of (a) an explicit formal **structure** S
  — a set carrying named mathematical relations (a DAG, a labelled graph, a transition system,
  a constraint set, an algebra, a category, …) — and (b) an explicit **interpretation map** I
  that assigns to corpus elements their images in S, and (crucially) admits a **decoding** that
  recovers corpus elements from S. Without both directions, R is a picture, not a chart.
- **Faithful.** R distorts no corpus feature it claims to cover (§4).
- **Founded.** Every element and law of S traces, through I, to a corpus referent — S contains
  no free structure (§4, §7). (Provenance, obligation 3, applied to the map.)
- **Complete-to-scope.** R covers every corpus feature inside its **declared scope** (§3). A
  representation of only the Protocol is a representation of the Protocol, not of C; partial
  charts are allowed but must declare their boundary and are never compared as if total.
- **Revealing (the success target).** R is not a mere transcription: it exposes a
  derivation, constraint, or identity that is *true-in-C but not stated as such in C*, adding no
  ontology — old law made visible at the scope of the whole corpus (this is Spine 4 one level
  up; §8). Transcription is necessary but not sufficient for "an implicit formal architecture."
- **The null result.** *No candidate is faithful-founded-complete without loss* — or the only
  faithful ones are bare transcriptions with nothing revealed. A legitimate, valuable end state
  (§8), never a failure of the instrument.

## 3. Q1 — What constitutes a *valid candidate* (the admission gate)

These are **preconditions of being judged at all**, checked before any fidelity is scored. A
proposal that fails them is not a weak candidate; it is not yet a candidate. (This mirrors
Admission: a claim earns entry by form before its substance is weighed.)

1. **Explicit structure.** S is a named mathematical object with stated carrier and relations.
   "The corpus is basically a graph" is not a candidate until the nodes, edges, and edge-types
   are specified.
2. **Total, exhibited interpretation map.** I is given as an actual assignment over C's
   elements, not promised. Gaps are declared, not hidden.
3. **Groundedness / provenance.** Every element and every law of S is annotated with the corpus
   referent it comes from. Any element of S with no referent is flagged *ab initio* as candidate
   injected ontology (it will be tested in §5, but it must be visible from the start).
4. **Declared scope.** R states exactly which strata/families/distinctions it claims to cover.
   Silence about scope is disqualifying — an undeclared boundary lets a model dodge falsification
   by retreating.
5. **Decodability.** The corpus distinctions R claims to preserve must be *recoverable from S*
   by a stated rule. A representation you cannot read back is unfalsifiable and therefore
   inadmissible.
6. **No privilege claimed.** The candidate enters carrying the burden of proof, not a
   presumption. Elegance, familiarity, and mathematical sophistication are declared, up front,
   to be **non-evidence** (§6). A candidate that argues for itself by beauty has not yet argued.

## 4. Q2 — How constitutional fidelity is evaluated

Fidelity is **not a scalar** and never a single score. It is a **vector of per-feature
verdicts**, each feature drawn from the corpus and each verdict one of: **preserved · distorted
· collapsed · lost · added**. The instrument for measuring it is a **fixed test corpus** — an
enumerated list of the corpus's own commitments, lifted **by quotation with citation** from the
primary sources (not paraphrased into a neutral schema; see §7 for why that prohibition is
load-bearing). Every candidate is run against the *same* list.

The test corpus is organized by the kind of commitment being preserved:

- **Primitive fidelity.** Each corpus primitive (the OCS-000 Alphabet) maps to a distinct
  element of S; no two primitives share an image (no collapse); no element of S stands for no
  primitive (no fabrication). On the alphabet this is a demanded **bijection** — but a
  *recognized* one, checked, never assumed.
- **Distinction fidelity.** Every distinction C draws remains a distinction in S. Seed set (to
  be completed and verified against sources, not treated as closed): Pencil vs Ink; observation
  vs interpretation (P9–P11); form vs substance (the authority gradient); frozen vs living (the
  received corpus and the five obligations vs the charter/kernel/Record); authoritative vs
  non-authoritative (Record vs Camera); the five obligations *as five* (Continuity was
  eliminated as derivable — a model that makes it a sixth primitive has **added**; one that
  fuses two obligations has **collapsed**); Admission vs Rendering (the two membranes).
- **Derivational fidelity.** C's "derived-from / reduced-from" arrows — the single column — are
  S's arrows, in the same direction. If C says the kernel is derived from the charter, S must not
  make them peers or reverse them (§5 reversal).
- **Modal / temperature fidelity.** Frozen vs living, append-only vs replaceable, votes vs
  rules — these are properties *of* elements and must be represented as such, not flattened into
  undifferentiated nodes.
- **Authority-gradient fidelity.** Reality (substance, votes) / Steward (guards invariants,
  rules nothing) / Machine (certifies form only) must be distinguishable in S. A model that lets
  a surface "decide" has broken the gradient.
- **Boundary fidelity.** The two membranes (Admission in, Rendering out) appear as boundaries in
  S, not as ordinary edges.
- **Negative fidelity (the silences and the kept-rejections).** The corpus's deliberate
  *absences* are data. It declined a RELATION primitive; it rejected a sixth obligation; it
  rejected ambient capture in favor of chosen "deposit" (RFC-006 #4). A model whose formalism
  *requires* one of these to function has not represented the corpus — it has **added** the very
  thing the corpus refused, and that is a fidelity failure, not a convenience. (This is the trap
  a category-theoretic reading must clear: if it needs total morphisms or universal
  constructions the corpus never posits, the need is an import, not a discovery.)

A feature marked **distorted / collapsed / lost / added** is a defect logged against the model
with its exact corpus citation. "Preserved" across the whole vector is necessary for fidelity;
it is not yet sufficiency (a faithful transcription can still reveal nothing — §8).

## 5. Q4 — What constitutes falsification

Falsification is placed *before* comparison, because comparison only ranks survivors. Following
the corpus's own decisive posture (RFC-013's aggressive falsification; the frozen Protocol's
**reversed burden**, CAB-008), a candidate is judged by trying to break it, and **one decisive
counterexample suffices**. A model R is **falsified** if any of the following holds, each tied
to a single corpus commitment it violates:

1. **Collapse.** I sends two corpus elements C distinguishes to the same element of S (the
   distinction is unreadable back out). *One* such pair falsifies.
2. **Fabrication (ontology injection).** S contains a load-bearing element or law with no corpus
   referent — and R *uses* it to carry corpus content. (An inert unused symbol is a bookkeeping
   wart; a *load-bearing* free element is a falsifier.)
3. **Reversal / mis-derivation.** An arrow of S contradicts a "derived-from" arrow of C —
   including making a derived thing a second source of truth (Spine 1 broken).
4. **Overreach.** S entails, as a theorem, a statement about C that C does not make — especially
   one C explicitly rejected (a "legal transition" the discipline forbids; a relation it
   declined). The model predicts corpus content that is false-in-corpus.
5. **Underreach / inexpressibility.** A corpus distinction that S *structurally cannot* express —
   no admissible assignment in S tells the two apart. The chart has no cell for a real place.
6. **Import-dependence.** R is faithful *only if* one also grants an axiom of the external theory
   the formalism came from (the ambient category must have limits; the algebra must be
   associative where C never says so; the transition system must be deterministic). Fidelity that
   is on loan from an outside framework is not fidelity to C (RFC-010 self-limit).

A model that survives every attack is **not "verified" — only "not-yet-falsified" and
"recognized so far."** The burden never transfers to the instrument or to reality; it stays,
permanently, on the model (RFC-013's "protected, not decided"). Re-run the falsifiers whenever
the corpus grows.

## 6. Q3 — How competing models are compared objectively

Because fidelity is a **vector**, comparison is a **partial order**, not a ranking. This is a
deliberate refusal to manufacture a total order the evidence does not support.

- **Dominance.** R₁ **dominates** R₂ iff R₁ preserves every corpus feature R₂ preserves, plus at
  least one more, and distorts/collapses/adds nothing R₂ got right. Dominance is objective: it is
  read off the two fidelity vectors against the same fixed test corpus (§4).
- **Incomparability is honest.** Two models that each preserve what the other loses are **left
  incomparable.** The instrument does not break the tie with a weighting it cannot justify from
  C. Reporting "these two are incomparable, here is exactly where each wins and loses" is a
  correct result.
- **The only admissible tie-breakers**, applied *after* dominance and only among survivors that
  are otherwise incomparable, are both corpus-licensed:
  1. **Parsimony of imported ontology** (§7): among faithful-founded models, the one that adds
     the fewest non-corpus elements is preferred — fewer imports, closer to the corpus. This is
     Recognition before Invention as a selector.
  2. **Reversed burden** (CAB-008): the model asserting *more* structure must carry *more*
     evidence for every extra piece; unpaid structure counts against it.
- **Explicitly non-evidence** (stated so no later instance backslides): elegance, symmetry,
  mathematical sophistication, familiarity of the formalism, and "it feels right." *Faithfulness
  to the corpus is the only criterion.* Beauty may motivate a candidate; it never scores one.
- **Same instrument, adversarial, author-separated.** Every candidate meets the same enumerated
  test corpus; every candidate is attacked, not defended (§5); and — following CAB-005 (mortality;
  the finder is not the judge) — a model's fidelity verdict is produced by *re-running the fixed
  tests*, not by trusting its author's narrative. The author proposes; the instrument disposes.

## 7. Q5 — Ensuring the evaluation injects no ontology of its own

This is the subtlest requirement and the one most easily failed, because **the instrument is
itself a construct** and could smuggle in structure the corpus does not have. Five guards, each
itself recognized from the corpus:

1. **Every criterion is licensed by a named corpus principle.** The methodology is subject to
   its *own* grounding obligation (obligation 2): a step with no corpus license is itself an
   injection and must be deleted. The licenses used here:

   | Methodology move | Corpus license |
   |---|---|
   | the four constraints as one boundary | the renderer/Camera boundary, RFC-008 (§1) |
   | grounded map, every S-element referenced | Provenance, obligation 3; P3 |
   | falsify, never verify; burden on the model | frozen Protocol reversed burden, CAB-008; RFC-013 |
   | preserve every distinction, add none | Axiom 3 (append-only; nothing identified away) |
   | import nothing; loaned fidelity fails | RFC-010 self-limit; Axiom 10 posture |
   | dominance, incomparability kept honest | Explicit Judgment, obligation 4 (state reasoning, don't manufacture a verdict) |
   | parsimony as selector | Recognition before Invention, Spine 4 |
   | the null result is first-class | Reality votes; the instrument may not pre-decide (RFC-002 §4) |
   | finder ≠ judge | mortality, CAB-005 |

2. **The test corpus is built by quotation, never by pre-encoding.** The distinctions models are
   tested against are lifted *verbatim, with citation* from the primary sources — **not**
   first paraphrased into a neutral meta-schema. This prohibition is load-bearing: *any* neutral
   schema is already a candidate representation and would silently privilege one ontology, so a
   test harness built on one would rig the contest before it began. The only admissible harness
   is the corpus's own words, and the only admissible question is "does R preserve **this**, as
   the corpus states it?"
3. **The meta-level declares its own provenance and holds no authority.** This RFC is Pencil, a
   Camera, unsealable here; it certifies *form* (is a candidate well-posed? does it preserve a
   cited distinction?), never *substance* (is the corpus's structure "really" a graph?). Substance
   is reality's. The instrument sits at the Machine tier of the authority gradient, not the
   Reality tier.
4. **The null result is structurally reachable.** The procedure can terminate in "no faithful
   revealing representation exists." If it could not, it would be biased toward finding structure —
   which is invention wearing the mask of discovery. The mandate's own words govern: *both
   outcomes are equally valuable.*
5. **Reveal ⇒ recognition, checked by reality, not asserted by the model.** A structure a model
   claims to have *revealed* (§8) is admitted only if it reads back as **already implied by C** —
   something reality would assent to as "yes, that was always true here" — verified by the Reality
   seat, never minted by the model. A "revealed theorem" reality does not recognize is a **new
   claim about C**, i.e. invention, and is rejected under the same boundary as a new primitive.

## 8. Success, and the equally-valuable null

The instrument must distinguish three end states, and must be able to reach all three:

- **Transcription only.** A candidate is faithful-founded-complete but reveals nothing beyond
  relabeling the corpus in formal dress. This *does not* establish an implicit formal
  architecture; it establishes that the corpus is consistently notatable. Report it as such — a
  real but modest result.
- **Recognized architecture (success).** A candidate is faithful-founded-complete **and
  revealing**: it exposes a derivation, constraint, or identity that is true-in-C, not stated as
  such in C, adds no ontology, and reads back as already-implied — confirmed by reality (§7.5).
  This is Spine 4 at the scope of the whole corpus: *old law seen at a new scope.* Only this
  earns the phrase "the Constitution already possesses a deeper formal structure."
- **The null (equally valuable).** No candidate clears §3–§5 without loss, or the only survivors
  are bare transcriptions. Then the honest, recorded finding is: *the corpus's organization is
  not captured by formalism F without distortion* — which is itself knowledge about the corpus,
  and protects it from a model it does not fit. The mandate asked for this outcome by name.

The line between transcription and recognition is the entire prize, and §7.5 is its guard: the
difference between *discovering* structure and *inventing* it is whether reality recognizes the
revealed structure as having been there all along.

## 9. The precedent this instrument answers to

A "**grammar of lawful transitions**" hypothesis (the corpus is fundamentally a grammar of
lawful state-transitions rather than a taxonomy of objects) was, per the mandate, subjected to
adversarial constitutional review and **not accepted**. The decisive finding was *methodological,
not substantive*: the failure was **selecting a formal model before testing it** — privileging a
formalism in advance — which violates Recognition before Invention. (It rhymes with CAB-007's
generator-hypothesis review and with RFC-013's collapse of "Field Capture": each time, a
proposed structure dissolved on contact with the corpus's existing commitments.)

This instrument is built precisely to make that error impossible to repeat:

- **No formalism is privileged in advance** (§3.6, §6 non-evidence). State-transition systems,
  graphs, dependency structures, constraint systems, algebras, categories all enter through the
  same gate carrying the same burden.
- **Every candidate meets the same fixed, quoted test corpus** (§4, §7.2), attacked not defended
  (§5).
- **The burden stays on the model, permanently** (§5, §6.ii). Surviving is "not-yet-falsified,"
  never "true."

The grammar hypothesis is not banned as an answer; it is required to *earn* its place through
this instrument like any other — and to survive the very falsifiers (§5.4 overreach: does it
entail a "lawful transition" the corpus forbids?) that a transition-first reading most invites.

## 10. The procedure, in operational order

A later instance runs the investigation as:

1. **Freeze the test corpus.** Enumerate C's primitives, distinctions, derivations, modal
   properties, boundaries, and kept-rejections **by quotation with citation** (§4, §7.2). This
   artifact is shared and fixed before any candidate is named.
2. **Admit candidates** against the §3 gate. Reject the ill-posed without scoring them.
3. **Falsify each survivor** aggressively against §5. Log the first decisive counterexample; a
   falsified model is out (record *why* — a falsification is knowledge).
4. **Score fidelity** of the survivors as a vector against the frozen test corpus (§4).
5. **Compare by dominance** (§6); keep incomparable models incomparable; apply the two
   corpus-licensed tie-breakers only among otherwise-incomparable survivors.
6. **Test for revelation** (§8): does any survivor expose implied-but-unstated structure? Send
   each claimed revelation to the Reality seat for recognition (§7.5).
7. **Report the end state** — transcription, recognized architecture, or the null — with the full
   per-feature evidence, and **propose nothing to the corpus.** Findings are Pencil; they become
   Ink, and reality's to vote on, only once the reconciliation restores one live tip (RFC-007;
   HANDOFF §6).

At no step does the instrument add to the corpus, rank by beauty, or convert "survived" into
"true."

## 11. Kept rejections and the non-authority self-limit

1. **Proposing a formal model now** — refused, by the mandate and by discipline. This RFC builds
   the instrument only.
2. **A single fidelity score / total ranking** — rejected; fidelity is a vector and comparison a
   partial order (§4, §6). A scalar would fabricate a verdict the evidence does not support.
3. **A neutral meta-schema for the test corpus** — rejected; it would be a covert candidate
   representation and would rig the contest (§7.2). Quotation only.
4. **Elegance / sophistication / familiarity as evidence** — rejected outright (§6). Faithfulness
   is the sole criterion.
5. **Treating "not-yet-falsified" as "true," or a revealed theorem as recognized** — refused; the
   burden is permanent and recognition is reality's, not the model's or this instrument's (§5, §7.5).
6. **Treating this RFC as authority** — impossible and undesired: open Pencil, a Camera,
   unsealable here, authored by a mortal instance that will not return to defend it. Cite it to
   challenge it.

## Status

Open. Nothing proposed to the corpus, nothing modeled, nothing sealed. This RFC recognizes that
judging a formal representation is judging a **Camera** (RFC-008), and derives from that one
existing boundary a complete instrument: an admission gate (§3), a fidelity vector measured
against a quoted, frozen test corpus (§4), a set of decisive falsifiers with the burden kept on
the model (§5), a dominance-based comparison that leaves honest ties unbroken (§6), a reflexive
guard so the evaluation injects no ontology of its own (§7), and a crisp, reachable **null
result** held equal to success (§8). It exists so the corpus's possible implicit formal
architecture can be **discovered, never invented** — and so that "there is none in formalism F"
can be found and reported with the same rigor. This is the instrument, offered for reality's
vote; the models come later, and must earn their place through it.
