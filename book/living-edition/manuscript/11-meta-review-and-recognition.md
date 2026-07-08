# Chapter 11 · Meta Review & Recognition

```
🔵 blue ink · two mechanisms that keep power and reputation honest
Medium  ✏️──🔵──⚫   reaches: 🔵    ·    live margins: 🔴 ×2  🟢 ×2
Zone: THE SPECIFICATION
```

> **Blueprint.** Two invisible steps decide everything in a knowledge system: *integration*
> (how reviews become a revision) and *recognition* (how contributors are seen). Left dark,
> each becomes a capture point. **Meta Review** (RFC-003) makes integration a recorded,
> challengeable artifact. **Recognition** (RFC-005) lets contributors be seen without
> recognition ever becoming epistemic privilege — profiles are *authored claims*, praise is
> *testimony*, and no number ever goes up.

Chapters 9 and 10 built the constitution and its substrate. This chapter guards the two
places where authority and reputation actually leak in. Both RFCs are pure specification
work — and both are exercises in *refusing* to do something the system easily could.

---

### ▣ Technical — Meta Review (RFC-003)

The RFC-000 review found the pipeline's one dark step: **Integration.** Reviews are produced
in the open; what happens to them occurs in the author's head. *Where the integration
function is undefined, the author is the integration function.*

> ⚫ *definition* — **a Meta Review** is a directed Inquiry (RFC-002) whose record is a corpus
> of independent reviews of one proposal, producing two things kept strictly apart: **maps**
> (reproducible descriptions of where the corpus converges, diverges, and resists
> description) and a **recommendation** (an authored, confidence-bearing claim about the
> synthesis direction). It synthesises *perspectives, not proposals* — it never writes the
> revised text and never rules on the proposal's fate.

Its disciplines mirror RFC-001 §5.3 because they guard the same line: **not a verdict** (it
never accepts or rejects), **not aggregation** (no vote-counting; "7 of 9 reviews favour X"
has already failed), **not a super-review** (the meta-reviewer adds no new critique), **not
exclusive** (competing Meta Reviews are legal; divergence is information). Quorum is **three
independent processes** — and independence is *provenanced, not asserted* (two reviews from
the same model family with similar prompts are one process). A revised RFC must carry a
**disposition table**: for every mapped item, what the revision did — absorbed, declined
with reasons, deferred, or held.

> 🟢 insight — Meta Review is **not a new primitive.** It is the Observatory's comparison
> protocol (RFC-001 §6) run over reviews instead of readings, convened as an Inquiry. Because
> it is built from existing primitives, it *inherits their disciplines for free* — no
> aggregation, provenance, challengeability. RFC-001 Q-i predicted it exactly: "plural
> perspectives over proposals — no total vantage point at any scale." A genuinely new
> primitive would have been a warning sign.

> 🔴 tension — Meta Review makes integration *visible*; it does **not** make it *legitimate*.
> "A visible synthesis adopted by an invisible decider is progress, not resolution." The
> ratification rule (Q-f) stays open. Human attention is "the scarce constitutional
> resource," and the meta-reviewer who writes the synthesis a steward actually reads holds de
> facto power — bounded by citation-traceability and competing Meta Reviews, never
> eliminated.

### ▣ Technical — Recognition (RFC-005)

Removing ownership is easy; removing the human need for **recognition** is neither possible
nor desirable — suppress it and you lose your best contributors to institutions that provide
it; compile it and you *become* that institution. RFC-005 threads the needle with four
mechanisms:

1. **The CV rule** — a Personal Research Profile exists, but as a genre *authored by its
   subject*: every item cites the journal events that ground it, the system verifies the
   citations *and does nothing else*. A system-computed profile is an *observation about a
   person* (forbidden, RFC-001 §5.3); a self-authored one is a *claim by a person* — staked,
   challengeable, costly to falsify against an append-only journal. *"Keep the citation; kill
   the counter."*
2. **Praise is testimony, never system speech** — "strong at synthesis," uttered by the
   system, is a score in adjectives. The same sentence from a *peer*, on the record, is
   legitimate acknowledgment — preserved forever, attributed always, **never totalled**.
3. **The inadmissibility firewall** — no profile, acknowledgment, or history is admissible as
   a *protocol input* to any constitutive act. Reputation may influence a human's judgment;
   it can never *entitle*, and never accumulate into standing.
4. **Identity-blind attention defaults** — the workbench never orders or weights work by
   author identity in any default view. Provenance-*class* stays visible where it is evidence
   (independence); author-*standing* is never a sort key.

> 🟢 insight — the fundamental framing is **Recognition ↔ Equality of Challenge**: what must
> be identity-invariant is the *right* to challenge any representation and the *binding cost*
> of a challenge once raised. A challenge from an unknown newcomer must bind a representation
> exactly as one from a celebrated veteran. If that holds, recognition can be generous
> without danger.

### ◇ Human

Both mechanisms answer the same human fear with the same move. The fear: *in any community of
ideas, the powerful and the famous quietly win — their reviews count more, their work gets
read first, their reputations shield their claims.* The move: **make the system refuse to
speak in those registers at all.** The system will not tell you who is smart. It will not
tell you which review mattered most. It will not rank you, thank you by the numbers, or let
your name make your idea cheaper to defend. It will only ever verify what someone *claimed*,
and preserve who did what. Recognition still flows — from peers, in testimony, with proof —
but nothing accumulates, so there is nothing to farm and nothing to weaponise. Against
academia, credentials become *verifiable* rather than asserted. Against social platforms,
*no number goes up.* The whole design consists of things the system **refuses** to do with
data it already has.

### ⏱ Chronicle

RFC-003 was exposed by the RFC-000 review (`27797a10`); META-REVIEW-000 opened in
`awaiting-quorum` (`594046a7`) because RFC-000 had only one review — the discipline refusing
to launder one voice into consensus. RFC-005 was exposed by RFC-004's Q-h and a recognition
reflection (`6ccac0cc` → `49e92b02`). Later, a *second* process began commissioning the
independent reviews needed to reach quorum (`d822ca8a`). Full narrative:
[Act II](../chronicle/02-the-manifest-days.md), [Act IV](../chronicle/04-the-laboratory.md).

> 🔴 tension — RFC-005 §2 refined invariant 5 by "friendly amendment," but RFC-004's text was
> never marked amended — the **conflict of law** carried over from Chapter 10. Season 2's
> precedence work will decide which text governs, or hold the tension. Recorded, not resolved.

---

### Provenance
- Integration invisible; maps vs recommendation; quorum; no-aggregation; disposition table;
  human attention as scarce resource — **RFC-003** (`rfcs/RFC-003-meta-review.md`).
- CV rule; praise as testimony; inadmissibility firewall; identity-blind attention;
  Recognition↔Equality of Challenge — **RFC-005** (`rfcs/RFC-005-recognition.md`).
- The conflict of law — **READING-001** §4.4.
- Journal events `27797a10`, `594046a7`, `6ccac0cc`, `49e92b02`, `d822ca8a`.

### Navigate
← [Chapter 10 · The Substrate](10-the-substrate.md) · →
[Chapter 12 · The Discovery Engine](12-the-discovery-engine.md) · Chronicle:
[Act II](../chronicle/02-the-manifest-days.md) · concepts: **Meta Review**, **quorum**,
**CV rule**, **the firewall**, **equality of challenge** →
[Glossary additions](../apparatus/glossary-additions.md)
