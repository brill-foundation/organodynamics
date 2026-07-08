# Editorial Deliverable 8 — Illustration Plan

*Every figure the manuscript wants, its purpose, its canonical source, its maturity stage,
and its production status. Design is semantic: each figure must improve understanding, not
ornament the page.*

Before proposing any figure, the repository's existing visual assets were searched. Result:
`assets/images/`, `assets/logos/`, and `assets/diagrams/` contain only `.gitkeep` files —
**no existing visual assets**. Every figure below is therefore new, and every one is either
(a) *derivable directly from canonical text* — these ship now, as Mermaid/text embedded in
the chapters — or (b) *a richer rendering to be produced later* — these are specified here
and slotted in the Illustration Index.

Status legend: **✓ ships** (embedded in the named chapter now) · **◷ specified** (frame and
source fixed; art to be produced) · maturity glyphs per the Visual Language Guide.

---

## Figure register

| ID | Title | Purpose | Canonical source | Stage | Status | Home |
|----|-------|---------|------------------|-------|--------|------|
| **FIG-0.1** | The Door | Establish the representation-as-door motif; a claim you can open | `R1 §5.4` | ▮ | ✓ ships | Ch. 0 |
| **FIG-0.2** | A door that sits for a year | Dormancy is an observation, not a deficiency | `R1 §5.3` | ✎▸ | ✓ ships | Ch. 0 |
| **FIG-1.1** | Anecdote → Instrument | Why the discipline needs to *see* evolution | `R1 §2` | ✎▸ | ✓ ships | Ch. 1 |
| **FIG-2.1** | The ontology | The kinds of object and their order | `R1 §4` | ▣ | ✓ ships | Ch. 2 |
| **FIG-2.2** | Second-order stance | Instrument observes representations, not Reality | `R1 §3` | ▮ | ✓ ships | Ch. 2 |
| **FIG-4.1** | The Reality Layers stack | The full hierarchy, top to bottom | `R1 §7`, `R1 §4` | ▣ | ✓ ships | Ch. 4 — **central spread** |
| **FIG-4.2** | The loop, not a line | The cycle anchored at Reality, the one unproduced node | `R1 §7` | ▣ | ✓ ships | Ch. 4 |
| **FIG-4.3** | One Record, many Instruments | The Observatory; comparison without aggregation | `R1 §6` | ▣ | ✓ ships | Ch. 4 |
| **FIG-4.4** | The Record's two zones | Constitutive (infallible about itself) vs testimony | `R1 §7` | ▮ | ✓ ships | Ch. 4 |
| **FIG-5.1** | Declared vs derived; the gap | Two sensing modalities and the richest reading between them | `R1 §5.2` | ▮ | ✓ ships | Ch. 5 |
| **FIG-6.1** | The tension lifecycle | open → active → resolved / held / dissolved | `R1 §5.5` | ▮ | ✓ ships | Ch. 6 |
| **FIG-6.2** | Disagreement is information | Two telescopes disagreeing; the gap is the signal | `R1 §6` | ▣ | ✓ ships | Ch. 6 |
| **FIG-3.1** | Ambient vs directed observation | Sky-survey vs targeted campaign | `R2 §1` | ✎▸ | ✓ ships | Ch. 3 |
| **FIG-3.2** | Anatomy of an Inquiry | question · roster · termination · disposition | `R2 §2` | ▮ | ✓ ships | Ch. 3 |
| **FIG-7.1** | The Sun | Reality as the unproduced anchor everything orbits | `R1 §7` | ✎ | ✓ ships (pencil) | Ch. 7 |
| **FIG-8.1** | The open-question frontier | Map of Q-a…Q-i and RFC-002 Q-a…Q-d, by theme | `R1 §9`, `R2 §5` | ✎▸ | ✓ ships | Ch. 8 |
| **FIG-C.1** | RFC-001 evolution timeline | rev1 → rev2 → rev3: what changed and why | `EVO-1`, `EVO-2` | ▣ | ✓ ships | App. C |
| **FIG-KM.1** | The knowledge map | How every chapter and concept connect | whole-book `[ed.]` | ▮ | ✓ ships | TOC / SUMMARY |

### Richer renderings specified for later production (◷)

| ID | Title | What the upgrade adds | Source | Home |
|----|-------|-----------------------|--------|------|
| FIG-4.1-atlas | Reality Layers — atlas spread | A full scientific-atlas plate of the stack + loop + Observatory on one spread, hand-drawn-to-inked gradient across the page | `R1 §6`, `R1 §7` | Ch. 4 |
| FIG-7.1-plate | The Sun — frontispiece plate | The pencil sketch matured toward ink as Ch. 7 progresses, performing the Chrysalis on one image | `R1 §7` | Ch. 7 |
| FIG-0.1-mark | The Door — book mark/logo | A door glyph as the book's recurring mark; candidate for `assets/logos/` | `R1 §5.4` | front matter |

## Production notes

- **Ship-now figures** are authored as fenced Mermaid or `text` construction blocks *inside
  the chapter files*, so they render on GitHub with no build step and remain diffable.
- **Stage governs style:** `✎` figures are `text` construction blocks; `✎▸` figures are
  Mermaid with dashed edges and a visible correction; `▮`/`▣` figures are clean Mermaid or
  precise tables. (Conventions: Visual Language Guide §2.)
- **The atlas/plate upgrades** are the only figures that would need a raster/vector tool.
  They are *specified, not invented*: each has a fixed source and a fixed frame, so a future
  illustrator adds craft, not doctrine. Their slots live in `assets/diagrams/`.
- **No figure asserts anything its source does not.** A figure with no canonical source is
  not drawn; it becomes a gap (Deliverable 10).
