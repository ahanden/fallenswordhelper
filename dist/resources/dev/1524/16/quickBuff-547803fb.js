import{N as t,z as e,b as n,A as s,I as a,s as i,O as f,x as r,P as c,w as u,o}from"./calfSystem-d49dbbd3.js"
import{s as l}from"./setTipped-d04acae4.js"
import"./insertElementBefore-5eb6d41d.js"
import{c as d}from"./createSpan-d12a564e.js"
import"./indexAjaxJson-6ef1f9f4.js"
import{c as b}from"./csvSplit-0254185d.js"
import{i as m}from"./insertHtmlAfterEnd-43b283e0.js"
import"./cmdExport-1b537f9c.js"
import{i as h}from"./insertElementAfter-e7cdbe3b.js"
import{o as p}from"./outputFormat-7722a546.js"
import"./splitTime-f8892642.js"
import{f as k}from"./formatLastActivity-157174a5.js"
import{g as q}from"./getProfile-c6e60ebe.js"
import{d as v,q as E}from"./quickbuffSuccess-d105e274.js"
function T(s){const a=function(e){let s=t("span.fshLastActivity",e)
if(!s){s=d({className:"fshLastActivity"})
const t=n("h1",e)[0]
h(s,t)}return s}(t(`div.player[data-username="${s.username}"]`))
e(`Last Activity: ${k(s.last_login)}<br>Stamina: ${s.current_stamina} / ${s.stamina} ( ${Math.floor(s.current_stamina/s.stamina*100)}% )`,a)}function j(t){return Number(s(t).replace(/\[|\]/g,""))}function S(t,n,s){if(!n)return void e("",s)
const a=j(t.nextElementSibling.children[0].children[0]),i=function(t,e){if(!e){const e=d({className:"fshPlayer"})
return h(e,t.nextElementSibling),e}return e}(t,s),f=function(t,e){return t>e?"fshRed":"fshGreen"}(a,n)
e(` <span class="${f}">[${n}]</span>`,i)}function g(t,e){return e[0]===t}function y(t,e){const n=function(t,e){const n=e.getAttribute("data-name"),s=t.find(i(g,n))
if(s)return s[1]}(t,e),s=e.nextElementSibling.nextElementSibling;(n||s)&&S(e,n,s)}function $(t){return t.split(/ \[|]/)}function x(t){const e=t.target
if("H1"!==e.tagName)return
q(s(e)).then(T)
const n=function(t){return b(s(t.parentNode.lastElementChild)).map($)}(e)
a("#buff-outer input[name]").forEach(i(y,n))}const A=[50,54,55,56,60,61,98,101]
function B(t,e){(function(t,e){return!A.includes(Number(t.htmlFor.slice(6)))&&j(e.children[0])<125})(t,e)&&t.classList.add("fshDim")}function N(t){const e=t.children[0]
!function(t,e){const n=e.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
l(n.replace("</center>",`<br>Stamina Cost: ${s}$&`),e)}(t,e),B(t,e)}function H(t){const e=r("skill-"+t)
e&&(e.checked=!0)}function L(){const t=f("blist")
t&&function(t){t.split(";").forEach(H)}(t)}let D=0
function R(){const t=n("h1",r("players"))[0]
if(function(t){return!t&&D<9}(t))return D+=1,void setTimeout(R,100)
t&&c(t)}function F(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const e=Math.floor(t/60),n=t%60
let s=p(e,"m")
return e>0&&n>0&&(s+=" "),s+=p(n,"s"),s}(t)})</span>`}function M(e,n){const s=e[n]||0
return s?F(s):function(e){const n=t(`#buff-outer input[data-name="${e}"]`)
return n?`<span class="quickbuffActivate" data-buffid="${n.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(n)}function w(t,n,s){e(M(t,n),s)}function G(t,e){return t[e.name]=e.duration,t}function O(t,e){return e.name===t}function _(t,n,s){const a=function(t,e){const n=t.find(i(O,e))
return n&&n.value||0}(t,n)
let f="fshLime"
a<100&&(f="fshRed"),e(`<span class="${f}">${a}%</span>`,s)}function C(t){!function(t){const e=t._enhancements
_(e,"Sustain",r("fshSus")),_(e,"Fury Caster",r("fshFur"))}(t),function(t){const e=t._skills.reduce(G,{})
w(e,"Guild Buffer",r("fshGB")),w(e,"Buff Master",r("fshBM")),w(e,"Extend",r("fshExt")),w(e,"Reinforce",r("fshRI"))}(t)}function P(t,n){E(n)&&(t.className="fshLime",e("On",t))}function I(t){const e=t.target
"quickbuffActivate"===e.className&&v([window.self],[e.dataset.buffid]).then(i(P,e))}export default function(){if(u())return
const t=r("quickbuff")
t&&(q(window.self).then(C),m(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),a('#buff-outer label[for^="skill-"]').forEach(N),L(),o(r("helperQBheader"),I),o(r("players"),x),r("targetPlayers").value&&R())}
//# sourceMappingURL=quickBuff-547803fb.js.map
