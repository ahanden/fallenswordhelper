import{c as e}from"./createInput-e6426c85.js"
import{c as t}from"./createLabel-3f94634a.js"
import{z as s,f as o,t as r,S as a}from"./calfSystem-7991d843.js"
import{i as n}from"./insertElementBefore-c2bb9234.js"
function i(s){s.parentNode.classList.add("fshCompressor"),function(t){const s=n(e({id:"fshCompressToggle",type:"checkbox"}),t)
o(s,"change",r(a,"bio","toggle"))}(s),n(t({className:"sendLink",htmlFor:"fshCompressToggle"}),s)}function c(){const e=s("profile-bio")
if(!e)return
const t=e.parentNode,{style:{display:o}}=t
t.style.display="block",e.clientHeight/function(e){const t=getComputedStyle(e)
return parseInt(t.getPropertyValue("font-size"),10)}(e)>10&&i(e),t.style.display=o}export default c
//# sourceMappingURL=compressBio-127bc7b3.js.map
