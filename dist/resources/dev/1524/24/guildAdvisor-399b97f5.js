import{n as t,m as s,h as a,a as e,t as n,a2 as r,aX as i,A as l,aY as o,i as c,x as d,b as u,p as f,c as m,M as p,J as v,a9 as h,G as b,B as j}from"./calfSystem-38898f3e.js"
import{a as g}from"./addCommas-6d131931.js"
import"./currentGuildId-7855dbba.js"
import"./idb-ccc44752.js"
import{c as y}from"./createTable-a01b8368.js"
import"./indexAjaxJson-2402e0e9.js"
import"./cmdExport-2f232ad1.js"
import{i as A}from"./insertHtmlAfterEnd-8b82fe39.js"
import"./all-e4fd8fad.js"
import{l as B}from"./loadDataTables-da43d3ec.js"
import"./guild-fea08105.js"
import{a as C}from"./allthen-c22b3f9e.js"
import{g as D}from"./getMembrList-822d0963.js"
import{d as S}from"./daAdvisor-b9d4aa87.js"
import{r as k}from"./replaceChild-35fb1f4f.js"
function T(s){return t("tfoot",s)}const x=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function G(t,s){return s[t]?`<a href="${r}${s[t].id}">${t}</a>`:t}function R(t,s){return s[t]?s[t].level:""}function w(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function M(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:x,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function E(t,s){e(3,n(k,t,s))}function L(t,r,i){const l=s(),o=y({className:"fshDataTable fshXSmall hover"})
return a(l,o),a(o,r),e(3,M,[o,i,n(E,l,t)]),l}function F(t,s,a){return c(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function J(t,s){return S(s).then(n(F,t,s))}function N(t,s,a){return s+t[a]}function W(t,s,a){return{...s,stats:s.stats.map(n(N,t[a].stats))}}function X(t,s){return t.map(n(W,s))}function H(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function P(t,s){return s.stats.map(n(N,t))}function q(t,s){return`${t}<td><u>${s}</u></td>`}function I(t,s){const a=s.stats.map(g)
return[G(s.player.name,t),R(s.player.name,t),w(s.player.name,t)].concat(a)}function O(t,[s,...a]){const e=function(t){return t.slice(1).reduce(X,t[0]).map(H)}(a)
L(t,function(t){return T({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(P,t[0].stats).map(g).reduce(q,"")}</tr>`})}(e),e.map(n(I,s)))}function Y(t,s){return 0===s?b(t):j(t)}function _(t,s){const a=p(s.cells,Y)
return a.splice(0,1,G(a[0],t),R(a[0],t),w(a[0],t)),a}function z(t,s){i("guildAdvisor.injectAdvisorDaily")
const e=function(t,s){return p(t.rows).slice(1,-1).map(n(_,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=T()
a(e,s)
const n=s.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),e}(t)
L(t,r,e),function(){const t=v("custombutton",f)
0!==t.length&&A(t[0],`<span> <a href="${h}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),o("guildAdvisor.injectAdvisorDaily")}function K(t){"weekly"===m.subcmd2?function(t){i("guildAdvisor.injectAdvisorWeekly"),l('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[D(!1)].concat([1,2,3,4,5,6,7].map(n(J,t)))
C(s,n(O,t)),o("guildAdvisor.injectAdvisorWeekly")}(t):D(!1).then(n(z,t))}function Q(){if(d())return
const t=u("table",f)[1]
t&&B().then(()=>K(t))}export default Q
//# sourceMappingURL=guildAdvisor-399b97f5.js.map
