# Editorial Deliverable 2 — Book Fragment Inventory

*Every recoverable fragment of manuscript material, catalogued at the section level.*

A **fragment** is the smallest unit of recoverable text or structure that can be placed
into the manuscript. Fragments are ranked by the Canonical Priority order given in the
mission (Specifications > Approved RFCs > Repository Documentation > Knowledge Base >
Drafts > Research Notes > Conversations > Brainstorming). This repository contains
fragments of only three kinds: **Approved-RFC-tier text**, **Repository Documentation**
(the README), and **Draft-tier structure** (the empty chapter skeleton). There are no
specifications, research notes, or recorded conversations to weigh.

Fragment IDs: `F-Rn-§x` for RFC-derived fragments, `F-DOC-n` for documentation,
`F-SKEL-n` for skeleton frames.

---

## 1. Approved-RFC-tier fragments (highest recoverable canon)

### RFC-001 — *The Instrument* (rev 3, `473f4a9`)

| Fragment | Source | One-line content | Placed in |
|----------|--------|------------------|-----------|
| `F-R1-§1` | §1 Summary | Organodynamics = engineering discipline for evolving representations of reality; Instrument is first-class | Ch. 1, 2 |
| `F-R1-§2` | §2 Why first-class | Measurement is never neutral; tooling *is* a theory of what matters | Ch. 1, 5, 6 |
| `F-R1-§3` | §3 Definition | Instrument = versioned reproducible function from Record to observations + protocol; second-order; three commitments | Ch. 2, 4 |
| `F-R1-§4` | §4 Ontology | The kinds: Reality, Record, Representations, Relations, Instruments, Observatory, Observations | Ch. 2, 4 |
| `F-R1-§5.1` | §5.1 | The telescope that bends its sky; restraint | Ch. 2, 5 |
| `F-R1-§5.2` | §5.2 | Declared vs derived observables; the gap between them is the richest reading | Ch. 4, 6 |
| `F-R1-§5.3` | §5.3 | Four prohibitions (People, Merit, Velocity, Truth); the Goodhart line; **the door that sits for a year** | Ch. 0, 5 |
| `F-R1-§5.4` | §5.4 | Promotion; a reading "enters the **front door** … as a door" | **Ch. 0**, 8 |
| `F-R1-§5.5` | §5.5 | Tension as a relation; lifecycle open/active/resolved/held/**dissolved**; the held paradox is generative | Ch. 6 |
| `F-R1-§5.6` | §5.6 | Observations immutable-for-free; recalibrate the instrument, never the reading | Ch. 4 |
| `F-R1-§5.7` | §5.7 | STATE is an observation, not a document; carries coordinates | Ch. 4 |
| `F-R1-§6` | §6 | The eighth question; **one Record, many Instruments**; the Observatory; no aggregation; commissioning by challenge | Ch. 4, 6 |
| `F-R1-§7` | §7 | **Reality above the Record**; the loop not a line; the Record's two zones (constitutive vs testimony) | **Ch. 4, 7** |
| `F-R1-§8` | §8 | What the RFC does not decide (implementation) | Ch. 8 |
| `F-R1-§9` | §9 | Open questions Q-a … Q-i | Ch. 8 |
| `F-R1-§10` | §10 Disposition | Resolved by challenge; a preserved rejection is the first negative result | Ch. 8, 2 |

### RFC-001 revision diffs — *the historical layer*

| Fragment | Source | Content | Placed in |
|----------|--------|---------|-----------|
| `F-R1-EVO-1` | `39fa24e` → `e1ff5a6` | The count "five kinds" quietly falsified; the Observatory discovered; §6 born; Q-e…Q-g added | Appendix C; Ch. 4 sidebars |
| `F-R1-EVO-2` | `e1ff5a6` → `c9dcb72` | "Unity is the Record" corrected to "Reality above the Record"; "no aggregation" deepened to "disagreement is information"; Q-h→RFC-002, Q-i added | Appendix C; Ch. 6, 7 sidebars |

### RFC-002 — *Inquiry* (`473f4a9`)

| Fragment | Source | One-line content | Placed in |
|----------|--------|------------------|-----------|
| `F-R2-§1` | §1 | Ambient vs directed observation; only ambient was defined | Ch. 3, 8 |
| `F-R2-§2` | §2 | The Inquiry: question, composed roster, termination, disposition | Ch. 3 |
| `F-R2-§3` | §3 | The known danger; defense = **cheap, plural, recorded, contestable**; localizes disturbance in time | **Ch. 3**, 6 |
| `F-R2-§4` | §4 | Not a hierarchy; "who may open an Inquiry" defaults to no restriction | Ch. 3 |
| `F-R2-§5` | §5 | Open questions Q-a … Q-d | Ch. 8 |
| `F-R2-§6` | §6 Disposition | May be rejected and absorbed into RFC-001; rejection kept | Ch. 8 |

## 2. Repository-documentation fragments

| Fragment | Source | Content | Placed in |
|----------|--------|---------|-----------|
| `F-DOC-1` | `README.md` | "An engineering discipline for evolving representations of reality." / "Work in Progress" / "See /drafts." | Ch. 1; front matter; preface |

## 3. Draft-tier fragments — the skeleton (structure only, **no prose survives**)

Each is a 0-byte file. The **filename** is the fragment. Together they are the recovered
Table of Contents and the author's intended reading order.

| Fragment | File | Recovered chapter title | Prose recovered? |
|----------|------|------------------------|------------------|
| `F-SKEL-0` | `drafts/00-door.md` | The Door | None — frame only |
| `F-SKEL-1` | `drafts/01-vision.md` | Vision | None — frame only |
| `F-SKEL-2` | `drafts/02-organodynamics.md` | Organodynamics | None — frame only |
| `F-SKEL-3` | `drafts/03-come.md` | Come | None — frame only |
| `F-SKEL-4` | `drafts/04-reality-layers.md` | Reality Layers | None — frame only |
| `F-SKEL-5` | `drafts/05-personal-worlds.md` | Personal Worlds | None — frame only |
| `F-SKEL-6` | `drafts/06-hospitality.md` | Hospitality | None — frame only |
| `F-SKEL-7` | `drafts/07-the-sun.md` | The Sun | None — frame only |
| `F-SKEL-8` | `drafts/08-open-questions.md` | Open Questions | None — frame only |

## 4. What this means for reconstruction

- **No fragment is discarded.** Every RFC section, every revision diff, the README, and
  every skeleton frame is placed.
- **The skeleton frames carry no prose**, so each chapter is built by fitting RFC-tier
  fragments to the frame's title and marking, honestly, where the frame outruns its
  evidence. Chapters whose title is directly backed by canonical text (0 Door, 4 Reality
  Layers, 6 Hospitality, 7 The Sun, 8 Open Questions) reconstruct densely; chapters whose
  title is more invitational than technical (3 Come, 5 Personal Worlds) reconstruct from
  the nearest canonical vocabulary and are flagged in **Deliverable 10 — Outstanding Gaps**.
- The **maturity** of each fragment (how settled the underlying idea is) drives the
  pencil→ink visual treatment; see **Deliverable 9 — Visual Language Guide**.
