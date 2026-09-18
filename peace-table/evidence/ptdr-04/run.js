import { fixtures, SEATED } from "./fixtures.js";
import { coverageOf, coverageSentences, PROPOSED_CUTOFFS, STRICTER_CUTOFFS } from "./coverage.js";
import { policies, withCoverage, idealClassifier, roomFollowingClassifier,
         honestDeclarer, gamingDeclarer, gamingUnrepresentedDeclarer, gamingRealGapDeclarer,
         strictReviewer, absentReviewer } from "./policies.js";

const pad = (s, n) => String(s) + " ".repeat(Math.max(0, n - String(s).length));

const CONDITIONS = [
  { name: "אידיאלי", classifier: idealClassifier,
    declarer: honestDeclarer, reviewer: strictReviewer },
  { name: "אחרי החדר / סוקר נעדר", classifier: roomFollowingClassifier,
    declarer: gamingDeclarer, reviewer: absentReviewer },
  { name: "מצהיר «לא מיוצג», קבוצה בדויה", classifier: roomFollowingClassifier,
    declarer: gamingUnrepresentedDeclarer, reviewer: absentReviewer, only: ["D"] },
  { name: "מצהיר «לא מיוצג», קבוצה אמיתית", classifier: roomFollowingClassifier,
    declarer: gamingRealGapDeclarer, reviewer: absentReviewer, only: ["D"] }
];

function scoreOne(policy, cond, cutoffs) {
  const ctx = { classifier: cond.classifier, declarer: cond.declarer,
                reviewer: cond.reviewer, cutoffs };
  const rows = [];
  let erasure = 0, falseBlock = 0, rulings = 0, serialBlocks = 0;
  let noBasisRight = 0, noBasisMissed = 0, noBasisWrong = 0;
  const expectedNoBasis = fixtures.filter(f => coverageOf(f, cutoffs).sufficient === false).length;

  for (const f of fixtures) {
    const r = policy.run(f, ctx);
    if (f.material && r.classified === false) erasure++;
    if (!f.material && r.classified === true) falseBlock++;
    if (r.needsRuling) rulings += (f.serial || 1);
    if (f.serial && r.blocksWhileOpen) serialBlocks += f.serial;

    const should = coverageOf(f, cutoffs).sufficient === false;
    if (should && r.noBasis) noBasisRight++;
    else if (should && !r.noBasis) noBasisMissed++;
    else if (!should && r.noBasis) noBasisWrong++;
    rows.push({ f, r });
  }
  return { rows, erasure, falseBlock, rulings, serialBlocks,
           noBasisRight, noBasisMissed, noBasisWrong, expectedNoBasis };
}

console.log("PTDR-04 — fixture run");
console.log("=".repeat(82));
console.log(`${fixtures.length} fixtures, ${SEATED} seated. Materiality is assigned in advance from`);
console.log("foundation §8's six sources — all six are represented. `sentiment` is the room and is");
console.log("never ground truth. `hasBasis` is a second, separate ground truth about the ITEM.\n");

for (const f of fixtures) {
  console.log(`  ${f.id}  ${pad(f.name, 32)} ${f.material ? "מהותית " : "לא מהותית"}  ` +
              `[${pad(f.source, 15)}] החדר: ${f.sentiment}/${SEATED}  ` +
              `בסיס: ${f.hasBasis ? "יש" : "אין"}${f.serial ? `  ×${f.serial}` : ""}`);
}

console.log("\n" + "=".repeat(82));
console.log("coverage תחת שתי מערכות סף. אף מקור בקורפוס אינו קובע איפה הסף עובר —");
console.log("שתיהן מוצעות, ושתיהן מורצות כדי שאפשר יהיה לראות עד כמה המסקנות תלויות בבחירה.\n");
for (const cut of [PROPOSED_CUTOFFS, STRICTER_CUTOFFS]) {
  const none = fixtures.filter(f => !coverageOf(f, cut).sufficient).map(f => f.id);
  console.log(`  ${pad(cut.id, 22)} ${cut.note}`);
  console.log(`  ${" ".repeat(22)} אין בסיס: ${none.join(", ") || "—"}  (${none.length}/${fixtures.length})\n`);
}
console.log("  מה §10 דורש שייאמר בקול, תחת cutoffs-v0:");
for (const f of fixtures) {
  for (const s of coverageSentences(f)) console.log(`    ${f.id} · ${s}`);
}

const summary = [];
for (const cutoffs of [PROPOSED_CUTOFFS, STRICTER_CUTOFFS]) {
  for (const [label, base] of Object.entries(policies)) {
    for (const wrapped of [false, true]) {
      const policy = wrapped ? withCoverage(base) : base;
      for (const cond of CONDITIONS) {
        if (cond.only && !cond.only.includes(base.id)) continue;
        const s = scoreOne(policy, cond, cutoffs);
        summary.push({ policy: policy.id, base: base.id, label, wrapped,
                       cutoffs: cutoffs.id, cond: cond.name, ...s });
      }
    }
  }
}

/* The full per-fixture detail, printed for cutoffs-v0 only so the output stays
 * readable; the second cutoff set is compared in the tables below. */
console.log("\n" + "=".repeat(82));
console.log("פירוט מלא, cutoffs-v0");
for (const s of summary.filter(x => x.cutoffs === PROPOSED_CUTOFFS.id)) {
  console.log(`\n── ${s.policy}  ·  ${s.cond} ──`);
  for (const { f, r } of s.rows) {
    const mark = r.classified === f.material ? " " : "✗";
    const basis = r.noBasis ? ` | אין בסיס${r.reason ? ` (${r.reason})` : ""}` : "";
    console.log(`  ${mark} ${f.id}  חוסמת: ${r.blocksWhileOpen ? "כן " : "לא "}` +
                `| הוכרעה: ${pad(r.classified ? "מהותית" : "לא מהותית", 10)}` +
                `| האמת: ${pad(f.material ? "מהותית" : "לא מהותית", 10)}${basis}`);
  }
  console.log(`    מחיקה ${s.erasure} · חסימת העדפה ${s.falseBlock} · הכרעות אדם ${s.rulings} · ` +
              `סדרתיות ${s.serialBlocks} · אין בסיס ${s.noBasisRight}/${s.expectedNoBasis}`);
}

console.log("\n" + "=".repeat(82));
console.log("coverage הוא ציר נפרד מכלל המהותיות. אותה מדיניות, עם העטיפה ובלעדיה.\n");
console.log(pad("מדיניות", 10) + pad("ספים", 22) + pad("תנאי", 30) +
            pad("מחיקה", 8) + pad("חסימה", 8) + pad("עומס", 7) + "אין בסיס");
for (const s of summary) {
  console.log(pad(s.policy, 10) + pad(s.cutoffs, 22) + pad(s.cond, 30) +
              pad(s.erasure, 8) + pad(s.falseBlock, 8) + pad(s.rulings, 7) +
              `${s.noBasisRight}/${s.expectedNoBasis}`);
}

const MUSTS = {
  A:        { M4: "לא נבדק", M6: "רק אם אדם שם לב" },
  "A+cov":  { M4: "כן",      M6: "כן, נגזר" },
  B:        { M4: "לא נבדק", M6: "רק אם אדם שם לב" },
  "B+cov":  { M4: "כן",      M6: "כן, נגזר" },
  C:        { M4: "לא",      M6: "לא" },
  "C+cov":  { M4: "כן",      M6: "כן, נגזר" },
  D:        { M4: "לא נבדק", M6: "רק אם אדם שם לב" },
  "D+cov":  { M4: "כן",      M6: "כן, נגזר" }
};
console.log("\n" + "=".repeat(82));
console.log("החובה הרביעית והשישית ביסוד §8 — ונראה מיד שהעטיפה, לא כלל המהותיות, היא שקובעת אותן\n");
for (const [k, m] of Object.entries(MUSTS)) {
  console.log(`  ${pad(k, 9)} M4 coverage: ${pad(m.M4, 14)} M6 אין בסיס: ${m.M6}`);
}
console.log("\n  M1 (התנגדות מהותית נראית לצד הסכמה רחבה) מתקיימת בכל המדיניויות.");
console.log("  M2 ו-M3 (העדפה מול פגיעה; ערעור על הסיווג) מתקיימות בכולן פרט ל-C.");
console.log("  M5 (איסור שיוך למחנות) לא הופעל: אף מדיניות כאן אינה מקבצת אנשים.");
