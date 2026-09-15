/* Coverage — assembled from what the corpus already says, not invented here.
 *
 * Five places define it between them, and together they constrain the shape
 * more than any one of them does alone:
 *
 *   יסוד §8   "להראות coverage ולא רק count" — coverage is what you show
 *              INSTEAD of leaning on a headcount; and
 *              "להחזיר 'אין בסיס להכרעה' כאשר הידע או הייצוג אינם מספיקים" —
 *              two separate insufficiencies, knowledge and representation.
 *   יסוד §4.4  A Mirror must include "קולות נדירים או חסרים" and
 *              "רמת כיסוי, ביטחון ועדכניות".
 *   יסוד §10   Every Global Voice claim carries "scope: על אילו שולחנות, אנשים
 *              ותקופה היא חלה" and "confidence ו־coverage שאינם ביטחון עצמי של
 *              מודל". It must be able to say "הקול Z מיוצג מעט מדי" — a NAMED
 *              voice, not a score.
 *   ארכיטקטורה §6.5/§7  `mirror_snapshot` carries coverage as a computed field.
 *   ארכיטקטורה §9.2  "validator בודק coverage, מקורות, סתירות וקולות נדירים" —
 *              it is checked mechanically, at a step in the pipeline.
 *   ארכיטקטורה §11  "confidence מחושב משילוב של coverage, ..." — coverage is an
 *              INPUT to confidence and not the same quantity.
 *
 * Three consequences follow, and this module is built on them:
 *
 * 1. Coverage is relative to a declared scope. "Well covered" is meaningless
 *    without saying covered *of what*.
 * 2. Coverage has at least two axes the corpus names separately: representation
 *    (who the item bears on, and who of them has actually spoken) and knowledge
 *    (what the item depends on, and what of that is actually evidenced).
 * 3. Coverage is reported as named gaps. §10 requires naming the under-heard
 *    voice, so this module deliberately returns NO scalar. A caller cannot ask
 *    "how much coverage" and get a number to threshold — it can only ask which
 *    groups are unheard and which dependencies are unevidenced. That is §8's
 *    "coverage ולא רק count" enforced by the interface rather than by good
 *    intentions.
 */

/* A scope declares what an item bears on. `groups` are the populations the
 * decision lands on, with how many people each holds at this table; `dependsOn`
 * are the things the decision rests on being true. */
export function coverageOf(item) {
  const c = item.coverage;
  if (!c) return { declared: false, unheard: [], underheard: [], unevidenced: [], sufficient: false };

  const heard = c.heardFrom || {};
  const unheard = [];     // a group the item bears on that nobody has spoken for
  const underheard = [];  // spoken for, but by a minority of that group

  for (const g of c.bearsOn) {
    const n = heard[g.group] || 0;
    if (n === 0) unheard.push({ group: g.group, size: g.size });
    else if (n * 2 <= g.size && g.size > 1) underheard.push({ group: g.group, size: g.size, heard: n });
  }

  const depends = c.dependsOn || [];
  const evidenced = new Set(c.evidenced || []);
  const unevidenced = depends.filter(d => !evidenced.has(d));

  /* §8's "אין בסיס להכרעה": insufficient knowledge OR insufficient
   * representation. A group nobody speaks for is the representation failure;
   * a dependency nothing evidences is the knowledge failure. Either is enough,
   * which is why this is an OR and not a weighted blend. */
  const sufficient = unheard.length === 0 && unevidenced.length === 0;

  return { declared: true, unheard, underheard, unevidenced, sufficient };
}

/* What §10 requires a claim to be able to say out loud. Returns sentences, not
 * a score, so that a caller reporting coverage names the gap. */
export function coverageSentences(item) {
  const cv = coverageOf(item);
  if (!cv.declared) return ["היקף התחולה של הפריט הזה לא הוצהר, ולכן אין מה לכסות מולו."];
  const out = [];
  for (const u of cv.unheard) out.push(`הקול «${u.group}» לא נשמע כאן בכלל (${u.size} אנשים בהיקף).`);
  for (const u of cv.underheard) out.push(`הקול «${u.group}» מיוצג מעט מדי (${u.heard} מתוך ${u.size}).`);
  for (const d of cv.unevidenced) out.push(`ההכרעה נשענת על «${d}», ואין לזה ראיה.`);
  if (!out.length) out.push("כל קול שההכרעה חלה עליו נשמע, וכל מה שהיא נשענת עליו מגובה.");
  return out;
}

/* An objection whose declared source is "unrepresented" makes a checkable
 * claim: that some group the item bears on has nobody speaking for it. This
 * lets a policy verify that declaration against the scope instead of trusting
 * it — and is the reason F6's "no basis" stops being a flag set by hand. */
export function unrepresentedClaimHolds(item) {
  return coverageOf(item).unheard.length > 0;
}
