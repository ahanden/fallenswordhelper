import{x as s,j as n,i as t,o as a,f as e,b as o,A as f,be as i,T as c,U as r,c0 as l,F as b}from"./calfSystem-f7574730.js"
import{g as m,s as x}from"./idb-14a57c5b.js"
import{c as h}from"./createSpan-4e730390.js"
function p(n){let t=function(s){return s||""}(n)
const a=b("message",s("minibox-fsbox"))[0].innerHTML
t.indexOf(a)<0&&(t=`<br>${a}${t}`),t.length>1e4&&(t=t.substring(0,1e4)),x("fsh_fsboxcontent",t)}function u(){c("injectFSBoxLog","injectFsBoxContent"),r(l)}function g(s){const n=s.lastElementChild
t(n,"<br>"),function(s){let n=o("a",s)
0!==n.length&&(m("fsh_fsboxcontent").then(p),n=f(n[0]),t(s,`<span class="fshPaleVioletRed">[ <a href="${i}${n}">Ignore</a> ]</span> `))}(n)
const c=h({className:"fshYellow",innerHTML:'[ <span class="fshLink">Log</span> ]'})
a(c,u),e(n,c)}export default function(){const t=s("minibox-fsbox")
n()&&t&&g(t)}
//# sourceMappingURL=injectFSBoxLog-2b1c79be.js.map
