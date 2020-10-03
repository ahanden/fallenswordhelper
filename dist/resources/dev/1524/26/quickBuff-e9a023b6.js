import{C as t,A as n,b as s,B as e,D as a,t as i,y as f,Q as r,R as c,x as u,o}from"./calfSystem-4991bf5b.js"
import{s as l}from"./setTipped-7d31935e.js"
import"./insertElementBefore-47c09359.js"
import{c as d}from"./createSpan-7856b9fc.js"
import"./indexAjaxJson-b9139aa9.js"
import"./cmdExport-f5c9af35.js"
import{c as m}from"./csvSplit-653f6227.js"
import{i as b}from"./insertHtmlAfterEnd-93fb4549.js"
import{i as h}from"./insertElementAfter-859d6fd1.js"
import{o as p}from"./outputFormat-007d893f.js"
import"./splitTime-6b91c10c.js"
import{f as k}from"./formatLastActivity-18ad0a83.js"
import{g as q}from"./getProfile-80a3e208.js"
import{d as y,q as E}from"./quickbuffSuccess-f68fc7b1.js"
function T(e){const a=function(n){let e=t("span.fshLastActivity",n)
if(!e){e=d({className:"fshLastActivity"})
const t=s("h1",n)[0]
h(e,t)}return e}(t(`div.player[data-username="${e.username}"]`))
n(`Last Activity: ${k(e.last_login)}<br>Stamina: ${e.current_stamina} / ${e.stamina} ( ${Math.floor(e.current_stamina/e.stamina*100)}% )`,a)}function v(t){return Number(e(t).replace(/\[|\]/g,""))}function g(t,s,e){if(!s)return void n("",e)
const a=v(t.nextElementSibling.children[0].children[0]),i=function(t,n){if(!n){const n=d({className:"fshPlayer"})
return h(n,t.nextElementSibling),n}return n}(t,e),f=function(t,n){return t>n?"fshRed":"fshGreen"}(a,s)
n(` <span class="${f}">[${s}]</span>`,i)}function j(t,n){return n[0]===t}function S(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(i(j,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&g(n,s,e)}function $(t){return t.split(/ \[|]/)}function x(t){const n=t.target
if("H1"!==n.tagName)return
q(e(n)).then(T)
const s=function(t){return m(e(t.parentNode.lastElementChild)).map($)}(n)
a("#buff-outer input[name]").forEach(i(S,s))}const B=[50,54,55,56,60,61,98,101]
function A(t,n){(function(t,n){return!B.includes(Number(t.htmlFor.slice(6)))&&v(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function D(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
l(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),A(t,n)}function H(t){const n=s("h1",f("players"))[0]
!function(t,n){return!t&&n}(n,t)?n&&r(n):setTimeout(H,100,t-1)}function L(){f("targetPlayers").value&&H(9)}function N(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),s=t%60
let e=p(n,"m")
return n>0&&s>0&&(e+=" "),e+=p(s,"s"),e}(t)})</span>`}function R(n,s){const e=n[s]||0
return e?N(e):function(n){const s=t(`#buff-outer input[data-name="${n}"]`)
return s?`<span class="quickbuffActivate" data-buffid="${s.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(s)}function w(t,s,e){n(R(t,s),e)}function F(t,n){return t[n.name]=n.duration,t}function M(t,n){return n.name===t}function C(t,s,e){const a=function(t,n){const s=t.find(i(M,n))
return s&&s.value||0}(t,s)
let f="fshLime"
a<100&&(f="fshRed"),n(`<span class="${f}">${a}%</span>`,e)}function G(t){!function(t){const n=t._enhancements
C(n,"Sustain",f("fshSus")),C(n,"Fury Caster",f("fshFur"))}(t),function(t){const n=t._skills.reduce(F,{})
w(n,"Guild Buffer",f("fshGB")),w(n,"Buff Master",f("fshBM")),w(n,"Extend",f("fshExt")),w(n,"Reinforce",f("fshRI"))}(t)}function _(t){const n=f("skill-"+t)
n&&(n.checked=!0)}function O(){const t=c("blist")
t&&function(t){t.split(";").forEach(_)}(t)}let P
function Q(){P.length?(window.addPlayer(P.shift()),setTimeout(Q,200)):L()}function I(t,s){E(s)&&(t.className="fshLime",n("On",t))}function J(t){const n=t.target
"quickbuffActivate"===n.className&&y([window.self],[n.dataset.buffid]).then(i(I,n))}function z(){if(u())return
const t=f("quickbuff")
t&&(q(window.self).then(G),b(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),a('#buff-outer label[for^="skill-"]').forEach(D),O(),function(){const t=c("players")
t&&(P=m(t),Q())}(),o(f("helperQBheader"),J),o(f("players"),x),L())}export default z
//# sourceMappingURL=quickBuff-e9a023b6.js.map
