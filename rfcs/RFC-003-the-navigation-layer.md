---
id: RFC-003
title: The Navigation Layer
status: open
opened: 2026-07-08
concerns: whether the product is a new paradigm or Organodynamics turned outward
confidence: speculative
exposes: the placement question — is an application a legitimate object of the discipline?
---

# RFC-003 — The Navigation Layer

**Epistemic status:** speculative, and structurally impure. RFC-001 and RFC-002 are
about the discipline. This RFC is about a *product* — and whether the product belongs
in this repository at all is its own first open question (§2). It is written as a
design review because it was requested as one, but it refuses the reviewer's usual
job of agreement. Most of the proposal it reviews does not survive contact with the
ontology this repository already built. What survives is the part that was ours to
begin with.

---

## 1. Summary and the central claim

A brief was received proposing a "navigation layer above the Internet": users express
*intentions* rather than operating tools; hidden agents fulfill them; a modular
dashboard exists in two permanent modes (*canonical* and *personal*); creation is one
module among many; a Gallery replaces the feed; a Laboratory publishes experiments;
identity emphasizes projects over followers; everything is a module.

The central claim of this RFC is deflationary and, I think, stronger than the brief:

> **The product is not a new interaction paradigm. It is Organodynamics turned
> outward.** RFC-001 built an ontology for evolving *representations of reality*. The
> product applies the identical ontology to *representations of intention and
> creation*. Every durable idea in the brief already has a native home in that
> ontology. Every idea that has no home in it is the idea that should be cut.

If this claim holds, the design work is not invention. It is *recognition*: mapping
the brief's vocabulary onto kinds that already exist (§4), and discarding the surplus.
This is a better outcome than a new paradigm, because a new paradigm would have to
earn trust from zero, whereas the ontology in RFC-001 has already survived three
revisions of challenge.

---

## 2. The placement caveat (do not skip this)

The honest objection to this entire document: **RFC-001 and RFC-002 concern the
discipline's internals — the Instrument, the Inquiry. A product is a different kind
of thing.** Admitting product design into the RFC stream risks colonizing a discipline
about representations-of-reality with a discipline about shipping software. That would
be a category error of exactly the sort RFC-001 §4 forbids ("kinds must not be
conflated").

Two reasons it is nonetheless in scope, offered as a defense to be challenged:

- RFC-001 §5.4 already grants that *the discipline can study itself*. A product built
  on the ontology is a representation; studying it with the same ontology is the
  self-similar move §6 predicts, not a new kind.
- The product's single non-generic idea — *canonical vs. personal representation that
  evolves without losing traceability* — is not a product feature. It is the
  Organodynamic ontology rendered as an interface. It cannot be designed without this
  repository, and this repository is incomplete until it says what happens when its
  ontology faces a user.

If the objection wins, the disposition (§16) is clear: this RFC is rejected and the
product is exiled to a separate repository that merely *depends on* the discipline.
The rejection would still be kept. Nothing here presumes the objection loses.

---

## 3. Part 1 — Conceptual critique

The critique is organized as cuts, contradictions, and scaling failures. Each names
the weak idea, then names the Organodynamic principle it violates.

### 3.1 "Navigate by intention, not by service" — half true, and the wrong half is load-bearing

Intentions ("I want to explain an idea") are a humane *entry gesture*. They are a
disastrous *addressing scheme*. An intention is a fuzzy natural-language cloud: it
cannot be bookmarked, versioned, shared, returned to, or diffed. A system whose
primary coordinate is an intention has no addressable objects, and a platform with no
addressable objects cannot scale, cannot support collaboration, and cannot preserve
traceability — the one property the brief says it wants.

In the ontology: an intention is an **encounter with Reality** (RFC-001 §7) — the
unproduced node at the top of the loop. Encounters are not stored; the
**Representations** they produce are. So the correction is precise: *navigate by
intention to begin; navigate by artifact to return.* The entry gesture and the address
space are two different things and the brief conflates them.

### 3.2 "Users should never think about models, APIs, prompts, providers" — this is anti-Organodynamic if taken literally

Total concealment of mechanism destroys traceability at the interface. A user who
cannot see *how* a goal was achieved cannot form correct expectations, cannot debug a
bad result, cannot build skill, and — most importantly — cannot trust. RFC-001's
entire architecture exists to keep evolution *observable*; a navigation layer that
hides all mechanism is an un-auditable oracle, the exact opposite.

The reconciliation is progressive disclosure taken to its logical end: **mechanism is
hidden by default and disclosable on demand, always exactly one layer down.** The
artifact carries its own provenance (which instruments, which agents, which sources).
The default view shows none of it; the curious user peels one layer and sees it; the
expert peels to the bottom. "Never think about models" becomes "never *forced* to
think about models" — which is humane — rather than "never *permitted* to" — which is
a cage. This is the same move as RFC-001 §5.6: a reading is not frozen, it is
re-derivable from its coordinates. Provenance is the coordinate at the interface.

### 3.3 "Everything is a module" — the over-generalization that kills platforms

Every platform that declared *everything is an X* (a file, an object, a plugin) paid
for it at scale in dependency and permission hell. When everything is a module, "module"
means nothing, and the brief's own frame — *thousands of modules* — becomes a
combinatorial nightmare of versions, permissions, and dependencies with no type
system to constrain it.

Worse, it commits the §4 conflation directly: it makes a *bookshelf* (a surface that
arranges things) the same kind of object as a *book* (a thing that is arranged). The
module system must be **typed** — a small, closed set of module *kinds* with different
contracts (§9) — and modules must be kept ontologically distinct from the
representations they operate on.

### 3.4 Gallery, Laboratory, and Social are not three places — they are one object under three lenses

The brief proposes three spaces: Gallery (finished work, for inspiration), Laboratory
(experiments, for learning), Social (collaboration, remix, fork, attribution). Building
three products triples the surface area and the maintenance and guarantees they will
drift out of sync.

They are the same object — a **Representation with a lifecycle** (RFC-001 §5.4) —
viewed through three lenses:

- The **Laboratory** is representations at *low/early confidence*, plus public
  **Inquiries** (RFC-002) — questions with composed rosters, including failed ones.
- The **Gallery** is representations at *high/resolved confidence*.
- The **Social layer** is not a place at all; it is the **Relations** (RFC-001 §4)
  between representations — fork and remix are *lineage*, collaboration is
  *co-authorship*, attribution and provenance are the *Record*.

One object model, three views. This is the single largest simplification in the
document.

### 3.5 "A Gallery for inspiration, not attention competition" — a latent contradiction

Inspiration routes on attention: what inspires is what is seen, what is seen is what
is surfaced, what is surfaced is ranked, and a ranked gallery *is* a feed. If you rank
by popularity you have rebuilt the thing you rejected.

RFC-001 §6 already forbids the mechanism that produces feeds: **no aggregation.** A
popularity score is aggregation — many signals collapsed onto one scalar, its theory
of what matters hidden in the weights. The Organodynamic answer to discovery is not a
better ranking; it is a *different axis*: surface by **genealogy**, not popularity.
Show what a work descends from and what descended from it; show which open questions it
engages. Discovery becomes navigation of the lineage graph, not consumption of a
ranked list. See §7.

### 3.6 Identity "by projects and contributions, not followers" — right instinct, forbidden mechanism

Counting projects, contributions, and experiments is a **per-author metric**, and
RFC-001 §5.3 prohibits per-author metrics categorically: "the moment confidence
declarations read as competence scores, honest uncertainty dies." A contribution
counter will Goodhart into a competence score and kill the honest experimentation the
Laboratory exists to protect. The brief swaps one scoreboard (followers) for another
(contributions) and calls it a redesign.

The stronger model (§10): identity is not a scoreboard at all. It is a **view of the
Record filtered to one author** — a position in the lineage graph, shown as provenance,
never as counts or rankings.

### 3.7 "Understandable by children" via metaphors (bookshelf, cinema) — legibility and skeuomorphism are being confused

A bookshelf is legible for thirty books and illegible for thirty thousand. Spatial
skeuomorphs do not scale, and they shatter the moment content is cross-format (what is
a "cinema" for an artifact that is half film, half comic?). The durable goal is
**legibility** — a child can see *what kind of thing* this is and *where it came from*
— which is not the same as **metaphor** — dressing the screen as a physical place.

Replace "invent better metaphors" with "invent a consistent visual grammar for the
ontological *kinds*" (§6). If every representation, relation, and reading is instantly
recognizable *by its kind* at any scale, the interface is legible to a child without a
single skeuomorph, and it does not break at the ten-thousandth object.

### 3.8 Scaling failures the brief does not mention

- **Canonical governance.** "Continuously updated, represents the current best
  structure" — updated *by whom, under what challenge?* At thousands of modules this is
  the whole ballgame and the brief is silent. Answer (§8): canonical is maintained by
  the repository's own mechanism — challenge and RFC. The product eats its own
  discipline.
- **Hidden cost and latency.** "The platform decides the workflow" across "many AI
  providers" is an unbounded routing problem, and hidden orchestration means hidden
  cost and latency the user cannot reason about. Progressive disclosure must extend to
  *cost and effort*, not just features. A missing layer (§5).
- **Provider mortality.** "Many providers, long lifetime" — models die. If an artifact
  is a frozen output bound to a dead API, it rots. Artifacts must be
  provider-independent Representations carrying provenance, re-derivable *in spirit*,
  not entombed outputs (mirrors RFC-001 §5.6). A missing layer (§5).
- **Exit.** A "navigation layer above the Internet" that you cannot leave is just
  another silo above the Internet. Portability and ownership are a missing layer (§5).
- **Multi-device.** Not addressed. The canonical/personal split absorbs it cleanly:
  canonical is device-agnostic; a personal world may hold device-scoped views (§8).

---

## 4. The reconciliation — the mapping

The entire redesign compresses to this table. The left column is the brief's
vocabulary; the middle is the kind it already is; the right is the verdict.

| Brief concept | Organodynamic kind (RFC-001 §4) | Verdict |
|---|---|---|
| Intention (entry) | Encounter with Reality | Keep as *gesture*, never as address (§3.1) |
| Creation / artifact | **Representation** (confidence + lifecycle) | Keep — the durable, addressable object |
| Hidden agents / Gems | **Instruments** and their compositions | Keep hidden; keep provenance disclosable (§3.2) |
| "Platform chooses the workflow" | An **Inquiry** composed around the intention | Keep — but make the composition inspectable |
| Dashboard | A navigable **reading** of the Record | Reframe (§8) |
| Canonical dashboard | High-confidence canonical **Representation** | Keep, strengthen with governance (§8) |
| Personal dashboard | A **fork** with **lineage** to canonical | Keep, strengthen with a merge model (§8) |
| "Pull from canonical" | Accepting a **supersession** you may decline | Keep, reframe as challengeable (§8) |
| Module (generic) | *no single kind* — split into typed kinds | Cut "everything is a module" (§9) |
| Gallery | Record filtered to high-confidence public reps | Merge into one object model (§3.4) |
| Laboratory | Low-confidence reps + public **Inquiries** | Merge (§3.4) |
| Remix / fork / collaboration | **Relations**: lineage, supersession, co-authorship | Keep — these *are* relations (§11) |
| Attribution / provenance | The **Record** | Keep — it is the spine (§5) |
| Identity (counts) | A **view of the Record** filtered to one author | Keep the view, cut every count (§10) |
| Progressive disclosure | Provenance always one layer down | Keep, generalize to cost and mechanism (§3.2) |
| Metaphors (bookshelf) | Visual grammar for the kinds | Replace metaphor with kind-legibility (§3.7) |

---

## 5. Part 2 — Redesigned product architecture (the layers)

The brief lists surfaces (dashboard, gallery, lab). It is missing the *layers* beneath
them. Seven layers, bottom to top. The bottom four are the RFC-001 ontology unchanged;
the top three are what the product adds.

1. **Reality** — the anchor. Not in the system. The user's actual intention and the
   world their creation is about. Not negotiated.
2. **The Record** — append-only provenance of everything: every creation, fork,
   challenge, canonical revision. The spine. *This is the product's real substance;
   every surface is a view of it.*
3. **The Observatory** — the set of Instruments (the hidden agents/Gems) over the
   Record, plus the comparison protocol. Never exposed; always disclosable.
4. **Representations & Relations** — the artifacts users make and the lineage between
   them.
5. **The Resolution layer (new)** — turns an intention (encounter) into a composed
   **Inquiry** (RFC-002): which Instruments are brought to bear. Its output is the
   workflow. Its composition is hidden by default and *inspectable on demand* — this
   is what stops it from being an oracle (§3.2). This is the "platform chooses" idea,
   made honest.
6. **The Consent & Cost layer (new)** — what agents may do, what data leaves the
   device, and what the hidden orchestration *costs* in money, time, and effort.
   Progressive disclosure applies here too: silent when cheap and safe, surfaced when
   expensive or consequential.
7. **The Navigation layer (the surface)** — canonical and personal dashboards, the
   views (Gallery/Laboratory), and the module system. Everything a user touches.

The missing layers are 5 and 6 and the *portability* concern threaded through 2 and 4.
Their absence is the brief's largest architectural gap: it describes the shop window
(layer 7) and the magic (layer 3) and nothing in between that makes the magic
*trustworthy*.

---

## 6. Part 3 — Information architecture (the object model)

Four kinds, and only four, are exposed to users. Everything on every screen is one of
these, and the visual grammar (§3.7) gives each a stable, child-legible form.

- **Encounter** — an intention in flight. Ephemeral. Never stored as such; it produces
  a Representation. (Entry gesture only.)
- **Representation** — the durable, addressable unit: a book, a film, a lesson, a
  dashboard arrangement, a promoted insight. Carries **confidence** and a **lifecycle**
  (sketch → maturing → challenged → resolved / superseded). *Confidence is the axis
  that separates Laboratory from Gallery — the same object, different maturity.*
- **Relation** — the second-order object *between* representations: **lineage**
  (fork/remix), **supersession** (canonical update), **co-authorship** (collaboration),
  **tension** (two works that disagree). Relations have no meaning alone and are never
  counted (§3.6).
- **Reading** — an unauthored, confidence-free, reproducible observation:
  `Instrument(Record, t)`. A dashboard's *default* content is a reading. It is a cache
  of the latest observation (RFC-001 §5.7), never a hand-edited document.

The discipline the IA must keep: **do not conflate the kinds** (RFC-001 §4). A module
is not a representation; a dashboard reading is not a claim; a fork count is not
identity. Most bad super-apps die by conflating these into one undifferentiated "item."

---

## 7. Part 4 — Navigation model

Three principles.

1. **Intention to begin, artifact to return.** The entry surface accepts an encounter
   in natural language. The address space is Representations and their Relations. You
   never navigate *back* to an intention; you navigate back to what it produced. This
   resolves §3.1.
2. **Genealogy, not popularity.** Discovery surfaces the *lineage graph*, not a ranked
   feed. Given any work, the primary navigational moves are *up* (what it descends
   from), *down* (what descended from it), and *across* (what it is in tension with,
   RFC-001 §5.5). This is discovery by provenance, and it obeys the no-aggregation rule
   (§3.5). It is also self-similar with the discipline: you navigate creations exactly
   as the discipline navigates representations.
3. **Disclosure is depth, not breadth.** Progressive disclosure is reframed as
   *vertical*: every object shows its simplest face and peels downward toward
   provenance, mechanism, cost. Complexity is never added by widening the surface
   (more buttons); it is revealed by descending one layer (§3.2). This is the single
   rule that keeps the interface child-simple and expert-complete at once.

---

## 8. Part 5 — Dashboard philosophy (the canonical / personal model)

This is the brief's strongest idea and its most under-specified. The strengthening:

**The canonical dashboard is a high-confidence Representation** of "the current best
way to navigate," authored and maintained by the same mechanism as everything else in
this repository: **challenge and RFC**. It is not "continuously updated" by fiat; it
evolves by proposal and contestation, and its revision history is in the Record. This
answers the governance gap (§3.8).

**The personal dashboard is a fork** of the canonical with explicit **lineage**. This
one word does all the work the brief hand-waves at:

- "Pull elements from canonical" = a **cherry-pick** along the lineage.
- Canonical updates = **supersessions** proposed to the fork.
- The hard problem the brief hides — *canonical moves while personal has diverged* — is
  the merge problem, and Organodynamics already has the ruling: **divergence is not a
  conflict to resolve; it is information** (RFC-001 §6). When canonical proposes a
  supersession, the user may **accept** (rebase) or **decline** (challenge). A decline
  is not friction to be minimized — it is a *reading*: a persistently-declined
  canonical change is a downstream signal that canonical may be wrong. The personal
  dashboards, in aggregate-but-never-aggregated, are an Instrument observing the
  canonical. The user customizing their workspace is, without knowing it, calibrating
  the platform. This closes the loop and is, I believe, the genuinely novel result of
  the whole document.

**Multi-device** falls out for free: canonical is device-agnostic; a personal world may
carry device-scoped views (a phone arrangement, a desk arrangement) as sub-forks with
their own lineage.

The dashboard is therefore not a container of widgets. It is a **living Representation
with a canonical trunk and personal branches**, and its default content is a *reading*
(§6), not a hand-built layout.

---

## 9. Part 6 — Module system

"Everything is a module" is cut (§3.3). Replace it with a **small closed set of typed
module kinds**, each with its own contract. Proposed initial kinds (a commissioning
question, not a definitional one — cf. RFC-001 §6 roster):

- **Instrument-module** — produces *readings* of the Record (a dormancy panel, a
  lineage view). Pure, reproducible, may not write. Contract: `read(Record, t) →
  Reading`.
- **Creation-module** — produces *representations* (the book studio, the film studio).
  May write to the Record; must attach provenance. Contract: `encounter → Representation
  + provenance`.
- **Relation-module** — establishes *relations* (fork, collaborate, challenge). May
  write only relations, never content. Contract: `(rep, rep) → Relation`.
- **View-module** — arranges other modules; produces no new kind. The "dashboard tile"
  itself. Contract: pure layout, no data authority.

Module contracts, lifecycle, and the rest, defined against these kinds:

- **Contract** — every module declares its *kind*, its *authority* (read / write-reps /
  write-relations / none), the *provenance* it attaches, and its *disclosure surface*
  (what one layer down reveals). A module with no declared disclosure surface is a
  gadget, not a module — echoing RFC-001 §3's "a script without a protocol is a gadget."
- **Lifecycle** — modules are **commissioned by challenge**, exactly as Instruments are
  (RFC-001 §6): proposed, contested, versioned, deprecated, retired. Never silently
  added. A new module is a new theory of what matters and a new Goodhart surface.
- **Installation** — installing a module into a *personal* world is a fork operation
  (§8); installing into *canonical* is an RFC.
- **Permissions** — derived from *authority*, not granted ad hoc. A View-module can
  never gain write authority by configuration; authority is a property of kind.
- **Dependencies** — declared and versioned; a module depends on *kinds and coordinates*
  (`instrument-version`, `at-commit`), never on another module's internals. This keeps
  the module graph flat (RFC-001 §6: comparison needs no meta-level).
- **Updates** — a module update is a supersession; personal installs may accept or
  decline (§8). Same merge model, one level down.
- **Ownership** — a module carries authorship in the Record; forks carry lineage back
  to it. Attribution is provenance, never a count (§3.6).
- **Discoverability** — by genealogy (§7): find modules by what they descend from and
  what canonical dashboards adopt them, never by a popularity chart.

---

## 10. Part 7 — Identity model

Identity is **a view of the Record filtered to one author** — nothing else. Concretely:

- A profile renders the author's position in the lineage graph: what they authored,
  what they forked, what descended from their work, what tensions they opened.
- **No counts. No rankings. No scores.** RFC-001 §5.3 is binding here: per-author
  metrics turn honest experimentation into competence signaling and kill the Laboratory.
  "127 projects" is forbidden for the same reason "confidence 0.7 author" is forbidden.
- Identity is therefore *not* a scoreboard swapped from followers to contributions
  (§3.6). It is a *provenance neighborhood* — you are the sum of what you touched and
  what grew from it, shown as a graph, legible without a single number.
- The one legitimate quantitative surface is **the Record itself** — timestamps and
  lineage are facts, not metrics. The prohibition is on *derived scalars about a
  person*, not on the append-only truth of what happened.

---

## 11. Part 8 — Social model

There is no social layer. There are **Relations** (RFC-001 §4), and the "social"
feeling is what relations look like when rendered. This dissolves the brief's entire
list into the ontology:

- **Fork / Remix** = **lineage** relation. Creating from another's work opens a lineage
  edge; the new work carries provenance to its parent automatically.
- **Collaboration / Shared projects** = **co-authorship** relation — multiple authors on
  one representation, each edit in the Record.
- **Version history / Provenance / Attribution** = the **Record**. Not features to build;
  properties of the substrate. Attribution cannot be gamed because it is not awarded, it
  is recorded.
- **Creative evolution** = the **lifecycle** of a representation plus its lineage — the
  self-similar echo of RFC-001's maturation.
- **Disagreement between works** = **tension** (RFC-001 §5.5), the generative organ. Two
  creations that contradict are not a moderation problem; the tension is *information*,
  and may be *held* (an accepted creative paradox) or *dissolved* (they weren't really
  in conflict). The social layer that most platforms suppress — disagreement — is here
  the most valuable object.

The design consequence: the platform never optimizes engagement, because engagement is
an aggregate (§3.5) and aggregates are forbidden. It optimizes *legible provenance*.
The reward for making something is not attention; it is *descendants* — and descendants
are shown as lineage, never counted.

---

## 12. Part 9 — Gallery & Laboratory

Restated from §3.4 as the settled model: **one object (Representation), three views,
separated by confidence.**

- **Laboratory** = the *low-confidence* view: sketches, comparisons, failed attempts,
  discoveries, methodology — *plus public Inquiries* (RFC-002), which are exactly
  "published experiments" formalized: a question, a composed roster, a termination, a
  disposition (including abandonment, which is itself a finding — RFC-002 §5 Q-b). The
  Laboratory encourages learning over performance precisely because low confidence is
  *not penalized* — there is no score to lower (§10).
- **Gallery** = the *high-confidence / resolved* view: matured representations made
  public. Not a feed, not ranked. Browsed by genealogy (§7): "what did this descend
  from," "what grew from this."
- The boundary between them is not a folder move; it is the representation's
  **confidence and lifecycle state** changing. A lab experiment that matures *becomes*
  a gallery piece with its whole failed lineage still attached and visible. Nothing is
  hidden when it graduates — the failures remain part of its provenance. This is the
  Laboratory's real promise: the finished work in the Gallery *carries its lab notebook
  with it*, one layer down (§7).

---

## 13. Part 10 — Progressive roadmap (prototype → platform)

Following RFC-001 §6's discipline, the roadmap is a *minimum viable Observatory*: the
smallest thing that can observe its own artifacts, grown one commissioned kind at a
time. Not a feature ladder — a sequence of things that can each be challenged before
the next is built.

- **Phase 0 — The Record and one Creation-module.** A single studio (say, the book or
  the lesson) that writes representations with provenance to an append-only Record.
  No dashboard, no canonical/personal, no gallery. Prove the substrate: that creation
  produces a *traceable representation*, not a frozen output. If this is not solid,
  nothing above it can be.
- **Phase 1 — Lineage.** Add the fork/remix relation. Now one work can descend from
  another. This is the smallest system in which *genealogy navigation* (§7) exists,
  and it is the first time the product does something no super-app does. Test the
  central claim (§1) here, cheaply.
- **Phase 2 — The two dashboards.** Introduce canonical (one, hand-curated, RFC-governed)
  and personal (a fork). Ship the *decline* path, not just the pull path — the
  divergence-as-information loop (§8) is the thing being tested, and it is invisible
  unless declining is a first-class action.
- **Phase 3 — Confidence, and the two views.** Add lifecycle/confidence to
  representations; the Gallery and Laboratory appear *for free* as the high- and
  low-confidence views (§12). No new surface is built; two views are turned on.
- **Phase 4 — The Resolution and Consent/Cost layers (§5).** Only now introduce
  multiple hidden Instruments composed per-intention (Inquiry), *with* the inspectable
  provenance and the cost surface. Hidden orchestration ships *after* the trust
  machinery that makes it auditable — never before. This ordering is the whole ethical
  bet of the product.
- **Phase 5 — The typed module marketplace (§9).** Third parties commission modules by
  challenge. This is the platform moment, and it is deliberately last: a module
  ecosystem before the substrate, the trust layer, and the governance model is a
  Goodhart engine with a marketplace attached.

The ordering principle: **every phase must be able to detect its own failure before the
next is built** (RFC-001 §6, §5.3). A roadmap that ships the marketplace before the
Record is a roadmap that cannot see what it broke.

---

## 14. What to remove entirely

The explicit kill list, so it is not softened by the redesign:

1. **"Everything is a module."** Replaced by four typed kinds (§9).
2. **Any per-author count** — projects, contributions, experiments, followers. All of
   it (§10, §3.6).
3. **Ranking / popularity anywhere** — gallery, discovery, modules. Replaced by
   genealogy (§7, §3.5).
4. **Three separate spaces** (Gallery / Lab / Social as products). Collapsed to one
   object, three views, plus relations (§3.4, §12).
5. **Literal metaphors** (bookshelf, cinema) as the navigation model. Replaced by
   kind-legibility (§3.7).
6. **"Never permitted to see the mechanism."** Replaced by "never forced to" —
   disclosure is always one layer down (§3.2).
7. **Intention as an address.** Kept only as an entry gesture (§3.1, §7).
8. **The phrase "navigation layer above the Internet"** as a load-bearing claim. It is
   unfalsifiable marketing. What is real and defensible is much smaller and much
   stronger: *a creation environment whose every object carries its provenance and
   evolves without losing it.* Ship that sentence; drop the paradigm talk (§1).

---

## 15. Open questions

- **Q-a.** Is the product a legitimate object of the discipline, or does §2's objection
  win and force a separate repository that merely depends on this one? This RFC assumes
  it does not; the assumption is the weakest load-bearing claim here.
- **Q-b.** The divergence-as-information loop (§8) treats declined canonical changes as
  a reading. But that reading is *derived from personal worlds* — does observing it
  turn personalization into surveillance, tripping the Goodhart line (RFC-001 §5.3)? If
  users learn their declines are watched, do they stop declining honestly? This may be
  the same danger as per-author metrics wearing a friendlier coat.
- **Q-c.** Genealogy navigation (§7) assumes lineage is rich enough to find things. For
  a brand-new work with no ancestors and no descendants, the graph is a single point —
  how is *cold-start discovery* done without reintroducing a ranked feed?
- **Q-d.** The Resolution layer (§5) composes an Inquiry per intention. RFC-002 §5 Q-a
  asks whether event-triggered Inquiries are a Goodhart-forbidden disturbance. Every
  user intention would trigger one. Is per-intention automatic composition the exact
  disturbance RFC-002 warns against, at consumer scale?
- **Q-e.** Confidence (§6, §12) is authored by the creator. Do creators honestly mark
  their own work low-confidence, or does the Gallery's visibility pull everything toward
  "resolved," collapsing the Laboratory? The maturity vocabulary is undecided (RFC-001
  §8) and the product raises the stakes on getting it right.
- **Q-f.** Is "one canonical" the right cardinality? RFC-001 §9 Q-i warns that a single
  fixed vantage is "aggregation by another name." Should there be *plural competing
  canonicals* (as RFC-002 allows competing Inquiries), and if so, how does a beginner
  choose one without a ranking?

---

## 16. Disposition

Resolved by challenge and revision like any other RFC. Three ways it can go:

- **Accepted** — the mapping (§4) becomes the product's information architecture, and
  the roadmap (§13) proceeds from Phase 0 on settled ground.
- **Rejected on placement** (§2, Q-a) — the product leaves for its own repository;
  this RFC is kept as the discipline's first ruling on *what is not the discipline*.
- **Rejected on substance** — the central claim (§1) is wrong, the product really is a
  new paradigm and not Organodynamics turned outward. That rejection would be the most
  interesting outcome of all, and it would be kept.

The one position this RFC will not take is the reviewer's default — that the brief was
good and needs polish. It was not asking for polish, and it should not have gotten it.
