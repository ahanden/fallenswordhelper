import{m as t,k as s,f as a,a as e,s as n,$ as r,z as i,i as c,w as l,b as o,p as d,c as f,aD as u,F as m,a4 as p,a8 as h,A as v}from"./calfSystem-8b6534a5.js"
import{a as b}from"./addCommas-02f70763.js"
import"./currentGuildId-4a8535f4.js"
import"./idb-abce8d8d.js"
import{c as g}from"./createTable-e198f036.js"
import"./all-a74f4d72.js"
import{a as j}from"./allthen-fc452f77.js"
import"./indexAjaxJson-b43ddbcc.js"
import{i as y}from"./insertHtmlAfterEnd-4546785f.js"
import"./cmdExport-a4cd29b8.js"
import{l as B}from"./loadDataTables-388b4b0b.js"
import{g as C}from"./guild-99cf1fdb.js"
import{g as S}from"./getMembrList-fd92f287.js"
import{r as w}from"./replaceChild-54a91480.js"
function D(s){return t("tfoot",s)}function T(t){return function(t){return C({subcmd:"advisor",subcmd2:"view",period:t})}(t)}const k=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function R(t,s){return s[t]?`<a href="${r}${s[t].id}">${t}</a>`:t}function x(t,s){return s[t]?s[t].level:""}function A(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function G(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:k,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function E(t,s){e(3,n(w,t,s))}function F(t,r,i){const c=s(),l=g({className:"fshDataTable fshXSmall hover"})
return a(c,l),a(l,r),e(3,G,[l,i,n(E,c,t)]),c}function L(t,s,a){return c(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function M(t,s){return T(s).then(n(L,t,s))}function N(t,s,a){return s+t[a]}function H(t,s,a){return{...s,stats:s.stats.map(n(N,t[a].stats))}}function J(t,s){return t.map(n(H,s))}function P(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function X(t,s){return s.stats.map(n(N,t))}function q(t,s){return`${t}<td><u>${s}</u></td>`}function z(t,s){const a=s.stats.map(b)
return[R(s.player.name,t),x(s.player.name,t),A(s.player.name,t)].concat(a)}function I(t,[s,...a]){const e=function(t){return t.slice(1).reduce(J,t[0]).map(P)}(a)
F(t,function(t){return D({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(X,t[0].stats).map(b).reduce(q,"")}</tr>`})}(e),e.map(n(z,s)))}function O(t,s){return 0===s?h(t):v(t)}function W(t,s){const a=u(s.cells,O)
return a.splice(0,1,R(a[0],t),x(a[0],t),A(a[0],t)),a}function _(t,s){const e=function(t,s){return u(t.rows).slice(1,-1).map(n(W,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=D()
a(e,s)
const n=s.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),e}(t)
F(t,r,e),function(){const t=m("custombutton",d)
0!==t.length&&y(t[0],`<span> <a href="${p}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}()}function K(t){"weekly"===f.subcmd2?function(t){i('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[S(!1)].concat([1,2,3,4,5,6,7].map(n(M,t)))
j(s,n(I,t))}(t):S(!1).then(n(_,t))}export default function(){if(l())return
const t=o("table",d)[1]
t&&B().then(()=>K(t))}
//# sourceMappingURL=guildAdvisor-0eeff3a0.js.map
