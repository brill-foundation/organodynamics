---
id: RFC-008
title: Interface Independence — Admission, Laboratory State, and the Renderer Boundary
status: open
opened: 2026-07-20
concerns: how the Laboratory exposes itself to any number of interfaces — documents, terminals, spatial habitats, future ones — without any interface becoming a source of truth, and without a constitutional change
confidence: proposal
exposed-by: the Spatial Reference Habitat proposal, and the recognition that "one Laboratory, many Cameras" needs a stated contract before a second major renderer is built
---

# RFC-008 — Interface Independence

**Epistemic status:** this RFC is written to be honest about its own
constitutional provenance. Almost everything below is *recognition* — the
corpus naming what it already embodies — not invention. Two items are
genuinely new, and both are flagged as such and quarantined. This RFC changes
no obligation and ratifies nothing; it proposes a contract, and where it
touches an OPEN constitutional clause it says so and defers to the Reality
seat.

## 0. How to read the tags (the point of this RFC)

Every load-bearing claim carries one of three tags, so a reader can tell an
act of recognition from a new commitment at a glance:

- **⟳ RECOGNIZED** — already present in the corpus; this RFC only names or
  points at it, with a citation. Introduces no new commitment.
- **⊕ GENERALIZED** — abstracted from two or more precedents into one named
  principle. The abstraction is the only new thing; it adds no obligation.
- **✦ NEW** — genuinely new. Each ✦ states whether it is a new *derived
  reading* (a Camera setting — no law, no authority) or a new *constitutional
  commitment* (which this RFC can only **propose**, never ratify — reality
  votes, per RFC-004 §4.1).

The tally is at §12. The short version: this RFC is almost entirely ⟳ and ⊕;
it contains one ✦ derived reading and one ✦ proposal, and no new obligation.

## 1. What this is, and is not

⟳ RECOGNIZED. This is a Habitat-enabling contract, not a constitutional
change. It continues constitution §1 ("the Laboratory is no longer 'the
product'… one place in a larger world") one turn further — *place → an
ecosystem of Cameras over one invariant Place* — and it is a candidate
reading of §7, which is explicitly OPEN ("Screen = Camera is NOT settled… a
phone, a vision system, or a YouTube channel may each be a different camera
onto an invariant Place"). It defines how interfaces relate to the Laboratory;
it does not touch the five obligations or the frozen Protocol.

## 2. The two membranes (the frame)

⊕ GENERALIZED (from the precedents named in §3 and §7). The Laboratory is
bounded by two membranes, and they are the *same* principle at opposite ends —
**a participant acts *through*; a surface never acts *as*.**

```
Reality
  │  ── ADMISSION ─────────  a participant, with provenance, commits Reality
  ▼                          into the Record  (upper membrane)
Canonical Record  (curated Reality — the only source of truth)
  │
  ▼
Derived readings  — Laboratory State, the Ecological reading
  │  ── NON-AUTHORITATIVE RENDERING ──  a participant, with provenance, acts
  ▼                          THROUGH a Camera that holds no truth  (lower membrane)
Renderers  — document · terminal · spatial · future
```

Admission forbids Reality from entering unauthored; the renderer boundary
forbids an interface from authoring. Between them sits the append-only Record.

## 3. Admission — the upper membrane

⊕ GENERALIZED. The crossing from uncommitted Reality into the committed Record
is one boundary the corpus already names **three** times; this RFC recognizes
the three as one and calls it **Admission**:

- **Pencil → Ink** (⟳ CAB-004; CAB-005: "every load-bearing understanding must
  keep moving from Pencil to Ink or it is already lost") — the commitment
  threshold.
- **Surfacing, L1 → L2** (⟳ rotating-table §3, §7.B: "who may surface a private
  workspace into shared state") — the shared-state crossing, and the pedal
  question.
- **Provenance / registration** (⟳ obligation 3; the kernel's
  `requireRegistered`) — no write without a registered identity and an
  intention.

**Admission is the provenanced crossing from Reality into the Record.** The
abstraction is the only new thing; it adds no obligation. Its consequence for
this RFC: derivation is possible only *after* admission, so every downstream
Camera derives from curated Reality, never raw Reality.

## 4. The Record is curated Reality, not Reality

⟳ RECOGNIZED (arrival kit: "if it is not in the record, it did not happen";
obligation 3). The Record is already the result of constitutional judgment —
it is what was admitted, not what merely happened. A renderer that reached
past the Record to raw Reality (e.g., rendering un-admitted git activity)
would be rendering something that, constitutionally, did not happen. This is
the whole reason interface-independence is safe: the truth is curated before
any Camera sees it.

## 5. Laboratory State — the interface-independent derived condition

⟳ RECOGNIZED (RFC-005; charter P3: "store events and authored content; derive
everything else"). Laboratory State is not a new invention — it is the
proprioception report (`gatherReport`) matured into a first-class, documented
contract. RFC-005 already proved a derived condition that "says nothing about
Git, Three.js, or web pages." This RFC only asks that the schema be small,
relational, and open — *kinds as data, not code branches* (⟳ CAB-005 P1) — so
new rooms and future habitats never force a model change. It contains only
concepts the canonical model holds (see §6's warning).

## 6. The Ecological reading

Two parts, two different tags — this is where the one new *reading* lives.

- **Per-object ecology** — ⟳ RECOGNIZED. Dormancy and patina are already
  derived, re-derivable readings (CAB-005 P3 names them explicitly), and
  constitution §4 already licenses ambient, state-driven rendering ("a reader
  should feel the age of an idea before reading it"). An idea being dormant or
  hot is native.
- **Whole-place atmosphere** (calm, growing, reconciling, flourishing) — **✦
  NEW**, and precisely bounded. This is a **new derived reading, not a new
  constitutional commitment**: it adds no obligation and holds no authority. It
  is §4 generalized from the idea to the room. Because a whole-place scalar
  brushes against the "no aggregation" discipline (P4), it is admissible only
  under a hard guardrail: **atmosphere only — never a claim, never a decision
  input, never a substitute for the itemized state.** The moment a participant
  *acts on* "the Lab is Reviewing" instead of reading which tensions are open,
  it has become the recommendation engine RFC-005 rejected, wearing weather.
  Held OPEN; reality has not voted on whether a whole-place reading is even
  wanted.

**Warning that applies to §5 and §6 both** (⟳ the arrow of justification): a
reading may surface only concepts the canonical model *already holds*. The
proposal's example fields — "Garden," "cultivation," "flourishing," "pending
review" — are not canonical objects today. A concept must be authored into the
model first (P5, growth by addition), *then* derived, *then* rendered. Never
the reverse; a reading that names what only the renderer imagines is the
renderer becoming a source of truth.

## 7. The renderer boundary — non-authoritative, not read-only

⊕ GENERALIZED (from ⟳ the Door: "a Camera, not the Place… storing nothing,
judging nothing"; ⟳ §2: implementations are replaceable; ⟳ the habitat guard).
A renderer is **not read-only** — that wording was too strong. A renderer may
originate *any* act: open a drawer, inspect an artifact, author an
observation, deposit evidence, initiate a judgment. The precise boundary:

> **A renderer may originate any act but author no state.** Every write passes
> through the same constitutional primitives, the same habitat guard, every
> participant uses.

And the guardrail that keeps this a Camera (⟳ obligation 3): **the provenance
of a renderer-originated write is always the participant's, never the
renderer's.** "The 3D habitat deposited X" is never a legal actor; "Adi, *via*
the 3D habitat, deposited X" — actor = Adi, habitat = context at most. The
renderer is the *medium* of admission, never its *actor*. That single rule is
what makes an interface a Camera even while fully interactive — it ties the
lower membrane to the upper: a renderer participates in Admission (§3) but can
never *be* the admitter.

## 8. Accessibility parity

⟳ RECOGNIZED at root (sovereignty: "works in a browser, with no tools
installed"; "human, AI, or script — the same standing"; the accessibility
milestone of sessions 5–9). ⊕ GENERALIZED as a rule for the multi-renderer
world: **no habitat may be the sole door.** The document and terminal
renderers are not fallbacks to a spatial habitat; they are co-equal Cameras. A
spatial-primary Laboratory that a screen-reader user or a script could not
fully inhabit would betray the milestone the Laboratory spent four sessions
earning. This is a consequence of existing commitments, not a new one.

## 9. Repository activity is evidence, not truth

⟳ RECOGNIZED (passivity clause; obligation 3; CAB-012 evidence-over-
imagination; RFC-006: "deposit is chosen, never ambient capture"). There is no
automatic pipeline from repository activity to the Record, and there must not
be one. Laboratory State derives *only* from the admitted Record; repository
activity becomes canonical **iff a participant admits it** (§3). The
"a typo fix must not grow the Garden" property then falls out for free — a typo
commit never became a canonical event, so it cannot affect any reading, and no
classifier is needed. A machine that judged which commits carry "constitutional
consequence" would be the machine judging substance (⟳ session 29) — forbidden.

## 10. The one constitutional proposal — the §7 reading

**✦ NEW — a new constitutional commitment, PROPOSED, not ratified.** This RFC
proposes to read constitution §7 as: **the Screen is one Camera among many;
any number of renderers may present one invariant Place, and none is the
Place.** That reading, if adopted, would close part of a clause the corpus
marks OPEN — and closing an OPEN constitutional clause is reality's act, not an
RFC's (RFC-004 §4.1: constitutional change reaches the Constitution only
through the Reality seat / ODM). So this RFC **does not close §7.** It records
the proposed reading, notes that the entire renderer architecture above assumes
it, and defers ratification to the Reality seat. Until then, everything in this
RFC stands as *proposal conditional on §7's reading*, not as settled law.

## 11. What this RFC deliberately does NOT contain

Flagged rather than folded in silently:

- **The reclassification stance ("witness, not decree")** — that a reclassifi-
  cation Judgment recognizes an identity change reality already made, never
  authors one. It is real and ⊕ GENERALIZED (from session 29 and RFC-007's
  "adopts, never rules invalid"), but it concerns *judgment*, not *rendering*;
  it belongs with RFC-007 or its own short RFC, not here.
- **The Spatial Reference Habitat** — the specific 3D renderer is *implementa-
  tion*: mortal, replaceable, Brill-content. It belongs in a Brill habitat
  design doc, not an RFC. Bundling it here would couple the discipline to a
  Three.js renderer — the renderer-as-source-of-truth error at the documenta-
  tion level.

## 12. The provenance tally

| Principle | Tag | Ground |
|---|---|---|
| Habitat-enabling, not constitutional change | ⟳ | §1, §7 |
| The two-membrane frame | ⊕ | §3, §7 precedents |
| Admission = the provenanced crossing | ⊕ | Pencil→Ink, surfacing, provenance |
| The Record is curated Reality | ⟳ | arrival kit, obligation 3 |
| Laboratory State (interface-independent) | ⟳ | RFC-005, P3 |
| State schema small/relational/open | ⟳ | CAB-005 P1 |
| Per-object ecology | ⟳ | CAB-005 P3, §4 |
| **Whole-place atmosphere** | **✦** | new *derived reading*, no new law; held OPEN |
| Renderer non-authoritative, not read-only | ⊕ | Door-as-Camera, §2, habitat guard |
| Provenance always the participant's | ⟳ | obligation 3 |
| Accessibility parity | ⟳ / ⊕ | sovereignty, sessions 5–9 |
| Repo activity is evidence, not truth | ⟳ | passivity, CAB-012, RFC-006 |
| **§7 reading: many Cameras, one Place** | **✦** | new *commitment*, PROPOSED not ratified |

**Two ✦ items in the whole RFC.** One is a new derived reading that carries no
law and no authority (the whole-place atmosphere, held OPEN). One is a new
constitutional commitment this RFC can only propose (the §7 reading, deferred
to reality). Everything else is the corpus recognizing itself.

## 13. Kept rejections

1. **"Read-only" renderers** — rejected; too strong, forbids the interaction
   the vision needs. Replaced by non-authoritative (§7).
2. **A machine classifier of "constitutional consequence" for commits** —
   rejected; the machine judging substance (§9).
3. **Laboratory State surfacing non-canonical concepts** (Garden, etc.) —
   rejected; author the concept into the model first (§6 warning).
4. **A whole-place atmosphere that is actionable** — rejected; atmosphere only,
   or it is aggregation and a recommendation engine (§6).
5. **Bundling the 3D habitat into this RFC** — rejected; couples discipline to
   implementation (§11).

## 14. Open questions

1. Is a whole-place ecological reading even wanted, or does per-object ecology
   suffice? (§6) Held for reality.
2. The §7 reading awaits the Reality seat (§10).
3. Does the State schema need versioning as habitats multiply, and if so does
   versioned state risk orphaning old readings (the version-keyed-storage
   concern, CAB-005 audit #3)? Held until a second renderer exists.

## 15. Status

Open. Nothing built; no renderer written. This RFC's *reasoning* stands now;
its **Record anchor awaits reconciliation** (the Record is forked; it cannot
receive the deposit yet), joining RFC-005/006/007 and CAB-013 in that queue.
The Spatial Reference Habitat is not begun until this contract is stable and
§7's reading has reality's vote.
