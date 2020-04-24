import{S as t,C as n,T as e,U as s,b as a,V as i,D as f,W as u,X as c,N as r,v as l,Y as o,A as d,Z as h,_ as b,z as p,$ as m,o as k}from"./calfSystem-94018cd0.js"
import{d as q,q as v}from"./quickbuffSuccess-2314ede9.js"
function $(f){const u=function(n){let e=t("span.fshLastActivity",n)
if(!e){e=s({className:"fshLastActivity"})
const t=a("h1",n)[0]
i(e,t)}return e}(t(`div.player[data-username="${f.username}"]`))
n(`Last Activity: ${e(f.last_login)}<br>Stamina: ${f.current_stamina} / ${f.stamina} ( ${Math.floor(f.current_stamina/f.stamina*100)}% )`,u)}function T(t){return Number(f(t).replace(/\[|\]/g,""))}function S(t,e,a){if(!e)return void n("",a)
const f=T(t.nextElementSibling.children[0].children[0]),u=function(t,n){if(!n){const n=s({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,a),c=function(t,n){return t>n?"fshRed":"fshGreen"}(f,e)
n(` <span class="${c}">[${e}]</span>`,u)}function y(t,n){return n[0]===t}function E(t,n){const e=function(t,n){const e=n.getAttribute("data-name"),s=t.find(l(y,e))
if(s)return s[1]}(t,n),s=n.nextElementSibling.nextElementSibling;(e||s)&&S(n,e,s)}function g(t){return t.split(/ \[|]/)}function B(t){const n=t.target
if("H1"!==n.tagName)return
u(f(n)).then($)
const e=function(t){return c(f(t.parentNode.lastElementChild)).map(g)}(n)
r("#buff-outer input[name]").forEach(l(E,e))}const x=[50,54,55,56,60,61,98,101]
function N(t,n){(function(t,n){return!x.includes(Number(t.htmlFor.slice(6)))&&T(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function A(t){const n=t.children[0]
!function(t,n){const e=n.dataset.tipped,{cost:s}=t.previousElementSibling.dataset
n.dataset.tipped=e.replace("</center>",`<br>Stamina Cost: ${s}$&`)}(t,n),N(t,n)}function D(t){const n=d(`skill-${t}`)
n&&(n.checked=!0)}function H(){const t=o("blist")
t&&function(t){t.split(";").forEach(D)}(t)}let L=0
function R(){const t=a("h1",d("players"))[0]
if(function(t){return!t&&L<9}(t))return L+=1,void setTimeout(R,100)
t&&h(t)}function M(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),e=t%60
let s=b(n,"m")
return n>0&&e>0&&(s+=" "),s+=b(e,"s"),s}(t)})</span>`}function _(n,e){const s=n[e]||0
return s?M(s):function(n){const e=t(`#buff-outer input[data-name="${n}"]`)
return e?`<span class="quickbuffActivate" data-buffid="${e.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(e)}function C(t,e,s){n(_(t,e),s)}function F(t,n){return t[n.name]=n.duration,t}function G(t,n){return n.name===t}function w(t,e,s){const a=function(t,n){const e=t.find(l(G,n))
return e&&e.value||0}(t,e)
let i="fshLime"
a<100&&(i="fshRed"),n(`<span class="${i}">${a}%</span>`,s)}function O(t){!function(t){const n=t._enhancements
w(n,"Sustain",d("fshSus")),w(n,"Fury Caster",d("fshFur"))}(t),function(t){const n=t._skills.reduce(F,{})
C(n,"Guild Buffer",d("fshGB")),C(n,"Buff Master",d("fshBM")),C(n,"Extend",d("fshExt")),C(n,"Reinforce",d("fshRI"))}(t)}function j(t,e){v(e)&&(t.className="fshLime",n("On",t))}function I(t){const n=t.target
"quickbuffActivate"===n.className&&q([window.self],[n.dataset.buffid]).then(l(j,n))}export default function(){if(p())return
const t=d("quickbuff")
t&&(u(window.self).then(O),m(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),r('#buff-outer label[for^="skill-"]').forEach(A),H(),k(d("helperQBheader"),I),k(d("players"),B),d("targetPlayers").value&&R())}
//# sourceMappingURL=quickBuff-40b1e05b.js.map
