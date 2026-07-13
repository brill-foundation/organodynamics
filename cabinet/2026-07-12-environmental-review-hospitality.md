---
id: CAB-014
title: Environmental Review — the Laboratory as a physical place (hospitality)
kind: design-review
participants: Adi (steward, commissioning the review); Claude (Lead Engineer under stewardship mode)
date: 2026-07-12
language: English
discoveries: the taped-note motif is a good accent but becomes wallpaper when repeated as a list container; reading measure was too wide for close inspection; most findings should wait for real visitors rather than be fixed on imagination
constitutional-questions: none — an environmental review, not architecture or protocol
related: assets/door.css, index.html, the reading rooms, CAB-012 (stewardship mode), CAB-013 (legibility)
provenance: commissioned by the steward 2026-07-12 as the Laboratory enters a hospitality phase; conducted by walking the Door, the Sessions room, and the Constitution room in the browser at three viewing distances
status: complete
---

# Environmental Review — the Laboratory as a physical place

Reviewed as a building, not a web page — a museum / archive / laboratory — by
walking three surfaces (the Door, the Sessions room, the Constitution room) in
the browser at three viewing distances. Findings are documented per distance;
the decision on what to change follows, and is deliberately small.

## 1. Distant view — just entered, nothing readable yet

**The Door.** The composition is calm and correctly zoned. The eye lands first
on the dark serif headline *A living laboratory* (the clear focal point), then
the warm manila note (its warmth is the only saturated accent up top, so it
pulls the eye — appropriate, since it is the "how to enter" note), then the
grid of room cards, with the rounded "Signs of life" window as a secondary mass
on the right. Architecture vs decoration reads correctly: the **rooms grid is
architecture**; the little iconographic figures and the taped note are
**decoration / wayfinding**; the footer recedes. What stays visible across the
room (headline, rooms) is what should; fine print (the entrance path, note
contents, footer) recedes as it should.
*Minor imbalance:* the rooms occupy the left two-thirds and the Signs window
only the top-right, leaving the bottom-right quadrant empty. It reads as
breathing room more than as a fault.

**The Sessions room.** The strongest far-view finding: it is a vertical column
of **thirteen near-identical manila taped notes**. The taped-note treatment,
charming as a single accent on the Door, becomes **wallpaper** when it is the
repeating container for a long list — no rhythm, no grouping, recent and old
notes weigh the same. Calm, but undifferentiated: a filing cabinet where every
folder looks identical.

**The Constitution room.** The red *REALITY HAS THE FINAL VOTE* stamp is the
single saturated accent and correctly draws the eye first, then the document.
*Minor:* the stamp slightly overlaps the note beneath it — a touch of clutter
at the very top.

## 2. Normal interaction distance — standing in front of an object

**Door room cards.** Effortless hierarchy: icon → small uppercase tag
(INHABIT, WHAT REALITY RATIFIED, APPEND-ONLY…) → title → one line of prose.
The tags act like museum labels and orient well. Obvious what each object is.
*Two wayfinding notes:* (a) **The Sessions and The Record icons are nearly
identical** stacked horizontal bars, which weakens distinctiveness between two
genuinely different things; (b) the RFC icon reads less clearly than the
others.

**The disclosure affordance.** The expandable notes hide the details marker
(`::-webkit-details-marker{display:none}`) with no replacement — no chevron, no
"+". On the Door (one note) this is fine; in the **Sessions room, where thirteen
notes are meant to be opened**, the absence of any "this opens" signal is the
most likely real friction. Flagged.

**The Signs-of-life window** competes mildly with the room cards for attention
(dense live text at the same level as the calm cards), but it earns its place
as the room's pulse.

## 3. Close inspection — engaging deeply

**Reading rooms (Constitution / RFCs / Cabinet).** Rich, well-structured
content; serif headings over a humanist sans body; the monospace hierarchy
diagram and the table reward curiosity and are elegant, not noisy.
*One real defect, now fixed:* the prose measure ran ~95–100 characters per line
(pagewrap 860px with no cap), beyond the comfortable 45–75. See the decision
below.

**The notes**, after the BUG-003 typographic pass, read comfortably at close
range. No further issue.

## 4. Decision — one small change; the rest held for real visitors

Stewardship means resisting unnecessary change as much as making necessary
ones. Only one finding is a *known principle* rather than a taste call, is
low-risk and reversible, and makes an existing object communicate more clearly
without adding an object:

- **CHANGED — reading measure capped.** `.prose p, li, blockquote` now cap at
  ~70ch, so long-form reading holds a museum-panel comfort; headings, the
  hierarchy diagram, and tables keep the full card width. Verified in the
  browser. Ships with the pending publication.

Everything else is **held as documented observation, awaiting Participant
evidence** — because it is UX/aesthetic judgment, and this is exactly the phase
(CAB-012) where the Laboratory improves on evidence rather than imagination:

1. **Sessions room repetition** (far view) — the note motif as list wallpaper.
   Candidate small fix: make session list-items quieter/flatter than true
   annotation notes, reserving the taped treatment for actual local notes. Do
   not act until visitors show it impedes reading the history.
2. **Disclosure affordance** (normal) — a subtle chevron that rotates on open,
   most valuable in the Sessions room. Most likely of the held items to be
   real; still, wait for a visitor to miss it.
3. **Sessions/Record icon similarity** (normal) — differentiate only if
   wayfinding evidence appears.
4. **Door far-view balance** and **stamp/note overlap** (distant) — minor;
   the negative space reads as calm. Resist change.

If Cohort 1 produces evidence that any held item impedes a visitor, it becomes
a backlog item then — not before.
