import{f as t,i as n,l as e,a2 as s,aD as o,o as r,b4 as c,A as a,w as l,b as i,p as f,d as u,s as m,ao as d,z as h}from"./calfSystem-8b6534a5.js"
import"./numberIsNaN-0a4ef3fd.js"
import{a as p}from"./roundToString-ec4dfe54.js"
import"./fshOpen-b5a7c2c8.js"
import{o as b}from"./openQuickBuffByName-ccc15ff1.js"
import{d as T}from"./dataRows-7ad53ca7.js"
import{g,s as w}from"./idb-abce8d8d.js"
import{c as j}from"./createTBody-4807b059.js"
import{c as C}from"./createTable-e198f036.js"
import{c as N}from"./createAnchor-f59dadc2.js"
import{g as $}from"./getTitle-c775f58b.js"
import{p as S}from"./parseDateAsTimestamp-c909c985.js"
import{g as B,a as x}from"./getTitanString-91fbe81f.js"
function E(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function _(t){return t[2]>s}function k(t,n){return t[2]-n[2]}function y(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function v(s){const o=C({className:"fshTTracker"}),r=j({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return t(o,r),n(r,function(t){return e(t).map(E).filter(_).sort(k).map(y).join("")}(s)),o}function A(t){return a(t.cells[0].children[0].children[0])}function R(t){const{target:n}=t
c("[b]",n)&&function(t){t.previousElementSibling&&b(a(t.previousElementSibling))}(n),c("all",n)&&function(t){const n=t.parentNode.parentNode.parentNode.parentNode,e=T(n.rows,3,0).map(A)
b(e.join())}(n)}function D(t){t.target.classList.contains("fshBl")&&R(t)}function I(t){n(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function L(t){T(t.rows,3,0).forEach(I),n(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function O(t,n){return t.rows.length>1&&n>1}function X(t){t.length>2&&function(t){o(t).filter(O).forEach(L),r(t[1],D)}(t)}function z(t){return $(t.cells[0].children[0])}function H(t,n){t[n[0]]||n[1].coolTime<=s||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function M(t,e){const s=e.split("/")
var o,r,c
n(t.cells[3],(o=Number(a(t.cells[3])),r=Number(s[0]),c=Number(s[1]),`<br><span class="fshBlue"> (${p(B(c-r,o),2)}% Current <br>${p(100*o/c,2)}% Total<br>${x(o,c,r)})`))}function Q(n,e){!function(t){const n=a(t.cells[2]);-1===n.indexOf("-")&&M(t,n)}(e),function(t,n){const e=z(n).replace(" (Titan)","")
if(!t[e]){const s=a(n.nextElementSibling.cells[0])
let o=0
s.includes("until")&&(o=S(s.replace("Cooldown until: ",""))),t[e]={cooldownText:s,coolTime:o,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(z(n)),s=n.cells[0].children[0],o=N({href:`${d}creatures&search_name=${e}`,target:"_blank"})
t(o,s),t(n.cells[0],o)
const r=n.cells[1],c=a(r)
h(`<a href="${d}realms&search_name=${c}" target="_blank">${c}</a>`,r)}(e)}function U(n){const s=i(u,f)
X(s)
const o={}
!function(t,n){T(t.rows,4,0).forEach(m(Q,n))}(s[1],o),function(t,n){t&&e(t).forEach(m(H,n))}(n,o),function(n,e){if(n.rows.length>5){const s=v(e),o=n.insertRow(5).insertCell(-1)
o.colSpan=3,t(o,s)}}(s[0],o),w("fsh_titans",o)}export default function(){l()||g("fsh_titans").then(U)}
//# sourceMappingURL=injectScouttower-37716584.js.map
