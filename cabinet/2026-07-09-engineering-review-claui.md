---
id: CAB-001
title: Engineering Review — ClaUi
kind: engineering-review
participants: Adi (mission), Claude (author)
date: 2026-07-09
language: English
discoveries: coordination server with A2A loop protection as a harvestable component; StreamDemux as an anti-corruption pattern; "documented pain someone else already paid" as an evaluation stance
constitutional-questions: none — external mission conducted under SYNC STOP
related: laboratory/CONSTITUTION.md (automation pain-gate), SYNC STOP protocol
provenance: delivered in-session 2026-07-09; deposited to the Cabinet 2026-07-10
status: frozen
---

# Engineering Review — ClaUi

*External mission under SYNC STOP: investigate whether the open-source VS Code
extension ClaUi (MIT, `Yehonatan-Bar/ClaUI`, v0.1.202 at review time) could join
the future engineering toolbox. Read-only; nothing modified; nothing adopted.*

## Verdict

A single-maintainer VS Code extension substantially more mature than its star
count suggests. The hard parts of wrapping a long-lived CLI — process-tree
termination, orphan cleanup, crash-loop breaking, lazy session restore, silent
resume, stream demultiplexing — are engineered with care, tested, and
documented. It is **an application, not a library**: the valuable core is welded
to the VS Code extension host and to the CLIs' undocumented `stream-json`
output.

## Architecture (as reviewed)

Per-tab process isolation coordinated centrally: a `TabManager` over independent
`SessionTab` slices, each bundling CLI process, `StreamDemux` (raw CLI JSON →
typed semantic events — a genuine anti-corruption layer), a control protocol,
and a React webview. A separate multi-participant coordination server routes
rooms with isolated state and **agent-to-agent loop protection**. Cross-cutting:
a fail-closed DLP broker (10 scanners), a workspace access guard, a review-loop
subsystem.

## Brill compatibility

- Strong: multi-agent coordination (the A2A server), review pipelines.
- Partial: session persistence (the unit is a session, not a project);
  bespoke context stores.
- Weak: knowledge repositories (JSONL + markdown only); structured docs are
  cultural, not structural.
- Reading: ClaUi is an existence proof of "one state, many readings" — but its
  state is the raw transcript, not a committed kernel behind a membrane.
  **Forge-heavy, kernel-light**: a good reference, a poor substrate.

## Recommendation

Inspiration plus selective component harvesting. No wholesale fork (welded to
VS Code and an unstable CLI protocol; bus factor 1; feature-dominant 1–3 day
release cadence). No plugins (no public extension contract). From scratch for
anything kernel-shaped. A narrow, conditional fork of only the coordination
server if multi-agent synchronization becomes a paid-for pain.

## The stance that outlived the mission

Treat external codebases as **documented pain someone else already paid** — a
library of solved edge cases to catalogue now and adopt only when reality
demands a specific piece. This is the automation pain-gate applied to
acquisition: no adoption without documented need.
