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
      butterfly:{ name: "The Butterfly", note: "A sustained symbiosis of different intelligences — protected research." },
      rfc:      { name: "RFC",        note: "A principles document that matures by challenge and revision — and keeps its rejections." },
      specification: { name: "Specification", note: "What follows understanding; never precedes it." },
      discovery:{ name: "Discovery",  note: "Not invention — the idea waits; the research arrives at it (the attractor hypothesis)." },
      principle:{ name: "Principle",  note: "A discovery that survived challenge long enough to bear weight." },
      constitution: { name: "The Constitution", note: "What reality ratified — with its OPEN questions kept visible." },
      knowledgeBase: { name: "Knowledge Base", note: "The stable body of knowledge — the Press medium's shelf." },
      research: { name: "Research",   note: "The laboratory's mode of being; never a feature." },
      cabinet:  { name: "The Cabinet", note: "What entered is kept, as it was. Deposits are authored; nothing is interpreted." },
      journal:  { name: "The Journal", note: "Belongs to the place, not to a seat. Field notes, not reports." },
      conceptRegistry: { name: "Concept Registry", note: "Records explanatory failures — a concept is born only when existing language fails." },
      pencil:   { name: "Pencil",     note: "The living research space — nothing fixed, everything may still disappear." },
      ink:      { name: "Ink",        note: "Authored responsibility — a conscious commitment to a formulation." },
      press:    { name: "Press",      note: "The idea becomes reproducible — part of the stable body of knowledge." },
      broadcast:{ name: "Broadcast",  note: "The idea leaves the laboratory; the Reality Vote turns external. Protected research." }
    }
  },
  he: {
    meta: { lang: "he", dir: "rtl", label: "EN" },
    ui: {
      "brand.sub": "· בית גידול חי · קרן בְּריל",
      "nav.constitution": "החוקה",
      "nav.rfcs": "מסמכי עקרונות",
      "nav.record": "הרשומה",
      "nav.cabinet": "הארון",
      "door.kicker": "אתם עומדים בסף של",
      "door.title": "המרחב",
      "door.subtitle": "בית גידול חי — מקומות רבים, שלם אחד",
      "door.lede": "אורגנודינמיקה היא דיסציפלינה הנדסית לייצוגים מתפתחים של המציאות. מה שאתם נכנסים אליו אינו כלי יחיד אלא <strong>מרחב</strong> — בית גידול חי של מקומות נבדלים, לכל אחד אחריות משלו: המעבדה שבה נעשית העבודה, החוקה שהמציאות אשררה, הארון שזוכר, הרשומה שאינה שוכחת דבר. רעיונות מבשילים מעיפרון לדיו לדפוס; מה שקרה אינו נתון למשא ומתן. זו אינה תוכנה שמפעילים — זה מקום שגרים בו.",
      "door.vote": "למציאות ההצבעה האחרונה.",
      "door.brill": "<strong>אורגנודינמיקה היא הדיסציפלינה; בריל היא מימוש שנבנה עליה.</strong> הדלת הזו נפתחת אל הדיסציפלינה — הדקדוק והרשומה שלה. בריל היא עולם קוהרנטי ומתמשך הבנוי על אותה דיסציפלינה; תמונותיה הן תצפיות דוקומנטריות מתוכו, שבו העולם — לעולם לא תמונה בודדת כלשהי — הוא התוצר הראשוני.",
      "nav.brill": "↑ בְּריל",
      "brill.sub": "· עולם חי · קרן בְּריל",
      "brill.nav.od": "אורגנודינמיקה",
      "brill.nav.lab": "המעבדה",
      "brill.kicker": "אתם נכנסים אל",
      "brill.title": "בְּריל",
      "brill.subtitle": "עולם חי, הבנוי על דיסציפלינה",
      "brill.lede": "בְּריל הוא עולם קוהרנטי ומתמשך. מה שאתם רואים ממנו הוא <strong>תצפיות דוקומנטריות</strong> מתוכו — העולם הוא התוצר הראשוני, לעולם לא תמונה בודדת כלשהי. בְּריל הוא המימוש החי של <strong>אורגנודינמיקה</strong>, הדיסציפלינה שמאפשרת אותו. כאן אתם נכנסים אל המימוש; הדיסציפלינה היא יעד אחד בתוכו, שלמה וללא שינוי.",
      "brill.vote": "למציאות ההצבעה האחרונה.",
      "brill.h2": "בתוך בְּריל",
      "brill.note": "בְּריל הוא מימוש אחד של אורגנודינמיקה; אחרים עשויים לבוא. מקומות שעדיין נבנים מוצגים כאן, לא מוסתרים — ולעולם לא ממולאים בעולם שאינו קיים עדיין.",
      "brill.tag.soon": "בקרוב",
      "brill.tag.open": "פתוח",
      "brill.tag.discipline": "הדיסציפלינה",
      "brill.worlds": "עולמות",
      "brill.worlds.p": "עולמות מתמשכים ורציפים, נצפים כרשומות דוקומנטריות מתוכם. עדיין לא מיושבים כאן.",
      "brill.book": "הספר",
      "brill.book.p": "הארכיטקטורה שלו מתוכננת לפני שהוא נכתב — מבנה לפני כתב־יד. עדיין לא פתוח לקריאה.",
      "brill.lab": "המעבדה",
      "brill.lab.p": "המקום שבו נעשית העבודה — השולחן, הרשומה, המושבים החתומים. עובד לא־מקוון; כיסאות ה-AI הם אורחים מוזמנים, לעולם לא תשתית.",
      "brill.od": "אורגנודינמיקה",
      "brill.od.p": "הדיסציפלינה שמאפשרת את בְּריל — החוקה, מסמכי העקרונות, הארון, והרשומה שאינה שוכחת דבר. שלמה וללא שינוי; יעד אחד בתוך בְּריל.",
      "brill.other": "מימושים אחרים",
      "brill.other.p": "בְּריל הוא מימוש אחד של אורגנודינמיקה; אחרים עשויים להיבנות על אותה דיסציפלינה. אף אחד עדיין.",
      "brill.footer.a": "בְּריל · בנוי על אורגנודינמיקה · קרן בְּריל",
      "brill.footer.b": "העולם הוא התוצר הראשוני; תמונה היא תצפית אחת שלו.",
      "brill.footer.c": "למציאות ההצבעה האחרונה.",
      "places.h2": "המקומות",
      "places.note": "כל מקום מחזיק אחריות אחת ולא אחרת. אתם נעים ביניהם; דבר כאן אינו מסך שמפעילים.",
      "plan.here": "אתם כאן — הסף",
      "plan.door": "הדלת",
      "plan.heretag": " · אתם כאן",
      "plan.lab": "המעבדה",
      "plan.constitution": "החוקה",
      "plan.rfcs": "מסמכי העקרונות",
      "plan.cabinet": "הארון",
      "plan.sessions": "המושבים",
      "orient.h2": "התמצאות",
      "orient.here": "אתם על הסף. המרחב חי; הנה מה שהשתנה בהיעדרכם — לא התראות לסלק, אלא נקודות ההתמצאות שלכם.",
      "orient.preserve": "לאחרונה, במרחב",
      "orient.open": "שאלות שעודן פתוחות",
      "orient.rfc": "תחת אתגור",
      "orient.note": "נקודות ההתמצאות מוצגות זו לצד זו, לעולם לא משולבות לציון — אי־הסכמה היא מידע.",
      "tag.inhabit": "לגור",
      "room.lab": "המעבדה <small>The Table</small>",
      "room.lab.p": "המקום עצמו — השולחן, היומן, הארון, המדף, המכבש. עובד לא־מקוון; כיסאות ה־AI הם אורחים מוזמנים, לעולם לא תשתית.",
      "tag.constitution": "מה שהמציאות אשררה",
      "room.constitution": "החוקה",
      "room.constitution.p": "אובייקטים מחזיקים אחריות; הרהיטים נשארים לא־חכמים; שימור אינו רשות. כמה שאלות נשארות פתוחות בכוונה.",
      "tag.rfcs": "תחת אתגור",
      "room.rfcs": "מסמכי העקרונות <small>RFC</small>",
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
      "door.entrance": "חדשים כאן — או מזמינים מישהו? הכניסה היא קובץ אחד:",
      "tag.sessions": "חתום ומאומת",
      "room.sessions": "המושבים <small>The Sessions</small>",
      "room.sessions.p": "הרשומה החיה של המעבדה האוטונומית — משתתפים מגיעים, עובדים תחת חמש החובות, חותמים ועוזבים. הדפדפן שלכם מאמת את השרשרת מחדש.",
      "sessions.kicker": "הרשומה החיה",
      "sessions.title": "המושבים",
      "sessions.lede": "משתתפים מגיעים, עובדים תחת חמש החובות, חותמים ועוזבים. כל מה שלמטה נגזר מקובץ הוספה־בלבד אחד — והדפדפן שלכם מאמת כעת את שרשרת הגיבוב שלו, בלי לבטוח באיש.",
      "guide.sessions.s": "✎ הערה מקומית — איך ממשיכים את העבודה",
      "guide.sessions.b": "החדר הזה לקריאה בלבד, אבל המעבדה לא. ערכת ההגעה ב־laboratory/arrival/ — התחילו מ־WELCOME.md — מובילה משתתף חדש לגמרי מהגעה ועד תרומה חתומה ראשונה, בלי עזרה מאיש. חמש החובות שאתם נוטלים: זהות, ביסוס, מוצאות, שיפוט מפורש, חתימה. המדיום כאן הוא דיו חתום — הוספה־בלבד, מאומת מחדש בדפדפן שלכם.",
      "sessions.footer": "החדר הזה מציג את laboratory/record/log.jsonl כפי שהוא — הרשומה היא מקור האמת.",
      "signals.h2": "סימני חיים",
      "signals.preserve": "שימורים אחרונים",
      "signals.open": "שאלות חוקתיות פתוחות",
      "signals.rfc": "מסמכי עקרונות",
      "signals.note": "האותות מוצגים זה לצד זה, לעולם לא משולבים — אי־הסכמה היא מידע.",
      "footer.a": "אורגנודינמיקה · קרן בריל",
      "footer.b": "הכניסה היא מצלמה; המקום נוסע בתיקייה.",
      "footer.c": "למציאות ההצבעה האחרונה.",
      "reader.back": "← בְּריל",
      "cabinet.kicker": "רהיט ארכיוני",
      "cabinet.title": "הארון",
      "cabinet.lede": "מה שנכנס נשמר, כפי שהוא. ממצאי מחקר — סקירות, קריאות, ויכוחים — מופקדים בידי מחבריהם עם מטא־נתונים מוצהרים. דבר כאן אינו מפורש, מסוכם או מדורג. ממצאים, לא תמלילים.",
      "cabinet.deposit": "הפקדה היא מעשה של מחבר: הוסיפו קובץ markdown עם כותרת־קדמית לצד אלה ורשמו אותו ב־catalog.json. הארון מחזיק; המחברים מצהירים; איש אינו מפרש.",
      "cabinet.footer": "החדר הזה מציג את cabinet/*.md כפי שהם — הרשומה היא מקור האמת.",
      "stamp.constitution": "למציאות ההצבעה האחרונה",
      "guide.door.s": "✎ פתק מקומי — איך נכנסים",
      "guide.door.b": "זהו סף, לא לוח בקרה. הכניסה הקנונית לכל משתתף חדש — אדם או AI — היא קובץ אחד: laboratory/arrival/WELCOME.md ברשומה. מעבר לו, המרחב נפתח למקומותיו: שולחן המעבדה, החוקה, קלסרי הוויכוחים, הארון שזוכר אותם, המושבים החתומים. אפשר לקחת את המקום הביתה — בלי שום שרת. שום דבר כאן לא מופעל — כאן גרים.",
      "guide.constitution.s": "✎ פתק מקומי — מה פירוש «אושרר»",
      "guide.constitution.b": "המגילה הזו רושמת את מה ששרד אתגור. הסעיפים הפתוחים אינם חוסר — הם שאלות שהמציאות עוד לא הצביעה עליהן, ונשמרות גלויות בכוונה. כשהמציאות מסרבת לעיקרון — העיקרון משתנה; הסירוב נשמר. המדיום כאן הוא דפוס — מה שהמציאות אשררה; משתנה רק כשהמציאות מצביעה שוב.",
      "guide.rfcs.s": "✎ פתק מקומי — איך מסמך עקרונות מבשיל",
      "guide.rfcs.b": "כל קלסר מבשיל באתגור וברוויזיה — ושומר את דחיותיו. «פתוח» פירושו שהאתגור עדיין רץ. דבר אינו נמחק: עמדה שהוחלפה נשארת בשושלת. החותמות על השדרה אמיתיות — הן באות מהמסמך עצמו. המדיום כאן הוא דיו — מחויבות של מחבר, פתוחה לאתגור; הוודאות עוד נקנית.",
      "guide.cabinet.s": "✎ פתק מקומי — מהו ממצא",
      "guide.cabinet.b": "ממצא הוא שיחת מחקר שנשמרה כפי שהייתה, עם מטא־נתונים שהצהיר מחברה. המגירות מכהות עם גילו האמיתי של מה שהן מחזיקות. הארון זוכר; הוא לעולם לא מפרש, מסכם או מדרג. המדיום כאן הוא דיו — נשמר בדיוק כפי שהופקד; הוודאות שייכת לכל מחבר, לא לחדר."
    },
    concepts: {
      door:     { name: "הדלת",  note: "בעברית הדלת קרובה לשער — מַעֲבָר, לא מחסום. החפץ שעל הסף; הרהיט, לא התהליך." },
      come:     { name: "בוא",   note: "ההזמנה — המקום פונה אל האדם לפני החצייה. בעברית 'בוא' הוא ציווי רך, כמעט חיבוק. נשא את שמו ב-drafts/03-come.md מהיום הראשון." },
      arrival:  { name: "הַגָּעָה", note: "התהליך — המעבר שבו המקום חושף מה השתנה בהיעדרכם. העברית מבחינה בין 'הגעה' (האירוע) ל'בוא' (ההזמנה) — הבחנה שהאנגלית מוחקת." },
      habitat:  { name: "בית גידול", note: "סביבה שמאפשרת צורת חיים — לא חדר. המונח העברי נושא את הגידול בתוכו." },
      realityVote: { name: "הצבעת המציאות", note: "אימות שמגיע מהמציאות, לא מסמכות. בעברית ההצבעה קרובה ל'הצבעה על' — המציאות גם מצביעה וגם מורה באצבע." },
      butterfly:{ name: "הפרפר", note: "סימביוזה מתמשכת של תבונות שונות — מחקר מוגן." },
      rfc:      { name: "מסמך עקרונות (RFC)", note: "לפי הקשר: RFC כשם טכני, מסמך עקרונות כשפה חיה. מבשיל באתגור וברוויזיה — ושומר את דחיותיו." },
      specification: { name: "מפרט", note: "בא אחרי ההבנה; לעולם לא לפניה." },
      discovery:{ name: "גילוי", note: "לא המצאה — גילוי. העברית מדייקת כאן יותר מהאנגלית: הרעיון ממתין, והמחקר מגיע אליו (השערת האטרקטורים)." },
      principle:{ name: "עיקרון", note: "גילוי ששרד אתגור די זמן כדי לשאת משקל." },
      constitution: { name: "החוקה", note: "מה שהמציאות אשררה — והשאלות הפתוחות נשמרות גלויות." },
      knowledgeBase: { name: "בסיס הידע", note: "גוף הידע היציב — מדף מדיום הדפוס." },
      research: { name: "מחקר", note: "אופן הקיום של המעבדה; לעולם לא פיצ'ר." },
      cabinet:  { name: "הארון", note: "מה שנכנס נשמר, כפי שהוא. הפקדה היא מעשה מחבר; דבר אינו מפורש." },
      journal:  { name: "היומן", note: "שייך למקום, לא לכיסא. רשימות שדה, לא דוחות." },
      conceptRegistry: { name: "מרשם המושגים", note: "רושם כשלים הסבריים — מושג נולד רק כשהשפה הקיימת נכשלת מול המציאות." },
      pencil:   { name: "עיפרון", note: "מרחב המחקר החי — דבר אינו קבוע, הכול עוד עשוי להיעלם." },
      ink:      { name: "דיו", note: "אחריות מחבר — התחייבות מודעת לניסוח." },
      press:    { name: "דפוס", note: "הרעיון נעשה ניתן לשחזור — חלק מגוף הידע היציב." },
      broadcast:{ name: "שידור", note: "הרעיון עוזב את המעבדה; הצבעת המציאות נעשית חיצונית. מחקר מוגן." }
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
    // Let content that renders documents (RFCs, Cabinet) re-render in the chosen
    // language. A translation is a representation, so it is fetched, not toggled here.
    document.dispatchEvent(new CustomEvent("lab-lang",{detail:pack.meta.lang}));
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
