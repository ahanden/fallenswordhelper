import{c as t}from"./closestTable-46dcc06e.js"
import{c as n}from"./createSpan-cad7f112.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,_ as i,bv as u,aA as f,m,p as d,e as l}from"./calfSystem-71efcdd9.js"
import{i as p}from"./intValue-ba9b9e5a.js"
import{n as b}from"./numberIsNaN-30cde299.js"
import{a as g}from"./alpha-f430aa22.js"
import"./closest-4ebdb6d3.js"
import"./toLowerCase-b0c4634d.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
b(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return g(t[0],n[0])}function _(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${l(n).sort(S).map(_).join("")}`}function q(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(e)}return t}function w(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(q(),(v||(v=m(),o(d,v)),r("",v),v))}}function x(){!function(){const t=sendRequest
f(t)&&(sendRequest=w(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default x
//# sourceMappingURL=scavenging-f554a463.js.map
