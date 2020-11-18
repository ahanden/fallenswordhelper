import{aW as t,t as s,aX as e,A as n,B as o,i as a,a2 as r,h as i,aI as c,o as l,D as f,C as u,c as d,c3 as p,V as h,m,u as b,x as g,H as j}from"./calfSystem-02c48ff5.js"
import{c as C}from"./createInput-6ef511c8.js"
import{o as $}from"./onlineDot-a1876042.js"
import"./currentGuildId-cefcefd6.js"
import"./intValue-f94761c7.js"
import"./fshOpen-71b2b356.js"
import"./openQuickBuffByName-6e7bf41a.js"
import"./createUl-50d3a920.js"
import"./idb-49c5b621.js"
import"./createButton-b782218b.js"
import"./createLi-31f6d1e3.js"
import{h as S}from"./hideElement-a8c1e8d6.js"
import"./chunk-a86d7cea.js"
import"./closest-14c30e26.js"
import{c as A}from"./closestTr-9052729a.js"
import"./indexAjaxJson-afad01c3.js"
import"./cmdExport-3fceba30.js"
import{c as w}from"./csvSplit-b214d56b.js"
import{g as x}from"./getArrayByClassName-8897eb0e.js"
import{g as v}from"./getMembrList-3e9950fc.js"
import{d as B,g as G}from"./getGroupStats-fb3bbfca.js"
import"./groupViewStats-bd6e1a8d.js"
const T=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const s=t.cells[3],e=T.exec(o(s)),n=(new Date).getFullYear()
a(s,`<br><span class="fshBlue fshXSmall">Local: ${function(t,s){const e=new Date
return e.setUTCDate(t[2]),e.setUTCMonth(c.indexOf(t[3])),e.setUTCFullYear(s),e.setUTCHours(t[4]),e.setUTCMinutes(t[5]),e}(e,n).toString().substr(0,21)}</span>`)}function J(t,s){return t[s]?t[s].level:0}function M(t,s,e){return J(t,e)-J(t,s)}function y(t,s){return t[s]?`<a href="${r}${t[s].id}">${s}</a>`:s}function U(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,e){const c=e.cells[0]
n(function(t,s){const e=o(s.children[0])
return t[e]?`${$({last_login:t[e].last_login})}&nbsp;<a href="${r}${t[e].id}"><b>${e}</b></a> [${t[e].level}]`:`<b>${e}</b>`}(t,c),c)
const l=e.cells[1],f=function(t,e){const n=w(e.innerHTML)
return n.length>1&&n.sort(s(M,t)),n}(t,l)
!function(t,s){const e=s.filter(U)
e.length>0&&i(t,B(e)),a(t,`<span class="fshXSmall">Members: ${e.length}</span>`)}(c,f),function(t,e,o){const a=o.map(s(y,t))
n(`<span>${a.join(", ")}</span>`,e)}(t,l,f),N(e)}function L(n){t("groups.doGroupPaint"),x("group-action-container").map(t=>A(t)).forEach(s(D,n)),e("groups.doGroupPaint")}function k(t,s){const e=C({className:"custombutton",type:"button",value:s})
return a(t,"&nbsp;"),i(t,e),e}function z(t,s){const e=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${s.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${s.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${s.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${s.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${s.hp}</td><td colspan="2"></td></tr></table>`,n=t.parentNode.parentNode.previousElementSibling
a(n,e)}function E(t){G(t.href).then(s(z,t))}function R(t){t.target.disabled=!0,f('#pCC a[href*="=viewstats&"]').forEach(E)}function H(t){return!t.includes("#000099")}function X(t){n('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function F(t){const e=t.parentNode.parentNode.parentNode.cells[1]
if(w(o(e)).filter(H).length<d.maxGroupSizeToJoin){const e=m({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(e,t)
!function(t,e){b({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(s(X,e))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],e)}}function I(){h("groups","joinAllGroupsUnderSize"),f('#pCC a[href*="confirmJoin"]').forEach(F)}function O(){const t=u('#pCC input[value="Join All Available Groups"]')
if(!t)return
const s=t.parentNode
d.enableMaxGroupSizeToJoin&&(S(t),function(t){const s=k(t,`Join All Groups < ${d.maxGroupSizeToJoin} Members`)
l(s,I)}(s)),function(t){const s=k(t,"Fetch Group Stats")
l(s,R)}(s),d.subcmd2===p&&I()}function P(){g()||(v(!1).then(L),function(){const t=j("minGroupLevel")
t&&a(u("#pCC > table > tbody > tr > td > table td"),`<div class="fshBlue"> Current Min Level Setting: ${t}</div>`)}(),O(),function(){const t=f("#pCC td.header-dark")
t[0].setAttribute("width","20%"),t[1].setAttribute("width","44%"),t[2].setAttribute("width","7%"),t[3].setAttribute("width","22%"),t[4].setAttribute("width","7%")}())}export default P
//# sourceMappingURL=groups-5dbd1f4c.js.map
