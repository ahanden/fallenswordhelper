import{y as t,D as n,ap as e,l as a,B as s,m as i,h as r,A as o}from"./calfSystem-7aee5245.js"
import{t as c}from"./toggleForce-8e48254b.js"
function l(t,n){const e=n.nextElementSibling.children[0]
8===e.children.length&&(!function(t,n){const e=s(n.children[7]),a=i({className:"tip-static",dataset:{tipped:"Server"},textContent:`Server: ${e}`})
r(t,a)}(t,e),function(t,n){const e=n.children[3].innerHTML,a=t.children[0]
o(`Online: ${e}`,a)}(t,e),c(n.parentNode,!0))}function d(){const s=t("topbanner-stats"),i=n("#pCR h3").find(e("Game Stats"));(function(t,n){return!(t&&a("topbanner-stats-hidden",t))&&n})(s,i)&&l(s,i)}export default d
//# sourceMappingURL=injectServerNode-ee81ff68.js.map