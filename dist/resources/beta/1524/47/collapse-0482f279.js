import{ar as o,t as n,o as t,a4 as e,z as r,f as c,Z as a,aN as f}from"./calfSystem-db2edbef.js"
import{h as s}from"./hideElement-7486432a.js"
import{t as i}from"./toggleForce-41b0f4ee.js"
const u=[]
let h,d
function w(o){s(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function b(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?b(o.parentNode):void 0}function I(o){h&&function(o){const n=b(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function N(o,n,t,r){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(r.extraFn,o)),r.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(s(o),n.open=!1):n.open=!0}(o,t))}function T(o,n){const t=n.rowIndex%d,r=(n.rowIndex-t)/d
u[r]=e(u[r],{})
const c=u[r]
c.rows=c.rows||[],N(n,t,c,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){h=!h,a(o,h),h?l():u.forEach(x),u.forEach(j)}function F(e){d=e.headInd,function(o){const t=r(o)
h=t.checked,c(r(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(T,e)),t(e.theTable,I)}export{F as c}
//# sourceMappingURL=collapse-0482f279.js.map
