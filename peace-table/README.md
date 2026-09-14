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

- the curated working record — 52 verbatim operator quotes, 73 sessions and 401
  events **as counted when the move was made**, and larger since — which is a
  private working journal, not corpus material;
- the agent coordination machinery (handoff, orchestration, guards) and the
  operating contract `AGENTS.md`, which several documents here reference by name;
- the local control-centre interface;
- the Shadow Mode evaluator's code and fixtures, whose document is not in this
  move because the code stays with it for now;
- **`docs/peace-table-v0.md`, the ratified product constitution for the human
  Peace Table** — which did not move with the rest and is named here because it
  should have been. It is the one document about this layer carrying `ratified`
  status while most of what moved is `Proposed` or a working foundation, and it
  holds the operational test this layer is judged by: *would a Cell that remained
  fully disagreed receive framing and prominence equal to a Cell that fully
  agreed?* Whether it belongs under this roof is an open question, not a
  decision; that it is unreachable from here was an oversight.

## Where the references in these documents point

Several documents in this folder cite issue numbers and a file that do not exist
in this repository. They are in the private operational repository, and until
now nothing here said so — which is a small omission that has already caused
real errors in reading.

| Reference as written | Where it actually is |
|---|---|
| `Issue #50`, `#57`, `#60` — the Session Contracts cited in the decision register and the mandate ADR | `brill-foundation/garnet`, issues of those numbers. This repository has only issues #3, #4 and #5, so the numbers cannot resolve here. |
| `AGENTS.md` — the operating contract cited by the mandate ADR and the agent/provider contract | `brill-foundation/garnet`, repository root. |
| `docs/peace-table-v0.md` — the ratified product constitution | `brill-foundation/garnet`, and see the entry above. |

Going the other way, the open architectural questions this layer raises are
recorded here as RFCs, which is where questions in this Record live:
[RFC-005](../rfcs/RFC-005-mode-or-gate.md) asks whether the four-step procedure
the mandate ADR specifies is a gate on action or the mode by which a shared
position is formed, and [RFC-006](../rfcs/RFC-006-the-first-table.md) asks
whether the table that builds the others is governed by their rules. Both are
open. [RFC-004](../rfcs/RFC-004-two-constitutions.md), which is the Record's
standing question about how many constitutions there are, predates this layer's
arrival by seven weeks and does not mention it.
