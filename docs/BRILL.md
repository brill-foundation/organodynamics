# Brill — implementation architecture (continuity note)

*Transient continuity for the **Brill** product/implementation layer, kept deliberately
separate from the Organodynamics corpus. Supersede freely; the commits are the truth.
This note records the **resulting architecture**, not the discussion that produced it.*

Branch: `claude/organodynamics-stewardship-onboard-ei4jwx`. Written 2026-07-24.

---

## 0. The layer frame (read this first)

- **Organodynamics** = the discipline: *how knowledge behaves.* Frozen Protocol (CAB-008),
  epistemic primitives (entity · observation · assertion · judgment · unknown · relation ·
  seal; pencil→ink). **Unchanged, and not touched by any Brill work.**
- **Brill** = the implementation: *how a person inhabits and works with that knowledge.*
  It has its **own** vocabulary and is free to (Constitution §2: implementation is left open).
- **Two necessity tests, at two layers** (both applied RFC-013-style):
  - **OD-constitutional** — frozen Protocol, reversed burden. Kills new *epistemic* abstractions
    (Field Capture failed here; it collapsed into Observation + P3 + the Camera).
  - **Brill-inhabitation** — *does it help a person dwell in and continue their work?*
    Judges Brill's own vocabulary. (Place passes; **Habitat fails** — a redundant layer.)

## 1. Implemented (in the repo now)

- **Public entry point is Brill** (`/`): a lived world built on the discipline. States the
  documentary philosophy — *the world is the primary artifact; an image is one observation
  of it* — and the Organodynamics/Brill distinction. IA tiles: Worlds · Book · Laboratory ·
  Organodynamics · Other implementations. Not-yet-real destinations (Worlds, Book, Other) are
  shown honestly as **"Forthcoming"** — never seeded with fabricated content.
- **The Organodynamics Door moved to `/organodynamics/`** — now one destination *within* Brill,
  using root-absolute links (`data-root="/"`). Its Record/RFC/Constitution panels work from
  the new path.
- **Every Organodynamics room is unchanged** and points "up" to `/` (= Brill).
- **Navigation:** `← Brill` is **home** everywhere; **"The Door"** points to the actual OD Door
  (`/organodynamics/`) — the corpus concept preserved, not renamed. Bilingual (EN inline + HE
  pack) throughout.
- **Provenance:** the documentary architecture and the book decision are recorded as testimony
  in the Cabinet — **CAB-023** (Brill Living World: World Constitution → Companion Interpreter →
  Scene Specification; the world is primary) and **CAB-022** (the book: architecture before
  manuscript). (These pre-date the layer-separation below; treat them as source-of-record for
  the *decisions*, not as a claim that Brill lives in the corpus.)

## 2. Decided — carry forward as settled (not yet implemented)

- **Brill's spatial vocabulary — one primitive:**
  - **Place** = *where you act* — one activity, tools ready-to-hand, a **resumable state**, a
    climate, adjacency to other Places. (Table, Archive Shelf, Observation Window, Journal,
    book-desk.) You *sit down at* a Place.
  - **Neighborhood** = a named cluster of Places sharing a climate + adjacency, gathered by a
    kind of work (Laboratory, Field, Writing, Reference). It is a **view over Places, not a
    container** — keep it as a container only if it demonstrably holds state of its own
    (test: *does it hold state / afford activity belonging to no single Place within it?*).
  - **World** = **not spatial.** A standing reality you *observe from* a Place, on the
    **Reality ↔ Camera axis** (RFC-008 / Constitution §7), orthogonal to the spatial axis.
    You observe "from within" because your observing-Place sits *inside* the world.
  - **Habitat — rejected** (redundant layer; Place already carries memory, climate, furniture,
    continuity, atmosphere).
  - Vocabulary tiers: *Object ‹ **Place** ‹ Neighborhood ‹ Brill*, plus the separate
    Reality axis (World ↔ observing-Place ↔ Observation).
- **Rigor placement — commitments, not thinking.** The friction lives at the **pencil→ink**
  boundary. Thinking, drafting, research, observing, exploring stay frictionless; a
  *constitutional or permanent commitment* (RFC, CAB, a recorded event) carries the full
  discipline. Rigor rises in **steps** toward permanence, and the threshold must be **legible**
  (you always know which side you're on). Resolves the rigor-vs-usability tension by *placement*.
- **Memory is the workspace's core job — "remember permissively, commit strictly."** The
  workspace remembers so the user never rebuilds their own context. It captures **positions**
  passively (last location, open drafts, what changed) and holds **intentions** the user
  externalizes (a note, a pin, a "continue here"); it **never infers intent** — surface, never
  decide (supportive autonomy; unintelligent furniture, inhabitant intelligence).
- **Design center:** ask *"what kind of place would naturally support this activity?"* —
  **places that hold state, not screens.** A place, by nature, holds what you left in it, so
  continuity is intrinsic rather than bolted on.

## 3. Open — carry forward as live questions

- **The daily-workspace redesign is a proposal, not built.** Direction: the entry recognizes
  the *returning worker* (not re-onboarding); primary navigation organized by *activity/place*
  rather than system modules; a home surface with **Current work · Since you were here · Recent
  work · Quick actions · Open threads**; the discipline (Organodynamics) demoted to **calm, on-
  demand Reference**. Phase it so every stage shows **only real work** — no fabricated activity.
- **Name of the home/continuity place is unresolved.** Its property is **continuity, not
  calendar** ("Today" rejected). Candidates: Studio / Desk / Study / Thread. The choice depends
  on whether it holds *my* continuity or *our* (human + AI collaborators') continuity.
- **Worlds/Book/Other have no content yet.** The interface must stay honest ("Forthcoming")
  until real world/book content exists; the documentary "Observe" verb waits on real worlds.
- **Watch the World** as the case that most tests the single-primitive boundary (currently
  resolved to the Reality axis) once worlds become real.

## 4. Guardrails for the next session

- Brill work is **implementation**: never modify the Organodynamics corpus (Constitution,
  Protocol, RFCs, Cabinet content, the Record, the kernel), constitutional terminology, or room
  *content*. Navigation/labels/interface wording are in scope; room *content* is not.
- The Record is still **forked** (see HANDOFF.md) — do not write to it. Brill interface work
  needs no Record write.
- Verify EN **and** HE (RTL) for any interface change; render locally
  (`python3 -m http.server`, headless Chromium) — the live site is egress-blocked.
