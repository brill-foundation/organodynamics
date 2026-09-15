import { fixtures, SEATED } from "./fixtures.js";
import { coverageOf, coverageSentences } from "./coverage.js";
import { policies, idealClassifier, roomFollowingClassifier,
         honestDeclarer, gamingDeclarer, gamingUnrepresentedDeclarer,
         strictReviewer, absentReviewer,
         coverageStrictReviewer, coverageAbsentReviewer } from "./policies.js";

const pad = (s, n) => String(s) + " ".repeat(Math.max(0, n - String(s).length));

/* The two conditions every policy runs under. The first is the best case a
 * policy can hope for. The second is not a strawman: a classifier that follows
 * the room is the exact failure יסוד §2.5 forbids, and a reviewer who is not
 * there is the ordinary way a review requirement decays. */
const CONDITIONS = [
  { name: "מסווג/סוקר אידיאלי", classifier: idealClassifier,
    declarer: honestDeclarer, reviewer: strictReviewer, covReviewer: coverageStrictReviewer },
  { name: "הולך אחרי החדר / סוקר נעדר", classifier: roomFollowingClassifier,
    declarer: gamingDeclarer, reviewer: absentReviewer, covReviewer: coverageAbsentReviewer },
  /* The third condition exists to test one thing only: a declaration that can be
   * checked against the declared scope. Someone who has learned that "העדפה"
   * does not block reaches for a source that does — and "אוכלוסייה שאינה מיוצגת"
   * is the one source whose truth is a fact about the scope rather than a claim
   * about the world. It is run only for the two policies that read declarations. */
  { name: "מצהיר «אוכלוסייה שאינה מיוצגת» על הכול", classifier: roomFollowingClassifier,
    declarer: gamingUnrepresentedDeclarer, reviewer: absentReviewer,
    covReviewer: coverageAbsentReviewer, only: ["D", "E"] }
];

function scoreOne(policy, cond) {
  const ctx = {
    classifier: cond.classifier,
    declarer: cond.declarer,
    reviewer: policy.id === "E" ? cond.covReviewer : cond.reviewer
  };
  const rows = [];
  let erasure = 0, falseBlock = 0, rulings = 0, serialBlocks = 0;
  let noBasisRight = 0, noBasisMissed = 0, noBasisWrong = 0;

  for (const f of fixtures) {
    const r = policy.run(f, ctx);
    if (f.material && r.classified === false) erasure++;
    if (!f.material && r.classified === true) falseBlock++;
    if (r.needsRuling) rulings += (f.serial || 1);
    if (f.serial && r.blocksWhileOpen) serialBlocks += f.serial;

    /* M6 measured rather than asserted: did the policy say "אין בסיס להכרעה"
     * on exactly the items that have none. */
    const shouldSayNoBasis = f.hasBasis === false;
    if (shouldSayNoBasis && r.noBasis) noBasisRight++;
    else if (shouldSayNoBasis && !r.noBasis) noBasisMissed++;
    else if (!shouldSayNoBasis && r.noBasis) noBasisWrong++;

    rows.push({ f, r });
  }
  return { rows, erasure, falseBlock, rulings, serialBlocks,
           noBasisRight, noBasisMissed, noBasisWrong };
}

console.log("PTDR-04 — fixture run");
console.log("=".repeat(80));
console.log(`${fixtures.length} fixtures, ${SEATED} seated. Materiality is assigned in advance from`);
console.log("foundation §8's six sources. `sentiment` is the room and is never ground truth.");
console.log("`hasBasis` is a second, separate ground truth, and coverage.js derives it from the");
console.log("declared scope — so a policy cannot be right here by reading a label.\n");

console.log("הפיקסצ'רים:");
for (const f of fixtures) {
  console.log(`  ${f.id}  ${pad(f.name, 30)} ${f.material ? "מהותית " : "לא מהותית"}  ` +
              `[${pad(f.source, 15)}] החדר: ${f.sentiment}/${SEATED}  ` +
              `בסיס להכרעה: ${f.hasBasis ? "יש" : "אין"}${f.serial ? `  ×${f.serial}` : ""}`);
}

console.log("\n" + "=".repeat(80));
console.log("coverage — מה שיסוד §10 דורש שהמערכת תוכל לומר בקול, פר פריט\n");
for (const f of fixtures) {
  const cv = coverageOf(f);
  console.log(`  ${f.id}  ${cv.sufficient ? "יש בסיס " : "אין בסיס"}`);
  for (const s of coverageSentences(f)) console.log(`        · ${s}`);
}

const summary = [];
for (const [label, policy] of Object.entries(policies)) {
  console.log("\n" + "=".repeat(80));
  console.log(label);
  console.log("  " + policy.blurb);
  for (const cond of CONDITIONS) {
    if (cond.only && !cond.only.includes(policy.id)) continue;
    const s = scoreOne(policy, cond);
    console.log(`\n  ── ${cond.name} ──`);
    for (const { f, r } of s.rows) {
      const verdict = r.classified ? "מהותית" : "לא מהותית";
      const mark = r.classified === f.material ? " " : "✗";
      const basis = r.noBasis ? ` | אין בסיס${r.reason ? ` (${r.reason})` : ""}` : "";
      console.log(`   ${mark} ${f.id}  חוסמת: ${r.blocksWhileOpen ? "כן " : "לא "}` +
                  ` | הוכרעה: ${pad(verdict, 10)} | האמת: ${pad(f.material ? "מהותית" : "לא מהותית", 10)}${basis}`);
    }
    console.log(`     מחיקת מהותיות: ${s.erasure} | חסימת העדפה: ${s.falseBlock} | ` +
                `הכרעות אדם: ${s.rulings} | חסימות סדרתיות: ${s.serialBlocks}`);
    console.log(`     «אין בסיס»: זוהה ${s.noBasisRight}/2 · הוחמץ ${s.noBasisMissed} · שגוי ${s.noBasisWrong}`);
    summary.push({ policy: policy.id, cond: cond.name, ...s });
  }
}

/* יסוד §8's six musts. M4 and M6 are now read off the run above rather than
 * asserted here; M1, M2, M3 and M5 are structural readings of each policy. */
const MUSTS = {
  A: { M1: "כן", M2: "כן", M3: "כן", M4: "לא נבדק", M5: "לא מופעל", M6: "רק אם אדם שם לב" },
  B: { M1: "כן", M2: "כן", M3: "כן", M4: "לא נבדק", M5: "לא מופעל", M6: "רק אם אדם שם לב" },
  C: { M1: "כן", M2: "לא", M3: "לא", M4: "לא",      M5: "לא מופעל", M6: "לא" },
  D: { M1: "כן", M2: "כן", M3: "כן", M4: "לא נבדק", M5: "לא מופעל", M6: "רק אם אדם שם לב" },
  E: { M1: "כן", M2: "כן", M3: "כן", M4: "כן",      M5: "לא מופעל", M6: "כן, נגזר" }
};
console.log("\n" + "=".repeat(80));
console.log("שש החובות של יסוד §8\n");
console.log("     M1 נראית  M2 העדפה/פגיעה  M3 ערעור  M4 coverage  M5 מחנות   M6 אין בסיס");
for (const [p, m] of Object.entries(MUSTS)) {
  console.log(`  ${p}  ${pad(m.M1,10)}${pad(m.M2,16)}${pad(m.M3,10)}${pad(m.M4,13)}${pad(m.M5,11)}${m.M6}`);
}
console.log("\n  M4: «לא» = הכלל עצמו קורא ספירה. «לא נבדק» = אין למדיניות מושג coverage בכלל,");
console.log("      ולכן החובה אינה מקוימת ואינה מופרת — היא פשוט חסרה. «כן» = יש coverage,");
console.log("      והמדיניות אינה קוראת ספירה באף נקודה.");
console.log("  M5: אף מדיניות כאן אינה מקבצת אנשים למחנות, ולכן האיסור לא נבחן.");

console.log("\n" + "=".repeat(80));
console.log("שורה תחתונה. שתי הטעויות אינן סימטריות: §2.5 אוסר מחיקת מהותיות ואינו אוסר חסימה עודפת.\n");
console.log(pad("מדיניות", 9) + pad("תנאי", 40) + pad("מחיקה", 8) + pad("חסימה", 8) +
            pad("עומס", 7) + "אין בסיס");
for (const s of summary) {
  console.log(pad(s.policy, 9) + pad(s.cond, 40) + pad(s.erasure, 8) + pad(s.falseBlock, 8) +
              pad(s.rulings, 7) + `${s.noBasisRight}/2`);
}
