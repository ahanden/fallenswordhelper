import{t,u as e,N as n,a3 as r,a4 as i,ak as a,k as s,b4 as c,bp as l,z as d,p as o,s as u,at as m,as as f,bq as h}from"./calfSystem-d49dbbd3.js"
import{d as p}from"./dataRows-9b520c39.js"
import{p as b}from"./padZ-004f73b4.js"
import"./closest-c1f1e24c.js"
import{c as $}from"./closestTable-dc4f2fff.js"
import"./all-042a202c.js"
import{a as N}from"./allthen-d63ed67c.js"
import{t as v}from"./textNodes-252f5396.js"
import{s as g}from"./splitTime-f8892642.js"
function j(e){return t({cmd:"guild",subcmd:"reliclist",page:e})}function _(t){const e=s({innerHTML:t}),n=function(t){const e=i(t).match(/(.*) \((\d+), (\d+)\)/)
return{name:e[1],x:Number(e[2]),y:Number(e[3])}}(e.children[1]),a=Number(i(e.children[2]).match(/(\d+)/)[1]),d=function(t){return r(t.childNodes).filter(v).map(i).map(t=>t.split(" "))}(e)
return{attributes:function(t){return t.filter(t=>c.includes(t[1])).map(t=>({id:c.indexOf(t[1]),is_percent:t[0].endsWith("%"),value:parseInt(t[0],10)}))}(d),enhancements:function(t){return t.filter(t=>l.includes(t[1])).map(t=>({id:l.indexOf(t[1]),value:Number(t[0])}))}(d),location:n,min_level:a}}function x(t){const e=function(t){const e=t.cells[0].children[0],n=_(e.dataset.tipped)
return{attributes:n.attributes,enhancements:n.enhancements,id:Number(e.src.match(/\/(\d+)\.gif/)[1]),location:n.location,min_level:n.min_level,name:i(t.cells[1].children[0])}}(t),n=function(t){const e=t.match(/(\d+) days, (\d+) hours, (\d+) mins, (\d+) secs/)
if(e)return 24*Number(e[1])*60*60+60*Number(e[2])*60+60*Number(e[3])+Number(e[4])}(i(t.cells[3]))
return a(n)||(e.time=n,e.guild=function(t){const e=t.children[0].rows[0].cells[1].children[0]
return{id:e.href.match(/&guild_id=(\d+)/)[1],name:i(e)}}(t.cells[2])),e}function y(t){const e=n(".header",t),r=$(e)
return p(r.rows,4,0).map(x)}function G(t){const n=t.map(e).map(y)
return[].concat(...n)}function k(t){const i=e(t),a=n('#pCC select[name="page"]',i),s=r(a.children).map(t=>Number(t.value)).filter(t=>0!==t)
return N([t].concat(s.map(j)),G)}function w(t,e){return e.id===t}function C(t){return t.attributes&&t.attributes.find(u(w,6))}function T(t,e){if(t){const n=t.find(u(w,e))
if(n)return n.value}return""}function L(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${m}relics${f}view&relic_id=${t.id}">`+t.name+"</a>"}(t)}</td><td>${n=t.guild,n?`<a href="${h}${n.id}">${n.name}</a>`:""}</td><td>${e=t.attributes,[6,0,4,5,7,8].map(u(T,e)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const e=g(t)
return`${b(e[0])}d ${b(e[1])}h ${b(e[2])}m ${b(e[3])}s`}(t.time)}</td></tr>`
var e,n}function S(t){t.sort((t,e)=>t.min_level-e.min_level),d(function(t){return`<style>#pCC .reliclist {border-collapse: collapse; border-spacing: 0;}.reliclist, .reliclist th, .reliclist td {border: 1px solid black;}.reliclist th, .reliclist td {padding: 5px;}</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(C).map(L).join("")}</tbody></table>`}(t),o)}export default function(){d("Loading...",o),j(0).then(k).then(S)}
//# sourceMappingURL=reliclist-bc2d6441.js.map