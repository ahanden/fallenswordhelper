import{G as t,p as e,S as n,f as s,v as a,b as o,g as r,h as c,Z as i}from"./calfSystem-8dc0fa4b.js"
import"./dataRows-1b7df704.js"
import{c as f}from"./createTextArea-3ab34f18.js"
import{a as l}from"./addLogColoring-2a651eca.js"
function u(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function d(t){t.setAttribute("form","dochat")}function p(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function m(){const t=n('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=o("form",e)
return t[0].id="dochat",t[0]}(),l=function(){const t=r("input",e).slice(0,7)
return t.forEach(d),t[5]}(),m=function(t){const e=n("#pCC table table")
e.rows[0].cells[0].remove()
const s=e.insertRow(-1).insertCell(-1)
c(s,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return d(e),s(e,"keypress",a(p,t)),e}(l)
m.replaceChild(b,m.children[0]),s(i,"submit",a(u,b))}export default function(){t("enhanceChatTextEntry")&&e&&m(),function(){const t=n("#pCC table table table table")
t&&t.classList.add("fshGc")}(),l("Chat",0)}
//# sourceMappingURL=guildChat-bc8ce4e5.js.map
