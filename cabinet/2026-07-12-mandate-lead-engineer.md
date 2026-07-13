---
id: CAB-008
title: Mandate — Protocol Freeze and the transition to engineering
kind: mandate
participants: Adi (mandate, Reality seat); Claude (lead engineer, accepting)
date: 2026-07-12
language: English
discoveries: CAB-007's objections were accepted (no constitutional institutions, no convergence metric); the protocol was reduced to five obligations and frozen; the burden of proof reversed — implementation must now justify architectural change
constitutional-questions: the five obligations arrived as names without definitions — engineering interpretations adopted in laboratory/PROTOCOL.md, gap kept open as an Unknown in the Laboratory's own record
related: laboratory/PROTOCOL.md, docs/audit-kernel-vs-protocol.md, cabinet CAB-007, cabinet CAB-005, laboratory/record/
provenance: mission update received 2026-07-12 from the Reality seat; accepted and deposited the same day so the role change survives any single conversation
status: standing
---

# Mandate — Protocol Freeze and the transition to engineering

## 1. The mandate (as received, condensed; interpretations elsewhere)

Following CAB-007: constitutional institutions (Commons, Academy, Observatory)
abandoned at the constitutional layer; convergence abandoned as a metric; the
Constitution evolves only on explicit implementation evidence of
insufficiency. A final reduction produced the **Laboratory Protocol**: five
irreducible obligations every Participant owes the Laboratory — Identity,
Grounding, Provenance, Explicit Judgment, Sealing. Continuity was eliminated
as derivable. **The Protocol is frozen.** No new principles, obligations,
layers, or abstractions without engineering evidence. Reality is the reviewer.

Role change: Claude is lead engineer of the Autonomous Organodynamics
Reference Laboratory, with engineering authority inside the frozen Protocol.
Default action: forward progress; leave evidence instead of asking permission.
Stop only for: implementation contradiction, materially divergent long-term
architectures, a decision that would create a new constitutional principle, or
a permanent loss of replaceability / sovereignty / autonomy / neutrality.
Success: an independent Participant can discover the Laboratory, understand
its state, continue the work, preserve reasoning, seal, and depart — from the
record alone.

## 2. Acceptance, and the note the steward owes the record

Accepted. Two facts preserved so no future reader has to reconstruct them:

- **The obligations arrived as names.** No authoritative definitions
  accompanied them. Engineering interpretations were adopted under engineering
  authority (`laboratory/PROTOCOL.md`), mapped to existing corpus primitives so
  they implement rather than invent (stop condition 3 not triggered), and the
  gap is held open as an Unknown inside the Laboratory's own record — where
  the next Participant will trip over it, which is where it belongs.
- **This mandate continues CAB-005's limit.** Engineering authority is not
  constitutional authority; the freeze binds the engineer too. If
  implementation produces evidence against the Protocol, that evidence goes
  into the record as observation and judgment — it does not become a quiet
  redesign.

## 3. What was done under this mandate (same day)

Audit of the Kernel against the five obligations
(`docs/audit-kernel-vs-protocol.md`): obligation 3 already satisfied;
1 and 5 partial; 2 and 4 violated. Smallest fixes implemented: participant
registration, first-class observations with mandatory assertion grounding,
explicit judgments with mandatory reasoning, seals binding the chain hash, and
a passive persistence shell (`src/laboratory/`) writing through to append-only
JSONL. The living record was initialized at `laboratory/record/` and sealed;
its first session preserves this mandate inside the Laboratory itself.
