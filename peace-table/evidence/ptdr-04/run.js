import { fixtures, SEATED } from "./fixtures.js";
import { policies, idealClassifier, roomFollowingClassifier,
         honestDeclarer, gamingDeclarer, strictReviewer, absentReviewer } from "./policies.js";

const pad = (s, n) => String(s) + " ".repeat(Math.max(0, n - String(s).length));

/* The two conditions every policy is run under. Column 1 is the best case the
 * policy can hope for; column 2 is what §2.5 exists to prevent. */
const CONDITIONS = [
  { name: "מסווג אידיאלי", classifier: idealClassifier,
    declarer: honestDeclarer, reviewer: strictReviewer },
  { name: "מסווג שהולך אחרי החדר", classifier: roomFollowingClassifier,
    declarer: gamingDeclarer, reviewer: absentReviewer }
];

function scoreOne(policy, cond) {
  const rows = [];
  let erasure = 0, falseBlock = 0, rulings = 0, noBasisUsed = 0, serialBlocks = 0;

  for (const f of fixtures) {
    const r = policy.run(f, cond);
    const settled = r.classified;
    // erasure: a genuinely material objection that the policy lets through as not material
    if (f.material && settled === false) erasure++;
    // false block: a mere preference the policy settles as material
    if (!f.material && settled === true) falseBlock++;
    if (r.needsRuling) rulings += (f.serial || 1);
    if (r.noBasis) noBasisUsed++;
    if (f.serial && r.blocksWhileOpen) serialBlocks += f.serial;
    rows.push({ f, r, settled });
  }
  return { rows, erasure, falseBlock, rulings, noBasisUsed, serialBlocks };
}

console.log("PTDR-04 — fixture run");
console.log("=".repeat(78));
console.log(`${fixtures.length} fixtures, ${SEATED} seated. Materiality is assigned in advance`);
console.log("from foundation §8's six sources; `sentiment` is the room, never ground truth.\n");

console.log("הפיקסצ'רים:");
for (const f of fixtures) {
  console.log(`  ${f.id}  ${pad(f.name, 34)} ${f.material ? "מהותית " : "לא מהותית"}  ` +
              `[${pad(f.source, 14)}] החדר: ${f.sentiment}/${SEATED}${f.serial ? `  ×${f.serial}` : ""}`);
}

const summary = [];
for (const [label, policy] of Object.entries(policies)) {
  console.log("\n" + "=".repeat(78));
  console.log(label);
  console.log("  " + policy.blurb);
  for (const cond of CONDITIONS) {
    const s = scoreOne(policy, cond);
    console.log(`\n  ── ${cond.name} ──`);
    for (const { f, r, settled } of s.rows) {
      const verdict = r.noBasis ? "אין בסיס" : settled ? "מהותית" : "לא מהותית";
      const truth = f.material ? "מהותית" : "לא מהותית";
      const mark = r.noBasis ? "○" : (settled === f.material ? " " : "✗");
      console.log(`   ${mark} ${f.id}  חוסמת בהמתנה: ${r.blocksWhileOpen ? "כן " : "לא "}` +
                  ` | הוכרעה: ${pad(verdict, 10)} | האמת: ${pad(truth, 10)}`);
    }
    console.log(`     מחיקת מהותיות: ${s.erasure} | חסימת העדפה: ${s.falseBlock} | ` +
                `הכרעות אדם נדרשות: ${s.rulings} | «אין בסיס»: ${s.noBasisUsed} | ` +
                `חסימות סדרתיות: ${s.serialBlocks}`);
    summary.push({ policy: policy.id, cond: cond.name, ...s });
  }
}

/* foundation §8's six musts, evaluated structurally per policy */
const MUSTS = {
  A: { M1: true,  M2: true,  M3: true,  M4: "לא נבדק", M5: "לא מופעל", M6: true },
  B: { M1: true,  M2: true,  M3: true,  M4: "לא נבדק", M5: "לא מופעל", M6: true },
  C: { M1: true,  M2: false, M3: false, M4: false,     M5: "לא מופעל", M6: false },
  D: { M1: true,  M2: true,  M3: true,  M4: "לא נבדק", M5: "לא מופעל", M6: true }
};
console.log("\n" + "=".repeat(78));
console.log("שש החובות של יסוד §8 — האם המדיניות מסוגלת לקיים אותן מבנית\n");
console.log("        M1 נראית  M2 העדפה/פגיעה  M3 ערעור  M4 coverage  M5 מחנות  M6 אין בסיס");
for (const [p, m] of Object.entries(MUSTS)) {
  const fmt = v => v === true ? "כן" : v === false ? "לא" : v;
  console.log(`   ${p}    ${pad(fmt(m.M1),10)}${pad(fmt(m.M2),16)}${pad(fmt(m.M3),10)}` +
              `${pad(fmt(m.M4),13)}${pad(fmt(m.M5),10)}${fmt(m.M6)}`);
}

console.log("\n" + "=".repeat(78));
console.log("שורה תחתונה לפי שני הכשלים שאסור לבלבל ביניהם\n");
console.log(pad("מדיניות", 10) + pad("תנאי", 26) + pad("מחיקת מהותיות", 16) +
            pad("חסימת העדפה", 14) + "עומס מסווג");
for (const s of summary) {
  console.log(pad(s.policy, 10) + pad(s.cond, 26) + pad(s.erasure, 16) +
              pad(s.falseBlock, 14) + s.rulings);
}
