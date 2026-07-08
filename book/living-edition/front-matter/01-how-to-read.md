<!-- 🔵 front matter · how to read -->

# How to Read the Living Edition

*The Living Edition behaves like a knowledge system. Three conventions let you read it at
whatever depth you need, follow any single voice, and always know how sure a passage is.*

## The three narrative layers

Every chapter is told in three voices, each marked so you can follow just one through the
whole book if you wish (see [render conventions](../visual-language/02-render-conventions.md)):

| Layer | Sigil | What it gives you |
|-------|-------|-------------------|
| **Technical** | `▣ TECHNICAL` | the engineering — the architecture, recovered from the RFCs |
| **Human** | `◇ HUMAN` | the intuition — why it matters to a person |
| **Chronicle** | `⏱ CHRONICLE` | the history — what actually happened, dated and provenanced |

Read all three for the full experience; read only **Human** for the story of the ideas; read
only **Chronicle** (or the [Chronicle section](../chronicle/00-chronicle.md) end to end) for
the project's true history.

## The visual epistemology — read the medium, not just the words

Before you read a passage, its **medium** tells you how mature it is, and its **margin** tells
you what is alive in it. This is the book's [epistemology](../visual-language/00-epistemology.md),
not its decoration.

```text
✏️  pencil       a hypothesis, staked but not yet exposed
🔵  blue ink     survived challenge — a working foundation, not yet canon
⚫  black ink     canonical / ratified   (rare — almost nothing is, yet)
🟢  green         a genuine insight / promotion / discovery
🔴  red           a live contradiction or open tension
⌫  erasure       an abandoned claim, struck but kept (never deleted)
```

Two truths this makes visible at a glance:

- **The book is mostly pencil and blue.** Nothing in the discipline has been ratified (the
  decision rule itself is an open debt, Q-f). So even the specification-register chapters
  reach ⚫ black ink rarely, and honestly. Count the black on a page and you know how settled
  the discipline really is.
- **Red is abundant, and that is health.** In this discipline disagreement is information; a
  red margin marks where the next knowledge will come from, not a defect.

Each chapter opens with a **medium banner** and a **maturity meter**:

```text
🔵 blue ink · survived challenge; not yet canon
Medium  ✏️──🔵──⚫   reaches: 🔵   ·   live margins: 🔴 ×2  🟢 ×3  ⌫ ×1
```

## The maturation gradient — the book matures as you read it

The register changes across the arc: the Recovery Edition is a **research notebook**; the
Living Edition moves from an **engineer's desk** (Ch. 9–11) to a **specification** (Ch. 12–14).
You are not told about emergence — you *experience* it. And the specification zone keeps
visible pencil and red, because the discipline it describes is not finished.
(Full account: [The Maturation Gradient](../visual-language/01-maturation-gradient.md).)

## Provenance — audit anything

Every chapter ends with a **Provenance** block citing its sources: an RFC section
(`RFC-004 §7`), a research document, a journal event id (`3e5101a7`), or a commit. The RFCs
live verbatim in [`/rfcs`](../../../rfcs); the history lives in
[`/journal/journal.jsonl`](../../../journal/journal.jsonl) and can be walked with
`./ods lineage <id>`. The book asserts no doctrine it cannot trace.

## A suggested first path

Read the six **Blueprint boxes** (one atop each chapter, Ch. 9–14) for the whole architecture
in minutes. Then read [Chapter 10 · The Substrate](../manuscript/10-the-substrate.md) and
[Chapter 12 · The Discovery Engine](../manuscript/12-the-discovery-engine.md) in full — the
constitutional heart and the deepest reduction — and finish with
[Chapter 14 · The Open Constitution](../manuscript/14-the-open-constitution.md) to see the
living frontier. About thirty minutes for the spine of today's understanding.

---

→ [The Two Editions](00-two-editions.md) · [Preface](02-preface.md) ·
[Table of Contents](../SUMMARY.md) · [The Visual Epistemology](../visual-language/00-epistemology.md)
