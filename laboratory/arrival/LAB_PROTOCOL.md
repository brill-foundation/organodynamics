# The Laboratory Protocol, explained

This document explains the Protocol in four clearly separated layers, from
what binds absolutely to what is merely today's machinery. The frozen
original is [`../PROTOCOL.md`](../PROTOCOL.md); if this explanation and that
document ever disagree, the frozen document wins.

---

## Layer 1 — The Protocol (constitutional; frozen)

Frozen 2026-07-12 by mandate of the Laboratory's steward (preserved in the
Cabinet as CAB-008 and inside the record itself). Its entire normative
content:

> Every Participant owes the Laboratory five obligations:
> **Identity · Grounding · Provenance · Explicit Judgment · Sealing.**

Freeze terms: no new constitutional principles, no new obligations, no new
architectural layers, no new abstractions — unless *implementation* produces
explicit engineering evidence that this protocol is insufficient. The burden
of proof is reversed: architecture no longer justifies implementation;
implementation must justify architectural change. A sixth candidate
obligation (Continuity) was eliminated during reduction because it emerges
from the five. The Laboratory itself is bound by a passivity clause: it
preserves reality and does nothing else — no orchestration, no scheduling,
no initiative.

**This layer cannot be changed by any Participant, including the engineers.**

## Layer 2 — The Obligations (constitutional in force; explained)

What each obligation demands of you:

1. **Identity** — before contributing, you register who you are, once, under
   an identity that is permanent and never reassigned. Anonymous or borrowed
   identity is impossible by construction.
2. **Grounding** — every claim you assert declares what it stands on.
   Admitting a claim is conjecture satisfies the obligation; concealing that
   it is conjecture violates it.
3. **Provenance** — every act you take carries your identity and your stated
   intention. There is no way to act here without saying why.
4. **Explicit Judgment** — when you conclude something, the conclusion, its
   reasoning, and what it rests on are recorded together. A conclusion
   without reasoning is refused.
5. **Sealing** — when you finish, you close your work with a summary,
   binding the record cryptographically and narratively. Departure without
   sealing leaves visibly unfinished work (recoverable — see
   [TROUBLESHOOTING.md](TROUBLESHOOTING.md)).

## Layer 3 — Engineering interpretation (adopted; challengeable)

The five obligations arrived as **names**. Their operational definitions —
what exactly counts as grounding, what a seal binds, what registration means
— were adopted as engineering interpretations on 2026-07-12, recorded in
[`../PROTOCOL.md`](../PROTOCOL.md), and mapped to the Organodynamics corpus
(primitives P-002, P-006, P-008–P-011, P-013). This gap is held open inside
the record itself as an unresolved unknown: the interpretations are
provisional until the steward confirms or corrects them, and any Participant
may challenge them with recorded reasoning.

**This layer binds in practice but is revisable through the record.**

## Layer 4 — Implementation (engineering; replaceable)

Everything you actually touch is implementation, and none of it is the
Protocol:

- the **Kernel** (`src/kernel/`) — an append-only, hash-chained event log
  from which all state is derived by replay; it enforces the obligations
  mechanically;
- the **shell** (`src/laboratory/`) — persistence to a JSONL file, the
  refusal to fork history, preservation/restore, the backlog view;
- the **tools** (`tools/lab.js`, `tools/backlog.js`) and the browser room —
  conveniences, never gatekeepers.

Every one of these is replaceable. A future implementation in a different
language, with different storage, is welcome — provided the five obligations
survive the replacement. The record's *meaning* lives in its events, not in
this code.

**This layer changes freely under ordinary engineering judgment.**

---

## How to tell the layers apart, always

Ask: *could an engineer change this without anyone's permission?*
Implementation — yes (Layer 4). Interpretation — yes, but only through a
recorded, challengeable act (Layer 3). Obligations and the freeze — no
(Layers 1–2): changing those requires the constitutional process outside
engineering, triggered only by implementation evidence that the Protocol is
insufficient. No such evidence exists as of this writing.
