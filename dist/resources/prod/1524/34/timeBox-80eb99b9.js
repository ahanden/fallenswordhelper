import{J as e,a5 as t,as as a}from"./calfSystem-793da633.js"
import{i as r}from"./intValue-d2a6f461.js"
import{v as s}from"./valueText-23076c84.js"
import{p as o}from"./padZ-d4e02992.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-80eb99b9.js.map