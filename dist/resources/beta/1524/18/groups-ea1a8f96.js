import{aW as t,s as n,aX as s,aE as e,$ as a,i as o,f as r,o as i,I as c,M as l,D as p,c as d,c3 as f,S as u,A as h,k as m,t as b,z as g,w as j}from"./calfSystem-4197cc22.js"
import{c as C}from"./createInput-c03bcf66.js"
import{o as S}from"./onlineDot-0ae53ca5.js"
import"./currentGuildId-2aaee988.js"
import"./intValue-202eff7d.js"
import"./fshOpen-e5d8c136.js"
import"./openQuickBuffByName-d8a01295.js"
import"./createUl-57f7af43.js"
import"./idb-f3252f63.js"
import"./createButton-7607da1c.js"
import"./createLi-35e5de37.js"
import{h as w}from"./hideElement-f08b19df.js"
import"./indexAjaxJson-914501b6.js"
import{c as x}from"./csvSplit-9e107db2.js"
import"./cmdExport-ccb93370.js"
import{g as v}from"./getMembrList-3a22203c.js"
import{d as G,g as A}from"./getGroupStats-9d2784ad.js"
import"./groupViewStats-54e7c379.js"
const B=/([a-zA-Z]+), (\d+) ([a-zA-Z]+) (\d+):(\d+):(\d+) UTC/
function N(t){const n=$("td",t).eq(2),s=B.exec(n.text()),a=(new Date).getFullYear()
n.append(`<br><span class="fshBlue fshXSmall">Local: ${function(t,n){const s=new Date
return s.setUTCDate(t[2]),s.setUTCMonth(e.indexOf(t[3])),s.setUTCFullYear(n),s.setUTCHours(t[4]),s.setUTCMinutes(t[5]),s}(s,a).toString().substr(0,21)}</span>`)}function M(t,n){const s=$("td",n).first()
return s.html(function(t,n){const s=$("b",n).text()
return t[s]?`${S({last_login:t[s].last_login})}&nbsp;<a href="${a}${t[s].id}"><b>${s}</b></a> [${t[s].level}]`:`<b>${s}</b>`}(t,n)),s}function T(t,n){return t[n]?t[n].level:0}function J(t,n,s){return T(t,s)-T(t,n)}function U(t,n){return t[n]?`<a href="${a}${t[n].id}">${n}</a>`:n}function y(t){return"[none]"!==t&&-1===t.indexOf("<font")}function D(t,s,e){const a=M(t,e),o=$("td",e).eq(1),r=function(t,s){const e=x(s.html())
return e.length>1&&e.sort(n(J,t)),e}(t,o)
!function(t,n){const s=n.filter(y)
s.length>0&&t.append(G(s)),t.append(`<span class="fshXSmall">Members: ${s.length}</span>`)}(a,r),function(t,s,e){const a=e.map(n(U,t))
s.html(`<span>${a.join(", ")}</span>`)}(t,o,r),N(e)}function k(e){t("groups.doGroupPaint"),$("#pCC table table table tr").has(".group-action-container").each(n(D,e)),s("groups.doGroupPaint")}function q(t,n){const s=C({className:"custombutton",type:"button",value:n})
return o(t,"&nbsp;"),r(t,s),s}function z(t,n){const s=`<table class="fshgrpstat"><tr><td class="fshBrown">Attack</td><td class="fshRight">${n.attack}</td><td class="fshBrown">Defense</td><td class="fshRight">${n.defense}</td></tr><tr><td class="fshBrown">Armor</td><td class="fshRight">${n.armor}</td><td class="fshBrown">Damage</td><td class="fshRight">${n.damage}</td></tr><tr><td class="fshBrown">HP</td><td class="fshRight">${n.hp}</td><td colspan="2"></td></tr></table>`,e=t.parentNode.parentNode.previousElementSibling
o(e,s)}function E(t){A(t.href).then(n(z,t))}function L(t){t.target.disabled=!0,c('#pCC a[href*="=viewstats&"]').forEach(E)}let R
function X(t){return!t.includes("#000099")}function F(t){g('<span class="fshXSmall fshBlue" style="line-height: 19px;">Joined</span>',t)}function H(t){const s=t.parentNode.parentNode.parentNode.cells[1]
if(x(h(s)).filter(X).length<R){const s=m({className:"group-action-link fshRelative",innerHTML:'<span class="fshSpinner fshSpinner12"></span>',style:{height:"19px",width:"19px"}})
t.parentNode.replaceChild(s,t)
!function(t,s){b({cmd:"guild",subcmd:"groups",subcmd2:"join",group_id:t}).then(n(F,s))}(/confirmJoin\((\d+)\)/.exec(t.href)[1],s)}}function I(){u("groups","joinAllGroupsUnderSize"),c('#pCC a[href*="confirmJoin"]').forEach(H)}function O(){const t=l('#pCC input[value="Join All Available Groups"]'),n=t.parentNode
p("enableMaxGroupSizeToJoin")&&(R=p("maxGroupSizeToJoin"),w(t),function(t){const n=q(t,`Join All Groups < ${R} Members`)
i(n,I)}(n)),function(t){const n=q(t,"Fetch Group Stats")
i(n,L)}(n),d.subcmd2===f&&I()}export default function(){j()||(v(!1).then(k),function(){const t=p("minGroupLevel")
t&&$("#pCC > table > tbody > tr > td > table td").first().append(`<span style="color:blue"> Current Min Level Setting: ${t}</span>`)}(),O(),function(){const t=$("#pCC td.header-dark")
t.eq(0).attr("width","20%"),t.eq(1).attr("width","51%"),t.eq(2).attr("width","22%"),t.eq(3).attr("width","7%")}())}
//# sourceMappingURL=groups-ea1a8f96.js.map
