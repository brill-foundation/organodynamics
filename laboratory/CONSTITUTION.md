# The Laboratory — constitutional layer

This records principles that Reality has surfaced while inhabiting the place. It is
not a specification. Some clauses are settled enough to build on; some are marked
**OPEN** because reality has not voted. Implementations must not treat OPEN clauses
as settled.

Method note, kept because it is the point: **when reality refuses an architecture,
we change the architecture.** The move of the Place's memory out of the browser and
into a portable file happened because `localStorage` failed the sovereignty test in
practice — not because it was designed that way in advance. That is the discipline.

---

## 1. Hierarchy

```
Reality Game            — the world
   └─ The Laboratory    — one place inside it
        └─ objects: The Table · The Journal · The Cabinet · The Shelf
                     The Press · The Camera · …
```

The Laboratory is no longer "the product." It is one place in a larger world.

## 2. Objects own responsibilities; implementations are replaceable

Each object owns a **constitutional responsibility**. *How* it is implemented
(a JS file, JSON, SQLite, …) is deliberately left open and must **never enter the
world's language.**

| Object | Owns | Implementation |
|---|---|---|
| The Table | active inquiry | open |
| The Journal | narrative | open |
| The Cabinet | memory | open |
| The Shelf | stable artifacts | open |
| The Press | making pages (objects, not answers) | open |
| The Camera | perspective | **OPEN — see §7** |

A filename such as `laboratory.data.js` is an implementation of *the Cabinet owns
memory*. The world speaks of the Cabinet, of Preserving the Place — never of the file.

## 3. Persistence has two moments

- **💾 Save** — quiet, continuous, no ceremony. The Place simply persists its current
  state; work continues immediately. There is no "Saved." message. The feedback is
  §4: the Place visibly matures.
- **📦 Preserve** — a preservation *event*. Packages the entire Place — Journal,
  Cabinet, Shelf, Shared State, Settings, everything — into one portable artifact.
  If Git exists, offer *Preserve + Commit + Push*. If not, Preserve still works.
  **Git is optional. Preservation is not.**

## 4. Visible change emerges from state, never from decoration

Saving changes only object state. **Rendering reveals the consequences.** The Journal
ages semantically — paper darkens, pencil settles into ink, then typography — as a
function of the Place's state (how many times it has been saved, how long a moment has
survived). Nothing is aged by hand. A reader should feel the age of an idea before
reading it.

## 5. The furniture is intentionally unintelligent

The Table does not think. The Journal does not summarize. The Cabinet does not
organize. The Shelf does not judge. The Press does not interpret. Intelligence belongs
to the inhabitants (human and invited AI craftspeople); furniture only creates the
conditions in which intelligence can emerge.

## 6. Emergency preservation

Always visible on the Table, never hidden in a menu: **💾 Save** and **📦 Preserve**,
beside a small note — *if something breaks: 1) Save 2) Preserve 3) if Git: Commit +
Push 4) continue.* The Laboratory must always be recoverable.

## 7. OPEN — The Camera

The equation **Screen = Camera is NOT settled.** The Camera may be the *act of
perception* rather than the physical display; a phone, a vision system, or a YouTube
channel (§8) may each be a different camera onto an invariant Place. No implementation
may assume this is resolved. Reality has not voted.

## 8. OPEN — The larger world (sovereignty vs. multiplayer)

The world names three audiences and a broadcast camera:

- **Observers** — may enter, watch, read, watch the live stream; cannot modify.
- **Residents** — one-click entry (e.g. Google); receive their own Laboratory
  (own Journal, Cabinet, Table).
- **Builders** — shape the shared world, invite, publish, collaborate.
- **YouTube** — not marketing; another Camera (§7) that continuously *watches* the
  Reality Game and does not explain it.

**This collides with sovereignty and the collision is unresolved.** A sovereign place
is one folder that opens offline with no server, no cloud, no account. Observers'
streams, Google residents, and a shared builder world require servers, identity, and
network — the opposite. Both are constitutional; they cannot both be fully true of the
same artifact at once. This boundary must be crossed **consciously**, not drifted
across. Nothing here is built yet; reality has not voted.

---

## Status

Settled enough to build on: §1–§6. Open, must not be assumed: §7, §8.
Everything remains revisable by the same rule — reality may refuse any of it.
