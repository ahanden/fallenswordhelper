import{g as t}from"./guild-b0e3687a.js"
import{B as i,p as n,t as r,aO as e,aF as l,aW as a}from"./calfSystem-d3f0a380.js"
import{p as s}from"./padZ-aa6c487e.js"
import{s as d}from"./splitTime-348bc287.js"
async function c(i=0,n=100){const r=await function(i,n,r){const e={subcmd:"reliclist",offset:n,limit:r}
return i&&(e.guild_id=i),t(e)}(null,i,n)
return r.r.remaining_relics?r.r.relics.concat(await c(i+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function o(t,i){return i.id===t}function h(t){return t.attributes&&t.attributes.find(r(o,6))}function u(t,i){if(t){const n=t.find(r(o,i))
if(n)return n.value}return""}function f(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${e}relics${l}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${n=t.guild,n?`<a href="${a}${n.id}">${n.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(r(u,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=d(t)
return`${s(i[0])}d ${s(i[1])}h ${s(i[2])}m ${s(i[3])}s`}(t.time)}</td></tr>`
var i,n}function m(t){t.sort(((t,i)=>t.min_level-i.min_level)),i(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(h).map(f).join("")}</tbody></table>`}(t),n)}function p(){i("Loading...",n),c().then(m)}export default p
//# sourceMappingURL=reliclist-d7f28ff7.js.map
