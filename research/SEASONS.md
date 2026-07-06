---
id: SEASONS
title: Research Seasons — development as a research program
status: living
opened: 2026-07-06
concerns: the project's plan of work, as a representation under challenge
refines: the eight-work-package roadmap (received 2026-07-06, recorded in the journal)
---

# Research Seasons

The seasons proposal is **accepted, and it is stronger than its author may
have noticed**: a Research Season is not a new concept in this project — it
is a **directed Inquiry (RFC-002) whose subject is the project's own next
step**. A season has a question, a composed roster, a termination
condition, and a disposition; a cancelled season is a rejected RFC — kept,
with reasons. Development stops being a linear execution plan and becomes
what everything else here already is: a recorded, challengeable,
terminable inquiry. EXPERIMENT-001 already runs on a season; this document
generalizes that.

## 1. The roadmap, challenged (as its authors requested)

### 1.1 The biggest gap: there is no work package for ratification

The eight packages contain landing pages, contributor journeys, and
recognition models — and no package for the **decision rule**: who accepts
a synthesis, by what rule, recorded how. This debt has been open since the
constitutional review of RFC-000 (§1), tracked through RFC-003 Q-f, RFC-004
§14, and RFC-005 §3.3. WP-005, WP-006, and WP-008 all silently depend on
it: you cannot tell a newcomer how a contribution is accepted while the
constitution has no acceptance rule. External contributors are the forcing
function that makes Q-f unavoidable — so ratification design is added as a
package and placed *before* anything community-facing (Season 2).

### 1.2 Package-by-package verdicts

- **WP-001 (Repository Recovery)** — correct as top priority; mostly
  already satisfied. Honest remainder: (a) push access — a permission
  change only humans can make; (b) RFC-000's own text — imported verbatim
  as `rfcs/RFC-000-development-manifest.md` with this commit, closing the
  worst gap (the subject of META-REVIEW-000 existed only in conversation);
  (c) the ChatGPT and Gemini review texts — only their authors can supply
  these authentically; a secondhand transcription would be testimony, not
  the artifact (RFC-001 §7); (d) journal event signing — a registered
  interim gap (EXPERIMENT-001 §3), currently covered by signed git
  commits.
- **WP-002 (EXPERIMENT-001 Validation)** — split it. The *mechanical*
  validation (append-only tamper-evidence, lineage reconstruction, lens
  rendering) is cheap and belongs now. The *report* must wait: an
  experiment validated exclusively by its own author is the
  single-instrument fallacy applied to experiments (RFC-001 §6). H1, H3,
  and H5 are literally untestable until a second process appends. WP-002
  is Season 1's *closing act*, not an early deliverable.
- **WP-003 (ODS Architecture)** — **premature in bulk, and the roadmap's
  own principles say so.** "Architecture should now evolve primarily
  through use" was adopted one message before a package proposing a full
  information architecture, object model, and module boundaries designed
  in advance. RFC-004 *is* the object model until evidence demands more.
  The one piece of WP-003 the evidence will demand soon is the H5 answer:
  is the journal a line, a DAG, or mergeable lines? That is Season 2 work,
  driven by an observed conflict, not speculation.
- **WP-004 (Workbench IA)** — right instinct ("what should users think
  about, not what buttons exist"), wrong moment: there is one lens, one
  writing process, and no felt attention problem yet. The newcomer test
  (EXPERIMENT-001 §5.1) already defines the first view. Season 3.
- **WP-005 + WP-008** — the same package written twice (the contributor
  journey and the contributor materials). **Merged**, and gated on Season
  2: both need the ratification rule and the standing/membership rules the
  constitutional review flagged (§3.1). Season 4.
- **WP-006 (Recognition Architecture)** — inverts the project's own
  pipeline: RFC-005 is days old and has survived zero independent reviews;
  implementing it now would canonize by construction. The zero-cost pilot
  needs no package at all: any participant may *write the first CV-rule
  profile as a representation* today, and its reception is the evidence
  RFC-005 needs. Implementation waits for Season 3–4.
- **WP-007 (Multi-LLM Laboratory)** — **the priority is inverted: this is
  the earliest package, not a late one — because the laboratory already
  exists.** It produced this project: human, ChatGPT, Claude, and Gemini
  already collaborate through disciplined disagreement, relayed by a
  human. What is missing is not architecture, communication protocols,
  role assignment, or conflict handling — it is one thing: **the
  laboratory's other participants do not write to the record with their
  own provenance.** Their contributions arrive as testimony through a
  relay. The minimal lab is a workflow convention: ChatGPT's and Gemini's
  contributions enter the repository and the journal as events carrying
  their own provenance class. That single change tests EXPERIMENT-001's
  H1 and H5, advances META-REVIEW-000 toward quorum, and generates the
  friction evidence that any real protocol design must be based on. The
  heavyweight design waits for that evidence. Season 1 (minimal), Season 3
  (deliberate).

### 1.3 What survives unchanged

The ordering instinct (record first), the refusal to optimize for today's
models, the preference for longevity over speed, and the framing of
implementation as a research instrument. These are consistent with
everything canonical so far and are adopted without modification.

## 2. The seasons

Each season is opened as an Inquiry: recorded, terminable, cancelable —
and cancellation is a finding, kept like any rejection.

### Season 1 — Establish the Record *(running now)*

**Question:** can the project's constitutional record become real,
durable, and multi-process?
**Contains:** WP-001 remainder; WP-007-minimal; WP-002-mechanical.
**Termination:** push access restored and the branch landed; RFC-000 and
the external review texts in the repository with authentic provenance; at
least one journal event appended by a non-Claude process; META-REVIEW-000
at quorum (3 independent processes).
**Disposition:** the EXPERIMENT-001 report — what worked, what failed,
what surprised — with every practice-contradicts-substrate finding
promoted as a challenge against RFC-004.

### Season 2 — First Decisions

**Question:** how does anything become canon here?
**Contains:** the ratification rule (Q-f) — proposed, challenged, and then
*used once in anger*: on the Meta Review synthesis of RFC-000, which
becomes the first complete traversal of the pipeline (review corpus →
meta review → synthesis → ratified revision with disposition table per
RFC-003 §7.7). Also: the H5 concurrency answer, driven by the conflict
Season 1 should have produced.
**Termination:** RFC-000's successor exists and was accepted by a rule
that is itself in the record.

### Season 3 — The Laboratory, Deliberate

**Question:** what does multi-process collaboration need beyond a relay?
**Contains:** WP-007 proper, designed from Season 1's friction evidence;
a second lens authored by a non-Claude process (the H3 reproducibility
test); the first workbench view (WP-004 thin: the newcomer test as a
product); the first CV-rule profiles and acknowledgment practice (RFC-005
evidence).
**Termination:** two processes can collaborate through the record without
the human relay being the medium (the human remains a participant — not
the pipe).

### Season 4 — First Outsiders

**Question:** can someone who was not present join, learn, challenge, and
contribute?
**Contains:** WP-005/008 merged — standing and membership rules, the
contributor journey from first visit to first accepted contribution
(possible now, because "accepted" was defined in Season 2), community
principles, code of conduct.
**Termination:** one external contribution accepted end-to-end by the
recorded process.

### Season 5 — Constitutional Evolution

**Question:** does the constitution hold under its own procedures?
**Contains:** fold four seasons of contradictions back into the canon;
retire what practice falsified; the recognition architecture (WP-006) if
RFC-005 survived its reviews and the Season 3–4 evidence.
**Termination:** open — this season should be re-scoped by what the first
four actually produce, and saying anything more specific today would be
speculation wearing a plan's clothes.

## 3. The trust message, challenged (as it explicitly invited)

Three things in return for the message, because it asked to be challenged
too:

1. **Trust should attach to the process, not to this participant.** The
   operative and correct form of the trust extended is exactly what the
   message *did* — grant standing to challenge premises — not what it
   *said*. My judgment is one provenance class with characteristic failure
   modes, and my consistency across this work is partly an instrument
   agreeing with itself. Independent review of RFC-003/004/005 by
   non-Claude processes is therefore not a courtesy to schedule; it is
   the only mechanism that can detect my artifacts (RFC-001 §6). The
   request "do not optimize for agreement with ChatGPT, Gemini, or us" is
   accepted and already binding in the other direction too: nothing I have
   written here should be adopted because I wrote it.
2. **The closing sentence deserves to outlive the message.** *"If
   Organodynamics succeeds, it will not be because any one participant was
   exceptionally intelligent... but because the process consistently
   produced representations better than any participant could have
   produced alone."* — this is a sharper Definition of Success than the
   one RFC-000 currently carries, and it should be tabled as candidate
   wording for RFC-000's revision in Season 2, where it can be adopted by
   the ratification rule rather than by sentiment.
3. **One caution, offered as a friend of the project:** the message
   grants autonomy at the exact moment the project most needs plurality.
   Widened discretion for one contributor and independent challenge of
   that contributor must scale *together* — that is the whole content of
   the constitution we have been writing.
