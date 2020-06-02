import{D as t,b8 as e,z as n,x as i,g as r,u as s,i as a,s as o,A as c,bw as d,aR as p,F as u,k as f,f as m,t as h,w as l,o as g,p as b}from"./calfSystem-d49dbbd3.js"
import"./toLowerCase-e686322a.js"
import{s as $,g as v}from"./idb-a6d1a1ba.js"
import"./alpha-66ff978e.js"
import{a as x}from"./all-042a202c.js"
import"./csvSplit-0254185d.js"
import{s as _}from"./shouldBeArray-b6d52cfc.js"
import{d as w}from"./doSortParams-df4fee2a.js"
import{a as N}from"./stringSort-b88a8477.js"
let j,k=[]
function y(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function C(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!k.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(y).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(C).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${j}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function A(i,r){r&&(t("hideRecipes")&&(k=_("hideRecipeNames")),function(t,i){j=e()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=i.recipe.filter(S).map(T).join(""),r+="</table>",n(r,t),$("fsh_recipeBook",i)}(i,r))}function B(t){const e=i("pCC",t).children[0].rows[4].cells[0].children[0]
return r("img",e)}const I=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function P(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function R(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(I)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=c(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function E(t,e){return t.filter(o(P,e)).map(R)}function F(t,e,n,o){const c=s(o)
a(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return r("td",i("pCC",t))}(c)
n.items=E(d,"/inventory/2x3."),n.components=E(d,"/inventory/1x1mini."),[n.target]=E(d,"/hellforge/2x3."),e.recipe.push(n)}function L(t,e,n){a(t,`Found blueprint "${c(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:c(t),id:d(t.href,"recipe_id")}}(n)
return p(n.href).then(o(F,t,e,i))}function q(t,e,n){const a=function(t){const e=i("pCC",t).children[0].rows[6].cells[0].children[0]
return r("a",e)}(s(n)).map(o(L,t,e))
return x(a)}function z(t){return/\/folder_on\./.test(t.getAttribute("src"))}function D(t,e){return 0!==e}function M(t){return t.value}function G(t,e,n){return p(`${t}&page=${n}`).then(e)}function H(t,e,n){return function(t){return r("option",u("customselect",i("pCC",t))[0]).filter(D).map(M)}(t).map(o(G,e,n))}function J(t,e,n){const i=s(n),r=function(t){return B(t).find(z).parentNode.href}(i),a=o(q,t,e),c=H(i,r,a)
return c.push(a(n)),x(c)}function K(t){return"-1"!==d(t.parentNode.href,"folder_id")}function O(t,e){const n=c(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&a(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return p(e.parentNode.href).then(t)}function U(t,e,n){const i=o(J,t,e),r=function(t,e,n){return B(s(e)).filter(K).filter(o(O,t)).map(o(Q,n))}(t,n,i)
return r.push(i(n)),x(r)}let V,W
function X(){a(W,"Finished parsing ... formatting ..."),$("fsh_recipeBook",V),A(W,V)}function Y(){V={},V.recipe=[],n("<br>Parsing inventing screen ...<br>",W),h({cmd:"inventing"}).then(o(U,W,V)).then(X)}function Z(t,e){V=e,n('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=f(),m(t,W),V?A(W,V):Y()}function tt(t){"rfsh"===t.target.id&&Y(),"sortName"===t.target.id&&function(t){w(t.target),V.recipe.sort(N),A(W,V)}(t)}export default function(t){if(l())return
const e=t||b
v("fsh_recipeBook").then(o(Z,e)),g(e,tt)}
//# sourceMappingURL=recipeMgr-d4e01cdd.js.map