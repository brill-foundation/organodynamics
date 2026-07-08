# The Visual Epistemology

⚫ *canonical method · this is how the book means what it shows*

> **The visual language is not a graphic style. It is the book's epistemology.**
> Before you read a word, the medium a passage is drawn in tells you how much to trust
> it. The book demonstrates, on every page, how knowledge becomes trustworthy — because
> it renders each idea in the exact state of maturity the Record can prove it has reached.

This is the discipline turned on its own book. RFC-001 §2 holds that *the tooling is a
theory of what matters*; RFC-004 §5 holds that *every view embodies a theory of what
matters*. A book about a discipline of evolving representations must therefore make the
maturity of its own representations **visible**, or it is lying by uniform typography —
presenting a fresh hypothesis and a survived-a-hundred-challenges invariant in the same
confident black text. This book refuses that lie.

There are **two axes**. The *medium* says how mature a representation is. The *margin*
says what is happening to it.

---

## Axis 1 — The medium: how mature is this?

A representation is drawn in the medium that matches how far it has travelled through the
discovery loop (THEORY-001 §3: *commit → expose → bind consequence → remember*).

| Medium | Token | Epistemic state | In the discipline's terms | Maturity |
|--------|-------|-----------------|---------------------------|----------|
| **Pencil** | ✏️ | hypothesis · exploration · incomplete | a commitment freshly staked, not yet exposed (THEORY-001 M1) | Stage I–II |
| **Blue ink** | 🔵 | has survived challenge | a representation that passed peer exposure (M2→M3) — an RFC that survived review | Stage III |
| **Black ink** | ⚫ | canonical knowledge | ratified under closure (M3 on the rules) — an entrenched invariant | Stage IV |

The medium is applied by **evidence, not by preference**. And applying it honestly to
*this* project produces a striking, true reading:

> ✏️🔵 **Almost nothing in Organodynamics is black ink yet.** The ratification rule does
> not exist (RFC-003 Q-f is open; READING-001 §4.1 found that acceptance currently happens
> only by *continuation*). Nothing has been formally ratified. So the honest palette of the
> Living Edition is mostly **pencil and blue** — ideas staked, some survived challenge,
> none yet canon. The only candidates for black ink are the **seven invariants** the
> constitutional review extracted (and even those are proposed, not ratified). The book
> *shows* this: its later chapters strain toward black and rarely reach it, because the
> discipline itself has not.

That is the visual epistemology doing real work: you can *see*, by counting the black on
the page, that this is a discipline still mostly in ink and pencil — exactly its true
state.

## Axis 2 — The margin: what is happening to this idea?

Over the base medium, three margin marks record epistemic *events*. They can appear at any
maturity, and they are the book's live nervous system.

| Mark | Token | Meaning | In the discipline's terms |
|------|-------|---------|---------------------------|
| **Green** | 🟢 | a genuine insight | a *promotion* (RFC-001 §5.4); a *held tension that birthed a representation* (§5.5); a *discovery* — a survivor that could not have survived before (THEORY-001 §4) |
| **Red** | 🔴 | contradiction · unresolved tension | an *open/active/held tension* (RFC-001 §5.5); a *conflict of law* (READING-001 §4.4); a failure-mode lamp reading high (THEORY-001 §8) |
| **Erasure** | ⌫ ~~struck~~ | an abandoned representation | a *supersession* or *tombstone* (RFC-004 §6.2) — kept, never deleted |

Applied honestly, these too tell the truth about the project:

> 🔴 **Red is abundant and that is health.** The invariant-5 conflict of law (RFC-004 §7 vs
> RFC-005 §2), the open ratification debt (Q-f), the reflexivity trap, and the fact that
> *the loop has never closed* (READING-001 §3.1) are all live red. In this discipline red
> is not danger; it is where the next knowledge comes from — *disagreement is information*
> (RFC-001 §6).
>
> ⌫ **Erasures are almost absent — and that is a registered concern.** READING-001 §3.3
> found the discipline *has never once said no*: zero outright rejections, only
> stratification. So there is little to strike through. The few erasures the book does show
> are *supersessions* — "five kinds" of object (Recovery Ch. 2), "the unity is the Record"
> (Recovery Ch. 7) — never deletions. The scarcity of erasure is itself a reading the book
> makes visible.

## The two axes together — a worked legend

```text
✏️  pencil            a hypothesis just staked; not yet exposed
🔵  blue ink          survived challenge; a working foundation
⚫  black ink         canonical; ratified (rare — almost nothing is, yet)
🟢  green margin      genuine insight / promotion / discovery
🔴  red margin        live tension / contradiction / open debt
⌫  erasure           abandoned, kept as a tombstone (never deleted)
```

A single passage can carry both axes: a **blue-ink paragraph with a red margin** is a
survived-challenge representation that nonetheless holds an open tension — for example,
RFC-004's substrate (blue: it is the working foundation) whose invariant 5 is in live
conflict with RFC-005 (red). The book will show exactly that, and you will know its status
at a glance.

## How this is encoded in plain text

The book lives in version control and must render on GitHub with no build step, where
inline colour is stripped. So the **portable encoding** is:

- **Emoji tokens** (`✏️ 🔵 ⚫ 🟢 🔴 ⌫`) as semantic chips, always paired with a word, so
  meaning never depends on colour perception (accessibility: the token and the label carry
  the meaning; colour, where available, is redundant reinforcement).
- **Callout blockquotes** prefixed with a token + label, e.g. `> 🟢 insight — …`.
- **Erasure** as `~~strikethrough~~` plus the ⌫ mark, so an abandoned line is legible *and*
  visibly kept.

For rich renderers (mdBook, Pandoc, HTML), the same semantics are available as CSS classes
(`.pencil .blue .ink .insight .tension .erased`) carrying the real palette — see
[`theme.css`](theme.css) and [render conventions](02-render-conventions.md). The colour is
*content*; the build must preserve it.

## Why this is semantic, not decorative

Every mark answers a question the reader would otherwise have to ask, and answers it from
the Record:

- *How sure is this?* → the medium (pencil / blue / black).
- *What is alive in it?* → the margin (green insight / red tension).
- *What was given up?* → the erasure (struck, but kept).
- *Says who, and when?* → the provenance footer (every chapter) + the
  [journal](../../../journal/journal.jsonl).

The book looks like what it knows. Where the discipline is sure, the page is inked and
still; where it is searching, the page is pencilled and marginal; where it is in tension,
the page runs red. Reading the book, you watch knowledge form — and you can never mistake a
guess for a law, because they do not look alike.

---

→ Next: how the medium **matures across the book** — [The Maturation Gradient](01-maturation-gradient.md).
→ Encoding details and the palette — [Render Conventions](02-render-conventions.md) · [`theme.css`](theme.css).
