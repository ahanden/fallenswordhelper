import{a as t}from"./addCommas-02eed580.js"
import{q as e,ah as s,aL as a,e as n,aF as r,c as o,j as i,p as c,A as h,y as l,o as f,t as d,l as p}from"./calfSystem-7aee5245.js"
import{d as u}from"./doSortParams-e077024b.js"
import{p as m,s as g,a as y}from"./stringSort-a715adc3.js"
import{g as b,s as C}from"./idb-12bca0fb.js"
import"./alpha-80a926ba.js"
import"./toLowerCase-51740687.js"
function $(t){return`${t.min.toString()} - ${t.max.toString()}`}function k(t){return`<span class="fshNoWrap">${t[0]}: ${$(t[1])}</span>`}function L(t){if(function(t){return t&&a(t).length>0}(t)){let e='<span class="fshXXSmall">'
return e+=n(t).map(k).join("<br>"),`${e}</span>`}return'<span class="fshGrey">**Missing**</span>'}function j(a,n){return e(a[n],{name:n,image:(r=a[n].image_id,`<img class="tip-static" src="${s}creatures/${r}.png" data-tipped="<img src='${s}creatures/${r}.png' width=200 height=200>" width=40 height=40>`),level:t(a[n].level),attack:$(a[n].attack),defense:$(a[n].defense),armor:$(a[n].armor),damage:$(a[n].damage),hp:$(a[n].hp),enhancements:L(a[n].enhancements)})
var r}function v(t){return"string"==typeof t?parseInt(t.replace(/,|#/g,""),10):t}function w(t,e){if(function(t){return!r(t.type)&&t.type>8}(t))return 1
if(function(t,e){return!r(t.type)&&e.type>8}(t,e))return-1
let s=m(t,o.sortBy,1),a=m(e,o.sortBy,1)
s=v(s),a=v(a)
return g(s-a)}let S,A
function E(){h("<span>No monster information! Please enable entity log and travel a bit to see the world</span>",S)}function _(t){return`<tr><td class="fshCenter">${t.image}</td><td>${t.name}</td><td class="fshCenter">${t.creature_class}</td><td class="fshCenter">${t.level}</td><td class="fshCenter">${t.attack}</td><td class="fshCenter">${t.defense}</td><td class="fshCenter">${t.armor}</td><td class="fshCenter">${t.damage}</td><td class="fshCenter">${t.hp}</td><td class="fshCenter">${t.enhancements}</td></tr>`}function B(){const t=l("entityTableOutput")
A&&t&&h(A.map(_).join(""),t)}function P(t){u(t)
!function(t){"string"===t?A.sort(y):A.sort(w)}(function(t){return t.getAttribute("sortType")||"string"}(t)),B()}function O(t){const{target:e}=t
if("clearEntityLog"===e.id)return C("fsh_monsterLog",""),void E();(function(t){return p("fshLink",t)&&t.hasAttribute("sortkey")})(e)&&P(e)}function T(t){t?(!function(t){A=a(t).map(d(j,t))}(t),o.sortBy="level",o.sortAsc=!0,A.sort(w),A&&(h('<table cellspacing="0" cellpadding="0" border="0" width="100%"><tr class="fshBlack fshWhite"><td width="90%" class="fshCenter"><b>Entity Information</b></td><td width="10%">[<span id="clearEntityLog" class="fshPoint">Clear</span>]</td></tr></table><table cellspacing="1" cellpadding="2" border="0"><thead><tr class="fshVerySoftOrange"><th width="25%" class="fshLink" sortkey="name" colspan="2">Entity</th><th class="fshCenter fshLink" sortkey="creature_class">Class</th><th class="fshCenter fshLink" sortkey="level" sorttype="number">Lvl</th><th class="fshCenter">Attack</th><th class="fshCenter">Defence</th><th class="fshCenter">Armor</th><th class="fshCenter">Damage</th><th class="fshCenter">HP</th><th class="fshCenter">Enhancements</th></tr></thead><tbody id="entityTableOutput"></tbody></table>',S),f(S,O)),B()):E()}function x(t){i()&&function(t){S=t||c,S&&b("fsh_monsterLog").then(T)}(t)}export default x
//# sourceMappingURL=monstorLog-a2427800.js.map