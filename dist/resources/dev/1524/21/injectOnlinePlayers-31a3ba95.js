import{au as n,t as e,G as t,bo as a,a7 as s,a3 as l,Z as i,aW as r,x as o,o as f,f as c,v as u}from"./calfSystem-9c7241dc.js"
import{n as h}from"./numberIsNaN-7270cc8c.js"
import{c as d}from"./currentGuildId-00053b50.js"
import{i as p}from"./intValue-4cb61c79.js"
import"./valueText-2c80175b.js"
import{b as v,p as m,c as g}from"./levelHighlight-032034e0.js"
import{g as y,s as M}from"./idb-5f8a9591.js"
import{l as L,p as x}from"./lvlTests-1f00aff4.js"
import"./all-fed72729.js"
import{l as P}from"./loadDataTables-d7f0915e.js"
import{o as b}from"./onlinePlayersPage-20de0c6d.js"
function j(n,e){const t=$("<div/>").append(n[e][0])
return $("img",t).addClass("fshImgCntr"),[t.html(),n[e][1],n[e][2],100*n[e][3]+n[e][4]+1]}let C,R
const I=[()=>C,n=>function(n){const e=n.match(a)
if(e)return Number(e[1])}(n[0])!==d(),n=>p(n[2])>=v,n=>p(n[2])<=m]
function w(n,e){(function(n){return I.every(e=>e(n))})(e)&&$("td",n).eq(2).addClass("lvlHighlight")}function O(n,e){C=t("highlightPlayersNearMyLvl"),R=$("#fshInv",n).DataTable(function(n){return{columns:[{title:"Guild",class:"dt-center",orderable:!1},{title:"Name",class:"dt-center"},{title:"Level",class:"dt-center"},{title:"Page/Index",class:"dt-center"}],createdRow:w,data:n,deferRender:!0,lengthMenu:[[30,60,-1],[30,60,"All"]],order:[3,"desc"],pageLength:30,stateDuration:0,stateSave:!0}}(e))}function k(){R.draw()}function q(n){"fshMinLvl"!==n.target.id&&"fshMaxLvl"!==n.target.id||k()}function N(n,e){return parseInt($(n,e).val(),10)}function T(n,e){h(e)||i(n,e)}function _(n,e,t){const a=N("#fshMinLvl",n),s=N("#fshMaxLvl",n)
T("onlinePlayerMinLvl",a),T("onlinePlayerMaxLvl",s)
const i=l(p(t[2]),0)
return L(x,i,a,s)}let D,G,z,H
function S(a){G=a||{},function(n){$.fn.dataTable.ext.search.push(e(_,n)),$("#fshOutput",n).html(`<div align=right>Min lvl:<input value="${t("onlinePlayerMinLvl")}" size=5 id="fshMinLvl" /> Max lvl:<input value="${t("onlinePlayerMaxLvl")}" size=5 id="fshMaxLvl" /> <input id="fshReset" type="button" value="Reset"/></div><table id="fshInv" class="allow stripe hover"></table>`)}(D),g(),O(D,function(t){return n(t).map(e(j,t))}(G))}function W(n,e,t){const a=$("td",$(t)),s=a.eq(1).text();(function(n,e){return G[n]&&G[n][3]>e})(s,n)||(G[s]=function(n,e,t){return[t.eq(0).html(),t.eq(1).html(),t.eq(2).text(),n,e]}(n,e,a))}function A(n,e){H=function(n){return parseInt(n.parent().text().match(/(\d+)/g)[0],10)}(e)
for(let e=2;e<=H;e+=1)b(e).then(n)}function V(n){$("#fshOutput",D).append(n)}function Z(n){V(" "+(z+1))
const t=u(n),a=$("#pCC input.custominput",t).first()
!function(n,t){const a=t.attr("value")
$('#pCC img[src$="/world/icon_action_view.png',n).parent().parent().parent().each(e(W,a))}(t,a),z+=1,1===z&&A(Z,a),z===H&&(M("fsh_onlinePlayers",G),S(G))}function B(n){"fshRefresh"===n.target.id&&($("#fshRefresh",D).hide(),z=0,G={},b(1).then(Z),i("lastOnlineCheck",s),V("Parsing online players...")),"fshReset"===n.target.id&&function(n){i("onlinePlayerMinLvl",r.onlinePlayerMinLvl),i("onlinePlayerMaxLvl",r.onlinePlayerMaxLvl),$("#fshMinLvl",n).val(r.onlinePlayerMinLvl),$("#fshMaxLvl",n).val(r.onlinePlayerMaxLvl),k()}(D)}function E(){D.html(`<span><b>Online Players</b></span>${function(){const n=t("lastOnlineCheck")
return s-n>3e5?'<span> (takes a while to refresh so only do it if you really need to) </span><span id="fshRefresh" class="fshLink">[Refresh]</span>':`<span>[ Wait ${Math.round(300-(s-n)/1e3)}s ]</span>`}()}<div id="fshOutput"></div>`),y("fsh_onlinePlayers").then(S),f(D[0],B),c(D[0],"keyup",q)}export default function(n){o()||(D=n?$(n):$("#pCC"),P().then(E))}
//# sourceMappingURL=injectOnlinePlayers-31a3ba95.js.map
