# The Brill Blueprint — Living Edition

**Stage 2 of the book: the continuation, alive and maturing.**

This edition continues *The Brill Blueprint* from everything that happened after the first
repository snapshot — the Development Manifest and its constitutional review, the Substrate,
Meta Review, Recognition, the Discovery Engine, the Seasons, and the `ods` laboratory. Where
the [Recovery Edition](../recovery-edition/) is a sealed research notebook, this edition is a
living book: it absorbs new canonical knowledge as the project produces it, and never erases
what it used to know.

> *Reality is not negotiated. Representations are.* — RFC-001 §7

---

## Start here

- **New?** Read [The Two Editions](front-matter/00-two-editions.md), then
  [How to Read the Living Edition](front-matter/01-how-to-read.md).
- **Read the book:** the [Table of Contents](SUMMARY.md), or the
  [Preface](front-matter/02-preface.md).
- **In a hurry?** The six Blueprint boxes (Ch. 9–14), then
  [Ch. 10 · The Substrate](manuscript/10-the-substrate.md) and
  [Ch. 12 · The Discovery Engine](manuscript/12-the-discovery-engine.md).
- **Just the history:** the [Chronicle](chronicle/00-chronicle.md), five acts, end to end.

## What makes this edition different

Three things, and they are its whole design:

1. **The visual language is the epistemology.** Pencil = hypothesis; blue ink = survived
   challenge; black ink = canonical; green = insight; red = tension; erasure = abandoned but
   kept. Read honestly, the palette shows the truth about this project — it is mostly pencil
   and blue, because *nothing here has been ratified.* The book looks as certain as the
   discipline actually is. See [The Visual Epistemology](visual-language/00-epistemology.md).
2. **The book matures as you read it.** Its register travels from an engineer's desk (Ch. 9–11)
   to a formal specification (Ch. 12–14) — and keeps visible pencil and red at the end, because
   the discipline is unfinished. You experience emergence, not a description of it. See
   [The Maturation Gradient](visual-language/01-maturation-gradient.md).
3. **A third narrative layer: the Chronicle.** Alongside the Technical and Human voices runs a
   record of what actually happened — recovered from the project's append-only journal, every
   claim cited to a verifiable event. See [The Chronicle](chronicle/00-chronicle.md).

## What's here

```
living-edition/
├── README.md              ← you are here
├── SUMMARY.md             ← Table of Contents + knowledge map (mdBook-ready)
├── front-matter/          ← the two editions, how to read, preface
├── visual-language/       ← the epistemology, the gradient, render conventions, theme.css
├── manuscript/            ← Ch. 9–14 (three layers each: ▣ Technical · ◇ Human · ⏱ Chronicle)
├── chronicle/             ← the third narrative layer: five acts + append-only forward log
└── apparatus/             ← glossary additions, provenance map, gaps & horizon, reading the record
```

## Auditing — the book is a lens; the repository is the sky

Every doctrinal claim cites an RFC section, a research document, or a journal event id, and
can be re-derived from the source of truth in [`/rfcs`](../../rfcs), [`/research`](../../research),
[`/reviews`](../../reviews), and [`/journal`](../../journal). See
[Reading the Record](apparatus/reading-the-record.md). If the book and the Record ever
disagree, the Record wins.

## This is a Living Book

When new canonical knowledge lands, follow the loop in
[Gaps & Horizon §3](apparatus/gaps-and-horizon.md): locate affected chapters, diff the
doctrine, **re-ink** the medium to the new evidence, append the
[Chronicle Log](chronicle/CHRONICLE-LOG.md), and record the update as an event. The sealed
[Recovery Edition](../recovery-edition/) is never touched; new knowledge continues the book
here.

## Building

No build step is required — everything renders on GitHub (Mermaid included). For a compiled
edition, `SUMMARY.md` is mdBook-ready and [`theme.css`](visual-language/theme.css) supplies
the colour epistemology; treat any built HTML/PDF as a *cached reading* (RFC-001 §5.7) — never
hand-edit it, always regenerate from source.
