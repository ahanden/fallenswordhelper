import{u as n,v as t,x as e,$ as r}from"./calfSystem-817ceb25.js"
import{g as s,b as u}from"./getBuff-1bc393fe.js"
function a(n){const t=s(n)
return t?t.id:-1}function c(n,t){const e=(r=t)[3]||r[6]||r[7]
var r
let s=n.find((n=>n.player.name===e))
return s||(s={player:{name:e},casts:[],failed:[]},n.push(s)),t[1]?s.casts.push((n=>({id:a(n[1]),level:Number(n[2])}))(t)):s.failed.push(function(n){return n[4]?{id:a(n[4]),reason:n[5]}:{id:a(n[9]),reason:n[8]}}(t)),n}function i(n){return function(n){return{r:n.reduce(c,[]),s:!0}}(u(t(n)))}function f(t,e){return n({cmd:"quickbuff",subcmd:"activate",targetPlayers:t.join(),skills:e}).then(i)}function o(n,t){return e({cmd:"quickbuff",subcmd:"activate",username:n,skill:t})}function l(n,t){return r(o,f,n,t)}function d(n){return n.s&&1===n.r[0].casts.length}export{l as d,d as q}
//# sourceMappingURL=quickbuffSuccess-769a9292.js.map
