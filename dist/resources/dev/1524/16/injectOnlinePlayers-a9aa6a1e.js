import{au as n,s as e,D as t,a7 as a,a1 as s,X as l,aX as i,w as r,o,e as f,u}from"./calfSystem-d49dbbd3.js"
import{n as c}from"./numberIsNaN-1742f258.js"
import{c as d}from"./currentGuildId-fb556ea3.js"
import{i as h}from"./intValue-2ed328c8.js"
import"./valueText-064e4f1c.js"
import{b as p,p as v,c as m}from"./levelHighlight-acdb4dd3.js"
import{g,s as y}from"./idb-a6d1a1ba.js"
import"./all-042a202c.js"
import{l as M,p as L}from"./lvlTests-34e8a3b0.js"
import{l as b}from"./loadDataTables-179f48a6.js"
import{o as P}from"./onlinePlayersPage-d99c140a.js"
function x(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let j,C
const R=[()=>j,n=>function(n){const e=n.match(/;guild_id=([0-9]+)"/)
if(e)return Number(e[1])}(n[0])!==d(),n=>h(n[2])>=p,n=>h(n[2])<=v]
function I(n,e){(function(n){return R.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function w(n,e){j=t("highlightPlayersNearMyLvl"),C=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:I,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function O(){C.draw()}function k(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||O()}function q(n,e){return parseInt($(n,e).val(),10)}function N(n,e){c(e)||l(n,e)}function T(n,e,t){const a=q("#fshMinLvl",n),l=q("#fshMaxLvl",n)
N("onlinePlayerMinLvl",a),N("onlinePlayerMaxLvl",l)
const i=s(h(t[2]),0)
return M(L,i,a,l)}let _,D,z,G
function H(a){D=a||{},function(n){$.fn.dataTable.ext.search.push(e(T,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(_),m(),w(_,function(t){return n(t).map(e(x,t))}(D))}function S(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return D[n]&&D[n][3]>e})(s,n)||(D[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function X(n,e){G=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=G;e+=1)P(e).then(n)}function A(n){$("#fshOutput",_).append(n)}function V(n){A(" "+(z+1))
const t=u(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(S,a))}(t,a),z+=1,1===z&&X(V,a),z===G&&(y("fsh_onlinePlayers",D),H(D))}function W(n){"fshRefresh"===n.target.id&&($("#fshRefresh",_).hide(),z=0,D={},P(1).then(V),l("lastOnlineCheck",a),A("Parsing online players...")),"fshReset"===n.target.id&&function(n){l("onlinePlayerMinLvl",i.onlinePlayerMinLvl),l("onlinePlayerMaxLvl",i.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(i.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(i.onlinePlayerMaxLvl),O()}(_)}function B(){_.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return a-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(a-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),g("fsh_onlinePlayers").then(H),o(_[0],W),f(_[0],"keyup",k)}export default function(n){r()||(_=n?$(n):$("#pCC"),b().then(B))}
//# sourceMappingURL=injectOnlinePlayers-a9aa6a1e.js.map