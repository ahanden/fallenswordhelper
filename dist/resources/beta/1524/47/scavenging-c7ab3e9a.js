import{c as t}from"./closestTable-4592ae11.js"
import{c as n}from"./createSpan-8ddb7122.js"
import{z as e,h as o,f as s,t as c,B as r,C as a,Z as i,bA as u,aN as f,m,p as l,e as b,bB as d}from"./calfSystem-db2edbef.js"
import{i as p}from"./intValue-e4ce6bb5.js"
import{n as g}from"./numberIsNaN-2f104aa2.js"
import"./closest-4542e515.js"
function h(t,n,e){r("",t)
const o=Number(e.value)
g(o)||0===o||function(t,n,e){const o=p(a(n)),s=Math.floor(o/e).toString()
r(`&nbsp;&nbsp;Max: ${s} times`,t)}(t,n,o)}function $(t,n,e){t&&h(t,n,e)}function j(r){!function(n){t(n).removeAttribute("width")}(r),function(t,n,e){const o=c($,t,n,e)
o(),s(e,"keyup",o)}(function(t){const e=n()
return o(t.parentNode,e),e}(r),e("statbar-gold"),e("gold"))}let v
function N(t,n){const e=n.match(/>([^<]+)</)[1]
return t[e]=(t[e]||0)+1,t}function S(t,n){return d(t[0],n[0])}function M(t){return`<br>${t[1]} ${t[0]}(s), `}function _(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${b(n).sort(S).map(M).join("")}`}function q(){let t=""
const n=e("scavenge_results")
if(n){const e=n.innerHTML
t+=function(t){const n=t.match(/victorious/g)
return n?`Victories: ${n.length}`:""}(e),t+=function(t){const n=t.match(/defeated/g)
return n?`, Defeated: ${n.length}`:""}(e),t+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
return n?_(n):""}(e)}return t}function x(t){return function(n,e,s){t(n,e,s),i("lastScavPage",`${u}scavenging&cave_id=${s}&gold=${e}`),r(q(),(v||(v=m(),o(l,v)),r("",v),v))}}function y(){!function(){const t=sendRequest
f(t)&&(sendRequest=x(t))}(),function(){const t=e("multiplier_count")
t&&j(t)}()}export default y
//# sourceMappingURL=scavenging-c7ab3e9a.js.map
