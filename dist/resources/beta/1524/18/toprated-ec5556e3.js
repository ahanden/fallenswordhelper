import{v as t,g as n,p as e,d as r,a8 as s,s as i,D as a,i as o,ah as c,Q as l,al as u,S as f,bp as d,b as m,o as p,j as h,aU as v}from"./calfSystem-4197cc22.js"
import{i as g}from"./isArray-32682e84.js"
import{p as j}from"./playerName-8ec525d6.js"
import{c as y}from"./createInput-c03bcf66.js"
import{o as b}from"./onlineDot-0ae53ca5.js"
import{c as _}from"./currentGuildId-2aaee988.js"
import"./intValue-202eff7d.js"
import"./valueText-cddc877a.js"
import{c as w,b as N,p as L}from"./levelHighlight-b42c75aa.js"
import"./insertElementBefore-fe70cd72.js"
import{i as S}from"./insertElementAfterBegin-aa3c6e65.js"
import{c as C}from"./createSpan-537a8929.js"
import{h as E}from"./hideElement-f08b19df.js"
import"./all-5f4a0555.js"
import{a as P}from"./allthen-634cf4ca.js"
import{f as F}from"./functionPasses-8be4f6e3.js"
import{g as O}from"./guild-0ca0875d.js"
function T(n){return function(n){return t({cmd:"findplayer",subcmd:"view",search_username:n})}(n)}function x(t){return function(t){return O({subcmd:"view",guild_id:t})}(t)}function H(t){return[t,s(t),(n=t,n.rows[0].cells[0].children[0]?Number(/guild_id=(\d+)/.exec(n.rows[0].cells[0].children[0].href)[1]):-1)]
var n}function k(t,n){return n[0]===t[2]}function A(t,n){const e=t.find(i(k,n))
return e?e[1].push(n):t.push([n[2],[n]]),t}function B(t,n){return n[0]===t}function D(t,n){let e=n[0]
n[1].length<5&&(e=-1)
const r=t.find(i(B,e))
return r?r[1]=r[1].concat(n[1]):t.push([e,n[1]]),t}function I(t,n,e){const r=function(t,n){return t?n[t]:n}(t,e)
if(!n[r])return n[r]=!0,!0}let M,U
const W=[()=>M,t=>c(t)||t!==U,(t,n)=>n.last_login>=l-604800,(t,n)=>n.virtual_level>=N,(t,n)=>n.virtual_level<=L]
function G(t,n,e){o(t.rows[0],`<td>${b({last_login:e.last_login})}</td>`),function(t,n){return W.every(e=>e(t,n))}(n,e)&&t.parentNode.parentNode.classList.add("lvlHighlight")}let Q
function V(){E(Q)}function $(t,n){G(t[0],t[2],{last_login:String(n.last_activity),virtual_level:n.vl})}function q(t,n){return n.name===t[1]}function z(t,n){const e=t.find(i(q,n))
e&&$(n,e)}function J(t,n){n.s&&g(n.r)&&$(t,n.r[0])}function K(t,n){n.s&&$(t,{last_activity:l-n.r.last_activity,vl:n.r.virtual_level})}function R(t){return-1!==t[0]}function X(t,n){return t.concat(n.members)}function Y(t,n){const e=(r=n.r.ranks,s="id",r.filter(i(I,s,{}))).reduce(X,[])
var r,s
t[1].forEach(i(z,e))}function Z(t,n){n.s&&Y(t,n)}function tt(t){return x(t[0]).then(i(Z,t))}function nt(t){return-1===t[0]}function et(t){return t[1]!==j()?T(t[1]).then(i(J,t)):d().then(i(K,t))}function rt(){const t=n(r,e).slice(4).map(H).reduce(A,[]).reduce(D,[])
let s=t.filter(R).map(tt)
t.find(nt)&&(s=s.concat(t.find(nt)[1].map(et))),P(s,V)}function st(t){var n
f("toprated","FindOnlinePlayers"),n=t.target,u(n),Q=C({className:"fshCurveContainer fshTopListSpinner",innerHTML:'<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>'}),n.parentNode.replaceChild(Q,n),M=a("highlightPlayersNearMyLvl"),M&&(w(),U=_()),rt()}const it=[()=>h(),()=>v(e),()=>v(e.children[0]),()=>v(e.children[0].rows),()=>e.children[0].rows.length>2,()=>s(e.children[0].rows[1]).startsWith("Last Updated")]
export default function(){it.every(F)&&function(){const t=m("td",e)[0]
t.children[0].className="fshTopListWrap"
const n=y({id:"fshFindOnlinePlayers",className:"custombutton tip-static",type:"button",value:"Find Online Players",dataset:{tipped:"Fetch the online status of the top 250 players (warning ... takes a few seconds)."}})
S(t,n),p(n,st)}()}
//# sourceMappingURL=toprated-ec5556e3.js.map
