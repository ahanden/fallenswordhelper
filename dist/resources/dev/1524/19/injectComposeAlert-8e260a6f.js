import{v as n,n as o,a5 as i,x as t,bO as s,c as a,j as c,D as f,bP as p,bQ as m,a7 as u,X as e}from"./calfSystem-f7574730.js"
function l(){return n(o({cmd:"composing"},{subcmd:"view"}))}const r=`<li class="notification"><a href="${s}"><span class="notification-icon"></span><p class="notification-content">Composing to do</p></a></li>`
function d(){i(t("notifications"),r)}function g(n){return n.time_remaining}function b(){d(),e(p,!0)}function h(n){n.potions.length!==n.max_potions?b():function(n){const o=Math.min.apply(null,n.map(g))
o>0?(e(p,!1),e(m,u+1e3*o)):b()}(n.potions)}function x(n){n.s&&h(n.r)}function j(){const n=f(m)
n&&u<n||l().then(x)}export default function(){"composing"!==a.cmd&&c()&&(f(p)?d():j())}
//# sourceMappingURL=injectComposeAlert-8e260a6f.js.map
