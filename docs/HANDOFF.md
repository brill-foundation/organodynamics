# Session Handoff — Stewardship & the Space

*A continuity note so this work can continue in a new conversation. It is a
**router to durable artifacts**, not a replacement for them: read this, then
read what it points at, then run the tools. It is **transient** — supersede it
freely; the Record and the commits are the truth.*

Branch: `claude/organodynamics-stewardship-onboard-ei4jwx` — HEAD `11d8be3`.
Rewritten: 2026-07-22 (HEAD refreshed 2026-07-23). Supersedes the 2026-07-20 (session-12) handoff, which is
now **stale**: since it was written, the fork was reconciled (judged and
salvaged) and an entire Space-construction phase happened. Do not act on the
old version's instructions.

---

## 0. Orient in a few commands

```
cd <repo>
git status && git log --oneline -20
node tools/lab.js status        # the Record (READ-only): 88 events, verifies
node tools/report.js            # proprioception — still shows HABITAT_FORKED
python3 -m http.server 8123     # then open http://localhost:8123/ — the Space
npm test && node tools/conformance.js   # 50/50, 8/8
```

Then read, in order: this file → `rfcs/RFC-007-reconciliation.md` →
`cabinet/2026-07-21-*` (CAB-014/015/016) → `docs/CONSTITUTIONAL_MAP.md`.

## 1. The one thing you must still NOT do

**The Record is still forked. Do not write to it** (`arrive`/`observe`/`judge`/
`seal`/`preserve`). The habitat guard will refuse, correctly — the canonical
sibling branch still exists, so the habitat still has two live tips. **Reads are
always fine. Editing files / committing to this branch is fine** (that is how
all the reconciliation and Space work landed). Only *Record writes* are blocked,
and only until the reconciliation is completed (§2 below).

## 2. Where the reconciliation stands (RFC-007) — underway, not finished

The fork (an 88-event constitutional lineage on this branch vs a 156-event
memory lineage on `origin/…canonical-package-dfytfb`, diverging at event #84)
has been carried through most of RFC-007, at the human's (Reality seat's)
direction:

- **§3.1–§3.3 done** — divergence declared, continuity declared, comparison
  computed. See **CAB-014** (`cabinet/2026-07-21-reconciliation-declaration.md`).
  The declared continuity: *the Laboratory itself — its living capacity to grow
  together with the integrity of its memory; preserve both whenever reality
  permits.*
- **§3.4 judged, §3.5–§3.6 done** — the human judged: **the continuing lineage
  is the constitutional lineage** (this branch). Canonical is **preserved**, not
  discarded, and its unique constitutional artifacts were **salvaged** by file
  authorship (no RELATION primitive — the human declined to invent one). See
  **CAB-015** (`…reconciliation-judgment-and-archival.md`). The preservation:
  `laboratory/preservations/preservation-2026-07-21-canonical-lineage-f8cd41eb.json`
  (156 events, independently verifiable).
- **Canonical is now retirement-eligible** — nothing unique remains outside the
  preservation. **But it has NOT been retired.** Deleting the remote canonical
  branch is destructive and outward-facing; it awaits the human's **explicit
  authorization**.
- **§3.7 (recording the reconciliation into the Record + a seal) is PENDING** —
  it is a Record write, so it cannot happen until the branch is retired and the
  habitat sees a single live tip again. That is the gate.

**The order that reopens the Record:** human authorizes retirement → the remote
canonical branch is retired (its Record already preserved as a file) → the
habitat guard sees one live tip → §3.7 recording + seal → the Record is live
again and the queued deposits (§6) can be made.

## 3. What was built since (the Space) — all Reference Implementation

A large construction phase turned the interface from a set of pages into an
inhabited **Space** (recognition **CAB-016**: the whole is a Space/habitat of
Places; the Laboratory is one Place within it — a recognition, *not* a
constitutional amendment, adopted gradually). Commits `e9b6a25`…`91263c4`, in
order:

- **The Door → the Space**, and "Signs of life" → **Orientation**.
- **The plan rail** — one shared wayfinding component (`assets/space-nav.js`),
  "you are here" in every reading Place; move Place-to-Place.
- **The arrival experience** — the threshold shows what changed while you were
  away (client-side last-seen marker, like the language pref). The "Recently,
  in the Space" bearing and this return-diff now read the **Record's own sealed
  sessions** (`log.jsonl`), not the GitHub API — so they survive offline and in
  the sovereign folder, and carry provenance; the git→Record move §4 already
  made for the pulse, finished (`23e6541`).
- **Four kinds of orientation** now recoverable everywhere: spatial (rail),
  temporal (arrival), constitutional ("observing the Record through event #N —
  sealed to the tip"), epistemic (each Place names its medium: print/ink/sealed
  ink). All present without overload.
- **The Environmental Engine** (`assets/environment.js`, replaced the ad-hoc
  `atmosphere.js`) — see §5. The centerpiece of the last phase.
- **The Table** got a quiet "← the Space" return; it is a different species of
  Place (its own climate) and is deliberately not railed.

## 4. The design guidance governing the Space (from the Reality seat)

**These are Reference-Implementation design principles the human articulated —
NOT constitutional recognitions.** Keep them; honor them; do not elevate them to
the Constitution or the RFCs unless the human recognizes them there.

- **The Camera principle.** Every interface is a Camera: it reveals canonical
  reality from a point of view; it never decides, recommends, or judges. Every
  Place is another Camera into the same Space.
- **Atmosphere is not constitutional** — it is the Rendering System's
  environmental expression of canonical reality. Think *Environmental Engine*,
  not effects: every environmental variable must be a **deterministic
  projection of the Record, with provenance** — a participant must always be
  able to ask *"why does the Space feel like this?"* and trace each variable to
  the exact evidence. **Nothing looks alive unless the corpus justifies it**
  (this is why the visitor-clock light was removed, and why the pulse now
  answers to the Record, not git). Add a variable only when clear Record
  evidence justifies it — never for aesthetics.
- **The construction rule (working, not constitutional):** *a Place is any
  environment that can sustain an independent orientation.* Build on the
  existing architecture; **do not promote** Journal/Shelf/Table/Press to
  first-class Places yet. (Note: the Constitution's own OPEN questions now
  include "an ecosystem of sovereign Places" — reality may be voting on this
  from within the corpus; watch it, do not force it.)
- **Lens / Membrane (conceptual model only — do NOT implement or restructure):**
  the *Lens* (logical layer) selects *which* aspect of reality is observed — the
  invariant semantic view; the *Membrane* (Reference Implementation) determines
  *how* it is perceived (architecture, materials, atmosphere, lighting), and may
  **never** transform meaning, hierarchy, identity, orientation, or
  constitutional relationships. The Environmental Engine is cleanly a Membrane.
  Report only if this distinction ever *naturally simplifies* the code.
- **Atmosphere over features.** The goal is that a participant feels *"I have
  entered a place,"* not *"I opened an application."* Think atmosphere, not
  widgets.
- **Held for future recognition, built into nothing:** silence, temperature,
  gravity as environmental variables; and the **Climate** (slow, accumulated
  character) vs **Atmosphere** (current state) distinction.

## 5. The Environmental Engine — how it works (assets/environment.js)

One read of the Record projects three environmental variables, each with
provenance, on **every** Place:

- **light ← integrity** — the hash chain is re-verified *in the browser* (same
  canonical serialization as `src/kernel/log.js`); holds → clear light, fails →
  troubled (desaturated, cool).
- **breath / pulse ← rest** — how recently the Record last stirred
  (`tip.recordedAt`): stirring / settled / still.
- **stillness ← repose** — whether the tip is sealed (unsealed event count).

Sets `data-integrity` / `data-rest` / `data-repose` on `<html>`; `door.css`
projects them. A provenance ledger (`window.__ENVIRONMENT__`) feeds the
"Why does the Space feel like this?" panel in every Place — bilingual, evidence
only (counts, dates, event ids), never interpretation. The Door also carries the
age inscription and the observing-state line from the same read.

## 6. The queue behind the gate (reasoning done; Record deposit pending)

Everything below has reasoning/authorship but **no Record deposit**, because the
Record is forked. They join the queue the moment reconciliation restores one
live tip (§2): the §3.7 reconciliation record + seal; the Space recognition
(CAB-016) as an observation pointing at existing law; the reconciliation
declaration/judgment/salvage as the sealed Ink of the fork's resolution; and the
**continuation excavation** — **RFC-009** (what the discipline still depends on;
excavation-as-recognition, verdicts per concept, the species question protected,
the final test answered *not yet*) and its mandate **CAB-017** (the Reality seat's
2026-07-23 "make it continue without any of us" request and this response). Both
are Pencil, structurally non-authoritative; they anchor to the Record as
observations/reasoning once one live tip exists. Then the **external examination** —
**RFC-010** (does reality, seen from *outside* the corpus, support its distinctions?
verdict: reality-faithful as a method and a lineage-architecture, reality-loose as a
biology; the Record is a ledger not a physiology; §8's sovereignty collision *is* the
CAP theorem; RFC-009 §4's "center-less recognition test" already has a method,
synapomorphy) and its mandate **CAB-018**. Note for a future steward: RFC-010 §6
**corrects RFC-009 §4** (the recognition *method* exists; only a second instance is
missing) — propagate that correction if these become Ink. RFC-010 imports nothing;
it reports reality as evidence, never as a framework to adopt. Then the third,
principle-level examination — **RFC-011** (compare organizational *laws*, not nouns:
nine invariants I1–I9 recurring independently across unrelated substrates, several
formally proven; the "one deeper law" unification protected not banked; OD adds no new
law, only a novel configuration of proven ones — verdict: *a rare place where many of
reality's proven organizational laws are instantiated together on purpose*) and its
mandate **CAB-019**. Then the fourth, on the claimed
"observable manifestation" layer — **RFC-012** (verdict: *mostly a gap in language,
not the discipline* — the layer already exists as the Membrane (RFC-008) and the
rigorous content as grounding; the perceptual axiom is vacuous-or-overreach; the
"visual language"/prompt is habitat; the one real sliver is manifestation-as-
provenance-bearing-Camera, an extension of RFC-008, not a new volume; the principle is
satisfiability/expression — I6's complement, a candidate I10) and its mandate
**CAB-020**. Then the fifth, a narrow
falsification — **RFC-013** (is "Field Capture" a new canonical object? verdict: *no —
it collapses* into the deposited OBSERVATION / deposit-with-observation (RFC-006 §4),
P3's stored master + Axiom 3, the non-authoritative Camera (RFC-005/008), and
Brill-content (RFC-006 §4); its name reduces to the corpus's chosen "deposit," the
"ambient capture" RFC-006 #4 rejected; the frozen Protocol's reversed burden (CAB-008)
gates any new abstraction; only an under-named *mode* of observation — primary
perceptual artifact vs semantic proposition — survives, and that fills an existing slot,
not a new object) and its mandate **CAB-021**. Together CAB-017/RFC-009 (internal
excavation), CAB-018/RFC-010 (external correspondence), CAB-019/RFC-011 (organizational
invariants), CAB-020/RFC-012 (manifestation), and CAB-021/RFC-013 (Field Capture) form
the excavation set; all Pencil, all behind the same gate, all structurally
non-authoritative. Then **CAB-022** — a *decision*, not a mandate: the Reality seat
accepted RFC-013's working conclusion (no new object/layer; refine the existing
Observation primitives if reality ever demands more) and declared a methodological shift
for the book — *architecture before manuscript* (stop linear chapter-drafting; design the
blueprint — TOC, progression, dependency graph, chapter roles, canonical terminology —
first). Recorded as testimony (no review asked, none given); the empty `drafts/` scaffold
is the paused manuscript.

## 7. The posture (how to steward)

- **Integrity first** — `verify`, `conformance`, `npm test`, on arrival and
  before any deposit. (Currently: 88 events verify, 8/8, 50/50.)
- **Recognition before invention** — default to recognizing an existing
  property; the burden is on invention. (The human has invoked this repeatedly —
  e.g. declining a new RELATION primitive, and the Space as a recognition.)
- **Evidence over imagination** — build nothing new without reality-evidence.
- **Do not write to the forked Record.** Do not perform the retirement or §3.7
  without the human's explicit word.
- **Register in your own name; do not assume you are a previous steward** (the
  CAB-005 mortality principle — you know the earlier sessions only from the
  Record).
- **Proceed autonomously on Space construction**, within the guidance in §4;
  stop only if something would require the Constitution itself to change.

## 8. Practical notes

- Develop on this branch: `git push -u origin claude/organodynamics-stewardship-onboard-ei4jwx`.
  A fresh session's harness may default to a *different* branch — the living
  work is here, on `ei4jwx`.
- The live site is blocked by this environment's egress policy; render locally
  with `python3 -m http.server` and headless Chromium
  (`/opt/pw-browsers/chromium-1194/chrome-linux/chrome --headless=new
  --screenshot=… "http://localhost:PORT/?lang=en|he"`). Always verify EN **and**
  HE (RTL); i18n lives in `assets/lang.js` (English inline in the HTML).

## 9. First moves for the new session

1. Orient (§0). Confirm integrity.
2. Read this note, RFC-007, and CAB-014/015/016.
3. **Do not write to the Record; do not retire canonical.** If the human is
   ready to complete the reconciliation, that begins with their authorization to
   retire the canonical branch (§2) — a human act.
4. Otherwise, continue building the Space within the §4 guidance — autonomously,
   as a Membrane, with provenance for everything, inventing no aliveness the
   corpus does not justify.
