import{M as o,t as n,o as t,a2 as e,y as a,f as c,Y as r,ah as f}from"./calfSystem-2741d97b.js"
import{h as s}from"./hideElement-6a4f37a8.js"
import{t as i}from"./toggleForce-69a79716.js"
const u=[]
let h,d
function w(o){s(o.row)}function p(o){o.rows.forEach(w),o.open=!1}function m(o){o.open&&p(o)}function l(){u.forEach(m)}function g(o){i(o.row,!1)}function E(o){o.rows.forEach(g),o.open=!0}function x(o){o.open||E(o)}function I(o){return"TR"===o.tagName?function(o){if(o.rowIndex%d==0)return o}(o):"TABLE"!==o.tagName?I(o.parentNode):void 0}function T(o){h&&function(o){const n=I(o.target)
if(!n)return
const t=n.rowIndex/d,e=u[t]
!1===e.open?(l(),E(e)):p(e)}(o)}function N(o,n,t,a){0===n&&(t.header=o,function(o){h&&o.classList.add("fshPoint")}(o),function(o,n){f(o)&&o(n)}(a.extraFn,o)),a.articleTest(n)&&(t.rows[n]=e(t[n],{}),t.rows[n].row=o,function(o,n){h?(s(o),n.open=!1):n.open=!0}(o,t))}function b(o,n){const t=n.rowIndex%d,a=(n.rowIndex-t)/d
u[a]=e(u[a],{})
const c=u[a]
c.rows=c.rows||[],N(n,t,c,o)}function j(o){o.header.classList.toggle("fshPoint")}function L(o){h=!h,r(o,h),h?l():u.forEach(x),u.forEach(j)}function y(e){d=e.headInd,function(o){const t=a(o)
h=t.checked,c(a(o),"change",n(L,o))}(e.prefName),o(e.theTable.rows).forEach(n(b,e)),t(e.theTable,T)}export{y as c}
//# sourceMappingURL=collapse-7f2cce4c.js.map
