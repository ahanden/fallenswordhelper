import{F as s,az as e,bO as t,B as o,k as a,f as n,e as c,u as i,a0 as r}from"./calfSystem-d96a3efd.js"
import{c as f}from"./createInput-2717f905.js"
import{o as m}from"./onlineDot-17edd2c6.js"
import{b as p}from"./batch-cdb16fc8.js"
import{c as l}from"./createLabel-30fdcb3b.js"
function d(s){const e=t.exec(s.dataset.tipped)
o(m({min:e[3],hour:e[2],day:e[1]}),s.parentNode.previousElementSibling)}function u(){s("enhanceOnlineDots")&&p([5,3,e('#pCC a[data-tipped*="Last Activity"]'),0,d])}function g(s){const e=a({className:"fshCompressor"})
!function(s){const e=n(s,f({id:"fshCompressToggle",type:"checkbox"}))
c(e,"change",i(r,"bio","toggle"))}(e),n(e,l({className:"sendLink",htmlFor:"fshCompressToggle"})),function(s,e){const t=n(e,a({className:"fshCompress"}))
o(s.innerHTML,t),o("",s)}(s,e),n(s,e)}function h(s){s.clientHeight/function(s){const e=getComputedStyle(s)
return parseInt(e.getPropertyValue("font-size"),10)}(s)>10&&g(s)}export{u as a,h as c}
//# sourceMappingURL=compressBio-9800c306.js.map
