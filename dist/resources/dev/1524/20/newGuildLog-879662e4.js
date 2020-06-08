import{u as t,t as e,bl as s,bm as i,x as n,A as o,p as a,o as d,g as c,z as r,y as h,G as l,v as f,C as u,B as p,I as m,i as g,K as b}from"./calfSystem-a2862afc.js"
import"./playerName-72c7301a.js"
import"./fshOpen-a1ebd7c1.js"
import"./openQuickBuffByName-808f9233.js"
import"./dataRows-b327254e.js"
import{g as k,s as y}from"./idb-911ff7c2.js"
import{c as w}from"./createTable-6dbc7d62.js"
import"./createStyle-571bf4ff.js"
import{h as j}from"./hideElement-66d2f02e.js"
import{e as L}from"./eventHandler5-0d938057.js"
import{t as R}from"./toggleForce-4bee24df.js"
import{s as N}from"./selfIdIs-7f51e683.js"
import{p as G}from"./parseDateAsTimestamp-0811cfc6.js"
import{a as v}from"./all-6bd68ac2.js"
import{f as x}from"./functionPasses-a11f7325.js"
import"./doBuffLinkClick-0e2cbd69.js"
import{a as T}from"./addLogColoring-cbb58717.js"
import"./searchPlayerHref-7fa35928.js"
import{a as H}from"./addGuildLogWidgets-6d475fb7.js"
function I(e){return t({cmd:"guild",subcmd:"log",page:e})}const P=[[],["(Potion)"],["recalled the item","took the item","auto-returned the","stored the item"],["has added flags to","has removed flags to"],["relic. This relic now has an empower level of","relic. The relic empower level has been reset to zero.","failed to capture the relic","captured the relic","captured your relic","has captured the undefended relic","attempted to capture your relic",/ empowered the .+ relic/,/ removed the empowerment from the .+ relic/],["disbanded a mercenary.","hired the mercenary"],["has disbanded one of their groups",/A group from your guild was (.*) in combat./],[/deposited ([,0-9]+) gold into the guild bank/,/deposited ([,0-9]+) FallenSword Points into the guild./],["has added a new rank entitled","has deleted the rank","has requested to join the guild","has invited the player","has officially joined the guild","has been kicked from the guild by","has left the guild","has been assigned the rank","has added/updated a rank entitled"],[/resulted in (.*) with a final score of/,"resulted in a draw. Your GvG rating ","has just initiated a conflict with the guild","has initiated a conflict with your guild","is participating in the conflict against the guild"],["bought the Titan Reward item","from your guild's contribution to the defeat of the titan","a 7 day cooldown has been activated on your guild for this titan"]]
function S(t,e){return s(e)?t.includes(e):e.test(t)}function A(t,s){return s.some(e(S,t))}function C(t){const s=P.findIndex(e(A,t))
return-1===s?0:s}const E=`<table id="fshNewGuildLog" class="fshInvFilter"><thead><tr><th colspan="11"><b>Guild Log Version 4</b></th><th colspan="3"><span id="rfsh" class="sendLink">Reset</span> <a href="${i}" class="sendLink">Old Guild Log</a></th></tr></thead><tbody><tr><td rowspan="3"><b>&nbsp;Filters:</b></td><td class="fshRight">&nbsp;Potions:</td><td><input id="fshPotion" type="checkbox" item="1"/></td><td class="fshRight">&nbsp;Store/Recalls:</td><td><input id="fshStore" type="checkbox" item="2"/></td><td class="fshRight">&nbsp;Relics:</td><td><input id="fshRelic" type="checkbox" item="4"/></td><td class="fshRight">&nbsp;Mercenaries:</td><td><input id="fshMerc" type="checkbox" item="5"/></td><td class="fshRight">&nbsp;Group Combats:</td><td><input id="fshGroup" type="checkbox" item="6"/></td><td colspan="3">&nbsp;</td></tr><tr><td class="fshRight">&nbsp;Donations:</td><td><input id="fshDonation" type="checkbox" item="7"/></td><td class="fshRight">&nbsp;Rankings:</td><td><input id="fshRank" type="checkbox" item="8"/></td><td class="fshRight">&nbsp;GvGs:</td><td><input id="fshGvG" type="checkbox" item="9"/></td><td class="fshRight">&nbsp;Tag/UnTags:</td><td><input id="fshTag" type="checkbox" item="3"/></td><td class="fshRight">&nbsp;Titans:</td><td><input id="fshTitan" type="checkbox" item="10"/></td><td class="fshRight">&nbsp;Other:</td><td><input id="fshOther" type="checkbox" item="0"/></td><td>&nbsp;</td></tr><tr><td colspan="2">&nbsp;[<span id="fshAll" class="fshLink">Select All</span>]</td><td colspan="2">&nbsp;[<span id="fshNone" class="fshLink">Select None</span>]</td><td colspan="9"></td></tr><tr><td id="fshOutput" class="fshBlue" colspan="14">Loading Page 1 ...</td></tr></tbody></table><table id="fshInjectHere"></table>`,O=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],B=[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]
let D,M,F,$,_,z,U,q,K={},Q=[],V=!0
function W(t,e){return[()=>1===z,()=>K.log,()=>K.log[0],()=>K.log[0][0],()=>t===K.log[0][0],()=>e===K.log[0][2]].every(x)}function Y(){const t=m("width_full",_)
1===t.length&&function(t){const e=t[0],s=e.rows.length-1
for(let t=1;t<s;t+=2){const s=e.rows[t],i=b(s.cells[1]),n=G(i),o=s.cells[2].innerHTML
if(W(n,o)){V=!1
break}Q.push([100*z+t,n,i,o,C(o)])}}(t)}function J(t){!function(t){_=f(t)
const e=u('input[name="page"]',_)
e&&(z=Number(e.value),U=Number(/\d+/.exec(p(e.parentNode))[0]),1===z&&($=Math.min(U,F)),r(`Loading ${z} of ${$}...`,M))}(t),Y()}function X(t){Q.push([0].concat(t))}function Z(){y("fsh_guildLog",K)}function tt(t,e){return e[1]!==t}function et(t){return t.slice(1,5)}function st(t,e){const s=t.insertCell(-1)
o(e,s),s.className="row"}function it(t){!function(t){const e=q.insertRow(-1)
t.push(e),K.checks[t[4]]||(e.className="fshHide"),st(e,'<span class="newGuildLog"></span>'),st(e,`<nobr>${t[2]}</nobr>`),st(e,t[3])}(t),function(t){const e=q.insertRow(-1)
t.push(e),K.checks[t[4]]||(e.className="fshHide")
const s=e.insertCell(-1)
s.className="divider",s.colSpan=3}(t)}function nt(t){t.checked=K.checks[t.getAttribute("item")]}function ot(){c("input",D).forEach(nt),Z()}function at(t,e){return t[0]-e[0]}function dt(){V&&Q.sort(at),r("Loading complete.",M),K.log=Q.filter(e(tt,(new Date).setSeconds(0,0))).map(et),Z(),function(){q=w({id:"fshInjectHere",className:"width_full"}),g(q,'<tbody><tr><td class="header" width="16">&nbsp;</td><td class="header" width="20%">Date</td><td class="header" width="80%">Message</td></tr></tbody>'),Q.forEach(it)
const t=h("fshInjectHere")
a.replaceChild(q,t),T("myGuildLog",1),H()}()}function ct(t){J(t),function(){const t=[]
if(V)for(let e=2;e<=$;e+=1)t.push(I(e).then(J))
else K.log.forEach(X)
return v(t)}().then(dt)}function rt(t,e,s){s[4]===t&&(R(s[5],e),R(s[6],e))}function ht(t){const s=Number(t.getAttribute("item"))
K.checks[s]=!K.checks[s],Z(),Q.forEach(e(rt,s,!K.checks[s]))}function lt(t){t&&t.classList&&t.classList.remove("fshHide")}function ft(t){lt(t[5]),lt(t[6])}function ut(){K.checks=O.slice(0),ot(),Q.forEach(ft)}function pt(t){j(t[5]),j(t[6])}function mt(){K.checks=B.slice(0),ot(),Q.forEach(pt)}function gt(){K.log=!1,Z(),r("Loading Page 1 ...",M),Q=[],V=!0,o("",h("fshInjectHere")),I(1).then(ct)}function bt(t){!function(t){K=t||K,K.checks=K.checks||O.slice(0)}(t),o(E,a),D=h("fshNewGuildLog"),M=h("fshOutput"),d(D,L([[t=>"INPUT"===t.tagName,ht],[N("fshAll"),ut],[N("fshNone"),mt],[N("rfsh"),gt]])),ot(),F=Number(l("newGuildLogHistoryPages")),$=F,I(1).then(ct)}export default function(){n()||k("fsh_guildLog").then(bt)}
//# sourceMappingURL=newGuildLog-879662e4.js.map
