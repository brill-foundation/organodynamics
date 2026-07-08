# Editorial Deliverable 4 — Provenance Map

*Where every recovered paragraph came from. The manuscript is a derived artifact; this is
the derivation.*

The rule, stated once: **no paragraph of recovered doctrine appears in the manuscript
without a source in this map.** Editorial connective tissue — sentences written only to
join two recovered passages into readable continuity — is marked `[ed.]` in the chapters
and is never doctrine. Where a chapter asserts something the sources do *not* support, it
is not asserted; it is flagged as a gap (Deliverable 10).

Provenance notation used in the chapters' footers:

- `R1 §5.4` — RFC-001, section 5.4 (revision 3, the canonical text, unless a revision is named)
- `R1@rev2 §6` — a *superseded* passage, cited from that earlier revision
- `R2 §3` — RFC-002, section 3
- `README` — repository README
- `SKEL:00-door` — the empty skeleton file whose title frames the chapter
- `EVO-1 / EVO-2` — the revision diffs (historical layer)
- `[ed.]` — editorial bridge; not recovered doctrine
- `commit:1be63ae` — a specific commit in the Record

---

## Chapter-by-chapter provenance

### Front matter
| Element | Provenance |
|---------|-----------|
| Title page | `README`, `SKEL:*` (the recovered title), `LICENSE` |
| Colophon / reconstruction note | `commit:1be63ae`, whole-Record analysis `[ed.]` |
| How to read | `[ed.]` (navigation apparatus) informed by the mission's staged-maturity principle |
| Preface — *The Book That Already Existed* | Repository Inventory `[ed.]`; `README` |

### Chapter 0 — The Door
| Passage | Provenance |
|---------|-----------|
| A representation is a *door*; you *open* one | `R1 §5.4` |
| The door that sits for a year is an observation, not a deficiency | `R1 §5.3` (prohibition 3) |
| Promotion: an interpreted reading "enters the front door … as a door" | `R1 §5.4` |
| Chapter framing / title | `SKEL:00-door` |
| Essayistic connective prose | `[ed.]` |

### Chapter 1 — Vision
| Passage | Provenance |
|---------|-----------|
| "An engineering discipline for evolving representations of reality" | `README`, `R1 §1` |
| Without an instrument there is only anecdote | `R1 §2` |
| Measurement is never neutral; the tooling *is* a theory of what matters | `R1 §2` |
| "Work in Progress" as a stance, not an apology | `README` `[ed.]` |

### Chapter 2 — Organodynamics
| Passage | Provenance |
|---------|-----------|
| Definition of the Instrument (second-order; three commitments) | `R1 §3` |
| The ontology table (Reality … Observations) | `R1 §4` |
| The count "five" was quietly falsified | `R1 §4` (rev 3 note), `EVO-1` |
| The telescope that bends its sky; restraint | `R1 §5.1` |
| Resolved by challenge; a preserved rejection is the first negative result | `R1 §10` |

### Chapter 3 — Come
| Passage | Provenance |
|---------|-----------|
| Two modes: ambient and directed observation | `R2 §1` |
| The Inquiry: question, roster, termination, disposition | `R2 §2` |
| Cheap, plural, recorded, contestable | `R2 §3` |
| Anyone may open a competing Inquiry; default is no restriction | `R2 §3`, `R2 §4` |
| Commissioning by challenge; never silently added | `R1 §6` |
| Invitational register / "Come" framing | `SKEL:03-come` + `[ed.]` (see Gap G-3) |

### Chapter 4 — Reality Layers
| Passage | Provenance |
|---------|-----------|
| The hierarchy: Reality → Record → Observatory → Instruments → Observations → Representations | `R1 §7` |
| A loop, not a line; Reality is the only unproduced node | `R1 §7` |
| The Record's two zones: constitutive vs testimony | `R1 §7` |
| One Record, many Instruments; the Observatory defined | `R1 §6` |
| Observations immutable for free; recalibrate the instrument | `R1 §5.6` |
| STATE is a reading, not a document | `R1 §5.7` |
| *Superseded:* "the unity that matters is the Record" | `R1@rev2 §6`, `EVO-2` |

### Chapter 5 — Personal Worlds
| Passage | Provenance |
|---------|-----------|
| Representations are authored, confidence-bearing, mature through a lifecycle | `R1 §4`, `R1 §3` |
| The specimen is the representation, never the author; no per-author metrics | `R1 §5.3` (prohibition 1) |
| Honest uncertainty dies the moment confidence reads as a competence score | `R1 §5.3` |
| Merit is adjudicated by challenge, not measured | `R1 §5.3` (prohibition 2) |
| "Personal worlds" framing | `SKEL:05-personal-worlds` + `[ed.]` (see Gap G-5) |

### Chapter 6 — Hospitality
| Passage | Provenance |
|---------|-----------|
| Tension is a relation; lifecycle open/active/resolved/held/dissolved | `R1 §5.5` |
| The held (accepted) paradox is the generative organ of the discipline | `R1 §5.5` |
| Disagreement is information; do not average it away | `R1 §6`, `EVO-2` |
| The discipline metabolizes disagreement into knowledge at every level | `R1 §6` |
| Inquiry localizes disturbance in time; a standing pipeline is a panopticon | `R2 §3` |
| Hospitality framing | `SKEL:06-hospitality` + `[ed.]` |

### Chapter 7 — The Sun
| Passage | Provenance |
|---------|-----------|
| Reality above the Record; the Record is an artifact | `R1 §7` |
| Reality is not negotiated; representations are | `R1 §7` (quoted constitutional principle) |
| Reality is the only element of the diagram nothing else produces | `R1 §7` |
| One sky, many telescopes; the sky was never the Record | `R1 §6`, `R1 §7`, `EVO-2` |
| The Record as engineered homage to an asymmetry it cannot embody | `R1 §7` |
| "The Sun" image | `SKEL:07-the-sun` + `[ed.]` (see Gap G-7) |

### Chapter 8 — Open Questions
| Passage | Provenance |
|---------|-----------|
| RFC-001 open questions Q-a … Q-i | `R1 §9` (each verbatim in intent) |
| RFC-002 open questions Q-a … Q-d | `R2 §5` |
| What the RFCs decline to decide (implementation) | `R1 §8`, `R2 §6` |
| The preserved rejection as first negative result | `R1 §10`, `R2 §6` |

### Appendices
| Element | Provenance |
|---------|-----------|
| Appendix A — RFC-001 verbatim | `rfcs/RFC-001-the-instrument.md` @ `473f4a9` |
| Appendix B — RFC-002 verbatim | `rfcs/RFC-002-inquiry.md` @ `473f4a9` |
| Appendix C — Evolution of RFC-001 | `EVO-1`, `EVO-2`; commits `39fa24e`, `e1ff5a6`, `c9dcb72` |

---

## Provenance integrity statement

- **Coverage:** every doctrinal paragraph in the manuscript traces to `R1`, `R2`, or
  `README`. Editorial bridges are marked `[ed.]` and assert no doctrine.
- **Fidelity:** recovered doctrine is reproduced in the author's own words wherever the
  chapter quotes or closely paraphrases; the appendices carry the RFCs *verbatim* so the
  reader can audit any derivation against the source of truth.
- **Reversibility:** because the RFCs remain in `/rfcs`, any reader can re-derive the
  manuscript from the Record. The book is a lens; the repository is the sky.
