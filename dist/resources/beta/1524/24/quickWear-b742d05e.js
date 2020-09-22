import{m as t,t as n,h as r,A as a,O as e,b2 as s,c as o,aD as i,bC as c,i as f,bD as d,e as m,be as u,j as l,H as h,p,o as b,l as j,Y as k,U as $,z as g}from"./calfSystem-019a589c.js"
import{i as L}from"./isArray-2519a795.js"
import"./toLowerCase-2f55d839.js"
import{c as y}from"./createInput-62d3b51a.js"
import{c as w}from"./createLabel-7b42bf61.js"
import{c as E}from"./createUl-5b761c85.js"
import"./isChecked-2d5427f6.js"
import{b as A}from"./simpleCheckbox-863a1324.js"
import"./alpha-fc758c41.js"
import{c as C}from"./createTBody-ba491e91.js"
import{c as x}from"./createTable-300f2241.js"
import"./dialogMsg-9241492c.js"
import{p as H,s as I}from"./pubsub-5ef9dfda.js"
import{c as S}from"./createLi-99cf3233.js"
import"./errorDialog-8d3200e2.js"
import"./indexAjaxJson-424248bd.js"
import{t as N}from"./toggleForce-d6f8623d.js"
import{a as v}from"./stringSort-87bb2a8a.js"
import{j as Q}from"./jConfirm-3f75414c.js"
import"./daUseItem-31373cd9.js"
import{e as U}from"./eventHandler5-6c4b71b9.js"
import{s as W}from"./selfIdIs-38348a74.js"
import{m as q}from"./makeFolderSpan-03d93920.js"
import{d as P}from"./daLoadInventory-822cf9a2.js"
import"./dialog-ca00f6b8.js"
import{u as M,e as T}from"./useItem-5653e281.js"
import{h as O}from"./hasClasses-da62008c.js"
const D=(t,n)=>t+String(n)
function F(t,n,r){return y({checked:0===r,id:D(t,r),name:t,type:"radio"})}function B(t,n,a,s){const o=S({className:"ui-state-default ui-corner-top"})
return r(o,w({htmlFor:D(t,s),innerHTML:a})),0!==s&&e(o,"click",()=>{H(D(t,s),n[s])}),o}const _=()=>t({className:"ui-tabs-panel ui-corner-bottom"})
function z(e,s,o){const i=t({className:"fshTabSet ui-tabs ui-widget-content ui-corner-all"}),c=n(r,i)
s.map(n(F,o)).forEach(c)
const f=s.map(_)
H(D(o,0),f[0])
const d=function(t,a,e){const s=E({className:"ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"})
return t.map(n(B,a,e)).forEach(n(r,s)),s}(s,o,f)
return H(o+"-header",d),r(i,d),f.forEach(c),a("",e),r(e,i),0}function G(t,n,r){const e=t.insertRow(-1)
r.dom=e
let s="fshEq ",o="fshUse "
r.t<9?s+="smallLink":s+="notLink",o+=function(t){return-1!==[10,12,15,16].indexOf(t.t)||"Zombie Coffin"===t.n?"smallLink":"notLink"}(r),a(`<td class="fshCenter"><span class="${s}" data-itemid="${r.a}">Wear</span>&nbsp;|&nbsp;<span class="${o}" data-itemid="${r.a}">Use/Ext</span></td><td><img src="${function(t){let n=i
return 13699===t.b?n+=`composing/${t.extra.design}_${t.extra.color}.png`:n+=`items/${t.b}.gif`,n}(r)}" class="tip-dynamic" data-tipped="fetchitem.php?item_id=${r.b}&amp;inv_id=${r.a}&amp;t=1&amp;p=${n}&amp;currentPlayerId=${n}" width="30" height="30" border="0"></td><td width="90%">&nbsp;${r.n}</td>`,e)}function J(t){return q(String(t.id),t.name)}function R(t){return q("0","All")+t.r.map(J).join("")}function Y(t,r,a){a.items.sort(v).forEach(n(G,t,r))}function Z(t){const a=x({width:"100%",innerHTML:`<thead><tr><th class="fshCenter" colspan="3">${R(t)}</th></tr><tr class="fshHeader"><th class="fshCenter" width="20%">Actions</th><th colspan="2">Items</th></tr></thead>`}),e=C()
return r(a,e),o.sortBy="n",o.sortAsc=!0,t.r.forEach(n(Y,e,s())),a}function K(n){const a=Z(n),e=t()
return r(e,a),e}function V(t,n){return`<a href="${u}${t}">${n}</a>`}function X(t){return t[1].nicknameList.length>0}function tt(t){return`<tr><td>${t[0]}</td><td>${t[1].nicknameList.map(n(V,t[0])).join(" ")}</td><td>${t[1].count}</td><td></td><td></td></tr>`}function nt(t){return t.displayOnAH&&!t.found}function rt(t){return V(t.searchname,t.nickname)}function at(t){return 0===t[1].nicknameList.length}function et(t){return`<tr><td>${t[0]}</td><td></td><td>${t[1].count}</td><td></td><td></td></tr>`}function st(t,n){return`<table width="100%" cellspacing="2" cellpadding="2"><thead><tr><th colspan="5" class="fshCenter">Items from <a href="${d}">AH Quick Search</a> found in your inventory</th></tr><tr><th>Name</th><th>Nick Name</th><th>Inv Count</th><th>AH Min Price</th><th>AH BuyNow Price</th></tr></thead><tbody>${function(t){return m(t).filter(X).map(tt).join("")}(t)}<tr><td colspan="5"><hr></td></tr><tr><td>Did not find:</td><td colspan="4">${function(t){return t.filter(nt).map(rt).join(", ")}(n)}</td></tr><tr><td colspan="5"><hr></td></tr></tbody><thead><tr><th colspan="5" class="fshCenter">Items NOT from <a href="${d}">AH Quick Search</a> found in your inventory</td></thead><tbody>${function(t){return m(t).filter(at).map(et).join("")}(t)}</tbody></table>`}function ot(t,n,r){n===r.searchname&&(r.found=!0,t[n].nicknameList.indexOf(r.nickname)<0&&t[n].nicknameList.push(r.nickname))}function it(t,r,a){const e=a.n
!function(t,n){t[n]?t[n].count+=1:t[n]={count:1,nicknameList:[]}}(t,e),r.forEach(n(ot,t,e))}function ct(t,r,a){a.items.forEach(n(it,t,r))}function ft(r){const a={},e=c("quickSearchList")||[]
r.r.forEach(n(ct,a,e))
const s=t()
return f(s,st(a,e)),s}let dt,mt
function ut(t,n,r){0===r.r&&a(`<span class="fastWorn">${n}</span>`,t.parentNode)}function lt(t,r,a){$("QuickWear","doAction - "+a),g("",t),t.classList.remove("smallLink"),t.classList.add("fshSpinner","fshSpin12"),r(t.dataset.itemid).then(n(ut,t,a))}function ht(t){lt(t,M,"Used")}function pt(t){dt?ht(t):Q("Use/Extract Item","Are you sure you want to use/extract the item?",n(ht,t))}function bt(t){lt(t,T,"Worn")}function jt(t,n,r){const a=r.dom
if("0"===t)a.classList.remove("fshHide")
else{const r=t!==n.toString()
N(a,r)}}function kt(t,r){const a=r.id
r.items.forEach(n(jt,t,a))}function $t(t){const r=t.dataset.folder
mt.r.forEach(n(kt,r))}function gt(){dt=!dt,k("disableQuickWearPrompts",dt)}function Lt(n){r(n,t({className:"qwPref",innerHTML:A("disableQuickWearPrompts")}))}function yt(t,n,a){r(a,t(n))}function wt(t,r){I("qwtab-header",Lt),I("qwtab0",n(yt,K,r)),I("qwtab1",n(yt,ft,r)),z(t,["Quick Wear / Use / Extract<br>Manager","Inventory Manager Counter<br>filtered by AH Quick Search"],"qwtab"),b(t,U([[n(O,["smallLink","fshEq"]),bt],[n(O,["smallLink","fshUse"]),pt],[n(j,"fshFolder"),$t],[W("disableQuickWearPrompts"),gt]]))}function Et(t,n){(function(t){return t&&t.s&&L(t.r)})(n)&&(mt=n,wt(t,n))}function At(t){l()&&function(t){const r=t||p
r&&(f(r,"Getting item list from backpack..."),P().then(n(Et,r)),dt=h("disableQuickWearPrompts"))}(t)}export default At
//# sourceMappingURL=quickWear-b742d05e.js.map
