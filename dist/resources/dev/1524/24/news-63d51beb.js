import{D as e,p as a,at as t,h as r,C as s,bz as n,bA as o,H as i,a6 as f,Z as c,ba as m,B as p}from"./calfSystem-38898f3e.js"
import{i as d}from"./insertElementBefore-2ad05963.js"
import{c as l}from"./createSpan-f1b09788.js"
import{c as h}from"./createAnchor-3dbd9e50.js"
import{g as u}from"./getArrayByClassName-25f769e2.js"
import{g as b}from"./getTitle-137278b4.js"
import{i as g}from"./insertHtmlAfterEnd-8b82fe39.js"
import{p as C}from"./parseDateAsTimestamp-181259a8.js"
const $=/(\s*A ')([^']*)(' titan has been spotted in )([^!]*)(!)/
function j(e,a){return`<a href="${e}" target="_blank">${a}</a>`}function _(e){return`${t}creatures&search_name=${e}`}function w(e){const a=encodeURIComponent(b(e)),t=h({href:_(a),target:"_blank"})
d(t,e),r(t,e)}function y(e){return $.test(e.firstChild.nodeValue)}function A(e){const a=e.firstChild.nodeValue.match($)
var r
return a[2]=j(_(a[2]),a[2]),a[4]=j((r=a[4],`${t}realms&search_name=${r}`),a[4]),a.slice(1).join("")}function k(e){const a=l({innerHTML:A(e)})
e.replaceChild(a,e.firstChild)}const L=(e,a)=>`&nbsp;<a href="${e}&page=2">View ${a} Page 2</a>`
const v=e=>m("PvP Ladder",e.children[1]),E=e=>C(p(e.children[2]))
function T(){i("pageTwoLinks")&&function(){const e=s(`#pCC a[href="${n}"]`)
if(!e)return
g(e,L(n,"Updates"))
const a=s(`#pCC a[href="${o}"]`)
g(a,L(o,"News"))}(),i("addUfsgLinks")&&(e('.news_body img[src*="/creatures/"]').forEach(w),u("news_body_tavern",a).filter(y).forEach(k)),i("trackLadderReset")&&function(){const e=u("news_head_tavern",a).filter(v).map(E),t=Math.max.apply(null,e)
t>i(f)&&c(f,t)}()}export default T
//# sourceMappingURL=news-63d51beb.js.map
