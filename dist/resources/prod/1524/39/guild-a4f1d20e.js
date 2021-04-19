import{a as t}from"./addCommas-37fb94e0.js"
import{g as e,p as n,aA as a,bu as s,D as o,i,d as c,m as r,B as l,h as f,I as u,S as d,E as m,b as p,ac as h,a4 as b,o as g,u as j,t as N,v as C,s as L,bx as S,f as y,_ as v,n as $,aT as k,a as w,aN as x,b8 as T,Q as M,W as A,c as H,by as B,F as E,y as R,bz as D}from"./calfSystem-fe534823.js"
import{g as I,c as G}from"./colouredDots-73024fcf.js"
import{l as P}from"./onlineDot-f8d6c5fc.js"
import{s as _}from"./setTipped-70cff648.js"
import V from"./compressBio-6de35e7c.js"
import{c as X}from"./createStyle-3e97c8d0.js"
import{c as F}from"./currentGuildId-cf47b942.js"
import{a as U,g as z,c as O,b as Q}from"./levelHighlight-9e29a599.js"
import{b as J}from"./batch-49f23571.js"
import{o as W}from"./openQuickBuffByName-efdefe00.js"
import{d as Z}from"./dataRows-27be3a6a.js"
import{c as q}from"./createInput-58fc2e41.js"
import{c as K}from"./createUl-bf42ad98.js"
import{s as Y,g as tt}from"./idb-1aaf30fa.js"
import{i as et}from"./insertElementAfterBegin-ff7e04b7.js"
import{b as nt}from"./simpleCheckbox-e2f994de.js"
import{a as at}from"./alpha-9f4f77c3.js"
import{c as st}from"./createTBody-654f7c76.js"
import{c as ot}from"./createTable-b974998c.js"
import{f as it}from"./formatLocalDateTime-2385e9c5.js"
import{u as ct,l as rt,v as lt,c as ft,m as ut,a as dt,g as mt}from"./indexConstants-91c1487d.js"
import{c as pt,t as ht}from"./toggleVisibilty-6ef0b3a6.js"
import{c as bt}from"./createButton-4f23e4ef.js"
import{c as gt}from"./createTextArea-86ccdac6.js"
import{d as jt}from"./dialogMsg-a960ad1e.js"
import{p as Nt}from"./playerName-faaca46a.js"
import{c as Ct}from"./createSpan-9895a3a7.js"
import{h as Lt}from"./hideElement-d197c06b.js"
import"./createLabel-6833e4c3.js"
import"./insertElementBefore-68b894c4.js"
import"./intValue-f6303c59.js"
import"./valueText-322f7b12.js"
import"./fshOpen-bc09bf81.js"
import"./isChecked-6d3ab351.js"
import"./toLowerCase-179aa35f.js"
import"./isDate-cef09439.js"
import"./numberIsNaN-d0e4b349.js"
import"./padZ-5c8671fc.js"
function St(t,e){const n=s.exec(e.dataset.tipped)
return P({min:n[3],hour:n[2],day:n[1]})<44640&&(t[0]+=1,t[1]+=Number(/Stamina:<\/td><td>(\d+)/.exec(e.dataset.tipped)[1])),t}function yt(){const s=e("b",n).find(a("Members"))
if(s){const e=I(),n=function(t){return t.reduce(St,[0,0])}(e)
s.classList.add("tip-static"),_(`Active: ${n[0]}/${e.length}<br>Stamina: ${t(n[1])}`,s)}}function vt(t,e){let n
const a=t.replace(/,/g,"").match(e)
return n=a?parseInt(a[1],10):0,n}function $t(e){const n=e.dataset.tipped,a=vt(n,/XP Lock: <b>(\d*)/),s=vt(n,/XP: <b>(\d*)/)
i(e.parentNode.nextElementSibling,` (<b>${function(e,n){let a=""
return e>n&&(a="+"),a+t(e-n)}(s,a)}</b>)`)}function kt(){const t=o('#pCC a[data-tipped^="<b>Guild XP</b>"]')
t&&$t(t)}let wt,xt
function Tt(t){return wt&&t>=U()&&t<=z()}function Mt(t){return xt&&t>=O()&&t<=Q()}const At=t=>[t,s.exec(t.dataset.tipped)[1]],Ht=([,t])=>t<7,Bt=([t])=>[t,Number(/VL:.+?(\d+)/.exec(t.dataset.tipped)[1])],Et=([t,e])=>[t.parentNode.parentNode.rowIndex,Tt(e),Mt(e)]
const Rt=t=>t.map((([t])=>`.fshHighlight tr:nth-child(${t+1})`)).join(",")
function Dt(){const t=m('#pCC a[data-tipped*="<td>VL:</td>"]').map(At).filter(Ht).map(Bt).map(Et),e=t.filter((([,t])=>t)),a=t.filter((([,t,e])=>!t&&e))
!function(t){if(t.length){const e=`${Rt(t)} {background-color: #4671C8;}`
f(document.body,X(e))}}(e),function(t){if(t.length){const e=`${Rt(t)} {background-color: #FF9900;}`
f(document.body,X(e))}}(a),function(t,e){if(t.length+e.length){const t=p(c,n)
t[t.length-1].classList.add("fshHighlight")}}(e,a)}function It(){Number(d("guild_id"))!==F()&&(wt||xt)&&Dt()}function Gt(){wt=u("highlightPlayersNearMyLvl"),xt=u("highlightGvGPlayersNearMyLvl"),It(),u("enableHistoryCompressor")&&function(){const t=e(c,n).slice(-2,-1)[0].rows[0].cells[0],a=r({id:"profile-bio",innerHTML:t.innerHTML})
l("",t),f(t,a),V()}()}function Pt(t){i(t.parentNode,' <span class="smallLink">[b]</span>')}function _t(t){"smallLink"===t.target.className&&W(t.target.previousElementSibling.text)}function Vt(){const t=h(`#pCC a[href^="${b}"]`)
J([5,3,t,0,Pt]),g(n,_t)}function Xt(t){return j({cmd:"guild",subcmd:"conflicts",page:t})}function Ft(t,e){l(e,t.insertCell(-1))}function Ut(t,e,n){const a=t.insertRow(t.rows.length-2)
Ft(a,e),Ft(a,n)}function zt(t,e){Ut(t,e.cells[0].innerHTML,`<b>${e.cells[6].innerHTML}</b>`)}function Ot(t,e,n){1===e&&function(t){Ut(t,`<a href="${L}conflicts">Active Conflicts</a>`,"Score")}(n),Z(t.rows,7,0).forEach(N(zt,n))}function Qt(t,e){const n=C(e),a=o('#pCC input[name="page"]',n)
if(!a)return
const s=Number(a.value),i=function(t){return Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])}(a)
!function(t,e,n){const a=o("#pCC > table > tbody > tr > td > table",t)
a&&a.rows.length>3&&Ot(a,e,n)}(n,s,t.node),i>s&&function(t,e,n){Xt(t+1).then(N(e,n))}(s,Qt,t)}function Jt(t){const e=t.rows[6].cells[0].children[0]
e&&Xt(1).then(N(Qt,{node:e}))}function Wt(t){t.target.id===S&&v(S,!u(S))}let Zt,qt,Kt,Yt,te,ee,ne,ae,se,oe,ie,ce,re
function le(t,e){return`${t}<option value="${e}">${e}</option>`}function fe(t){return x(t)?"#DEF":t.toLocaleString()}function ue(t,e,n){return`${e}<tr><td>${it(new Date(1e3*n[ct]))}</td><td>${t}</td><td class="fshRight">${fe(n[rt])}</td><td class="fshRight">${fe(n[lt])}</td><td class="fshRight">${fe(n[ft])}</td><td class="fshRight">${fe(n[ut])}</td><td class="fshRight">${Math.floor(n[ft]/n[ut]*100)}</td><td class="fshRight">${n[dt]}</td><td class="fshRight">${fe(n[mt])}</td></tr>`}function de(t,e){return function(t){return qt&&"- All -"!==qt&&qt!==t}(e)?t:t+te[e].reduce(N(ue,e),"")}function me(){te&&l(k(te).reduce(de,""),Zt),Kt.classList.remove("fshSpinner")}function pe(){Kt.classList.add("fshSpinner"),w(3,me)}function he(t){qt=t.target.value,pe()}function be(t){t&&(te=t,l(`<select name="member"><option value="- All -" selected>- All -</option>${k(t).sort(at).reduce(le,"")}</select>`,Yt),pe())}function ge(){const t=$("th",{textContent:"Member"})
return Yt=r(),f(t,Yt),t}function je(){const t=ot({id:"tg"})
return function(t){const e=t.createTHead().insertRow(-1)
i(e,"<th>Date</th>")
const n=ge()
f(e,n),i(e,"<th>Level</th><th>VL</th><th>Stam</th><th>Max<br>Stam</th><th>Stam<br>%</th><th>Last<br>Activity<br>(Days)</th><th>GXP</th>")}(t),function(t){Zt=st(),f(t,Zt)}(t),y(t,"change",he),Kt=r({className:"tgCont fshSpinner64"}),f(Kt,t),Kt}function Ne(t){ee.value=t,se.classList.remove("fshSpinner")}function Ce(){ee.value='{"lastUpdate": 0, "members": {}}'}function Le(t){jt("Update successful"),be(t.members)}function Se(){const t=T(ee.value)
Y("fsh_guildActivity",t).then(N(Le,t)).catch(jt)}function ye(t,e){const n=bt({className:"custombutton",textContent:t})
return g(n,e),n}function ve(){return se=r({id:"io",className:"fshSpinner64"}),ee=gt(),ee.setAttribute("autocapitalize","off"),ee.setAttribute("autocomplete","off"),ee.setAttribute("autocorrect","off"),ee.setAttribute("spellcheck","false"),ne=ye("Save",Se),ae=ye("Reset",Ce),f(se,ee),f(se,pt()),f(se,ne),f(se,ae),se}function $e(){return!ie.checked}function ke(t){ie.checked&&"Escape"===t.code&&(ie.checked=!1)}function we(t){$e()&&(t.style.transform=null)}function xe(){A("guildTracker","updateRawData"),oe&&function(t){t&&(se.classList.add("fshSpinner"),w(4,Ne,[t]))}(oe)}function Te(){const t=function(){const t=r({className:"fsh-dialog-popup ui-dialog ui-tabs ui-widget ui-widget-content ui-corner-all",innerHTML:'<input id="acttab1" class="fsh-tab-open" name="acttabs" checked type="radio">'})
return re=q({className:"fsh-tab-open",id:"acttab2",name:"acttabs",type:"radio"}),M(re,"change",xe),f(t,re),t}(),e=K({className:"fshMove ui-tabs-nav ui-widget-header ui-corner-all ui-helper-reset ui-helper-clearfix",innerHTML:'<li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab1">Guild Activity Tracker</label></li><li class="ui-state-default ui-corner-top"><label class="fsh-tab-label" for="acttab2">Import/Export</label></li><label for="tracker" class="fsh-dialog-close ui-dialog-titlebar-close">&times;</label>'})
return f(t,e),B(e,t),t}function Me(){const t=Te(),e=function(){const t=r({className:"fsh-dialog-content"})
return f(t,je()),f(t,ve()),t}()
f(t,e),y(ie,"change",N(we,t)),f(ce,t)}function Ae(t){t&&(oe=JSON.stringify(t),be(t.members))}function He(){A("guildTracker","openDialog"),tt("fsh_guildActivity").then(Ae),H.dialogIsClosed=$e,i(ce,'<div class="fsh-dialog-overlay"><label class="fsh-dialog-cancel" for="tracker"></label></div>'),Me()}function Be(){!function(){const t=o("#pCC img.guild_openGuildStore"),e=t.parentNode,n=r({className:"fsh-tracker"}),a=r({innerHTML:`${nt(S)}&nbsp;<label class="custombutton" for="tracker">Show</label>`})
y(a,"change",Wt),f(n,t),f(n,a),et(e,n)}(),ie=q({id:"tracker",className:"fsh-dialog-open",type:"checkbox"}),M(ie,"change",He),ce=r({className:"fsh-dialog"}),f(ce,ie),y(document.body,"keydown",ke),f(document.body,ce)}let Ee,Re
function De(t){const e=function(t){const e=t.dataset.tipped.match(/(\d+) \/ (\d+)/)
return Math.min(Math.round(Number(e[1])/Number(e[2])*100),100)}(t)
return`.fshProgressBar tr:nth-child(${t.parentNode.parentNode.rowIndex+1}) {background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${e}%, transparent ${e+1}%)}`}function Ie(){Re?Re.disabled=!Ee:function(){const t=p(c,n),e=t[t.length-1]
e.classList.add("fshProgressBar")
const a=m(E,e).map(De).join("\n")
Re=f(document.body,X(a)).sheet}()}function Ge(){Ee=!Ee,v("enableStamBars",Ee),Ie(),A("guildManage","StamBars")}function Pe(){!function(){const t=o("#pCC img.guild_openGuildStore").parentNode,e=f(t,r({className:"fshCenter",innerHTML:nt("enableStamBars")}))
y(e,"change",Ge)}(),Ee=u("enableStamBars"),Ee&&Ie()}function _e(t,e,n){const a=function(t){return Ct({className:"fshLink tip-static",dataset:{linkto:t,tipped:"Toggle Section"},textContent:"X"})}(n)
f(t,function(t){const e=Ct({innerHTML:"[&nbsp;"})
return f(e,t),i(e,"&nbsp;]"),e}(a)),e.id=n,u(n)&&Lt(e),g(a,ht)}function Ve(t){_e(t.rows[0].cells[1].children[0],t.rows[2].cells[0].children[0],"guildLogoControl")}function Xe(t){const e=t.rows[4].cells[1].children[0]
l(e.innerHTML.trim(),e),_e(e,t.rows[6].cells[0].children[0],"statisticsControl")}function Fe(t){_e(t.rows[15].cells[1].children[0],t.rows[17].cells[0].children[0],"guildStructureControl")}function Ue(t){const n=e("b",t).filter(a("Relics"))
if(1!==n.length)return
const s=n[0].parentNode.nextElementSibling.children[0]
l(`[ <a href="${L}reliclist">Control</a> ]&nbsp;`,s)}function ze(t){const e=p("li",t),n=e[e.length-1].parentNode
i(n,`<li><a href="${D}${Nt()}" class="tip-static" data-tipped="Self Recall">Self Recall</a></li>`)}function Oe(t,e){w(3,e,[t])}function Qe(){const t=n.lastElementChild.rows[2].cells[0].children[0]
!function(t){[Ve,Xe,Fe,Ue,ze].forEach(N(Oe,t))}(t),w(3,Vt),function(t){R()||(u("detailedConflictInfo")&&w(3,Jt,[t]),w(4,Be))}(t),Pe()}function Je(){const t=o('#pCC img[src*="/guilds/"][width="200"]')
t&&(t.removeAttribute("style"),function(t){const e=t.nextElementSibling.nextElementSibling
e&&e.classList.add("fshBreakAll")}(t))}function We(){w(3,G),w(3,Je),w(3,kt),w(3,yt),"manage"===H.subcmd&&Qe(),"view"===H.subcmd&&Gt()}export default We
//# sourceMappingURL=guild-a4f1d20e.js.map
