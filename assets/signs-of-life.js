"use strict";
/* Signs of Life — the Place quietly reveals where something has evolved since you
   were last here.

   Not a notification system. The design principle: never *tell* the visitor the
   world changed if the world itself can show it. A Place with a sign is not saying
   "there is a notification" — it is saying "something here has evolved since your
   last visit." Today the sign is a small warm glow in the plan rail, on the entry
   cards, and in the navigation; over time it should grow into the world itself
   (a light in a building, a glow near a doorway, an illuminated object on a table).

   The memory is PERSONAL and INCREMENTAL — the heart of the experience:
     · each Place carries a content token (assets/signs-of-life.json), a hash of
       its own files, so a sign answers only to real change;
     · we remember, per visitor, the token each Place had the last time THAT
       visitor looked at it;
     · a Place shows a sign iff its current token differs from the one you last
       saw there — "since you last looked here", never since production, never
       since deployment, never since the branch began;
     · your very first arrival is quiet: the world has not changed *for you* yet,
       so it establishes your baseline silently and reveals nothing;
     · thereafter, if only the Cabinet changes, only the Cabinet lights up; the
       rest of the world stays quiet. The world remembers what is still waiting
       for you, and forgets each Place the moment you visit it.

   An element opts in with data-area="<place-key>" (rail stops, entry cards, the
   top-nav links). Signs are CSS pseudo-elements keyed on a data-sign attribute,
   so language re-rendering never disturbs them. Zero dependencies; works offline.
   Provenance is exposed at window.__SIGNS_OF_LIFE__ so any sign is answerable. */
(function () {
  var KEY = "brill:signs-of-life:v1";
  var here = (document.body && document.body.dataset && document.body.dataset.place) || "";
  // a page's data-place → the Place key it marks seen by being visited
  var PLACE_AREA = {
    brill: "", threshold: "threshold", laboratory: "laboratory",
    constitution: "constitution", rfcs: "rfcs", cabinet: "cabinet", sessions: "sessions"
  };

  function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  function isHe() { return ((window.LAB_LANG && window.LAB_LANG.current) || document.documentElement.lang || "en").slice(0, 2) === "he"; }
  function tip() { return isHe() ? "משהו כאן התפתח מאז ביקורך האחרון" : "something here has evolved since your last visit"; }

  fetch("/assets/signs-of-life.json", { cache: "no-store" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (man) {
      if (!man || !man.areas) return;
      var areas = man.areas;

      var store = load();
      var firstEverVisit = !store || store.v !== 1;
      if (firstEverVisit) {
        // Your first arrival is quiet: seed each Place's memory to its current
        // token, so nothing has "changed for you" yet. No sign is shown.
        var seen = {};
        Object.keys(areas).forEach(function (k) { seen[k] = areas[k].token || ""; });
        store = { v: 1, seen: seen };
        save(store);
      }

      // A Place shows a sign iff it changed since you last looked there — or it is
      // a Place that appeared after your first visit (no memory of it yet).
      function stirred(k) {
        if (!areas[k]) return false;
        if (!(k in store.seen)) return true;                 // new Place, since you began
        return (store.seen[k] || "") !== (areas[k].token || "");
      }
      function neverSeen(k) { return !(k in store.seen); }

      // Provenance ledger — every sign must be traceable to evidence.
      window.__SIGNS_OF_LIFE__ = {
        generatedAt: man.generatedAt,
        stirred: Object.keys(areas).filter(stirred),
        areas: areas,
        why: "A Place stirs iff its current content token differs from the token you last saw there (personal & incremental — never since production)."
      };

      function markSeen(k) {
        if (!areas[k]) return;
        store.seen[k] = areas[k].token || "";
        save(store);
        document.querySelectorAll('[data-area="' + k + '"][data-sign]').forEach(function (el) {
          el.removeAttribute("data-sign");
          el.removeAttribute("title");
        });
      }

      // Landing on a Place's own page counts as looking at it.
      var hereArea = PLACE_AREA[here];
      if (hereArea && areas[hereArea]) markSeen(hereArea);

      function decorate(el) {
        var k = el.getAttribute("data-area");
        if (!k || !stirred(k) || el.hasAttribute("data-sign")) return;
        var isRoom = el.classList.contains("room");
        // A Place newly appeared to you takes the "New" sign in inline contexts
        // (nav, rail); cards take the quiet corner glow so nothing overlaps.
        var kind = isRoom ? "corner" : (neverSeen(k) ? "new" : "glow");
        el.setAttribute("data-sign", kind);
        el.setAttribute("title", tip());
      }

      function render() {
        document.querySelectorAll("[data-area]").forEach(decorate);
        // Following a link into a Place settles it — the sign fades as you go.
        document.querySelectorAll('a[data-area]').forEach(function (a) {
          a.addEventListener("click", function () { markSeen(a.getAttribute("data-area")); }, { once: true });
        });
        // Keep the tooltip language in step on toggle (the "New" text is CSS-driven).
        var btn = document.getElementById("langToggle");
        if (btn) btn.addEventListener("click", function () {
          document.querySelectorAll('[data-sign][title]').forEach(function (el) { el.setAttribute("title", tip()); });
        });
      }

      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
      else render();
    })
    .catch(function () { /* offline or bare folder without the manifest — no signs, no error */ });
})();
