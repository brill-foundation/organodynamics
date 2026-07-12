# Audit — Kernel vs. the frozen Laboratory Protocol

**Date:** 2026-07-12 · **Auditor:** Claude (lead engineer) ·
**Subject:** `src/kernel/` at commit `a7ce126` against `laboratory/PROTOCOL.md`
**Mandate:** audit before construction; preserve what already conforms; smallest
change where it does not.

## Obligation 1 — Identity: PARTIAL

**Satisfied:** every record object (entity, assertion, relation, unknown,
evidence) has a permanent minted identity; no API reassigns or deletes one;
covered by the Axiom 1 test.
**Violation:** Participants are not first-class. `provenance.actor` is an
unverified free-text string — "identity" that is neither registered, permanent,
nor distinguishable from a typo. A Participant cannot owe Identity to a
Laboratory that never asks for it.
**Smallest fix:** `registerParticipant()` minting a permanent participant
identity (the `participant` kind already exists in `identity.js`, unused —
evidence the gap was latent); every subsequent event's actor must be a
registered participant id. Self-registration is the arrival act.

## Obligation 2 — Grounding: VIOLATED

**Violation:** `assert()` accepts any value with no account of what grounds it;
evidence is optional and after-the-fact. Interpretation can float free of
observation — exactly what P-009/P-010 forbid.
**Smallest fix:** observations become first-class (`observe()`), and `assert()`
requires a `grounding` declaration: `observation` (ref must exist in the
record), `source` (citation), `derivation` (refs must exist), or `conjecture`
(legal, but said aloud). No new layer — one required field and one new event
type.

## Obligation 3 — Provenance: SATISFIED

Every event already requires `actor` and `intention` and refuses to exist
without them; events are hash-chained; constitutional time is the sequence.
**Preserved unchanged** per the mandate (do not redesign functioning
components).

## Obligation 4 — Explicit Judgment: VIOLATED

**Violation:** the Kernel has no judgment act. A conclusion today can only hide
inside an assertion's value — a side effect, not an explicit act, with no
required reasoning.
**Smallest fix:** `judge()` recording conclusion + mandatory reasoning + the
record objects it rests on (`basis`). A judgment without reasoning throws.

## Obligation 5 — Sealing: PARTIAL

**Satisfied:** the hash chain is tamper-evident and replay-deterministic.
**Violations:** (a) nothing closes a contribution — there is no act by which a
departing Participant hands the Laboratory over; (b) the log exists only in
memory — nothing persists, so nothing can be continued. A Laboratory that
forgets everyone who leaves cannot be sealed, only abandoned.
**Smallest fix:** (a) `seal()` — an event binding the hash and sequence of the
chain it closes, with a mandatory summary; sealing an empty session throws.
(b) a **passive** persistence shell (`src/laboratory/`) that writes each event
through to an append-only JSONL file and replays it on open. Storage stays
replaceable: the Kernel never touches a file; the shell only reads/writes
lines. Git remains the external anchor of seals.

## Engineering decisions recorded

- **Enforcement lives in the Kernel**, not the shell: the obligations bind
  every Participant of any Laboratory, not just file-backed ones. The shell
  adds only persistence and discovery.
- **Passivity check:** the shell has no scheduler, no server, no notion of a
  next Participant — open, append-through, verify, nothing else.
- **Existing tests change where the Protocol changed the law** (assertions now
  require grounding; actors must be registered). This is conformance, not
  redesign; the nine axiom tests keep their names and intent.
- **No stop condition triggered.** The Protocol is implementable without
  contradiction; the fixes implement existing principles (P-002, P-006,
  P-008–P-011, P-013) rather than introducing new ones; no choice below reduces
  replaceability, sovereignty, autonomy, or protocol neutrality. The one
  genuine unknown — the obligations arrived as names without definitions — is
  handled by recorded, challengeable interpretations (`laboratory/PROTOCOL.md`)
  and an open Unknown in the Laboratory's own log, not by stopping.
