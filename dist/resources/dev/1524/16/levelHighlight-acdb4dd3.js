import{D as t,E as n,F as r,G as e}from"./calfSystem-d49dbbd3.js"
import{i as s}from"./intValue-2ed328c8.js"
import{v as u}from"./valueText-064e4f1c.js"
let f,i,a,o
const c=[t=>{if(t>=801)return 100},t=>{if(t>=752)return t-701},t=>{if(t>=351)return 50},t=>{if(t>=326)return t-301},()=>25]
function l(t){return t-function(t){return c.find(n=>n(t))(t)}(t)}function m(){const c=t(n)||s(u(r(e)))
f=function(t){let n=10
return t<=209&&(n=t-200),t<=205&&(n=5),t-n}(c),i=function(t){let n=10
return t<200&&(n=5),t+n}(c),a=l(c),o=function(t){let n=100
return t<=700&&(n=50),t<=300&&(n=25),t+n}(c)}export{a,f as b,m as c,o as g,i as p}
//# sourceMappingURL=levelHighlight-acdb4dd3.js.map