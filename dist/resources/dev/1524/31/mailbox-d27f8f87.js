import{c as t}from"./chunk-a5250b9a.js"
import{w as n,x as e,g as i,p as s,O as a,t as c,k as o,m as r,h as f,o as u,e as d,l as m,A as l,P as p,y as h}from"./calfSystem-393ab895.js"
import{c as k}from"./createInput-f7e07c00.js"
import{c as b}from"./createLabel-d7669076.js"
import{c as g}from"./createUl-7863af9d.js"
import{i as v}from"./insertElementBefore-43970b1f.js"
import{j as T,o as j}from"./jsonFail-34a5f6eb.js"
function x(t){return function(t){return n({cmd:"tempinv",subcmd:"takeitems",item:t})}(t)}function y(t,n,e){const i=b({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return v(i,e),i}function E(t,n){const e=n.children[0],{tipped:i}=e.dataset,s=o.exec(i)
if(!s)return t
const a=s[1],c=s[2]
return t[a]?t[a].invIds.push(c):t[a]={invIds:[c],tipped:i.replace(/&extra=\d/,""),src:e.src},t}function I(t,n){const e=n[1],i=r(),s=r({innerHTML:`<img src="${e.src}" class="tip-dynamic" data-tipped="${e.tipped}">`})
f(i,s)
const a=r({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${e.invIds.length}</button>`})
f(i,a),f(t,i)}function L(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=h(`temp-inv-${t.id}`)
n&&l("",n)}function M(t,n){T(n,t)||p(n.r)&&function(t,n){n.r.forEach(L),j(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function q(t,n){x(n).then(c(M,t))}function B(n,e,i){m("fshBls",i.target)&&function(n,e,i){const s=i.dataset.id,{invIds:a}=n[s]
l(`taking all ${a.length} items`,i.parentNode),t(40,a).forEach(c(q,e))}(n,e,i.target)}function Q(t,n,e){const i=r({className:"fshTakeGrid"})
!function(t,n){d(n).forEach(c(I,t))}(i,t),f(n,i),u(i,c(B,t,e))}function C(t){const n=r({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),e=function(t){const n=r(),e=g()
return f(n,e),f(t,n),e}(n)
f(n,r()),Q(t,n,e),f(s,n)}function H(t,n){y("qtOn","Mailbox",n)
C(t.reduce(E,{}))}function N(){if(e())return
const t=i("a",s)
if(0===t.length)return
const n=s.lastElementChild
!function(t,n){const e=k({id:"fshQuickTake",type:"checkbox"})
v(e,n),a(e,"change",c(H,t,n))}(t,n),y("qtOff","Quick Take",n)}export default N
//# sourceMappingURL=mailbox-d27f8f87.js.map