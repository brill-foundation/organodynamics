"use strict";
/* The plan of the Space — one wayfinding rail, rendered into every reading Place
   so orientation is the same everywhere and you move Place-to-Place, never
   back-to-a-menu. It is a Camera: it links, it marks where you are, it decides
   nothing.

   A page opts in with an empty <nav class="plan" data-space-nav></nav> and two
   body attributes:
     data-place  — which Place this is (threshold|laboratory|constitution|rfcs|cabinet|sessions)
     data-root   — the relative path back to the site root ("", "../", "../../")

   Labels carry data-i18n, so assets/lang.js (loaded AFTER this) translates them
   and re-translates on language toggle. The Table is a different species of
   Place with its own intrinsic orientation and is deliberately not railed. */
(function(){
  var body = document.body || {};
  var root = (body.dataset && body.dataset.root) || "";
  var here = (body.dataset && body.dataset.place) || "";

  // The Places of the Space, in the order you meet them. hrefs are root-relative.
  var PLACES = [
    { key:"threshold",    i18n:"plan.door",         href:"organodynamics/",     en:"The Door" },
    { key:"laboratory",   i18n:"plan.lab",          href:"laboratory/table/",   en:"Laboratory" },
    { key:"constitution", i18n:"plan.constitution", href:"constitution/",       en:"Constitution" },
    { key:"rfcs",         i18n:"plan.rfcs",         href:"rfcs/",               en:"RFCs" },
    { key:"cabinet",      i18n:"plan.cabinet",      href:"cabinet/",            en:"Cabinet" },
    { key:"sessions",     i18n:"plan.sessions",     href:"laboratory/record/",  en:"Sessions" }
  ];

  var rails = document.querySelectorAll("nav.plan[data-space-nav]");
  if(!rails.length) return;

  rails.forEach(function(nav){
    nav.setAttribute("aria-label","Plan of the Space");
    nav.textContent = "";
    PLACES.forEach(function(p){
      var label = '<span data-i18n="'+p.i18n+'">'+p.en+'</span>';
      if(p.key === here){
        var cur = document.createElement("span");
        cur.className = "plan-stop here";
        cur.setAttribute("aria-current","page");
        cur.setAttribute("data-area", p.key);   // review-marker opt-in (assets/whats-new.js)
        cur.innerHTML = '<span class="dot"></span>'+label+
          '<em class="hereis" data-i18n="plan.heretag"> · you are here</em>';
        nav.appendChild(cur);
      } else {
        var a = document.createElement("a");
        a.className = "plan-stop";
        a.href = root + p.href;
        a.setAttribute("data-area", p.key);      // review-marker opt-in (assets/whats-new.js)
        a.innerHTML = '<span class="node"></span>'+label;
        nav.appendChild(a);
      }
    });
  });
})();
