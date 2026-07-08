# Chapter 8 · Open Questions

```
Maturity  ✎──✎▸──▮──▣     this chapter reaches: ▣ Canonical as questions; ✎ Discovery as answers
          ▓▓▓▓▓▓▓▓▓▓       (the questions are settled and open on purpose; the answers are not written)
```

> **Blueprint.** The discipline keeps its unfinished edge in plain sight. This chapter gathers
> every open question the canon has posed — nine from *The Instrument*, four from *Inquiry* —
> and the things the RFCs deliberately decline to decide. Nothing here is a gap in the *book*;
> it is the recovered frontier of the *discipline*. An open question, well kept, is knowledge
> too.

---

A living discipline is defined as much by what it has refused to settle as by what it has
settled. This final chapter is the discipline's frontier, recovered whole. The questions are
canonical — they are stated exactly where the discipline left them, open. Their answers are not
written, and this chapter does not invent them; the pencil in its maturity bar is precisely the
absence of answers, kept honest.

<!-- FIG-8.1 -->
```mermaid
%% ✎▸ FIG-8.1 — the open-question frontier, by theme
mindmap
  root(("open<br/>questions"))
    Calibration
      "who may recalibrate? (R1 Q-b)"
      "does reading calibration history<br/>change recalibration? (R1 Q-a)"
    Bounds
      "minimal vs maximal observables (R1 Q-c)"
      "which relations beyond tension? (R1 Q-d)"
    Composition
      "comparison protocol: how much<br/>shared vocabulary? (R1 Q-e)"
      "what must an Instrument show<br/>to be commissioned? (R1 Q-f)"
      "minimum viable Observatory? (R1 Q-g)"
    Self_similarity
      "is 'no total vantage'<br/>constitutional? (R1 Q-i)"
    Inquiry
      "can events open Inquiries? (R2 Q-a)"
      "what terminates one? (R2 Q-b)"
      "do competing Inquiries need<br/>their own protocol? (R2 Q-c)"
      "is disagreement the natural<br/>terminator? (R2 Q-d)"
```

## From *The Instrument* (RFC-001)

- **Q-a — Self-observation.** Partially answered: an Instrument that reads calibration history
  is just another member of the Observatory (no meta-instrument needed, because calibration
  history lives in the Record). *Residual:* does the act of reading calibration history change
  how recalibration is proposed?
- **Q-b — Recalibration authority.** Who may recalibrate an Instrument, and what challenge must
  a recalibration survive?
- **Q-c — The observability window.** Is there a *minimal* set of observables below which the
  discipline is blind, and a *maximal* set above which Goodhart dominates? What bounds the
  window between blindness and distortion?
- **Q-d — More relations?** Are relations beyond tension and supersession needed (support,
  dependence, analogy) — or does proliferating relation-kinds re-create the measurement problem
  one level up?
- **Q-e — The comparison protocol.** What belongs in it: shared *coordinates* only
  (`at-commit`, `instrument-version`), or shared *units* too? How much vocabulary can
  Instruments share before they collapse into one?
- **Q-f — Commissioning evidence.** What must a candidate Instrument demonstrate to be
  commissioned — its restraint case, its disturbance profile, its expected failure modes?
- **Q-g — Minimum viable Observatory.** What is the smallest roster of Instruments that can
  detect its own artifacts?
- **Q-h — Directed observation.** *Exposed and moved to RFC-002.* Who composes the Observatory
  around a live question? RFC-001 defines ambient observation only; the directed mode became
  [Chapter 3 · Come](03-come.md).
- **Q-i — Self-similarity.** The pattern repeats at every scale: plural Instruments over
  readings, plural challengers over claims, plural perspectives over proposals — no total
  vantage point anywhere. Does that principle belong in the *constitution* rather than in an
  RFC? If codified, it should protect *independence of perspective*, not identity of reviewer —
  "a fixed roster of predictable voices is aggregation by another name."

## From *Inquiry* (RFC-002)

- **Q-a — Who or what opens an Inquiry?** Can an Inquiry be opened by an *event* (a tension
  appearing) as well as by a researcher? And if Inquiries open automatically, is automatic
  observation a disturbance the Goodhart line forbids?
- **Q-b — Termination.** What terminates an Inquiry — and is *abandonment itself* a recorded
  finding? (An Inquiry nobody finished may be the dormancy signal of the question layer.)
- **Q-c — Competing Inquiries.** Do competing Inquiries into one question need a comparison
  protocol *of their own* — the Observatory problem, one level up — and does the tower stop
  there?
- **Q-d — The natural terminator.** Is "disagreement is information" the natural termination
  criterion: an Inquiry ends when the disagreement it was opened to understand has been
  *metabolized*, not suppressed?

## What the discipline refuses to decide (yet)

Some things are open not because they are hard but because the discipline holds that *they
follow understanding, and the understanding is what the RFCs exist to settle first.* The canon
lists them plainly, and the book does not pre-empt them:

- schemas, scripts, and directory layout;
- the exact maturity vocabulary and the cadence of readings;
- whether cached readings live in the repository at all;
- the initial roster of the Observatory.

> "Those follow understanding; this RFC is the understanding." — RFC-001 §8

## The dignity of the open question

One principle governs this whole chapter and closes the book. In Organodynamics, an open
question is not an embarrassment and a rejected idea is not waste. Both RFCs end the same way:
if a proposal is rejected, *the rejection is preserved* — "the discipline's first negative
result, and its first proof that the record keeps what it learns from." RFC-002 goes further:
if its central distinction turns out to be unreal, it "should be rejected and absorbed into
RFC-001 — and the rejection kept, as always."

That is where the book leaves you: not at a conclusion, but at a well-kept frontier. The
manuscript is Work in Progress in the proud sense of Chapter 1 — it matures in view, it keeps
what it used to believe, and it is never finished. These questions are its growing edge, and
the invitation of Chapter 3 stands: come and open a door on any of them.

---

> ▣ **Take with you:** the discipline's frontier is thirteen open questions and a short list of
> things it declines to decide until it understands more. None are defects; a well-kept open
> question is knowledge, and a preserved rejection is the Record proving it learns. The book
> ends open, on purpose.

---

### Provenance
- RFC-001 open questions Q-a … Q-i (each recovered in intent) — **R1 §9**.
- RFC-002 open questions Q-a … Q-d — **R2 §5**.
- "Those follow understanding; this RFC is the understanding"; the undecided implementation
  list — **R1 §8**.
- The preserved rejection as first negative result — **R1 §10**; RFC-002's absorb-and-keep
  disposition — **R2 §6**.
- Chapter frame and title — **SKEL:08-open-questions**.

### Navigate
← [Chapter 7 · The Sun](07-the-sun.md) · → *(appendices & apparatus)* · deeper:
[Appendix A](../appendices/A-rfc-001-the-instrument.md),
[Appendix B](../appendices/B-rfc-002-inquiry.md) · concepts: **open question**,
**recalibration**, **Inquiry**, **commissioning** → [Glossary](../apparatus/glossary.md)
