# Canonical Knowledge Kernel

**Purpose** — the constitutional core of the Reference Implementation
(Blueprint Part II §11): the minimum machinery able to represent constitutional
knowledge with complete traceability.

**Constitutional responsibility** — realize the primitives of OCS-000 and the
axioms of OIS-CORE as executable invariants. All state is derived by pure
replay of an append-only, hash-chained event log; nothing is ever deleted,
only superseded; every event carries actor and intention.

**Dependencies** — `node:crypto` only. No frameworks, no storage, no network,
no UI, no AI providers. The Kernel must survive the replacement of everything
around it (Axiom 10).

**Protocol conformance** (since 2026-07-12) — the Kernel enforces the five
obligations of the frozen Laboratory Protocol (`laboratory/PROTOCOL.md`):
participants register before contributing; assertions declare grounding;
provenance is mandatory; judgments carry reasoning; seals bind the chain.
Audit: `docs/audit-kernel-vs-protocol.md`.

**Public interface** — `createKernel({history?})` →
`registerParticipant · createEntity · observe · assert · supersedeAssertion ·
relate · judge · recordUnknown · resolveUnknown · attachEvidence · seal ·
state · explain · verify · log`, plus the pure `derive(events)` for
independent replay. See `tests/kernel/`, where each test names the axiom or
obligation it validates. Persistence is a shell around the Kernel
(`src/laboratory/laboratory.js`), never inside it.

**Known limitations** — References and Context are not yet first-class; the
OCS-000 canonical compositions (Place, Participant-as-composition,
Experiment…) are not yet modeled above the primitives.
