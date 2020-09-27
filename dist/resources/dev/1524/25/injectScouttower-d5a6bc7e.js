import{h as t,i as n,e,a7 as o,M as s,o as r,l as c,ba as a,B as l,x as i,b as f,p as u,d as m,t as d,at as h,A as p}from"./calfSystem-69dd5601.js"
import"./numberIsNaN-929de7af.js"
import"./round-fcc0b278.js"
import{r as b}from"./roundToString-57efc303.js"
import"./fshOpen-4f280086.js"
import{o as T}from"./openQuickBuffByName-a66e5d09.js"
import{d as g}from"./dataRows-88052c7e.js"
import{g as j,s as w}from"./idb-874fe815.js"
import{c as C}from"./createTBody-c786127c.js"
import{c as N}from"./createTable-ba9c0bc4.js"
import{c as $}from"./createAnchor-e92f73d4.js"
import{g as B}from"./getTitle-d7dce018.js"
import{p as S}from"./parseDateAsTimestamp-02f5c147.js"
import{g as x,a as E}from"./getTitanString-f26f8e4b.js"
function _(t){return[t[0],t[1].cooldownText,t[1].coolTime,t[1].seen]}function k(t){return t[2]>o}function y(t,n){return t[2]-n[2]}function v(t){return`<tr><td class="fshCenter">${t[0]}</td><td class="fshBold fshCenter fshCooldown">${t[1]}</td><td class="fshCenter">${t[3]}</td></tr>`}function A(o){const s=N({className:"fshTTracker"}),r=C({innerHTML:'<tr><td class="header fshCenter">Titan</td><td class="header fshCenter">Cooldown</td><td class="header fshCenter">Visible</td></tr>'})
return t(s,r),n(r,function(t){return e(t).map(_).filter(k).sort(y).map(v).join("")}(o)),s}function R(t){return l(t.cells[0].children[0].children[0])}function I(t){const{target:n}=t
a("[b]",n)&&function(t){t.previousElementSibling&&T(l(t.previousElementSibling))}(n),a("all",n)&&function(t){const n=t.parentNode.parentNode.parentNode.parentNode,e=g(n.rows,3,0).map(R)
T(e.join())}(n)}function M(t){c("fshBl",t.target)&&I(t)}function O(t){n(t.cells[0],' <button class="fshBl fshXSmall">[b]</button>')}function X(t){g(t.rows,3,0).forEach(O),n(t.rows[0].cells[0],' <button class="fshBl fshXSmall">all</button>')}function D(t,n){return t.rows.length>1&&n>1}function H(t){t.length>2&&function(t){s(t).filter(D).forEach(X),r(t[1],M)}(t)}function L(t){return B(t.cells[0].children[0])}function Q(t,n){t[n[0]]||n[1].coolTime<=o||(t[n[0]]={cooldownText:n[1].cooldownText,coolTime:n[1].coolTime,seen:"no"})}function U(t,e){const o=e.split("/")
var s,r,c
n(t.cells[3],(s=Number(l(t.cells[3])),r=Number(o[0]),c=Number(o[1]),`<br><span class="fshBlue"> (${b(x(c-r,s),2)}% Current <br>${b(100*s/c,2)}% Total<br>${E(s,c,r)})`))}function V(n,e){!function(t){const n=l(t.cells[2]);-1===n.indexOf("-")&&U(t,n)}(e),function(t,n){const e=L(n).replace(" (Titan)","")
if(!t[e]){const o=l(n.nextElementSibling.cells[0])
let s=0
o.includes("until")&&(s=S(o.replace("Cooldown until: ",""))),t[e]={cooldownText:o,coolTime:s,seen:"yes"}}}(n,e),function(n){const e=encodeURIComponent(L(n)),o=n.cells[0].children[0],s=$({href:`${h}creatures&search_name=${e}`,target:"_blank"})
t(s,o),t(n.cells[0],s)
const r=n.cells[1],c=l(r)
p(`<a href="${h}realms&search_name=${c}" target="_blank">${c}</a>`,r)}(e)}function q(n){const o=f(m,u)
H(o)
const s={}
!function(t,n){g(t.rows,4,0).forEach(d(V,n))}(o[1],s),function(t,n){t&&e(t).forEach(d(Q,n))}(n,s),function(n,e){if(n.rows.length>5){const o=A(e),s=n.insertRow(5).insertCell(-1)
s.colSpan=3,t(s,o)}}(o[0],s),w("fsh_titans",s)}function z(){i()||j("fsh_titans").then(q)}export default z
//# sourceMappingURL=injectScouttower-d5a6bc7e.js.map
