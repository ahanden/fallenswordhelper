import{x as t,m as s,i as a,h as e,p as c,o,y as n,R as f}from"./calfSystem-4cc738f8.js"
import{g as r}from"./getInventoryById-068bca44.js"
import{g as m}from"./getArrayByClassName-cef24a4c.js"
let i,l
function p(t){const s=t.id.replace(l+"-item-","")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=m("selectable-item",n(l+"-items"))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(c,n),o(n,h)}function y(s){t()||(l=s,r().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-1303d03e.js.map
