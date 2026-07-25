# The Brill Experience Architecture

*Distilled from the `Organodynamics 006` workshop (2026‑07). A **transition
package**: it exists so the next workshop can begin from stable ground rather than
re‑deriving weeks of reasoning.*

> **Layer discipline.** This is a **Brill implementation** document — the
> *lived‑experience* layer. It is **not** part of the constitutional corpus, not an
> RFC, not a CAB. It **adds nothing to the constitutional grammar.** The world's
> spatial grammar remains exactly `Place` + `within()`; everything here frames that
> grammar without touching it. If anything in this document ever contradicts the
> corpus, the corpus is right and this is stale.

**The one‑line thesis discovered this workshop:**
*Brill is not a website. It is a living **World** viewed through a permanent
personal **Home**.*

---

## 1. The recognitions that became stable

Stated as recognitions, not as the order they were found. Each earned its place by
being a recognition of something already implied — not an invention.

- **The minimal spatial grammar is one relation.** The entire Brill *World* is
  generated from a single atom, the **Place** (somewhere you can *be* and *observe
  from*), and a single relation, **`within(A, B)`** (A is contained by B), a partial
  order permitting more than one container (a DAG, not a strict tree). The **World**
  is the maximal Place — *derived*, not a primitive. From `within` alone are derived:
  position (your chain of containers), zoom (motion along `within`), adjacency
  (co‑containment — siblings), reachability (your immediate cover), and return
  (ascend to the maximal element). One relation answers all five orientation
  questions. Nothing smaller yields *position*; nothing larger is needed until
  reality proves a gap (reversed burden).

- **The membrane was already in the corpus.** RFC‑008 draws two membranes —
  **Rendering** (observe; author nothing) and **Admission** (author, with
  provenance). The Desk / Window / World picture is those two membranes made
  *inhabitable*. This is continuity, not novelty: the boundary the experience needs
  is the boundary the Constitution already drew.

- **Membrane vs. its inhabitation.** The *membrane* is the constitutional principle
  (a law). The **Window** is the participant's *lived inhabitation* of the Rendering
  membrane; the **Door** is the lived inhabitation of the Admission membrane. The
  law is in the corpus; the inhabitation is in Brill.

- **The Window is not a Place — it is a horizon.** Decisive test: *a Place can be
  off‑screen; the Window never can.* Places come and go from view as you move
  `within`; the Window is the permanent frame within which they appear. It is the
  co‑presence of two invariants (below), never an object in the field it frames.

- **Home is not a World — it is a different ontological kind.** A World is
  *traversable* (you can be lost in it), *plural*, *encountered*, *centrifugal*
  (extends outward; you journey out). A **Home** is *un‑traversable* (you cannot be
  lost from it), *singular by nature* (a centre is one), *familiar*, *centripetal*
  (gathers inward around you). You cannot reduce Home to "a World you belong to":
  remove traversable extent from a World and it stops being a World — that same
  absence is what *makes* a Home. Home is the **origin** from which Worlds are
  encountered; it is where every journey begins and ends.

- **The Computer is the instrument, distinct from the Window.** The **Computer**
  (the navigation instrument, an *owned* object of the Home) *persists when you are
  not looking*; the Window (the correspondence it produces) exists only in the act of
  looking. Telescope vs. the view through it. The Computer is world‑agnostic and
  yours — which is why *Brill is one of the Worlds it can open*.

- **Both invariants hold at once by nesting.** `HOME ⊃ Computer‑display ⊃ World‑view`.
  The World is never off‑screen because it is *inside the display*; the Home is never
  off‑screen because it *surrounds the display*; the **Window is the screen's own
  edge**, the living boundary between them. You never enter the Computer — you remain
  at your Home while the instrument turns toward different Places.

- **Dependency runs one way.** *The Place does not depend on the Window; the Window
  depends on the Place.* The World is prior and sovereign (it exists whether or not
  anyone looks); the Window presupposes a World it did not make (Spine 3 — the ground
  is committed before, and independently of, anything that renders it). Hence *one
  World, many Windows*, each at its own Home.

- **One World, many Homes.** The shared World is a **commons** — single, canonical,
  authoritative, common to all, remembered forever (the Repository / Record). A Home
  is a **home** — singular, private, non‑canonical, one per participant, remembered
  *for you*. Multiplicity is the *nature* of Homes and the *pathology* of the World
  (which is why a forked Record is a wound: you may have many homes, only one
  commons).

- **The structure of a Home is a workspace, not a geography.** Home is organised by
  *mine* and *near* and *recently* — arrangement‑at‑hand (things on the wall, within
  reach, on the desk), not `within()`. A gathering around a centre, not a landscape
  extended away. (This is the current best account; see open questions.)

## 2. The two invariants (the spine of the experience)

1. **The whole is never off‑screen.** The World is always in view; entering a Place
   makes the enclosing Whole *recede to a frame*, never disappear. Orientation is the
   *consequence* of this, not a widget added on top.
2. **The Home is never off‑screen.** However deep you explore, you remain at your own
   desk; the Home never disappears — only the view through the Window changes.

Together these two *define the Window*: it is the region where both hold at once.

## 3. The layered picture (the sextet)

None of these is a `Place`; none touches the constitutional grammar.

| Layer | What it is | Persistence |
|---|---|---|
| **Home** | the participant's permanent personal workspace (desk, wall, notebooks, bookmarks, notes, tools) — where you always are | permanent · personal · **one** |
| **Computer** | the navigation instrument, an owned object of the Home; aims at Worlds and displays them | permanent · personal |
| **Window** | the lived correspondence relating Home to whichever World the Computer currently presents (the inhabited Rendering membrane; the screen's edge) | contingent · relational |
| **World** | the shared canonical reality — Places under `within()`; Brill is one such World | permanent · canonical · **many possible** |
| **Repository** | the sovereign memory of the World (the git repo: Record, Constitution, RFCs, CABs, code) — the one committed line everything is derived from (Spine 1) | permanent · canonical |
| **Context windows** | temporary thinking workshops (`Organodynamics NNN`); ephemeral, discarded once distilled into the Repository | ephemeral · working |

The **Door** (inhabited Admission membrane — where a participant *authors* the World,
with provenance) is the Window's twin, and is **asymmetric** to it: Rendering is
ambient/continuous (the Window is a permanent *horizon*), Admission is
episodic/invoked (the Door behaves like a *threshold* you approach and cross). This
asymmetry is a live hypothesis, not a settled equivalence.

## 4. The experience concepts (Brill features that live in this architecture)

- **Living Map** — a Camera onto the World's `within()` structure, rendered as
  **nested spatial regions** (a museum floor‑plan: containment = spatial nesting,
  adjacency = neighbouring rooms). Global projection (the whole, "you are here") and
  local projection (the current Place: interior, surroundings, the way up). *Not yet
  implemented.*
- **Orientation** — the always‑answered "where am I / where is this in the whole /
  what surrounds me / where can I go / how do I return." Not navigation, not
  breadcrumbs, not a sitemap — the standing consequence of the two invariants. *Not
  yet implemented as a map; today only the flat plan‑rail exists.*
- **Arrival** — a Home event: the participant's first sitting‑down; a calm invitation
  ("Start here"), distinct from Signs of Life. Hands over to Return once the visitor
  first explores. *Implemented (entry‑page layer).*
- **Signs of Life** — the Home remembering what has changed since *you* last looked
  at *that* Place; personal and incremental, evidence‑driven (a per‑Place content
  token), never "since production." *Implemented.*
- **Reading Layers** — three Cameras onto a document: **Canonical** (the English
  source of truth), **Representation** (a faithful translation, marked as a
  representation), **Explanation** (plain language, never the constitutional text).
  *Implemented, with a first batch of content.*

## 5. Status of every idea

### Ratified (agreed this workshop)
- The minimal spatial grammar: `Place` + `within()`; the World grammar is untouched.
- The membrane recognition; Desk/Window/World frames the grammar (RFC‑008 implied it).
- The Window is **not** a Place (the off‑screen test).
- Membrane = constitutional principle; Window/Door = its lived inhabitation.
- **Home is not a World** — a different ontological kind; the Desk **is** Home.
- The **Computer** is a distinct object — the owned navigation instrument.
- The two invariants ("the whole / the Home is never off‑screen").
- Dependency: the Window depends on the Place, not vice‑versa; one World, many Homes.
- Reading Layers, Signs of Life, Arrival/Return as concepts (and as shipped code).
- Methodology: numbered conversations are archived workshops; the Repository is the
  single sovereign source of truth; what matters must be distilled into it.

### Working hypotheses (plausible, not locked)
- The Window as a **lived correspondence**, of which Arrival, Orientation, Signs of
  Life, Reading, Search, Discovery are all facets ("Window‑functions") — held with
  the reversed burden, a recognition to keep testing, not a law.
- An **ambient vs. invoked** register within the Window (always‑on orientation/life
  vs. summoned search/discovery/read‑deeper).
- The **Window/Door asymmetry** (horizon vs. threshold).
- The **nesting** formalisation (World‑view inside the display inside the Home).
- Home's structure = a **workspace layout** (arrangement‑at‑hand).
- The Living Map rendered as a **museum floor‑plan** (containment as spatial nesting).
- A **six‑direction** navigation model (centre + six, flower/butterfly rather than
  compass) — explicitly under exploration; joystick‑compatible. One constraint is
  already grounded: **one direction must be fixed as "outward / return to the
  whole,"** since an invariant deserves an invariant direction. The real design
  question is a fixed frame over a *variable* neighbourhood (overflow/underflow).

### Open questions (need answers before building the Map)
- **The canonical containment spine** — what is really `within` what (where the
  Record/Sessions sits; is Organodynamics *inside* Brill or *beside* it). A statement
  about what Brill *is*; the human's to make.
- **Tree vs. DAG** for containment (multi‑parent membership; neighbourhoods as views).
- **How deep the zoom goes** — is a Document a **leaf Place** you zoom *into*, or
  content shown while you are *in* a Room? Governs URL↔camera mapping.
- **Sovereignty vs. persistent shell** — reconcile "each Place is a bare,
  offline‑openable file" (Axiom 10) with "one continuous windowed world." Proposed:
  progressive enhancement (the window enriches, never a dependency). Not locked.
- **Do forthcoming Places occupy space** on the map (visible‑but‑dim), or are they
  absent until real?
- **The structure of Home** — "the grammar of a gathering"; workspace‑layout is the
  current best account, not a crisp generative model.

### Intentionally unresolved (leave open by design — do not simplify prematurely)
- Whether the Window and the Door are ultimately the **same kind of object** (held
  apart on purpose; the asymmetry may be more foundational than the pairing).
- Whether the six Window‑functions are truly **one object** (do not collapse them).
- Home's **final grammar** (let it mature; the human is holding final ontological
  status open on purpose).
- Whether the Home can open **Worlds other than Brill** (the "many shared Worlds"
  future — a horizon, not a plan; fits the forthcoming "Worlds" / "Other
  implementations").
- The **Living World** documentary "Observe" verb (awaits real world content;
  from CAB‑023).

## 6. Implementation status (as of the close of `Organodynamics 006`)

Branch `claude/organodynamics-stewardship-onboard-ei4jwx`; PR **#2** open
(`ei4jwx → main`), awaiting the human's explicit **production release** decision.
Production (`main`) is **untouched** and ~49 commits behind. Vercel Preview is the
review surface (the live `vercel.app` URL is egress‑blocked from the agent; local
render of the deployed commit is the substitute).

**Implemented & deployed to Preview (awaiting review):**
- **Signs of Life** — `assets/signs-of-life.js`, `tools/signs-of-life.js` (generator),
  `assets/signs-of-life.json` (manifest); markers on rail/cards/nav; personal &
  incremental.
- **Arrival / Return** — `assets/arrival.js`; first‑time "Start here" on The
  Laboratory (`STARTS_AT`, re‑pointable), retires after first exploration.
- **Reading Layers** — `assets/doc-layers.js` (the engine), wired into
  `rfcs/index.html` and `cabinet/index.html`; the "Reading: Canonical · Representation
  · Explanation" control; bilingual; graceful fallback.
- **Hebrew translation layer** — `<room>/he/<file>` (representation),
  `<room>/explain/<lang>/<file>` (explanation); English original never touched;
  `lang.js` emits a `lab-lang` event for re‑render.
- **Polish** — consolidated cue CSS (opacity‑only animation, unified pills).
- Earlier on the branch (pre‑workshop): the reconciliation/Space work, the excavation
  set (RFC‑009…013), Brill‑as‑entry; and RFC‑014 written then **removed** after a
  necessity review found it not constitutionally necessary (CAB‑024 kept as history).

**Translated so far (first faithful batch; the rest pending):**
- Representation: `rfcs/he/RFC-002-inquiry.md`,
  `cabinet/he/2026-07-10-constitutional-reading-seven-directions.md`.
- Explanation (en+he): RFC‑002, and CAB‑003.
- All other documents fall back to canonical English with an honest "not yet
  translated / no explanation yet" note.

**Not started (architecture only, this workshop):**
- The **Living Map**, **Orientation** as a map, the **Home / Computer / Window**
  experience shell, six‑direction navigation. No code exists for any of these — by
  request. They are recorded here as architecture, awaiting the decisions in §5.

## 7. Recommended starting point for the next workshop

Not a task list — where the next workshop should *naturally* begin:

1. **Close two decisions before any Map code**, because they govern everything
   downstream (both from §5 open questions): **(a)** the canonical containment spine
   (what is `within` what), and **(b)** how deep the zoom goes (Document as leaf‑Place
   vs. content‑in‑a‑Room). Until these are settled, a Living Map cannot be honest.
2. **Then a paper geography, not code** — write the canonical `within()` structure of
   Brill down (in this doc or a sibling), as the single source the Map will render.
   The Map is a Camera; it needs its territory fixed first.
3. **Keep the review loop** — the human reviews through the Vercel Preview; a task
   isn't done until it's rendered there (EN + HE/RTL where applicable) and they've
   seen it. Production stays an explicit release decision (PR #2).
4. **Consider whether to release** the accumulated Preview work (Signs of Life,
   Arrival, Reading Layers, translation) to production, independently of the Map — it
   is complete and reviewable now.

---

*This document is the distilled residue of a thinking workshop. The workshop
(`Organodynamics 006`) may now be archived. If a recognition here ever needs to
become law, it must travel the corpus's own path (an RFC/CAB) — this file cannot
constitute anything. It only records how Brill, the implementation, is meant to be
inhabited.*
