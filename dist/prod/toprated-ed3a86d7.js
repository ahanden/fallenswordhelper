import{y as n,aI as t,g as e,p as r,c as a,bi as s,v as i,G as o,b3 as c,i as l,am as u,aw as f,aq as d,T as h,n as p,a0 as m,ac as v,bE as b,a7 as g,b as y,m as _,o as w,j,b4 as N}from"./calfSystem-3956a623.js"
import{i as L}from"./isArray-03eca71a.js"
import{c as C}from"./createInput-f6e26d5e.js"
import{o as F}from"./onlineDot-b559f6bb.js"
import{c as O,b as P,p as S}from"./levelHighlight-4d0b938d.js"
import"./all-0781ab5a.js"
import{a as T}from"./allthen-a3d20eb3.js"
function E(t){return function(t){return n({cmd:"findplayer",subcmd:"view",search_username:t})}(t)}function H(n){return function(n){return t({subcmd:"view",guild_id:n})}(n)}function k(n){return[n,s(n),(t=n,t.rows[0].cells[0].children[0]?Number(/guild_id=(\d+)/.exec(t.rows[0].cells[0].children[0].href)[1]):-1)]
var t}function x(n,t){return t[0]===n[2]}function I(n,t){const e=n.find(i(x,t))
return e?e[1].push(t):n.push([t[2],[t]]),n}function M(n,t){return t[0]===n}function W(n,t){let e=t[0]
t[1].length<5&&(e=-1)
const r=n.find(i(M,e))
return r?r[1]=r[1].concat(t[1]):n.push([e,t[1]]),n}function q(n,t,e){const r=function(n,t){return n?t[n]:t}(n,e)
if(!t[r])return t[r]=!0,!0}let A,D
const G=[()=>A,n=>u(n)||n!==D,(n,t)=>t.last_login>=f-604800,(n,t)=>t.virtual_level>=P,(n,t)=>t.virtual_level<=S]
function U(n,t,e){l(n.rows[0],`<td>${F({last_login:e.last_login})}</td>`),function(n,t){return G.every(e=>e(n,t))}(t,e)&&n.parentNode.parentNode.classList.add("lvlHighlight")}let $
function z(){p($)}function B(n,t){U(n[0],n[2],{last_login:String(t.last_activity),virtual_level:t.vl})}function J(n,t){return t.name===n[1]}function K(n,t){const e=n.find(i(J,t))
e&&B(t,e)}function Q(n,t){t.s&&L(t.r)&&B(n,t.r[0])}function R(n,t){t.s&&B(n,{last_activity:f-t.r.last_activity,vl:t.r.virtual_level})}function V(n){return-1!==n[0]}function X(n,t){return n.concat(t.members)}function Y(n,t){const e=(r=t.r.ranks,a="id",r.filter(i(q,a,{}))).reduce(X,[])
var r,a
n[1].forEach(i(K,e))}function Z(n,t){t.s&&Y(n,t)}function nn(n){return H(n[0]).then(i(Z,n))}function tn(n){return-1===n[0]}function en(n){return n[1]!==v()?E(n[1]).then(i(Q,n)):b().then(i(R,n))}function rn(){const n=e(a,r).slice(4).map(k).reduce(I,[]).reduce(W,[])
let t=n.filter(V).map(nn)
n.find(tn)&&(t=t.concat(n.find(tn)[1].map(en))),T(t,z)}function an(n){var t
m("toprated","FindOnlinePlayers"),t=n.target,d(t),$=h({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),t.parentNode.replaceChild($,t),A=o("highlightPlayersNearMyLvl"),A&&(O(),D=c()),rn()}const sn=[()=>j(),()=>N(r),()=>N(r.children[0]),()=>N(r.children[0].rows),()=>r.children[0].rows.length>2,()=>s(r.children[0].rows[1]).startsWith("Last Updated")]
export default function(){sn.every(g)&&function(){const n=y("td",r)[0]
n.children[0].className="fshTopListWrap"
const t=C({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
_(n,t),w(t,an)}()}
//# sourceMappingURL=toprated-ed3a86d7.js.map
