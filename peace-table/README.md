# The Peace Table layer

A product foundation, a staged architecture, a decision register and two proposed
ADRs for **the Peace Table** — a system for large-group sensemaking and decisions.
They were written in August 2026 in a separate, private repository (`garnet`) and
moved here unchanged, so that this layer and the constitutional corpus it belongs
to live under one roof. The documents are in Hebrew.

Nothing here is approved operational policy, and nothing here is implemented yet
beyond the one prototype named below.

## What is here

- [`foundation/`](foundation/) — the versioned product foundation. `v0.3` is the
  current working version; `v0.2` is the immutable prior version it supersedes;
  `v0.1` preserves the original operator handoff as source material. See
  [`foundation/README.md`](foundation/README.md) for what changed between them.
- [`peace-table-architecture-v0-he.md`](peace-table-architecture-v0-he.md) — the
  proposed architecture: domain boundaries, data model, state machines, the MVP
  boundary, and a seven-stage build plan. **None of the seven stages has been
  built.** Stage 0's exit gate is not met: there is no glossary, no domain
  schemas, and no discussion fixture to run a scenario against.
- [`peace-table-decision-register-v0-he.md`](peace-table-decision-register-v0-he.md)
  — ADR-style register of the ten pre-pilot product decisions. Three are
  `Decided`; seven, including PTDR-02 and PTDR-09, remain `Open`.
- [`peace-table-mandate-authority-v0-he.md`](peace-table-mandate-authority-v0-he.md)
  — **Proposed** ADR for mandate-based, dual-model delegated operational
  authority. Its constitutional threshold question was resolved and adopted as
  foundation v0.3 §9.1; the operational mechanism itself is not approved, and
  live delegated execution stays blocked.
- [`agent-provider-contract-v0.md`](agent-provider-contract-v0.md) — **Proposed**
  provider-neutral agent/adapter contract. An extensibility boundary only: it
  connects no provider and grants no authority.
- [`prototypes/yard/`](prototypes/yard/) — one screen, opened by double-click.
  Not the product: a behaviour prototype for three promises the documents make —
  a correction that never overwrites, a state line that opens to the exact
  contributions it rests on, and an objection that stays visible while the
  majority agrees around it.

## The open question this move does not answer

This layer arrived with a constitution of its own (`foundation/`), written from
scratch, while the corpus already carries its own constitutional documents and
RFCs. **That is two constitutions for one system, and reconciling them is not
done.** Until it is, read `foundation/` as this layer's own working foundation,
not as a ruling over the corpus — and expect the reconciliation to be written as
explicit decisions, in both directions, rather than settled by which folder a
document happens to sit in.

Four known contradictions belong to that work: the global projection against the
invariant that forbids a total vantage point; a summarising Mirror against "no
aggregation"; a curated, editable record against the rule that the record is
never a document; and speculative status against live operational policy.

## What deliberately stayed in the private repository

The operational side of the same work is not here, by decision:

- the curated working record — 52 verbatim operator quotes, 73 sessions, 401
  events — which is a private working journal, not corpus material;
- the agent coordination machinery (handoff, orchestration, guards) and the
  operating contract `AGENTS.md`, which several documents here reference by name;
- the local control-centre interface;
- the Shadow Mode evaluator's code and fixtures, whose document is not in this
  move because the code stays with it for now.
