import{h as t,p as s,f as e,v as n,A as a,B as d,i,aL as c,z as o,ai as l,a as h,G as r,aM as p,aN as u}from"./calfSystem-fd021443.js"
import{c as f}from"./createTable-c0a20196.js"
let b
function g(t){b.replaceChild(t.children[0],b.children[0]),d("Complete.",a("fshOutput"))}function m(t,s){i(t.tBodies[0],s)
const e=t.insertRow(-1).insertCell(-1)
e.className="divider",e.colSpan=3}function y(t){const s=b.getBoundingClientRect().top,e=Math.abs(Math.min(s,0)),d=e/24,i=Math.ceil(document.documentElement.clientHeight/24),c=t.length-d-i,o=f({innerHTML:"<tbody></tbody>"}),l=o.insertRow(-1)
l.style.height=e.toString()+"px",l.insertCell(-1),l.insertCell(-1),l.insertCell(-1),t.slice(d,d+i-1).forEach(n(m,o))
const h=24*c
o.insertRow(-1).style.height=h.toString()+"px",a("fshOutput").textContent="Inject table.",requestAnimationFrame(n(g,o))}function R(a){b=f({className:"width_full",id:"fshInjectHere5",innerHTML:"<tbody></tbody>"}),t(s,b),y(a),e(window,"scroll",function(t,s){let e
return function(){clearTimeout(e),e=setTimeout(t,s)}}(n(y,a),0))}function k(t,s,e){return`<tr${function(t,s,e){let n=""
const a=(t-e.time)/6e4
return e.time>s?n=' class="fshNr"':function(t,s,e){return t>20&&s<=e}(a,e.time,s)&&(n=' class="fshOr"'),n}(t,s,e)}><td><span class="newGuildLog"></span></td><td>${function(t){const s=new Date(1e3*t),e=s.getUTCFullYear().toString(),n=p(s.getUTCDate()),a=u[s.getUTCMonth()]
return`${p(s.getUTCHours())}:${p(s.getUTCMinutes())} ${n}/${a}/${e}`}(e.time)}</td><td>${e.msg.text}</td></tr>`}function x(t,s,e,n){return function(t,s,e){return c({subcmd:"log",log_id:t,latest:s,limit:e})}(s,n,t).then(s=>{const n=s.r.logs,a=n.concat(e),d=n.length
return 1e3===d?x(t-d,n[0].id,a,!1):a})}function T(t){const s=(new Date).setUTCSeconds(0,0)-1,e=r("lastmyGuildLogCheck")||s,i=t.map(n(k,s,e)).reverse()
d("Building table.",a("fshOutput")),h(3,R,[i])}function C(t){d("Processing.",a("fshOutput")),h(3,T,[t])}function L(e){x(5e3,-1,[]).then(C)
const n=f({className:"fshInvFilter",innerHTML:'<thead><tr><th colspan="11"><b>Guild Log Version 5</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="index.php?cmd=guild&subcmd=log" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input type="checkbox" data-item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input type="checkbox" data-item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input type="checkbox" data-item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input type="checkbox" data-item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input type="checkbox" data-item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input type="checkbox" data-item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input type="checkbox" data-item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input type="checkbox" data-item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input type="checkbox" data-item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input type="checkbox" data-item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input type="checkbox" data-item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading ...</td></tr></tbody>'})
t(s,n)
const a=f({className:"width_full",id:"headerTable5",innerHTML:'<tbody><tr><td class="header">&nbsp;</td><td class="header">Date</td><td class="header">Message</td></tr></tbody>'})
t(s,a)}export default function(){o()||l("fsh_guildLog").then(L)}
//# sourceMappingURL=newGuildLog5-ab4b647d.js.map
