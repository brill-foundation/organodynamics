# The Rotating Table — an interaction model

Status: **candidate interaction model**, under implementation. Not an RFC, not a
constitutional promotion, not new ontology. This document translates a surviving
Reading into how the laboratory could *behave*. It is written to be built toward,
not contemplated. Where implementation exposed a contradiction, it is stopped and
reported (§7), not smoothed.

---

## 0. The one-line claim

The rotating table is **not a new model**. It is Readings already earned this
cycle, fused into a single interaction primitive:

- **the table is the forge** — the alive, liquid space where perspectives *operate on*
  an idea (Discovery Space);
- **the shelf is the kernel** — durable, committed, recallable memory (the append-only
  Record);
- **rotation** is changing which operation is applied to a fixed specimen;
- **the idea** at the center is a Representation with confidence and a lifecycle;
- **the table is layered, not flat** — a shared idea (L3), the shared *state* of the
  inquiry (L2), and each seat's private workspace (L1). "Communication" was only ever a
  projection of L2; the middle layer is *state*, not messaging (§3).

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
| Message log / chat thread | **Shared State (L2)** | Messages are one projection of the inquiry's current condition; the state exists whether or not anything is said (§3). |

The test for "replacement, not addition": if a concept below could coexist with the
table, the model has failed and is just another feature. None of the seven can — each
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
- **Shared state (L2)** = a *reading* of the Record, `Instrument(Record, now)`
  (RFC-001 §5.6–5.7): the inquiry's current condition, re-derivable, never hand-authored.
  Communication is one projection of it, not the layer itself.
- **Private workspace (L1)** = a seat's local forge — where an operation happens before
  it *surfaces* into shared state. This is where perspectives diverge; L2 is where they
  synchronize.

---

## 3. Object model

Three vertical layers, eight objects. The table is not flat — it is a stack.

```
L3  SHARED IDEA     the specimen at the center. Shared. Immutable identity, evolving
                    content while on a table. Carries confidence, lifecycle-state,
                    lineage. (= IDEA)

L2  SHARED STATE    the current condition of the inquiry, shared and live: current
                    tensions, active requests, blocked dependencies, waiting-for-
                    reality, current experiment, observations needing attention.
                    A READING of the Record — Instrument(Record, now) — re-derivable,
                    never hand-authored. Communication is ONE projection of it, not
                    the layer itself. Holds tensions AS tensions; never a consensus
                    scalar (no aggregation, RFC-001 §6).

L1  WORKSPACES      one PRIVATE space per active seat — the seat's local forge, where
                    its operation happens before it SURFACES as shared state. Liquid,
                    private, invisible to others until surfaced. This is where
                    perspectives diverge; L2 is where they synchronize.

Spanning objects:

TABLE     the shared face of a live inquiry = L3 idea + L2 shared state, sat around by
          seats whose private work lives in L1. In the forge: liquid, not yet citable
          outside itself.

SEAT      a perspective = one operation. Works in its L1 WORKSPACE and SURFACES results
          into L2 SHARED STATE. A role, not a person; the same person may occupy
          different seats at different tables. A seat NEVER owns the idea.

ROTATION  changing which SEAT is currently operating on the shared face. Triggered by
          "diminishing returns." Preserves the idea; changes only the operation.
          (The "pedal.")

SHELF     the kernel. Committed IDEAS as immutable entries with full lineage.
          "Living" = entries reactivate (§4), not that they mutate.

RETURN    opening a NEW table seeded by a shelf entry when reality changes; the shelf
          entry is unchanged, the new result supersedes it.
```

Invariant (from the forge/kernel Reading): **content in L1 and on the L2/L3 table face
is causally inert** — nothing outside may cite it. Only crossing to the SHELF makes an
idea citable, dependable, challengeable.

**Why three layers and not one flat surface.** L1 is where perspectives *diverge*; L2 is
where they *synchronize*. State divergence — the failure that triggered SYNC STOP — is
L1 workspaces evolving faster than they surface to L2. This is why CURRENT_STATE.md
became load-bearing: it was already acting as the L2 cache holding divergence in check.
The middle layer was never "communication"; it was the shared state that keeps private
forges from becoming separate laboratories.

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

The table shows two shared layers: the **idea** (L3) at the center and the **shared
state** (L2) around it — the inquiry's *current* condition, not its transcript. Each
seat's private work (L1) is off-surface until it *surfaces* into shared state. Past
operations (history) recede as depth behind the live state — they are Record, not
current condition.

```
            ┌──────────── L2 SHARED STATE (current condition) ─────────┐
            │  ⚡ tension: "maturity = convergence?"  (held, §7.A)      │
            │  ⛔ blocked: CROSSING — who turns the table? (§7.B)       │
            │  ⏳ waiting for reality: the friction experiment         │
            │                                                          │
            │                    ╔══════════════╗                      │
            │                    ║  L3  THE IDEA ║   ◄ center, owned    │
            │                    ║   (current)   ║     by no seat       │
            │                    ╚══════════════╝                      │
            │                                                          │
            │  ▸ active seat: SYSTEMS — operating in its L1 workspace,  │
            │    surfacing observations into shared state above        │
            └──────────────────────[ pedal ]──[ to shelf? ]───────────┘
             (history: prior operations recede as depth behind L2)
```

Tensions in L2 are **kept as tensions**, never merged into a status line (disagreement
is information). This is the surface-level guarantee that "Shared State" does not
silently become consensus — the exact failure §7.A warns of, and the reason the middle
layer must be *state* and not a single summary.

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
   after:   IDEA ← [Systems operating]      (same idea; new operation; shared state grows)
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

The L2/L1 clarification (§3) *sharpens* this, it does not soften it. "Who may surface a
private workspace (L1) into shared state (L2)" is the **same** question as "who presses
the pedal." If any seat may surface freely, shared state is uncontrolled and can diverge
faster than it synchronizes — the SYNC STOP failure itself. If only one seat may
authorize surfacing, that seat governs L2 — the hierarchy the model denies. Renaming the
layer to *Shared State* made the layer honest about what it holds; it did **not** answer
who controls the crossing into it. Same contradiction, now with a sharper name.

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

- **Survives implementation:** the three-layer object model (§3, L3 idea / L2 shared
  state / L1 private workspaces), the replacement claim (§2), the navigation and
  table/shelf/rotation surfaces (§5), the forge/kernel fusion (§0), and the
  operation-vs-observation correction (§7.C).
- **Vocabulary corrected (reality-supported):** the middle layer is **Shared State**, not
  "Communication" — communication is one projection of it. CURRENT_STATE.md was already
  behaving as this layer during SYNC STOP; that is empirical support, not theory.
- **Blocked pending reality's decision:** the two membrane-adjacent black boxes — *what
  crosses* (§7.A) and *who turns the table* (§7.B). Both sit on the critical path between
  table and shelf. The L2/L1 split **sharpened** §7.B: "who may surface L1 into L2" is the
  pedal question. The model can be inhabited (tables, seats, rotation, shared state)
  before they are decided; it cannot be *committed to shelf* until they are.

The model is alive enough to enter. It is not yet complete enough to preserve.
