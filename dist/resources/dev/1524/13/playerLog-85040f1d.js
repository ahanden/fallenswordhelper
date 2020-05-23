import{y as e,w as n,ai as t,ay as a,v as s,az as r,ak as i,bs as c,b7 as o,aA as l,x as d,D as u,a1 as f,e as p,l as h,h as g,C as m,U as b,ac as v,bt as y,X as L,bz as w,bA as k,bB as T,bC as C,a5 as x,z as S,aU as _,b4 as P,G as A,S as M,a6 as H,i as R,bx as B,F as j}from"./calfSystem-01eb06ed.js"
import{t as G}from"./toLowerCase-b5dc48c4.js"
import{d as O}from"./dataRows-a1600040.js"
import"./all-6b303efd.js"
import{a as z}from"./allthen-385cdb7e.js"
import{q as I}from"./quickBuffHref-a8c8de7b.js"
import{b as D}from"./buffObj-d006c43c.js"
import{g as N}from"./getMembrList-38374103.js"
import{a as Y}from"./addLogColoring-6480f0d4.js"
function E(n){return function(n){return e({cmd:"combat",subcmd:"view",combat_id:n})}(n)}var F={0:"Dull Edge was activated.",1:"@0 was afflicted by Super Elite Slayer.",2:"@0 was withered.",3:'@0"s armor was shattered.',4:"@0 was infused with extra defense (Constitution).",5:"@0 was infused with extra armor (Sanctuary).",7:"@0 activated Spectral Knight reducing targets armor to zero.",8:"@0 activated Savagery.",9:"@0 activated Shield Strike.",13:"@0 activated Conserve.",17:"@0 activated Four Leaf.",18:'@0 leeched the buff "@1".',19:'@0"s demoralize skill reduced the effectiveness of @1"s enhancements.',20:'@0"s reckoning has improved their skill "@1"',21:'@0 was mesmerized by Spell Breaker, losing the "@1" buff.',22:"@0 was turned Undead by Necrosis.",23:"@0 activated High Guard.",24:"@0 was smote.",25:"@0 activated Barricade.",26:"@0 activated Ageless.",27:"@0 activated Severe Condition.",28:"@0 activated Golden Shield.",29:"@0 activated Anti Deflect.",30:"@0 activated Sealed. (Negated @1)",31:"@0 activated Fist Fight.",33:"@0 activated Dispel Curse.",35:"@0 activated Heavy Weight.",37:"@0 had their armor and defence Inverted.",38:"@0 had their attack reduced by Fumble."}
let q={}
function U(e,n,t,a){return function(e,n,t){return"lastCheck"===n||e[n].logTime&&e[n].logTime>t}(e,a,n)&&(t[a]=e[a]),t}function W(e){const n=r-86400
!e.lastCheck||e.lastCheck<n?function(e){const n=r-604800
q=a(e).reduce(s(U,e,n),{}),q.lastCheck=r,i("fsh_pvpCombat",q)}(e):q=e}function X(e){e&&W(e)}function J(e){return e.id in F}function K(e,n,t){if(!J(n)){const a=`${JSON.stringify(n)} ${u(e[t])}`
console.log(a),f("Logs","Missing PvP Special",a)}}function Q(e,n){const t=l("#specialsDiv",d(n))
e.r.specials.forEach(s(K,t))}function V(e){var t
e.r.specials.every(J)||(t=e.r.id,n({cmd:"combat",subcmd:"view",combat_id:t})).then(s(Q,e))}function Z(e,n){return n.s&&(q[n.r.id]={...n,logTime:c(o(e.cells[1]))/1e3},i("fsh_pvpCombat",q),V(n)),n}function ee(e,n,t){return 0!==e?`${n}:<span class="${t}">${v(e)} </span>`:""}function ne(e){return function(e){return e.r.defender.id===y()&&1===e.r.winner}(e)||function(e){return e.r.attacker.id===y()&&0===e.r.winner}(e)?"fshGreen":"fshRed"}function te(e,n){return 18===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} leeched the buff '${n.params[1]}'.</span>`:21===n.id?`${e}<br><span class="fshRed fshBold">${n.params[0]} was mesmerized by Spell Breaker, losing the '${n.params[1]}' buff.</span>`:e}function ae(e,n){if(!n.s)return
const t=ne(n)
m(ee(n.r.xp_gain,"XP stolen",t)+ee(n.r.gold_gain,"Gold lost",t)+ee(n.r.gold_stolen,"Gold stolen",t)+ee(n.r.pvp_prestige_gain,"Prestige gain",t)+ee(n.r.pvp_rating_change,"PvP change",t)+n.r.specials.reduce(te,""),e)}function se(e,n){const t=b({innerHTML:n})
e.replaceChild(t,e.firstChild)}function re(e){const n=(t=e.cells[2],/You were victorious over/.test(t.innerHTML)?(se(t,'You were <span class="fshGreen">victorious</span> over '),1):/You were defeated by/.test(t.innerHTML)?(se(t,'You were <span class="fshRed">defeated</span> by '),0):void 0)
var t;[0,1].includes(n)&&function(e){const n=/combat_id=(\d+)/.exec(e.cells[2].innerHTML)[1],t=h({style:{color:"gray"}})
g(e.cells[2],t),q[n]&&q[n].logTime?ae(t,q[n]):E(n).then(s(Z,e)).then(s(ae,t))}(e)}const ie=[(e,n)=>"Combat"===n,()=>p.showPvPSummaryInLog,e=>e.cells[2]&&/combat_id=/.test(e.cells[2].innerHTML),e=>!/\(Guild Conflict\)/.test(u(e.cells[2]))]
function ce(e,n){(function(e,n){return ie.every(t=>t(e,n))})(e,n)&&re(e)}function oe(e,n){return L(n.nicks).includes(G(e))}function le(e){return D.find(s(oe,e)).id}function de(e,n){let t=""
return t=n?I(e,L(n[0].replace(/`~|~`/g,"")).map(le).join(";")):I(e),` | <a ${t}>Buff</a></span>`}function ue(e,n){const t=e.cells[2].innerHTML,a=function(e){return e.substring(0,e.indexOf("<small>")+7)}(t)
m(`${a}<nobr>${function(e,n){let t=""
var a
return p.enableChatParsing&&(t=(a=n.replace(/&nbsp;/g," "),a.replace(/<\/?[^>]+(>|$)/g,"")).substr(0,140)),`[ <span style="cursor:pointer;text-decoration:underline" class="a-reply" target_player="${e}" replyTo="${t}...">Reply</span>`}(n,a)}${function(e){return` | <a href="${w}${e}">Trade</a> | <a title="Secure Trade" href="${k}${e}">ST</a>`}(n)}${function(e){const n=e.substring(e.indexOf(">Reply</a>")+10,e.indexOf(">Buff</a>")+9),t=/quickBuff\((\d+)\)/.exec(n)
return t?de(t[1],e.match(/`~.*?~`/)):""}(t)}${function(e){return p.addAttackLinkToLog?` | <a href="${C}${e}">Attack</a>`:""}(n)}${function(e){return e.substring(e.indexOf(">Trade</a>")+10,e.indexOf("</small>"))}(t)}</nobr>${function(e){return e.substring(e.indexOf("</small>"),e.length)}(t)}`,e.cells[2])}function fe(e,n,t){!function(e,n,t){let a=""
const s=e.cells[1].innerHTML,r=s.substring(0,s.indexOf(">Report")+7),i=s.substring(s.indexOf("Message</a>")+11,s.length)
n||(a=` | <a title="Add to Ignore List" href="${T}${t}">Ignore</a>`),m(`${r}</a>${a}${i}`,e.cells[1])}(e,n,t),ue(e,t)}function pe(e,n){"Notification"===n&&function(e){return e.cells[2]&&/You ranked \w{3} in your PvP Band! You have gained \d x PvP Ladder Token/.test(u(e.cells[2]))}(e)&&function(e){const n=c(o(e.cells[1]))
n>p.lastLadderReset&&(x("lastLadderReset",n),p.lastLadderReset=n)}(e)}let he,ge,me=[]
function be(e,n){e.classList.add(n)}function ve(e,n,t){return!!e&&(me.includes(n)?(be(t,"fshGreen"),!0):(function(e,n){ge.includes(e)&&be(n,"fshRed")}(n,t),function(e,n){he.includes(e)&&be(n,"fshBlue")}(n,t),!1))}function $e(e){me=a(e)}function ye(e){return e.username}function Le(e){he=e._allies.map(ye),ge=e._enemies.map(ye)}function we(e,n,t){!function(e,n,t){if(!t){const t=`<nobr><span style="font-size:x-small;">[ <a title="Add to Ignore List" href="'${T}${n}">Ignore</a> ]</span></nobr>`
m(`${e.cells[1].innerHTML}<br>${t}`,e.cells[1])}}(e,n,t)
const a=j.exec(e.cells[2].innerHTML)[1],s=o(e.cells[2].children[0])
let r=` <span style="font-size:x-small;"><nobr>[ <span style="cursor:pointer;text-decoration:underline" class="a-reply" target_player="${s}">Reply</span> | <a href="${w}${s}">Trade</a> | <a title="Secure Trade" href="${k}${s}">ST</a>`
r+=de(a),p.addAttackLinkToLog&&(r+=` | <a href="${C}${s}">Attack</a>`),r+=" ]</nobr></span>",e.cells[2].innerHTML+=r}function ke(e){return e.cells[2].children[0]&&"A"===e.cells[2].children[0].nodeName&&/player_id/.test(e.cells[2].children[0].href)}function Te(e,n){let t,a,s=!1
ke(e)&&(t=e.cells[2].children[0],a=o(t),s=!0)
const r=ve(s,a,t)
!function(e,n,t,a){"Chat"===e&&fe(n,t,a)}(n,e,r,a),function(e,n,t,a){"Notification"===n&&ke(e)&&we(e,t,a)}(e,n,a,r)}function Ce(e){const n=B(e.cells[0].children[0])
n&&(Te(e,n),ce(e,n),pe(e,n),function(e){const n=function(e){return e.cells[2]&&/pvp_id=(\d+)/.exec(e.cells[2].innerHTML)}(e)
n&&n[1]}(e))}function xe(e){window.openQuickMsgDialog(e.target.getAttribute("target_player"),"",e.target.getAttribute("replyTo"))}function Se(e){["showPvPSummaryInLog","lastLadderReset","enableChatParsing"].forEach(H),function(e){const n=e.rows[0].cells[2]
n&&R(n,'&nbsp;&nbsp;<span class="fshWhite">(Guild mates show up in <span class="fshGreen">green</span>)</span>')}(e),function(e){O(e.rows,3,0).forEach(Ce)}(e),$(".a-reply").on("click",xe)}function _e(){p.addAttackLinkToLog=A("addAttackLinkToLog")
const e=M("#pCC > table:last-of-type")
e&&Se(e)}export default function(){Y("PlayerLog",1),function(){if(S())return
const e=[_(!1).then(Le),t("fsh_pvpCombat").then(X)]
P()&&e.push(N(!1).then($e)),z(e,_e)}()}
//# sourceMappingURL=playerLog-85040f1d.js.map
