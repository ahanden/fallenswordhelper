import{c as t}from"./createTr-491aa9ed.js"
import{H as o,C as s,h as a,z as r,A as n,a4 as e,a5 as i}from"./calfSystem-dfa26790.js"
import{i as c}from"./interceptSubmit-c18e4478.js"
import{o as f}from"./outputFormat-6a56d067.js"
import"./formToUrl-4975483d.js"
function u(){const t=o(e)
return t<i-1728e5?'<span class="fshLink tip-static" data-tipped="FSH has not seen the last ladder reset.<br>You can find it in your log if you qualified<br>or Tavern Rumours.">???</span>':function(t){let o=Math.floor((i-t)/6e4)
const s=Math.floor(o/60)
return o%=60,`${f(s," hours, ")+o} mins`}(t)}function l(){const o=t()
return function(t){const o=t.insertCell(-1)
o.height=25,r("Last Reset:",o)}(o),function(t){const o=t.insertCell(-1)
o.align="right",n(u(),o)}(o),o}function m(){c(),o("trackLadderReset")&&function(){const t=s("#pCC table"),o=l()
a(t,o)}()}export default m
//# sourceMappingURL=ladder-c065ef9e.js.map