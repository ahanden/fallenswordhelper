import{r as n,y as t,p as e,h as i,o as s,S as a,U as o,C as c,N as r,by as u,ax as f,aw as m,P as l,j as p}from"./calfSystem-8dc0fa4b.js"
import{c as v}from"./createInput-29f46dac.js"
import{i as d}from"./insertTextBeforeEnd-6e2a79ca.js"
import{j as h,o as b}from"./jsonFail-efc9ada5.js"
import{x as g}from"./xPath-25f95332.js"
function j(n){return function(n){return t({cmd:"inventing",subcmd:"doinvent",recipe_id:n})}(n)}let C,y,N
function w(n){var t
h(n,N)||b((t=n.r).item?`<span class="fshGreen">You successfully invented the item [${t.item.n}].</span>`:'<span class="fshRed">You have failed to invent the item.</span>',N)}function x(n){c(n,y),c("",N)}function I(){const n=Number(C.value)
if(!n)return void x("")
const t=a('input[name="recipe_id"]').value
x(`Inventing ${String(n)} Items`)
for(let e=0;e<n;e+=1)j(t).then(w)}function $(n){const t=n.insertRow(-1).insertCell(-1)
return t.className="fshCenter",t}function S(t){var e
N=n("ol",e),i(t,N)}function _(n){!function(n){y=o(),i(n,y)}(n),S(n)}function k(n){var t
t=$(n),d(t,"Select how many to quick invent"),C=v({className:"custominput fshNumberInput",min:0,type:"number",value:1}),i(t,C),function(n){const t=v({className:"custombutton",type:"button",value:"Quick invent items"})
i(n,t),s(t,I)}($(n)),_($(n))}function E(n){return`${f}items${m}view&item_id=${n}`}function P(n,t){const e=function(n){if(!n)return
const t=n.src.match(/\/items\/(\d+)\.gif/)
return t?t[1]:void 0}(t)
if(!e)return
const s=function(n){return u({href:E(n),target:"_blank"})}(e)
l(s,n),i(s,n)}function R(n){P(n,n)}function T(){!function(){const n=g('.//b[.="Target Invention"]/../../following-sibling::*[1]//img')
P(a("#pCC b"),n)}(),r('#pCC img[src*="/items/"]').forEach(R)}export default function(){p()&&(T(),k(e.lastElementChild))}
//# sourceMappingURL=inventing-8b16bf2d.js.map
