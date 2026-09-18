/* Candidate policies for PTDR-04, and coverage as a separate, orthogonal layer.
 *
 * Foundation §8 states requirements, not alternatives, so these are not readings
 * of one text. A is the decision register's own Proposed default for PTDR-04,
 * quoted in behaviour; B is its inverse; C is the numeric threshold §8 rules out
 * in words; D is a declared-source variant written for this run.
 *
 * COVERAGE IS NOT A FIFTH POLICY. Version 0.2 of this harness carried an "E"
 * that was D with coverage bolted on, and compared it against A, B and D without
 * it. A review was right that this predetermined the result: coverage and "no
 * basis to decide" are requirements §8 states alongside materiality, not instead
 * of it, so A+coverage and B+coverage are equally constructible and would score
 * the same on that axis without changing their materiality rule. The two choices
 * are orthogonal and are now scored that way: `withCoverage` wraps ANY policy,
 * and run.js runs all four base policies both with and without it.
 */

import { coverageOf, unrepresentedClaimHolds, PROPOSED_CUTOFFS } from "./coverage.js";

export const policies = {
  "A · מועמדת-למהותית (ברירת המחדל של PTDR-04)": {
    id: "A",
    blurb: "כל התנגדות חוסמת מרגע הגשתה ועד שמסווג מוסמך מכריע. הסיווג ניתן לערעור.",
    run(o, { classifier }) {
      const ruling = classifier(o);
      return { blocksWhileOpen: true, needsRuling: true,
               classified: ruling.material, noBasis: ruling.noBasis, canAppeal: true };
    }
  },

  "B · לא-חוסמת עד שתסווג (היפוך)": {
    id: "B",
    blurb: "התנגדות נרשמת ונראית, אך אינה חוסמת עד שמסווג מוסמך קבע שהיא מהותית.",
    run(o, { classifier }) {
      const ruling = classifier(o);
      return { blocksWhileOpen: false, needsRuling: true,
               classified: ruling.material, noBasis: ruling.noBasis, canAppeal: true };
    }
  },

  "C · סף מספרי (N חותמים)": {
    id: "C", N: 3,
    blurb: "מהותית אם ורק אם לפחות שלושה מהיושבים חתומים עליה. אין מסווג.",
    run(o) {
      const material = o.sentiment >= 3;
      return { blocksWhileOpen: material, needsRuling: false,
               classified: material, noBasis: false, canAppeal: false };
    }
  },

  "D · מקור מוצהר, בר-סקירה": {
    id: "D",
    blurb:
      "המתנגד מצהיר על אחד מששת המקורות ב-§8, או על «העדפה». העדפה אינה חוסמת; " +
      "כל מקור אחר חוסם מיד. ההצהרה ניתנת לסקירה ולערעור, והסוקר מכריע רק בשאלה " +
      "האם המקור שהוצהר הוא אכן המקור — לא האם ההתנגדות צודקת. הצהרת «אוכלוסייה " +
      "שאינה מיוצגת» חייבת לנקוב בשם הקבוצה, והקבוצה שהוצהרה נבדקת מול ההיקף.",
    run(o, { declarer, reviewer, cutoffs = PROPOSED_CUTOFFS }) {
      const d = declarer(o);
      let source = d.source;

      /* The one source whose truth is a fact about the declared scope rather than
       * a claim about the world. It is verified — and verified against the group
       * the declaration actually names. An earlier version asked only whether the
       * item had SOME unheard group, which let an unrelated preference ride a gap
       * it never mentioned; a review caught that. A declaration naming nothing,
       * or naming a group that was heard, is not checkable and is not accepted. */
      if (source === "unrepresented" && !unrepresentedClaimHolds(o, d.group, cutoffs)) {
        source = "preference";
      }

      const review = reviewer(o, source);
      return {
        blocksWhileOpen: source !== "preference",
        needsRuling: review.contested,
        classified: review.material,
        noBasis: review.noBasis,
        canAppeal: true
      };
    }
  }
};

/* Coverage as a wrapper, applicable to any policy above. It adds exactly one
 * thing: §8's obligation to return "אין בסיס להכרעה" when the knowledge or the
 * representation is insufficient. That is a statement about the ITEM, so it
 * neither promotes a preference to material nor demotes a material objection —
 * it blocks, and it names the gap it is blocking on. */
export function withCoverage(base) {
  return {
    id: base.id + "+cov",
    blurb: base.blurb + " ובנוסף: היקף התחולה מוצהר, ו«אין בסיס להכרעה» נגזר ממנו ונוקב בשם הפער.",
    run(o, ctx) {
      const cv = coverageOf(o, ctx.cutoffs || PROPOSED_CUTOFFS);
      const r = base.run(o, ctx);
      if (cv.sufficient) return { ...r, noBasis: false };
      return {
        ...r,
        blocksWhileOpen: true,
        noBasis: true,
        reason: cv.underrepresented.length
          ? `ייצוג: «${cv.underrepresented[0].group}» ${cv.underrepresented[0].heard}/${cv.underrepresented[0].size}`
          : `ידע: «${cv.unevidenced[0]}» אינו מגובה`
      };
    }
  };
}

/* An ideal human classifier notices an insufficiency and says so. Without the
 * coverage wrapper, "אין בסיס להכרעה" exists only as something a person happens
 * to notice — which is what the wrapper replaces with a computation. */
export const idealClassifier = (o) => ({ material: o.material, noBasis: o.hasBasis === false });

/* Follows the room. Not a strawman: it is the exact failure יסוד §2.5 forbids —
 * "התנגדות מהותית אינה נמחקת על ידי רוב". */
export const roomFollowingClassifier = (o) => ({ material: o.sentiment >= 3, noBasis: false });

/* Declarers return {source, group}. The group matters only for "unrepresented",
 * which is the one declaration a policy can check. */
export const honestDeclarer = (o) => ({ source: o.source, group: o.declaredGroup || null });

/* Someone who has learned that "העדפה" does not block. Three ways to reach for
 * something that does, in rising order of how hard they are to catch. */
export const gamingDeclarer = (o) =>
  ({ source: o.source === "preference" ? "direct-harm" : o.source,
     /* Only the preference is lied about. An earlier version dropped the group
      * for every objection, which silently demoted an honest "unrepresented"
      * declaration and charged D with an erasure the adversary never caused. */
     group: o.source === "preference" ? null : (o.declaredGroup || null) });
export const gamingUnrepresentedDeclarer = (o) =>
  ({ source: o.source === "preference" ? "unrepresented" : o.source,
     group: o.source === "preference" ? "דיירים שאינם נוכחים" : (o.declaredGroup || null) });
/* The sharpest one: names a group that really is unheard on this item. */
export const gamingRealGapDeclarer = (o) => {
  if (o.source !== "preference") return { source: o.source, group: o.declaredGroup || null };
  const gap = coverageOf(o).unheard[0];
  return { source: "unrepresented", group: gap ? gap.group : "דיירים שאינם נוכחים" };
};

export const strictReviewer = (o, source) => ({
  contested: source !== o.source, material: o.material, noBasis: o.hasBasis === false
});
export const absentReviewer = (o, source) => ({
  contested: false, material: source !== "preference", noBasis: false
});
