---
id: RFC-001
title: The Instrument
status: open
opened: 2026-07-06
concerns: the nature of instruments in Organodynamics
confidence: speculative
revision: 2
---

# RFC-001 — The Instrument

**Epistemic status:** speculative. Everything below is a proposal, not a settlement.
This RFC is itself the first use of the mechanism it describes. Read it as a calibration run.

## 1. Summary

Organodynamics is an engineering discipline for evolving representations of reality.
This RFC proposes that the apparatus which makes that evolution *observable* — the
Instrument — is a first-class concept of the discipline, not an implementation detail
of its repository. It proposes a definition, an ontology of the objects an Instrument
deals with, and positions on seven foundational questions. Exploring those questions
uncovered an eighth — whether the Instrument is one thing — and §6 proposes the
Observatory in answer.

## 2. Why this is first-class

A discipline about evolving representations needs a way to see evolution; without an
instrument there is only anecdote. But measurement in a soft domain is never neutral:
what we choose to measure shapes what we make. The design of measurement is therefore
a foundational act of the discipline — it cannot be delegated to tooling, because the
tooling *is* a theory of what matters.

## 3. Definition (proposed)

> An Instrument is a versioned, reproducible function from a record to observations,
> together with the protocol that makes its readings comparable across time and
> observers.

Unpacking:

- **Second-order.** Representations are about reality. The Instrument is about
  representations. It never observes reality directly; that is the work of
  representations themselves.
- **Constituted by protocol, not machinery.** What makes something an instrument is
  calibration: agreed states, agreed events, agreed procedure. A script without a
  protocol is a gadget; a protocol without agreement is an opinion.
- **Three commitments.** The Instrument must be *minimally disturbing* (it observes
  the life of representations without redirecting it), *reproducible* (the same record
  and the same instrument version always yield the same reading), and *versioned*
  (its own calibration history is part of the record).

## 4. Ontology (proposed)

Five kinds of object, which must not be conflated:

| Kind | Order | Nature |
|------|-------|--------|
| The Record | zeroth | Append-only history of everything that happened. Evidence, not knowledge. |
| Representations | first | Authored claims about reality. Bear confidence, mature through a lifecycle, can be challenged. |
| Relations | second | Objects *about representations*: tension, supersession, dependency. Exist only between their endpoints. |
| Instruments | — | Versioned functions plus their protocols. There may be many (§6). |
| The Observatory | — | The set of Instruments over the one Record, plus the comparison protocol (§6). |
| Observations | — | Readings: `Instrument(Record, t)`. Unauthored, confidence-free, reproducible. |

## 5. The seven questions

### 5.1 What is an Instrument in Organodynamics?

The definition in §3. The essential move is the second-order stance: the Instrument
belongs to the discipline the way a telescope belongs to astronomy — except that here
the telescope demonstrably bends the sky it points at. Measuring maturity creates
pressure to mature; measuring activity creates pressure to be active. An Instrument
in Organodynamics is therefore defined as much by its *restraint* (§5.3) as by its
reach.

### 5.2 What does it observe?

Trajectory, not content. Concretely, two classes of observable:

- **Declared observables** — what authors assert about their representations: status,
  confidence, registered tensions, links to open questions. Self-report, calibrated
  by protocol.
- **Derived observables** — what the record implies regardless of assertion: event
  frequencies, dormancy, lineage depth, age of confidence since last challenge.

The richest signal is the *gap between the two*: a representation declared
load-bearing but behaviorally dormant and long unchallenged is the instrument's most
important reading. Neither channel alone can produce it.

### 5.3 What should never be measured?

Four prohibitions, one boundary principle.

1. **People.** The specimen is the representation, never the author. No per-author
   metrics of any kind. The moment confidence declarations read as competence
   scores, honest uncertainty dies, and with it the discipline.
2. **Merit.** The Instrument measures state and movement, never quality. No scores,
   no rankings of representations by goodness. Merit is adjudicated by challenge,
   which is a discourse, not a reading.
3. **Velocity as virtue.** Rate of change carries no normative sign. A door that
   sits for a year is an observation, not a deficiency. The dormancy report is a
   lamp, not an alarm.
4. **Truth.** The Instrument records that a challenge occurred and how it ended.
   It never adjudicates what is true.

The boundary principle (the Goodhart line): *do not measure anything that, once
measured, would redirect authors toward the measure and away from reality.*

### 5.4 Which measurements become representations?

None automatically. Observations are readings; they carry no claim. But when a
reading is *interpreted* — generalized into a claim about how representations evolve
("doors that do not reach sketch within a season rarely ever do") — that claim may be
**promoted**: it enters the front door like any other representation, as a door, with
its own confidence, subject to challenge like everything else.

The promotion boundary keeps readout and knowledge distinct, and it has a pleasing
consequence: the discipline can study itself. Interpreted observations of the record
become representations *within* the record, and the Instrument then observes their
evolution too.

### 5.5 Is tension a representation, or a different ontological object?

A **relation** — a distinct kind (§4). A tension exists only between its endpoints
and has no meaning alone; it is not about reality, it is about two representations.

But it is claim-*like*: a declared tension can be wrong. Apparent contradictions
dissolve under refinement. So a tension has a lifecycle of its own, and that
lifecycle needs a state resolution alone cannot provide: **dissolved** — the tension
was apparent, not real — alongside *open*, *active*, *resolved*, and *held*.
A dissolved tension is data; it teaches what looked incompatible and wasn't.

The boundary case is the **held** tension — the accepted paradox. A held tension
quietly asserts something about reality: that reality, as currently representable,
sustains both poles. That assertion borders on being a representation itself, and it
is often the birthplace of one — a held tension is the strongest signal that the
current representational vocabulary is inadequate. Tension is the generative organ
of the discipline. (Open sub-question: should holding a tension *require* opening a
door for the representation that would dissolve it?)

### 5.6 Should observations be immutable?

Yes — and the discipline can get immutability for free rather than by discipline.

If observations are reproducible functions of an immutable record, then any past
reading can be re-derived from the pair *(record position, instrument version)*.
Nothing needs to be frozen because nothing needs to be stored. Editing an old reading
is not merely forbidden; it is meaningless.

The corollary is that faulty readings are never corrected — the *instrument* is
recalibrated. A bug in the observing function is a calibration error: fix it, bump
the instrument version, take a new reading. Both readings remain derivable forever,
each honest about which calibration produced it. Every observation must therefore
carry its coordinates: `at-commit` and `instrument-version`.

### 5.7 Is STATE a document, or an observation produced at a point in time?

An observation. It has no author — the Instrument produced it. It bears no
confidence — it is a reading, not a claim. It cannot be challenged — only the
Instrument's calibration can.

Any STATE file committed to the repository is therefore a *cache of the latest
reading*, never a document. It must carry its coordinates (`taken-at`, `at-commit`,
`instrument-version`) as a header, must never be hand-edited, and must never be
cited by a representation — a representation that needs a reading cites the
coordinates and re-derives.

## 6. The eighth question: one Instrument, or an Observatory?

Exploring the seven questions uncovered a question deeper than any of them:
is the Instrument *one thing*?

**The single-instrument assumption fails this RFC's own test.** §2 holds that the
tooling is a theory of what matters. A single Instrument makes that theory invisible
and total: whatever it does not measure, the discipline cannot see, and there exists
no second vantage point from which the blindness is detectable. In observational
science, artifact is distinguished from signal by triangulation — instruments of
different construction agreeing, or more instructively, disagreeing. A lone
instrument cannot detect its own artifacts.

**This RFC already described two Instruments without noticing.** §5.2 splits
observables into declared and derived — self-report and behavior. These are
different sensing modalities, with different disturbance profiles and different
failure modes. And §5.2 locates the richest reading in the *gap between them* — a
reading neither modality can produce alone. The most important observation this RFC
names is an inter-instrument comparison. The Observatory was implicit from the start.

**Proposed resolution: one Record, many Instruments.**

> An Observatory is a set of Instruments over a single shared Record, together with
> a comparison protocol — the rules that make readings from different Instruments
> juxtaposable without collapsing them onto one scale.

The unity that matters is not the Instrument but the Record. One sky, many
telescopes: radio and optical astronomy disagree about nearly everything except the
sky. Each Instrument in the Observatory remains exactly what §3 defines — a
versioned, reproducible function of the Record — and that is what keeps the
Observatory flat rather than towered:

- **Comparison needs no meta-level.** A comparator (say, the divergence between
  declared confidence and behavioral dormancy) takes other Instruments' readings as
  input — but readings are re-derivable functions of the Record, so the comparator
  is itself just another function of the Record. Another Instrument, not a higher
  kind.
- **Self-observation dissolves (Q-a, partially answered).** Instrument versions live
  in the Record, so an Instrument that reads calibration history is simply another
  member of the Observatory. No regress: everything roots in the one Record.

**Two disciplines the Observatory must keep:**

1. **No aggregation.** The Observatory juxtaposes readings; it never combines them
   into a scalar. A composite score is a single Instrument reborn, with its theory
   of what matters hidden inside the weights — the royal road back past the Goodhart
   line (§5.3). Disagreement between Instruments is a first-class output, not noise
   to be averaged away.
2. **Commissioning by challenge.** Every new Instrument is a new theory of what
   matters and new Goodhart surface. Instruments are therefore commissioned and
   decommissioned the way representations mature: proposed by RFC, challenged,
   versioned, retired — never silently added. This gives Q-c a tractable shape: the
   window between blindness and Goodhart is negotiated one Instrument at a time.

An illustrative — not decided — initial roster: a maturity instrument (declared
states), a dormancy instrument (derived from the Record's timeline), a tension
instrument (relational stress), and a divergence instrument comparing the first two.
Small on purpose; the roster is a commissioning question, not a definitional one.

## 7. What this RFC does not decide

Implementation: schemas, scripts, directory layout, the exact maturity vocabulary,
the cadence of readings, whether cached readings live in the repository at all, and
the initial roster of the Observatory. Those follow understanding; this RFC is the
understanding.

## 8. Open questions

- **Q-a** *(partially answered by §6)*. Self-observation needs no meta-instrument —
  calibration history is in the Record. Residual: does the act of reading
  calibration history change how recalibration is proposed?
- **Q-b.** Who may recalibrate, and what challenge must a recalibration survive?
- **Q-c.** Is there a minimal set of observables below which the discipline is blind
  — and a maximal set above which Goodhart dominates? What bounds the window?
- **Q-d.** Are relations beyond tension and supersession needed (support, dependence,
  analogy), or does proliferating relation-kinds re-create the measurement problem
  one level up?
- **Q-e.** What belongs in the comparison protocol — shared coordinates only
  (`at-commit`, `instrument-version`), or shared units too? How much shared
  vocabulary can Instruments have before they collapse into one?
- **Q-f.** What must a candidate Instrument demonstrate to be commissioned — its
  restraint case, its disturbance profile, its expected failure modes?
- **Q-g.** Is there a minimum viable Observatory: the smallest roster that can
  detect its own artifacts?

## 9. Disposition

This RFC is resolved by challenge and revision like any other. If accepted, its
definitions become the first canon of Organodynamics, and implementation of the
Instrument may begin on settled ground. If rejected, the rejection is preserved —
the discipline's first negative result, and its first proof that the record keeps
what it learns from.
