import{x as s,o as a,p as e,i as t,C as n,aC as o,t as r,g as i,Q as f,aD as l,A as c}from"./calfSystem-393ab895.js"
import{c as m}from"./closestTable-820f3aaf.js"
import{d as p}from"./dialog-d161529e.js"
import"./closest-77701dcf.js"
import"./dialogMsg-844edf4e.js"
function d(s){const a=l(s)
let e={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(e={r:0,m:""}),e}function g(s,a){0===a.r&&c('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const e=a.parentNode.href;(t=e,o(t).then(d).then(p)).then(r(g,a))}var t
"sendLink"===a.className&&i("img",e).forEach(f)}function u(){s()||(a(e,h),t(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-35b8cc35.js.map
