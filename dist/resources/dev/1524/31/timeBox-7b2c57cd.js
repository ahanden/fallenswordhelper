import{J as e,a5 as t,az as a}from"./calfSystem-393ab895.js"
import{i as r}from"./intValue-e7ef611d.js"
import{v as s}from"./valueText-89c9d82f.js"
import{p as o}from"./padZ-4bdbf4bf.js"
function n(t){return r(s(e(t)))}function f(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,f as t}
//# sourceMappingURL=timeBox-7b2c57cd.js.map