import{c as n}from"./createInput-07b7fd77.js"
import{n as t,x as e,u as s,w as i,$ as o,p as c,h as r,o as a,D as u,B as f,E as m,aI as l,az as p,j as d}from"./calfSystem-030d7057.js"
import{c as v}from"./createSpan-cbce88a2.js"
import{i as b}from"./insertTextBeforeEnd-e409f1b0.js"
import{j as h,o as g}from"./jsonFail-82e425e9.js"
import{c as j}from"./createAnchor-878d69d7.js"
import{i as C}from"./insertElementBefore-2bf2da7f.js"
import{x as y}from"./xPath-7e956333.js"
function I(n){return e({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}function _(n){const t=i(n)
return t.includes("successfully")?{r:{item:{}},s:!0}:{e:{message:t},s:!1}}function w(n){return s({cmd:"inventing",subcmd:"doinvent",recipe_id:n}).then(_)}let x,E,N
function $(n){h(n,N)||g(n.r.success_count>0?'<span class="fshGreen">You successfully invented.</span>':'<span class="fshRed">You have failed to invent.</span>',N)}function S(n){f(n,E),f("",N)}function k(){const n=Number(x.value)
if(!n)return void S("")
const t=u('input[name="recipe_id"]').value
S(`Inventing ${String(n)} Items`)
for(let s=0;s<n;s+=1)(e=t,o(I,w,e)).then($)
var e}function B(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function R(n){var e
N=t("ol",e),r(n,N)}function T(n){!function(n){E=v(),r(n,E)}(n),R(n)}function Y(t){var e
e=B(t),b(e,"Select how many to quick invent"),x=n({className:"custominput fshNumberInput",min:0,type:"number",value:1}),r(e,x),function(t){const e=n({className:"custombutton",type:"button",value:"Quick invent items"})
r(t,e),a(e,k)}(B(t)),T(B(t))}function q(n){return`${l}items${p}view&item_id=${n}`}function z(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return j({href:q(n),target:"_blank"})}(e)
C(s,n),r(s,n)}function A(n){z(n,n)}function D(){!function(){const n=y('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
z(u("#pCC b"),n)}(),m('#pCC img[src*="/items/"]').forEach(A)}function F(){d()&&(D(),Y(c.lastElementChild))}export default F
//# sourceMappingURL=inventing-e23b28ac.js.map
