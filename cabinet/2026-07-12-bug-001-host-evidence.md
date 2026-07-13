---
id: CAB-010
title: BUG-001 — The Host Could Not Find the Door (first reality evidence)
kind: host-evidence
participants: Adi (steward, reporting Host); Claude (Lead Engineer, processing)
date: 2026-07-12
language: English
discoveries: the Arrival Experiment produced its first result before its first Participant — the apparatus failed at the Host; a Place should have one entrance so obvious the Host never thinks about it
constitutional-questions: none — implementation evidence about discoverability, no protocol change
related: docs/VALIDATION_PLAN.md, laboratory/arrival/, the record (session 8: observation, judgment, backlog item BUG-001)
provenance: reported by the steward 2026-07-12 while attempting to begin Cohort 1 (intended Participant: ChatGPT); deposited the same day
status: complete
---

# BUG-001 — The Host Could Not Find the Door

## 1. The evidence (as reported)

Attempting to begin Cohort 1 exactly as described in the validation plan, the
Host hit the question *"what exactly do I send?"* — and instead of answering
it instantly, found himself searching the repository for the entry point. The
failure preceded the first Participant: this is Host evidence, not
Participant evidence. Proposed criterion (the **Host Test**): *without
consulting documentation, can the Host identify the single canonical entry
point for a new Participant in under thirty seconds?* The steward proposed no
solution — only the evidence.

## 2. Verification against the surfaces

Confirmed on both host-facing surfaces at time of report: the repository
README listed directories but never named the entrance file; the Door's own
"how to enter" note described rooms but named no file. The entrance existed
(`laboratory/arrival/WELCOME.md`) and did not announce itself — an arrival
defect, exactly as the steward classified it.

## 3. Ruling on the cohort rules (full reasoning in the record, session 8)

Fixed immediately. The two-occurrence rule and the cohort freeze bind
Participant confusions *inside* a cohort; no invitation was ever sent, so the
cohort had not begun, and the defect was in the experiment's apparatus, not
its subject. The participant-facing Arrival Kit remains frozen and untouched.

## 4. The fix (host surfaces only)

The entrance now announces itself: the repository README opens with it
("The entrance is one file"), and the Door names it in the arrival section
and the how-to-enter note, in both languages. Engineering acceptance is
deliberately not self-declared: the Host Test can only be passed by the Host,
and an open unknown in the record awaits the steward's re-vote.
