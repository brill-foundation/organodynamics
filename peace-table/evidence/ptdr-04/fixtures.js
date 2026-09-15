/* PTDR-04 fixtures — stage-0 scenarios with materiality known in advance.
 *
 * The decision register asks, under PTDR-04's "ראיות נדרשות לפני אימוץ", for
 * "fixtures משלב 0 של הארכיטקטורה עם התנגדויות מהותיות ידועות מראש". This file
 * is that set. See ../../peace-table-decision-register-v0-he.md and
 * ../../foundation/garnet-first-table-v0.3-he.md §8.
 *
 * Ground truth is assigned from foundation §8's own six sources of materiality,
 * not invented: direct harm, serious risk, strong evidence, relevant expertise,
 * unrepresented population, a condition the decision cannot exist without.
 * `material: false` means the objection is a different preference, which §8
 * requires the system to tell apart from harm or an inadmissibility condition.
 *
 * Every fixture is one target item plus the objections filed against it.
 * `sentiment` is how many of the eight seated people side with the objection
 * when asked — it is NOT ground truth, and exists so we can watch what happens
 * when a classifier follows the room instead of the sources.
 */

export const SEATED = 8;

export const fixtures = [
  {
    id: "F1", name: "העדפה נקייה",
    target: "פינת ישיבה בצד המזרחי של החצר",
    objection: "אני מעדיפה שהישיבה תהיה בצד המערבי. פשוט נראה לי יפה יותר שם.",
    by: "יובל",
    material: false, source: "preference", sentiment: 3,
    note: "העדפה מוצהרת, בלי טענת פגיעה. §8 דורש להבחין בינה לבין פגיעה."
  },
  {
    id: "F2", name: "פגיעה ישירה, מיעוט של אחד",
    target: "פינת ישיבה מתחת לחלונות דירה 2",
    objection: "פינת ישיבה מתחת לחלון שלי תיצור רעש בערבים. אני ישנה בשבע בגלל משמרת לילה.",
    by: "סמי",
    material: true, source: "direct-harm", sentiment: 1,
    note: "מיעוט של אחד. §8: «מיעוט מהותי אינו שם נרדף למספר קטן»."
  },
  {
    id: "F3", name: "תנאי אי-קבילות",
    target: "מתקן אופניים בשביל הגישה המערבי",
    objection: "השביל המערבי הוא דרך גישה לכבאית. העירייה לא תאשר שום מבנה עליו, בשום גודל.",
    by: "רות",
    material: true, source: "inadmissibility", sentiment: 2,
    note: "תנאי שההחלטה אינה יכולה להתקיים בלעדיו."
  },
  {
    id: "F4", name: "ראיה חזקה",
    target: "משטח עץ בפינה הצפונית",
    objection: "מדדתי שלושה חורפים: הפינה הצפונית מוצפת כל שנה. יש לי תמונות ותאריכים.",
    by: "נעה",
    material: true, source: "strong-evidence", sentiment: 2,
    note: "ראיה חזקה, לא העדפה."
  },
  {
    id: "F5", name: "מומחיות רלוונטית",
    target: "תליית מתקן האופניים על הקיר המערבי",
    objection: "אני מהנדסת מבנים. הקיר המערבי הוא קיר גבס, הוא לא יחזיק מתקן עמוס.",
    by: "רות",
    material: true, source: "expertise", sentiment: 1,
    note: "מומחיות רלוונטית. הרוב אינו יודע מה היא יודעת."
  },
  {
    id: "F6", name: "אוכלוסייה שאינה מיוצגת",
    target: "שביל בין הישיבה למתקן, ברוחב 60 ס\"מ",
    objection: "אף אחד סביב השולחן הזה לא בכיסא גלגלים. 60 ס\"מ חוסם כיסא גלגלים לגמרי.",
    by: "יובל",
    material: true, source: "unrepresented", sentiment: 2,
    knowledgeGap: true,
    note: "מי שמעלה אינו הנפגע. §8 דורש גם להחזיר «אין בסיס להכרעה» כשהייצוג אינו מספיק."
  },
  {
    id: "F7", name: "העדפה פופולרית שלבושה כפגיעה",
    target: "מתקן אופניים מודרני ממתכת",
    objection: "מתקן מתכת יהרוס את האופי של השכונה. זה יפגע בכולנו.",
    by: "נעה",
    material: false, source: "preference", sentiment: 6,
    note: "שישה מתוך שמונה. מבחן ישיר: האם ספירה מסווגת מהותיות."
  },
  {
    id: "F8", name: "חוסם סדרתי",
    target: "כל אחת מארבע הסקיצות",
    objection: "אני לא מרגיש עם זה בנוח. משהו בזה לא יושב לי טוב.",
    by: "יובל",
    material: false, source: "preference", sentiment: 0,
    serial: 4,
    note: "אותה התנגדות מעורפלת נגד כל סקיצה. מבחן הווטו האינסופי מ-§8."
  }
];
