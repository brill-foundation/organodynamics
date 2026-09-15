---
id: RFC-006
title: The First Table
status: open
opened: 2026-09-14
ruled: 2026-09-15 — the operator answered §4 with reading 3; §6 items 2 and 3 are unwritten, so the RFC stays open
concerns: whether the table that builds the others is governed by their rules, and what a text two parties formed together is allowed to be
confidence: proposal
exposed-by: the operator's statement that the first table decides differently, 2026-09-14; and a review finding on RFC-005 that the corpus refuses a single joint statement
---

# RFC-006 — The First Table

**Epistemic status:** two things arrived within an hour of each other and turned
out to be one thing. The operator said that the first table — herself, Claude
and Codex — should be governed differently from the tables it builds. An
independent review of RFC-005 then found that the corpus does not merely lack
the joint text she describes; §9 of the mandate-authority ADR **forbids** it, in
bold, and for a reason worth taking seriously. This RFC exists because those two
facts meet on the same artifact and nothing in the Record tells them apart.

## 1. The exposure

Asked to choose a label on one screen, the operator stated a model instead:

> מבחינתי אמורים להיות שני דברים שונים - הראשון הוא אני אתה וקודקס שמהווים את
> השולחן הראשון, זה שבונה את יתר השולחנות והחיבורים ביניהם. בשולחן הראשון אני
> רוצה שאתה וקודקס תוכלו להחליט בעצמכם על דברים. ביתר השולחנות, ההכרעות יעשו
> כפי שיחליטו עליהם באי השולחן.

Two claims. On **decision rules**: every table below the first decides by
whatever its own members choose — she named a 70% majority, a table of one
person and one agent, a table where nothing passes while a single objection
stands. On **authority**: in the first table, the two agents should be able to
decide things themselves.

The first claim is settled and already built: a decision rule is now per-table
data that the derivation calls, and the row that results carries the rule that
produced it. The second claim is this RFC.

Her earlier definition of what the two agents do together is the other half:
both write, each checks what the other wrote, they converge to one text, and
that text may record that agreement was not reached.

## 2. What the corpus refuses, and why

RFC-005's first version claimed the corpus contains that four-step procedure.
It contains three steps. The third — converging on one text — is not written,
and [ADR §9](../peace-table/peace-table-mandate-authority-v0-he.md) rules it
out:

> כל מודל **חותם בנפרד** על הפלט הסופי […] **אין הצהרה משותפת יחידה.**

§8's reconciliation round is not joint authorship either: one Proposer offers a
single candidate and an Auditor accepts or rejects it, with no second attempt.

The reason is not fussiness. §9's subject is legitimacy. Dual attestation
"אינו, ולעולם לא יהיה, מקור הלגיטימציה", and the only approval carrying
constitutional weight is a human granting a mandate. A document both models sign
together would read as the two of them approving something — which is precisely
the standing that section exists to deny them. Two separate signatures cannot be
mistaken for a verdict. One joint signature can.

## 3. Two objects, one artifact

A text two parties formed together can be either of two things, and the corpus
has language for only one of them.

A **credential** answers *why was this permitted*. It is cited by a gate. Its
danger is exactly what §9 names: a credential manufactured by two models is
authority they were never granted.

A **product** answers *what did these parties make*. It is cited as content. A
disagreement map is the clearest case — foundation §12 calls it a valid product
and prefers it to a 51% decision that erases risk or harm, and it is a product
whose entire point is that no one approved anything.

§9 forbids the artifact because, from where it stands, only the first reading is
visible. Nothing in the Record distinguishes them, so the ban has to be total.

**The proposed distinguishing test does not look at the text at all.** It looks
at what may cite it:

> A jointly formed text is a **product** if and only if no gate anywhere may name
> it as its authorization. It becomes a **credential** the moment some gate can.

That is checkable against the gates rather than argued about the document, and
it is a property the Record already knows how to state: §5 of RFC-005 proposed a
jointly formed position "carrying no authority of its own" without saying how
anyone would know. This is how.

Under that test, everything the operator described is a product. Two agents
writing a position together, converging, and recording that they did not agree,
authorizes nothing. §9's fear is real and this does not touch it.

## 4. The first table

The reflexive mandate is constitutional. Foundation §1:

> **גרנט היא השולחן הראשון.** היא מופע ראשון של המערכת שהיא בונה, ולכן עליה
> להשתמש בעצמה ככל האפשר כדי לבחון את חוקיה.

It says Garnet is the first table. It does not say the first table is governed
differently from the tables it builds. The operator has now said it is.

**This RFC's central difficulty is that her two commitments pull against each
other.** If the first table runs on rules the other tables do not have, then it
is no longer an instance of the system it builds, and §1's reflexive mandate —
use yourself to test your own laws — is testing something other than what ships.
The value of being the first table is precisely that it is not a special case.

Three readings, none of them free:

1. **The first table is special by kind.** It builds tables; the others use
   them. A builder needs powers a user does not, the way a compiler is not
   bound by the language's own scoping rules. Cost: §1's reflexive claim
   becomes a slogan, and the strongest argument for this Record's method goes
   with it.
2. **The first table is not special, and what she wants is already lawful.**
   Much of it is: [AGENTS.md](https://github.com/brill-foundation/garnet)
   §1.1 leaves deliberation ungated, a Reviewer's sign-off can be the merge
   authorization for an ordinary PR, and a merge mandate can authorize in
   advance. What is missing is not authority but a *product* the two of them can
   make — which §3 supplies without amending anything. Cost: the parts of "decide
   things themselves" that §9.1(4) makes permanently non-delegable stay
   non-delegable, and no reading of this RFC changes that.
3. **The first table is a table whose members chose a permissive rule.** Under
   the rule model already built, every table sets its own; the first table set
   one that delegates more. Then it *is* an instance, and §1 survives. Cost: it
   requires that the constitutional floor — foundation §2.5, a material
   objection is never erased by a majority; §9.1(4)'s Tier-3 list — binds the
   first table exactly as it binds the others. She cannot grant her agents
   powers the floor withholds from everyone.

Reading 3 is the one this RFC proposes, because it is the only one under which
the first table keeps its reason for existing. It also makes the operator's own
model self-consistent: the table that builds the others is governed by the same
mechanism it builds, with its own rule filled in.

### 4.1 The ruling

On 2026-09-15 the operator answered §4: **reading 3.** The first table is a
table whose members chose a permissive rule.

**What it buys.** Foundation §1 survives intact. Garnet remains an instance of
the system it builds, which is the whole argument for the reflexive mandate and
for this Record's method; the first table is governed by the same mechanism as
every other table, with its own rule filled in. It also makes her two
commitments consistent instead of opposed — "in the first table you and Codex
decide for yourselves" is now a statement about which rule this table set, not
an exemption from the mechanism.

**What it costs, stated plainly.** Reading 3's cost is not optional and it is
not small: **the constitutional floor binds the first table exactly as it binds
the others.** Foundation §2.5 — a material objection is never erased by a
majority — and §9.1(4)'s non-delegable list hold here. She cannot grant her
agents powers the floor withholds from everyone. Judging an objection
immaterial, hiding a voice, and approving a final Decision stay hers under this
ruling, the same as under the other two readings.

**What it settles about the artifact.** Reading 3 adopts §3's test with it: a
jointly formed text is a product if and only if no gate anywhere may name it as
its authorization. ADR §9's ban on a joint credential stands exactly as written
and is not narrowed by anything here — what changes is that the Record can now
tell the two objects apart, which is what forced the ban to be total.

**Provenance.** The ruling was given in an operator session, as a choice among
the three readings §4 sets out, and has no durable public URL. That is the same
limitation §8 records for the statements that opened this RFC. It is a ruling on
an open RFC by the person who decides — not an amendment to foundation §1, which
this RFC explicitly does not propose, and not an adopted change to any ratified
document.

## 5. What this does not propose

- Not a change to §9. Its ban on a joint credential should stand exactly as
  written; §3 narrows what the ban has to cover, and does not weaken it.
- Not a change to §9.1(4). Judging an objection immaterial, hiding a voice,
  approving a final Decision — those stay non-delegable under every reading here.
- Not an amendment to foundation §1. This RFC asks how to keep it true, not how
  to set it aside.
- Not agent self-authorization of any kind. A product authorizes nothing; that
  is the whole content of the test in §3.

## 6. What would ratify it

1. ~~The operator rules on §4.~~ **Done, 2026-09-15: reading 3.** See §4.1.
2. The constitutional floor is stated explicitly as binding every table
   including the first — which no document currently says, because no document
   currently distinguishes them. **Not written.** Reading 3 makes this the
   condition of its own coherence rather than a nicety: a permissive table rule
   is only safe if the floor under it is written down, and §7's second question
   (can a table change its own rule, and by what rule is *that* decided) is the
   failure mode it guards against.
3. A jointly formed position becomes a record — architecture §7 has twenty
   entities and none of them is one — carrying its authors, its
   pre-reconciliation originals under ADR §8's preservation rule, and the §3
   property on its face. **Not built.** This is the same obligation
   [RFC-005](RFC-005-mode-or-gate.md) §7(2) carries, and it should be satisfied
   once, not twice.

## 7. Open questions

1. Who are the members of the first table? The operator names three. The
   curated record of the operational layer names four agents, distinguishing
   the working Reviewer from an independent one. If membership is what sets a
   table's rule, membership has to be stated and not assumed.
2. Can a table's rule be changed by the table, and by what rule is *that*
   decided? A rule that can rewrite itself with no floor is the failure mode
   foundation §8 warns about from the other direction.
3. Does a product, cited often enough, become a credential in practice even
   when no gate names it? §3's test is formal; the erosion it does not catch is
   social.
4. RFC-005 §8 question 4 remains open here and is sharpened by §4 above: the
   coordination layer implements none of the Table's own mechanisms, and nothing
   records that as a gap.

## 8. A note on sources

Every load-bearing citation is to a document in this public repository, with one
exception of position rather than of access: RFC-005 is open on its own branch
as PR #8 and is not in this tree, so the link in §6(3) resolves only once both
have merged. The ruling in §4.1 is recorded in that RFC as well, so neither
document depends on the other having landed first.

The operating contract of the coordination layer is held privately by a decision
recorded there; where §4 refers to it, it names what that contract already
states in public documents here and quotes nothing from it.
