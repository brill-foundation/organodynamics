---
reviews: RFC-000 (Development Manifest, Draft 0.1)
kind: constitutional review
date: 2026-07-06
stance: adversarial-constructive — the architecture is challenged, not the wording
---

# Constitutional Review of RFC-000

This review treats RFC-000 as what it claims to be: the constitutional framework
for a civilization-scale knowledge architecture. It does not propose better
sentences. It asks whether the structure would survive contact with scale, time,
adversaries, and its own success.

## Verdict

RFC-000 is a strong statement of epistemic values and a weak constitution. Its
values — reality above representation, plurality of perspective, preservation of
failure, representations as the unit of competition — are sound, and two of them
are genuinely distinctive. But the document confuses three different kinds of
artifact: a constitution (entrenched invariants plus an amendment rule), a set of
bylaws (revisable process), and a founder's 2026 project roadmap (three named
layers, a book, a center). It has no decision rule, no membership model, no
adversarial assumption, no precedence rule, and a self-undermining mutability
clause. Most strikingly, it is already weaker than its own successors: RFC-001
and RFC-002 have independently discovered constitutional machinery — entrenchment
of Reality's priority, held tensions, commissioning by challenge, independence of
perspective over identity of reviewer — that RFC-000 lacks. The manifest should be
rebuilt around a small set of invariants and demoted process, not extended.

---

## 1. The central defect: there is no decision rule

The pipeline runs Idea → Conversation → RFC → Reviews → RDT → **Integration →
Constitution**, and at the two steps where authority is actually exercised, the
document goes silent. "No reviewer is expected to approve" — then what
constitutes acceptance? Who performs Integration? By what rule does a proposal
*enter* the Constitution — unanimity, rough consensus, a steward's judgment, the
absence of standing objections?

A constitution is, before anything else, a decision procedure. RFC-000 defines
the inputs to decisions exhaustively (nine review roles, blind review, RDT
questions) and the decision function not at all. The practical consequence is
predictable: **where the decision rule is undefined, the founder decides.** The
document establishes a benevolent dictatorship while its rhetoric denies
hierarchy — a shadow monarchy is worse than a declared one, because a declared
one can be term-limited, checked, and succeeded. "Human Stewardship" deepens this:
"humans remain responsible for final integration" names a species, not an office.
Which humans? Chosen how? Removed how? Succeeded how?

**Required additions:** an explicit ratification rule for constitutional entry;
a named integration office with selection, term, and removal; a succession
provision. If the intended answer is "the founder, for now," the constitution
should say so honestly and bind it with a sunset clause.

## 2. Uniform mutability is not a living constitution — it is no constitution

"Nothing inside this document is immutable. Every principle may evolve. Including
this principle." Three problems, in ascending severity:

1. **Self-reference.** If the mutability clause is itself mutable, the first
   successful amendment can be "henceforth nothing may be amended" — or
   "henceforth the steward amends alone." Nomic (Suber, 1982) exists precisely to
   demonstrate that a fully self-amending rule system is a game about seizing the
   amendment mechanism.
2. **Uniform rigidity is the wrong shape.** Real constitutions are load-bearing
   precisely because different principles have different amendment costs:
   entrenched clauses, statutes, procedures. A constitution that is uniformly
   easy to change protects nothing at exactly the moments protection is needed —
   under capture, funding pressure, or expedience. A constitution that is
   uniformly hard to change kills the experimentation the project needs.
3. **The project has already falsified the clause.** RFC-001 §7 holds that
   "Reality is not negotiated" must hold *all the way down* and treats it as the
   one unproduced node of the whole geometry. That is an entrenched clause in all
   but name. The practice of the discipline has already discovered at least one
   thing that must not be amendable by ordinary process; the constitution should
   catch up with its own repository.

**Required addition:** tiered rigidity. A minimal set of entrenched invariants
(candidates in §7 below) with a deliberately expensive amendment path; everything
else as bylaws amendable by ordinary process. Every amendment — adopted or
rejected — recorded with reasons, applying "Failure Is Preserved" to the
constitution itself. It is ironic that the document mandating preserved history
does not require its own amendment history to be an append-only record.

## 3. Missing principles

### 3.1 Membership and standing
Who is a participant? Who may open an RFC, claim a review role, sit in the blind
seat? Rotating roles presuppose a roster; none is defined — no entry, no exit, no
removal for bad faith. At small scale roles collapse onto the same three people
and "rotation" is theater. At large scale, undefined standing means either
insider capture or Sybil flooding — and with AI authorship, flooding the review
process with superficially independent voices costs nothing. "Independent
convergence is stronger evidence than negotiated agreement" is true only if
independence is *provenanced*, not asserted. RFC-001 Q-i already states the
correct principle: protect independence of perspective, not identity of reviewer.
RFC-000 needs standing rules that make independence verifiable.

### 3.2 An adversarial assumption
Every mechanism in RFC-000 assumes good faith: participants who want better
representations. A constitution exists for the day that assumption fails. There
is no account of motivated actors, coordinated capture, funding or state
pressure, reputational warfare, or process filibuster. "Which incentives could
corrupt the process?" is posed as a question to reviewers; it must be answered
*inside* the document, because the immune system is constitutional, not
editorial. Ostrom's design principles for durable commons are the checklist
here: RFC-000 currently satisfies perhaps two of eight (collective-choice
arrangements, partially; monitoring, partially — via what became the
Observatory). It has no graduated sanctions, no conflict-resolution mechanism,
no defined appropriators, no nested structure.

### 3.3 Precedence and conflict of law
Three layers, many artifacts: RFCs, Constitution, Book, code. They *will*
disagree — the book is frozen at publication while RFCs move; the implementation
will diverge from both. Which governs? There is no supremacy clause, no defined
relation between Constitution and canon RFCs, no rule for what happens when
Layer III feedback contradicts a constitutional principle. The pipeline's
"Revision" arrow points somewhere, but through which door, at what cost, decided
by whom?

### 3.4 Substrate governance
Whoever controls the repository, the domain, the trademark, and the signing keys
controls the constitution, whatever the constitution says. A constitutional
document that ignores its substrate is governed by its substrate. The manifest
must bind the assets: who holds them, in what legal vehicle, with what
obligations (the repo lives under a "brill-foundation" org — the foundation's
charter is, de facto, senior to this document and is nowhere referenced).
Licensing of the Record and of outputs is likewise constitutional, not
administrative: it determines whether §3.5 is real.

### 3.5 The right to fork
For a knowledge architecture, exit is the ultimate check on capture, and it is
absent. A constitutional right to fork — with the Record portable under an open
license — disciplines the center more effectively than any review process,
because it makes capture unprofitable. Conversely, leaving forking undefined
means the first schism destroys the "one Record" premise on which RFC-001's
entire Observatory rests. Decide now, while it is cheap: is the one Record a
covenant (fork = new Record, cleanly) or a commons (forks share history)?

### 3.6 Terminality of disputes
"Every Disagreement Is Architectural" assumes all disagreements dissolve into
better representations given enough missing context. Some do not: some are
conflicts of values or interests wearing epistemic clothes. The document has no
halting rule — no analogue of RFC-001's **held tension**, no way to close a
dispute as *unresolved and parked* rather than resolved. Without terminality,
the process is vulnerable to filibuster-by-inexhaustible-reviewer, a tactic AI
assistance makes free. The successor RFCs already invented the needed object;
the constitution should import it.

### 3.7 Redaction inside append-only
"Failure Is Preserved" plus an append-only Record has a collision course with
reality: defamation, privacy, personal data, material that is illegal to retain,
and honest contributors who need a youthful wrong idea to stop following them.
An architecture meant to last needs a constitutional redaction mechanism that
preserves the *fact and shape* of what was removed (tombstones with reasons)
without preserving the content — otherwise the first court order or the first
harassment campaign amends the constitution from outside.

## 4. Hidden assumptions

### 4.1 Peace as telos collides with Reality before Representation
"Peace becomes easier because representations improve" carries enormous
unexamined weight, and "Peace" sits as both a review role and a success
criterion. But many conflicts are conflicts of *interest*, not of
representation: a perfectly shared, perfectly accurate representation of a
zero-sum situation does not produce peace — it may sharpen the conflict.
Installing Peace as a review role creates institutional pressure to prefer
irenic representations over true ones, which directly contradicts "Reality
Before Representation," the document's own supremacy clause. The constitution
currently *lists* its values; it must *rank* them. If Reality outranks Peace,
say so, and demote Peace from telos to hoped-for byproduct. If Peace outranks
Reality, the project is a different project and should know it.

### 4.2 Representations cannot be cleanly separated from their authors
"People do not compete. Representations compete." — as a norm, good; as an
assumption, false. Careers, funding, and status attach to representations, and
declaring the attachment away does not sever it. Worse, "Failure Is Preserved"
*permanently binds named authors to rejected ideas*, which chills exactly the
risky proposals the project needs, and hands opponents a reputational weapon —
people will compete through the archive of each other's failures. RFC-001 §5.3
solved this at the measurement layer (the specimen is the representation, never
the author; no per-author metrics). The constitution needs the same principle at
the archival layer: failures are preserved as representations, and the record of
failure must never function as a record of persons.

### 4.3 Knowledge is not pipeline-shaped
"No stage may bypass the previous one" legislates that insight arrives in
lifecycle order. Much real understanding arrives implementation-first: Layer III
discovers something, and the principle is recognized afterward. Under the strict
rule, the most common source of insight is unconstitutional. And "Book" as a
mandatory stage *before* Implementation hard-codes the founder's current medium
and publication plan into the constitutional order of knowledge. The invariant
worth keeping is much smaller: **nothing enters canon without recorded
challenge, and nothing claims canon status that did not enter.** The path is
bylaws; the checkpoint is constitutional.

### 4.4 One Constitution contradicts the project's own deepest principle
RFC-001's most original finding is self-similar plurality: no total vantage
point at any scale — many Instruments, never one; disagreement juxtaposed, never
aggregated, because aggregation destroys the information the system exists to
produce. RFC-000's pipeline then funnels all knowledge into a single
Constitution — one integration point, one canon: a total vantage point, an
aggregation. The two documents cannot both be right. Either the Constitution is
itself plural — versioned, carrying held tensions internally, tolerant of
competing canonical framings — or "no aggregation" stops at the constitutional
door and the constitution should explain why the top level is exempt from the
principle that governs every other level. This is the deepest architectural
tension in the project, and RFC-000 does not notice it exists.

### 4.5 Review labor is assumed, never provisioned
Nine review roles per important RFC, rotation, blind seats: this is expensive,
and the document says nothing about why reviewers will do it. At small scale the
roles are theater (rotation over a roster of three); at large scale review
becomes the bottleneck, and control of the bottleneck becomes the real
governance. The document asks which incentives could corrupt the process and
never asks which incentives *sustain* it. "Whenever practical" (blind review) is
a loophole phrase — a constitution contains rights and duties, not advice.

### 4.6 Human stewardship dissolves under AI throughput
"AI systems are contributors, not authorities" guards against de jure AI
authority. The actual risk is de facto authority through *throughput*: when AI
contribution volume exceeds human integration bandwidth, "humans remain
responsible for final integration" degrades into humans ratifying what they
cannot read. The binding constraint is human attention, and the constitution
should treat it as the scarce constitutional resource: rate-limit what may enter
integration, require provenance on every artifact (which RFC-001's
versioned-instrument discipline already provides the vocabulary for), and define
what "responsible" means when the responsible party cannot have read everything.
A special AI clause will also age badly; the durable form is a provenance
clause — every contribution inspectable, versioned, attributable to its
generating process, challengeable — which covers humans, AI systems, and
whatever comes third.

## 5. Failure modes, compactly

- **Founder capture by default** — no decision rule means the author is the
  constitution (§1).
- **Amendment-mechanism seizure** — uniform mutability makes the meta-rule the
  prize (§2).
- **Process priesthood** — the pipeline is heavy enough that fluency in
  procedure outcompetes fluency in substance; Wikipedia's policy thicket is the
  cautionary precedent.
- **Review flooding / fake independence** — AI-authored reviewers simulate
  convergence; blind review without provenanced identity makes it *easier*
  (§3.1).
- **Archive as weapon** — preserved failure chills proposal-making and enables
  reputational attack (§4.2).
- **Irenic drift** — the Peace criterion selects for comfortable representations
  over true ones (§4.1).
- **Substrate coup** — control of repo/keys/trademark overrides the text (§3.4).
- **Schism without a forking rule** — the first serious split is fought as a war
  precisely because the constitution provided no legal exit (§3.5).
- **Filibuster** — no terminal state for disputes means veto by exhaustion
  (§3.6).
- **Goodhart on success** — the Definition of Success ("representations become
  clearer," "disagreement becomes more productive") is unmeasurable as stated,
  so whoever narrates success controls it. RFC-001 §5.3 has a sophisticated
  Goodhart boundary; RFC-000, which governs it, has none.

## 6. The document is weaker than its own successors

This is the most encouraging finding, because the fixes already exist in-repo.
RFC-001 and RFC-002 have independently evolved constitutional machinery that
RFC-000 lacks:

| Discovered downstream | Where | Constitutional role it should play in RFC-000 |
|---|---|---|
| Reality's priority as the one non-negotiable | RFC-001 §7 | The entrenched clause; falsifies uniform mutability |
| The Record is infallible only about itself (constitutive vs. testimony) | RFC-001 §7 | Bounds what "history is preserved" can claim |
| Specimen is the representation, never the person | RFC-001 §5.3 | Archival ethics; fixes §4.2 |
| Held tension | RFC-001 §5.5 | Dispute terminality; fixes §3.6 |
| Promotion boundary (readings vs. claims) | RFC-001 §5.4 | Separates observation of the process from governance of it |
| Commissioning by challenge — never silently added | RFC-001 §6 | The missing ratification rule, in miniature (§1) |
| No aggregation; disagreement is information | RFC-001 §6 | Forces the plural-constitution question (§4.4) |
| Independence of perspective, not identity of reviewer | RFC-001 Q-i | The correct form of blind/multi-perspective review (§3.1) |
| Cheap, plural, recorded, contestable composition | RFC-002 §3 | The correct form of the review process generally |
| No authority layer; convening, not commanding | RFC-002 §4 | The correct relation of process to participants |

A constitution that is outrun by its statutes should be revised from them.
RFC-000 should be rebuilt as the *generalization* of RFC-001/002's principles,
not as their preamble.

## 7. Simplification: invariants and bylaws

Nearly everything in RFC-000 is bylaws. The constitutional core, extracted and
strengthened, is about seven clauses:

1. **Supremacy of Reality.** Evidence outranks any representation, any process,
   and any value on this list except this clause. Entrenched.
2. **The Record.** History — including failures, rejections, and every amendment
   to this constitution — is preserved append-only, subject to a tombstone
   redaction mechanism that preserves shape and reasons. The Record is testimony
   about the world and constitutive only of the discipline's own acts.
3. **Plurality.** No total vantage point at any scale: no single instrument,
   reviewer, integrator, or canon. Disagreement is information; it is juxtaposed
   and metabolized, never averaged, and disputes may terminate as *held*.
4. **Persons are not specimens.** Representations compete; records, measures,
   and archives never function as rankings of people.
5. **Provenance.** Every artifact — human or machine — is versioned,
   inspectable, attributable to its generating process, and challengeable.
   Independence of perspective is established by provenance, not assertion.
6. **Ratification and stewardship.** Nothing enters canon without recorded
   challenge and an explicit, named decision rule; integration is an office with
   selection, term, removal, and succession.
7. **Exit.** The Record is portable and forkable under terms fixed here; the
   right to fork is the check of last resort.

Plus one meta-rule: clauses 1–7 amend only by an expensive, defined procedure;
everything else in the project (pipeline stages, review roles, RDT questions,
layer names, cadence) is bylaws, amendable by ordinary process and *expected* to
churn. The three named layers, the book, and the Brill Center belong in a
roadmap document, not a constitution: constitutionalize the functions
(motivation, principle, implementation) if anything, never the current brands.

## 8. Answers to the eight questions posed

1. **Weakest assumptions:** that better representations produce peace (§4.1);
   that representations detach from authors' interests (§4.2); that good faith
   can be presumed (§3.2); that human integration stays meaningful at AI
   throughput (§4.6).
2. **Missing principles:** decision rule and stewardship office (§1); tiered
   amendment (§2); membership/standing (§3.1); precedence (§3.3); substrate
   governance (§3.4); right to fork (§3.5); dispute terminality (§3.6);
   redaction (§3.7).
3. **Overlooked failure modes:** §5 — founder capture, amendment seizure,
   process priesthood, review flooding, archive-as-weapon, irenic drift,
   substrate coup, schism, filibuster, success-narrative Goodhart.
4. **Historical analogues:** IETF ("rough consensus and running code" — notably
   *has* the decision rule RFC-000 lacks); Debian's constitution and the ASF
   (offices, succession); Wikipedia's pillars and its pathologies (process
   priesthood, archive weaponization — the best available failure data);
   Ostrom's commons principles (the checklist §3.2 applies); Nomic (why §2 is
   self-undermining); the Royal Society's *nullius in verba* (supremacy of
   evidence as an entrenched clause, 360 years of survivorship); registered
   reports in open science (blind review done with provenance).
5. **Corrupting incentives:** reputation attached to preserved failure; control
   of the integration bottleneck; the Peace criterion rewarding comfort;
   procedure-fluency outcompeting substance; unfunded review labor drifting
   toward whoever will pay for it.
6. **Unnecessarily complicated:** the mandatory nine-role review (make plurality
   the invariant, the roster bylaws); the strict linear pipeline (make recorded
   challenge the invariant, the path bylaws); the AI-specific clause (subsumed
   by provenance); the three named layers (roadmap, not constitution).
7. **Can it generalize?** Yes — but only the invariant core (§7) generalizes.
   The pipeline, roles, and layers are this project's implementation of the
   invariants, and mistaking them for the methodology would export the
   scaffolding instead of the building.
8. **Constitutional vs. implementation detail:** §7 is the proposed partition.
   Everything in RFC-000 not on that list should be demoted to bylaws without
   loss — and the demotion is itself the strengthening, because it frees the
   process to evolve while making the anchors real.

## 9. Disposition

Recommend: **revise before canonization.** RFC-000 should not enter the
Constitution in its current shape, because in its current shape it *is* the
Constitution-by-default of whoever integrates it — the very outcome its values
reject. The revision path is unusually clear: pull the entrenched clause and the
plurality machinery up from RFC-001/002, add the decision rule, stewardship
office, standing, exit, and tiered amendment it lacks, and demote the pipeline,
roles, and layers to bylaws. Preserve this review either way; if it is wrong,
the record of *how* it is wrong is the first calibration datum for the review
process it criticizes.
