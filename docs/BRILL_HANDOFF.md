# Brill — implementation handoff

*The implementation-layer counterpart to `docs/HANDOFF.md`. That document preserves
**constitutional / stewardship** continuity (the discipline). This one preserves **Brill
implementation** continuity (the product). The two evolve independently.*

Branch: `claude/organodynamics-stewardship-onboard-ei4jwx`. Updated 2026-07-24.
Transient — supersede freely; the commits are the truth.

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
| **Workspace Definition** | **Active** — spatial vocabulary, memory model, rigor placement, and the daily-workspace IA are being defined. Decisions below; open items further down. Not yet built. |
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
