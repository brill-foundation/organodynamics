# Editorial Deliverable 1 — Repository Inventory

*A complete census of the archaeological site as it stood at reconstruction time.*

- **Reconstruction date:** 2026-07-08
- **Repository:** `brill-foundation/organodynamics`
- **Reconstruction branch:** `claude/brill-blueprint-recovery-0wea20`
- **HEAD at excavation:** `473f4a9` — *Open RFC-002: Inquiry — composing the Observatory around a question*

This inventory records **everything that exists**, so that the manuscript can be
proven to be a *derived* artifact and the repository can remain the source of truth.

---

## 1. Commit history (the entire Record)

The repository has exactly **five commits**, on a single line of descent. There are no
merges, no side branches with unique content, no stashes, no dangling or unreachable
blobs (verified with `git fsck --unreachable` and `git log --all --reflog`).

| # | Commit | Date | Subject |
|---|--------|------|---------|
| 1 | `1be63ae` | 2026-07-06 | Initialize Organodynamics repository structure |
| 2 | `39fa24e` | 2026-07-06 | Open RFC-001: the Instrument as a first-class concept |
| 3 | `e1ff5a6` | 2026-07-06 | Revise RFC-001 (rev 2): one Record, an Observatory of Instruments |
| 4 | `c9dcb72` | 2026-07-06 | Revise RFC-001 (rev 3): Reality above the Record; disagreement is information |
| 5 | `473f4a9` | 2026-07-06 | Open RFC-002: Inquiry — composing the Observatory around a question |

The commit history is itself canonical content: it is the discipline's own Record, and
it demonstrates the very lifecycle the discipline describes (open → challenge → revise).
The three revisions of RFC-001 are recovered as the manuscript's **historical layer**
(Appendix C).

## 2. File census (working tree at HEAD)

Every path that has ever existed in the repository, with its status.

| Path | Bytes | Status | Disposition |
|------|-------|--------|-------------|
| `README.md` | 119 | present | Recovered → Ch. 1 (Vision), front matter |
| `LICENSE` | MIT | present | Recorded; governs the book too |
| `.gitignore` | — | present | Housekeeping; no book content |
| `rfcs/RFC-001-the-instrument.md` | 17 566 | present, rev 3 | **Primary canon.** Recovered → Ch. 2, 4, 5, 6, 7, 8; Appendix A |
| `rfcs/RFC-002-inquiry.md` | 3 718 | present | **Primary canon.** Recovered → Ch. 3, 6, 8; Appendix B |
| `drafts/00-door.md` | **0** | empty placeholder | Chapter frame → Ch. 0 (The Door) |
| `drafts/01-vision.md` | **0** | empty placeholder | Chapter frame → Ch. 1 (Vision) |
| `drafts/02-organodynamics.md` | **0** | empty placeholder | Chapter frame → Ch. 2 (Organodynamics) |
| `drafts/03-come.md` | **0** | empty placeholder | Chapter frame → Ch. 3 (Come) |
| `drafts/04-reality-layers.md` | **0** | empty placeholder | Chapter frame → Ch. 4 (Reality Layers) |
| `drafts/05-personal-worlds.md` | **0** | empty placeholder | Chapter frame → Ch. 5 (Personal Worlds) |
| `drafts/06-hospitality.md` | **0** | empty placeholder | Chapter frame → Ch. 6 (Hospitality) |
| `drafts/07-the-sun.md` | **0** | empty placeholder | Chapter frame → Ch. 7 (The Sun) |
| `drafts/08-open-questions.md` | **0** | empty placeholder | Chapter frame → Ch. 8 (Open Questions) |
| `docs/.gitkeep` | 0 | placeholder | Empty; no content |
| `references/.gitkeep` | 0 | placeholder | Empty; no content |
| `research/.gitkeep` | 0 | placeholder | Empty; no content |
| `rfcs/.gitkeep` | 0 | placeholder | Empty; no content |
| `assets/images/.gitkeep` | 0 | placeholder | Empty; illustration slots (see Illustration Plan) |
| `assets/logos/.gitkeep` | 0 | placeholder | Empty; illustration slots |
| `assets/diagrams/.gitkeep` | 0 | placeholder | Empty; illustration slots |

## 3. Off-repository sources

| Source | Result |
|--------|--------|
| GitHub Issues | **None** (0 open, 0 closed) |
| GitHub Pull Requests | **None** |
| GitHub Discussions | **None** found |
| Git stashes | **None** |
| Unreachable / dangling objects | **None** (clean `git fsck`) |
| Other branches | `main` and the reconstruction branch only; identical content |

## 4. The two loud facts

Two facts dominate every editorial decision that follows and are stated here once, plainly:

1. **The chapter files are empty.** All nine `drafts/*.md` files are 0 bytes. The
   *prose* of the book was never committed. What was committed is the book's **skeleton**:
   an ordered, deliberately titled table of contents.

2. **The intellectual content lives in the RFCs.** Nearly all recoverable, canonical
   text of *The Brill Blueprint* exists inside `RFC-001` and `RFC-002` — and, uniquely,
   inside the *diffs between the three revisions of RFC-001*, which record the discipline
   thinking in real time.

The reconstruction is therefore an act of **interlocking**: fitting the recovered flesh
(the RFCs) onto the recovered spine (the chapter skeleton), guided by the vocabulary the
two share — most decisively the word *door*, which the RFCs use as the canonical name for
a representation, and which names the first chapter.

→ See **Deliverable 2 — Book Fragment Inventory** for the fragment-level breakdown, and
**Deliverable 3 — Canonical Source Map** for the interlock.
