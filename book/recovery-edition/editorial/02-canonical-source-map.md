# Editorial Deliverable 3 — Canonical Source Map

*How the recovered spine and the recovered flesh interlock — and how conflicts were resolved.*

This map does three things: (1) shows the **chapter → source** interlock that turns nine
empty files and two RFCs into one manuscript; (2) records the **conflicts** found and how
Canonical Priority resolved them; and (3) fixes the **terminology** so the manuscript
speaks with one voice.

---

## 1. The interlock

The author left an ordered skeleton (`drafts/`) and a body of canon (`rfcs/`). They lock
together through shared vocabulary. The decisive hinge is the word **door**: RFC-001 §5.4
names a representation a *door* ("it enters the front door … as a door"), and §5.3 uses
"a door that sits for a year" as its example of an observation. The first chapter is
titled *The Door*. The skeleton and the canon were built for each other.

| # | Chapter (from skeleton) | Primary canonical sources | Interlock evidence | Maturity |
|---|-------------------------|---------------------------|--------------------|----------|
| 0 | **The Door** | `F-R1-§5.4`, `F-R1-§5.3` | RFC calls a representation a *door*; you *open* a door | ▮ ink (vocabulary), ✎ pencil (essay) |
| 1 | **Vision** | `F-DOC-1`, `F-R1-§1`, `F-R1-§2` | README's one line; RFC's opening definition of the discipline | ▮ ink |
| 2 | **Organodynamics** | `F-R1-§3`, `F-R1-§4`, `F-R1-§5.1`, `F-R1-§10` | The discipline named; its ontology; its method (challenge) | ▣ canonical |
| 3 | **Come** | `F-R2-§2`, `F-R2-§3`, `F-R2-§4`, `F-R1-§6` | The invitation: Inquiries "cheap, plural, recorded, contestable"; "anyone may open" | ✎▸ pencil+ink |
| 4 | **Reality Layers** | `F-R1-§7`, `F-R1-§4`, `F-R1-§6`, `F-R1-§5.6`, `F-R1-§5.7` | The explicit hierarchy Reality → Record → Observatory → … | ▣ canonical |
| 5 | **Personal Worlds** | `F-R1-§5.3`, `F-R1-§5.1`, `F-R1-§3` | Representations are authored & confidence-bearing; the specimen is never the author | ▮ ink (doctrine), ✎ pencil (essay) |
| 6 | **Hospitality** | `F-R1-§5.5`, `F-R1-§6`, `F-R2-§3`, `F-R1-EVO-2` | Tension is generative; *disagreement is information*; the discipline metabolizes conflict | ▣ canonical |
| 7 | **The Sun** | `F-R1-§7`, `F-R1-EVO-2` | Reality is the one unproduced anchor "nothing else produces"; one sky, many telescopes | ▮ ink (claim), ✎ pencil (image) |
| 8 | **Open Questions** | `F-R1-§9`, `F-R2-§5`, `F-R1-§8`, `F-R2-§6` | The living frontier: every Q-* preserved verbatim in intent | ▣ canonical (questions) |

Legend: ✎ Discovery · ✎▸ Investigation · ▮ Validation · ▣ Canonical (see Visual Language Guide).

## 2. Conflicts found and resolved

The repository is small, but its Record deliberately preserves the discipline *changing its
mind*. These are not errors to erase; per the mission, they are the historical layer. Each
was resolved by taking the **latest revision as canonical** while **preserving the earlier
belief** as a dated waypoint.

| ID | The conflict | First believed | Became canonical | Resolution rule | Where preserved |
|----|--------------|----------------|------------------|-----------------|-----------------|
| C-1 | How many kinds of object? | "**Five** kinds" (rev 1, §4) | Count left unstated; **seven** rows incl. Reality & Observatory (rev 3) | Latest RFC revision wins | Ch. 2, 4; App. C |
| C-2 | What is the deepest invariant? | "The unity that matters is **the Record**" (rev 2, §6) | "**Reality** above the Record; the Record is an artifact" (rev 3, §7) | Latest RFC revision wins; earlier kept as waypoint | Ch. 4, 7; App. C |
| C-3 | Why refuse to aggregate readings? | "No aggregation" — defensive, anti-Goodhart (rev 2) | "No aggregation **because disagreement is information**" — constitutional (rev 3) | Latest revision wins; deepening, not reversal | Ch. 6; App. C |
| C-4 | Is the Instrument one thing? | Assumed singular ("**The** Instrument", rev 1) | Plural; the **Observatory** of many Instruments (rev 2+) | Latest revision wins | Ch. 4; App. C |
| C-5 | Where does directed observation live? | Implicit open question inside RFC-001 (Q-h) | Split out into **RFC-002 (Inquiry)** | Both approved-RFC tier; the split is itself canonical | Ch. 3, 8 |

No conflict required *discarding* any text. Every superseded claim survives, dated, in
Appendix C and in the affected chapters' historical sidebars.

## 3. Canonical terminology (single-voice glossary keys)

To keep the author's voice consistent across chapters woven from different RFC sections,
the manuscript fixes these spellings and senses. Full definitions live in the Glossary.

| Term | Canonical sense | Not to be called |
|------|-----------------|------------------|
| **Reality** | The one unproduced anchor; not negotiated, not revisable | "the world" (informally OK, but capitalize the concept) |
| **the Record** | Append-only history of everything that happened; an artifact, not the anchor | "the log", "the database" |
| **Representation** / **door** | An authored claim about Reality; bears confidence; matures; can be challenged | "document", "note" |
| **Relation** | A second-order object *about* representations (tension, supersession, dependency) | "link" (informal only) |
| **Instrument** | A versioned, reproducible function from the Record to observations, plus its protocol | "tool", "script", "metric" |
| **the Observatory** | The set of Instruments over the one Record, plus the comparison protocol | "the dashboard", "the pipeline" |
| **Observation** | A reading `Instrument(Record, t)`; unauthored, confidence-free, reproducible | "metric", "result" |
| **Inquiry** | An Observatory composed dynamically around a live question | "investigation" (informal only) |
| **the Goodhart line** | The boundary: measure nothing that, once measured, redirects authors away from Reality | "the metric rule" |

→ Provenance for every placed paragraph is recorded in **Deliverable 4 — Provenance Map**.
