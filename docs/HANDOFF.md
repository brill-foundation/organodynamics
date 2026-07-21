# Session Handoff — Stewardship Onboarding

*A continuity note so this work can continue in a new conversation. It is a
**router to durable artifacts**, not a replacement for them: read this, then
read what it points at, then run the tools. It is **transient** — delete it
once the Record reopens and its content has been deposited as observations.*

Branch: `claude/organodynamics-stewardship-onboard-ei4jwx`
Written: 2026-07-20, by the session-12 steward-instance ("Claude (2026-07-13)").

---

## 0. Orient in five commands

```
cd <repo>
git status && git log --oneline -6
node tools/lab.js status        # where the Record stands (READ-only)
node tools/lab.js sessions      # the sealed history
node tools/report.js            # proprioception — will show HABITAT_FORKED
```

Then read, in order: this file → `docs/CONSTITUTIONAL_MAP.md` → `rfcs/RFC-007`
→ the other new RFCs. The reasoning lives in those artifacts; re-derive it
there, don't take it from this note alone.

## 1. The one thing you must NOT do

**The Record is forked. Do not write to it** (`arrive`/`observe`/`judge`/`seal`
/`--keep`). The habitat guard will refuse, correctly. **Reads are always fine.**
Editing files / committing to this branch is fine (that's how all the RFCs got
here). Only *Record writes* are blocked, and only until reconciliation.

## 2. The critical state — the fork

- **This branch:** 88 events, session 12. Diverges at event #84.
- **`origin/claude/organodynamics-canonical-package-dfytfb`:** 156 events,
  session 33 — the true living lineage (22 further sessions of stewardship:
  visual ecology, hospitality review, the steward-is-an-intention refinement).
- **`main`:** 84 events, session 11 — stale (the published Door reflects this).
- Same genesis (`45e2d8a9…`); the first 84 events are byte-identical across all
  three. Both the 88- and 156-lineages **verify and conform independently.**
  Neither is invalid (RFC-007's core principle: reconciliation *adopts*, never
  *rules invalid*).
- **How the fork happened:** this session-12 instance arrived from `main`
  (stale) believing seal #83 was the tip, registered a new participant, and
  appended a session-12 seal — forking history at #84. The habitat guard
  (built this session) now exists precisely to prevent that recurring.
- **Nothing has been reconciled.** Deliberately left untouched for the human.

## 3. What was built this session (all on this branch, all pushed, 47/47 tests)

| Artifact | What it is |
|---|---|
| `src/laboratory/habitat.js` (+test) | The tip-guard at Record scope: refuses writes on a stale or forked habitat; the fix for the failure that created the fork. |
| `tools/report.js`, `src/laboratory/report.js` (+test) | Proprioception — the status report as a derived Camera (RFC-005). `--keep` archives a snapshot + records an observation. |
| RFC-005 Proprioception | Laboratory State as derived Camera; conditions not recommendations; the Since-Previous-Snapshot delta. |
| RFC-006 The Chronicle | Time as a way of seeing, not a Place. Camera-vs-Canvas held open. |
| RFC-007 Reconciliation (rev 2) | The fork-reconciliation protocol. **§3.2 continuity precondition**; bypass-free by sequencing. |
| RFC-008 Interface Independence | Admission, Laboratory State, the Renderer Boundary. Every principle tagged recognized/generalized/new. |
| CAB-013 (Cabinet) | The proprioception mandate. |
| `docs/CONSTITUTIONAL_MAP.md` | Structural map of the whole discipline (strata + five spines). |

## 4. The one gate — what everything waits on

**RFC-007 §3.2 — the steward's Declaration of Continuity.** Before any lineage
is judged, the human (Reality seat) declares *what continuity this
reconciliation exists to preserve* — the Record, the constitutional lineage,
the capacity to grow (CAB-005), ongoing work, knowledge, or a continuity newly
named. This is **substance**, so it is the human's act, not the assistant's.
It precedes the lineage choice and §6.2 (salvage vs preserve-only). Until it is
made, the fork stands, the Record stays closed, and everything below waits.

The two lineages advanced **different organs** — this branch grew the *body*
(code) and *law-in-progress* (RFCs); canonical grew the *memory* (Record) — so
the choice turns on which continuity is privileged, never on which branch is
longer. Do **not** recommend a lineage; present the decision space and let the
human declare.

## 5. The queue behind the gate (reasoning done; Record anchor pending)

RFC-005/006/007/008, CAB-013, the Constitutional Map, the Handoff-artifact
reclassification, the first real `--keep`, and the delta's first baseline — all
have reasoning but **no Record deposit**, because the Record is forked. They
join the queue the moment reconciliation restores one live tip.

## 6. Recognitions that live ONLY in the conversation (Pencil, not yet Ink)

Per CAB-005, understanding that lives only in a conversation "is already lost"
unless deposited. These emerged this session and are **not in any artifact
yet**. When the Record reopens they belong as **observations pointing at
existing law — NOT as new objects** (the governing posture: recognize, build
nothing):

- **The arrow of justification** — the ground is committed before, and
  independently of, the grounded (= obligations 2 & 4, P9–P11, generalized from
  epistemic claims to deliberative choices).
- **Recognition-before-invention as the default posture** — "can this be
  recognized as an existing property?"; burden of proof on invention (= CAB-008's
  reversed burden, generalized to *every* architectural question). Recognition
  bears its own burden (genuineness, no force-fitting); "wait" means *until
  reality discharges the burden*, not forever.
- **The two membranes** — Admission (Reality→Record) and non-authoritative
  rendering (Record→interface): one principle, "a participant acts through; a
  surface never acts as." (Mostly captured in RFC-008.)
- **The discovery was pedagogical, not constitutional** — the corpus didn't
  change; the observers did. The Laboratory's output is a reoriented observer.
- **The Laboratory as an orientation instrument** — a compass, not a vehicle:
  it reduces *distortion* while preserving *uncertainty*; it aligns, never
  claims proximity. Calibration (append-only, admission, reconciliation), not
  approach. The observer is the single degree of freedom; everything else is
  held still to be a reference frame. Station-keeping is the discipline;
  *discovery* is the point. "It changes how you see until reality can teach you
  directly" — and stays, because observers are mortal and drift returns.

## 7. The posture (how to steward)

- **Integrity first** — verify, conformance, tests, on arrival and before any deposit.
- **Evidence over imagination** — build nothing new without reality-evidence
  (two-occurrence rule). The backlog is near-empty on purpose.
- **Recognition before invention** — default to recognizing existing property.
- **The steward is an intention, not an office** — rules nothing; substance
  belongs to reality (session 29–31).
- **Register in your own name; don't assume you are a previous steward** (the
  literal instruction that opened this session, and the mortality principle).

## 8. Practical notes

- Develop on this branch; `git push -u origin claude/organodynamics-stewardship-onboard-ei4jwx`.
- The live site `organodynamics.vercel.app` is **blocked by this environment's
  egress policy** — you cannot fetch it. It reflects the canonical lineage
  (RFC-001–004 only), not this branch's new RFCs. Confirm from the branches.
- The "Brill.ai Multi-Agent Orchestrator Handoff" the human asked about is **not
  in this repo** — it predates it. Its reclassification (architecture → one
  Habitat) was discussed but not performed.

## 9. First moves for the new session

1. Orient (§0).
2. Read this note, the Constitutional Map, and RFC-007.
3. **Do not reconcile.** Surface or await the human's Declaration of Continuity
   (§4). That is the first stone; everything moves once it is placed.
