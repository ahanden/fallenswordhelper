import{G as t,R as s,v as a,o as n,a4 as e,bm as o,bk as l,ar as c,i}from"./calfSystem-07c25a1c.js"
import{d as r}from"./dataRows-ce49235e.js"
let f,u
function b(t,s,a){"Chat"===s&&a&&function(t){i(t.cells[1],' <button class="fshBl fshBls">[b]</button>')}(t)}function h(t,s,a){let n=!0
const e=o(l(a.cells[s])),c=(f-e)/6e4
e>u?a.classList.add("fshNr"):function(t,s){return t>20&&s<=u}(c,e)&&(a.classList.add("fshOr"),n=!1),b(a,t,n)}function m(t){var s;(s=t.target).classList.contains("fshBl")&&s.previousElementSibling&&c(l(t.target.previousElementSibling))}function p(s,o,l){f=(new Date).setUTCSeconds(0,0)-1
const c=`last${s}Check`
u=function(s){return t(s)||f}(c),r(l.rows,3,0).forEach(a(h,s,o)),n(l,m),e(c,f)}function C(a,n){if(!t("enableLogColoring"))return
const e=function(){let t=s("#pCC table table table table")
return t||(t=s("#pCC > table:last-of-type")),t}()
e&&p(a,n,e)}export{C as a}
//# sourceMappingURL=addLogColoring-38e2eb06.js.map