import{z as s,aR as a,p as t,g as e,v as n,i as c}from"./calfSystem-07c25a1c.js"
import{r}from"./reduceBuffArray-6a70d5c0.js"
const l=/>\s*([ a-zA-Z]+) Level (\d+)/g,o=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function i(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(l)].filter(a=>s[a[1]]===Number(a[2]))
e.length>0&&c(a.parentNode,e.map(o).join(""))}function f(s){if(0!==s._skills.length){!function(s){const a=t.children[0].rows[9]
a&&e("a",a.cells[0].children[0]).forEach(n(i,s))}(r(s._skills))}}export default function(){s()||a(!0).then(f)}
//# sourceMappingURL=injectRPUpgrades-59879fd9.js.map