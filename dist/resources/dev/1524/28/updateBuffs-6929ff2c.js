import{C as t,m as e,g as r,G as s,M as n,y as o}from"./calfSystem-b136673a.js"
import{n as a}from"./numberIsNaN-91041dcf.js"
import{s as i}from"./setTipped-e5305fe4.js"
import{t as f}from"./textNodes-179114f5.js"
const p=98,c=85,m=60
function u(t){return Number(n(o("stat-"+t.toLowerCase()).childNodes).filter(f).map(s).join(""))}function d(t){const n=e({innerHTML:t.dataset.tipped}),o=r("b",n).map(t=>s(t)),f=u(o[2])
a(f)||function(t,e,r){const s=u(e[3]),n=Math.floor(r*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(n)}<br>${e[2]}: ${String(r-n)}&nbsp;&nbsp;${e[3]}: ${String(s+n)}$&`),t)}(t,o,f)}function b(e){const r=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
r&&d(r)}function g(){[p,c,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-6929ff2c.js.map
