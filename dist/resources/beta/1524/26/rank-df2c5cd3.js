import{q as n,C as t,o as r,t as e,i as s,h as o,B as a,a7 as i,H as c,p as u,x as f,e as p,M as d}from"./calfSystem-cf4d22a7.js"
import"./numberIsNaN-a6bcb044.js"
import{a as m}from"./roundToString-92a6300c.js"
import{p as l}from"./playerName-b9ef36e6.js"
import{t as h}from"./toLowerCase-b21b7cc8.js"
import{c as b}from"./createInput-6dbf94aa.js"
import{b as g}from"./batch-952c9055.js"
import{i as j}from"./insertElementBefore-47c09359.js"
import"./currentGuildId-5763962b.js"
import"./idb-4798970d.js"
import{c as w}from"./createSpan-7e967fbf.js"
import"./indexAjaxJson-451a313a.js"
import"./cmdExport-b7dc8f76.js"
import{g as x}from"./guild-740bccac.js"
import{g as N}from"./getMembrList-5556413d.js"
import{r as k}from"./replaceChild-d3a2c39c.js"
import{n as v}from"./notLastUpdate-25ba6d07.js"
import{b as C}from"./bitwiseAnd-a124d85c.js"
function S(t){return x(n({subcmd:"ranks"},t))}const I=[[2,5],[4,4],[64,5],[256,.1],[512,.2],[4096,.5],[32768,.2],[524288,.1],[65536,5],[4194304,4]]
function y(n,t){const r=t.children[0],e=a(r.firstChild),s=n.find(n=>n.name===e)
var o
s&&i(r,`<span class="fshBlue">(${o=s.permissions,m(I.filter(([n])=>C(o,n)).reduce((n,[,t])=>n+t-1,0)+o.toString(2).split("").map(Number).reduce((n,t)=>n+t,0),1)}) Tax:(${s.tax}%)</span> `)}function B(n,t,r){r.s&&(n.forEach(e(y,[r.r[0]].concat(r.r.ranks))),t.classList.remove("fshSpinner"))}function E(n,t){const r=w({className:"fshBlock fshRelative fshSpinner fshSpinner12",style:{height:"15px",width:"136px"}})
k(r,t),S().then(e(B,n,r))}function L(n){const a=t('#pCC a[href*="=ranks&subcmd2=add"]')
a&&function(n,t){const a=b({className:"custombutton",type:"button",value:"Get Rank Weightings"})
r(a,e(E,n,a))
const i=t.parentNode.parentNode
s(i,"&nbsp;"),o(i,a)}(n,a)}function U(n,t){return function(n,t){return S({subcmd2:n,rank_id:t})}(n,t)}let _
function A(n){const t=n.target.parentNode.parentNode.parentNode,r=t.rowIndex+("Up"===n.target.value?-1:2);(function(n,t){return _>=Math.min(n.rowIndex,t)||t<1||t>n.parentNode.rows.length})(t,r)||function(n,t,r){const e=n.target.getAttribute("onclick").match(/rank_id=(\d+)/)
U(h(n.target.value),e[1])
const s=t.parentNode.rows[r]
j(t,s)
const o="Up"===n.target.value?-22:22
window.scrollBy(0,o),n.stopPropagation()}(n,t,r)}function G(n){(function(n){return["Up","Down"].includes(n.target.value)})(n)&&A(n)}function M(n,t){return t[0]===n}function R(n,t){const r=t.children[0],o=function(n,t){return 1===n.rowIndex?"Guild Founder":a(t)}(t,r),i=n.find(e(M,o));(function(n){return n&&n[1].length>0})(i)&&(!function(n,t){t&&t[1].includes(l())&&(_=n.rowIndex)}(t,i),s(r,` <span class="fshBlue">- ${i[1].join(", ")}</span>`))}function $(n){const t=function(){const n=u.lastElementChild.previousElementSibling
if(n.rows&&n.rows.length>7)return d(n.rows[7].children[0].children[0].rows)}()
t&&(g([5,3,t,1,e(R,n)]),L(t),_&&c("ajaxifyRankControls")&&r(u,G,!0))}function T(n,t){const r=n.find(e(M,t[1].rank_name))
return r?r[1].push(t[0]):n.push([t[1].rank_name,[t[0]]]),n}function q(n){return p(n).filter(v).reduce(T,[])}function D(){f()||N(!1).then(q).then($)}export default D
//# sourceMappingURL=rank-df2c5cd3.js.map
