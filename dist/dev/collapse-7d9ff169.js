import{aK as n,v as o,o as t,ab as a,A as c,f as e,a5 as r,n as f,am as s,t as i}from"./calfSystem-8dc0fa4b.js"
const u=[]
let h,d
function w(n){f(n.row)}function p(n){n.rows.forEach(w),n.open=!1}function l(n){n.open&&p(n)}function m(){u.forEach(l)}function E(n){i(n.row,!1)}function g(n){n.rows.forEach(E),n.open=!0}function x(n){n.open||g(n)}function I(n){return"TR"===n.tagName?function(n){if(n.rowIndex%d==0)return n}(n):"TABLE"!==n.tagName?I(n.parentNode):void 0}function T(n){h&&function(n){const o=I(n.target)
if(!o)return
const t=o.rowIndex/d,a=u[t]
!1===a.open?(m(),g(a)):p(a)}(n)}function b(n,o,t,c){0===o&&(t.header=n,function(n){h&&n.classList.add("fshPoint")}(n),function(n,o){s(n)&&n(o)}(c.extraFn,n)),c.articleTest(o)&&(t.rows[o]=a(t[o],{}),t.rows[o].row=n,function(n,o){h?(f(n),o.open=!1):o.open=!0}(n,t))}function N(n,o){const t=o.rowIndex%d,c=(o.rowIndex-t)/d
u[c]=a(u[c],{})
const e=u[c]
e.rows=e.rows||[],b(o,t,e,n)}function L(n){n.header.classList.toggle("fshPoint")}function v(n){h=!h,r(n,h),h?m():u.forEach(x),u.forEach(L)}function A(a){d=a.headInd,function(n){const t=c(n)
h=t.checked,e(c(n),"change",o(v,n))}(a.prefName),n(a.theTable.rows).forEach(o(N,a)),t(a.theTable,T)}export{A as c}
//# sourceMappingURL=collapse-7d9ff169.js.map
