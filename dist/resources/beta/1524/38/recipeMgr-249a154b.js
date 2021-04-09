import{d as t}from"./doSortParams-ce57438b.js"
import{I as e,ax as n,B as i,z as r,g as s,v as a,i as c,t as o,C as d,bc as p,az as u,K as f,m,h,u as l,y as g,o as b,p as $}from"./calfSystem-71efcdd9.js"
import{s as v,g as x}from"./idb-3de49256.js"
import{s as _}from"./shouldBeArray-c0315d2c.js"
import{a as y}from"./stringSort-cf261295.js"
import{a as N}from"./all-edb79f43.js"
import"./csvSplit-b0cd76cf.js"
import"./alpha-f430aa22.js"
import"./toLowerCase-b0c4634d.js"
let j,C=[]
function k(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function w(t){return`<div class="rmItem"><img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.id}&inv_id=-1&t=2&p=${j}&vcode=${t.verify}" src="${t.img}" height="20px" width="20px"><p>${t.amountPresent}/${t.amountNeeded}</p></div>`}function S(t){return!C.includes(t.name)}function T(t){return`<tr class="rmTr"><td class="rmTd"><a href="${t.link}"><img src="${t.img}" height="30px" width="30px"></a></td><td class="rmTd"><a href="${t.link}">${t.name}</a></td><td class="rmTd">${function(t){return t.items?t.items.map(k).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.components?t.components.map(w).join(""):""}(t)}</td><td class="rmTd">${function(t){return t.target?` <img class="tip-dynamic" data-tipped="fetchitem.php?item_id=${t.target.id}&inv_id=-1&t=2&p=${j}&vcode=${t.target.verify}" src="${t.target.img}" height="30px" width="30px"><br/>`:""}(t)}</td></tr>`}function B(t,r){r&&(e("hideRecipes")&&(C=_("hideRecipeNames")),function(t,e){j=n()
let r='<table width="100%"><tr class="rmTh"><th>Recipe</th><th><span id="sortName" class="fshLink" sortkey="name">Name</span></th><th>Items</th><th>Components</th><th>Target</th></tr>'
r+=e.recipe.filter(S).map(T).join(""),r+="</table>",i(r,t),v("fsh_recipeBook",e)}(t,r))}function I(t){const e=r("pCC",t).children[0].rows[4].cells[0].children[0]
return s("img",e)}const P=/fetchitem.php\?item_id=(\d+)&inv_id=-1&t=2&p=(\d+)&vcode=([a-z0-9]+)/i
function A(t,e){const n=e.getAttribute("background")
return n&&n.includes(t)}function R(t){const e=t.children[0].children[0],n=function(t){return t.dataset.tipped.match(P)}(e),i=function(t,e){return{img:t.getAttribute("src"),id:e[1],verify:e[3]}}(e,n)
return function(t,e){if(e){const n=d(e).split("/")
t.amountPresent=parseInt(n[0],10),t.amountNeeded=parseInt(n[1],10)}}(i,t.parentNode.nextElementSibling),i}function E(t,e){return t.filter(o(A,e)).map(R)}function z(t,e,n,i){const o=a(i)
c(t,`Parsing blueprint ${n.name}...<br>`)
const d=function(t){return s("td",r("pCC",t))}(o)
n.items=E(d,"/inventory/2x3."),n.components=E(d,"/inventory/1x1mini."),[n.target]=E(d,"/hellforge/2x3."),e.recipe.push(n)}function F(t,e,n){c(t,`Found blueprint "${d(n)}".<br>`)
const i=function(t){return{img:t.parentNode.previousElementSibling.children[0].getAttribute("src"),link:t.href,name:d(t),id:p(t.search,"recipe_id")}}(n)
return u(n.href).then(o(z,t,e,i))}function L(t,e,n){const i=function(t){const e=r("pCC",t).children[0].rows[6].cells[0].children[0]
return s("a",e)}(a(n)).map(o(F,t,e))
return N(i)}function q(t){return/\/folder_on\./.test(t.getAttribute("src"))}function K(t,e){return 0!==e}function M(t){return t.value}function D(t,e,n){return u(`${t}&page=${n}`).then(e)}function G(t,e,n){return function(t){return s("option",f("customselect",r("pCC",t))[0]).filter(K).map(M)}(t).map(o(D,e,n))}function H(t,e,n){const i=a(n),r=function(t){return I(t).find(q).parentNode.href}(i),s=o(L,t,e),c=G(i,r,s)
return c.push(s(n)),N(c)}function J(t){return"-1"!==p(t.parentNode.search,"folder_id")}function O(t,e){const n=d(e.parentNode.nextElementSibling.nextElementSibling.firstChild),i=/quest/i.test(n)
return i&&c(t,`Skipping folder "${n}"  as it has the word "quest" in folder name.<br>`),!i}function Q(t,e){return u(e.parentNode.href).then(t)}function U(t,e,n){const i=o(H,t,e),r=function(t,e,n){return I(a(e)).filter(J).filter(o(O,t)).map(o(Q,n))}(t,n,i)
return r.push(i(n)),N(r)}let V,W
function X(){c(W,"Finished parsing ... formatting ..."),v("fsh_recipeBook",V),B(W,V)}function Y(){V={},V.recipe=[],i("<br>Parsing inventing screen ...<br>",W),l({cmd:"inventing"}).then(o(U,W,V)).then(X)}function Z(t,e){V=e,i('<table class="fshInvFilter"><thead><tr><th width="90%"><b>&nbsp;Recipe Manager</b></th><th width="10%" class="fshBtnBox">[<span id="rfsh" class="fshLink">Refresh</span>]</th></tr></thead></table>',t),W=m(),h(t,W),V?B(W,V):Y()}function tt(e){"rfsh"===e.target.id&&Y(),"sortName"===e.target.id&&function(e){t(e.target),V.recipe.sort(y),B(W,V)}(e)}function et(t){if(g())return
const e=t||$
x("fsh_recipeBook").then(o(Z,e)),b(e,tt)}export default et
//# sourceMappingURL=recipeMgr-249a154b.js.map
