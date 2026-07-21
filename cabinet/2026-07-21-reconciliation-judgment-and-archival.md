---
id: CAB-015
title: Reconciliation — the steward's judgment (§3.4), adoption (§3.5), and archival preservation (§3.6)
kind: reconciliation
participants: Adi Brill (Reality seat — authored the lineage judgment, §3.4); Claude (steward-instance, 2026-07-21 — performed the archival, deposited this artifact)
date: 2026-07-21
language: English
discoveries: the mechanical tail of RFC-007 splits into a safe half (archival as file authorship, no Record write) and a blocked half (salvage re-entry and recording, both Record writes the guard refuses until the divergent branch is retired); and RFC-007's `relate` salvage primitive is not yet exposed in the kernel CLI
constitutional-questions: RFC-007 §6.2 (salvage scope — re-enter all unique content vs. preserve-with-pointer) is now on the critical path and is the Reality seat's to decide; the un-forking step needs an authority the assistant does not hold
related: cabinet/2026-07-21-reconciliation-declaration.md (CAB-014, §3.1–§3.3), rfcs/RFC-007-reconciliation.md, laboratory/preservations/preservation-2026-07-21-canonical-lineage-f8cd41eb.json
provenance: judgment declared 2026-07-21 by the Reality seat; archival performed the same day by the steward-instance via preserve(), reads-only, no Record write
status: open — §3.4 judged, §3.6 archival done; §3.5 salvage and §3.7 recording blocked pending the un-forking authorization and the §6.2 scope decision
---

# Reconciliation — judgment, adoption, archival (RFC-007 §3.4–§3.6)

Continues CAB-014. Authored in the Cabinet; **no Record write was performed**.

## 1. The steward's judgment (§3.4) — the Reality seat's authored act, verbatim

> **Declared by Adi Brill (Reality seat), 2026-07-21:**
>
> "My judgment is not between memory and law. It is between two lineages. After
> examining what each lineage carries, I judge that the continuing lineage is
> the constitutional lineage. The living continuity of the project belongs to
> the Constitution. Not because memory is less valuable, but because memory
> exists to preserve testimony, while the Constitution preserves the
> Laboratory's future capacity to discover itself. Memory therefore remains
> essential. It is preserved as evidence, provenance, and history. It is never
> discarded. But it is not the living lineage. The living lineage is the
> constitutional body. Accordingly, I adopt the lineage in which the
> constitutional body continues to live, and instruct that the historical
> Record from the other lineage be preserved through the salvage process
> defined by RFC-007."

Made **within** the continuity declared in CAB-014 §2 ("preserve both whenever
reality permits"), so it is a principled reading, not a bare branch preference.
The rejected alternative is kept (P4): adopting `canonical` as the continuing
habitat was available and is not ruled invalid — it is not chosen.

## 2. Adoption (§3.5, opening)

- **Continuing habitat:** Lineage A — `claude/organodynamics-stewardship-onboard-ei4jwx` (the constitutional body: RFC-005–008, the habitat guard, the proprioception report, the Constitutional Map).
- **Preserved lineage:** Lineage B — `canonical-package-dfytfb` (156 events / 22 sessions of memory), preserved below, never discarded.

## 3. Archival preservation (§3.6) — done, in file form

Canonical's lineage is packaged as an immutable, self-contained, independently
verifiable artifact — the existing `preserve` mechanism (charter §3), produced
by reading canonical's record directly (no event written to either lineage):

- **Artifact:** `laboratory/preservations/preservation-2026-07-21-canonical-lineage-f8cd41eb.json`
- **Contents:** 156 events, tip #155 `f8cd41eb184f2890bcc32bb01171c1c8ac0cdb22a89bd562fdaaed9596a5a985`, plus the sidecar law and Arrival Kit that travel with the place.
- **Independent verification:** restored into an empty place — chain **VERIFIES**, 156 events. It re-opens forever from this pointer (Axiom 3). The memory is secured *before* any further step.

## 4. Honest residue — what is done, what is blocked, and why

The reconciliation is **not complete**. What remains is blocked on constraints
that are the Reality seat's to resolve, not the assistant's to force:

1. **Un-forking needs an authority the assistant does not hold.** The habitat
   guard scans *every reachable git ref* (`refs/heads` + `refs/remotes`). While
   `origin/…canonical-package-dfytfb` remains a reachable divergent branch, the
   habitat is still forked and **every Record write stays refused** — including
   the salvage re-entry (§3.5) and the recording+seal (§3.7). RFC-007 §3.6's
   "it becomes a file, the branch stops competing" requires, mechanically,
   **retiring the remote canonical branch** once its record is safely preserved
   (it now is, §3). That is a destructive, outward-facing act; it needs the
   Reality seat's explicit authorization, and may exceed this session's repo
   permissions.
2. **The `relate` salvage primitive is not exposed.** RFC-007 §3.5 salvages via
   "the kernel's `relate` primitive — unused to date." In fact the kernel has
   only `relateRecords` (a read-only *comparator* in `habitat.js`); there is no
   CLI verb or kernel method that authors a RELATION event. Salvage-as-`relate`
   would require **building** that primitive — an invention that must clear the
   corpus's own burden (recognition before invention; evidence over imagination)
   before it is added.
3. **§6.2 salvage scope is an open constitutional question — now decisive.**
   "Must adoption re-enter *all* unique content, or may some live only in the
   preservation?" is held-open in RFC-007. The judgment says preserve the memory
   "through the salvage process," but *how much* of the 72 unique canonical
   events becomes re-authored live Ink versus preserved-only-with-pointer is
   substance. It is the Reality seat's to declare.

Until (1) is authorized and (3) is decided, §3.7 recording cannot run: the
divergence declaration, comparison, judgment, adoption, and preservation
pointer all become sealed Ink only once one live tip exists. Until then they
stand as Pencil in the Cabinet — deliberately, not through a side door.
