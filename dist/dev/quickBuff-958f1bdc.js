import{S as t,C as n,T as s,U as e,b as a,V as i,D as f,W as c,X as u,N as r,v as l,Y as o,A as d,Z as h,_ as b,z as m,$ as p,o as k}from"./calfSystem-8dc0fa4b.js"
import{s as q}from"./setTipped-e2c23c98.js"
import{d as v,q as T}from"./quickbuffSuccess-1c75a552.js"
function $(f){const c=function(n){let s=t("span.fshLastActivity",n)
if(!s){s=e({className:"fshLastActivity"})
const t=a("h1",n)[0]
i(s,t)}return s}(t(`div.player[data-username="${f.username}"]`))
n(`Last Activity: ${s(f.last_login)}<br>Stamina: ${f.current_stamina} / ${f.stamina} ( ${Math.floor(f.current_stamina/f.stamina*100)}% )`,c)}function S(t){return Number(f(t).replace(/\[|\]/g,""))}function y(t,s,a){if(!s)return void n("",a)
const f=S(t.nextElementSibling.children[0].children[0]),c=function(t,n){if(!n){const n=e({className:"fshPlayer"})
return i(n,t.nextElementSibling),n}return n}(t,a),u=function(t,n){return t>n?"fshRed":"fshGreen"}(f,s)
n(` <span class="${u}">[${s}]</span>`,c)}function E(t,n){return n[0]===t}function g(t,n){const s=function(t,n){const s=n.getAttribute("data-name"),e=t.find(l(E,s))
if(e)return e[1]}(t,n),e=n.nextElementSibling.nextElementSibling;(s||e)&&y(n,s,e)}function B(t){return t.split(/ \[|]/)}function x(t){const n=t.target
if("H1"!==n.tagName)return
c(f(n)).then($)
const s=function(t){return u(f(t.parentNode.lastElementChild)).map(B)}(n)
r("#buff-outer input[name]").forEach(l(g,s))}const N=[50,54,55,56,60,61,98,101]
function A(t,n){(function(t,n){return!N.includes(Number(t.htmlFor.slice(6)))&&S(n.children[0])<125})(t,n)&&t.classList.add("fshDim")}function D(t){const n=t.children[0]
!function(t,n){const s=n.dataset.tipped,{cost:e}=t.previousElementSibling.dataset
q(s.replace("</center>",`<br>Stamina Cost: ${e}$&`),n)}(t,n),A(t,n)}function H(t){const n=d(`skill-${t}`)
n&&(n.checked=!0)}function L(){const t=o("blist")
t&&function(t){t.split(";").forEach(H)}(t)}let R=0
function M(){const t=a("h1",d("players"))[0]
if(function(t){return!t&&R<9}(t))return R+=1,void setTimeout(M,100)
t&&h(t)}function _(t){return`<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${function(t){const n=Math.floor(t/60),s=t%60
let e=b(n,"m")
return n>0&&s>0&&(e+=" "),e+=b(s,"s"),e}(t)})</span>`}function C(n,s){const e=n[s]||0
return e?_(e):function(n){const s=t(`#buff-outer input[data-name="${n}"]`)
return s?`<span class="quickbuffActivate" data-buffid="${s.value}">Activate</span>`:'<span class="fshRed;">Off</span>'}(s)}function F(t,s,e){n(C(t,s),e)}function G(t,n){return t[n.name]=n.duration,t}function w(t,n){return n.name===t}function O(t,s,e){const a=function(t,n){const s=t.find(l(w,n))
return s&&s.value||0}(t,s)
let i="fshLime"
a<100&&(i="fshRed"),n(`<span class="${i}">${a}%</span>`,e)}function j(t){!function(t){const n=t._enhancements
O(n,"Sustain",d("fshSus")),O(n,"Fury Caster",d("fshFur"))}(t),function(t){const n=t._skills.reduce(G,{})
F(n,"Guild Buffer",d("fshGB")),F(n,"Buff Master",d("fshBM")),F(n,"Extend",d("fshExt")),F(n,"Reinforce",d("fshRI"))}(t)}function I(t,s){T(s)&&(t.className="fshLime",n("On",t))}function P(t){const n=t.target
"quickbuffActivate"===n.className&&v([window.self],[n.dataset.buffid]).then(l(I,n))}export default function(){if(m())return
const t=d("quickbuff")
t&&(c(window.self).then(j),p(t.children[0],'<div id="helperQBheader"><table class="quickbuffTable"><thead><tr><th class="quickbuffTableHeader">Sustain</th><th class="quickbuffTableHeader">Fury Caster</th><th class="quickbuffTableHeader">Guild Buffer</th><th class="quickbuffTableHeader">Buff Master</th><th class="quickbuffTableHeader">Extend</th><th class="quickbuffTableHeader">Reinforce</th></tr></thead><tbody><tr><td id="fshSus" class="quickbuffTableDetail">&nbsp;</td><td id="fshFur" class="quickbuffTableDetail">&nbsp;</td><td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td><td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td><td id="fshExt" class="quickbuffTableDetail">&nbsp;</td><td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td></tr></tbody></table></div>'),r('#buff-outer label[for^="skill-"]').forEach(D),L(),k(d("helperQBheader"),P),k(d("players"),x),d("targetPlayers").value&&M())}
//# sourceMappingURL=quickBuff-958f1bdc.js.map
