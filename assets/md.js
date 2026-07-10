"use strict";
/* Minimal markdown renderer for the Door's reading rooms.
   Camera-side only: it renders documents from the Record verbatim —
   headings, emphasis, code, fences, tables, lists, quotes, links.
   It interprets nothing and stores nothing. */
function mdParse(src){
  let front=null;
  if(src.startsWith("---")){
    const end=src.indexOf("\n---",3);
    if(end>-1){
      front={};
      src.slice(3,end).split("\n").forEach(l=>{const m=l.match(/^([\w-]+):\s*(.*)$/);if(m)front[m[1]]=m[2].trim();});
      src=src.slice(end+4);
    }
  }
  return {front,html:mdToHtml(src)};
}
function mdToHtml(md){
  const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const fences=[];
  md=md.replace(/```[^\n]*\n([\s\S]*?)```/g,(m,c)=>{fences.push("<pre><code>"+esc(c)+"</code></pre>");return "\n§F"+(fences.length-1)+"§\n";});
  md=esc(md);
  const codes=[];
  const inline=s=>{
    s=s.replace(/`([^`]+)`/g,(m,c)=>{codes.push("<code>"+c+"</code>");return "§C"+(codes.length-1)+"§";});
    s=s.replace(/\*\*([^*]+)\*\*/g,"<b>$1</b>");
    s=s.replace(/(^|[\s(—])\*([^*\n]+)\*(?=[\s).,;:!?—]|$)/g,"$1<i>$2</i>");
    s=s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2">$1</a>');
    return s.replace(/§C(\d+)§/g,(m,i)=>codes[+i]);
  };
  const lines=md.split("\n"),out=[];
  let para=[],list=null,bq=[];
  const flushP=()=>{if(para.length){out.push("<p>"+inline(para.join(" "))+"</p>");para=[];}};
  const flushL=()=>{if(list){out.push("<"+list.t+">"+list.items.map(i=>"<li>"+inline(i)+"</li>").join("")+"</"+list.t+">");list=null;}};
  const flushB=()=>{if(bq.length){out.push("<blockquote><p>"+inline(bq.join(" "))+"</p></blockquote>");bq=[];}};
  const flush=()=>{flushP();flushL();flushB();};
  for(let i=0;i<lines.length;i++){
    const l=lines[i];let m;
    if(/^§F\d+§$/.test(l.trim())){flush();out.push(l.trim());continue;}
    if(m=l.match(/^(#{1,6})\s+(.*)$/)){flush();const n=m[1].length;out.push("<h"+n+">"+inline(m[2])+"</h"+n+">");continue;}
    if(/^\s*(---+|\*\*\*+)\s*$/.test(l)){flush();out.push("<hr>");continue;}
    if(m=l.match(/^&gt;\s?(.*)$/)){flushP();flushL();bq.push(m[1]);continue;}
    if(l.includes("|")&&i+1<lines.length&&/^\s*\|?[\s:\-|]+\|?\s*$/.test(lines[i+1])&&lines[i+1].includes("-")){
      flush();
      const cells=r=>r.trim().replace(/^\||\|$/g,"").split("|").map(c=>inline(c.trim()));
      let t="<table><thead><tr>"+cells(l).map(c=>"<th>"+c+"</th>").join("")+"</tr></thead><tbody>";
      i++;
      while(i+1<lines.length&&lines[i+1].includes("|")&&lines[i+1].trim()!==""){i++;t+="<tr>"+cells(lines[i]).map(c=>"<td>"+c+"</td>").join("")+"</tr>";}
      out.push(t+"</tbody></table>");continue;
    }
    if(m=l.match(/^\s*[-*]\s+(.*)$/)){flushP();flushB();if(!list||list.t!=="ul"){flushL();list={t:"ul",items:[]};}list.items.push(m[1]);continue;}
    if(m=l.match(/^\s*\d+\.\s+(.*)$/)){flushP();flushB();if(!list||list.t!=="ol"){flushL();list={t:"ol",items:[]};}list.items.push(m[1]);continue;}
    if(l.trim()===""){flush();continue;}
    if(list&&/^\s{2,}/.test(l)){list.items[list.items.length-1]+=" "+l.trim();continue;}
    if(bq.length){bq.push(l.trim());continue;}
    flushL();flushB();para.push(l.trim());
  }
  flush();
  return out.join("\n").replace(/§F(\d+)§/g,(m,i)=>fences[+i]);
}
