# Render Conventions

⚫ *canonical method · the exact tokens, and how they survive every renderer*

The visual epistemology must render **three ways** without losing meaning: raw Markdown on
GitHub (colour stripped), a rich HTML/mdBook build (colour present), and a plain-text editor
(tokens only). The rule that makes this work: **meaning lives in the token and the label,
never in colour alone.** Colour is redundant reinforcement for renderers that support it.

---

## 1. The token set (portable — use these everywhere)

| Concept | Token | Label word | Markdown form |
|---------|-------|-----------|---------------|
| Pencil — hypothesis | `✏️` | *pencil* / *hypothesis* | `> ✏️ hypothesis — …` |
| Blue ink — survived challenge | `🔵` | *survived* / *blue* | `> 🔵 survived — …` |
| Black ink — canonical | `⚫` | *canonical* | `> ⚫ canonical — …` |
| Green — insight | `🟢` | *insight* | `> 🟢 insight — …` |
| Red — tension | `🔴` | *tension* | `> 🔴 tension — …` |
| Erasure — abandoned | `⌫` | *erased* | `> ⌫ erased — ~~old claim~~ (kept as tombstone)` |

**Chapter header banner.** Every Living chapter opens with a one-line medium banner and a
maturity meter, e.g.:

```text
🔵 blue ink · this chapter has survived challenge; it is not yet canon
Medium  ✏️──🔵──⚫     reaches: 🔵   ·   live margins: 🔴 ×2  🟢 ×3  ⌫ ×1
```

**Inline emphasis.** Within prose, wrap a phrase's status with a leading token:
`the substrate is the working foundation 🔵` or `this remains undecided ✏️`.

**Erasures** are always `~~struck~~` **and** kept visible with the ⌫ mark and a reason —
never deleted, matching the append-only invariant (RFC-004 §7.2):

> ⌫ erased — ~~"five kinds of object"~~ → superseded by the unstated count (Recovery Ch. 2).
> Reason: revision 2 falsified the number. Kept as tombstone.

## 2. The three narrative layers (Living Edition)

Each Living chapter carries three layers, marked with a consistent sigil so a reader can
follow just one voice through the whole book if they wish:

| Layer | Sigil | What it is |
|-------|-------|-----------|
| **Technical** | `▣ TECHNICAL` | the engineering explanation — the architecture, recovered from the RFCs |
| **Human** | `◇ HUMAN` | the intuitive, experiential telling — why it matters to a person |
| **Chronicle** | `⏱ CHRONICLE` | what actually happened — dated, provenanced testimony from the journal |

Layers are introduced with a section rule, e.g. `### ▣ Technical` / `### ◇ Human` /
`### ⏱ Chronicle`.

## 3. The rich-render mapping (mdBook / HTML / Pandoc)

When the book is built to HTML, the same semantics gain real colour via CSS classes. A build
step (or hand-authored HTML span) maps token → class:

```html
<span class="pencil">a hypothesis</span>
<span class="blue">survived challenge</span>
<span class="ink">canonical</span>
<span class="insight">a genuine insight</span>
<span class="tension">an open tension</span>
<span class="erased">an abandoned claim</span>
```

The palette lives in [`theme.css`](theme.css). It is theme-aware (light/dark) and
colour-blind-safe by construction: because every coloured span also carries its token/label,
the colour never carries meaning alone. `theme.css` also styles the layer sigils and the
maturity meter.

> ⚫ canonical — treat any built HTML/PDF as a **cached reading** in the discipline's own
> sense (RFC-001 §5.7, generalised by RFC-004 §5: *a view is never authoritative*). Never
> hand-edit the output; always regenerate from the Markdown source. The Markdown is the
> representation; the HTML is a view of it.

## 4. Diagram conventions by medium

Diagrams obey the same gradient (see [maturation](01-maturation-gradient.md)):

- **✏️ pencil** — fenced `text` construction blocks (a `text`-typed code fence): hand-drawn
  feel, `····` for not-yet-inked lines, `←` margin arrows, `?` on unresolved joins.
- **🔵 blue ink** — Mermaid with a comment `%% 🔵` and *some* dashed edges (`-.->`) where a
  link is provisional.
- **⚫ black ink** — clean Mermaid (`%% ⚫`), solid edges, or precise tables.
- Margin events are annotated in-diagram with the token (`🔴`, `🟢`).

## 5. Accessibility checklist (must hold)

1. Every colour is paired with a token **and** a word. Remove all colour → meaning intact.
2. Erasures use `~~strikethrough~~`, legible to screen readers as struck text, plus the ⌫
   label.
3. Diagrams carry a text caption stating what they show and their medium.
4. `theme.css` colours meet WCAG AA contrast on both light and dark backgrounds; the tokens
   are the fallback where they do not.

---

→ Back: [The Maturation Gradient](01-maturation-gradient.md) · [The Visual Epistemology](00-epistemology.md).
→ The palette: [`theme.css`](theme.css).
