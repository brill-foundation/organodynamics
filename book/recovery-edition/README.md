# The Brill Blueprint

**The canonical manuscript of Organodynamics — recovered, reconstructed, and published as one
continuously readable book.**

This directory is the book. It was not written from scratch; it was **recovered** from the
repository's own Record — its RFCs, its README, its commit history, and the skeleton of chapter
titles the author left in `drafts/` — and assembled into a single manuscript anyone on the
project can open and read front to back.

> *Reality is not negotiated. Representations are.* — RFC-001 §7

---

## Start here

- **Read the book:** open the [Table of Contents](SUMMARY.md), or begin at the
  [Preface](front-matter/03-preface.md).
- **In a hurry?** Read the nine **Blueprint boxes** (one at the top of each chapter), then
  [Chapter 4 · Reality Layers](manuscript/04-reality-layers.md) and
  [Chapter 7 · The Sun](manuscript/07-the-sun.md) in full. ~20 minutes for the spine.
- **Want to know how it was made — and how to trust it?** Read the
  [Colophon](front-matter/01-colophon.md) and
  [How to Read This Book](front-matter/02-how-to-read.md).

## What's here

```
book/
├── README.md            ← you are here
├── SUMMARY.md           ← complete Table of Contents (+ knowledge map; mdBook-ready)
├── front-matter/        ← title, colophon, how-to-read, preface
├── manuscript/          ← the nine chapters (00–08)
├── appendices/          ← A: RFC-001 verbatim · B: RFC-002 verbatim · C: the evolution
├── apparatus/           ← glossary, references, illustration index, editorial notes
├── editorial/           ← the dossier: inventories, source & provenance maps, reports,
│                          illustration plan, visual language guide, gaps, recommendations
└── assets/diagrams/     ← slots for the atlas-grade illustration plates (specified, not yet drawn)
```

## The three promises this book keeps

1. **It recovers; it does not invent.** Every doctrinal paragraph traces to a source (RFC-001,
   RFC-002, or the README), recorded in each chapter's footer and in the
   [Provenance Map](editorial/03-provenance-map.md). Editorial bridges are marked `[ed.]`.
2. **It preserves the evolution of thought.** The discipline changed its mind twice and deepened
   a belief once; all of it is kept — never erased — in historical sidebars and
   [Appendix C](appendices/C-evolution-of-rfc-001.md).
3. **The repository stays the source of truth.** The book is a *derived* artifact — a lens; the
   repository is the sky. The RFCs live in [`/rfcs`](../../rfcs); the appendices reproduce them
   verbatim so any derivation can be audited.

## How it looks the way it knows — the pencil→ink language

Each chapter, section, and figure carries a maturity badge: `✎` discovery · `✎▸` investigation ·
`▮` validation · `▣` canonical. Badges follow the *evidence*, not the chapter number, so the book
looks exactly as certain as it actually is — a research notebook at the start, a specification by
the end. Full system: [Visual Language Guide](editorial/06-visual-language-guide.md).

## This is a Living Book

The manuscript is never finished. When new canonical knowledge lands in the repository, follow
the update loop in
[Future Editorial Recommendations](editorial/08-future-recommendations.md): locate the affected
chapters, diff the doctrine, re-badge maturity, update the apparatus, and record the update as an
event in the Record — never erasing what the book used to know. Contributions arrive the way the
discipline settles everything else: **by challenge.**

## Building

No build step is required — every file renders on GitHub as-is (Mermaid diagrams included), which
is deliberate: the book stays diffable and reviewable in plain Markdown. Should it ever want a
single-file or PDF edition, [`SUMMARY.md`](SUMMARY.md) is already authored in mdBook's
table-of-contents format:

```sh
# optional, only when a compiled edition is wanted
cargo install mdbook      # or: brew install mdbook
mdbook build book/        # emits static HTML; treat output as a cached reading — never hand-edit
```

Treat any generated HTML/PDF as a *cached reading* in the discipline's own sense (RFC-001 §5.7):
never hand-edit the output; always regenerate from the Markdown source.
