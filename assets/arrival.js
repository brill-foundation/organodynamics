"use strict";
/* Arrival — the first-time layer, distinct from Signs of Life.

   Two modes, two different emotions:

     · ARRIVAL — for a visitor's very first time. They are not asking "what changed
       since I was last here?" (they have never been here); they are asking "where
       should I begin?" So the world gently suggests a starting point — a quiet
       "Start here", an invitation. Not a notification. Not "New". A welcome.

     · RETURN — once the visitor has explored Brill even once, the Arrival layer
       retires for good and hands the visitor over to Signs of Life, which
       remembers what has evolved since they last looked. Arrival says "Welcome";
       Signs of Life says "while you were away, something here continued to live."

   Arrival owns its own state (brill:arrived) and does not touch Signs of Life.
   It appears only on the threshold (the entry), only until the first exploration.
   Zero dependencies; works offline. Provenance at window.__ARRIVAL__. */
(function () {
  var KEY = "brill:arrived";
  var STARTS_AT = "laboratory"; // the Place the world gently suggests you begin with
  var place = (document.body && document.body.dataset && document.body.dataset.place) || "";

  function arrived() { try { return localStorage.getItem(KEY) === "1"; } catch (e) { return true; } }
  function setArrived() { try { localStorage.setItem(KEY, "1"); } catch (e) {} }

  // Being anywhere other than the threshold means the visitor has begun exploring.
  if (place && place !== "brill") { setArrived(); return; }
  if (place !== "brill") return; // only the entry hosts the Arrival invitation

  window.__ARRIVAL__ = { arrived: arrived(), startsAt: STARTS_AT };
  if (arrived()) return; // a Return visitor — Signs of Life governs, Arrival stays away

  function show() {
    // Gently light the suggested Place with a "Start here" invitation.
    document.querySelectorAll('[data-area="' + STARTS_AT + '"].room').forEach(function (el) {
      el.setAttribute("data-arrival", "start");
    });
    // The first step into any Place ends Arrival for good — the handover to
    // Signs of Life happens the moment the visitor begins to explore.
    document.querySelectorAll('a[data-area]').forEach(function (a) {
      a.addEventListener("click", setArrived, { once: true });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", show);
  else show();
})();
