import{c as t}from"./closestTr-c4f59af3.js"
import{d as e}from"./daAjaxSendItemsToRecipient-de059678.js"
import{c as n,bp as s,N as i,l as o,W as a,C as r,E as c,_ as u,aB as l,e as d,H as f,a as m,t as p,bn as h,aD as k,as as g,bb as L,y as b,I as w,o as S,p as $}from"./calfSystem-71efcdd9.js"
import{e as x}from"./errorDialog-f60f17b2.js"
import{g as D}from"./getInventoryById-c1b4f3f9.js"
import{d as E}from"./doStatTotal-a5e68f3e.js"
import{S as _,i as Q,s as v,t as y,e as N,p as T,g as A,a as I,b as C,l as H,c as j,n as B,d as R,r as O,k as U}from"./index-72f73b9a.js"
import{b as G}from"./batch-55e783d3.js"
let F,M,P
function V(){if(!M){const t="dropitems"===n.subcmd?"removeIndex[]":"storeIndex[]"
F=document.forms[0].elements[t],M=!0}return F}function W(t){return function(t){return s({subcmd:"dodropitems",removeIndex:t})}(t)}function Y(){const t=V()
return t?i(t instanceof RadioNodeList?t:[t]):[]}function q(){return Y().filter((e=>!o("fshHide",t(e))))}function z(){return P||(P=D()),P}function J(e){return t(e.target).cells[0].children[0].value}async function K(e,n,s){!function(e){const n=t(e)
n.cells[0].children[0].disabled=!0,c(".actionButton",n).forEach((t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")})),e.blur(),e.classList.add("fshSpinner","fshSpinner12")}(e.target)
const i=await n([J(e)])
i&&i.s?function(t,e){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=e}(e,s):x(i)}const X=[["Check All",async function(t){const{items:e}=await z()
a("storeitems","Check All of Type"),q().filter((n=>e[n.value]&&e[n.value].item_id===e[J(t)].item_id)).forEach((t=>{t.checked=!t.disabled&&!t.checked}))}],["Quick Send",t=>{a("storeitems","Quick Send"),K(t,e,"Sent")}],["Quick Drop",t=>{a("storeitems","Quick Drop"),K(t,W,"Dropped")}]]
function Z(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&a("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const e=X.find((([e])=>e===r(t.target)))
e&&e[1](t)}function tt(t){let e,s,i,o,a,r,c,u,l,d,f,m,p=t[2](t[0])+"",h=t[2](t[1])+"",k="storeitems"===n.subcmd2&&function(t){let e,n,s,i,o
return{c(){e=y("["),n=N("button"),n.textContent="Select All Guild Locked",s=y("]"),A(n,"class","svelte-h3aclh")},m(a,r){I(a,e,r),I(a,n,r),I(a,s,r),i||(o=H(n,"click",t[5]),i=!0)},p:B,d(t){t&&R(e),t&&R(n),t&&R(s),i=!1,o()}}}(t)
return{c(){e=y("["),s=N("button"),i=y(p),o=y(" AH and UFSG Links"),a=y("] \n["),r=N("button"),c=y(h),u=y(" Quick Drop links"),l=y("] \n"),k&&k.c(),d=T(),A(s,"class","svelte-h3aclh"),A(r,"class","svelte-h3aclh")},m(n,p){I(n,e,p),I(n,s,p),C(s,i),C(s,o),I(n,a,p),I(n,r,p),C(r,c),C(r,u),I(n,l,p),k&&k.m(n,p),I(n,d,p),f||(m=[H(s,"click",t[3]),H(r,"click",t[4])],f=!0)},p(t,[e]){1&e&&p!==(p=t[2](t[0])+"")&&j(i,p),2&e&&h!==(h=t[2](t[1])+"")&&j(c,h),"storeitems"===n.subcmd2&&k.p(t,e)},i:B,o:B,d(t){t&&R(e),t&&R(s),t&&R(a),t&&R(r),t&&R(l),k&&k.d(t),t&&R(d),f=!1,O(m)}}}function et(t,e,n){const s=U()
let{showExtraLinks:i=!1}=e,{showQuickDropLinks:o=!1}=e
return t.$$set=t=>{"showExtraLinks"in t&&n(0,i=t.showExtraLinks),"showQuickDropLinks"in t&&n(1,o=t.showQuickDropLinks)},[i,o,t=>t?"Hide":"Show",function(){a("storeitems","toggleShowExtraLinks"),n(0,i=!i),u("showExtraLinks",i),s("showExtraLinks",i)},function(){a("storeitems","toggleShowQuickDropLinks"),n(1,o=!o),u("showQuickDropLinks",o),s("showQuickDropLinks",o)},function(){a("storeitems","selectLocked"),s("selectLocked")}]}class nt extends _{constructor(t){super(),Q(this,t,et,tt,v,{showExtraLinks:0,showQuickDropLinks:1})}}let st
function it(t,e){if(13699!==e.item_id)return e.item_name
const n=t.find((t=>t.value===String(e.inv_id)))
return n?f(n.parentNode.parentNode.children[2]):e.item_name}async function ot(t){return st||(st=await async function(t){const e=await z()
return e&&e.items?l(d(e.items).map((([e,n])=>[e,{...n,item_name:it(t,n)}]))):{}}(t)),st}const at=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function rt(t,e){return t[e]=(t[e]||0)+1,t}const ct=(t,e,n)=>`[<button class="fshStoreItemsButton ${t}"${e}>${n}</button>]`,ut=(t,e,n)=>` ${ct(`${t} actionButton tooltip-multiline`,(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(e),`Quick ${n}`)}`,lt=(t,e,n)=>`[<a href="${t}"${e}>${n}</a>]`
function dt(t,e){return e[0]()?t+e[1]():t}function ft(t,e,n){return[[()=>t[0],()=>`${function(t){return t.bound?'<span class="aHSpacer"></span>':lt(`${L}${encodeURIComponent(t.item_name)}`,"","AH")}(n)} ${(t=>lt(`${k}items${g}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(n)}`],[()=>!0,()=>`&nbsp;${n.item_name}`],[()=>((t,e,n)=>t[2]&&e[n.item_id]>1)(t,e,n),()=>` ${ct("fshBlack","","Check All")}`],[()=>((t,e)=>t[3]&&(!e.bound||-1!==e.guild_tag))(t,n),()=>ut("fshBlue","SENDS","Send")],[()=>((t,e)=>t[4]&&-1===e.guild_tag)(t,n),()=>ut("fshRed","DROP","Drop")]]}function mt(t,e,[n,s]){const i=n
t[1]&&(i.className=h[s.rarity].clas)
const o=ft(t,e,s).reduce(dt,"")
i.innerHTML!==o&&(i.innerHTML=o)}async function pt(e){const n=await async function(){const e=Y()
if(!e.length)return[]
const n=await ot(e)
return e.map((e=>[t(e).cells[2],n[e.value]])).filter((([,t])=>t))}(),s=e[2]?function(t){return{...t.map((([,t])=>t.item_id)).reduce(rt,{}),13699:1}}(n):[]
m(3,G,[[5,3,n,0,p(mt,e,s)]])}function ht(t){const e=function(t){const e=document.forms[0]
return new nt({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:e.parentNode.children[5].children[0]})}(t)
e.$on("showExtraLinks",(e=>{t[0]=e.detail,pt(t)})),e.$on("showQuickDropLinks",(e=>{t[4]=e.detail,pt(t)})),e.$on("selectLocked",(()=>{!async function(){const t=q()
if(!t.length)return
const e=await z()
e&&e.items&&t.map((t=>[t,e.items[t.value]])).filter((([,t])=>t)).forEach((([t,e])=>{t.checked=!t.disabled&&-1!==e.guild_tag}))}()}))}async function kt(){if(b())return
if(!V())return
const t=at.map((t=>w(t)))
E(),ht(t),t.some((t=>t))&&pt(t),S($,Z)}export{V as a,z as b,q as c,W as d,Y as g,kt as i}
//# sourceMappingURL=injectStoreItems-87fd55b6.js.map
