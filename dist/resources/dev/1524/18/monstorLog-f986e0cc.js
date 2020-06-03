import{n as t,aG as s,au as e,l as n,ak as a,c as r,j as i,p as o,z as c,x as l,o as f,s as h}from"./calfSystem-5545a3e6.js"
import"./toLowerCase-57ae178d.js"
import{a as d}from"./addCommas-757dfba4.js"
import{g as u,s as p}from"./idb-ab1a88c6.js"
import"./alpha-e4543f35.js"
import{d as m}from"./doSortParams-c1e96eca.js"
import{p as g,s as y,a as b}from"./stringSort-69df5bb5.js"
function C(t){return`${t.min.toString()} - ${t.max.toString()}`}function $(t){return`<span class="fshNoWrap">${t[0]}: ${C(t[1])}</span>`}function k(t){if(function(t){return t&&e(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=n(t).map($).join("<br>"),s+"</span>"}return'<span class="fshGrey">**Missing**</span>'}function L(e,n){return t(e[n],{name:n,image:(a=e[n].image_id,`<img class="tip-static" src="${s}creatures/${a}.png" data-tipped="<img src='${s}creatures/${a}.png' width=200 height=200>" width=40 height=40>`),level:d(e[n].level),attack:C(e[n].attack),defense:C(e[n].defense),armor:C(e[n].armor),damage:C(e[n].damage),hp:C(e[n].hp),enhancements:k(e[n].enhancements)})
var a}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function v(t,s){if(function(t){return!a(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!a(t.type)&&s.type>8}(t,s))return-1
let e=g(t,r.sortBy,1),n=g(s,r.sortBy,1)
e=j(e),n=j(n)
return y(e-n)}let w,S
function A(){c("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",w)}function E(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function _(){const t=l("entityTableOutput")
S&&t&&c(S.map(E).join(""),t)}function B(t){m(t)
!function(t){"string"===t?S.sort(b):S.sort(v)}(function(t){return t.getAttribute("sortType")||"string"}(t)),_()}function P(t){const{target:s}=t
if("clearEntityLog"===s.id)return p("fsh_monsterLog",""),void A();(function(t){return t.classList.contains("fshLink")&&t.hasAttribute("sortkey")})(s)&&B(s)}function x(t){t?(!function(t){S=e(t).map(h(L,t))}(t),r.sortBy="level",r.sortAsc=!0,S.sort(v),S&&(c('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',w),f(w,P)),_()):A()}export default function(t){i()&&function(t){w=t||o,w&&u("fsh_monsterLog").then(x)}(t)}
//# sourceMappingURL=monstorLog-f986e0cc.js.map
