import{d as t}from"./doSortParams-0c21cb68.js"
import{I as e,aL as n,B as i,z as r,g as s,v as a,i as c,t as o,C as d,am as u,aN as p,M as f,m,h,u as l,y as g,o as b,p as $}from"./calfSystem-bfc1f6c0.js"
import{s as v,g as x}from"./idb-d8a4a427.js"
import{s as N}from"./shouldBeArray-47720a12.js"
import{a as _}from"./stringSort-52d649d2.js"
import{a as y}from"./all-ceaf9817.js"
import"./csvSplit-e3b3e000.js"
let k,C=[]
function j(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${k}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function w(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${k}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!C.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(j).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(w).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${k}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function B(t,r){r&&(e("hideRecipes")&&(C=N("hideRecipeNames")),function(t,e){k=n()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=e.recipe.filter(S).map(T).join(""),r+="</table>",i(r,t),v("fsh_recipeBook",e)}(t,r))}function I(t){const e=r("pCC",t).children[0].rows[4].cells[0].children[0]
return s("img",e)}const P=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function A(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function R(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(P)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=d(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function E(t,e){return t.filter(o(A,e)).map(R)}function F(t,e,n,i){const o=a(i)
c(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return s("td",r("pCC",t))}(o)
n.items=E(d,"/inventory/2x3."),n.components=E(d,"/inventory/1x1mini."),[n.target]=E(d,"/hellforge/2x3."),e.recipe.push(n)}function L(t,e,n){c(t,`Found blueprint "${d(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:d(t),id:u(t.search,"recipe_id")}}(n)
return p(n.href).then(o(F,t,e,i))}function q(t,e,n){const i=function(t){const e=r("pCC",t).children[0].rows[6].cells[0].children[0]
return s("a",e)}(a(n)).map(o(L,t,e))
return y(i)}function z(t){return/\/folder_on\./.test(t.getAttribute("src"))}function M(t,e){return 0!==e}function D(t){return t.value}function G(t,e,n){return p(`${t}&page=${n}`).then(e)}function H(t,e,n){return function(t){return s("option",f("customselect",r("pCC",t))[0]).filter(M).map(D)}(t).map(o(G,e,n))}function J(t,e,n){const i=a(n),r=function(t){return I(t).find(z).parentNode.href}(i),s=o(q,t,e),c=H(i,r,s)
return c.push(s(n)),y(c)}function K(t){return"-1"!==u(t.parentNode.search,"folder_id")}function O(t,e){const n=d(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&c(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return p(e.parentNode.href).then(t)}function U(t,e,n){const i=o(J,t,e),r=function(t,e,n){return I(a(e)).filter(K).filter(o(O,t)).map(o(Q,n))}(t,n,i)
return r.push(i(n)),y(r)}let V,W
function X(){c(W,"Finished parsing ... formatting ..."),v("fsh_recipeBook",V),B(W,V)}function Y(){V={},V.recipe=[],i("<br>Parsing inventing screen ...<br>",W),l({cmd:"inventing"}).then(o(U,W,V)).then(X)}function Z(t,e){V=e,i('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=m(),h(t,W),V?B(W,V):Y()}function tt(e){"rfsh"===e.target.id&&Y(),"sortName"===e.target.id&&function(e){t(e.target),V.recipe.sort(_),B(W,V)}(e)}function et(t){if(g())return
const e=t||$
x("fsh_recipeBook").then(o(Z,e)),b(e,tt)}export default et
//# sourceMappingURL=recipeMgr-c5ab5fae.js.map
