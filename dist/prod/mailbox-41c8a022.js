import{y as t,z as n,g as s,p as i,P as e,Q as c,v as a,k as o,l as r,h as f,o as u,q as d,C as l,A as m}from"./calfSystem-cb871cc0.js"
import{i as p}from"./isArray-2b606546.js"
import{c as h}from"./createInput-91fe6fc0.js"
import{c as k}from"./createLabel-d3b06769.js"
import{c as b}from"./createUl-7522713d.js"
import{c as g}from"./chunk-17e4d367.js"
import{j as v,o as T}from"./jsonFail-0858a594.js"
function j(n){return function(n){return t({cmd:"tempinv",subcmd:"takeitems",item:n})}(n)}function x(t,n,s){const i=k({id:t,className:"sendLink",htmlFor:"fshQuickTake",textContent:`Toggle ${n}`})
return e(i,s),i}function y(t,n){const s=n.children[0],{tipped:i}=s.dataset,e=o.exec(i)
if(!e)return t
const c=e[1],a=e[2]
return t[c]?t[c].invIds.push(a):t[c]={invIds:[a],tipped:i.replace(/&extra=\d/,""),src:s.src},t}function L(t,n){const s=n[1],i=r(),e=r({innerHTML:`<img src="${s.src}" class="tip-dynamic" `+`data-tipped="${s.tipped}">`})
f(i,e)
const c=r({innerHTML:`<button class="fshBl fshBls" data-id="${n[0]}">Take All ${s.invIds.length}</button>`})
f(i,c),f(t,i)}function q(t){!function(t){const n=$(`#temp-inv-img-${t}`).qtip("api")
n&&n.destroy(!0)}(t.id)
const n=m(`temp-inv-${t.id}`)
n&&l("",n)}function I(t,n){v(n,t)||p(n.r)&&function(t,n){n.r.forEach(q),T(`${n.r.length.toString()} item(s) taken.`,t)}(t,n)}function M(t,n){j(n).then(a(I,t))}function Q(t,n,s){s.target.classList.contains("fshBls")&&function(t,n,s){const i=s.dataset.id,{invIds:e}=t[i]
l(`taking all ${e.length} items`,s.parentNode),g(40,e).forEach(a(M,n))}(t,n,s.target)}function C(t,n,s){const i=r({className:"fshTakeGrid"})
!function(t,n){d(n).forEach(a(L,t))}(i,t),f(n,i),u(i,a(Q,t,s))}function E(t){const n=r({id:"quickTake",innerHTML:'<div class="fshCenter"><br><font size="3"><b>Quick Take</b></font><br><br>Select which item to take all similar items from your Mailbox.</div><div></div>'}),s=function(t){const n=r(),s=b()
return f(n,s),f(t,n),s}(n)
f(n,r()),C(t,n,s),f(i,n)}function A(t,n){x("qtOn","Mailbox",n),E(t.reduce(y,{}))}export default function(){if(n())return
const t=s("a",i)
if(0===t.length)return
const o=i.lastElementChild
!function(t,n){const s=h({id:"fshQuickTake",type:"checkbox"})
e(s,n),c(s,"change",a(A,t,n))}(t,o),x("qtOff","Quick Take",o)}
//# sourceMappingURL=mailbox-41c8a022.js.map