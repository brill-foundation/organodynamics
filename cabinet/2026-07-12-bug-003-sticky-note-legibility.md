---
id: CAB-017
title: BUG-003 — Sticky-Note Legibility (first post-publication evidence)
kind: participant-evidence
participants: Adi (steward, first published-Door visitor); Claude (Lead Engineer under stewardship mode)
date: 2026-07-12
language: English
discoveries: the published Door's taped notes had light ink on light paper; beauty must never compete with readability; a physical note is pale paper with dark ink in any theme
constitutional-questions: none — an Entrance Legibility issue, not architectural, constitutional, or implementation
related: assets/door.css, cabinet CAB-010 (BUG-001), the record (session 12), CAB-012 (stewardship mode)
provenance: reported by the steward 2026-07-12 as the first interaction with the published Laboratory; fixed and deposited the same day
salvaged-from: canonical lineage (preserved 2026-07-21); originally CAB-013 there
status: complete
---

> **Salvaged into the constitutional lineage (2026-07-21).** Authored in the
> now-preserved `canonical` lineage as **CAB-013**; renumbered **CAB-017** here
> to resolve a fork-induced ID collision (this lineage independently assigned
> CAB-013–016). Body unchanged. Internal "CAB-0nn" references are to the
> canonical lineage's numbering, recoverable from
> `laboratory/preservations/preservation-2026-07-21-canonical-lineage-f8cd41eb.json`.
> Salvaged under CAB-015's judgment (constitutional necessity), by file
> authorship — no RELATION primitive, per that same judgment.

# BUG-003 — Sticky-Note Legibility

## 1. The evidence

The first interaction with the published Laboratory exposed one concrete
usability issue: the taped sticky notes — architecturally praised, to be kept
as a design language — were hard to read. The paper is light and the ink was
also light (medium slate-blue `#38506f` in a thin cursive hand), especially
noticeable on the how-to-enter note above the rooms and to first-time
visitors. The steward classed it, like BUG-001, as an **Entrance Legibility**
issue and asked for a readability correction, explicitly not a redesign.

## 2. The fix (assets/door.css, one shared rule)

- Ink darkened from `#38506f` to dark ink-navy `#1c2a45` for both the note
  summary and body — contrast on the note paper rises from ~7:1 to ~12:1
  (WCAG AAA), while keeping the blue-pen character of a handwritten note.
- Note paper fixed to a warm manila `#ecdfbc` with a firmer `#cdba8c` border
  for edge definition.
- The paper is now pale in **both** themes: a physical note is pale paper with
  dark ink whatever the room's light. This also repaired dark mode, where the
  paper had computed to a muddy mid-tan and read worse than light mode.
- Preserved unchanged: paper feel, tape strip, rotation, drop shadow, and the
  summary-over-body typography hierarchy.

Because the notes share one CSS style (`details.guide`) loaded by the Door and
every room, the single rule corrects every note in the Laboratory at once.

## 2b. Typographic pass (same publication)

At the steward's request, the notes were then reviewed as printed paper, not
only for contrast:

- **Handwriting stack** dropped `Snell Roundhand` — a formal connected script,
  poor as a paragraph and wrong in character for a casual note — leaving the
  legible casual hands `Bradley Hand, Segoe Print, Comic Sans MS, cursive`.
- **Body** raised 14px → 15.5px, line-height 1.65 → 1.7 (a handwriting face
  needs more size and leading than a sans to read as comfortably).
- **Summary** raised 14.5px → 16px with a set line-height; padding opened
  slightly to breathe.
- **Weight** left normal on purpose: handwriting faces are single-weight, and
  forcing bold synthesizes an ugly faux-bold; the darkened ink carries the
  perceived weight.
- **Measure** unchanged at a 540px note — ~60–70 characters per line at the new
  size, within the ideal range.

Verified in the browser on the Door and in an expanded note.

## 3. Discipline

A readability correction, not a redesign; scoped to the shared note style; no
new capability; presentation layer only — nothing in the Protocol, the Kernel,
or the Record's content was touched. Verified in the browser before commit.
Consistent with stewardship mode (CAB-012): reality reports, the builder fixes
the existing path, and adds nothing else.
