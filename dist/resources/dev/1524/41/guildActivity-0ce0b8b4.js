import{d as t,l as a}from"./lastActivityToDays-9250b62d.js"
import{V as s,a6 as e,t as n}from"./calfSystem-817ceb25.js"
import{u as m,a as i,c as r,m as o,l as c,v as l,g as u}from"./indexConstants-120a0739.js"
import{g as f,s as d}from"./idb-104727d0.js"
import"./guild-90cfec83.js"
let b,p
function v(t){b.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[l],(t,a)=>a.guild_xp!==t[u]]
function g(t,a,s){return s(t,a)}function h(t,e){!function(t,a){return _.some(n(g,t,a))}(t,e)?(t[i]=a(e.last_activity),t[m]=s):v(e)}function y(t,a){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(a)
const e=b.members[a.name],n=e[e.length-1]
s-n[m]>=86100&&h(n,a),t.members[a.name]=b.members[a.name]}function x(t,a){a.members.forEach(n(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:s,members:{}}
p.r.ranks.forEach(n(x,t)),d("fsh_guildActivity",t)}())}function A(a){b=a||{lastUpdate:0,members:{}},s>e(b.lastUpdate,0)+300&&t().then(j)}function U(){f("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-0ce0b8b4.js.map
