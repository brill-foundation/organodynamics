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

**Public interface** — `createKernel()` →
`createEntity · assert · supersedeAssertion · relate · recordUnknown ·
resolveUnknown · attachEvidence · state · explain · log`, plus the pure
`derive(events)` for independent replay. See `tests/kernel/kernel.test.js`,
where each test names the axiom it validates.

**Known limitations** (Phase 2 continues, see `blueprint/ENGINEERING_PLAN.md`)
— References and Context are not yet first-class; the OCS-000 canonical
compositions (Place, Participant, Experiment…) are not yet modeled above the
primitives; persistence arrives in Phase 3 as "store the log."
