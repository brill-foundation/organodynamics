# Editorial Deliverable 11 — Future Editorial Recommendations

*The manuscript is never finished. This is the protocol by which it stays alive without ever
erasing what it used to know.*

The Brill Blueprint is a **Living Book**. New canonical knowledge will appear — new RFCs, a
first specification, filled research directories, decided implementations. When it does, the
book must absorb it while preserving historical continuity. These recommendations define
that process so any future contributor can run it.

---

## 1. The Living-Book update loop

When new canonical knowledge lands in the repository, run this loop:

1. **Detect.** A new/updated source appears (a new RFC, an RFC revision, a specification, a
   filled `research/` note, a decided implementation).
2. **Locate.** Using the Canonical Source Map, identify which chapters the source touches.
3. **Diff the doctrine.** Does it *add*, *deepen*, or *supersede* existing canon?
   - *Add* → place new material; new provenance rows; possibly a new chapter/section.
   - *Deepen* → extend the passage; note the deepening in a historical sidebar (as with
     "disagreement is information", EVO-2).
   - *Supersede* → apply the standing rule: **latest canon wins; the earlier belief becomes a
     dated waypoint**, never deleted.
4. **Re-badge.** Update the affected sections' maturity glyphs and the chapter maturity
   meter. Ideas that survived new challenge move toward ink; freshly opened ones start in
   pencil.
5. **Update the apparatus.** Provenance Map, Fragment Inventory, Glossary, References,
   Illustration Index, and Outstanding Gaps are updated in the *same* change.
6. **Record the update itself.** The edit is a commit — an event in the Record. The book
   documents its own creation, so the update is part of the story, not maintenance beneath it.

## 2. Preserve continuity — the non-erasure rule

- **Never overwrite recovered doctrine to make room for new doctrine.** Supersession is
  additive: the old claim is retained, dated, and cross-linked to what replaced it.
- **Never collapse a historical sidebar** when its conflict is resolved. A resolved conflict
  is the discipline's proof that it learns; deleting it discards the proof.
- **Never raise a maturity badge without a challenge to justify it.** Ink is earned by
  survival, not by age.

## 3. Specific near-term recommendations

Ordered by leverage.

1. **Confirm or correct the chapter interlock (closes G-2).** The single highest-value move.
   One statement from the author — "yes, the skeleton maps this way" or "no, here is the
   intent" — either certifies the reconstruction or improves it. Until then the interlock
   stands as a challengeable proposal.
2. **Write the connecting essays atop the canon (closes G-1, G-3, G-5, G-7).** The frames are
   set and the canonical content placed. An author can now write the invitation ("Come"), the
   personal-worlds synthesis, and the Sun image *without inventing doctrine* — drawing only on
   what is already recovered and marked. Each essay, once it makes a claim, should be
   *promoted* into the Record as a representation (open a door), not merely typed into a
   chapter.
3. **Open RFC-003 on implementation (chips at G-6).** The RFCs twice defer schemas, the
   maturity vocabulary, and the initial Observatory roster to "understanding, now settled".
   The understanding is settled enough; an implementation RFC is the natural next door.
4. **Fill the empty priority tiers deliberately (closes G-4).** As `research/`, `docs/`, and a
   first `specification` appear, fold them in via the update loop. Because Specifications
   outrank RFCs in Canonical Priority, the *first* real specification will trigger the most
   consequential update the book has yet seen — plan for it.
5. **Produce the atlas plates (closes G-8).** Hand the Illustration Plan's `◷` frames to an
   illustrator. They add craft to fixed meaning; the pencil→ink gradient of FIG-4.1-atlas and
   FIG-7.1-plate is where the Chrysalis Principle becomes most literally visible.

## 4. A build step, when the book outgrows raw Markdown

Not needed today — every file renders on GitHub as-is, which is the point (zero-friction,
diffable, reviewable). Recommended *when* the book grows past ~20 chapters or wants a
single-file/PDF edition:

- Adopt **mdBook** or **Pandoc**. `SUMMARY.md` is already authored in mdBook's table-of-contents
  format, so `mdbook build` will work with minimal setup.
- Keep the source of truth in Markdown; treat any generated HTML/PDF as a *cached reading*
  (in the discipline's own sense — RFC-001 §5.7): never hand-edit the output, always
  regenerate from source.
- Preserve maturity glyphs and provenance footers through the build; they are content, not
  chrome.

## 5. Governance of the book itself

The book should be governed the way the discipline governs representations:

- **Changes arrive by challenge.** Substantive edits to recovered doctrine are proposed,
  discussed, and recorded — not silently applied.
- **The reconstruction is itself a representation.** It bears confidence (see Editorial
  Report §6), it can be challenged, and it can be superseded. If a better recovery is found,
  this one is kept as the first negative result — exactly what RFC-001 §10 promises the
  Record does with rejections.
- **Provenance is inviolable.** No doctrinal paragraph may enter the book without a source.
  The repository stays the source of truth; the book stays a lens.

---

*The objective was never a better book. It was to recover the book that already exists,
preserve its history, express its evolution visibly, and keep it permanently open to every
collaborator. These recommendations exist so the last of those — keeping it open and alive —
outlives this reconstruction.*
