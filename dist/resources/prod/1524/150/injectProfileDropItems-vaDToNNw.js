import{n as o,ai as s,aa as t,aQ as e,ad as r,s as a,J as n,e as i,q as m,ao as c,c as p,z as f,aj as d,A as l,e9 as u}from"./calfSystem-BGOTz8de.js"
import{M as h,d as j,g as y,c as b,e as g,i as w}from"./injectStoreItems-C3MsFDsI.js"
import{c as D}from"./closestTable-DjvmqHiL.js"
import{r as I}from"./removeRow-lnTWQWTR.js"
import{e as v}from"./errorDialog-B4_TjdGG.js"
import{e as x,s as N}from"./selfIdIs-7BV1yzfH.js"
import{s as E}from"./simpleCheckbox-BSi4KRpL.js"
import"./dropItem-DKA_BeJT.js"
import"./dialog-BW-ZNw6R.js"
import"./dialogMsg-rKdvzvMA.js"
import"./sendItems-BMwt7Ul-.js"
import"./htmlResult-wAGcD4rm.js"
import"./InfoBoxFrom-BSCsEypB.js"
import"./doStatTotal-7TiKJNmH.js"
import"./arrayFromRadioNodeList-BIJCb08V.js"
import"./batch-DnPGAgm3.js"
import"./isChecked-D_0do7nT.js"
function k(){return o('[name="removeIndex[]"]:checked')}const S=o=>({id:e(o.parentNode.href,"folder_id"),name:t(o.parentNode.parentNode)})
async function A(o,s){const t=await j(o,s.map((o=>o.value)))
t?.s&&s.forEach(I)}function C(o){a("dropitems","Move to Folder"),n(30,k()).forEach(i(A,o))}function F(o){y().forEach((s=>{s.checked=Boolean(o)}))}const J="ajaxifyDestroy",M="disableDestroyPrompts"
let P=0,R=1,T=0
async function $(o){const s=await b(o.map((o=>o.value)))
v(s),s.s&&o.forEach(I)}function q(o){o.returnValue&&P&&(o.preventDefault(),n(30,k()).forEach($),a("dropitems","Destroy by AJAX"))}function B(){return a("dropitems","Destroy without prompts"),!0}function Q(){window.confirmDestroy=R?B:T}function z(){a("dropitems","handleAjaxifyPref"),P=!P,d(J,P)}function G(){a("dropitems","handleDestroyPref"),R=!R,d(M,R),Q()}const L=()=>x([[N(J),z],[N(M),G]])
const U=[function(){const t=o('#pCC img[src$="/folder.png"]')
if(!t.length)return
const e=s(D(t[0])),a=t.map(S)
r(h,{anchor:e.nextElementSibling,props:{folders:a,moveItemsToFolder:C},target:e.parentNode})},w,function(){const o=m('input[type="submit"]')
o&&(!function(o){f(o.parentNode,`&nbsp;&nbsp;${E(J)}&nbsp;&nbsp;${E(M)}`),p(o.parentNode,"change",L())}(o),R=c(M),T=window.confirmDestroy,Q(),P=c(J),p(document.forms[0],"submit",q),window.check=F)}]
function V(){!l()&&g()&&u(U)}export{V as default}
//# sourceMappingURL=injectProfileDropItems-vaDToNNw.js.map
