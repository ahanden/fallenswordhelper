import{bq as n,$ as t,W as e,t as o,B as r,h as c,i as s,aw as a,aF as i,m as u,A as d,u as m,w as l,K as p,z as f,g as h,k as b,C as N,D as g,o as C,bP as y,X as j,cb as $,R as D}from"./calfSystem-e76f1a7d.js"
import{c as T}from"./createSpan-c7e7a9e6.js"
import{c as k}from"./createTBody-e54e4fe4.js"
import{c as v}from"./createTable-aa311cb0.js"
import{i as E}from"./insertTextBeforeEnd-cf426b0a.js"
import{i as B}from"./isArray-68a41fd5.js"
import{t as x}from"./toLowerCase-8d8df902.js"
import{a as A}from"./allthen-3a0631ad.js"
import{c as w}from"./chunk-89253199.js"
import{e as S}from"./errorDialog-14a51b34.js"
import{g as L}from"./getArrayByClassName-559d1877.js"
import{h as q}from"./hideElement-30ade5f0.js"
import"./all-9f53e8b3.js"
import"./dialogMsg-5b0fd825.js"
function O(){return n({subcmd:"loadcomponents"})}let Q,R,_
function I(n,t){return n[t.b]=n[t.b]||{a:t.a,b:t.b,count:0,del:[],v:t.v},n[t.b].count+=1,n[t.b].del.push(t.a),n}function z(n,t){return`${n}<tr><td><img src="${a}items/${t.b}.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?item_id=${t.b}&inv_id=${t.a}&t=2&p=${i()}&vcode=${t.v}"></td><td>${t.count}</td><td>[<span class="sendLink compDelType" data-compid="${t.b}">Del</span>]</td></tr>`}function F(n){const t=k()
return function(n){Q=n.r.reduce(I,{})}(n),s(t,`<tr><td colspan="3">Component Summary</td></tr>${Object.values(Q).reduce(z,"")}`),t}function K(n,t){const e=function(n){const t=n.insertRow(-1)
s(t,"<td>Total:</td>")
const e=t.insertCell(-1)
return e.colSpan=2,e}(n)
c(e,function(n){const t=n.r.length,e=T()
return r(t,e),e}(t)),E(e," / TODO")}function M(n,t){if(!B(t.r))return
const e=n.parentNode
e&&(r("",e),c(e,function(n){const t=v({className:"fshTblCenter",id:"fshTally"})
return c(t,F(n)),K(t,n),t}(t)))}function P(n){const t=u(),e=T({className:`sendLink ${x(n).replace(/ /g,"-")}`,textContent:n})
return d("[",t),c(t,e),s(t,"]"),t}function V(t){return n({subcmd:"destroycomponent",removeIndex:t})}function W(n,t){const e=l(t)
let o=1
return"Component destroyed."===e&&(o=0),{r:o,m:e,c:n}}function X(n){return m({cmd:"profile",subcmd:"destroycomponent",component_id:n}).then(o(W,n))}function G(n){const t=n.filter((n=>0===n.r)),e=n.filter((n=>1===n.r))
return t.length>0?{r:t.map((n=>n.c)),s:!0}:e.length>0?{e:{message:e[0].m},s:!1}:{e:{message:n[0].m},s:!1}}function H(n){return A(n.map(X),G)}function J(n){return t(V,H,n)}function U(){if(!R){const n=p("inventory-table",f("profileRightColumn"))
2===n.length&&([,R]=n)}return R}function Y(n,t){return n[t.dataset.tipped.match(b)[2]]=t.parentNode.parentNode,n}function Z(n,t){n[t]&&r("",n[t])}function nn(n){n.forEach(o(Z,function(){if(!_){const n=h("img",U())
_=n.reduce(Y,{})}return _}()))}function tn(n){const t=U().parentNode
if(!t)return
const e=t.children[2].children[1].children[0]
if(!e||"TABLE"!==e.tagName)return
const o=e.rows,r=o[o.length-1].cells[1].children[0]
let c=Number(N(r))
c-=n,d(c,r)}function en(n){n.s&&B(n.r)&&(nn(n.r),tn(n.r.length))}function on(n){n.parentNode.remove()}function rn(n){return J(n).then(en)}function cn(n,t,e){e.s&&(!function(n){const t=g(`#fshTally [data-compid="${n}"]`)
if(!t)return
const e=t.parentNode.parentNode.children[1],o=Number(N(e))-1
d(o,e)}(t),tn(1),n.parentNode&&r("",n.parentNode))}const sn=["Enable Quick Del","Count Components","Quick Extract Components"]
function an(n,t){return c(n,P(t)),n}function un(n){s(n.parentNode.parentNode,'<span class="compDelBtn">Del</span>')}const dn=[["quick-extract-components",function(){e("components","insertQuickExtract"),j($)}],["enable-quick-del",function(n){e("components","enableDelComponent")
const t=n.parentNode
q(t)
const o=t.parentNode
c(o,P("Delete All Visible")),h("img",U()).forEach(un)}],["delete-all-visible",function(n){e("components","delAllComponent")
const t=n.parentNode.parentNode.parentNode.children[0]
L("compDelBtn",t).forEach(D)}],["compDelBtn",function(n){const{tipped:t}=n.parentNode.children[0].children[0].dataset,e=t.match(b),r=e[1]
J([e[2]]).then(S).then(o(cn,n,r))}],["count-components",function(n){e("components","countComponent"),t(O).then(o(M,n))}],["compDelType",function(n){const t=Q[n.dataset.compid].del,e=n.parentNode
!function(n){r("",n),n.className="guildTagSpinner",n.style.backgroundImage=`url('${a}ui/misc/spinner.gif')`}(e)
const c=w(30,t).map(rn)
A(c,o(on,e))}]]
function mn(n){const t=n.parentNode
c(t,sn.reduce(an,u({className:"fshCenter"}))),C(t,y(dn))}function ln(){const n=U()
n&&mn(n)}export default ln
//# sourceMappingURL=components-2e7b7acf.js.map