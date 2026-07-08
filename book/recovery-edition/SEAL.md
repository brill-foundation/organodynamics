# ⊘ SEAL — The Recovery Edition is Frozen

```
   ┌───────────────────────────────────────────────┐
   │   THE BRILL BLUEPRINT · RECOVERY EDITION        │
   │   sealed 2026-07-08                             │
   │   historical fidelity — not to be continued here │
   └───────────────────────────────────────────────┘
```

This edition is **Stage 1** of *The Brill Blueprint*. It is the most faithful
reconstruction of the book as it existed at the project's first repository snapshot —
recovered from `RFC-001`, `RFC-002`, and the empty chapter skeleton in `drafts/`.

It is **frozen on purpose.**

## What "frozen" means here

- **Do not rewrite it.** The manuscript text is preserved as recovered.
- **Do not modernize it.** No later idea (the Manifest, the Substrate, the Discovery
  Engine, Recognition, the Seasons) is merged into these chapters. Where those ideas
  belong, they live in the **[Living Edition](../living-edition/)**.
- **Do not continue it here.** New knowledge continues the book in the Living Edition,
  never by editing this one.

Its purpose is **historical fidelity**: a permanent record of what the book was when it
was first recovered, so the project can always see its own starting point and measure how
far the understanding has travelled since.

## What it contains

The nine-chapter manuscript (The Door → Open Questions), front matter, the two founding
RFCs verbatim (Appendices A–B), the evolution of RFC-001 (Appendix C), the apparatus
(glossary, references, illustration index, editorial notes), and the full editorial
dossier of the reconstruction. See its [Table of Contents](SUMMARY.md).

## Provenance of the freeze

- **Sealed at:** 2026-07-08.
- **Content basis:** the recovery commit `86dec66` ("Recover and publish The Brill
  Blueprint as the canonical manuscript"), whose byte-exact original is preserved forever
  in git history regardless of any later relocation.
- **Sources recovered:** `rfcs/RFC-001-the-instrument.md` (rev 3), `rfcs/RFC-002-inquiry.md`,
  `README`, and the `drafts/` skeleton — the entire repository as it stood at snapshot.
- **The only post-freeze modification** was mechanical: when this edition was relocated
  from `book/` to `book/recovery-edition/` to sit beside the Living Edition, a single
  relative link to `/rfcs` was repaired (`../rfcs` → `../../rfcs`). No manuscript content
  was altered. The frozen text is auditable against commit `86dec66` in the Record.

## Why an edition is frozen rather than revised

The discipline this book describes keeps its history append-only and never renegotiates
what happened (RFC-001 §7). Sealing the Recovery Edition is that principle applied to the
book itself: the earlier understanding is not overwritten by the later one — it is kept,
dated, and honoured, and the later understanding grows beside it in the Living Edition.
This edition is the book's first *held* state. Read it as the pencil sketch from which the
ink was later drawn.

---

→ To read the book as it exists **today**, go to the
**[Living Edition](../living-edition/)**.
→ To understand how the two editions relate, see the
**[book portal](../README.md)**.
