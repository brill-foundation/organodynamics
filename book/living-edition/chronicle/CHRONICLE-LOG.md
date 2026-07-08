# Chronicle Log — the append-only forward record

⏱ *this file is append-only in spirit, mirroring the journal it draws from*

The [Chronicle](00-chronicle.md) narrates the project's history in five acts. This log
continues it forward: whenever the book absorbs new canonical knowledge, a dated entry is
**appended here** (never rewritten), and — if the event changes the maturity of an idea —
the affected chapters are re-badged. This is the book keeping faith with the append-only
invariant it describes (RFC-004 §7.2): the Chronicle grows by addition, never by erasure.

**How to append an entry.** Cite the source (journal event id via `./ods lineage <id>`, or a
commit hash). State what happened, what it changed, and which chapters were touched. Keep the
testimony/constitutive marking (RFC-001 §7). Do not edit earlier entries; if a later event
supersedes an earlier understanding, append the correction and mark the earlier line ⌫ *only
in this log's cross-reference*, never by deletion.

---

## Log

### 2026-07-08 · Living Edition opened
- **Source:** commits `86dec66` (recovery), `c040872` (merge of the full record), and this
  edition's commits.
- **What happened:** the book was forked into a sealed [Recovery Edition](../../recovery-edition/)
  and this Living Edition; the full project record (Layers II–III) was merged into the book's
  branch; the visual epistemology, the Chronicle layer, and the continuation chapters
  (9–14) were authored.
- **What it changed:** the book now covers the whole arc through Act IV; Recovery-Edition
  gap G-4 (empty priority tiers) substantially closed by the merge.
- **Chapters touched:** all Living Edition chapters (new).
- **Marking:** constitutive (these are commits — the record cannot be wrong that they
  happened) except the fork *directive*, which is testimony (given in conversation 2026-07-08).

---

## Standing watch — what the next entries are waiting for

The Chronicle's open threads, each of which will generate a log entry when it moves. These
are drawn from the project's own locks and open experiments:

- 🔴 **D-0 — the first stranger.** The first journal event appended by a non-Claude process.
  Until it happens, "demand" (not friction) remains the registered likeliest failure
  (SEASON-1-DOORWAY-PLAN). → will re-badge [Ch. 13](../manuscript/13-the-laboratory-and-the-seasons.md).
- 🔴 **X2 — independent replication.** An independent process reads the record and reproduces
  (or diverges from) READING-001/THEORY-001. Until it runs, THEORY-001 stays **locked** and
  drawn in pencil-and-blue, never black. → will re-badge [Ch. 12](../manuscript/12-the-discovery-engine.md).
- 🔴 **Q-f — the ratification rule.** The moment anything is *formally* ratified, whole
  passages now blue become black ink, and "ratification-by-continuation" gains an erasure.
  → will re-badge [Ch. 9](../manuscript/09-the-manifest.md), [Ch. 14](../manuscript/14-the-open-constitution.md).
- 🔴 **The conflict of law.** Invariant 5 has two texts (RFC-004 §7 vs RFC-005 §2); Season 2's
  precedence work will resolve or hold it. → will re-badge [Ch. 11](../manuscript/11-meta-review-and-recognition.md).
- 🔴 **META-REVIEW-000 quorum.** Three independent reviews of RFC-000 → the first full
  traversal of the pipeline. → will re-badge [Ch. 9](../manuscript/09-the-manifest.md).
- 🟢 **The first rejection.** READING-001 §3.3: the discipline has never said no. The first
  outright rejection will be a constitutional event and the book's first true ⌫ erasure of
  a whole representation. → will re-badge the visual epistemology's reading of erasure-scarcity.

Each, when it fires, is one appended entry here and one honest re-inking of the page.
