import{y as t,h as n,f as o,t as e,A as s,B as c,Z as r,bF as a,aj as i,m as u,p as f,e as m}from"./calfSystem-4991bf5b.js"
import{n as l}from"./numberIsNaN-a6bcb044.js"
import"./toLowerCase-b21b7cc8.js"
import{i as b}from"./intValue-e4cdd281.js"
import{a as p}from"./alpha-3f5d4865.js"
import{c as d}from"./createSpan-7856b9fc.js"
import"./closest-c2515a48.js"
import{c as g}from"./closestTable-f07eb75c.js"
function h(t,n,o){s("",t)
const e=Number(o.value)
l(e)||0===e||function(t,n,o){const e=b(c(n)),r=Math.floor(e/o).toString()
s(`&nbsp;&nbsp;Max: ${r} times`,t)}(t,n,e)}function j(t,n,o){t&&h(t,n,o)}function $(s){!function(t){g(t).removeAttribute("width")}(s),function(t,n,s){const c=e(j,t,n,s)
c(),o(s,"keyup",c)}(function(t){const o=d()
return n(t.parentNode,o),o}(s),t("statbar-gold"),t("gold"))}let v
function N(t,n){const o=n.match(/>([^<]+)</)[1]
return t[o]=(t[o]||0)+1,t}function S(t,n){return p(t[0],n[0])}function y(t){return`<br>${t[1]} ${t[0]}(s), `}function M(t){const n=function(t){return t.reduce(N,{})}(t)
return`<br>${t.length} item(s):${m(n).sort(S).map(y).join("")}`}function _(){let n=""
const o=t("scavenge_results")
if(o){const t=o.innerHTML
n+=function(t){const n=t.match(/victorious/g)
return n?"Victories: "+n.length:""}(t),n+=function(t){const n=t.match(/defeated/g)
return n?", Defeated: "+n.length:""}(t),n+=function(t){const n=t.match(/Item Gained: <b>[^<]+<\/b>/g)
if(n)return M(n)}(t)}return n}function q(t){return function(o,e,c){t(o,e,c),r("lastScavPage",`${a}scavenging&cave_id=${c}&gold=${e}`),s(_(),(v||(v=u(),n(f,v)),s("",v),v))}}function w(){!function(){const t=sendRequest
i(t)&&(sendRequest=q(t))}(),function(){const n=t("multiplier_count")
n&&$(n)}()}export default w
//# sourceMappingURL=scavenging-00ad54b2.js.map
