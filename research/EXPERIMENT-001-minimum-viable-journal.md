---
id: EXPERIMENT-001
title: The Minimum Viable Journal
status: running
opened: 2026-07-06
concerns: the smallest first-order implementation that forces RFC-004 to interact with reality
exercises: RFC-004 (answers Q-b by construction)
season: one review cycle (~4–6 weeks), then the journal itself becomes evidence
---

# EXPERIMENT-001 — The Minimum Viable Journal

## 1. The experiment, in one sentence

**Move the project's constitutional record onto the smallest possible
implementation of the RFC-004 substrate — an append-only, hash-chained,
portable journal of provenanced events with declared reference labels — and
use it for one season of real work, recording every contradiction between
the substrate and practice as constitutional evidence.**

It exists as of this document: `journal/journal.jsonl` (the journal) and
`tools/journal.py` (~200 lines, stdlib only: `append`, `verify`, `show`,
and `lineage` — the latter being **lens-0 v1**, the first declared lens).

## 2. Why this experiment and not another

Candidates considered and rejected as the *first* experiment:

- **A workbench/interface** — exercises views (RFC-004 §5) before there is a
  journal to view; builds the attention layer on a record that doesn't exist.
- **Meta-review tooling** — exercises the process layer, which is bylaws;
  fails to touch the waist at all.
- **A federation/identity scheme** — solves the hardest protocol problem
  first, before evidence exists about what the easy parts get wrong.

The journal wins on three grounds. It is the declared top priority ("make
the record real") and the project's own diagnosis: the constitutional
history currently lives in conversations and ephemeral containers,
contradicting RFC-004 §7 invariants 2, 3, and 7 *today* — this experiment
is the remedy, not a demo. It exercises the maximum number of waist items
per line of code (§3). And it is the experiment whose failure is cheapest
and most informative: if declaring events is too much friction for even
this project's own participants, no workbench will save the substrate.

## 3. What it exercises (waist coverage, RFC-004 §6)

| Waist item | Exercised how |
|---|---|
| 1. Event structure incl. labeled references | every `append`; labels declared at commitment time |
| 2. Append-only discipline | hash chain: editing history invalidates every subsequent id |
| 3. Attribution | `process` + `class` fields now; journal lives in signed git commits (interim); native signing is a registered next step, not scope creep |
| 4. Lens declaration | lens-0 v1 (`lineage`) is versioned and named in every reading |
| 5. Challenge protocol | *not exercised* — deliberately out of scope (§6) |
| 6. Comparison coordinates | every lens-0 reading prints `(at-event, lens-version)` |
| 7. Portability | the journal is one self-verifying file; export = copy |

## 4. Registered hypotheses (falsifiable, decided at season end)

- **H1 — Declaration friction is bearable.** Participants will declare
  lineage labels at commitment time. *Measure:* fraction of season events
  carrying at least one labeled reference. *Falsified if* labels are
  routinely omitted — which would mean RFC-004 §14's reconstructibility
  promise is empty in practice, the single most important thing this
  experiment can discover.
- **H2 — The vocabulary is small (RFC-004 Q-g).** Prediction: at most ~6
  label kinds suffice for a season. *Measure:* count distinct labels;
  examine the long tail for evidence that free-form labels degenerate into
  synonyms (which would argue for an early lens-governed vocabulary).
- **H3 — Lenses are reproducible programs.** Two independent processes
  running lens-0 at the same coordinates produce identical readings.
  *Measure:* actually do this, at least once, with a second implementation
  or second party.
- **H4 — Portability is real.** The journal exports whole and re-verifies
  on a machine that has never seen this repository. *Measure:* perform the
  transfer. (The project already has the negative case on record: this
  session's git history was unpushable for hours and survived only as a
  hand-carried bundle. H4 is the test that the journal beats that.)
- **H5 — The linear chain will break (registered *expected* failure).**
  The chain forces a total order; two participants appending concurrently
  will conflict. This naivety is deliberate: the experiment is designed to
  surface the concurrency contradiction as constitutional evidence — is the
  journal's true shape a line, a DAG, or a set of mergeable lines? —
  rather than pre-solving it with machinery (CRDTs, partial orders) whose
  requirements we would be guessing at. *Success for H5 is the conflict
  occurring and being recorded, with its shape described.*

## 5. The two acceptance tests

1. **The newcomer test.** A person who has read none of the conversations
   can answer "how did RFC-004 come to say what it says?" from
   `lineage` output alone, without asking anyone. (First reading taken at
   genesis: the lineage of EXPERIMENT-001's opening event renders the full
   RFC-000 → review → RFC-003 → ODS → RFC-004 rev 2 trajectory.)
2. **The reality-contact requirement (not a hypothesis — an obligation).**
   The genesis content is reflexive: events about the project itself.
   Per RFC-004 §11, the season must include at least one genuinely
   first-order inquiry — a representation about the *world* (a reality-layer
   question from the drafts, or any empirical claim a participant will
   stake) — committed, challenged, and refined *in the journal*. If, at
   season end, the journal contains only self-reference, the experiment has
   demonstrated the reflexivity trap rather than escaped it, and that
   finding outranks all five hypotheses.

## 6. Deliberately out of scope

No server, no UI, no database, no accounts, no automation, no meta-review
tooling, no ontology beyond free-form labels, no tension lifecycle, no
authority leases, and no ratification rule — the standing debt (RFC-003
Q-f) remains open and this experiment must not be mistaken for closing it.
The tool must never grow per-person statistics (RFC-004 invariant 5).

## 7. Honesty notes on the genesis events

The ten genesis events were committed by one process (this session) and are
**testimony about** the project's history, not the history itself — the
journal cannot backdate, so `at` is the recording time and historical dates
live in content (RFC-001 §7: the record is infallible only about its own
acts). Event 9 is testimony *about* a Gemini review whose content is not
yet in the record; committing that review's actual text (with provenance
front-matter, which would also advance META-REVIEW-000 toward quorum) is
the most valuable event another participant could append this week — and
would double as the first multi-process test of H1 and H5.

## 8. Season end

At season end the journal itself is the corpus. The readings (H1–H5
measures, the two acceptance tests) are taken and interpreted; every
contradiction between practice and RFC-004 is promoted as a challenge
against RFC-004, per the project's new development principle: *whenever
practice contradicts the substrate, the contradiction becomes
constitutional evidence.* If the experiment produces zero contradictions,
distrust the experiment before trusting the substrate.
