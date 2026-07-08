# Organodynamics

An engineering discipline for evolving representations of reality — and the
laboratory in which that discipline is being discovered by experiment.

This repository holds three inseparable layers of one project (RFC-000):

| Layer | Name | This repo |
|-------|------|-----------|
| **I — Philosophy** | *The Brill Blueprint* | [`book/`](book/) — the manuscript |
| **II — Architecture** | Organodynamics | [`rfcs/`](rfcs/), [`reviews/`](reviews/), [`meta-reviews/`](meta-reviews/) |
| **III — Implementation** | Brill Center | [`ods`](ods), [`tools/`](tools/), [`journal/`](journal/) |

The permanent record of the project is `journal/journal.jsonl`: an append-only,
hash-chained journal of provenanced events. Everything else — RFCs, reviews,
theories, and this book — is a representation staked into that record and open to
challenge. Nothing here is settled; several documents are deliberately locked
pending experiments.

---

## 📖 The book — *The Brill Blueprint*

The project's Layer I. The book is published in **two editions**, and the split is
itself a deliberate act of the discipline:

- **[Recovery Edition](book/recovery-edition/)** — *sealed.* The most faithful
  reconstruction of the book as it existed at the first repository snapshot
  (RFC-001, RFC-002, and the chapter skeleton). Frozen permanently for historical
  fidelity. It is not revised, modernized, or merged forward. See its
  [SEAL](book/recovery-edition/SEAL.md).
- **[Living Edition](book/living-edition/)** — *active.* Continues the book from
  everything that happened afterward: the Development Manifest and its
  constitutional review, the Substrate, Meta Review, Recognition, the Discovery
  Engine, the Seasons, and the laboratory. It carries three narrative layers
  (**Technical · Human · Chronicle**), a full **visual epistemology** (pencil →
  ink → colour), and a maturation gradient — the book matures as you read it.

Start at the **[book portal](book/README.md)**.

---

## 🧪 The laboratory (Layer III) — prerequisites: git, Python 3.8+

```
git clone <this repository>
cd organodynamics
./ods setup        # one time: records who you are (locally only)
./ods status       # chain health + Season 1 readings
./ods log          # read the most recent events
./ods note "..."   # the doorway: your thought -> the permanent record
```

`./ods -h` / `./ods <command> -h` documents everything.

## 🏛 The architecture (Layer II) — reading order for a new participant

1. `rfcs/RFC-000-development-manifest.md` — the founding proposal (under review)
2. `rfcs/RFC-001-the-instrument.md`, `RFC-002-inquiry.md` — the core concepts
3. `rfcs/RFC-003-meta-review.md`, `RFC-004-the-substrate.md`, `RFC-005-recognition.md`
   — integration, the substrate, recognition
4. `research/SEASONS.md` and `research/SEASON-1-DOORWAY-PLAN.md` — what is being
   tested right now, and why
5. `./ods lineage <event-id>` on any event in `./ods log` — how any idea evolved

The book's Living Edition recovers all of the above into a continuous read, with
provenance back to each source.

## Participating (Season 1 is running)

- **Write.** `./ods note` is experiment D-0: the project is measuring whether
  anyone besides its first author will write to the record. Bare notes (no
  references) are legal and are themselves data (D-2).
- **Review.** Independent constitutional reviews of RFC-000 are commissioned:
  `./ods experiment r23` assembles the reviewer packets; `./ods review-add` files
  a result verbatim with provenance.
- **Run an experiment.** `./ods experiment x2` (the independent reading) and
  `./ods experiment d3` (the cold-restart drill) assemble ready-to-hand-off
  packets in `dist/`.
- **Share.** `./ods sync`. If it reports a journal conflict, that is H5 — a
  registered experimental result. Capture it before resolving.

## Standing locks (read before building on anything)

`research/THEORY-001-the-discovery-engine.md` §11: nothing is built on the theory
until experiment X2 returns. `research/CHALLENGE-001/-002` are held under the same
lock. The ratification rule does not exist yet (RFC-003 Q-f); nothing in this
repository is canon.

License: see `LICENSE`.
