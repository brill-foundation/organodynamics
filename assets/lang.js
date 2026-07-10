"use strict";
/* Language as an interpretive layer, not localization.
   Each pack carries (a) ui strings and (b) `concepts` — per-language names for
   the laboratory's load-bearing concepts WITH an interpretive note recording
   what shifts in this language. A translation is a representation: authored,
   challengeable, revisable. Packs live here as script (not fetched) so the
   layer works offline and from a bare folder. English is the document default;
   its pack carries concepts only. Future languages: add LAB_LANGS.<code>. */
window.LAB_LANGS = {
  en: {
    meta: { lang: "en", dir: "ltr", label: "עברית" },
    ui: {},
    concepts: {
      door:     { name: "The Door",   note: "The object at the threshold — furniture, not the process." },
      come:     { name: "Come",       note: "The invitation — the place addresses the person before the crossing. Named in drafts/03-come.md on day one." },
      arrival:  { name: "Arrival",    note: "The process — the transition where the Place reveals what changed while you were away." },
      habitat:  { name: "Habitat",    note: "An environment that enables a form of life — not a room." },
      realityVote: { name: "Reality Vote", note: "Validation that arrives from reality, never from authority." },
      butterfly:{ name: "The Butterfly", note: "A sustained symbiosis of different intelligences — protected research." }
    }
  },
  he: {
    meta: { lang: "he", dir: "rtl", label: "EN" },
    ui: {
      "brand.sub": "· המעבדה של קרן בְּריל",
      "nav.constitution": "החוקה",
      "nav.rfcs": "RFCs",
      "nav.record": "הרשומה",
      "nav.cabinet": "הארון",
      "door.kicker": "אתם עומדים בפתחה של",
      "door.title": "מעבדה חיה",
      "door.lede": "אורגנודינמיקה היא דיסציפלינה הנדסית לייצוגים מתפתחים של המציאות. היא מתורגלת כאן, סביב שולחן אחד עם ארבעה כיסאות, בידי בני אדם ואומני־AI מוזמנים. רעיונות מבשילים מעיפרון לדיו לדפוס; מה שקרה אינו נתון למשא ומתן. זו אינה תוכנה שמפעילים — זה מקום שגרים בו.",
      "door.vote": "למציאות ההצבעה האחרונה.",
      "tag.inhabit": "לגור",
      "room.lab": "המעבדה <small>The Table</small>",
      "room.lab.p": "המקום עצמו — השולחן, היומן, הארון, המדף, המכבש. עובד לא־מקוון; כיסאות ה־AI הם אורחים מוזמנים, לעולם לא תשתית.",
      "tag.constitution": "מה שהמציאות אשררה",
      "room.constitution": "החוקה",
      "room.constitution.p": "אובייקטים מחזיקים אחריות; הרהיטים נשארים לא־חכמים; שימור אינו רשות. כמה שאלות נשארות פתוחות בכוונה.",
      "tag.rfcs": "תחת אתגור",
      "room.rfcs": "ה־RFCs",
      "room.rfcs.p": "המכשיר · החקירה · שכבת הניווט. הצעות שמבשילות באתגור וברוויזיה — ושומרות את הדחיות שלהן.",
      "tag.release": "שחרור ריבוני",
      "room.release": "קחו את המקום הביתה",
      "room.release.p": "RealityGame 0.0.1 — הורדה, חילוץ, דאבל־קליק. כל המעבדה בתיקייה אחת: בלי שרת, בלי ענן, בלי חשבון.",
      "tag.record": "הוספה־בלבד",
      "room.record": "הרשומה",
      "room.record.p": "כל קומיט, כל רוויזיה, כל למידה שנשמרה. הרשומה חפה מטעות רק לגבי עצמה — והיא אינה שוכחת דבר.",
      "tag.cabinet": "ארכיון",
      "room.cabinet": "הארון <small>The Cabinet</small>",
      "room.cabinet.p": "ממצאי מחקר, כפי שהיו — סקירות, קריאות, ויכוחים. מופקדים בידי מחבריהם; איש אינו מפרש אותם.",
      "signals.h2": "סימני חיים",
      "signals.preserve": "שימורים אחרונים",
      "signals.open": "שאלות חוקתיות פתוחות",
      "signals.rfc": "RFCs",
      "signals.note": "האותות מוצגים זה לצד זה, לעולם לא משולבים — אי־הסכמה היא מידע.",
      "footer.a": "אורגנודינמיקה · קרן בריל",
      "footer.b": "הכניסה היא מצלמה; המקום נוסע בתיקייה.",
      "footer.c": "למציאות ההצבעה האחרונה.",
      "reader.back": "← הדלת",
      "cabinet.kicker": "רהיט ארכיוני",
      "cabinet.title": "הארון",
      "cabinet.lede": "מה שנכנס נשמר, כפי שהוא. ממצאי מחקר — סקירות, קריאות, ויכוחים — מופקדים בידי מחבריהם עם מטא־נתונים מוצהרים. דבר כאן אינו מפורש, מסוכם או מדורג. ממצאים, לא תמלילים.",
      "cabinet.deposit": "הפקדה היא מעשה של מחבר: הוסיפו קובץ markdown עם כותרת־קדמית לצד אלה ורשמו אותו ב־catalog.json. הארון מחזיק; המחברים מצהירים; איש אינו מפרש.",
      "cabinet.footer": "החדר הזה מציג את cabinet/*.md כפי שהם — הרשומה היא מקור האמת."
    },
    concepts: {
      door:     { name: "הדלת",  note: "בעברית הדלת קרובה לשער — מַעֲבָר, לא מחסום. החפץ שעל הסף; הרהיט, לא התהליך." },
      come:     { name: "בוא",   note: "ההזמנה — המקום פונה אל האדם לפני החצייה. בעברית 'בוא' הוא ציווי רך, כמעט חיבוק. נשא את שמו ב-drafts/03-come.md מהיום הראשון." },
      arrival:  { name: "הַגָּעָה", note: "התהליך — המעבר שבו המקום חושף מה השתנה בהיעדרכם. העברית מבחינה בין 'הגעה' (האירוע) ל'בוא' (ההזמנה) — הבחנה שהאנגלית מוחקת." },
      habitat:  { name: "בית גידול", note: "סביבה שמאפשרת צורת חיים — לא חדר. המונח העברי נושא את הגידול בתוכו." },
      realityVote: { name: "הצבעת המציאות", note: "אימות שמגיע מהמציאות, לא מסמכות. בעברית ההצבעה קרובה ל'הצבעה על' — המציאות גם מצביעה וגם מורה באצבע." },
      butterfly:{ name: "הפרפר", note: "סימביוזה מתמשכת של תבונות שונות — מחקר מוגן." }
    }
  }
};
(function(){
  const store={get k(){try{return localStorage.getItem("lab-lang")}catch(e){return null}},
               set(v){try{localStorage.setItem("lab-lang",v)}catch(e){}}};
  const qs=new URLSearchParams(location.search);
  let cur=qs.get("lang")||store.k||"en";
  if(!window.LAB_LANGS[cur])cur="en";
  function apply(code){
    const pack=window.LAB_LANGS[code]||window.LAB_LANGS.en;
    document.documentElement.lang=pack.meta.lang;
    document.documentElement.dir=pack.meta.dir;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const k=el.getAttribute("data-i18n");
      if(el.dataset.i18nDefault===undefined)el.dataset.i18nDefault=el.innerHTML;
      el.innerHTML=(pack.ui&&pack.ui[k])||el.dataset.i18nDefault;
    });
    const btn=document.getElementById("langToggle");
    if(btn)btn.textContent=pack.meta.label;
    cur=code;store.set(code);
  }
  window.LAB_LANG={
    apply,
    get current(){return cur},
    concept(key){const p=window.LAB_LANGS[cur];return (p&&p.concepts&&p.concepts[key])||window.LAB_LANGS.en.concepts[key];}
  };
  const init=()=>{
    const btn=document.getElementById("langToggle");
    if(btn)btn.addEventListener("click",()=>apply(cur==="en"?"he":"en"));
    apply(cur);
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
