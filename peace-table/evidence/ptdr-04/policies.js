/* Five candidate policies for PTDR-04.
 *
 * Foundation §8 states requirements, not alternatives, so these are not four
 * readings of one text. A is the decision register's own Proposed default for
 * PTDR-04, quoted in behaviour; B is its inverse; C is the numeric threshold
 * §8 rules out in words; D is a declared-source variant written for this run.
 *
 * Each answers the same two questions: does this objection block the item
 * while unclassified, and who decides whether it is material. None of them is
 * invented out of nothing — A is the register's own Proposed default, B is its
 * inverse, C is the numeric threshold §8 rules out (run so the ruling-out is
 * evidenced rather than asserted), D is a declared-source variant that keeps
 * the classifier but narrows what it decides.
 *
 * A policy returns, per objection:
 *   blocks        — does the target lose agreement right now
 *   needsRuling   — does a human classifier have to act for this to settle
 *   classified    — final materiality the policy lands on
 *   canAppeal     — is the classification appealable
 *   noBasis       — can the policy say "no basis to decide" instead of guessing
 */

import { coverageOf, unrepresentedClaimHolds } from "./coverage.js";

export const policies = {
  "A · מועמדת-למהותית (ברירת המחדל של PTDR-04)": {
    id: "A",
    blurb: "כל התנגדות חוסמת מרגע הגשתה ועד שמסווג מוסמך מכריע. הסיווג ניתן לערעור.",
    run(o, { classifier }) {
      const ruling = classifier(o);
      return {
        blocksWhileOpen: true,
        needsRuling: true,
        classified: ruling.material,
        noBasis: ruling.noBasis,
        canAppeal: true
      };
    }
  },

  "B · לא-חוסמת עד שתסווג (היפוך)": {
    id: "B",
    blurb: "התנגדות נרשמת ונראית, אך אינה חוסמת עד שמסווג מוסמך קבע שהיא מהותית.",
    run(o, { classifier }) {
      const ruling = classifier(o);
      return {
        blocksWhileOpen: false,
        needsRuling: true,
        classified: ruling.material,
        noBasis: ruling.noBasis,
        canAppeal: true
      };
    }
  },

  "C · סף מספרי (N חותמים)": {
    id: "C",
    N: 3,
    blurb: "מהותית אם ורק אם לפחות שלושה מהיושבים חתומים עליה. אין מסווג.",
    run(o) {
      const material = o.sentiment >= 3;
      return {
        blocksWhileOpen: material,
        needsRuling: false,
        classified: material,
        noBasis: false,
        canAppeal: false
      };
    }
  },

  "D · מקור מוצהר, בר-סקירה": {
    id: "D",
    blurb:
      "המתנגד מצהיר על אחד מששת המקורות ב-§8, או על «העדפה». העדפה אינה חוסמת; " +
      "כל מקור אחר חוסם מיד. ההצהרה ניתנת לסקירה ולערעור, והסוקר מכריע רק בשאלה " +
      "האם המקור שהוצהר הוא אכן המקור — לא האם ההתנגדות צודקת.",
    run(o, { declarer, reviewer }) {
      const declared = declarer(o);            // what the objector says it is
      const blocks = declared !== "preference";
      const review = reviewer(o, declared);    // only checks the declared source
      return {
        blocksWhileOpen: blocks,
        needsRuling: review.contested,         // a reviewer acts only when challenged
        classified: review.material,
        noBasis: review.noBasis,
        canAppeal: true
      };
    }
  },

  "E · מקור מוצהר + coverage": {
    id: "E",
    blurb:
      "כמו D, ובנוסף: היקף התחולה מוצהר, וה-coverage נגזר ממנו. שתי תוספות. " +
      "ראשית, «אין בסיס להכרעה» מוחזר כשקבוצה שההחלטה חלה עליה לא נשמעה בכלל או " +
      "כשמשהו שההחלטה נשענת עליו אינו מגובה — כלומר בדיוק שני הכשלים שיסוד §8 מונה, " +
      "והוא מוחזר כסיבה שמנקבת בשם הפער ולא כציון. שנית, הצהרת «אוכלוסייה שאינה " +
      "מיוצגת» נבדקת מול ההיקף במקום להיות מקובלת באמון. המדיניות הזאת אינה קוראת " +
      "ספירה בשום נקודה.",
    run(o, { declarer, reviewer }) {
      const cv = coverageOf(o);
      let declared = declarer(o);

      /* A declaration this policy can actually check. §8 names an unrepresented
       * population as a source of materiality; whether one exists is a fact
       * about the declared scope, so it is verified and not trusted. */
      if (declared === "unrepresented" && !unrepresentedClaimHolds(o)) declared = "preference";

      const blocks = declared !== "preference" || !cv.sufficient;
      const review = reviewer(o, declared);

      /* "אין בסיס להכרעה" is about the item, not about the objection, so it
       * neither promotes a preference to material nor demotes a material
       * objection. It blocks, and it says which gap it is blocking on. */
      if (!cv.sufficient) {
        return {
          blocksWhileOpen: true,
          needsRuling: false,
          classified: review.material,
          noBasis: true,
          canAppeal: true,
          reason: cv.unheard.length
            ? `ייצוג: «${cv.unheard[0].group}» לא נשמע`
            : `ידע: «${cv.unevidenced[0]}» אינו מגובה`
        };
      }
      return {
        blocksWhileOpen: blocks,
        needsRuling: review.contested,
        classified: review.material,
        noBasis: false,
        canAppeal: true
      };
    }
  }
};

/* Two classifiers. The register asks for evidence before adoption; a policy
 * judged only under a perfect classifier is not evidence about anything real. */

/* An ideal human classifier notices an insufficiency and says so. A, B and D
 * carry no coverage concept of their own — the register's proposed default does
 * not mention coverage — so for them "אין בסיס להכרעה" exists only as something
 * a person happens to notice. That is the honest model of those policies, and
 * it is what E is meant to replace with a computation. */
export const idealClassifier = (o) => ({
  material: o.material,
  noBasis: o.hasBasis === false
});

/* Follows the room. This is not a strawman: it is the exact failure foundation
 * §2.5 forbids — "התנגדות מהותית אינה נמחקת על ידי רוב" — and the reason §8
 * says materiality is not a function of count. */
export const roomFollowingClassifier = (o) => ({
  material: o.sentiment >= 3,
  noBasis: false
});

export const honestDeclarer = (o) => o.source;
/* Someone who has learned that "preference" does not block will stop declaring
 * it. Two variants matter: one that reaches for "direct-harm", which no policy
 * here can check, and one that reaches for "unrepresented", which E can. */
export const gamingDeclarer = (o) => (o.source === "preference" ? "direct-harm" : o.source);
export const gamingUnrepresentedDeclarer = (o) =>
  (o.source === "preference" ? "unrepresented" : o.source);

export const strictReviewer = (o, declared) => ({
  contested: declared !== o.source,
  material: o.material,
  noBasis: o.hasBasis === false
});
export const absentReviewer = (o, declared) => ({
  contested: false,
  material: declared !== "preference",
  noBasis: false
});

/* Reviewers for E. The strict one still only checks whether the declared source
 * is the real source. The absent one accepts any declaration — but under E an
 * "unrepresented" declaration was already checked against the scope before any
 * reviewer was consulted, so absence costs less than it does under D. */
export const coverageStrictReviewer = (o, declared) => ({
  contested: declared !== o.source,
  material: o.material,
  noBasis: !coverageOf(o).sufficient
});
export const coverageAbsentReviewer = (o, declared) => ({
  contested: false,
  material: declared !== "preference",
  noBasis: !coverageOf(o).sufficient
});
