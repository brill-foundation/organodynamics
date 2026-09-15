---
id: RFC-005
title: Mode or Gate
status: open
opened: 2026-09-14
ruled: 2026-09-15 — the operator answered §3 "both"; §7 items 2 and 3 are unbuilt, so the RFC stays open
concerns: whether the procedure that gives Garnet its name is a way of forming a shared position, or only a safety gate before acting
confidence: proposal
exposed-by: the operator's own statement of what the name means, 2026-09-14; and the one derived agreement line in the yard prototype
---

# RFC-005 — Mode or Gate

**Epistemic status:** exposed by a question, not invented; corrected once by an
independent review that found the first version wrong on its own central claim. On 2026-09-14 the
operator was asked whether the code contradicts her own reading of the project's
name. Answering that required reading the two repositories against each other,
and the answer is no: the procedure she described is already specified, in
detail, in this corpus. What the reading found instead is that the procedure is
installed in one place and absent from another — and that the difference is not
recorded anywhere. This RFC exists so it is not settled by default.

This is the first RFC in this Record that mentions the Peace Table layer. The
layer arrived under this roof on 2026-09-01; `rfcs/` predates it and has not
been reconciled with it. That is a second, smaller finding, stated here and not
resolved here.

## 1. The exposure

Asked what the name means, the operator stated it as a definition of a
mechanism, in her own words:

> גרנט מבחינתי היא כל הסכמה בין שניים או יותר. בין שני סוכני בינה, בין סוכן ובן
> אנוש, בין שני אנשים והלאה. לצורך הסכמה יש צורך שהצדדים יציגו את עמדתם וינסחו
> יחד עמדה שמוסכמת עליהם. לכן היא נקראת ״שולחן״, כיוון ששולחן מייצג מקום שבו
> משיחים שניים או יותר אנשים.

and, asked what "formulate together" means:

> ינסחו יחד אומר ששניהם כותבים ואז כל אחד מהם בודק את מה שכתב השני, ולאחר מכן
> יתכנסו לניסוח מאוחד. הניסוח יכול גם לציין היעדר הגעה להסכמה.

Four steps: both write; each checks the other's; they converge to one text; that
text may record that agreement was not reached. Neither statement has a durable
public URL — both were typed in an operator session — which is the same
provenance limitation already recorded for the origin of the name itself. Both
are now held verbatim in the curated record as `sess-garnet-name-reason-v0`,
beside the origin record that states, on its face, that it holds the source of
the name and not the reason. This RFC reads the statements; it does not claim
they say why the name was chosen, and nobody has asked.

## 2. The procedure already exists

Read against [`peace-table-mandate-authority-v0-he.md`](../peace-table/peace-table-mandate-authority-v0-he.md),
all four steps are specified, and specified more carefully than the sentence
that prompted this reading:

| The operator's step | Where it is written |
|---|---|
| both write | §5, §8 — two blind, independent passes; the pre-reconciliation outputs of A and B are preserved unchanged and undeleted as a locked revision, accessible to audit |
| each checks the other's | §6, §7 — structured comparison against shared lineage, with a four-way taxonomy of disagreement (procedural, factual, normative/material, mandate-interpretation) |
| converge to one text | **Not written, and refused on purpose.** §8's round is not joint authorship: one Proposer offers a single candidate and an Auditor accepts or rejects it, with no second attempt. §9 then requires each model to sign *separately*, and says so in bold — **"אין הצהרה משותפת יחידה"**, there is no single joint statement |
| the text may record non-agreement | §8 — where disagreement survives the round, what returns to the table is a **compact disagreement map** plus one focused human question |

§8 also fixes what the round may never do: average two conflicting estimates
without a lineage ruling, delete or soften a material objection raised in
either pass, decide a normative question on behalf of people, or guess an
ambiguous mandate in order to permit an action. Foundation §12 completes the
frame from the product side: a disagreement map is a valid product, and
"מפת מחלוקת מדויקת עדיפה על החלטת 51% שמוחקת סיכון, פגיעה או חוסר ידע."

So three of the four steps are written, and the fourth is not merely absent —
it is forbidden. A first version of this RFC said the corpus contains the
operator's reading; an independent review corrected that, and the correction is
the sharper finding.

**§9 refuses a single joint statement because it is guarding against exactly
what a joint statement would look like.** Its subject is legitimacy: dual
attestation "אינו, ולעולם לא יהיה, מקור הלגיטימציה", and the only approval with
constitutional weight is a human granting a mandate. A text signed by both
models together would read as the two of them approving something, which is the
authority §9 exists to deny them. So it requires two separate signatures
instead.

The operator wants the joint text as a **product** — a position two parties
formed, which may say that they did not agree. §9 refuses it as a **credential**.
Those are different objects that would occupy the same artifact, and nothing in
the corpus distinguishes them. That collision, not a missing feature, is what
§3 is about.

## 3. The claim

**The procedure is installed as a gate on action, not as a mode of formation.**

Its whole specified scope is eligibility: whether a reversible Tier-2 action
inside an approved Mandate may run without a fresh human approval for each
instance. Foundation §9.1(3) admits such an action *only* through the four
steps. That is the procedure serving as a lock.

The operator's sentence describes the same four steps as the way a shared
position comes into being — for two models, for a model and a person, for two
people. Not a lock before acting. The act of formation itself.

Everything this Record actually produces jointly is produced the other way. The
published role model is one Builder and one independent Reviewer
([decision register](../peace-table/peace-table-decision-register-v0-he.md) header;
[agent/provider contract](../peace-table/agent-provider-contract-v0.md) "role
assignment and independent review requirement"). One party writes, the other
reads and reports. There is no parallel pass, no preserved pair of originals, no
convergence step, and no disagreement map — because none of those are required
of a review. The gate is specified to a level of care that the mode never
receives, and the mode is what the name describes.

### 3.1 The ruling

On 2026-09-15 the operator answered §3: **both.** The four steps are a gate on
action *and* a mode by which a text is formed.

**What that settles.** The gate keeps its existing scope untouched — foundation
§9.1(3) still admits a reversible Tier-2 action inside an approved Mandate only
through those four steps, and nothing here loosens that. What is added is the
second reading: the same procedure, run for its own sake, produces a text. The
mode is now something the corpus is meant to have, not something it happens to
lack.

**What it does not settle, and cannot.** This ruling does not amend ADR §9, and
does not need to. §9 forbids a joint **credential**; the operator ruled on the
same day, on [RFC-006](RFC-006-the-first-table.md) §4, for reading 3 — the first
table is an instance governed by the same mechanism, with a permissive rule of
its own — and RFC-006 §3 supplies the test that keeps the two apart: a jointly
formed text is a product if and only if no gate anywhere may name it as its
authorization. The mode is admissible only under that test. If a gate can ever
cite the text, §9's ban applies to it in full and this ruling does not reach it.

**Provenance.** The ruling was given in an operator session, as a choice among
three options drafted by the Builder, and has no durable public URL — the same
limitation already recorded in §1 for the two statements that opened this RFC.
It is a ruling on an open RFC by the person who decides, not an adopted
amendment to any ratified document. What it authorizes is building §7 items 2
and 3; it does not, by itself, put a jointly formed position into the
architecture.

## 4. What follows from it

1. **The mechanism has no executing authority.** The ADR carrying it is
   `Proposed`; its own §18 heads its action items "כולם Proposed, ללא סמכות
   ביצוע." Only the constitutional half was adopted, as foundation §9.1 — and
   §9.1(6) states that adoption "אינו, כשלעצמו, מפעיל שום Tier-2 חי בקוד,
   במדיניות או בפרומפט." What is ratified is permission to build it, once
   PTDR-02, PTDR-07, PTDR-08 and PTDR-09 are `Decided`. All four remain `Open`.
2. **Nothing joint currently uses it.** Because its scope is action-eligibility,
   the documents, reviews, and decisions of this layer — this RFC included —
   are produced under single-author-plus-review. The procedure that defines the
   name has never formed a text in this Record.
3. **Its output has nowhere to live.** ADR §8 returns a compact disagreement
   map to the table, but none of the twenty durable entities in
   [architecture §7](../peace-table/peace-table-architecture-v0-he.md) is a
   record for one. `stance` holds one actor's position on one revision;
   `mirror_snapshot` holds a projection with `agreements` and `tensions` as
   computed fields (§6.5). A text authored by two parties in a reconciliation
   round, recording precisely what they could not settle, is neither. The
   product that foundation §12 prefers to a 51% decision is the product the
   data model cannot store.
4. **The one Mirror that exists failed the ratified test, and the repair is
   the evidence.** The single implementation of an agreement line anywhere in
   this Record is the state panel of `peace-table/prototypes/yard/`. **This
   evidence is not in this branch.** On `main` that screen still holds three
   hardcoded `STATE_LINES` and derives nothing; the derivation, the two
   decisions it exposed, and their repair live in PR #7 (`c57b7c3`, `f21ea80`),
   which an independent review of this RFC correctly pointed out cannot be
   checked from here. What that work established, and what can be reproduced
   from that branch rather than this one: the panel emitted one agreement row
   that listed a contradicting observation among the things the contradicted
   claim rested on, and rendered agreement in green against an objection in
   amber. The ratified prominence-parity test asks whether a fully-disagreed
   Cell would receive framing and prominence equal to a fully-agreed one. It
   did not. Both are now repaired, and the agreement row carries the rule that
   produced it. The consequence stands as stated — this was the only running
   Mirror and it failed the test — but the citation is to that branch, not to
   a path in this tree.

## 5. The proposal

Recognise the four steps as a way of producing a text, in addition to their
existing role as a gate before acting.

Concretely, and no further: a **jointly formed position** is a first-class
record with two or more authors, formed by parallel independent passes, a
structured comparison, and at most one bounded reconciliation round, whose
content may be an agreement, a disagreement map, or both. Its pre-reconciliation
originals are preserved under ADR §8's existing rule. It carries no authority of
its own — a jointly formed text is evidence about its authors and nothing more.

## 6. What this does not propose

- It does not activate any Tier-2 action, and does not touch PTDR-02, PTDR-07,
  PTDR-08 or PTDR-09. A text is not an action; producing one jointly requires no
  mandate.
- It does not make agreement a measure. The ratified product wording holds:
  agreements, clarified disagreements, new questions, identified needs and
  tensions left open have equal standing, and none of them may be ranked.
- It does not claim that agreement between two models is evidence about people.
  That firewall is ratified and untouched: convergence between two agents is a
  fact about those agents.
- It does not propose that every ordinary correction pass through two passes and
  a reconciliation round. That proposal was considered on its merits and
  rejected in the operational layer as a two-party veto loop over routine work.
  This RFC concerns texts that are meant to state a shared position, not every
  edit.

## 7. What would ratify it

1. ~~The operator rules on §3: is the procedure a mode, a gate, or both.~~
   **Done, 2026-09-15: both.** See §3.1.
2. An entity for a jointly formed position enters the architecture's §7 table,
   and foundation §12's list of valid products names it explicitly. **Not
   built.** This is what the ruling in §3.1 authorizes and what it is waiting
   on; §8's four questions are the design questions it has to answer first.
3. ~~The prototype's agreement line is settled first.~~ **Done.** Its two
   decisions closed on 2026-09-14, and the rule it runs — the last thing about
   that screen nobody had ruled on — was decided on 2026-09-15. The evidence
   this RFC would otherwise have had to invent exists, on the branch §4 names.

## 8. Open questions

1. Does a jointly formed position need an author-set that can include a human,
   or is it agent-only at v0? The operator's definition is substrate-neutral
   ("בין שני אנשים והלאה"); the governance texts are split by substrate, with a
   firewall between them that concerns evidence transfer rather than kind.
2. If two parties converge on wording, what is preserved of the originals beyond
   audit — is the pre-reconciliation pair readable by participants, or only by
   review? ADR §8 locks it; it does not say who may read it.
3. Does a disagreement map require its own maturity states, or does it inherit
   the existing ones? A map is not a draft of an agreement, and treating it as
   one would re-create the asymmetry the prominence-parity test exists to block.
4. Where does the reflexive mandate stand? Foundation §1 makes it a
   constitutional principle that Garnet uses itself to test its own laws, and
   §14(8) names Mirror among the mechanisms to be reality-tested. The
   coordination system that runs this Record implements none of the Table's own
   mechanisms. That is defensible, and it is nowhere recorded as a gap. New,
   opened here.

## 9. A note on sources

Every load-bearing citation in this RFC is to a document in this public
repository, with two stated exceptions, both to other branches of this same
repository rather than to anything outside it. Consequence 4 in §4 rests on work
that lives on the prototype's branch and not in this tree, and says so on its
face rather than linking to a path that does not resolve here. §3.1 links to
RFC-006, which is open on its own branch as PR #9 and is not in this tree
either; the link resolves once both are merged, and until then the ruling it
reports is recorded in that RFC as well, so neither document depends on the
other having landed first. The operational contract that governs how the two agents actually
coordinate, and the code of the shadow harness that replays the procedure
described in ADR §15, are held in a separate private repository by a deliberate
decision recorded there. This RFC describes the boundary between them without
reproducing what that decision keeps private; the Builder/Reviewer role model is
cited from the public documents that already state it.
