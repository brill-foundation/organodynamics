# The Laboratory Protocol — frozen 2026-07-12

## Status

**FROZEN.** Received from the Reality seat on 2026-07-12 (mandate preserved as
CAB-008). From that date: no new constitutional principles, no new obligations,
no new architectural layers, no new abstractions — unless *implementation*
produces explicit engineering evidence that this protocol is insufficient. The
burden of proof is reversed: implementation must justify architectural change.
Reality is the reviewer.

## The five obligations

Every Participant owes the Laboratory:

1. **Identity**
2. **Grounding**
3. **Provenance**
4. **Explicit Judgment**
5. **Sealing**

A sixth candidate (Continuity) was eliminated during reduction because it
emerges from the interaction of the five. The reduction is complete.

## Engineering interpretations (provisional, challengeable)

The obligations were received as names. The Record holds no authoritative
definitions beyond them; the definitions below are **engineering
interpretations** made under engineering authority, mapped to the corpus, and
recorded so they can be challenged without archaeology. They are implementation
law, not constitutional text. (This gap is also recorded as an open Unknown in
the Laboratory's own log.)

1. **Identity** — every Participant and every contribution possesses one
   permanent identity (P-002, Axiom 1). Operationally: a Participant registers
   an identity before contributing; an unregistered actor cannot enter the
   record; identities are never reassigned.
2. **Grounding** — no claim floats free (P-009/P-010/P-011: observation is
   separate from, and prior to, interpretation). Operationally: every assertion
   declares what grounds it — an **observation** in the record, a cited
   **source**, a **derivation** from existing record objects, or an explicit
   admission of **conjecture**. Conjecture is legal; silent conjecture is not.
3. **Provenance** — every change to the record carries who and why (P-008,
   Axiom 5). Operationally: no event without an actor and an intention;
   constitutional time is the event sequence, clock time is context.
4. **Explicit Judgment** — conclusions are first-class recorded acts, never
   side effects (P-010, P-013). Operationally: a Judgment states its
   conclusion, its reasoning, and the record objects it rests on; a judgment
   without reasoning is invalid.
5. **Sealing** — work is closed by an explicit act that makes the record
   tamper-evident and continuable (P-006 immutability; Axiom 3). Operationally:
   a departing Participant seals the session with a summary; the seal binds the
   hash of the chain it closes; verification is public and mechanical. The
   Record (git) is the external anchor of seals.

**Continuity, derived not owed:** identity (1) + provenance (3) + seals (5)
over an append-only chain yield continuity without a sixth obligation — which
is why it was eliminated.

## Passivity clause

The Laboratory does not orchestrate Participants, schedule work, or know who
arrives next. It only preserves reality. Any implementation that gives the
Laboratory initiative violates this protocol.
