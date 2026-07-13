---
id: CAB-013
title: BUG-003 — Sticky-Note Legibility (first post-publication evidence)
kind: participant-evidence
participants: Adi (steward, first published-Door visitor); Claude (Lead Engineer under stewardship mode)
date: 2026-07-12
language: English
discoveries: the published Door's taped notes had light ink on light paper; beauty must never compete with readability; a physical note is pale paper with dark ink in any theme
constitutional-questions: none — an Entrance Legibility issue, not architectural, constitutional, or implementation
related: assets/door.css, cabinet CAB-010 (BUG-001), the record (session 12), CAB-012 (stewardship mode)
provenance: reported by the steward 2026-07-12 as the first interaction with the published Laboratory; fixed and deposited the same day
status: complete
---

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

## 3. Discipline

A readability correction, not a redesign; scoped to the shared note style; no
new capability; presentation layer only — nothing in the Protocol, the Kernel,
or the Record's content was touched. Verified in the browser before commit.
Consistent with stewardship mode (CAB-012): reality reports, the builder fixes
the existing path, and adds nothing else.
