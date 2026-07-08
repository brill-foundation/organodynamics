<!-- 🔵 apparatus · how to audit the book against the record -->

# Reading the Record — how to audit this book

*The book is a lens; the repository is the sky. Every doctrinal claim here can be checked
against the source of truth. This page shows how.*

The discipline's deepest principle is that the Record — not the book — is authoritative
(RFC-001 §7; RFC-004 §8). So the Living Edition is built to be *audited*, not merely trusted.
Three sources let you verify anything in it.

## 1. The RFCs — verbatim canon

Every architectural claim cites an RFC section (e.g. `RFC-004 §7`). The RFCs live verbatim in
[`/rfcs`](../../../rfcs) and the research documents in [`/research`](../../../research):

- `rfcs/RFC-000-development-manifest.md` · `rfcs/RFC-003-meta-review.md`
- `rfcs/RFC-004-the-substrate.md` · `rfcs/RFC-005-recognition.md`
- `reviews/RFC-000-constitutional-review.md`
- `research/THEORY-001-the-discovery-engine.md` · `research/READING-001-the-emergent-process.md`
- `research/SEASONS.md` · `research/SEASON-1-DOORWAY-PLAN.md` · `research/EXPERIMENT-00*.md`

Open the cited section and compare. If the book and the RFC ever disagree, **the RFC wins.**

## 2. The journal — the provenanced history

Every Chronicle claim cites a journal event id (e.g. `journal:3e5101a7`). The journal is
[`/journal/journal.jsonl`](../../../journal/journal.jsonl): an append-only, hash-chained list
of events, each `(time, process, content, references)`. To walk any idea's lineage:

```sh
./ods setup                 # one time (records who you are, locally)
./ods log                   # the most recent events
./ods lineage 3e5101a7      # the ancestry of any event (how the idea evolved)
./ods status                # chain health + Season 1 readings
```

The chain is tamper-evident: if any past event were altered, `./ods status` would report the
break. This is the substrate's promise (RFC-004 invariant 2) made checkable.

> ⏱ testimony vs constitutive — when a journal event is marked `[testimony: …]`, the record
> proves the event was *reported*, not that its content was *true* (RFC-001 §7). The Chronicle
> preserves that distinction; you should too when auditing.

## 3. The commits — the book's own history

Structural claims about the book itself (the recovery, the seal, the merge, the fork) cite
commit hashes (e.g. `commit:c040872`). Verify with `git show <hash>` or
`git log --oneline`. The Recovery Edition's frozen text is auditable against `commit:86dec66`
(see its [SEAL](../../recovery-edition/SEAL.md)).

## What you cannot audit — and why that is recorded

Some things in the record are irreducibly external: the ChatGPT and Gemini reviews reached the
project through a human relay and exist only as *testimony* (the journal proves they were
reported, not what they said — RFC-001 §7). The book marks every such claim as testimony and
never launders it into fact. That the relay is *itself* an uninstrumented editorial organ is a
finding the discipline recorded against itself (READING-001 §4.3), not a flaw the book hides.

---

→ [Provenance Map](provenance-map.md) · [The Chronicle](../chronicle/00-chronicle.md) ·
project [README](../../../README.md) → *The laboratory*
