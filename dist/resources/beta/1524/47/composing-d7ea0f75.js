import{r as e,B as t,t as n,aA as s,ad as o,Z as a,aH as i,D as c,m as r,P as l,S as m,i as p,aI as u,E as d,h as f,o as g,p as h,A as b,c as v,aJ as C,C as S,a8 as E,j,I as k,z as N,M as x}from"./calfSystem-db2edbef.js"
import{r as A,g as y}from"./rnd-b26142cd.js"
import{p as I,s as $}from"./pubsub-a432416b.js"
import{c as B}from"./createInput-93c1d447.js"
import{c as L}from"./createTable-4c650454.js"
import{g as q}from"./getArrayByClassName-e5960a90.js"
import{i as F}from"./insertElementAfter-41e869ed.js"
import{i as P}from"./insertHtmlAfterEnd-f4abe003.js"
import{i as T}from"./insertElementBefore-165ce171.js"
function w(e,n){t("",e.children[0]),e.children[0].classList.add("fshPot"),e.children[0].style.backgroundImage=`url(${s}composing/${y(1,11)}_${y(1,51)}.png)`,t(`Creating '<span class="fshBold">${n}</span>' Potion`,e.children[2]),t("",e.children[3])}function H(e){const n=e.parentNode
n&&(t('<div class="fshScs">Success</div>',n),w(n.previousElementSibling.previousElementSibling,e[e.selectedIndex].text),0===o('[id|="composing-template"]:not(#composing-template-multi)').length&&a(i,!1))}function M(e,n){const s=e.parentNode
s&&n&&(n.error?t(`<div class="fshScs">${n.error}</div>`,s):H(e))}function Q(t){var s;(s=t.value,e({cache:!1,dataType:"json",data:{cmd:"composing",subcmd:"createajax",template_id:s,fshrnd:A()}})).then(n(M,t))}function _(e,n){n.id=`proc-${n.id}`,t("",e),e.classList.add("fshSpinner","fshSpinner12","fshComposingSpinner"),Q(n),I("quickcreate")}function z(e,t){e.classList.add(`left-${t.toString()}`)}function D(e){z(e,o(".quickCreate .sendLink").length)}function J(e){const t=e.target,{templateId:n}=t.dataset
n&&function(e,t){m("composing","FastComposeButton")
const n=o('[id|="composing-template"]:not(#composing-template-multi)')
if(!(n.length<e.value))for(let s=0;s<e.value;s+=1)n[s].value=t,_(n[s].nextElementSibling.nextElementSibling,n[s])}(t,n)}function R(e,t,n,s){var o,a
return 0===s&&b(e[1],t.insertCell(-1)),f(t.insertCell(-1),(o=(s+1).toString(),a=e[0],B({className:"awesome orange",dataset:{templateId:a},type:"button",value:o}))),t}function Z(e,t,s,o){return e.reduce(n(R,o),s.insertRow(-1)),s}function G(e){return[e.value,e.text]}function K(e,t,s){const o=function(e,t,s){const o=L({id:"fshFastCompose"})
return z(o,s),e.reduce(n(Z,t,s),o)}(d("#composing-template-multi option").map(G),t,s)
f(e,o),g(h,J),$("quickcreate",n(D,o))}function O(e){m("composing","FastCompose"),p(e,"<br>")
const t=q("composing-potion-time",document),n=t.filter(u("ETA: n/a")).length
n>0?K(e,t,n):p(e,"No open slots!")}const U=/ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/
function V(e){const t=U.exec(S(e))
if(t){return 1e3*(3600*t[1]+60*t[2]+Number(t[3]))+E}return 0}function W(e){a(i,e)}function X(e){P(e,'<span class="quickCreate">[<span class="sendLink">Quick Create</span>]</span>')}function Y(e){const t=e.target.parentNode;(function(e){return"SPAN"===e.tagName&&"quickCreate"===e.className})(t)&&function(e){const t=e.previousElementSibling.previousElementSibling
t&&"none"!==t.value&&(_(e,t),m("composing","QuickCreate"))}(t)}function ee(){!function(){if(!v.enableComposingAlert)return
const e=q("composing-potion-time",document),t=Math.min(...e.map(V))
0===t?W(!0):(W(!1),a(C,t))}(),d("input[id^=create-]:not(#create-multi)",h).forEach(X),g(h,Y),function(){if(k("moveComposingButtons")){const e=N("composing-error-dialog").previousElementSibling
e.setAttribute("style","text-align: right; padding: 0 38px 0 0")
const t=x("composing-level",h)[0].parentNode
T(e,t)}}(),function(){const e=c("#pCC div.centered")
P(e.children[1],' | <label for="fast-compose"><span class="sendLink">Fast Compose</span></label>')
const t=r({className:"centered"})
F(t,e)
const s=B({id:"fast-compose",type:"checkbox"})
F(s,e),l(s,"change",n(O,t))}()}function te(){j()&&h&&ee()}export default te
//# sourceMappingURL=composing-d7ea0f75.js.map
