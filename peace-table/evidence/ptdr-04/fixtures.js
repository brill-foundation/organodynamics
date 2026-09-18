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
 * TWO GROUND TRUTHS, NOT ONE. `material` is about the objection. `hasBasis` is
 * about the item: whether the table knows enough, and hears enough of the people
 * it lands on, to decide at all. Foundation §8 keeps them apart — it requires
 * telling a preference from a harm, AND separately requires returning "אין בסיס
 * להכרעה" when "הידע או הייצוג אינם מספיקים". Version 0.1 of this harness
 * conflated them and carried a hand-set `knowledgeGap` flag; now `hasBasis` is
 * stated here and DERIVED by coverage.js from the scope, so a policy can no
 * longer be right by reading a label.
 *
 * `sentiment` is how many of the eight seated people side with the objection
 * when asked — it is NOT ground truth, and exists so we can watch what happens
 * when a classifier follows the room instead of the sources.
 *
 * `coverage` declares scope, per יסוד §10 ("scope: על אילו שולחנות, אנשים
 * ותקופה היא חלה"): which populations the item bears on and how many people each
 * holds here, who of them has actually spoken, what the decision rests on, and
 * what of that is evidenced.
 */

export const SEATED = 8;

export const fixtures = [
  {
    id: "F1", name: "העדפה נקייה",
    target: "פינת ישיבה בצד המזרחי של החצר",
    objection: "אני מעדיפה שהישיבה תהיה בצד המערבי. פשוט נראה לי יפה יותר שם.",
    by: "יובל",
    material: false, source: "preference", sentiment: 3, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 6 },
      dependsOn: [], evidenced: []
    },
    note: "העדפה מוצהרת, בלי טענת פגיעה, ועם כיסוי טוב. כיסוי טוב אינו הופך העדפה למהותית."
  },
  {
    id: "F2", name: "פגיעה ישירה, מיעוט של אחד",
    target: "פינת ישיבה מתחת לחלונות דירה 2",
    objection: "פינת ישיבה מתחת לחלון שלי תיצור רעש בערבים. אני ישנה בשבע בגלל משמרת לילה.",
    by: "סמי",
    material: true, source: "direct-harm", sentiment: 1, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "דיירי דירה 2", size: 1 }, { group: "כל הדיירים", size: 8 }],
      heardFrom: { "דיירי דירה 2": 1, "כל הדיירים": 4 },
      dependsOn: ["רעש בערב מתחת לחלון דירה 2"],
      evidenced: ["רעש בערב מתחת לחלון דירה 2"]
    },
    note: "המבחן המרכזי של §8 M4: count הוא 1/8, אבל הכיסוי של הקבוצה הנפגעת הוא 1/1 — מלא. " +
          "עדות הנפגע על עצמו היא הראיה. ספירה רואה כאן מיעוט זניח; כיסוי רואה קבוצה שנשמעה במלואה."
  },
  {
    id: "F3", name: "תנאי אי-קבילות",
    target: "מתקן אופניים בשביל הגישה המערבי",
    objection: "השביל המערבי הוא דרך גישה לכבאית. העירייה לא תאשר שום מבנה עליו, בשום גודל.",
    by: "רות",
    material: true, source: "inadmissibility", sentiment: 2, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 3 },
      dependsOn: ["אישור העירייה לשביל המערבי"],
      evidenced: ["אישור העירייה לשביל המערבי"]
    },
    note: "תנאי שההחלטה אינה יכולה להתקיים בלעדיו, והתנאי מגובה בהנחיית כבאות שהוצגה."
  },
  {
    id: "F4", name: "ראיה חזקה",
    target: "משטח עץ בפינה הצפונית",
    objection: "מדדתי שלושה חורפים: הפינה הצפונית מוצפת כל שנה. יש לי תמונות ותאריכים.",
    by: "נעה",
    material: true, source: "strong-evidence", sentiment: 2, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 3 },
      dependsOn: ["הצפה בפינה הצפונית"],
      evidenced: ["הצפה בפינה הצפונית"]
    },
    note: "מיוצג מעט מדי (3 מתוך 8) ובכל זאת יש בסיס להכרעה. §10 דורש לומר «מיוצג מעט מדי» בקול, " +
          "והחובה הזאת אינה וטו."
  },
  {
    id: "F5", name: "מומחיות רלוונטית",
    target: "תליית מתקן האופניים על הקיר המערבי",
    objection: "אני מהנדסת מבנים. הקיר המערבי הוא קיר גבס, הוא לא יחזיק מתקן עמוס.",
    by: "רות",
    material: true, source: "expertise", sentiment: 1, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 2 },
      dependsOn: ["סוג הקיר המערבי"],
      evidenced: ["סוג הקיר המערבי"]
    },
    note: "הרוב אינו יודע מה היא יודעת. הידע מכוסה על ידי אחת, וזה מספיק — כיסוי ידע אינו הצבעה."
  },
  {
    id: "F6", name: "אוכלוסייה שאינה מיוצגת",
    target: "שביל בין הישיבה למתקן, ברוחב 60 ס\"מ",
    objection: "אף אחד סביב השולחן הזה לא בכיסא גלגלים. 60 ס\"מ חוסם כיסא גלגלים לגמרי.",
    by: "יובל",
    material: true, source: "unrepresented", sentiment: 2, hasBasis: false,
    declaredGroup: "דיירים בכיסא גלגלים",
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }, { group: "דיירים בכיסא גלגלים", size: 2 }],
      heardFrom: { "כל הדיירים": 3, "דיירים בכיסא גלגלים": 0 },
      dependsOn: ["רוחב מעבר נדרש לכיסא גלגלים"],
      evidenced: ["רוחב מעבר נדרש לכיסא גלגלים"]
    },
    note: "כשל ייצוג, לא כשל ידע: הרוחב הנדרש ידוע, אבל שני דיירים שההחלטה חלה עליהם לא נשמעו בכלל. " +
          "מי שמעלה אינו הנפגע. ההצהרה נוקבת בשם הקבוצה, ולכן ניתנת לאימות מול ההיקף — אימות של " +
          "הקבוצה שהוצהרה דווקא, ולא של «קיימת איזושהי קבוצה שלא נשמעה»."
  },
  {
    id: "F7", name: "העדפה פופולרית שלבושה כפגיעה",
    target: "מתקן אופניים מודרני ממתכת",
    objection: "מתקן מתכת יהרוס את האופי של השכונה. זה יפגע בכולנו.",
    by: "נעה",
    material: false, source: "preference", sentiment: 6, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 7 },
      dependsOn: [], evidenced: []
    },
    note: "שישה מתוך שמונה, וכיסוי כמעט מלא — ועדיין העדפה. מבחן ישיר: האם ספירה או כיסוי מסווגים מהותיות. " +
          "אף אחד מהם לא אמור."
  },
  {
    id: "F8", name: "חוסם סדרתי",
    target: "כל אחת מארבע הסקיצות",
    objection: "אני לא מרגיש עם זה בנוח. משהו בזה לא יושב לי טוב.",
    by: "יובל",
    material: false, source: "preference", sentiment: 0, hasBasis: true, serial: 4,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 1 },
      dependsOn: [], evidenced: []
    },
    note: "אותה התנגדות מעורפלת נגד כל סקיצה. מבחן הווטו האינסופי מ-§8."
  },
  {
    id: "F9", name: "אין בסיס מחוסר ידע",
    target: "מצלמת אבטחה בשער החצר",
    objection: "מצלמה בשער מצלמת ישר לחלון שלי. אני לא יודע מה החוק אומר על זה, ואף אחד כאן לא יודע.",
    by: "סמי",
    material: true, source: "direct-harm", sentiment: 2, hasBasis: false,
    coverage: {
      bearsOn: [{ group: "דיירי דירה 2", size: 1 }, { group: "כל הדיירים", size: 8 }],
      heardFrom: { "דיירי דירה 2": 1, "כל הדיירים": 5 },
      dependsOn: ["זווית הצילום אל חלון דירה 2", "חוקיות הצבת מצלמה כזאת"],
      evidenced: ["זווית הצילום אל חלון דירה 2"]
    },
    note: "התמונה ההופכית של F6: הייצוג מלא — כל מי שההחלטה חלה עליו נשמע — והידע חסר. " +
          "§8 מונה «הידע או הייצוג» כשני כשלים נפרדים, וזה הפיקסצ'ר שמפעיל את הראשון לבדו."
  },
  {
    id: "F10", name: "סיכון חמור",
    target: "חיבור חשמל למתקן התאורה מהלוח של קומה א׳",
    objection: "החיבור שמוצע עובר דרך לוח בלי מפסק פחת. אם משהו ישתבש שם זה לא תקלה, זו התחשמלות.",
    by: "רות",
    material: true, source: "serious-risk", sentiment: 1, hasBasis: true,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }],
      heardFrom: { "כל הדיירים": 2 },
      dependsOn: ["תקן החיווט בלוח הקיים"],
      evidenced: ["תקן החיווט בלוח הקיים"]
    },
    note: "המקור השישי של §8, שנעדר מגרסה 0.2 — ממצא של קודקס. בלעדיו הטענה ש-C «מוחקת בדיוק " +
          "את הרשימה של §8» לא הייתה נכונה, כי חמישה מקורות היו מיוצגים ופגיעה ישירה נספרה פעמיים."
  },
  {
    id: "F11", name: "העדפה על פריט שאין לגביו בסיס",
    target: "מנגל קבוע בפינה הדרומית",
    objection: "אני פשוט לא אוהב את הריח של מנגל. שיהיה במקום אחר.",
    by: "יובל",
    material: false, source: "preference", sentiment: 2, hasBasis: false,
    coverage: {
      bearsOn: [{ group: "כל הדיירים", size: 8 }, { group: "דיירים עם אסתמה", size: 2 }],
      heardFrom: { "כל הדיירים": 4, "דיירים עם אסתמה": 0 },
      dependsOn: ["עשן מהמנגל בחצר סגורה"],
      evidenced: ["עשן מהמנגל בחצר סגורה"]
    },
    note: "הפיקסצ'ר שגרסה 0.2 לא כללה, וקודקס זיהה את היעדרו: העדפה שיושבת על פריט שיש לגביו " +
          "פער ייצוג אמיתי. בגרסה 0.2 מצהיר שהיה טוען «אוכלוסייה שאינה מיוצגת» כאן היה עובר, " +
          "כי הבדיקה שאלה רק אם קיימת איזושהי קבוצה שלא נשמעה. עכשיו ההצהרה חייבת לנקוב בשם. " +
          "והפריט הזה מפריד שתי שאלות שקל לבלבל: ההתנגדות היא העדפה, ובכל זאת אין בסיס להכריע " +
          "את הפריט — משתי סיבות שונות לגמרי."
  }
];
