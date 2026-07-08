<!-- ▣ front matter · colophon -->

# Colophon — How this book was recovered

*The Brill Blueprint documents its own creation. This page is the first act of that
documentation: an honest account of how the manuscript in your hands came to exist.*

## What was found

This book was not written; it was **recovered**. When the reconstruction began, the
repository contained:

- **Two RFCs** — `RFC-001 · The Instrument` (three revisions) and `RFC-002 · Inquiry` — dense,
  finished prose in the author's voice, holding nearly all of the discipline's ideas.
- **A README** giving the discipline's one-line vision.
- **Nine empty chapter files** in `drafts/` — 0 bytes each — whose *filenames* form a
  deliberate table of contents: Door, Vision, Organodynamics, Come, Reality Layers, Personal
  Worlds, Hospitality, The Sun, Open Questions.
- **A five-commit history** in which the discipline can be watched changing its mind.
- **No issues, no pull requests, no other files** — ever. (See
  [Repository Inventory](../editorial/00-repository-inventory.md).)

The book's *ideas* existed; its *prose as prose* did not. The recovery is the act of fitting
the recovered ideas (the RFCs) onto the recovered shape (the chapter skeleton), guided by the
vocabulary the two share — decisively the word *door*, the discipline's own name for a
representation, which is also the title of the first chapter.

## How to trust it

Three commitments make this manuscript auditable:

1. **Provenance.** Every doctrinal paragraph traces to a source, recorded in the
   [Provenance Map](../editorial/03-provenance-map.md) and summarized in each chapter's footer.
   Editorial connective sentences are marked `[ed.]` and assert no doctrine.
2. **Fidelity.** The RFCs are reproduced *verbatim* in [Appendix A](../appendices/A-rfc-001-the-instrument.md)
   and [Appendix B](../appendices/B-rfc-002-inquiry.md), so any derivation can be checked
   against the source.
3. **Honesty about gaps.** Where a chapter title outran its evidence, the book says so rather
   than inventing doctrine. Those shortfalls are logged in
   [Outstanding Gaps](../editorial/07-outstanding-gaps.md) and shown in-place by the maturity
   badges.

## How it looks the way it knows

The book uses a four-stage visual language — **pencil → ink** — that shows the *maturity* of
each idea: `✎` discovery, `✎▸` investigation, `▮` validation, `▣` canonical. A settled
canonical claim is inked; an unwritten essay is left in pencil. The badges are applied by
evidence, not by chapter number, so the book looks exactly as certain as it actually is. The
full system is the [Visual Language Guide](../editorial/06-visual-language-guide.md).

## The editorial dossier

Behind the manuscript sits a complete editorial apparatus — inventories, source and provenance
maps, the editorial report, the illustration plan, the gaps register, and the recommendations
for keeping the book alive. It lives in [`book/editorial/`](../editorial/) and is listed in the
[Table of Contents](../SUMMARY.md).

---

*Type & tooling:* plain Markdown, version-controlled, rendering on GitHub with no build step.
Diagrams are Mermaid and text construction blocks embedded in the chapters. Should the book
outgrow raw Markdown, `SUMMARY.md` is already authored for `mdBook`; see
[Future Recommendations §4](../editorial/08-future-recommendations.md).
