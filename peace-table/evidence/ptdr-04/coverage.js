/* Coverage — what is assembled from the corpus, and what is proposed on top.
 *
 * WHAT THE CORPUS GIVES. Five places define coverage between them, and together
 * they constrain the shape more than any one of them does alone:
 *
 *   יסוד §8   "להראות coverage ולא רק count" — coverage is what you show
 *              INSTEAD of leaning on a headcount; and
 *              "להחזיר 'אין בסיס להכרעה' כאשר הידע או הייצוג אינם מספיקים" —
 *              two named insufficiencies, knowledge and representation.
 *   יסוד §4.4  A Mirror must include "קולות נדירים או חסרים" and
 *              "רמת כיסוי, ביטחון ועדכניות".
 *   יסוד §10   Every Global Voice claim carries "scope: על אילו שולחנות, אנשים
 *              ותקופה היא חלה", and must be able to say "הקול Z מיוצג מעט מדי" —
 *              a NAMED voice, not a score.
 *   ארכיטקטורה §6.5/§7  `mirror_snapshot` carries coverage as a computed field.
 *   ארכיטקטורה §9.2  "validator בודק coverage, מקורות, סתירות וקולות נדירים".
 *   ארכיטקטורה §11  "confidence מחושב משילוב של coverage, ..." — an INPUT to
 *              confidence, not the same quantity.
 *
 * From those, three things follow and are not invented here:
 *   1. Coverage is relative to a declared scope.
 *   2. It has two axes the corpus names separately, so "insufficient" is a
 *      disjunction over them rather than a blend.
 *   3. It is reported as named gaps, which is why this module returns NO scalar.
 *      A caller cannot ask "how much coverage" and get a number to threshold;
 *      it can only ask which groups went unheard and which dependencies are
 *      unevidenced. That is §8's "coverage ולא רק count" enforced by the
 *      interface rather than by good intentions.
 *
 * WHAT IS PROPOSED AND NOT DERIVED. Nothing in the corpus says WHERE on either
 * axis sufficiency falls. An earlier version of this file presented the cutoffs
 * as though they came with the shape; a review was right that they do not, and
 * that the fixtures' own `hasBasis` labels were authored to match them, so their
 * agreement confirmed the author's cutoff rather than deriving it. The cutoffs
 * are therefore named, exported, and swappable, and run.js runs the whole harness
 * under two different sets so the results can be read for sensitivity to a choice
 * nobody has ruled on.
 */

/* PROPOSED, not derived. Ruling on these is product work — arguably PTDR-04's
 * own, and at minimum nobody's yet. */
export const PROPOSED_CUTOFFS = {
  id: "cutoffs-v0 (מוצע)",
  note: "ייצוג מספיק אם נשמע ולו אחד מהקבוצה; ידע מספיק רק אם כל תלות מגובה.",
  representationSufficient: (heard, _size) => heard > 0,
  knowledgeSufficient: (unevidenced) => unevidenced.length === 0,
  underheardWhen: (heard, size) => size > 1 && heard * 2 <= size
};

/* A second, equally arguable set, so the harness can show whether its findings
 * survive the choice. Representation now needs a majority of the affected group;
 * knowledge tolerates nothing still, because a single unevidenced dependency
 * being fatal is the half of cutoffs-v0 that is easiest to defend. */
export const STRICTER_CUTOFFS = {
  id: "cutoffs-strict (מוצע)",
  note: "ייצוג מספיק רק אם רוב הקבוצה נשמע; ידע כמו קודם.",
  representationSufficient: (heard, size) => heard * 2 > size,
  knowledgeSufficient: (unevidenced) => unevidenced.length === 0,
  underheardWhen: (heard, size) => size > 1 && heard * 2 <= size
};

export function coverageOf(item, cutoffs = PROPOSED_CUTOFFS) {
  const c = item.coverage;
  if (!c) return { declared: false, unheard: [], underheard: [], underrepresented: [],
                   unevidenced: [], sufficient: false, cutoffs };

  const heard = c.heardFrom || {};
  const unheard = [];           // nobody at all has spoken for this group
  const underheard = [];        // spoken for, but by a minority — reported, per §10
  const underrepresented = [];  // below the cutoff's own sufficiency line

  for (const g of c.bearsOn) {
    const n = heard[g.group] || 0;
    if (n === 0) unheard.push({ group: g.group, size: g.size, heard: 0 });
    else if (cutoffs.underheardWhen(n, g.size)) underheard.push({ group: g.group, size: g.size, heard: n });
    if (!cutoffs.representationSufficient(n, g.size)) {
      underrepresented.push({ group: g.group, size: g.size, heard: n });
    }
  }

  const depends = c.dependsOn || [];
  const evidenced = new Set(c.evidenced || []);
  const unevidenced = depends.filter(d => !evidenced.has(d));

  /* §8 names "הידע או הייצוג", so this is an OR over the two axes. Where the
   * line sits on each is the cutoff's business, not the corpus's. */
  const sufficient = underrepresented.length === 0 && cutoffs.knowledgeSufficient(unevidenced);

  return { declared: true, unheard, underheard, underrepresented, unevidenced, sufficient, cutoffs };
}

/* What §10 requires a claim to be able to say out loud. Sentences, not a score. */
export function coverageSentences(item, cutoffs = PROPOSED_CUTOFFS) {
  const cv = coverageOf(item, cutoffs);
  if (!cv.declared) return ["היקף התחולה של הפריט הזה לא הוצהר, ולכן אין מה לכסות מולו."];
  const out = [];
  for (const u of cv.unheard) out.push(`הקול «${u.group}» לא נשמע כאן בכלל (${u.size} אנשים בהיקף).`);
  for (const u of cv.underheard) out.push(`הקול «${u.group}» מיוצג מעט מדי (${u.heard} מתוך ${u.size}).`);
  for (const d of cv.unevidenced) out.push(`ההכרעה נשענת על «${d}», ואין לזה ראיה.`);
  if (!out.length) out.push("כל קול שההכרעה חלה עליו נשמע, וכל מה שהיא נשענת עליו מגובה.");
  return out;
}

/* An objection declaring "אוכלוסייה שאינה מיוצגת" makes a claim that can be
 * checked — but only if it names WHICH population. An earlier version accepted
 * the declaration whenever the item had any unheard group at all, which a review
 * correctly called out: an unrelated preference could ride an unheard group it
 * never mentioned. The declaration must now name a group, and the named group is
 * the one verified. A declaration that names nothing is not checkable and so is
 * not accepted. */
export function unrepresentedClaimHolds(item, claimedGroup, cutoffs = PROPOSED_CUTOFFS) {
  if (!claimedGroup) return false;
  return coverageOf(item, cutoffs).unheard.some(u => u.group === claimedGroup);
}
