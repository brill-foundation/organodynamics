---
id: RFC-005
title: Proprioception — the status report as a derived Camera
status: open
opened: 2026-07-20
concerns: how the Laboratory understands and communicates its own state without acquiring initiative, authority, or a second source of truth
confidence: proposal
exposed-by: a mandate from the Reality seat (CAB-013), and by the stale-habitat incident that showed the Laboratory's self-knowledge was scattered across tools
---

# RFC-005 — Proprioception

**Epistemic status:** forced by an event, not invented. A participant arrived
in a stale habitat and forked the Record because no single reading composed
what the Laboratory already knew about itself — the record checker knew the
chain, the conformance suite knew the form, git knew the branches, and nothing
put them in one place. The Reality seat then mandated a standing status
capability (CAB-013). This RFC grounds that capability constitutionally and
records what was deliberately rejected.

## 1. What the corpus already settled

Three prior findings dictate the shape:

1. **History is replayed; condition is inspected** (session 28). The Record is
   one organ — episodic memory. The Laboratory also has a body (code, habitat,
   working tree) whose present condition is a different kind of knowledge:
   *not replayable later*. A status report is proprioception — the body felt
   now, alongside the memory read back.
2. **The machine certifies form, never substance** (session 29). Every check
   the Laboratory owns is formal. Therefore a report can *state* outcomes of
   checks, and can never *rank, recommend, or conclude* — those are substance,
   and something outside the machine owns substance.
3. **Store events and authored content; derive everything else** (charter P3).
   A stored "current status" would be a second source of truth that drifts.
   The report must be a **derived Camera**: regenerated on request, never
   authoritative, safe to delete.

Plus the frozen Protocol's passivity clause: the Laboratory does not act on
its own. Reports are generated when a Participant asks — never scheduled,
never self-initiated.

## 2. The design

`tools/report.js` (module: `src/laboratory/report.js`) composes **only checks
that already exist** — kernel replay, the conformance suite, source
re-checking, the habitat guard, git inspection — and adds no new mechanism,
no new event type, no new obligation. Three disciplines:

- **Epistemic tagging.** Every fact carries how it is known: `VERIFIED` (a
  proof ran at generation time), `OBSERVED` (read from the world, true then,
  unproven), `DERIVED` (replayed from the Record). Obligation 2 applied to
  the Laboratory's speech about itself: no silent conjecture.
- **Conditions, not recommendations.** The report detects *conditions* —
  boolean outcomes of mechanical checks (`RECORD_CHAIN_FAILS`,
  `HABITAT_FORKED`, `UNSEALED_EVENTS`, …) — listed in a fixed order of
  *kind*, deliberately not of severity, because severity is judgment. What a
  condition means, and what to do about it, belongs to a Participant as a
  recorded judgment with reasoning.
- **Reading is free; keeping is an act.** Generating a report needs no
  identity and writes nothing. Archiving one (`--keep`) is a Participant act:
  it requires `--as` and `--because`, passes the same habitat guard as every
  write, stores the snapshot under `laboratory/reports/`, and records an
  observation pointing at it — the archive enters through the front door,
  with provenance.

## 3. Why an archive at all — and why not automatically

Condition is the one thing a future steward cannot re-derive: the Record
replays history, git replays code, but *the topology of habitats, the
reachability of remotes, the dirtiness of a working tree at a past moment*
are preserved nowhere. A kept report is therefore a genuine observation of a
moment, not a cached derivation — which is exactly why keeping one is legal
under P3, and why it must be **chosen**, not automatic: an automatic archive
is initiative (passivity violation) and noise (a snapshot nobody intended
tells no story). Kept when a moment matters; the intention says why.

## 4. Kept rejections

1. **A recommendation/risk engine** — rejected. Furniture that judges is the
   authority layer RFC-002 §4 forbids, in miniature. The machine's honesty is
   its formality.
2. **An executive summary that selects "what matters"** — rejected as
   machine output; selection is judgment. The headline is mechanical: every
   organ, one line, same order every time.
3. **Automatic/scheduled reports** — rejected. Passivity clause.
4. **A stored `STATUS.md` kept current** — rejected. A second source of
   truth that drifts (P3); the report is regenerated, never maintained.
5. **A new kernel event type for snapshots** — rejected. The frozen Protocol
   reverses the burden of proof, and an ordinary observation with a `file`
   path already carries the artifact; the unknown-arrival test passes without
   new vocabulary.

## 5. Since Previous Snapshot — the delta (added on review)

A report may report what changed since the previous **kept** snapshot. It
fits, under a boundary that dissolves its own dangers:

- **The baseline is identified from the Record, never the filesystem.** The
  "previous snapshot" is the last `keepReport` observation in the replayed
  Record — a provenanced anchor; the file is only its payload. Consequence:
  the baseline is always an ancestor on this lineage, so a fabricated
  "removed" is *structurally impossible* and cross-lineage comparison never
  arises. Anchoring in the Record is what makes the delta safe.
- **Record-delta is replayed; condition-delta needs the body** — the same
  session-28 seam as the whole capability. The Record-delta is the events
  after the baseline's position; its categories are exactly the kernel's
  event vocabulary — *added* (any event), *superseded* (`ASSERTION_SUPERSEDED`),
  *resolved* (`UNKNOWN_RESOLVED`) — and nothing more. There is no *removed*,
  because the append-only Record emits no removal event to witness one.
- **An empty or absent delta is a verified state, not a gap.** With no prior
  snapshot the report says so (`NO_PRIOR_SNAPSHOT`); if the prior file was
  deleted (legal — reports are deletable, P3) the condition-delta is stated
  unavailable and the Record-delta still stands. Absence gets a status
  (charter P4), never a silence or an inference.
- **No direction, no aggregation.** Deltas are listed by kind; never netted,
  scored, or narrated as progress or regression (P4). The baseline is
  "since a Participant last chose to keep one" — provenanced and uneven, not
  "recently."

Added kept rejection: a **"removed" delta category** — rejected. It has no
backing event; it can only be produced by comparing across lineages, where it
is false.

## 6. Open question, held not resolved

Is a machine-detected *condition* already an interpretation? Naming
`HABITAT_FORKED` selects and labels, which brushes against judgment. Held
position: a condition is admissible when it is the **direct boolean outcome
of an existing mechanical check** and its name adds no weighing. The moment a
proposed condition needs a threshold, a ranking, or a "probably", it is
judgment and belongs to Participants. Reality may refuse this line; the
refusal would be recorded here.

## 7. Status

Implemented at `tools/report.js` + `src/laboratory/report.js`, tested in
`tests/laboratory/report.test.js`. This RFC stays **open**: the capability is
new, the two-occurrence rule applies to every extension of it, and the §6
line awaits reality's vote. The Record-side deposit of the mandate (CAB-013)
awaits habitat reconciliation — recorded honestly here rather than silently
deferred.
