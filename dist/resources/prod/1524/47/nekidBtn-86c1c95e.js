import{c as e}from"./createButton-66938c57.js"
import{u as n,w as t,bs as s,$ as i,z as o,m as r,h as a,o as c,S as f,g as u,t as m,B as l}from"./calfSystem-a2fd9017.js"
import{i as d}from"./insertTextBeforeEnd-5cd2b8c8.js"
function p(e){const n=t(e)
return n?{e:{message:n},s:!1}:{s:!0}}function h(e){return n({cmd:"profile",subcmd:"unequipitem",inventory_id:e}).then(p)}function b(e){return s({subcmd:"unequipitem",inventory_id:e})}let x
function B(e,n){n&&n.s&&l("",e.parentNode)}function g(e){const n=/inventory_id=(\d+)/.exec(e.href)[1]
n&&function(e){return i(b,h,e)}(n).then(m(B,e))}function C(){f("profile","nekidBtn")
const e=x.nextElementSibling
u("a",e).forEach(g)}function N(){if(x=o("profileCombatSetDiv"),!x)return
const n=x.parentNode.nextElementSibling,t=function(){const n=r({className:"fshCenter"}),t=e({className:"fshBl fshBls",textContent:"Nekid"})
return d(n,"[ "),a(n,t),d(n," ]"),c(t,C),n}()
o("profileRightColumn").replaceChild(t,n)}export default N
//# sourceMappingURL=nekidBtn-86c1c95e.js.map
