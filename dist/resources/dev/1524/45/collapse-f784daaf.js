import{aq as o,t as n,o as t,a5 as e,z as c,f as a,_ as r,aM as s}from"./calfSystem-6a3c85e0.js"
import{h as f}from"./hideElement-53ec58d4.js"
import{t as i}from"./toggleForce-537064ea.js"
const u=[]
let h,d
function w(o){f(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function T(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function N(o,n,t,c){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){s(o)&&o(n)}(c.extraFn,o)),c.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(f(o),n.open=!1):n.open=!0}(o,t))}function j(o,n){const t=n.rowIndex%d,c=(n.rowIndex-t)/d
u[c]=e(u[c],{})
const a=u[c]
a.rows=a.rows||[],N(n,t,a,o)}function L(o){o.header.classList.toggle("fshPoint")}function b(o){h=!h,r(o,h),h?l():u.forEach(x),u.forEach(L)}function F(e){d=e.headInd,function(o){const t=c(o)
h=t.checked,a(c(o),"change",n(b,o))}(e.prefName),o(e.theTable.rows).forEach(n(j,e)),t(e.theTable,T)}export{F as c}
//# sourceMappingURL=collapse-f784daaf.js.map