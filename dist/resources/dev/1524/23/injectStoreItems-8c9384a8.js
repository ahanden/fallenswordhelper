import{c as t,b0 as n,M as e,l as o,V as s,B as r,D as i,Z as c,aU as a,e as u,K as l,a as f,t as d,bk as m,at as p,as as h,bj as k,x as g,G as $,o as b,p as w}from"./calfSystem-9901ad27.js"
import{b as L}from"./batch-e74a5e93.js"
import{d as _}from"./doStatTotal-226a98f1.js"
import{c as x}from"./closestTr-5c087056.js"
import{d as y}from"./daAjaxSendItemsToRecipient-345eb63c.js"
import{e as S}from"./errorDialog-7f431a39.js"
import{g as v}from"./getInventoryById-8ce6ec79.js"
let E,D,Q
function A(){if(!D){const n="dropitems"===t.subcmd?"removeIndex[]":"storeIndex[]"
E=document.forms[0].elements[n],D=!0}return E}function j(){}function N(t){return t()}function C(){return Object.create(null)}function T(t){t.forEach(N)}function I(t){return"function"==typeof t}function B(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function H(t,n){t.appendChild(n)}function O(t,n,e){t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function R(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function M(){return F(" ")}function q(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function P(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t,n){n=""+n,t.data!==n&&(t.data=n)}function z(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e]
if(o.__value===n)return void(o.selected=!0)}}function K(t){const n=t.querySelector(":checked")||t.options[0]
return n&&n.__value}function Y(t){Q=t}function Z(){const t=function(){if(!Q)throw new Error("Function called outside component initialization")
return Q}()
return(n,e)=>{const o=t.$$.callbacks[n]
if(o){const s=function(t,n){const e=document.createEvent("CustomEvent")
return e.initCustomEvent(t,!1,!1,n),e}(n,e)
o.slice().forEach(n=>{n.call(t,s)})}}}const J=[],W=[],X=[],tt=[],nt=Promise.resolve()
let et=!1
function ot(t){X.push(t)}let st=!1
const rt=new Set
function it(){if(!st){st=!0
do{for(let t=0;t<J.length;t+=1){const n=J[t]
Y(n),ct(n.$$)}for(J.length=0;W.length;)W.pop()()
for(let t=0;t<X.length;t+=1){const n=X[t]
rt.has(n)||(rt.add(n),n())}X.length=0}while(J.length)
for(;tt.length;)tt.pop()()
et=!1,st=!1,rt.clear()}}function ct(t){if(null!==t.fragment){t.update(),T(t.before_update)
const n=t.dirty
t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(ot)}}const at=new Set
function ut(t,n){-1===t.$$.dirty[0]&&(J.push(t),et||(et=!0,nt.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function lt(t,n,e,o,s,r,i=[-1]){const c=Q
Y(t)
const a=n.props||{},u=t.$$={fragment:null,ctx:null,props:r,update:j,not_equal:s,bound:C(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:C(),dirty:i}
let l=!1
if(u.ctx=e?e(t,a,(n,e,...o)=>{const r=o.length?o[0]:e
return u.ctx&&s(u.ctx[n],u.ctx[n]=r)&&(u.bound[n]&&u.bound[n](r),l&&ut(t,n)),e}):[],u.update(),l=!0,T(u.before_update),u.fragment=!!o&&o(u.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target)
u.fragment&&u.fragment.l(t),t.forEach(U)}else u.fragment&&u.fragment.c()
n.intro&&((f=t.$$.fragment)&&f.i&&(at.delete(f),f.i(d))),function(t,n,e){const{fragment:o,on_mount:s,on_destroy:r,after_update:i}=t.$$
o&&o.m(n,e),ot(()=>{const n=s.map(N).filter(I)
r?r.push(...n):T(n),t.$$.on_mount=[]}),i.forEach(ot)}(t,n.target,n.anchor),it()}var f,d
Y(c)}class ft{$destroy(){!function(t,n){const e=t.$$
null!==e.fragment&&(T(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=j}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[])
return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function dt(t){return function(t){return n({subcmd:"dodropitems",removeIndex:t})}(t)}let mt
function pt(){return mt||(mt=v()),mt}function ht(){return e(A()).filter(t=>!o("fshHide",x(t)))}function kt(t){return x(t.target).cells[0].children[0].value}async function gt(t,n,e){!function(t){const n=x(t)
n.cells[0].children[0].disabled=!0,i(".actionButton",n).forEach(t=>{t.disabled=!0,t.textContent="",t.removeAttribute("data-tooltip"),t.classList.add("inProgress")}),t.blur(),t.classList.add("fshSpinner","fshSpinner12")}(t.target)
const o=await n([kt(t)])
o&&o.s?function(t,n){t.target.classList.remove("fshSpinner","fshSpinner12"),t.target.classList.add("fshGreen"),t.target.textContent=n}(t,e):S(o)}const $t=[["Check All",async function(t){const{items:n}=await pt()
s("storeitems","Check All of Type"),ht().filter(e=>n[e.value]&&n[e.value].item_id===n[kt(t)].item_id).forEach(t=>{t.checked=!t.disabled&&!t.checked})}],["Quick Send",t=>{s("storeitems","Quick Send"),gt(t,y,"Sent")}],["Quick Drop",t=>{s("storeitems","Quick Drop"),gt(t,dt,"Dropped")}]]
function bt(t){if("A"===t.target.tagName&&["AH","UFSG"].includes(t.target.textContent)&&s("storeitems",t.target.textContent),"BUTTON"!==t.target.tagName||o("custombutton",t.target))return
const n=$t.find(([n])=>n===r(t.target))
n&&n[1](t)}function wt(n){let e,o,s,r,i,c,a,u,l,f,d,m,p=n[2](n[0])+"",h=n[2](n[1])+"",k="storeitems"===t.subcmd2&&function(t){let n,e,o,s,r
return{c(){n=F("["),e=G("button"),e.textContent="Select All Guild Locked",o=F("]"),P(e,"class","svelte-hnk7js")},m(i,c){O(i,n,c),O(i,e,c),O(i,o,c),s||(r=q(e,"click",t[5]),s=!0)},p:j,d(t){t&&U(n),t&&U(e),t&&U(o),s=!1,r()}}}(n)
return{c(){e=F("["),o=G("button"),s=F(p),r=F(" AH and UFSG Links"),i=F("] \n["),c=G("button"),a=F(h),u=F(" Quick Drop links"),l=F("] \n"),k&&k.c(),f=F(""),P(o,"class","svelte-hnk7js"),P(c,"class","svelte-hnk7js")},m(t,p){O(t,e,p),O(t,o,p),H(o,s),H(o,r),O(t,i,p),O(t,c,p),H(c,a),H(c,u),O(t,l,p),k&&k.m(t,p),O(t,f,p),d||(m=[q(o,"click",n[3]),q(c,"click",n[4])],d=!0)},p(n,[e]){1&e&&p!==(p=n[2](n[0])+"")&&V(s,p),2&e&&h!==(h=n[2](n[1])+"")&&V(a,h),"storeitems"===t.subcmd2&&k.p(n,e)},i:j,o:j,d(t){t&&U(e),t&&U(o),t&&U(i),t&&U(c),t&&U(l),k&&k.d(t),t&&U(f),d=!1,T(m)}}}function Lt(t,n,e){const o=Z()
let{showExtraLinks:r=!1}=n,{showQuickDropLinks:i=!1}=n
return t.$set=t=>{"showExtraLinks"in t&&e(0,r=t.showExtraLinks),"showQuickDropLinks"in t&&e(1,i=t.showQuickDropLinks)},[r,i,t=>t?"Hide":"Show",function(){s("storeitems","toggleShowExtraLinks"),e(0,r=!r),c("showExtraLinks",r),o("showExtraLinks",r)},function(){s("storeitems","toggleShowQuickDropLinks"),e(1,i=!i),c("showQuickDropLinks",i),o("showQuickDropLinks",i)},function(){s("storeitems","selectLocked"),o("selectLocked")}]}class _t extends ft{constructor(t){super(),lt(this,t,Lt,wt,B,{showExtraLinks:0,showQuickDropLinks:1})}}let xt
function yt(t,n){if(13699!==n.item_id)return n.item_name
const o=e(t).find(t=>t.value===String(n.inv_id))
return o?l(o.parentNode.parentNode.children[2]):n.item_name}async function St(t){return xt||(xt=await async function(t){const n=await pt()
return n&&n.items?a(u(n.items).map(([n,e])=>[n,{...e,item_name:yt(t,e)}])):{}}(t)),xt}const vt=["showExtraLinks","enableItemColoring","checkAllOfType","showQuickSendLinks","showQuickDropLinks"]
function Et(t,n){return t[n]=(t[n]||0)+1,t}const Dt=(t,n,e)=>`[<button class="fshStoreItemsButton ${t}"${n}>${e}</button>]`,Qt=(t,n,e)=>" "+Dt(t+" actionButton tooltip-multiline",(t=>` data-tooltip="INSTANTLY ${t} THE ITEM. NO REFUNDS OR DO-OVERS! Use at own risk."`)(n),"Quick "+e),At=(t,n,e)=>`[<a href="${t}"${n}>${e}</a>]`
function jt(t,n,[e,o]){const s=e
t[1]&&(s.className=m[o.rarity].clas)
let r=""
t[0]&&(r=`${function(t){return t.bound?'<span class="aHSpacer"></span>':At(`${k}${encodeURIComponent(t.item_name)}`,"","AH")}(o)} ${(t=>At(`${p}items${h}view&item_id=${t.item_id}`,' target="_blank"',"UFSG"))(o)}`),r+="&nbsp;"+o.item_name,((t,n,e)=>t[2]&&n[e.item_id]>1)(t,n,o)&&(r+=" "+Dt("fshBlack","","Check All")),((t,n)=>t[3]&&(!n.bound||-1!==n.guild_tag))(t,o)&&(r+=Qt("fshBlue","SENDS","Send")),((t,n)=>t[4]&&-1===n.guild_tag)(t,o)&&(r+=Qt("fshRed","DROP","Drop")),s.innerHTML!==r&&(s.innerHTML=r)}async function Nt(t){const n=await async function(){const t=A()
if(!t)return[]
const n=await St(t)
return e(t).map(t=>[x(t).cells[2],n[t.value]]).filter(([,t])=>t)}(),o=t[2]?function(t){return{...t.map(([,t])=>t.item_id).reduce(Et,{}),13699:1}}(n):[]
f(3,L,[[5,3,n,0,d(jt,t,o)]])}function Ct(t){const n=function(t){const n=document.forms[0]
return new _t({props:{showExtraLinks:t[0],showQuickDropLinks:t[4]},target:n.parentNode.children[5].children[0]})}(t)
n.$on("showExtraLinks",n=>{t[0]=n.detail,Nt(t)}),n.$on("showQuickDropLinks",n=>{t[4]=n.detail,Nt(t)}),n.$on("selectLocked",()=>{!async function(){const t=ht()
if(!t.length)return
const n=await pt()
n&&n.items&&t.map(t=>[t,n.items[t.value]]).filter(([,t])=>t).forEach(([t,n])=>{t.checked=!t.disabled&&-1!==n.guild_tag})}()})}async function Tt(){if(g())return
if(!A())return
const t=vt.map(t=>$(t))
_(),Ct(t),t.some(t=>t)&&Nt(t),b(w,bt)}export{ft as S,O as a,H as b,V as c,U as d,G as e,M as f,P as g,z as h,lt as i,R as j,Z as k,q as l,ot as m,j as n,K as o,A as p,dt as q,T as r,B as s,F as t,Tt as u,pt as v,ht as w}
//# sourceMappingURL=injectStoreItems-8c9384a8.js.map
