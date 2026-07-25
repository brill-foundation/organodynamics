"use strict";
/* The three layers of a document.

     1. Canonical    — the original English constitutional text. The sole source of
                       truth. Never altered here.
     2. Representation — a faithful translation into another language, clearly marked
                       as a representation of the canonical English.
     3. Explanation  — plain, accessible language for learning, so a newcomer can
                       grasp the essential ideas. Never the constitutional text, and
                       never a replacement for it.

   Each answers a different question — "what does it actually say?", "how is it said
   faithfully in my language?", "what does it mean in plain words?" This module
   resolves which file to render for a chosen (language, layer), always falling back
   gracefully, returns the body text with its direction and an honest note naming the
   layer, and renders the small reading-mode control. Interface only; it authors no
   truth. Files are relative to the room page:
     canonical      →  <file>
     representation →  he/<file>            (English's representation IS the canonical)
     explanation    →  explain/<lang>/<file> */
(function () {
  var LAYERS = ["canonical", "representation", "explanation"];
  var LABEL = {
    canonical:      { en: "Canonical",      he: "קנוני" },
    representation: { en: "Representation", he: "ייצוג" },
    explanation:    { en: "Explanation",    he: "הסבר" }
  };
  var NOTE = {
    canonicalHe:   { he: "הטקסט החוקתי הקנוני — באנגלית, מקור האמת." },
    repHe:         { he: "תרגום — ייצוג נאמן של המקור; האנגלית הקנונית היא מקור האמת, פתוח לאתגור ולרוויזיה." },
    repMissingHe:  { he: "עדיין לא תורגם — מוצג הטקסט הקנוני באנגלית." },
    explain:       { en: "Explanation — plain, accessible language, not the constitutional text. For precision see Canonical or Representation.",
                     he: "הסבר — בשפה פשוטה ונגישה, לא הטקסט החוקתי. לדיוק ראו «קנוני» או «ייצוג»." },
    explainMissing:{ en: "No explanation yet — showing the canonical text.",
                     he: "עדיין אין הסבר — מוצג הטקסט הקנוני." }
  };
  function noteHTML(key, he) {
    var m = NOTE[key]; var t = m && (he ? m.he : (m.en || m.he));
    return t ? '<p class="quiet trans-note">' + t + '</p>' : "";
  }
  async function tryFetch(p) {
    try { var r = await fetch(p, { cache: "no-store" }); if (r.ok) return await r.text(); } catch (e) {}
    return null;
  }

  // → { text, dir, note } or null. `dir` is "ltr" when English content is shown in a
  // Hebrew page (so it reads left-to-right), otherwise "" (inherit the page).
  async function resolve(file, lang, layer) {
    var he = lang === "he";
    var external = file.indexOf("../") === 0;   // e.g. the rotating table — no layers
    var canon = () => tryFetch(file);

    if (layer === "canonical") {
      var c = await canon(); if (c == null) return null;
      return { text: c, dir: he ? "ltr" : "", note: noteHTML("canonicalHe", he) };
    }
    if (layer === "explanation") {
      if (!external) {
        var e = await tryFetch("explain/" + lang + "/" + file);
        if (e != null) return { text: e, dir: "", note: noteHTML("explain", he) };
      }
      var cf = await canon(); if (cf == null) return null;
      return { text: cf, dir: he ? "ltr" : "", note: noteHTML("explainMissing", he) };
    }
    // representation
    if (!he) { var t = await canon(); return t == null ? null : { text: t, dir: "", note: "" }; }
    if (!external) {
      var rep = await tryFetch("he/" + file);
      if (rep != null) return { text: rep, dir: "", note: noteHTML("repHe", he) };
    }
    var cr = await canon(); if (cr == null) return null;
    return { text: cr, dir: "ltr", note: noteHTML("repMissingHe", he) };
  }

  function control(host, lang, current, onChange) {
    if (!host) return;
    var he = lang === "he";
    host.innerHTML = "";
    var lead = document.createElement("span");
    lead.className = "layerbar-lead";
    lead.textContent = he ? "מצב קריאה:" : "Reading:";
    host.appendChild(lead);
    LAYERS.forEach(function (k) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "layer-opt" + (k === current ? " on" : "");
      b.textContent = LABEL[k][he ? "he" : "en"];
      b.setAttribute("aria-pressed", k === current ? "true" : "false");
      b.addEventListener("click", function () { if (k !== current) onChange(k); });
      host.appendChild(b);
    });
  }

  window.DocLayers = {
    LAYERS: LAYERS, resolve: resolve, control: control,
    get: function () { try { return localStorage.getItem("brill:layer") || "representation"; } catch (e) { return "representation"; } },
    set: function (v) { try { localStorage.setItem("brill:layer", v); } catch (e) {} }
  };
})();
