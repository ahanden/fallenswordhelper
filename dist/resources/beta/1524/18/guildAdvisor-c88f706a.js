import{m as t,k as s,f as a,a as e,s as n,$ as r,aW as i,z as c,aX as l,i as o,w as d,b as u,p as f,c as m,aD as p,F as v,a4 as h,a8 as b,A as g}from"./calfSystem-4197cc22.js"
import{a as j}from"./addCommas-519d90bf.js"
import"./currentGuildId-2aaee988.js"
import"./idb-f3252f63.js"
import{c as y}from"./createTable-5f6ce6ed.js"
import"./all-5f4a0555.js"
import{a as A}from"./allthen-634cf4ca.js"
import"./indexAjaxJson-914501b6.js"
import{i as B}from"./insertHtmlAfterEnd-33a3ae32.js"
import"./cmdExport-ccb93370.js"
import{l as C}from"./loadDataTables-cad389d5.js"
import{g as D}from"./guild-0ca0875d.js"
import{g as k}from"./getMembrList-3a22203c.js"
import{r as S}from"./replaceChild-be483e68.js"
function w(s){return t("tfoot",s)}function T(t){return function(t){return D({subcmd:"advisor",subcmd2:"view",period:t})}(t)}const R=[{title:'<div class="fshBold">Member</div>'},{title:'<div class="fshBold">Lvl</div>',class:"dt-center"},{title:'<div class="fshBold">Rank</div>',class:"dt-center dt-nowrap"},{title:'<div class="fshBold">Gold From Deposits</div>',class:"dt-center"},{title:'<div class="fshBold">Gold From Tax</div>',class:"dt-center"},{title:'<div class="fshBold">Gold Total</div>',class:"dt-center"},{title:'<div class="fshBold">FSP</div>',class:"dt-center"},{title:'<div class="fshBold">Skill Cast</div>',class:"dt-center"},{title:'<div class="fshBold">Group Create</div>',class:"dt-center"},{title:'<div class="fshBold">Group Join</div>',class:"dt-center"},{title:'<div class="fshBold">Relic</div>',class:"dt-center"},{title:'<div class="fshBold">XP Contrib</div>',class:"dt-center"}]
function x(t,s){return s[t]?`<a href="${r}${s[t].id}">${t}</a>`:t}function G(t,s){return s[t]?s[t].level:""}function E(t,s){return s[t]?`<div class="fshAdvRank">${s[t].rank_name.trim()}</div>`:""}function F(t,s,a){$(t).DataTable({autoWidth:!1,columnDefs:[{targets:[1,3,4,5,6,7,8,9,10,11],orderSequence:["desc","asc"]}],columns:R,data:s,deferRender:!0,initComplete:a,lengthMenu:[[25,50,-1],[25,50,"All"]],pageLength:25,stateDuration:0,stateSave:!0})}function L(t,s){e(3,n(S,t,s))}function M(t,r,i){const c=s(),l=y({className:"fshDataTable fshXSmall hover"})
return a(c,l),a(l,r),e(3,F,[l,i,n(L,c,t)]),c}function W(t,s,a){return o(t.lastElementChild.lastElementChild,` day ${s},`),a.r}function N(t,s){return T(s).then(n(W,t,s))}function X(t,s,a){return s+t[a]}function H(t,s,a){return{...s,stats:s.stats.map(n(X,t[a].stats))}}function J(t,s){return t.map(n(H,s))}function P(t){return{player:t.player,stats:[t.stats[6],t.stats[7],t.stats[6]+t.stats[7],t.stats[1],t.stats[2],t.stats[3],t.stats[4],t.stats[8],t.stats[5]]}}function q(t,s){return s.stats.map(n(X,t))}function z(t,s){return`${t}<td><u>${s}</u></td>`}function I(t,s){const a=s.stats.map(j)
return[x(s.player.name,t),G(s.player.name,t),E(s.player.name,t)].concat(a)}function O(t,[s,...a]){const e=function(t){return t.slice(1).reduce(J,t[0]).map(P)}(a)
M(t,function(t){return w({innerHTML:`<tr><td class="fshRight" colspan="3">Total: </td>${t.slice(1).reduce(q,t[0].stats).map(j).reduce(z,"")}</tr>`})}(e),e.map(n(I,s)))}function _(t,s){return 0===s?b(t):g(t)}function K(t,s){const a=p(s.cells,_)
return a.splice(0,1,x(a[0],t),G(a[0],t),E(a[0],t)),a}function Q(t,s){i("guildAdvisor.injectAdvisorDaily")
const e=function(t,s){return p(t.rows).slice(1,-1).map(n(K,s))}(t,s),r=function(t){const s=t.rows[t.rows.length-1].cloneNode(!0),e=w()
a(e,s)
const n=s.cells[0]
return n.className="fshRight",n.setAttribute("colspan","3"),e}(t)
M(t,r,e),function(){const t=v("custombutton",f)
0!==t.length&&B(t[0],`<span> <a href="${h}guild&subcmd=advisor&subcmd2=weekly">7-Day Summary</a></span>`)}(),l("guildAdvisor.injectAdvisorDaily")}function U(t){"weekly"===m.subcmd2?function(t){i("guildAdvisor.injectAdvisorWeekly"),c('<span class="fshCurveContainer fshFlex"><span class="fshCurveEle fshCurveLbl fshOldSpinner"></span><span class="fshSpinnerMsg">&nbsp;Retrieving daily data ...</span></span>',t)
const s=[k(!1)].concat([1,2,3,4,5,6,7].map(n(N,t)))
A(s,n(O,t)),l("guildAdvisor.injectAdvisorWeekly")}(t):k(!1).then(n(Q,t))}export default function(){if(d())return
const t=u("table",f)[1]
t&&C().then(()=>U(t))}
//# sourceMappingURL=guildAdvisor-c88f706a.js.map
