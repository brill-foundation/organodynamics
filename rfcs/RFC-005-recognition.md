---
id: RFC-005
title: Recognition
status: open
opened: 2026-07-06
concerns: how contributors are recognized without recognition becoming epistemic privilege
confidence: speculative
exposed-by: RFC-004 Q-h, made urgent by the constitutional reflection on recognition, provenance, and motivation (2026-07-06)
---

# RFC-005 — Recognition

**Epistemic status:** speculative. This RFC answers RFC-004's Q-h — can any
in-system recognition avoid becoming a person-metric? — with a qualified
yes, and the qualification is the entire content of the RFC.

## 1. The exposure

The reflection that exposed this RFC made the decisive observation itself:
*removing ownership is easy; removing the human need for recognition is
neither possible nor desirable.* A system that suppresses recognition loses
its best contributors to institutions that provide it; a system that
compiles recognition becomes the institution it was built to escape. The
four-way separation the reflection proposes — ownership (abolished),
authority (protocol's), provenance (inviolable), recognition (legitimate
but non-authoritative) — is accepted as the starting frame; it extends
RFC-004 §9's quadrant with a fifth concept that §9 left implicit.

## 2. The collision this RFC must resolve, not smooth over

The proposed Personal Research Profile contradicts RFC-004 as written.
Invariant 5 prohibits compiled metrics over persons, and §15.2 states the
workbench "must never offer person-aggregation as a rendered view." A
profile enumerating questions introduced, challenges raised, and syntheses
created *is* person-aggregation. Either the profile is refused, or the
invariant is refined. This RFC refines the invariant — because examining
*why* invariant 5 exists shows the profile, correctly constructed, does not
trigger it.

Invariant 5 protects against three failures: competence-scoring that kills
honest uncertainty, Goodhart redirection of behavior toward measures, and
the archive functioning as a weapon or a ranking. All three failures share
one mechanism: **the system speaking about a person with the authority of
an observation** — unauthored, seemingly objective, uncontestable. The
danger was never that a person's history is visible; provenance already
makes it visible forever. The danger is *who compiles it and with what
voice*. Refined wording, proposed as a friendly amendment to RFC-004 §15.2:

> The system never compiles, characterizes, ranks, or compares persons.
> A person may stake claims about their own participation; such claims are
> representations like any other — authored, journal-cited, challengeable —
> and the system's only role is to verify their citations.

## 3. The four mechanisms

### 3.1 The CV rule: profiles are authored claims, never system outputs

The Personal Research Profile exists — as a genre of representation
*authored by its subject*. The participant curates it; every item cites the
journal events that ground it ("raised the challenge recorded at
`23ae9562`"); the system verifies that cited events exist and carry the
claimed provenance, and does nothing else — no compilation, no completion,
no suggestion of omitted items, no comparison across profiles.

The difference is constitutional, not cosmetic. A system-computed profile
is an *observation about a person* — the exact reading RFC-001 §5.3 forbids
an Instrument to take. A self-authored profile is a *claim by a person* —
staked, confidence-bearing, challengeable, and costly to falsify, since
every item is checkable against an append-only journal. Academia asserts
credentials and verifies them badly; this inverts it: assertion is free,
verification is total. The profile answers the reflection's reframed
question — "which representations evolved because this participant
interacted with them?" — but the *participant* answers it, under challenge,
with proof; the system never proclaims it.

One trap inside the reframing must be named: a machine-computed list of
"representations influenced" is the h-index reborn — influence-counting
wearing lineage vocabulary. The journal can *prove* influence when cited;
it must never *enumerate* influence unprompted. **Keep the citation; kill
the counter.**

### 3.2 Praise is testimony, never system speech

The reflection's pattern descriptions — "frequently discovers hidden
assumptions," "strong at synthesis" — are the subtlest danger in the
proposal. Uttered by the system, they are scores in adjectives:
"frequently" is a count, "strong" is a rank, and prose laundering makes
them *more* authoritative than numbers because they feel like understanding
rather than measurement. They would be cited in disputes within a season
("the system itself says I am strong at synthesis") — epistemic privilege
by natural language.

The same sentences are legitimate as **testimony**: a person, on the
record, acknowledging another ("R's counterexample dissolved my central
claim — recorded here"). Acknowledgment events are how recognition actually
flows in healthy science — from peers, with provenance, in context. The
protocol's obligations: preserve them forever, attribute them always, and
**never total them**. No acknowledgment counts, no thanks-received tallies,
no gratitude economy. Untotaled acknowledgment is also self-disinflating:
log-rolling (mutual-praise cartels) is pointless when nothing accumulates,
and a hollow acknowledgment is a public, provenanced, challengeable
statement its author must wear.

### 3.3 The inadmissibility firewall

The point where recognition becomes institutional authority is the
conversion point: office grants, ratification, review weighting. RFC-004
§9 already holds that capability never auto-converts to authority; this
RFC adds the explicit firewall:

> No profile, acknowledgment, or participation history is admissible as a
> *protocol input* to any constitutive act. Authority is granted only by
> recorded acts, scoped and expiring (RFC-004 §9), whose justification
> must be task-specific, not reputational.

Human graders cannot be firewalled — whoever grants a lease will know
reputations, and pretending otherwise would be theater. The firewall is
structural instead: because authority is a scoped, expiring lease,
reputation that leaks into a human judgment buys at most one bounded,
revocable, recorded grant — it cannot compound into standing. Recognition
may influence; it can never *entitle*, and it can never accumulate into
anything the protocol recognizes.

### 3.4 Identity-blind attention defaults

The second conversion path is quieter: reputation biasing *attention* —
whose commitments get read, whose challenges get answered first. The
workbench (RFC-004 §5) therefore never orders, filters, or weights work by
author identity or author history in any default view. Lineage-primary
display (RFC-004 §15) already does most of this; this clause makes it an
obligation rather than an aesthetic. Provenance-*class* remains visible
where it is evidence (independence, blind status — RFC-005 changes nothing
about RFC-003 §7.2); author-*standing* is never a sort key.

## 4. Which tension framing is fundamental

The reflection offers Recognition↔Non-authority and Recognition↔Equality of
Challenge. **Equality of Challenge is the fundamental one.** What must be
identity-invariant is precisely two things: the *right* to challenge any
representation, and the *binding cost* of a challenge once raised — a
challenge from an unknown newcomer must bind a representation exactly as
one from a celebrated veteran, and a representation may not be cheaper to
defend because of who attacks it. Non-authority is derivative:
authority-from-identity is dangerous *because* it makes some challenges
dismissible at a discount. If equality of challenge holds structurally,
recognition can be generous without danger; if it fails, even a
recognition-free system develops informal rank. The tension enters the
roster (amending RFC-004 §10's revision-2 entry) as:

> **Recognition ↔ Equality of Challenge** — contributors must be seen for
> their participation; no representation's exposure to challenge may vary
> with the identity of author or challenger.

## 5. Failure modes this design accepts and names

- **Prose-metric laundering** (§3.2) — blocked at the protocol level for
  system speech; will still be attempted via lenses. A lens that
  characterizes persons is unconstitutional under the refined invariant 5,
  and lens commissioning-by-challenge (RFC-001 §6) is the enforcement
  point.
- **Curated misrepresentation** — a profile that cites real events but
  narrates them tendentiously. Mitigation: profiles are challengeable
  representations, and a false narration over a public journal is a
  publicly falsifiable claim with the author's name on it. Residual risk
  accepted.
- **External compilation** — nothing prevents an outside actor from
  computing rankings over the public journal (RFC-004 §15.2 already
  concedes this). The system's refusal is about its *own* voice and its
  *own* constitutive processes; it does not pretend to govern the world.
- **Attention capture by familiarity** — known names get read more even
  with identity-blind defaults, via channels no protocol touches. This is
  the residual, and it is why Recognition↔Equality of Challenge is held as
  a tension rather than declared solved.

## 6. What this buys, honestly stated

Against academia: credentials become *verifiable* rather than asserted —
every profile line carries proof — and recognition is portable (the journal
is exportable, RFC-004 invariant 7), so a contributor's record outlives any
institution, including this one. Against social platforms: there is nothing
to farm — no number goes up. The reflection's closing intuition is
sustained: this is a genuinely different model, and its difference is
implementable, not rhetorical — it consists entirely of things the system
*refuses* to do with data it already has.

## 7. What this RFC does not decide

Profile format and where profiles live; whether acknowledgments need a
reserved reference label or remain free-form (EXPERIMENT-001 H2 will
produce evidence); the ratification rule (RFC-003 Q-f — still open, and
§3.3's firewall constrains but does not define it).

## 8. Open questions

- **Q-a.** May a human granting an authority lease *cite* a profile in the
  grant's recorded justification — making reputation's influence explicit
  and challengeable — or does §3.3 require justifications to avoid
  reputational grounds entirely? (Transparency-of-bias vs. exclusion-of-bias.)
- **Q-b.** Are acknowledgment events disturbable — does knowing that
  acknowledgments are permanent change what people acknowledge (the
  Instrument problem, RFC-001 §5.3, applied to gratitude)?
- **Q-c.** Can a *deceased or departed* participant's profile be maintained
  by others without violating the CV rule — and is stewardship of another's
  recognition a lease?
- **Q-d.** Does equality of challenge need protocol enforcement (e.g., a
  challenge cannot be closed without a recorded response, regardless of
  challenger) or is it a workbench obligation only?

## 9. Disposition

Resolved by challenge and revision like any other RFC. Its opening and the
reflection that exposed it are recorded in the journal with declared
lineage — this RFC is the first post-genesis use of EXPERIMENT-001's
substrate, and thereby also a data point for H1. If the CV rule proves
wrong, the likeliest direction is that self-authored profiles turn out to
function as scores socially despite functioning as claims formally; the
season's acknowledgment practices will show it, and the rejection would be
kept, as always.
