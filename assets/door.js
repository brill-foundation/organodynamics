"use strict";
/* Signs of life on the Door.
   Every signal is read mechanically from canonical reality (the Record's
   sealed sessions, the Constitution's OPEN headings, RFC frontmatter) and
   shown side by side — never combined into a score. The Door judges nothing.
   Offline / file:// : each panel degrades to a quiet note; the rooms
   themselves need nothing. */
(function(){
  const $=s=>document.querySelector(s);
  const ROOT=(document.body&&document.body.dataset.root)||"";
  const escapeHtml=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const li=h=>{const el=document.createElement("li");el.innerHTML=h;return el;};
  const when=d=>new Date(d).toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"});

  /* Latest activity + the return experience (the `arrival` concept): what
     changed while you were away. Grounded in the Record itself — its sealed
     sessions, which travel with the folder — not in git or the network, so the
     bearing survives offline and in the sovereign "take the Place home" copy.
     This finishes the move the pulse already made (§4: answer to the Record,
     not git). Client-side only — a last-seen marker in localStorage, like the
     language preference; the Record is never written. */
  const SEENAT="lab-last-visit";   // wall-clock of the last visit — for the "you were last here…" nicety (about the visitor, not the Space)
  const SEENSEQ="lab-last-seq";     // Record position last seen — for the diff, grounded in the Record
  const lastSeenAt=+(localStorage.getItem(SEENAT)||0);
  const lastSeenSeq=(()=>{const v=localStorage.getItem(SEENSEQ);return v===null?null:+v;})();
  const firstVisit=lastSeenSeq===null;
  const ARR={
    en:{
      welcome:"Welcome — you are new to the Space. Everything here is yours to read; nothing here is operated.",
      some:n=>(n===1?"One session has":n+" sessions have")+" sealed in the Space since your last visit — marked below.",
      none:"No session has sealed since you were last here. The Space rests.",
      offline:"The Record is momentarily out of reach — the places need nothing.",
      ago:d=>d<1?" You were last here earlier today.":" You were last here "+(d===1?"a day":d+" days")+" ago."
    },
    he:{
      welcome:"ברוכים הבאים — אתם חדשים במרחב. כל מה שכאן פתוח לקריאתכם; דבר כאן אינו מופעל.",
      some:n=>(n===1?"מושב אחד נחתם":n+" מושבים נחתמו")+" במרחב מאז ביקורכם האחרון — מסומנים למטה.",
      none:"שום מושב לא נחתם מאז שהייתם כאן. המרחב נח.",
      offline:"הרשומה אינה בהישג יד כרגע — המקומות אינם זקוקים לדבר.",
      ago:d=>d<1?" הייתם כאן מוקדם יותר היום.":" הייתם כאן לפני "+(d===1?"יום":d+" ימים")+"."
    }
  };
  let arrival={mode:"offline",n:0};
  const renderArrival=()=>{
    const el=$("#orient-since");if(!el)return;
    const L=ARR[(window.LAB_LANG&&window.LAB_LANG.current)||"en"]||ARR.en;
    let text=arrival.mode==="welcome"?L.welcome
      :arrival.mode==="some"?L.some(arrival.n)
      :arrival.mode==="none"?L.none:L.offline;
    if(lastSeenAt&&(arrival.mode==="some"||arrival.mode==="none")){
      text+=L.ago(Math.floor((Date.now()-lastSeenAt)/864e5));
    }
    el.textContent=text;
    el.hidden=false;
  };
  /* the first sentence of a seal's summary — a clean session caption, verbatim from the Record */
  const caption=s=>{const m=String(s).match(/^[\s\S]*?[.!?](?=\s|$)/);let c=(m?m[0]:String(s)).trim();return c.length>160?c.slice(0,159).trimEnd()+"…":c;};
  (async()=>{
    const box=$("#sig-preserve ul");if(!box)return;
    try{
      const t=await (await fetch(ROOT+"laboratory/record/log.jsonl",{cache:"no-store"})).text();
      const events=t.split("\n").filter(Boolean).map(l=>JSON.parse(l));
      const seals=events.filter(e=>e.type==="SEALED");
      if(!seals.length)throw 0;
      const names={};
      events.filter(e=>e.type==="PARTICIPANT_REGISTERED").forEach(e=>{
        names[e.subject]=(e.payload&&(e.payload.name||e.payload.displayName))||e.subject;});
      const tipSeq=events[events.length-1].seq;
      const newSeals=firstVisit?0:seals.filter(e=>e.seq>lastSeenSeq).length;
      box.innerHTML="";
      seals.slice(-5).reverse().forEach(e=>{
        const who=names[e.provenance&&e.provenance.actor]||"";
        const d=e.recordedAt?new Date(e.recordedAt):null;
        const prov="event #"+e.seq+(who?" · "+who:"")+(d?" · "+when(d):"");
        const el=li('<span title="'+escapeHtml(prov)+'">'+escapeHtml(caption(e.payload&&e.payload.summary))+
          '</span><span class="when">'+(d?when(d):"")+"</span>");
        if(!firstVisit && e.seq>lastSeenSeq)el.classList.add("fresh");
        box.appendChild(el);
      });
      /* the pulse is not lit here — the Environmental Engine lights it from the
         Record's own rest. This panel only lists the Record's recent sessions. */
      arrival=firstVisit?{mode:"welcome"}:(newSeals?{mode:"some",n:newSeals}:{mode:"none"});
      renderArrival();
      try{localStorage.setItem(SEENSEQ,String(tipSeq));localStorage.setItem(SEENAT,String(Date.now()));}catch(e){}
    }catch(e){
      box.innerHTML='<li class="quiet">The Record is momentarily out of reach.</li>';
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
      "RFC-007-reconciliation.md","RFC-008-interface-independence.md",
      "RFC-009-continuation.md","RFC-010-external-correspondence.md"];
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
