"use strict";
/* The Environmental Engine.

   The Space's environment is a DETERMINISTIC PROJECTION of its constitutional
   reality — never an aesthetic choice. Every environmental variable is derived
   from evidence in the Record and carries its provenance, so a participant can
   always ask "why does the Space feel like this?" and trace each variable back
   to the exact evidence that produced it. Environmental state is therefore
   explainable and reproducible.

   This is Rendering (the Reference Implementation), not the Constitution. It is
   a Camera: it reveals canonical state from where you stand; it decides,
   recommends, and judges nothing. Nothing here "looks alive" unless the corpus
   itself justifies it — the corpus is read below; the CSS only projects it.

   Variables rendered this phase, each from one piece of Record evidence:
     integrity → light   (the hash chain, re-verified in this browser)
     rest      → breath  (how recently the Record last stirred)
     repose    → stillness (whether the tip is sealed)
   Silence, temperature, gravity, and the Climate/Atmosphere distinction are
   left for future recognition — not invented here. */
(function(){
  var ROOT = (document.body && document.body.dataset.root) || "";
  var root = document.documentElement;

  /* the provenance ledger: every environmental variable, its value, and the
     evidence + rule that produced it. Exposed for inspection and for the
     "why does the Space feel like this?" panel. */
  var ledger = [];
  window.__ENVIRONMENT__ = ledger;
  function project(variable, value, data){
    root.dataset[variable] = value;
    ledger.push({ variable: variable, value: value, data: data });
    renderWhy();
  }

  /* --- bilingual provenance: each line traces a variable to its evidence.
     Observation, never interpretation — numbers, dates, event ids. --- */
  var WHY = {
    q: { en: "Why does the Space feel like this?", he: "למה המרחב מרגיש כך?" },
    integrity: {
      en: function(v,d){ return v==="clear"
        ? "The light is clear — " + d.n + " events re-verified in your browser; the hash chain holds."
        : "The light is troubled — the hash chain does not match its own events."; },
      he: function(v,d){ return v==="clear"
        ? "האור צלול — " + d.n + " אירועים אומתו מחדש בדפדפן שלכם; שרשרת הגיבוב מחזיקה."
        : "האור עכור — שרשרת הגיבוב אינה תואמת את האירועים שלה."; }
    },
    rest: {
      en: function(v,d){ var w={stirring:"quickly",settled:"slowly",still:"faintly"}[v];
        return "The room breathes " + w + " — the Record last stirred " + d.days +
          (d.days===1?" day":" days") + " ago (event #" + d.seq + ")."; },
      he: function(v,d){ var w={stirring:"מהר",settled:"לאט",still:"בקושי"}[v];
        return "החדר נושם " + w + " — הרשומה נעה לאחרונה לפני " + d.days +
          (d.days===1?" יום":" ימים") + " (אירוע ‎#" + d.seq + ")."; }
    },
    repose: {
      en: function(v,d){ return v==="sealed"
        ? "The Space is still — the Record is sealed to its tip (event #" + d.seq + ")."
        : "The Space is at work — " + d.k + (d.k===1?" event":" events") + " since the last seal."; },
      he: function(v,d){ return v==="sealed"
        ? "המרחב שקט — הרשומה חתומה עד קצה (אירוע ‎#" + d.seq + ")."
        : "המרחב בעבודה — " + d.k + (d.k===1?" אירוע":" אירועים") + " מאז החותם האחרון."; }
    }
  };
  function lang(){
    return (window.LAB_LANG && window.LAB_LANG.current) ||
      (function(){ try { return localStorage.getItem("lab-lang"); } catch(e){ return null; } })() || "en";
  }
  function renderWhy(){
    var host = document.getElementById("why-body");
    if(!host) return;
    if(!ledger.length) return;
    var panel = document.getElementById("why");
    if(panel) panel.hidden = false;
    var L = lang();
    var q = document.getElementById("why-q");
    if(q) q.textContent = WHY.q[L] || WHY.q.en;
    host.textContent = "";
    ledger.forEach(function(row){
      var line = document.createElement("p");
      line.className = "why-line";
      line.textContent = (WHY[row.variable][L] || WHY[row.variable].en)(row.value, row.data);
      host.appendChild(line);
    });
  }

  /* --- the Door also carries two informational inscriptions (not environmental
     variables, but the same one read of the Record): the Space's age, and which
     state of the Record you are observing. --- */
  var ageEl = document.getElementById("space-age");
  var obsEl = document.getElementById("observing");
  var inscr = null;
  var INS = {
    age: { en: function(d,s){ return "This Space has been alive for " + d + (d===1?" day":" days") +
             " · " + s + (s===1?" session":" sessions") + " sealed."; },
           he: function(d,s){ return "המרחב הזה חי כבר " + d + (d===1?" יום":" ימים") +
             " · " + s + (s===1?" מושב נחתם":" מושבים נחתמו") + "."; } },
    obs: { en: function(tip,u){ return "You are observing the Record through event #" + tip +
             (u ? " — " + u + (u===1?" event":" events") + " after the last seal." : " — sealed to the tip."); },
           he: function(tip,u){ return "אתם צופים ברשומה עד אירוע ‎#" + tip +
             (u ? " — " + u + (u===1?" אירוע":" אירועים") + " אחרי החותם האחרון." : " — חתומה עד הקצה."); } }
  };
  function renderInscriptions(){
    if(!inscr) return;
    var L = lang();
    if(ageEl){ ageEl.textContent = (INS.age[L]||INS.age.en)(inscr.days, inscr.seals); ageEl.hidden = false; }
    if(obsEl){ obsEl.textContent = (INS.obs[L]||INS.obs.en)(inscr.tip, inscr.unsealed); obsEl.hidden = false; }
  }

  /* --- deterministic serialization; must match src/kernel/log.js canonical() --- */
  function canonical(v){
    if(Array.isArray(v)) return "[" + v.map(canonical).join(",") + "]";
    if(v && typeof v === "object") return "{" + Object.keys(v).sort().map(function(k){
      return JSON.stringify(k) + ":" + canonical(v[k]); }).join(",") + "}";
    return JSON.stringify(v);
  }
  function sha256(text){
    return crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)).then(function(buf){
      return Array.from(new Uint8Array(buf)).map(function(b){ return b.toString(16).padStart(2,"0"); }).join("");
    });
  }

  fetch(ROOT + "laboratory/record/log.jsonl", { cache: "no-store" })
    .then(function(r){ if(!r.ok) throw 0; return r.text(); })
    .then(function(t){
      var events = t.split("\n").filter(Boolean).map(function(l){ return JSON.parse(l); });
      if(!events.length) return;
      var tip = events[events.length - 1];
      var seals = events.filter(function(e){ return e.type === "SEALED"; });
      var lastSealSeq = seals.length ? seals[seals.length - 1].seq : -1;
      var unsealed = tip.seq - lastSealSeq;

      /* rest → breath (immediate: no crypto needed) */
      if(tip.recordedAt){
        var days = Math.max(0, Math.round((Date.now() - new Date(tip.recordedAt)) / 864e5));
        var rest = (Date.now() - new Date(tip.recordedAt)) / 864e5;
        var restValue = rest <= 3 ? "stirring" : rest > 45 ? "still" : "settled";
        project("rest", restValue, { days: days, seq: tip.seq });
        /* the pulse ("signs of life") echoes the Space's rest — alive while the
           Record has recently stirred, dormant when it has long been still. The
           same evidence as the breath; no separate claim. */
        if(restValue !== "still"){
          var pulse = document.getElementById("alive"); if(pulse) pulse.classList.add("alive");
          var dot = document.querySelector(".plan-stop.here .dot"); if(dot) dot.classList.add("alive");
        }
      }
      /* repose → stillness */
      project("repose", unsealed <= 0 ? "sealed" : "working", { seq: tip.seq, k: unsealed });

      /* the Door's inscriptions */
      var first = events[0];
      if(first && first.recordedAt){
        inscr = {
          days: Math.max(1, Math.round((Date.now() - new Date(first.recordedAt)) / 864e5)),
          seals: seals.length, tip: tip.seq, unsealed: unsealed
        };
        renderInscriptions();
      }

      /* integrity → light: re-verify the chain here, in this browser (evidence) */
      var prev = "genesis", i = 0;
      function step(){
        if(i >= events.length){ project("integrity", "clear", { n: events.length }); return; }
        var e = events[i], hash = e.hash, rest = {};
        for(var k in e){ if(k !== "hash" && k !== "recordedAt") rest[k] = e[k]; }
        rest.prevHash = prev;
        sha256(canonical(rest)).then(function(h){
          if(e.prevHash !== prev || hash !== h){ project("integrity", "troubled", {}); return; }
          prev = hash; i++; step();
        });
      }
      step();
    })
    .catch(function(){ /* no Record within reach — the environment stays neutral, honestly */ });

  var lt = document.getElementById("langToggle");
  if(lt) lt.addEventListener("click", function(){ setTimeout(function(){ renderWhy(); renderInscriptions(); }, 0); });
})();
