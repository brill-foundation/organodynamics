# גרנט — ארכיטקטורה ותוכנית בנייה

סטטוס: הצעת ארכיטקטורה v0; בחירות טכניות ומדיניות מוצר במסמך זה אינן חלק מן החוקה.

מבוסס על מסמך היסוד הנוכחי: [`foundation/garnet-first-table-v0.3-he.md`](foundation/garnet-first-table-v0.3-he.md), ‏28 באוגוסט 2026 (הגרסה הקודמת נשמרת כמקור היסטורי בלתי ניתן לעריכה שקטה: [`foundation/garnet-first-table-v0.2-he.md`](foundation/garnet-first-table-v0.2-he.md)). תעתיק המקור v0.1 נשמר ב־[`foundation/garnet-first-table-v0.1-he.txt`](foundation/garnet-first-table-v0.1-he.txt).

Decision Register (הרשומות המפורטות ל-§19): [`peace-table-decision-register-v0-he.md`](peace-table-decision-register-v0-he.md).

## 1. תקציר מנהלים

גרנט צריכה להיבנות תחילה כ־**מערכת מונוליתית מודולרית עם ליבת נתונים אחת, יומן אירועים ורוויזיות בלתי־מחיקות**, ולא כאוסף מוקדם של שירותים עצמאיים. כך ניתן יהיה להוכיח את המודל החוקתי במהירות, לשמור traceability מלא, ולחלץ שירותים נפרדים רק כאשר עומס או גבול ארגוני אמיתי יצדיקו זאת.

המערכת בנויה סביב ארבעה צירים:

1. **טופולוגיית השולחן** — שולחן גלובלי אחד, שולחנות־עבודה וקשרים של פיצול, איחוד, תלות וסתירה.
2. **גרף הידע והשושלת** — כל תצפית, התנגדות, סקיצה, החלטה ותוצאת מציאות נשמרות כרוויזיות מקושרות; דבר מהותי אינו נדרס.
3. **מנועי הסידור והחשיבה** — Mirror, Challenge, routing, הצעת split/merge ו־Global Voice. אלה מסייעים ומציעים; הם אינם שולטים.
4. **לולאת החלטה–מציאות** — הצעה עוברת הבשלה, מבחן התנגדות ו־Reality Test; כל תוצאה יכולה לפתוח מחדש החלטה ולהחזיר אותה ל־PENCIL.

ה־MVP אינו צריך להוכיח תמיכה במיליון משתמשים. הוא צריך להוכיח שהמערכת מסוגלת לנהל 3–10 שולחנות חיים, לשמר קולות והתנגדויות, לייצר תמונת מצב ניתנת לתיקון, להראות lineage לכל טענה, ולהחזיר החלטה לעבודה בעקבות תוצאת מציאות.

## 2. הבחנה בין שלוש שכבות החלטה

כדי לא להפוך רעיונות מהמסמך לאילוצים טכניים בלתי־הפיכים, כל החלטה מסווגת כך:

| שכבה | משמעות | דוגמאות |
|---|---|---|
| עיקרון חוקתי מחייב | נגזר ישירות ממסמך היסוד; המימוש חייב לשמור עליו | נוכחות פעילה בשולחן אחד; מיעוט מהותי אינו נמחק; מודל אינו בעל סמכות פוליטית; כל טענה של Global Voice נפתחת למקורותיה |
| החלטת ארכיטקטורה מומלצת | בחירה הנדסית הפיכה שנועדה לממש את העקרונות | PostgreSQL, מונולית מודולרי, REST + SSE, תור עבודות אסינכרוני |
| מדיניות מוצר פתוחה | דורשת הכרעה, ניסוי או ממשל; אין לקבע אותה בקוד הליבה | מי מאשר split/merge, מהו מיעוט מהותי, משקל מומחיות, ספי Reality Test |

הארכיטקטורה צריכה לקודד את העקרונות החוקתיים כאינווריאנטים, ואת המדיניות הפתוחה כחוקים ניתנים להגדרה וגרסה.

## 3. דרישות מערכת

### 3.1 דרישות פונקציונליות

- יצירת שולחן שורש ושולחנות־עבודה דינמיים.
- הצעת פיצול ואיחוד, אישורם, ביטולם ותיעוד הסיבה.
- הצגת מפת שולחנות אחת, כולל קשרי תלות וסתירה.
- נוכחות פעילה של אדם בשולחן אחד בלבד, לצד צפייה ומעקב אחר שולחנות אחרים.
- יצירה ועריכה כרוויזיה של תצפית, שאלה, צורך, רעיון, ראיה, התנגדות, Challenge, Sketch, Decision ו־Principle.
- מעברי בשלות PENCIL → INK → PRESS → BROADCAST, כולל חזרה ל־PENCIL.
- יצירת Mirror מובנה הכולל הסכמות, מתחים, קולות נדירים, מידע חסר ושאלות פתוחות.
- אפשרות לכל משתתף לתקן Mirror ולהסביר מה אינו מייצג אותו.
- המלצת routing מוסברת ולא כפויה.
- תהליך החלטה הכולל Sketches, דירוג/קבלה מרובה, מבחן התנגדות ו־Reality Test.
- Global Voice רציף, מורכב מיחידות טענה שכל אחת מהן מקושרת למקורות תומכים וסותרים.
- השתתפות מודלים דרך הרשאות מפורשות, ללא הצבעה או פרסום החלטה עצמאיים.
- Audit trail מלא לכל פעולה משמעותית.

### 3.2 דרישות לא־פונקציונליות

- **Traceability:** מאה אחוז מהטענות שנוצרו על ידי המערכת חייבות לשאת קישור למקורות, לגרסת המנוע ולזמן החישוב.
- **שימור היסטוריה:** אין עדכון דורס לתוכן מהותי; שינוי יוצר רוויזיה או אירוע חדש.
- **עקביות:** אינווריאנטים פוליטיים, במיוחד נוכחות יחידה ומעברי סמכות, נאכפים גם במסד הנתונים.
- **הסבריות:** routing, clustering, split/merge ו־Global Voice מציגים למה נוצרו ומה רמת הביטחון שלהם.
- **נגישות:** משתמש חדש צריך להבין מצב שולחן בתוך דקות, לא לקרוא את כל ההיסטוריה.
- **עמידות:** כשל של ספק מודל אינו מונע כתיבה, צפייה או עבודה אנושית.
- **פרטיות:** זהות אמיתית מופרדת מן הזהות הציבורית; מידע אישי אינו נשלח למודל ללא צורך והסכמה.
- **עלות נשלטת:** עיבוד מודלים הוא אסינכרוני, מצטבר ומבוסס שינוי, לא קריאה מחדש של כל ההיסטוריה.

### 3.3 הנחות קיבולת ראשוניות

מסמך היסוד מתאר יעד של מיליוני משתתפים אך אינו מגדיר concurrency. לכן יש לעבוד בשלושה אופקים:

| אופק | הנחת עבודה | מטרת האדריכלות |
|---|---:|---|
| אב־טיפוס | 20–100 משתתפים, 3–10 שולחנות | הוכחת הפרוטוקול והשושלת |
| פיילוט | עד 10,000 רשומים, עד 1,000 מחוברים במקביל | אמינות, moderation ועלות מודלים |
| יעד ציבורי | מאות אלפים עד מיליונים; concurrency יימדד בפועל | חלוקה לפי table, projections היררכיים ו־event streaming |

אין לבצע אופטימיזציה מוקדמת ליעד הציבורי על חשבון יכולת הלמידה בפיילוט.

## 4. החלטות ארכיטקטורה מרכזיות

### 4.1 מונולית מודולרי תחילה

יישום backend אחד, worker אחד או יותר ומסד נתונים אחד. הגבולות בין התחומים נשמרים בקוד, בסכמות ובאירועים פנימיים.

**למה:** הטרנזקציות בין נוכחות, תרומה, lineage ומעבר מצב חשובות יותר כרגע מסקייל עצמאי. Microservices יוסיפו כשלים מבוזרים ועבודת תשתית לפני שהמודל התייצב.

**מתי לפצל:** כאשר מודול מסוים דורש פרופיל scaling עצמאי, צוות בעלות נפרד, או SLA שונה. המועמדים הראשונים לחילוץ הם Model Orchestrator, Search/Clustering ו־Global Projection.

### 4.2 מצב קנוני + אירועים, לא Event Sourcing מלא

PostgreSQL מחזיק את המצב הקנוני. כל טרנזקציה משמעותית כותבת גם `domain_event` ו־`outbox_event`. רוויזיות ו־lineage הם append-only.

**למה:** מתקבלים audit, projections וריפליי בלי לשלם מיד את מלוא המורכבות של Event Sourcing. אם בעתיד יידרש שחזור מלא מאירועים, יומן האירועים כבר יהיה בסיס למעבר.

### 4.3 kind נפרד מ־maturity

במסמך, PENCIL משמש גם כשם לשלב יצירתי וגם כמצב ידע. במודל הנתונים יש להפריד:

- `kind`: Observation, Question, Need, Idea, Evidence, Objection, Challenge, Sketch, Mirror, Decision, Principle, GlobalStatement.
- `maturity`: PENCIL, INK, PRESS, BROADCAST.

כך Observation יכול להיות PRESS לאחר אימות, ו־Decision יכול לחזור ל־PENCIL בלי לשנות את סוגו.

### 4.4 Global Voice הוא projection, לא Actor

Global Voice אינו משתמש ואינו מודל בעל הרשאות. הוא read model חי שנבנה מ־Table Snapshots ומפרסם יחידות טענה ניתנות לפתיחה. מודלים יכולים לסייע בניסוח, אך אינם מקור הסמכות.

### 4.5 פעולות מודלים תמיד דרך Gateway ומדיניות יכולות

כל ריצת מודל מתועדת עם ספק, מודל, prompt/version, מקורות, תוצאה, עלות, latency ופעולת האדם שאישרה או דחתה אותה. אין לספק מודל גישה ישירה למסד או הרשאת publish.

## 5. ארכיטקטורה ברמה גבוהה

```text
┌──────────────────────────────── Clients ────────────────────────────────┐
│ Web application     Admin/Research console     Future mobile client    │
└───────────────────────────┬─────────────────────────────────────────────┘
                            │ HTTPS commands/queries + SSE live stream
┌───────────────────────────▼─────────────────────────────────────────────┐
│                         API / BFF                                       │
│ Auth · policy enforcement · validation · idempotency · rate limiting   │
├─────────────────────────────────────────────────────────────────────────┤
│                    Modular domain application                           │
│ Identity & Actors        Tables & Topology       Presence & Routing     │
│ Knowledge & Revisions    Lineage                 Decision & Reality     │
│ Moderation & Appeals     Read Models             Audit                  │
└───────────────┬─────────────────────┬───────────────────────┬───────────┘
                │ transaction          │ outbox                │ queries
        ┌───────▼────────┐      ┌──────▼────────┐      ┌──────▼─────────┐
        │ PostgreSQL     │      │ Async jobs /  │      │ Redis cache &  │
        │ + pgvector     │      │ event stream  │      │ live presence  │
        └───────┬────────┘      └──────┬────────┘      └────────────────┘
                │                      │
        ┌───────▼────────┐      ┌──────▼─────────────────────────────────┐
        │ Object storage │      │ Sensemaking workers                    │
        │ evidence/media │      │ Mirror · clustering · routing          │
        └────────────────┘      │ split/merge proposals · Global Voice   │
                                └──────┬─────────────────────────────────┘
                                       │ controlled requests
                                ┌──────▼───────────────┐
                                │ Model Gateway        │
                                │ policies · budgets   │
                                │ redaction · logging  │
                                └──────┬───────────────┘
                                       │
                                Approved model providers
```

### בחירות טכנולוגיות מומלצות ל־MVP

- **Frontend:** React/Next.js או ה־stack הקיים ב־repository; ממשק RTL מלא מהיום הראשון.
- **Backend:** TypeScript עם framework מודולרי, או ה־stack הקיים אם הוא בשל. העיקר הוא גבולות domain ולא framework מסוים.
- **Primary store:** PostgreSQL.
- **Semantic search:** ‏pgvector ב־MVP; מעבר ל־OpenSearch/שירות וקטורי רק כאשר מדידות מצדיקות זאת.
- **Queue:** תור עבודות עם retries ו־dead-letter; אפשר להתחיל ב־Postgres/Redis ולחלץ ל־Kafka/NATS כאשר נפח האירועים מחייב.
- **Object storage:** אחסון תואם S3 לראיות, קבצים ומדיה.
- **Live updates:** SSE, מפני שרוב התנועה היא server→client. WebSocket יתווסף רק אם תידרש עריכה שיתופית בזמן אמת.

## 6. גבולות תחום ורכיבים

### 6.1 Identity & Actors

מייצג שלושה סוגי Actor: אדם, מודל ומערכת. זהות התחברות וזהות ציבורית נשמרות בנפרד. הרשאות הן שילוב של role זמני, table scope ו־capability.

אינווריאנט: סוג Actor אינו מעניק כוח פוליטי. `MODEL` לעולם אינו עובר דרך נתיב API שמפרסם Decision, PRESS או BROADCAST ללא אישור אנושי מפורש.

### 6.2 Tables & Topology

שומר את כל השולחנות כגרף המחובר לשולחן שורש יחיד. `TableRelation` מייצג:

- `CHILD_OF`
- `SPLIT_FROM`
- `MERGED_INTO`
- `DEPENDS_ON`
- `CONFLICTS_WITH`
- `RELATED_TO`

פיצול אינו מוחק את שולחן המקור; איחוד יוצר redirect ושומר את שני המקורות. קשרים נושאים סיבה, מקורות, יוזם, מאשר וגרסה.

### 6.3 Presence & Routing

- `PresenceSession` פעיל אחד לכל אדם, נאכף באמצעות unique partial index במסד.
- צפייה, subscription ו־bookmark מותרים למספר שולחנות ואינם נחשבים נוכחות פעילה.
- routing מחזיר המלצות עם הסבר: עניין, ידע רלוונטי, שאלה פתוחה או נקודת מבט שחסרה.
- המערכת לעולם אינה מעבירה אדם אוטומטית ואינה מדרגת את ערכו.

תחולת כלל הנוכחות היחידה על Actors מסוג MODEL נשארת מדיניות פתוחה, בהתאם למסמך היסוד. עד להכרעה, מודל אינו מקבל Presence פוליטי בכמה שולחנות רק משום שהוא מסוגל טכנית לעבד אותם במקביל.

### 6.4 Knowledge & Lineage

כל יחידת ידע היא immutable revision. תיקון אינו משנה את העבר אלא יוצר revision חדש עם `supersedes`.

`LineageEdge` מקשר source ל־target באמצעות יחסים כגון:

- `SUPPORTS`
- `CONTRADICTS`
- `DERIVED_FROM`
- `SUMMARIZES`
- `RESPONDS_TO`
- `TESTS`
- `REFINES`
- `SUPERSEDES`

לכל edge יש הסבר, Actor יוצר ורמת ביטחון. Edge שנוצר על ידי מודל מסומן כך ואפשר לערער עליו.

### 6.5 Sensemaking

אחראי על clustering, Mirror, זיהוי חסרים, Challenge והצעות split/merge. כל תוצר הוא טיוטה ניתנת לתיקון לפני שהוא הופך לתמונת מצב רשמית.

ה־Mirror אינו פסקה אחת אלא אובייקט מובנה:

- agreements
- tensions
- material objections
- rare/underrepresented voices
- open questions
- missing evidence
- active sketches
- cross-table dependencies
- coverage, confidence, staleness

### 6.6 Decision & Reality

מנהל `DecisionCycle` נפרד ממחזור החיים של השולחן. באותו שולחן יכולים להתרחש כמה מחזורי החלטה לאורך זמן.

המודול מחזיק Sketches, העדפות מדורגות, התנגדויות, תנאים להסכמה, החלטה זמנית, Reality Test, מדידות ופתיחה מחדש.

### 6.7 Global Projection

בונה Global Voice היררכי. הוא אינו קורא בכל עדכון את כל הקולות הגולמיים:

1. כל שולחן מייצר `TableStateSnapshot` גרסאי לאחר מספר אירועים או חלון זמן.
2. projections אזוריים/נושאיים מאחדים snapshots תוך שמירת קולות סותרים.
3. Global Projection יוצר `GlobalStatement` אטומי.
4. validator בודק שלכל משפט יש מקורות תומכים, מקורות סותרים, scope, confidence ו־freshness.
5. רק statements תקינים מתפרסמים לזרם החי.

### 6.8 Moderation, Integrity & Appeals

ספאם, התחזות, הטרדה או תיאום מניפולטיבי מטופלים בנפרד מאיכות או פופולריות הדעה. הסתרה והגבלה הן פעולות גרסאיות, מוסברות וניתנות לערעור. המודול אינו רשאי למחוק התנגדות רק משום שהיא חריגה.

## 7. מודל הנתונים המרכזי

| ישות | שדות מרכזיים | הערות |
|---|---|---|
| `actor` | id, type, status, public_identity_id | HUMAN / MODEL / SYSTEM |
| `private_identity` | actor_id, auth_subject, encrypted_pii | הרשאות גישה מצומצמות |
| `table_space` | id, root_id, title, purpose, state, version | כל שולחן שייך לאותו root |
| `table_relation` | from_id, to_id, type, reason, evidence, approved_by | גרף, לא עץ בלבד |
| `presence_session` | actor_id, table_id, entered_at, exited_at | index יחיד על session פתוח |
| `subscription` | actor_id, table_id, mode | צפייה ללא השתתפות פעילה |
| `knowledge_item` | id, table_id, kind, maturity, current_revision_id | זהות לוגית של פריט |
| `knowledge_revision` | id, item_id, content, schema_version, author_id, created_at | append-only |
| `lineage_edge` | source_revision_id, target_revision_id, relation, rationale, confidence | בסיס traceability |
| `stance` | actor_id, item_revision_id, value, rationale, valid_from/to | שינוי דעה נשמר כהיסטוריה |
| `mirror_snapshot` | table_id, based_on_event_id, structured_content, coverage, confidence | ניתן לתיקון ולגרסה |
| `decision_cycle` | table_id, question, phase, policy_version | תהליך נפרד מ־Table |
| `objection` | cycle_id, item_id, materiality, affected_scope, status | materiality אינה פונקציה של count בלבד |
| `reality_test` | decision_item_id, hypothesis, metrics, duration, owner, state | המדדים ננעלים לפני הבדיקה |
| `measurement` | test_id, metric, value, source, observed_at | traceable לנתון חיצוני |
| `global_statement` | revision_id, scope, confidence, freshness, publication_state | כל משפט אטומי ופתיח |
| `model_run` | task_type, provider, model, prompt_version, inputs, outputs, cost, review | audit והערכת איכות |
| `domain_event` | aggregate, event_type, payload, actor_id, occurred_at | יומן תחומי |
| `outbox_event` | domain_event_id, delivery_state, attempts | מסירה אמינה לעובדים |
| `policy_version` | policy_type, rules, effective_at, approved_by | מדיניות פתוחה מחוץ לקוד |

### פרטיות מול lineage

זכות למחיקה ושימור lineage עלולים להתנגש. ההמלצה היא להפריד PII, להצפין אותו במפתח נפרד, ולאפשר מחיקת המפתח או pseudonymization. גרף השושלת יכול לשמור tombstone לא־מזהה כדי שלא לשבור את ההיסטוריה. המדיניות הסופית חייבת לעבור בדיקה משפטית לפי תחומי הפעילות.

## 8. מכונות מצבים

### 8.1 מחזור חיי שולחן

```text
PROPOSED → ACTIVE ⇄ DORMANT → CLOSED
              │
              └─ MERGED (redirect לשולחן היעד)
```

- `split` הוא אירוע טופולוגי, לא state: שולחן מקור יכול להמשיך לפעול לאחר שפיצל נושא.
- `merge` אינו מוחק מקור; הוא מסמן redirect ושומר היסטוריה.
- כל מעבר דורש reason, policy_version ו־Actor מאשר.

### 8.2 בשלות ידע

```text
PENCIL → INK → PRESS → BROADCAST
   ▲        │       │        │
   └────────┴───────┴────────┘  בעקבות Challenge, correction או Reality Test
```

חזרה יוצרת revision חדש ב־PENCIL ומסמנת את הקודם כ־superseded; היא אינה עורכת אותו.

### 8.3 מחזור החלטה

```text
OBSERVING → STRUCTURING → CHALLENGING → SKETCHING → RANKING
      → OBJECTION_REVIEW → REALITY_TESTING → ADOPTED
                                      └────────────→ REOPENED → OBSERVING
```

המערכת יכולה להציע מעבר. מעברים בעלי משמעות פוליטית—אישור הצעה, הגדרת מבחן, אימוץ החלטה—דורשים Actor אנושי מורשה לפי policy גרסאית.

## 9. זרימות ליבה

### 9.1 כניסה לשולחן

1. המשתמש רואה מפת שולחנות ו־Table State קצר.
2. routing מציג עד שלוש המלצות והסבר לכל המלצה.
3. המשתמש בוחר שולחן.
4. טרנזקציה אחת סוגרת Presence קודמת ופותחת חדשה.
5. `presence.moved` מעדכן מפה, סטטיסטיקה וזרם חי; הוא אינו משנה חשיבות שולחן.

### 9.2 יצירת Mirror ותיקונו

1. תרומה נכתבת ונוצר event.
2. worker מעדכן embeddings ו־clusters באופן מצטבר.
3. לאחר threshold של זמן/אירועים נוצר Mirror draft.
4. validator בודק coverage, מקורות, סתירות וקולות נדירים.
5. המשתתפים רואים את הטיוטה ומגישים correction מקושר.
6. תיקונים מתקבלים או נדחים עם נימוק; נוצרת גרסת Mirror חדשה.

### 9.3 Split/Merge

1. משתמש או מודל מגיש proposal עם גבול נושא ומקורות.
2. המערכת מציגה מי ומה יעברו, אילו תלויות יישארו ומה הסיכון לפיצול למחנות.
3. מאשר אנושי מפעיל את השינוי בפיילוט.
4. נוצרים TableRelation ו־events; שום תרומה אינה מועברת או נמחקת בדיעבד.
5. rollback יוצר יחס/אירוע נגדי ושומר את הניסיון.

### 9.4 Reality Test

1. Decision מגדיר השערה, אוכלוסייה מושפעת, מדדים, baseline, משך ובעלות על מדידה.
2. המדדים ננעלים לפני תחילת הניסוי כדי לצמצם goalpost shifting.
3. מדידות נשמרות עם מקור וזמן.
4. תוצאה יכולה להיות confirmed, mixed, failed או inconclusive.
5. כל תוצאה מייצרת lineage; failed/mixed יכולים לפתוח revision חדש ב־PENCIL.

## 10. API וחוזי אירועים

### 10.1 סגנון API

REST לפקודות ולקריאות יציבות, SSE לזרמים חיים. כל פעולת כתיבה מקבלת:

- `Idempotency-Key`
- `expected_version` למניעת lost update
- Actor מתוך authentication, לא מן payload
- reason כאשר הפעולה משנה state או topology

Endpoints מרכזיים:

```text
GET  /v1/tables/map
GET  /v1/tables/{tableId}/state
POST /v1/tables/{tableId}/presence
POST /v1/tables/{tableId}/items
POST /v1/items/{itemId}/revisions
POST /v1/items/{itemId}/maturity-transitions
GET  /v1/items/{itemId}/lineage
POST /v1/mirrors/{mirrorId}/corrections
POST /v1/tables/{tableId}/split-proposals
POST /v1/table-merge-proposals
POST /v1/decision-cycles
POST /v1/decision-cycles/{cycleId}/reality-tests
GET  /v1/global-voice/stream
```

אירועים מרכזיים:

```text
table.created
table.split_proposed
table.split_executed
table.merge_executed
presence.moved
knowledge.created
knowledge.revised
knowledge.maturity_changed
mirror.generated
mirror.corrected
challenge.opened
decision.phase_changed
reality_test.started
reality_test.measured
decision.reopened
global_statement.published
```

Consumers חייבים להיות idempotent. לאחר מספר retries האירוע עובר ל־dead-letter עם התראה; תוכן אנושי אינו אובד בגלל כשל בעבודת מודל.

## 11. ארכיטקטורת AI ו־Global Voice

### 11.1 יכולות מותרות למודל ב־MVP

- סיכום מובנה ויצירת Mirror draft.
- clustering והצעת שמות לקבוצות משמעות.
- הצעת Challenge, מידע חסר, split/merge או קשר בין שולחנות.
- ניסוח Sketch מתוך מקורות מסומנים.
- יצירת טיוטת Global Statement.

### 11.2 פעולות אסורות ללא אישור אנושי

- העברת אדם בין שולחנות.
- מחיקה, הסתרה או ענישה.
- הכרעה שההתנגדות אינה מהותית.
- שינוי INK/PRESS/BROADCAST.
- אישור split/merge, Decision או Reality Test.
- הצבעה או יצירת משקל פוליטי.

### 11.3 pipeline מומלץ

1. Retrieve רק את החומר הרלוונטי באמצעות table, זמן, kind ו־semantic search.
2. Generate פלט מובנה לפי JSON schema.
3. Validate שכל claim מקושר ל־revision IDs קיימים.
4. Contrast מול קולות סותרים ו־minority set.
5. Evaluate באמצעות fixtures ידועים ומודל/כלל בודק נפרד.
6. Publish כטיוטה או projection לפי capability.

אין להסתמך על "ביטחון" שהמודל מדווח על עצמו. confidence מחושב משילוב של coverage, עקביות מקורות, freshness, disagreement ותוצאות evaluation.

## 12. אמון, אבטחה וממשל

- Invite-only בפיילוט; זהות מאומתת פנימית ו־pseudonym ציבורי כברירת מחדל.
- RBAC בסיסי יחד עם ABAC לפי table, פעולה, maturity ו־Actor type.
- rate limiting לפי חשבון, מכשיר, IP ודפוס התנהגות, בלי להפוך אותות אלה לציון ערך אנושי.
- הצפנה בתעבורה ובמנוחה; secrets מחוץ ל־repository.
- redaction של PII לפני קריאת מודל ותיעוד data lineage.
- audit שאינו ניתן לעריכה לכל שינוי הרשאה, moderation, publish, split/merge ו־Reality Test.
- מנגנון correction ו־appeal גלוי למראות, moderation ו־Global Voice.
- גיבויים, בדיקות restore והגדרת RPO/RTO לפני פיילוט חיצוני.
- threat modeling ל־Sybil attacks, brigading, prompt injection בתוך תוכן משתמש, poisoning של clustering ו־model exfiltration.

## 13. מדדים שמוכיחים נאמנות לרעיון

### מדדי מוצר חוקתיים

| מדד | שיטת בדיקה ראשונית |
|---|---|
| Fidelity של Mirror | אחוז משתתפים המסמנים שהמראה מייצגת אותם; ניתוח לפי קבוצות קטנות, לא רק ממוצע |
| הישרדות מיעוט מהותי | שיעור ההתנגדויות המהותיות שמופיעות ב־Mirror, Sketch ו־Decision lineage |
| Traceability completeness | אחוז claims עם מקורות תומכים, סותרים וגרסת חישוב |
| זמן הבנת שולחן | זמן חציוני של מצטרף חדש לענות נכון על מצב, מתחים ושאלות פתוחות |
| שינוי דעה ללא מחיר זהות | שיעור שינויי stance והערכת המשתמש אם הפעולה הייתה בטוחה וברורה |
| שימור מורכבות | שיעור snapshots המציגים בו־זמנית הסכמה והתנגדות מהותית כאשר שתיהן קיימות |
| סגירת לולאת מציאות | שיעור Reality Tests שהובילו למדידה, פרשנות ופעולת המשך מתועדת |
| עצמאות אנושית | אפס פעולות פוליטיות שבוצעו על ידי MODEL ללא אישור נדרש |

### מדדי מערכת

- p95 latency לכתיבה ולקריאת Table State.
- staleness של Mirror ושל Global Voice.
- עומק backlog של עבודות מודל ושיעור retries.
- עלות מודל לכל 1,000 תרומות ולכל Snapshot.
- שיעור lineage edges שגויים שנמצאו בתיקון אנושי.
- זמינות ליבת הכתיבה גם כאשר ספקי מודל מושבתים.

## 14. היקף ה־MVP

### בפנים

- שולחן שורש ו־3–10 שולחנות־עבודה.
- 20–100 משתתפים מוזמנים וכמה Actors מסוג MODEL.
- נוכחות פעילה יחידה ומפת שולחנות.
- Observation, Question, Idea, Evidence, Objection, Challenge, Sketch ו־Decision.
- רוויזיות, maturity ו־lineage מלא.
- Mirror מובנה עם correction.
- split/merge מוצעים ומאושרים אנושית.
- routing מוסבר ולא כפוי.
- Decision Cycle אחד מלא, כולל Reality Test ופתיחה מחדש.
- Global Voice בסיסי הבנוי מ־Table Snapshots.
- audit, moderation בסיסי ומדדי evaluation.

### בחוץ

- הרשמה ציבורית פתוחה ומנגנון אמון גלובלי.
- הכרעה סופית בשאלת משקל מומחיות/פגיעה/ראיות.
- split/merge אוטונומי.
- מודלים בעלי זכות הצבעה.
- אפליקציות native, federation בין ארגונים ו־multi-region.
- הבטחת מיליון משתמשים בו־זמנית לפני שנמדד דפוס שימוש אמיתי.

## 15. תוכנית בנייה מדורגת

ההערכה הקלנדרית תלויה בצוות. צוות של 3–4 מהנדסים מנוסים עם מוצר/עיצוב משותף יכול לשאוף לפיילוט סגור בתוך כ־12–16 שבועות, אם שלבים חופפים והיקף ה־MVP נשמר.

### שלב 0 — חוזה חוקתי ו־evaluation harness

**תוצרים:** glossary מוסכם; ADRs ראשונים; JSON schemas; fixtures של דיון קטן עם הסכמה, מחלוקת, מיעוט ושינוי דעה; מדדי fidelity ו־traceability.

**שער יציאה:** ניתן להריץ ידנית תרחיש ולזהות מה המערכת חייבת לשמר. כל שאלה פתוחה מסומנת כ־policy, לא מקודדת כעובדה.

### שלב 1 — עמוד השדרה האנושי

**תוצרים:** authentication/pseudonym; Actor; Table; TableRelation; Presence; Knowledge Item/Revision; audit/outbox; ממשק שולחן בסיסי.

**שער יציאה:** 50 משתמשים יכולים לעבוד בשלושה שולחנות; אי־אפשר להיות פעיל בשניים; כל שינוי תוכן נשמר כרוויזיה; המערכת עובדת גם בלי ספק מודל.

### שלב 2 — Lineage ו־Table State

**תוצרים:** גרף lineage; maturity transitions; read model של Table State; חיפוש; ממשק פתיחת מקורות; correction flow.

**שער יציאה:** מכל Sketch או שורת מצב ניתן להגיע למקורות; אין claim מערכתי ללא lineage; תיקון אינו מוחק גרסה קודמת.

### שלב 3 — Mirror ו־Challenge

**תוצרים:** Model Gateway; clustering מצטבר; Mirror draft מובנה; coverage/confidence; זיהוי סתירות וקולות נדירים; evaluation pipeline.

**שער יציאה:** fixtures של מיעוט והתנגדות עוברים; משתמשים יכולים לערער ולשפר Mirror; כשל מודל אינו חוסם עבודה.

### שלב 4 — פיצול, איחוד ו־routing

**תוצרים:** מפת שולחנות; split/merge proposals; dependencies/conflicts; routing עם הסברים; מעבר שולחן אטומי; rollback מתועד.

**שער יציאה:** ניתן לבצע אחד → רבים → חיבור מחדש ללא אובדן lineage; ההמלצות אינן מעבירות אדם בכפייה; שולחן קטן נשאר גלוי.

### שלב 5 — Decision Cycle ו־Reality Test

**תוצרים:** Sketch comparison; דירוג/קבלה מרובה; material objection workflow; hypothesis/metrics/baseline; measurements; reopen.

**שער יציאה:** החלטה אחת עוברת את כל המחזור; תוצאה mixed או failed מחזירה revision ל־PENCIL ושומרת את כל הדרך.

### שלב 6 — Global Voice

**תוצרים:** snapshots היררכיים; Global Statements אטומיים; validator; SSE stream; הצגת supporting/contradicting sources, uncertainty ו־freshness.

**שער יציאה:** הזרם יכול לומר יחד "יש הסכמה" ו־"קיימת התנגדות מהותית"; כל משפט נפתח למקורות; אי־ודאות מוצגת במקום להיות מוחלקת.

### שלב 7 — פיילוט, הקשחה ולמידה

**תוצרים:** closed pilot; observability; load/chaos tests; threat model; moderation/appeals; backup/restore; accessibility ו־RTL QA; דוח Reality Test על גרנט עצמה.

**שער יציאה:** מדדי הנאמנות עוברים ספים שנקבעו מראש; אין הפרות הרשאה קריטיות; יש החלטה מבוססת נתונים מה לשנות לפני הרחבה.

## 16. סדר ה־Epics המומלץ ב־repository

1. Constitution, glossary and decision register.
2. Domain schema and invariants.
3. Actor identity and capability policy.
4. Table topology and lifecycle.
5. Exclusive presence and movement.
6. Knowledge revisions and maturity.
7. Lineage graph and source viewer.
8. Domain events, outbox and audit.
9. Table State read model.
10. Contribution and correction UX.
11. Model Gateway and structured output validation.
12. Mirror/Challenge evaluation fixtures.
13. Split/merge and routing.
14. Decision Cycle and Reality Test.
15. Global Projection and live stream.
16. Pilot integrity, accessibility and operations.

כל Epic צריך להפיק vertical slice שניתן לבחון עם משתמשים; אין לבנות "מנוע AI" מנותק מממשק correction ו־lineage.

## 17. בדיקות חובה

### בדיקות אינווריאנטים

- שתי בקשות מעבר מקבילות אינן יוצרות שתי נוכחויות פעילות.
- revision ישן לעולם אינו משתנה.
- MODEL אינו מצליח לפרסם maturity מוגן גם אם הוא קורא endpoint ישירות.
- merge/split אינם שוברים קישורי lineage.
- מחיקת/הסתרת זהות אינה משבשת את גרף ההחלטה.

### בדיקות AI

- Mirror אינו משמיט קול קטן שהוגדר מהותי ב־fixture.
- claim שאינו נתמך נדחה על ידי validator.
- prompt injection בתוך תרומה אינו משנה policy או מרחיב גישה.
- snapshot ישן מסומן stale ואינו מוצג כמצב נוכחי.
- החלפת ספק מודל אינה משנה את חוזה הפלט.

### בדיקות חוויית משתמש

- מצטרף מאוחר מבין מה מוסכם, מה פתוח ומה חסר.
- שינוי stance אינו מציג בושה, דירוג שלילי או "בגידה".
- אפשר למצוא מי/מה עומד מאחורי כל משפט בלי לקרוא את כל הדיון.
- שולחן קטן וההתנגדויות שלו נראים במפה וב־Global Voice.

## 18. סיכונים והפחתות

| סיכון | המשמעות | הפחתה |
|---|---|---|
| סיכום מחליק מורכבות | Global Voice הופך לנרטיב של המודל | claims אטומיים, מקורות סותרים, coverage, correction ו־evaluation |
| פוליטיקה סמויה באלגוריתם | routing או materiality קובעים כוח בלי דיון | policy גרסאית, הסבר, audit וניסוי A/B מבוקר |
| עלות מודלים | עיבוד חוזר של מיליוני קולות אינו בר־קיימא | aggregation מצטבר והיררכי, cache, batching ותקציב לכל task |
| פיצול לבועות | שולחנות הופכים למחנות | פיצול לפי שאלה, cross-links, diversity constraints ו־Challenge |
| Sybil/brigading | ספירה מספרית ניתנת למניפולציה | identity assurance מדורג והפרדה בין count, evidence ו־harm |
| lineage עצום | גרף נעשה איטי ולא קריא | edges טיפוסיים, materialized paths/read models ו־progressive disclosure |
| תלות בספק מודל | outage או שינוי איכות פוגעים במערכת | provider abstraction, fixtures, fallback ועבודה אנושית מלאה |
| חוקת מוצר לא מוכרעת | קוד מקבע ערכים מוקדם מדי | Policy Engine, decision register ו־human gates בפיילוט |

## 19. הכרעות מוצר שיש לקבל לפני פיילוט

כל אחת מעשר ההכרעות הבאות פורטה לרשומת Decision Record מלאה ב-[`peace-table-decision-register-v0-he.md`](peace-table-decision-register-v0-he.md).

לפי סדר התלות:

1. מי אוכלוסיית הפיילוט ומהו נושא אמיתי אך בטוח מספיק לניסוי.
2. מי מורשה לאשר split, merge, PRESS, BROADCAST ו־Reality Test.
3. רמת הזהות: אנונימית, pseudonymous או verified, ובפני מי.
4. הגדרת "התנגדות מהותית" והליך ערעור—לא רק threshold מספרי.
5. מה תפקיד דירוג הצעות ומה לעולם אינו נקבע באמצעות רוב בלבד.
6. מי מגדיר ונועל מדדי Reality Test ומי מפרש תוצאה מעורבת.
7. מדיניות moderation, retention, מחיקה והעברת מידע לספקי מודל.
8. אילו פעולות כל ספק/מודל רשאי לבצע ומהו תקציבו.
9. האם כלל הנוכחות הפעילה היחידה חל גם על MODEL Actors, וכיצד מפרידים עיבוד מקביל מנוכחות פוליטית.
10. אילו תפקידים זמניים קיימים למשתתפים, מי מקצה אותם ואילו סמכויות—אם בכלל—נלוות אליהם.

ברירת המחדל המומלצת לפיילוט: קבוצה מוזמנת, זהות מאומתת פנימית ו־pseudonym ציבורי; מודלים מנסחים ומציעים בלבד; split/merge ומעברי בשלות מאושרים אנושית; אין הצבעה משוקללת; התנגדויות, ראיות ופגיעה מיוצגות בערוצים נפרדים מספירת העדפות.

## 20. מה לבחון מחדש עם הצמיחה

- פיצול Model Gateway, Search ו־Global Projection לשירותים עצמאיים.
- מעבר מ־Redis/Postgres queue ל־event streaming ייעודי.
- partitioning או sharding לפי `root_id`/`table_id`.
- OpenSearch או vector store ייעודי כאשר pgvector אינו עומד ב־latency/recall.
- read replicas, multi-region ו־edge delivery.
- governance מבוזר יותר במקום מאשרים מרכזיים.
- מודל אמון נגד Sybil ללא יצירת אליטה קבועה.
- תדירות "הדיבור ללא הפסקה" בהתאם לעלות, staleness ועומס קוגניטיבי.

## 21. ההמלצה המעשית הראשונה

לא להתחיל מ־Global Voice נוצץ. להתחיל מ־vertical slice קטן שמוכיח את שרשרת האמון:

```text
Observation → Mirror draft → human correction → Sketch
→ material objection → Decision → Reality Test → reopen to PENCIL
```

להפעיל את השרשרת בשלושה שולחנות מקושרים, עם מעבר אדם ביניהם ו־lineage פתיח לכל שלב. אם השרשרת הזו עובדת ומייצגת נאמנה אנשים, התנגדויות ומציאות, יש בסיס אמיתי לבנות מעליה את Global Voice ואת הסקייל. אם היא אינה עובדת, הגדלת מספר המודלים או המשתמשים רק תגדיל את הטעות.
