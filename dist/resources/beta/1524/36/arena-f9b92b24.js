import{a as n}from"./allthen-a8900f54.js"
import{c as t}from"./closestTr-7b3a3d25.js"
import{af as a,E as e,e as s,t as r,ag as o,d as c,x as i,q as f,y as l,W as d,ah as u,ai as m}from"./calfSystem-4a40365f.js"
import{s as p,g as v}from"./idb-2c15fd0c.js"
import{i as h}from"./intValue-ca51a3c0.js"
import{c as b}from"./changeMinMax-f6ae18c7.js"
import{f as g,a as x,m as y,t as L}from"./assets-7400169d.js"
import{l as M,p as T}from"./lvlTests-aa479c64.js"
import{i as j}from"./interceptSubmit-c8d517a3.js"
import{l as _}from"./loadDataTables-90dfd205.js"
import{c as k}from"./currentGuildId-014a0323.js"
import{i as w}from"./isArray-c961431c.js"
import{s as q}from"./setTipped-4c2abd3e.js"
function E(n,a,[e,s]){const r=n.find((([,n])=>n===e))
return r&&(t(r[0]).style.backgroundColor="#ff0000",a[e]=s),a}let F,C
function D(){p(g,F)}function N(n,t){F=F||{},F.minLvl=n,F.maxLvl=t,D()}function S(){$('#arenaTypeTabs table[width="635"]').DataTable().draw()}function A(){b(N,S)}function G(){N(o.arenaMinLvl,o.arenaMaxLvl),$("#fshMinLvl").val(F.minLvl),$("#fshMaxLvl").val(F.maxLvl),S()}function J(n){F=F||{},F.hideMoves=n.target.checked,D(),$(".moveMax").toggle(!n.target.checked)}function R(n,t){return!F||function(n,t){const a=F.minLvl,e=F.maxLvl,s=h(t[7])
return M(T,s,a,e)}(0,t)}function z(){const n=function(){const n=$("#pCC > table > tbody > tr:nth-child(4)")
return n.clone().insertBefore(n).find("td").attr("height","2"),n.clone().insertAfter(n).find("td").attr("height","1"),n}(),t=$(x)
!function(n){const t=$("#fshHideMoves",n)
F&&"hideMoves"in F&&(t.prop("checked",F.hideMoves),$(".moveMax").toggle(!F.hideMoves)),t.on("click",J)}(t),function(n){const t=$("#fshMinLvl",n)
F&&"minLvl"in F?t.val(F.minLvl):t.val(o.arenaMinLvl)}(t),function(n){const t=$("#fshMaxLvl",n)
F&&"maxLvl"in F?t.val(F.maxLvl):t.val(o.arenaMaxLvl)}(t),function(n){$("#fshMinLvl, #fshMaxLvl",n).on("keyup",A),$("#fshReset",n).on("click",G)}(t),$("td",n).append(t)}function B(n,t){const e=/#\s(\d+)/.exec(t.eq(0).text());[e,F,F.id].every(a)&&(F.id[e[1]]=e[1],function(n,t){C&&!C[t]&&(n.css("background-color","#F5F298"),n.find("tr").css("background-color","#F5F298"))}(n,e[1]))}function H(n,t){const a=/(\d)\.png/.exec($("img",t).attr("src"))
a&&$(t).attr("data-order",a[1])}function I(n,t){const a=y.exec($("img",n).attr("src"))
a&&(!function(n,t){F.moves[n[1]]&&3===F.moves[n[1]]&&t.addClass("moveMax")}(a,t),n.attr("data-order",a[1]))}function O(n,t){const a=$(t),e=a.children()
B(a,e),function(n){const t=n.eq(1),a=/(\d+)\s\/\s(\d+)/.exec(t.text())
a&&t.attr("data-order",100*(Number(a[1])-Number(a[2]))+Number(a[2]))}(e),function(n){const t=n.eq(2)
t.attr("data-order",$("td",t).first().text().replace(/[,\s]/g,""))}(e),function(n){n.slice(4,7).each(H)}(e),function(n,t){const a=n.eq(8)
F&&F.moves&&I(a,t)}(e,a),function(n){const t=n.eq(8)
1===t.children(c).length&&t.attr("data-order",t.find("td").first().text().replace(/[,\s]/g,""))}(e)}const V=n=>[n,Number(n.previousElementSibling.value)]
function W(n,t){return n.r.arenas?t.concat(n.r.arenas.find((n=>n.id===t[1]))):t}function K(n,t){return t.guild_id===n?`<span class="fshRed">${t.name}</span>`:t.name}function P(n){n&&n.classList&&n.classList.add("fshGray")}function Q(n,[t,,a]){a&&((n,t)=>{return((n,t)=>1===t.reward_type&&n.r.moves)(n,t)&&(a=((n,t)=>n.r.moves.find((n=>n.id===t.reward)))(n,t))&&3===a.max
var a})(n,a)&&P(t)}function U(n,t,a){q(a.players.map(r(K,n)).join("<br>"),t),t.classList.add("tip-static"),n&&"Join"===t.value&&function(n,t,a){a.players.filter((t=>t.guild_id===n)).length===a.max_players/4&&P(t)}(n,t,a)}const X=[a,n=>w(n.players),n=>n.players.length>0]
function Y(n,[t,,a]){X.every((n=>n(a)))&&U(n,t,a)}function Z(n){if(!n.s||!a(n.r))return
const t=function(n){return e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map(V).map(r(W,n))}(n)
t.forEach(r(Y,k())),t.forEach(r(Q,n))}const nn="td.sorting, td.sorting_asc, td.sorting_desc"
function tn(n){const t=$(n.target).closest("td"),a=function(n){const t=n.attr("class"),a=/sorting([^\s]+)/.exec(t)
return a&&"_desc"===a[1]?"asc":"desc"}(t)
!function(n,t,a){const e=n.closest(c).DataTable()
3!==t?e.order([3,"asc"],[t,a]).draw():e.order([3,a]).draw()}(t,t.index(),a)}function an(n){return i(f({cmd:"arena"},n))}function en(){return an({subcmd:"view"})}function sn(n,t){const a=$("tr",t).first()
$("a",a).contents().unwrap(),$(t).prepend($("<thead/>").append(a))}function rn(){z(),D(),$.fn.dataTable.ext.search.push(R)}function on(n,[t,o,c]){const i=$('table[width="635"]',n)
i.each(sn),function(n){F=n||{},C=F.id||{},F.id={}}(t),function(n){n.children("tbody").children("tr").each(O)}(i),function(n){if(!a(n))return
const t=e('#arenaTypeTabs tr:not([style="display: none;"]) input[type="submit"]').map((n=>[n,n.previousElementSibling.value])),o=s(n).reduce(r(E,t),{})
p("fsh_arenaFull",o)}(o),Z(c),rn(),i.DataTable(L),function(n){$(nn,n).off("click"),n.on("click",nn,tn)}(n)}function cn(n,t){u("arena.process"),e('#arenaTypeTabs tr[style="display: none;"]').forEach((n=>n.remove())),on(n,t),j(),m("arena.process")}function fn(){if(l())return
const t=$("#arenaTypeTabs")
1===t.length?function(t){n([v(g),v("fsh_arenaFull"),en().catch((()=>({}))),_()],r(cn,t))}(t):d("arena","Join error screen ?")}var ln=Object.freeze({__proto__:null,default:fn})
export{an as a,ln as b,fn as i,en as v}
//# sourceMappingURL=arena-f9b92b24.js.map
