import{H as t,C as n,o,Y as a,t as e,e as s,h as r,G as c,E as f}from"./calfSystem-f9a27018.js"
import{c as i}from"./createStyle-601211fe.js"
import{d as m}from"./dataRows-1ff76178.js"
import{p as l}from"./parseDateAsTimestamp-83334593.js"
import{a as u,d as p}from"./doBuffLinkClick-c3ac034f.js"
let d,C
function h(t,n){let o="old"
const a=l(c(n.cells[t]))
return function(t,n){return t>20&&n<=C}((d-a)/6e4,a)||(o=a>C?"new":"seen"),[n,o]}function b(t,[n,o]){const a=n.rowIndex+1
return t[o]?t[o]={min:Math.min(t[o].min,a),max:Math.max(t[o].min,a)}:t[o]={min:a,max:a},t}function g(t,[n,{min:o,max:a}]){return`.fshLogColoring tr:nth-of-type(${t}n+${o}):nth-of-type(-${t}n+${a}) {background-color: ${"old"===n?"#CD9E4B":"#F5F298"};}`}function j(t,o,a){const c=m(a.rows,3,0).map(e(h,o))
!function(t,o){"Chat"===t&&o.filter(([,t])=>"old"!==t).map(([t])=>n(f,t)).forEach(p)}(t,c)
const l=function(t,n){const o="Chat"===t?4:2
return s(n.filter(([,t])=>"seen"!==t).reduce(b,{})).map(e(g,o))}(t,c)
l.length&&r(document.body,i(l.join("\n")))}function x(n,e,s){s.classList.add("fshLogColoring"),d=(new Date).setUTCSeconds(0,0)-1
const r=`last${n}Check`
C=function(n){return t(n)||d}(r),j(n,e,s),o(s,u),a(r,d)}function y(o,a){if(!t("enableLogColoring"))return
const e=function(t){return n("Chat"===t?"#pCC table table table table":"#pCC > table:last-of-type")}(o)
e&&x(o,a,e)}export{y as a}
//# sourceMappingURL=addLogColoring-d3c74d7e.js.map
