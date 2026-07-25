---
id: CAB-023
title: Decision — the Brill Living World implementation architecture (three layers; documentary observation)
kind: decision
participants: Adi Brill (Reality seat — authored the implementation decision, in the Brill instance); Claude (steward-instance, 2026-07-23 — recorded the testimony, deposited this artifact)
date: 2026-07-23
language: English
discoveries: the stabilized three-layer split (World Constitution → Companion Interpreter → Scene Specification, with only Scene Specifications changing) instantiates corpus patterns already recognized — the Lens/Membrane boundary (RFC-008), the frozen-core-deconstrains-a-variable-periphery invariant (RFC-011 I3), and RFC-013's documentary conclusion (the persistent record is the primary artifact; each image is a non-authoritative Camera of it) — which is precisely why it introduces no new primitives
constitutional-questions: none; this is Brill-instance implementation, not Organodynamics, and proposes no corpus change
related: rfcs/RFC-006-the-chronicle.md (§4, the Organodynamics/Brill seam — the life stays with the instance), rfcs/RFC-008-interface-independence.md (Lens/Membrane; renderers author no truth), rfcs/RFC-011-organizational-invariants.md (I3, constraints that deconstrain), rfcs/RFC-013-field-capture.md (the image is a rendering of an already-existing world), rfcs/RFC-010-external-correspondence.md (organism vs habitat), cabinet/2026-07-23-decision-architecture-before-manuscript.md (CAB-022)
provenance: implementation decision authored 2026-07-23 by the Reality seat within the Brill sovereign instance, stabilized through repeated use; recorded by the steward-instance as testimony, faithfully and without adjudication — no review was asked; no Record write, the Record being forked (RFC-007)
status: open — recorded as Pencil; a Brill-instance implementation decision, not an Organodynamics change; it anchors to the Record as testimony once the reconciliation restores one live tip
---

# The Brill Living World implementation architecture

Recorded as testimony from the Reality seat, faithfully and without review, as asked. It
belongs to **Brill** — the sovereign instance — not to Organodynamics; the corpus's own seam
places "the life with the instance, the lens with the discipline" (RFC-006 §4). It is
deposited here because the Record is forked and closed to writes (RFC-007).

## 1. What was decided (Brill-instance implementation)

An implementation for generating documentary observations within a persistent fictional world
has stabilized. Its architecture is permanently divided into three layers, each with exactly
one responsibility:

```
World Constitution        — the persistent laws of the world
        ↓
Companion Interpreter      — translates those laws into the conventions of a particular
        ↓                    image-generation system
Scene Specification        — only the local circumstances of a single observation
                             (place, moment, observer position)
```

**The Constitution is stable. The Companion is stable. Only Scene Specifications change.**

**The documentary principle.** The primary artifact is **not an image**. The primary artifact
is a coherent, continuously existing world. Every generated image is treated as **one
documentary observation from within that already-existing world.**

**Scope, as declared.** This is an implementation architecture. It introduces no new
Organodynamics primitives, no new canonical objects, and no new architectural layers within
the corpus. It is recorded solely as an implementation decision made stable through repeated
use.

## 2. Recognition (why the scope claim holds — not a review)

The seat asked for no review, and none is offered. But faithfully situating the deposit is
part of the record, and it corroborates the seat's own "no new primitives" claim: the
architecture is an **instantiation of patterns the corpus already holds**, which is exactly
why it adds nothing new.

- **Companion Interpreter = the Membrane** (RFC-008): it translates invariant laws into how a
  particular rendering system perceives, and "may never transform meaning." The image system
  is thereby named as **habitat**, not organism (RFC-010) — the prompt an implementation
  detail, as the seat concluded earlier.
- **Constitution stable / Scene changes = the frozen-core-deconstrains-a-variable-periphery
  invariant** (RFC-011 I3): a small stable core (world laws) makes a large varying periphery
  (scenes) safe and cheap.
- **The documentary principle = RFC-013's conclusion, reached from the other side.** "The
  world is the primary artifact; each image is one observation from within it" is precisely
  "the persistent record is primary; each image is a non-authoritative Camera of it." Field
  Capture collapsed into exactly this; the implementation has independently arrived where the
  falsification landed.

That the implementation and the corpus converge without contact is the strongest possible
support for "no new primitives": the Brill world is being run on the grammar Organodynamics
already ships.

## 3. Honest residue

Brill-instance implementation, recorded as testimony via the deposit-with-observation pattern
(RFC-006 §4). It mandates no engineering in the corpus, proposes no constitutional change, and
asks for nothing built. Pencil, authored while the Record is forked; no Record write was
performed or attempted. It joins the queue behind the reconciliation gate (HANDOFF §6): when
one live tip returns, this testimony can be recorded and sealed as Ink. The steward added no
review and no invention — only a faithful record.
