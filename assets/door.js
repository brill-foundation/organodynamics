"use strict";
/* Signs of life on the Door.
   Every signal is read mechanically from the Record (git history, the
   Constitution's OPEN headings, RFC frontmatter) and shown side by side —
   never combined into a score. The Door judges nothing.
   Offline / file:// : each panel degrades to a quiet note; the rooms
   themselves need nothing. */
(function(){
  const $=s=>document.querySelector(s);
  const REPO="brill-foundation/organodynamics";
  const escapeHtml=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const li=h=>{const el=document.createElement("li");el.innerHTML=h;return el;};
  const when=d=>new Date(d).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});

  /* Latest activity + the return experience (the `arrival` concept): what
     changed while you were away. Client-side only — a last-visit marker in
     localStorage, like the language preference; the Record is never written. */
  const LASTKEY="lab-last-visit";
  const lastSeen=+(localStorage.getItem(LASTKEY)||0);
  const firstVisit=!lastSeen;
  const ARR={
    en:{
      welcome:"Welcome — you are new to the Space. Everything here is yours to read; nothing here is operated.",
      some:n=>(n===1?"One thing has":n+" things have")+" changed in the Space since your last visit — marked below.",
      none:"Nothing has changed since you were last here. The Space rests.",
      offline:"Your bearings return when the network does — the places need nothing."
    },
    he:{
      welcome:"ברוכים הבאים — אתם חדשים במרחב. כל מה שכאן פתוח לקריאתכם; דבר כאן אינו מופעל.",
      some:n=>(n===1?"דבר אחד השתנה":n+" דברים השתנו")+" במרחב מאז ביקורכם האחרון — מסומנים למטה.",
      none:"דבר לא השתנה מאז שהייתם כאן. המרחב נח.",
      offline:"נקודות ההתמצאות ישובו עם הרשת — המקומות אינם זקוקים לדבר."
    }
  };
  let arrival={mode:"offline",n:0};
  const renderArrival=()=>{
    const el=$("#orient-since");if(!el)return;
    const L=ARR[(window.LAB_LANG&&window.LAB_LANG.current)||"en"]||ARR.en;
    el.textContent=arrival.mode==="welcome"?L.welcome
      :arrival.mode==="some"?L.some(arrival.n)
      :arrival.mode==="none"?L.none:L.offline;
    el.hidden=false;
  };
  (async()=>{
    const box=$("#sig-preserve ul");if(!box)return;
    try{
      const r=await fetch("https://api.github.com/repos/"+REPO+"/commits?per_page=6");
      if(!r.ok)throw 0;
      const cs=await r.json();
      if(!Array.isArray(cs)||!cs.length)throw 0;
      box.innerHTML="";
      let fresh=0;
      cs.slice(0,5).forEach(c=>{
        const msg=(c.commit.message||"").split("\n")[0];
        const d=new Date(c.commit.author.date);
        const el=li(escapeHtml(msg)+'<span class="when">'+when(d)+"</span>");
        if(!firstVisit && d>lastSeen){el.classList.add("fresh");fresh++;}
        box.appendChild(el);
      });
      if((Date.now()-new Date(cs[0].commit.author.date))/864e5<45){
        const p=$("#alive");if(p)p.classList.add("alive");
        const pd=$(".plan-stop.here .dot");if(pd)pd.classList.add("alive");
      }
      arrival=firstVisit?{mode:"welcome"}:(fresh?{mode:"some",n:fresh}:{mode:"none"});
      renderArrival();
      try{localStorage.setItem(LASTKEY,String(Date.now()));}catch(e){}
    }catch(e){
      box.innerHTML='<li class="quiet">The Record keeps them — live signals need the network.</li>';
      arrival={mode:"offline"};renderArrival();
    }
  })();
  /* keep the return message in the reader's language on toggle */
  const lt=document.getElementById("langToggle");
  if(lt)lt.addEventListener("click",()=>setTimeout(renderArrival,0));

  /* Open constitutional questions — headings marked OPEN */
  (async()=>{
    const box=$("#sig-open ul");if(!box)return;
    try{
      const t=await (await fetch("laboratory/CONSTITUTION.md",{cache:"no-store"})).text();
      const qs=[...t.matchAll(/^#{2,3}\s+\d*[a-z]?\.?\s*OPEN\s*—\s*(.+)$/gm)].map(m=>m[1].trim());
      if(!qs.length)throw 0;
      box.innerHTML="";
      qs.forEach(q=>box.appendChild(li('<a href="constitution/">'+escapeHtml(q)+"</a>")));
    }catch(e){
      box.innerHTML='<li class="quiet">The open questions live in the Constitution.</li>';
    }
  })();

  /* RFCs — id, title, status from frontmatter */
  (async()=>{
    const box=$("#sig-rfc ul");if(!box)return;
    const files=["RFC-001-the-instrument.md","RFC-002-inquiry.md","RFC-003-the-navigation-layer.md",
      "RFC-004-two-constitutions.md","RFC-005-proprioception.md","RFC-006-the-chronicle.md",
      "RFC-007-reconciliation.md","RFC-008-interface-independence.md"];
    try{
      const rows=[];
      for(const f of files){
        const t=await (await fetch("rfcs/"+f,{cache:"no-store"})).text();
        const g=k=>(t.match(new RegExp("^"+k+":\\s*(.+)$","m"))||[])[1];
        if(g("id"))rows.push({id:g("id"),title:g("title"),status:g("status")});
      }
      if(!rows.length)throw 0;
      box.innerHTML="";
      rows.forEach(r=>box.appendChild(li('<a href="rfcs/">'+escapeHtml(r.id)+" — "+escapeHtml(r.title||"")+'</a> <span class="badge">'+escapeHtml(r.status||"")+"</span>")));
    }catch(e){
      box.innerHTML='<li class="quiet">Three RFCs so far — the Instrument, Inquiry, the Navigation Layer.</li>';
    }
  })();
})();
