import{x as s,o as a,p as t,i as e,C as n,aB as o,t as r,g as i,Q as l,b8 as c,A as f}from"./calfSystem-02c48ff5.js"
import"./dialogMsg-920f7637.js"
import"./closest-14c30e26.js"
import{c as m}from"./closestTable-d14a96b7.js"
import{d as p}from"./dialog-1967d894.js"
function d(s){const a=c(s)
let t={r:1,m:a}
return"Item was transferred to the guild store!"===a&&(t={r:0,m:""}),t}function g(s,a){0===a.r&&f('<span class="fshGreen">Taken</span>',m(s).nextElementSibling.rows[0].cells[0])}function h(s){const{target:a}=s
if("IMG"===a.tagName){s.preventDefault()
const t=a.parentNode.href;(e=t,o(e).then(d).then(p)).then(r(g,a))}var e
"sendLink"===a.className&&i("img",t).forEach(l)}function u(){s()||(a(t,h),e(n('#pCC td[height="25"]'),'<span class="sendLink">Take All</span>'))}export default u
//# sourceMappingURL=guildMailbox-48f6237a.js.map
