import{D as t,p as e,N as s,e as n,s as a,b as r,g as o,f as c,P as i}from"./calfSystem-d49dbbd3.js"
import"./fshOpen-61afeb3b.js"
import"./openQuickBuffByName-b2ea945d.js"
import"./dataRows-9b520c39.js"
import{c as f}from"./createTextArea-7ff9cf84.js"
import"./createStyle-83a7b946.js"
import"./parseDateAsTimestamp-526fc279.js"
import{a as u}from"./addLogColoring-271cf857.js"
function l(t){t.value=t.value.replace(/\r\n|\n|\r/g," ")}function p(t){t.setAttribute("form","dochat")}function m(t,e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),i(t))}function d(){const t=s('input[value="Send As Mass"]')
if(!t)return
const i=function(){const t=r("form",e)
return t[0].id="dochat",t[0]}(),u=function(){const t=o("input",e).slice(0,7)
return t.forEach(p),t[5]}(),d=function(t){const e=s("#pCC table table")
e.rows[0].cells[0].remove()
const n=e.insertRow(-1).insertCell(-1)
c(n,t)
const a=e.rows[0].cells[0]
return a.rowSpan=2,a}(t),b=function(t){const e=f({cols:72,name:"msg",required:!0,rows:2})
return p(e),n(e,"keypress",a(m,t)),e}(u)
d.replaceChild(b,d.children[0]),n(i,"submit",a(l,b))}export default function(){t("enhanceChatTextEntry")&&e&&d(),function(){if(!t("wrapGuildChat"))return
const e=s("#pCC table table table table")
e&&e.classList.add("fshGc")}(),u("Chat",0)}
//# sourceMappingURL=guildChat-d43dbcb9.js.map
