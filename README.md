# Organodynamics

An engineering discipline for evolving representations of reality — and the
laboratory in which that discipline is being discovered by experiment.

The permanent record of this project is `journal/journal.jsonl`: an
append-only, hash-chained journal of provenanced events. Everything else —
RFCs, reviews, theories — is a representation staked into that record and
open to challenge. Nothing here is settled; several documents are
deliberately locked pending experiments (see below).

## Start here (prerequisites: git, Python 3.8+)

```
git clone <this repository>
cd organodynamics
./ods setup        # one time: records who you are (locally only)
./ods status       # chain health + Season 1 readings
./ods log          # read the most recent events
./ods note "..."   # the doorway: your thought -> the permanent record
```

`./ods -h` / `./ods <command> -h` documents everything.

## Reading order for a new participant

1. `rfcs/RFC-000-development-manifest.md` — the founding proposal (under review)
2. `rfcs/RFC-001-the-instrument.md`, `RFC-002-inquiry.md` — the core concepts
3. `research/SEASONS.md` and `research/SEASON-1-DOORWAY-PLAN.md` — what is
   being tested right now, and why
4. `./ods lineage <event-id>` on any event in `./ods log` — how any idea
   here actually evolved
5. Everything else in `rfcs/`, `reviews/`, `research/` as curiosity leads.

## Participating (Season 1 is running)

- **Write.** `./ods note` is experiment D-0: the project is measuring
  whether anyone besides its first author will write to the record. Bare
  notes (no references) are legal and are themselves data (D-2).
- **Review.** Independent constitutional reviews of RFC-000 are commissioned:
  `./ods experiment r23` assembles the reviewer packets;
  `./ods review-add` files a result verbatim with provenance.
- **Run an experiment.** `./ods experiment x2` (the independent reading) and
  `./ods experiment d3` (the cold-restart drill) assemble ready-to-hand-off
  packets in `dist/`.
- **Share.** `./ods sync`. If it reports a journal conflict, that is H5 —
  a registered experimental result. Capture it before resolving.

## Standing locks (read before building on anything)

`research/THEORY-001-the-discovery-engine.md` §11: nothing is built on the
theory until experiment X2 returns. `research/CHALLENGE-001/-002` are held
under the same lock. The ratification rule does not exist yet (RFC-003
Q-f); nothing in this repository is canon.

License: see `LICENSE`.
