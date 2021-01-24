import{a as e}from"./addLogColoring-d75d6c4a.js"
import{e as t,ac as n,D as s,b8 as a,b9 as o,E as r,C as i,z as c,ba as f,G as l,i as u,w as m,S as p,t as d,ax as h,bb as g,a7 as b,h as y,m as j,B as w,o as C,bc as P,H as _,M as v,a3 as $,bd as k,Y as L,x as T}from"./calfSystem-7aee5245.js"
import{i as x}from"./insertHtmlAfterEnd-ac29d90e.js"
import{c as B}from"./currentGuildId-2e15c82d.js"
import{g as E}from"./getMembrList-69d34b24.js"
import{c as G}from"./closestTr-177ae492.js"
import{a as R}from"./addCommas-02eed580.js"
import{p as S}from"./parseDateAsTimestamp-9a3302cb.js"
import{g as Y,s as A}from"./idb-12bca0fb.js"
import{c as I}from"./createStyle-a90207f5.js"
import{m as M}from"./myStats-50112458.js"
import{b as D}from"./buffObj-57514b10.js"
import{c as H}from"./closestTd-077b8859.js"
import{c as N}from"./csvSplit-aa512e64.js"
import{o as z}from"./openQuickBuffByName-88fe8230.js"
import{t as O}from"./toLowerCase-51740687.js"
import"./dataRows-d2344907.js"
import"./doBuffLinkClick-6f7aa7be.js"
import"./cmdExport-ac019581.js"
import"./indexAjaxJson-d7e2ce82.js"
import"./closest-77701dcf.js"
import"./getProfile-d70516ae.js"
import"./playerName-87d03488.js"
import"./fshOpen-bec182a3.js"
let Q
async function J(e){return B()&&!Q&&(Q=async function(){return t(await E(!1)).filter((([,e])=>n(e))).map((([e])=>e))}()),(await Q).includes(e)}const W=e=>[e,a(e.href,"target_username")],X=async([e,t])=>[e,t,await J(t)]
function q([e,t]){x(e,` | <a href="${o}${t}">Attack</a>`)}function F(e){return`<a href="${f}${l(e)}" data-tooltip="Add to Ignore List">Ignore</a>`}function K([e,,t]){c("Report",t),x(t,` | ${F(e)}`)}function U([e,t]){u(t.cells[1].children[0],`<font size="1"><br>[ ${F(e)} ]</font>`)}function V(e){return function(e){return m({cmd:"combat",subcmd:"view",combat_id:e})}(e)}let Z,ee
function te(e,[t,n]){return"lastCheck"===t||n.logTime&&n.logTime>e}async function ne(){const e=await Y("fsh_pvpCombat")
if(!e)return{lastCheck:p}
const n=p-86400
return!e.lastCheck||e.lastCheck<n?function(e){const n=p-604800,s=t(e).filter(d(te,n)),a={...h(s),lastCheck:p}
return A("fsh_pvpCombat",a),a}(e):e}async function se(e,t){Z||(Z=ne())
const n=await Z
return n[t]&&n[t].logTime?n[t]:async function(e,t,n){const s=await V(t)
if(s&&s.s)return ee||(ee={...n}),ee[t]={...s,logTime:S(l(e.cells[1]))/1e3},A("fsh_pvpCombat",ee),s}(e,t,n)}const ae=e=>i(g,e),oe=([,e])=>!/\(Guild Conflict\)/.test(e),re=async([e,t])=>[e,t,await se(e,/combat_id=(\d+)/.exec(t)[1])]
function ie(e,t,n){return 0!==e?`${t}:<span class="${n}">${R(e)}</span> `:""}function ce(e,t){return 18===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} leeched the buff '${t.params[1]}'.</span>`:21===t.id?`${e}<br><span class="fshRed fshBold">${t.params[0]} was mesmerized by Spell Breaker, losing the '${t.params[1]}' buff.</span>`:e}function fe([e,t,n]){const[s,a]=function(e,t){return/You were victorious over/.test(t)?["fshGreen",'You were <span class="fshGreen">victorious</span> over ']:/You were defeated by/.test(t)?["fshRed",'You were <span class="fshRed">defeated</span> by ']:["",w(e.cells[2].firstChild)]}(e,t),o=function(e,t){return ie(e.r.xp_gain,"XP stolen",t)+ie(e.r.gold_gain,"Gold lost",t)+ie(e.r.gold_stolen,"Gold stolen",t)+ie(e.r.pvp_prestige_gain,"Prestige gain",t)+ie(e.r.pvp_rating_change,"PvP change",t)+e.r.specials.reduce(ce,"")}(n,s)
e.cells[2].firstChild.remove(),b(e.cells[2],a),y(e.cells[2],j({innerHTML:o}))}const le=([,,e])=>e&&e.s
const ue=e=>e.username
let me
async function pe(){const e=await M(!1)
return{_allies:e._allies.map(ue),_enemies:e._enemies.map(ue)}}async function de(e){return me||(me=pe()),(await me)._allies.includes(e)}async function he(e){return me||(me=pe()),(await me)._enemies.includes(e)}async function ge(e){let t=""
const n=l(e),[s,a,o]=await Promise.all([J(n),de(n),he(n)])
return s?t="guild":a?t="ally":o&&(t="enemy"),[`.fshPlayerColoring tr:nth-of-type(${G(e).rowIndex+1}) td:nth-of-type(3) > a:first-of-type`,t]}function be(e,[t,n]){return e[n]?e[n].push(t):e[n]=[t],e}const ye={guild:"green",ally:"blue",enemy:"red"}
function je([e,t]){return`${t.join(", ")} { color: ${ye[e]}; }`}const we=([,e])=>e
function Ce(e,n){const s=function(e){return t(e.filter(we).reduce(be,{})).map(je)}(n)
s.length&&(!function(e){const t=e.rows[0].cells[2]
t&&u(t,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e),e.classList.add("fshPlayerColoring"),y(document.body,I(s.join("\n"))))}const Pe=e=>(e=>v(H(e).childNodes))(e).map(l)
function _e(e,t){return(e=>i(P,G(e)))(e)&&("Buff"===t||"Reply"===t&&_("enableChatParsing"))}function ve(e){const t=D.find((t=>((e,t)=>N(t.nicks).includes(O(e)))(e,t)))
if(t)return t.id}function $e(e){const{target:t}=e,n=l(t)
_e(t,n)&&("Reply"===n&&(!function(e){const t=Pe(e).slice(0,2),n=t.join(" ")
let s=n
n.length>140&&(s=`${n.substring(0,140)}...`),window.openQuickMsgDialog(t[0],"",s)}(t),e.preventDefault()),"Buff"===n&&function(e,t){const[n,s]=Pe(t),a=/`~(.*)~`/.exec(s)
if(a){const t=N(a[1]).map(ve).filter((e=>e)).join(";")
z(n,t),e.preventDefault()}}(e,t))}let ke
const Le=/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/
function Te(e){return Le.test(w(e.cells[2]))}function xe(e){const t=S(l(e.cells[1]))
t>ke&&(L($,t),ke=t)}const Be=[["addIgnoreLink",function(e){const t=s(r,e)
if(0===t.length)return
const n=t.map((e=>[e,G(e)])).map((([e,t])=>[e,t,i('a[href*="reportMsg"]',t)]))
n.filter((([,,e])=>e)).forEach(K),n.filter((([,,e])=>!e)).forEach(U)}],["colorPlayerNames",async function(e){const t=s(r,e)
if(!t.length)return
Ce(e,await Promise.all(t.map(ge)))}],["addAttackLinkToLog",async function(e){const t=s('a[href*="=createsecure&"]',e)
if(!t.length)return
const n=t.map(W);(await Promise.all(n.map(X))).filter((([,,e])=>!e)).forEach(q)}],["changeButtonLabels",function(e){s('a[href*="=trade&"]',e).forEach((e=>c("Trade",e))),s('a[href*="=createsecure&"]',e).forEach((e=>c("ST",e)))}],["trackLadderReset",function(e){ke=_($),s(k,e).map(G).filter(Te).forEach(xe)}],["showPvPSummaryInLog",async function(e){const t=s('a[href*="&combat_id="]',e)
if(0===t.length)return;(await Promise.all(function(e){return e.map(G).filter(ae).map((e=>[e,e.cells[2].innerHTML])).filter(oe).map(re)}(t))).filter(le).forEach(fe)}]]
function Ee(e,t){_(t[0])&&t[1](e)}function Ge(e){!function(e){C(e,$e)}(e),Be.forEach(d(Ee,e))}function Re(){e("PlayerLog",1),function(){if(T())return
const e=i("#pCC > table:last-of-type")
e&&Ge(e)}()}export default Re
//# sourceMappingURL=playerLog-14939ed1.js.map