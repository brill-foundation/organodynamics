# Brill — implementation handoff

*The implementation-layer counterpart to `docs/HANDOFF.md`. That document preserves
**constitutional / stewardship** continuity (the discipline). This one preserves **Brill
implementation** continuity (the product). The two evolve independently.*

Branch: `claude/organodynamics-stewardship-onboard-ei4jwx` (Organodynamics 006); a follow‑up
session continues on `claude/brill-architecture-gating-v5obzm` (based on the ei4jwx tip).
Updated 2026-07-25 (close of `Organodynamics 006`; then the two gating decisions closed).
Transient — supersede freely; the commits are the truth.

> **Read first:** the `Organodynamics 006` workshop distilled a substantial
> **experience architecture** — Home · Computer · Window · World · Living Map ·
> Orientation · Arrival · Signs of Life · Reading Layers — into
> **`docs/BRILL_EXPERIENCE_ARCHITECTURE.md`**. That document is the transition
> package: the stable recognitions, what is ratified vs. hypothesis vs. open vs.
> intentionally‑unresolved, the current implementation status, and where the next
> workshop should begin. This file (HANDOFF) remains the *operational* continuity;
> the architecture doc is the *conceptual* continuity. Start with the architecture
> doc, then return here.

---

## What this document is — and is not

This records **implementation continuity only.** It does **not** establish constitutional
truth, does **not** modify Organodynamics, and is **not** an RFC or a CAB. It exists solely so
that future Brill work can resume without reconstructing weeks of design reasoning from
conversation history.

Constitutional state, the Record, the RFCs/CABs that define the discipline, and blocked or
pending stewardship actions live in `docs/HANDOFF.md` — **not here.** The split of
responsibilities:

- **Organodynamics** preserves the discipline — *how knowledge behaves.* → `docs/HANDOFF.md`
- **Brill** preserves the implementation — *how people inhabit and work with that knowledge.* → this file

## Current implementation phase

Brill advances through phases. The current one is **Workspace Definition** — settling the
architecture of the daily workspace (Places, memory, rigor placement, the workspace IA)
*before* building it.

| Phase | Status |
|---|---|
| **Product UX — foundational restructure** | **Done** — Brill is the public entry; the OD Door is `/organodynamics/`; navigation reorganized around `← Brill`. Live in the repo. |
| **Inhabitation layers** | **Built, in Preview, awaiting review** — Signs of Life (personal/incremental), Arrival/Return, Reading Layers (Canonical · Representation · Explanation) + a Hebrew translation layer (first batch). See BRILL_EXPERIENCE_ARCHITECTURE §6. |
| **Experience Architecture (Home · Window · World · Living Map · Orientation)** | **Recognized, not built** — the `Organodynamics 006` distillation. Architecture settled; **no code**. The two decisions that gated the Living Map are now **closed** (2026‑07‑25): the canonical containment spine (Brill *is* the World; OD inside it as the canonical core; Record and sessions off‑map) and the zoom depth (a document is content in a Room; spatial zoom stops at the Room). See BRILL_EXPERIENCE_ARCHITECTURE §5. Next: the paper geography (§7 step 2), still no Map code. |
| **Living World** | **Future** — awaits real world content and the documentary "Observe" verb. |
| **Book Architecture** | **Future** — architecture-before-manuscript (recorded in CAB-022); awaits the blueprint. |

## Implementation decisions that have stabilized

- **Brill is the primary public entry.** Organodynamics remains the constitutional reference —
  one destination within Brill, complete and unchanged.
- **Brill is organized around Places, not screens.** A place holds what you left in it, so
  continuity is intrinsic. Design center: *"what kind of place would naturally support this
  activity?"*
- **Place is Brill's primary spatial primitive** — *where you act*: one activity, tools
  ready-to-hand, a **resumable state**, a climate, adjacency. **Neighborhoods** (Laboratory,
  Field, Writing, Reference) are **views over Places, not containers** — kept as a container
  only if a region demonstrably holds state of its own.
- **Habitat did not survive necessity testing** — a redundant layer; Place already carries
  memory, climate, furniture, continuity, atmosphere.
- **Worlds belong to the Reality axis, not the spatial axis** — a standing reality you observe
  *from* a Place (Reality ↔ Camera), not a Place itself. You observe "from within" because the
  observing-Place sits inside the world.
- **Memory remembers positions and explicit intentions, never infers intentions** — "remember
  permissively, commit strictly." The workspace surfaces; it never decides.
- **Commitments carry epistemic rigor; thinking remains Pencil.** Friction lives at the
  pencil→ink boundary. Thinking, drafting, research, observing, exploring stay frictionless; a
  *constitutional or permanent commitment* (RFC, CAB, a recorded event) carries the full
  discipline. The threshold must be legible.
- **Two necessity tests distinguish the layers.** *OD-constitutional* (frozen Protocol,
  reversed burden — judges epistemic primitives; killed Field Capture). *Brill-inhabitation*
  (fitness for daily work — judges Brill's vocabulary; Place passes, Habitat fails). A Brill
  concept is judged by the second, never the first.
- **The participant test (standing design test).** *"Would this still be true if Claude
  disappeared tomorrow?"* If yes, it belongs to the **architecture**; if no, it belongs to
  **today's implementation** — keep them separate, and never freeze an implementation fact into
  the architecture. This is the reversed burden applied to the inhabitation layer: it has
  already protected **Home**, the **Window**, the **Repository**, and **Arrival** (each survived
  the test and so is architecture, not tooling; e.g. the agent's non-persistent memory *fails*
  the test, so amnesia stays out of the model). Apply it whenever a new object is introduced.
- **Arrival / Orientation is participant-centered, not tool-centered.** `CLAUDE.md` (the
  arriving participant's threshold) + `ORIENTATION.md` (the living standpoint / desk) are one
  *surface* of the universal Arrival pattern — the AI participant's; the human's is
  `README` → `WELCOME.md` → the Living Map. `CLAUDE.md` stays frozen (protocol + the
  workshop rule); `ORIENTATION.md` carries the live, layer-neutral dashboard and routes to the
  layer handoffs, restating nothing. See BRILL_EXPERIENCE_ARCHITECTURE §4, "Arrival is
  universal."
- **Documentary principle** (source: CAB-023): the world is the primary artifact; an image is
  one observation of it. Not-yet-real destinations are shown honestly as **"Forthcoming,"**
  never seeded with fabricated content.
- **Signs of Life** (`assets/signs-of-life.js` · `tools/signs-of-life.js`) — part of Brill's
  permanent language, **not** a "What's New" / notification feature. A Place quietly reveals
  where something has evolved *since you were last there*. Design principle: **never tell the
  visitor the world changed if the world itself can show it.** Three commitments hold it honest:
  (1) **evidence, not authorship** — each Place carries a content token (a hash of its own
  files); a sign appears only where the token genuinely changed, never from a hand-set "new"
  flag; (2) **personal & incremental** — memory is per-visitor, per-Place: a sign means "since
  *you* last looked here," never since production / deployment / branch. First arrival is quiet
  (baseline seeded silently); if only the Cabinet changes, only the Cabinet stirs; visiting a
  Place settles it. This is the felt experience — *the world remembers what is still waiting for
  you.* (3) **the corpus's own vocabulary** — it extends the accepted client-side arrival
  mechanism ("what changed while you were away") from the whole Space to each Place; provenance
  at `window.__SIGNS_OF_LIFE__`. Today the sign is a warm glow (rail, entry cards, nav);
  **long-term direction:** grow it into the world itself — a light in a building, a glow near a
  doorway, an illuminated object on a table — so the interface feels less like software and more
  like a place where life quietly continued while you were away. Regenerate the manifest
  (`node tools/signs-of-life.js`) whenever a Place's content changes.
- **Arrival vs Return — two modes, two emotions** (`assets/arrival.js`, a layer *separate from*
  and *above* Signs of Life; SoL is unchanged). A first-time visitor is not asking "what changed
  since I was last here?" — they have never been here — but "**where should I begin?**" So the
  two experiences are distinguished. **Arrival** ("Welcome — *start here*"): on a visitor's very
  first time, the threshold gently suggests one starting Place (currently **The Laboratory**,
  `STARTS_AT` in arrival.js — trivially re-pointable) with a calm invitation in a cooler,
  welcoming voice (a soft green halo + "Start here", deliberately unlike the warm SoL glow, and
  slower/steadier). It is **not** a Sign of Life and **not** "New". **Return**: the first step
  into any Place sets `brill:arrived`; from then on the Arrival layer retires for good and Signs
  of Life is the guide. Arrival owns only its own state and never touches SoL; on a first visit
  SoL is silent anyway, so the two never collide. *Arrival says "Welcome"; Signs of Life says
  "while you were away, something here continued to live."*

## Open questions actively being explored

- **The daily-workspace redesign** — a proposal, not built: recognize the *returning worker*
  (no re-onboarding); navigate by *activity/place*; a home surface with **Current work · Since
  you were here · Recent work · Quick actions · Open threads**; the discipline demoted to
  **calm, on-demand Reference.** Phase it so each stage shows **only real work** — no fabricated
  activity.
- **The name of the home / continuity place** — its property is **continuity, not calendar**
  ("Today" rejected). Candidates: Studio / Desk / Study / Thread. Turns on whether it holds
  *my* continuity or *our* (human + AI collaborators') continuity.
- **Whether any neighborhood is a genuine container** vs a view — apply per region: *does it
  hold state, or afford activity, belonging to no single Place within it?*
- **World / Book content does not exist yet** — keep the interface honest until it does; the
  "Observe" verb waits on real worlds.

## Guardrails for Brill work

- Implementation only: never modify the corpus (Constitution, Protocol, RFC/CAB *content*, the
  Record, the kernel), constitutional terminology, or room *content*. Interface wording,
  labels, and navigation are in scope; room content is not.
- The Record is **forked** (see `docs/HANDOFF.md`) — no Record write; Brill interface work needs
  none.
- Verify **EN and HE (RTL)** for any interface change; render locally (`python3 -m http.server`
  + headless Chromium) — the live site is egress-blocked in this environment.
- Historical interface-build notes (the Space construction, the Environmental Engine) live in
  `docs/HANDOFF.md` §3–§5 as background — not living Brill continuity; this file supersedes them
  for implementation state going forward.
