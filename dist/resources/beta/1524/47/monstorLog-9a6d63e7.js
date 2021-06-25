import{a as t}from"./addCommas-27b35f1c.js"
import{q as s,aA as e,a_ as n,e as a,a6 as r,c,j as i,p as o,B as l,z as f,o as h,t as d,l as u}from"./calfSystem-db2edbef.js"
import{d as m}from"./doSortParams-b10c7d97.js"
import{p,s as g,a as y}from"./stringSort-9c64c0cd.js"
import{g as b,s as C}from"./idb-937dea46.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function v(t){if(function(t){return t&&n(t).length>0}(t)){let s='<span class="fshXXSmall">'
return s+=a(t).map(k).join("<br>"),`${s}</span>`}return'<span class="fshGrey">**Missing**</span>'}function L(n,a){return s(n[a],{name:a,image:(r=n[a].image_id,`<img class="tip-static" src="${e}creatures/${r}.png" data-tipped="<img src='${e}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(n[a].level),attack:$(n[a].attack),defense:$(n[a].defense),armor:$(n[a].armor),damage:$(n[a].damage),hp:$(n[a].hp),enhancements:v(n[a].enhancements)})
var r}function j(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,s){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,s){return!r(t.type)&&s.type>8}(t,s))return-1
let e=p(t,c.sortBy,1),n=p(s,c.sortBy,1)
e=j(e),n=j(n)
return g(e-n)}let S,A
function _(){l("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function B(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function E(){const t=f("entityTableOutput")
A&&t&&l(A.map(B).join(""),t)}function P(t){m(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),E()}function O(t){const{target:s}=t
if("clearEntityLog"===s.id)return C("fsh_monsterLog",""),void _();(function(t){return u("fshLink",t)&&t.hasAttribute("sortkey")})(s)&&P(s)}function T(t){t?(!function(t){A=n(t).map(d(L,t))}(t),c.sortBy="level",c.sortAsc=!0,A.sort(w),A&&(l('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),h(S,O)),E()):_()}function x(t){i()&&function(t){S=t||o,S&&b("fsh_monsterLog").then(T)}(t)}export default x
//# sourceMappingURL=monstorLog-9a6d63e7.js.map
