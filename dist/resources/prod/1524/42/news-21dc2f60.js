import{c as e}from"./createAnchor-f58b5ccd.js"
import{c as a}from"./createSpan-2658e7cc.js"
import{g as t}from"./getArrayByClassName-c7b90480.js"
import{g as r}from"./getTitle-66f54e5d.js"
import{E as s,p as n,aI as o,h as c,D as i,bC as f,bD as m,I as p,a6 as d,_ as l,aH as h,C as u}from"./calfSystem-15b00143.js"
import{i as b}from"./insertElementBefore-34b77984.js"
import{i as C}from"./insertHtmlAfterEnd-778c206f.js"
import{p as g}from"./parseDateAsTimestamp-41bbfb83.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function _(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function j(e){return`${o}creatures&search_name=${e}`}function w(a){const t=encodeURIComponent(r(a)),s=e({href:j(t),target:"_blank"})
b(s,a),c(s,a)}function y(e){return $.test(e.firstChild.nodeValue)}function k(e){const a=e.firstChild.nodeValue.match($)
var t
return a[2]=_(j(a[2]),a[2]),a[4]=_((t=a[4],`${o}realms&search_name=${t}`),a[4]),a.slice(1).join("")}function A(e){const t=a({innerHTML:k(e)})
e.replaceChild(t,e.firstChild)}const E=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const L=e=>h("PvP Ladder",e.children[1]),v=e=>g(u(e.children[2]))
function T(){p("pageTwoLinks")&&function(){const e=i(`#pCC a[href="${f}"]`)
if(!e)return
C(e,E(f,"Updates"))
const a=i(`#pCC a[href="${m}"]`)
C(a,E(m,"News"))}(),p("addUfsgLinks")&&(s('.news_body img[src*="/creatures/"]').forEach(w),t("news_body_tavern",n).filter(y).forEach(A)),p("trackLadderReset")&&function(){const e=t("news_head_tavern",n).filter(L).map(v),a=Math.max.apply(null,e)
a>p(d)&&l(d,a)}()}export default T
//# sourceMappingURL=news-21dc2f60.js.map