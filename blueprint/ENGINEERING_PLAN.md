# Engineering Execution Plan — Reference Implementation

**Status:** Active · **Deliverable 2 of 3** mandated by the Cover Letter
**Preceded by:** package validation (CAB-006, `cabinet/2026-07-12-canonical-package-validation.md`)
**Governed by:** the constitutional corpus in `constitution/` (see RFC-004 for how
this track relates to the laboratory's grown charter)

This plan maps Blueprint Part III's phases onto this Record. It states what is
built, in what order, with what technology, and why — so another team (or a
future AI) could reproduce the same decisions from the same inputs.

---

## 1. Technology decisions, with reasoning

**Language: JavaScript (Node ≥ 20, ES modules), zero runtime dependencies.**

- OCS-000 declares technology independence; nothing in the corpus prefers any
  stack. The decision is therefore constitutionally free and made on this
  Record's own standing law: the laboratory's sovereignty clause (one folder,
  opens offline, no server, no account). Plain JS is the only language already
  native to this Record (the Door, the Table) and runs with nothing installed
  beyond Node.
- **Zero dependencies is a constitutional posture, not an aesthetic**: every
  dependency is a replaceability risk (Axiom 10) and an explanation burden
  (Axiom 5). The Kernel imports only `node:crypto` (identity, hashing).
- Tests use the built-in `node --test` runner — no test framework to explain,
  no framework to survive.

**Persistence: deferred to Phase 3, behind the event log.** The Kernel derives
all state by replaying an append-only event log; persistence is then "store the
log," which any medium can do (a JSON file satisfies the sovereignty clause; a
database may satisfy scale later). This ordering is why the Kernel can be built
and *verified* before any storage decision is made.

**No framework, no build step, no bundler** until a phase demonstrably needs
one, and then through an RFC (Blueprint Part III Rule 5: delete complexity
before adding functionality).

## 2. Phases mapped onto this Record

**Phase 1 — Foundation (this push).**
Corpus in `constitution/` (read-only), blueprint in `blueprint/`, this plan,
validation deposit CAB-006, RFC-004, `src/` + `tests/` skeleton, CI running the
constitutional tests. Acceptance: Part IV §42 Bootstrap criteria — corpus
present, blueprint present, structure complete, CI executes, kernel loads,
tests pass, architecture documented. **No constitutional logic beyond the
Kernel's own primitives.**

**Phase 2 — Knowledge Kernel (begun in this push, completes next).**
`src/kernel/` implements the constitutional primitives as an event-sourced
core: Identity, Events, Entities, Assertions, Relations, Provenance,
Versioning, References. Acceptance: operates with no UI, no storage, no
network; every OIS-CORE axiom has at least one named test; state is a pure
replay of the log. Remaining for completion: References as first-class objects,
Context evolution, richer conformance tests against OCS-000's composition rules
(Place, Participant, Contribution, Experiment, Knowledge, Decision).

**Phase 3 — Persistence.** Log serialization + replay from disk; history
survives restart; migration = replay under a new derivation. Storage stays an
implementation detail behind one interface.

**Phase 4 — Constitutional Engines.** Knowledge, Discovery (ODM lifecycle),
Governance (review → integration → reassessment), Semantic (OGD terms,
boundaries, validation), Traceability (lineage, explanation). Each engine an
independent module over the Kernel; independently testable.

**Phase 5 — Services · Phase 6 — APIs · Phase 7 — First workspace ·
Phase 8 — Reference demonstration** (the full ODM lifecycle executed inside the
system). Not elaborated here beyond Part III; each begins with its own short
plan when its predecessor's acceptance criteria hold.

## 3. Standing rules for this track

1. Corpus ambiguity → RFC in `rfcs/`, never a resolution in code.
2. Every kernel behavior cites the axiom or primitive it realizes (in test
   names and module headers), so conformance is greppable.
3. Every push keeps CI green; a red constitutional test is a stop-the-line
   event.
4. Unknowns are objects: CAB-006 F-4 (duplicate OIS renditions) and RFC-004's
   open questions remain visible until ruled on, and the Kernel itself
   represents Uncertainty explicitly (P-012).
5. This plan is engineering guidance (Blueprint layer); when it conflicts with
   the corpus, the corpus prevails.

## Addendum — 2026-07-12, Protocol Freeze

The Laboratory Protocol was frozen at five obligations (mandate: CAB-008;
protocol: `laboratory/PROTOCOL.md`). The burden of proof reversed: architecture
no longer justifies implementation — implementation must justify architectural
change. Consequences for this plan: Phase 2 (Kernel) reached protocol
conformance and Phase 3 (persistence) was realized as the passive shell
`src/laboratory/` with the living record at `laboratory/record/`; the phased
elaboration beyond that proceeds only on engineering evidence, not on
architectural anticipation. Audit trail: `docs/audit-kernel-vs-protocol.md`.
