# The Rotating Table — an interaction model

Status: **candidate interaction model**, under implementation. Not an RFC, not a
constitutional promotion, not new ontology. This document translates a surviving
Reading into how the laboratory could *behave*. It is written to be built toward,
not contemplated. Where implementation exposed a contradiction, it is stopped and
reported (§7), not smoothed.

---

## 0. The one-line claim

The rotating table is **not a new model**. It is two Readings already earned this
cycle, fused into a single interaction primitive:

- **the table is the forge** — the alive, liquid space where perspectives *operate on*
  an idea (Discovery Space);
- **the shelf is the kernel** — durable, committed, recallable memory (the append-only
  Record);
- **rotation** is changing which operation is applied to a fixed specimen;
- **the idea** at the center is a Representation with confidence and a lifecycle.

If that fusion holds, the model earns its place by *replacing* concepts, never by
adding them (§2).

---

## 1. What it replaces (not adds)

| Existing product concept | Replaced by | Why it is a replacement, not an addition |
|---|---|---|
| Folder / file tree | **Active tables** | You navigate ideas *being worked on*, not documents waiting to be opened. |
| Opening a document | **Sitting at a table** | The idea is already live and mid-operation; there is nothing to "open." |
| User / agent as owner | **Perspective (a seat)** | No one owns the idea; each seat contributes a different *operation*. The idea owns the center. |
| Message / handoff between agents | **Rotation (the pedal)** | Nothing is handed to anyone. The specimen stays put; the *operation applied to it* changes. |
| Archive / storage | **The shelf** | Living memory: committed but recallable, not cold storage. |
| Reopening a file | **Return from shelf** | An idea comes back to a *new* table when reality changes; the shelf entry itself is immutable (§4). |

The test for "replacement, not addition": if a concept below could coexist with the
table, the model has failed and is just another feature. None of the six can — each
row is an either/or. That is the evidence the model reduces rather than accretes.

---

## 2. Mapping to primitives already in the repository

Brief, by reference — this is not a re-derivation.

- **Idea** = Representation (RFC-001 §4): first-order, bears confidence, has a lifecycle.
- **Table** = the forge (Discovery Space Reading): liquid, un-load-bearing, safe to be
  wrong, safe to contradict.
- **Seat / perspective** = an *operation*, i.e. **authorship**, not observation — see the
  correction in §7.C.
- **Pedal / rotation** = the unfolding of a directed Inquiry (RFC-002) one perspective at
  a time; "diminishing returns" is one perspective's termination condition.
- **Shelf** = the kernel (append-only Record): committed, non-renegotiable, recallable.
- **Placing on the shelf** = crossing the membrane (Discovery→Kernel).
- **Return from shelf → new table** = supersession-with-lineage (RFC-001 §5.5 relations):
  the old shelf entry is preserved; a new table produces a successor.

---

## 3. Object model

Six objects. Nothing else is introduced.

```
IDEA          the specimen at the center. Immutable identity, evolving content while
              on a table. Carries: confidence, lifecycle-state, lineage.

TABLE         a live workspace holding exactly one IDEA and N SEATS. A table is in the
              forge: its contents are liquid and not yet citable by anything outside it.

SEAT          a perspective = one operation that may be applied to the IDEA.
              A seat is a role, not a person; the same person may occupy different
              seats at different tables. A seat NEVER owns the idea.

ROTATION      the act of changing which SEAT is currently operating. Triggered by
              "diminishing returns" on the active seat. Preserves the idea; changes
              only the operation. (The "pedal.")

SHELF         the kernel. Holds committed IDEAS as immutable entries with full lineage.
              "Living" = entries can reactivate (§4), not that entries mutate.

RETURN        opening a NEW table seeded by a shelf entry, when reality changes. The
              shelf entry is unchanged; the new table's result supersedes it.
```

Invariant (from the forge/kernel Reading): **content on a TABLE is causally inert** —
nothing outside the table may cite it. Only crossing to the SHELF makes an idea
citable, dependable, challengeable.

---

## 4. Idea lifecycle (conceptual state machine)

```
                 arrives
                    │
                    ▼
              ┌───────────┐   rotate (pedal)      an operation is applied;
        ┌────►│  ON TABLE │──────────┐            idea content evolves; still liquid
        │     └───────────┘◄─────────┘
        │           │
        │           │ judged mature  ── STOP: who judges? see §7.B
        │           ▼
        │     ┌───────────┐
        │     │  CROSSING │   the membrane. append-only commit. what crosses?
        │     │ (commit)  │   ── STOP: the whole idea + tensions, or a reduction? §7.A
        │     └───────────┘
        │           │
        │           ▼
        │     ┌───────────┐
        │     │ ON SHELF  │   immutable, cited, part of durable memory
        │     └───────────┘
        │           │
        │           │ reality changes (Adi's reality seat)
        └───────────┘  RETURN: new table, seeded by the shelf entry,
             (as a NEW table,   result supersedes with lineage — shelf entry untouched
              not an edit)
```

Note the two black boxes on the critical path (`judged mature`, `CROSSING`). Both are
**stopped**, not resolved (§7). Everything else in the machine is specifiable now.

---

## 5. Interaction sketches (conceptual, not visual)

### 5.1 Navigating active tables (replaces the folder tree)

The home surface is not a file list. It is the set of **live tables**, each showing its
idea, its currently-active seat, and its temperature (how recently it rotated).

```
   ● Idea: "necessary vs unnecessary friction"      seat: Reduction      ~ hot
   ● Idea: "the shelf is living memory"              seat: Systems        ~ warm
   ○ Idea: "host dissolves into place"              (on shelf)           ~ resting
   ● Idea: "no automation without documented pain"   seat: Reality        ~ hot
```

You enter a table, you do not open a document. A shelved idea (○) is reachable but at
rest; entering it offers RETURN, not resume.

### 5.2 A single table (the primary surface)

The idea is the center. Prior operations are visible as **strata around it** — not a
chat log, but the accreted results of each rotation, each labeled by the seat that
produced it. The active seat operates at the live edge. The pedal is present but not
pressed by the surface itself (§7.B).

```
            ┌─────────── strata: prior operations, by seat ───────────┐
            │  Reduction: "smallest primitive is the membrane, not…"   │
            │  Translation: "feels like a table that rotates…"         │
            │                                                          │
            │                    ╔══════════════╗                      │
            │                    ║   THE IDEA    ║   ◄ center, owned    │
            │                    ║  (current)    ║     by no seat       │
            │                    ╚══════════════╝                      │
            │                                                          │
            │  ▸ active seat: SYSTEMS  — operating now                 │
            └──────────────────────────────[ pedal ]──[ to shelf? ]───┘
```

Two disagreeing strata are **kept side by side**, never merged (disagreement is
information). This is the surface-level enforcement of "no aggregation" — and it is
exactly what §7.A puts in tension with "the idea matures."

### 5.3 The shelf (replaces the archive)

Not a list of dead files. A field of committed ideas, each carrying its lineage and its
tensions intact. Shelf entries are readable, citable, and **reactivatable** — a resting
idea lights up when reality changes around it, inviting RETURN.

```
   [ idea ]──lineage──[ idea ]        each entry: immutable content,
       │                  │           full record of the operations that
   (tension held)     (superseded by ►)   produced it, and any held tensions
       │
   [ idea ]  ← reactivatable: reality shifted; RETURN available
```

### 5.4 Rotation (replaces the message/handoff)

Pressing the pedal does not move the idea to another actor. It swaps the *lens*:

```
   before:  IDEA ← [Reduction operating]
   pedal →
   after:   IDEA ← [Systems operating]      (same idea; new operation; strata grow)
```

No identity changes. No message is sent. The specimen is fixed; the operation rotates.

---

## 6. The four seats as operations (concrete)

Each seat is defined by *what it does to the idea*, not by who sits in it.

- **Reality (Adi seat).** Tests the idea against reality; judges maturity; judges when
  reality must replace theory. *This seat governs transitions, not content* — which is
  precisely the problem flagged in §7.B.
- **Reduction (Claude seat).** Removes unnecessary layers; searches for the smallest
  stable primitive. *This operation pushes toward convergence* — which collides with
  "no aggregation" at the moment of shelving (§7.A).
- **Systems (Gemini seat).** Long-term failure analysis; hidden systemic risk; scale.
- **Translation (ChatGPT seat).** Turns abstractions into places, rituals, journeys,
  language; makes the idea inhabitable.

The seats are peers *as operations*. They are not peers *as authorities over the
table's transitions* — and the model claims they are. See §7.B.

---

## 7. Contradictions implementation exposed — STOP, not resolved

Per the directive: surfaced, not silently reconciled. These block full specification of
the two black boxes in §4. They are decisions for reality (Adi), not for this document.

### 7.A — "No aggregation" vs. "the idea matures"

The constitution forbids collapsing perspectives into one scalar; disagreement is
information (RFC-001 §6). But "the idea leaves the table when *mature*" implies
some integration. **What crosses the membrane onto the shelf?**

- If a *synthesized, reduced* idea crosses → that is aggregation. Forbidden.
- If the *idea plus all operations plus unresolved tensions* crosses → then "maturity"
  is not convergence but **fully-mapped disagreement**, which contradicts the ordinary
  intuition that a shelved idea is "settled."

Sharpened: the **Reduction seat's whole job is convergence** ("smallest stable
primitive"), while the **constitution demands preserved divergence**. Two things this
model treats as native pull in opposite directions at the exact moment of shelving.
**Unresolved. Reality must decide what maturity means before CROSSING can be built.**

### 7.B — "Non-hierarchical" vs. "Adi decides when to rotate / mature"

The model asserts "none of these roles are hierarchical." But it also gives the Reality
seat authority over the table's *transitions*: when to rotate, when to shelve, when to
return. **Operating on content and governing transitions are different kinds of act.**
A seat that governs when the table turns is a control structure over the table — a
temporal hierarchy — and RFC-002 §4 explicitly forbids an authority layer above the
process.

Either the maturity/rotation judgment is *itself just another operation any seat may
contest* (peer — but then "Adi decides" is false), or it is a governing seat
(hierarchy — but then "non-hierarchical" is false). The model currently asserts both.
**Unresolved. Reality must decide whether the pedal has an owner.**

### 7.C — Correction (resolved, reported for transparency)

Tempting mapping: *table = Observatory, seats = Instruments*. It fails. Instruments must
be **minimally disturbing** — they observe without redirecting (RFC-001 §3, §5.3). The
seats **transform** the idea (Reduction removes, Translation re-expresses) — they are
**authorship**, not observation. Therefore the table is the **forge**, and seats are
**operations**, not Instruments. The Observatory (non-disturbing readings) is a
*different* thing that could watch tables from outside; it is not the table. This one is
resolved with reasoning, not silently — recorded here so the resolution is legible.

---

## 8. Status

- **Survives implementation:** the object model (§3), the replacement claim (§2), the
  navigation and table/shelf/rotation surfaces (§5), the forge/kernel fusion (§0), and
  the operation-vs-observation correction (§7.C).
- **Blocked pending reality's decision:** the two membrane-adjacent black boxes — *what
  crosses* (§7.A) and *who turns the table* (§7.B). Both sit on the critical path
  between table and shelf. The model can be inhabited (tables, seats, rotation, strata)
  before they are decided; it cannot be *committed to shelf* until they are.

The model is alive enough to enter. It is not yet complete enough to preserve.
