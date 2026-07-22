"use strict";
/* The atmosphere of the Space — environmental, not informational.

   Light follows the hour: the Space has windows, so entering at dusk finds
   dusk light. A slow ambient breath gives the room a rhythm. A quiet
   inscription states how long the Space has been alive — derived from the
   Record, never stored.

   This is a Camera: it reveals the clock and the Record from where you stand.
   It decides nothing, recommends nothing, judges nothing.

   Test hook: ?phase=dawn|day|dusk|night lets an observer choose the light —
   an angle of view, not a state change. */
(function(){
  /* --- the light of the hour --- */
  var qs = new URLSearchParams(location.search);
  var h = new Date().getHours();
  var phase = qs.get("phase") ||
    (h >= 5 && h < 8 ? "dawn" : h >= 8 && h < 17 ? "day" : h >= 17 && h < 21 ? "dusk" : "night");
  if(!/^(dawn|day|dusk|night)$/.test(phase)) phase = "day";
  document.documentElement.dataset.phase = phase;

  /* --- the Space's age: a quiet inscription (Door only carries the stone) --- */
  var el = document.getElementById("space-age");
  if(!el) return;
  var ROOT = (document.body && document.body.dataset.root) || "";
  var T = {
    en: function(d, s){ return "This Space has been alive for " + d + (d === 1 ? " day" : " days") +
      " · " + s + (s === 1 ? " session" : " sessions") + " sealed."; },
    he: function(d, s){ return "המרחב הזה חי כבר " + d + (d === 1 ? " יום" : " ימים") +
      " · " + s + (s === 1 ? " מושב נחתם" : " מושבים נחתמו") + "."; }
  };
  var data = null;
  function render(){
    if(!data) return;
    var lang = (window.LAB_LANG && window.LAB_LANG.current) ||
      (function(){ try { return localStorage.getItem("lab-lang"); } catch(e){ return null; } })() || "en";
    el.textContent = (T[lang] || T.en)(data.days, data.seals);
    el.hidden = false;
  }
  fetch(ROOT + "laboratory/record/log.jsonl", { cache: "no-store" })
    .then(function(r){ if(!r.ok) throw 0; return r.text(); })
    .then(function(t){
      var lines = t.split("\n").filter(Boolean);
      if(!lines.length) return;
      var seals = 0, first = null;
      for(var i = 0; i < lines.length; i++){
        try {
          var e = JSON.parse(lines[i]);
          if(i === 0) first = e;
          if(e.type === "SEALED") seals++;
        } catch(err){ /* a malformed line is the verifier's business, not the lamp's */ }
      }
      if(!first || !first.recordedAt) return;
      var days = Math.max(1, Math.round((Date.now() - new Date(first.recordedAt)) / 864e5));
      data = { days: days, seals: seals };
      render();
    })
    .catch(function(){ /* the inscription waits for the Record — quietly */ });
  var lt = document.getElementById("langToggle");
  if(lt) lt.addEventListener("click", function(){ setTimeout(render, 0); });
})();
