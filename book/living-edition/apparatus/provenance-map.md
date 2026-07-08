<!-- ⚫ apparatus · provenance map -->

# Provenance Map — Living Edition

*Where every chapter's doctrine comes from. The Living Edition, like the Recovery Edition, is
a derived artifact: the repository is the source of truth. This map lets any reader trace a
claim back to an RFC section, a research document, or a journal event, and re-derive it.*

Notation: `RFC-004 §7` = that RFC section (in [`/rfcs`](../../../rfcs)); `THEORY-001 §3` /
`READING-001 §4.1` (in [`/research`](../../../research)); `RFC-000-review §7` (in
[`/reviews`](../../../reviews)); `journal:3e5101a7` = a journal event id (walk with
`./ods lineage 3e5101a7`); `commit:c040872` = a commit; `[ed.]` = editorial bridge (no
doctrine).

---

## Manuscript

| Chapter | Primary sources | Chronicle anchor |
|---------|-----------------|------------------|
| **9 · The Manifest** | `RFC-000` (all); `RFC-000-review §1, §7`; `READING-001 §4.1` | `journal:c87ebef3, 6ed9b11a, d36cce4e` |
| **10 · The Substrate** | `RFC-004 §1–§17` (waist §1; event §2; commitment/tension §3; lenses §4; views §5; invariants §7; four kinds §9; reflexivity §11; lineage §14–15); `READING-001 §4.4` | `journal:6cba87c0, 3260afab, 23ae9562, 933521fa` |
| **11 · Meta Review & Recognition** | `RFC-003` (all); `RFC-005` (all); `READING-001 §4.4` | `journal:27797a10, 594046a7, 6ccac0cc, 49e92b02, d822ca8a` |
| **12 · The Discovery Engine** | `THEORY-001 §2–§11`; `READING-001 §3–§5` | `journal:bedbda4d, 130d2fc8, d4d5c51d, 3e5101a7, bad27be0, 82f6c01f, 5348c927, f6d04bdf` |
| **13 · The Laboratory & The Seasons** | `SEASONS`; `SEASON-1-DOORWAY-PLAN`; `EXPERIMENT-001`; `EXPERIMENT-002`; [`ods`](../../../ods) | `journal:76b0244d, 6fdc2a7d, eddbf397, 5532581f` |
| **14 · The Open Constitution** | `RFC-000-review §7`; `RFC-003 Q-f`; `RFC-004 §11, §17`; `RFC-005 §8`; `THEORY-001 §8, §11`; `READING-001 §3.1, §3.3, §4.1, §4.4`; every RFC's open-questions section | standing state, `commit:c040872` |

## Front matter, visual language, apparatus

| Element | Provenance |
|---------|-----------|
| The Two Editions | `commit:86dec66, c040872`; RFC-001 §7 (append-only principle) `[ed.]` |
| How to Read / Preface | `[ed.]` over the recovered corpus |
| Visual Epistemology | the fork directive (testimony 2026-07-08); mapped onto `RFC-001 §5.3–5.5`, `RFC-004 §6–7`, `THEORY-001 §3–4` |
| Maturation Gradient | the fork directive; `READING-001` (the actual maturity distribution) |
| Glossary additions | the RFC/research sections cited per entry |

## Chronicle

The Chronicle is provenanced event-by-event; every act cites journal ids and commits inline.
Its own source-of-truth is [`/journal/journal.jsonl`](../../../journal/journal.jsonl) and the
commit history. See [Chronicle · overview](../chronicle/00-chronicle.md).

---

## Integrity statement

- **Coverage.** Every doctrinal paragraph in the Living Edition traces to an RFC, a research
  document, a review, or a journal event. Editorial bridges are marked `[ed.]`.
- **Fidelity.** The sources are reproduced verbatim in the repository, not paraphrased into
  canon; the book cites and re-derives.
- **Reversibility.** Because `/rfcs`, `/research`, `/reviews`, and `/journal` remain the
  source of truth, any reader can re-derive the manuscript from the Record — and, per the
  discipline's own rule, if the book and the Record ever disagree, the Record wins.
- **Honesty of medium.** A chapter's colour (pencil/blue/black) reflects the *actual*
  maturity of its sources: nothing reaches black ink that the discipline has not ratified,
  and the discipline has ratified nothing (Q-f). See [gaps & horizon](gaps-and-horizon.md).
