import{y as e,a as t,as as s,g as n,z as i,d as a,at as o,e as r,o as c,t as d,m as l,b as f,h as m,l as u,a6 as p,$ as h,D as b,E as k,I as g,bd as j,ar as y,c as S}from"./calfSystem-3cb2f93e.js"
import{c as L}from"./createTr-e2aab541.js"
import{g as v}from"./getInventoryById-74030f86.js"
import{h as I}from"./hideElement-0d0f9065.js"
import{i as N}from"./insertElementBefore-23d4e956.js"
import{i as B}from"./insertHtmlBeforeBegin-7237db4a.js"
import{n as E}from"./numberIsNaN-885a5556.js"
import{c as $}from"./createButton-6bfd938b.js"
import{a as A,s as C}from"./sendItems-ab3a12d9.js"
import{i as H}from"./insertElementAfter-f63e0bf0.js"
import"./getInventory-238d3b07.js"
import"./guildStore-a425d6aa.js"
import"./cmdExport-7784a81f.js"
import"./indexAjaxJson-a55a7596.js"
import"./htmlResult-4d7038ac.js"
let T
function x(e,t){t.children[0].lastElementChild.children[0].children[0].checked=!1
const s=u("fshHide",t),n="folderid0"===e,i=u(e,t);(function(e,t,s){return e&&p(t,s)})(s,n,i)&&(t.classList.remove("fshHide"),t.classList.add("fshBlock")),function(e,t,s){return!e&&!t&&!s}(s,n,i)&&(t.classList.remove("fshBlock"),I(t))}function M(e){n(a,function(){let e=i("item-div")
if(!e){e=l({id:"item-div",className:"itemDiv"})
const t=i("item-list"),s=f(a,t)
for(;s.length;)s[0].classList.add("fshBlock"),m(e,s[0])
N(e,t)}return e}()).forEach(d(x,e.target.id))}function w(e){"SPAN"===e.target.nodeName&&-1!==e.target.id.indexOf("folderid")&&M(e)}function _(e){return` &ensp;<span id="folderid${e[0]}" class="fshLink fshNoWrap" fid=${e[0]}>${e[1]}</span> `}function O(e){const t=e.children[0].lastElementChild.children[0]
if(!t)return
const s=t.children[0],n=T[s.getAttribute("value")]
n&&(e.classList.add(`folderid${n.folder_id}`),T.fshHasST&&function(e,t){t.is_in_st&&e.classList.add("isInST")}(e,n),s.classList.add(`itemid${n.item_id}`),s.classList.add(`itemtype${n.type}`))}function W(e){s("trade.processTrade"),T=e.items
n(a,i("item-list")).forEach(O),function(e){const t=L({id:"fshFolderSelect",innerHTML:`<td colspan=6><span id="folderid0" class="fshLink" fid=0>All</span> &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>${r(e).map(_).join("")}`})
c(t,w)
const s=i("item-list").parentNode.parentNode
B(s,'<tr id="fshShowSTs"><td align="center" colspan=6><label><input type="checkbox" id="itemsInSt" checked> Select items in ST</label></td></tr>'),N(t,s)}(e.folders),o("trade.processTrade")}function F(e){t(3,W,[e])}function R(){e()||v().then(F)}async function z(e,t){const s=await e
return console.log("promise data",s),null===s||s.s?(n=t[0],i=t[1],h(C,A,n,i)):s
var n,i}async function D(){const e=b('form[name="sendItemForm"] [name="target_username"]'),t=k('[name="sendItemList[]"]:checked').map((t=>[e.value,[t.value]])),s=await t.reduce(z,Promise.resolve(null))
console.log("finalResult",s)}function P(){const e=b('form[name="sendItemForm"] input[value="Send"]'),t=$({className:"fshBl",id:"oneByOneBtn",textContent:"OneByOne",type:"button"})
H(t,e),c(t,D)}function J(e,t){return"itemid-1"===e||function(e,t){return"itemid-2"===e&&u("itemtype12",t)}(e,t)||u(e,t)}function q(e,t){return e||!u("isInST",t)}function G(e){return e.children[0].lastElementChild.children[0].children[0]}function K(e,t){t.checked=e}function Q(e){K(!1,e)}function U(e){K(!0,e)}function V(e,t){t.filter(d(q,function(){const e=i("itemsInSt")
if(e)return e.checked}())).map(G).filter(d(J,e)).slice(0,function(e){const t=parseInt(i("fshSendHowMany").value,10)
return E(t)?e.length:"-"!==S.subcmd?Math.min(100,t):t}(t)).forEach(U)}function X(e){u("fshCheckAll",e.target)&&function(e){const t=i("item-div")||i("item-list"),s=k("table:not(.fshHide)",t)
s.map(G).forEach(Q),V(e.target.id,s)}(e)}function Y(e){return j(`[${e}]`)}function Z(){const e=Y(g("sendClasses"))
return e||Y(y.sendClasses)}function ee(e){return` &ensp;<span id="itemid${e[1]}" class="fshCheckAll fshLink fshNoWrap">${e[0]}</span>`}function te(){const e=i("item-list")
if(!e)return
const t=L({id:"fshSelectMultiple",innerHTML:`<td colspan=6>Select:&ensp;<span id="itemid-1" class="fshCheckAll fshLink fshNoWrap">All Items</span> &ensp;<span id="itemid-2" class="fshCheckAll fshLink fshNoWrap">All Resources</span>${Z().map(ee).join("")} &ensp;How&nbsp;many:<input id="fshSendHowMany" type="text" class="custominput" value="all" size=3></td>`})
c(t,X),N(t,e.parentNode.parentNode)}function se(){t(3,R),t(3,te),t(3,P)}export default se
//# sourceMappingURL=trade-0de26120.js.map