import{t as n,a as t}from"./calfSystem-d3f0a380.js"
const o={}
let s=-1
function c(n,o){t(3,o.func,[n])}function f(t,s){if(console.log("publish",t),o[t])return o[t].forEach(n(c,s)),!0}function r(n,t){o[n]||(o[n]=[]),s+=1
const c=s.toString()
return o[n].push({token:c,func:t}),c}function u(n,t){return o[n]?o[n][0].token:r(n,t)}export{u as a,f as p,r as s}
//# sourceMappingURL=pubsub-7b254bf3.js.map
