import{a as t}from"./allthen-b379c12a.js"
import{y as n,d as o,t as e,g as i,aB as a,u as p,N as c,aA as s}from"./calfSystem-6a3c85e0.js"
import{m as u}from"./assets-38ff398f.js"
import"./all-47be5400.js"
const l=[]
let r,d
function f(t,n){return p({cmd:"arena",subcmd:"dopickmove",move_id:t,slot_id:n})}function m(t){return t.value}function v(t,n){if(t!==l[n])return r.eq(n).attr({src:a,width:"25",height:"25"}),f("x",n)}function h(t,n){if("x"!==t&&t!==l[n])return f(t,n)}function g(){c(`${s}setup`)}function k(n){const o=n.map(h)
t(o,g)}function x(){const n=i("select",d).map(m),o=n.map(v)
t(o,e(k,n))}function b(t,n,o){const e=function(t){const n=$(t).attr("src").match(u)
return n?n[1]:"x"}(o)
l.push(e)
const i=$('\n<td colspan=3 style="padding-top: 2px;padding-bottom: 2px;">\n<select style="max-width: 50px;">\n<option value="x">Basic Attack</option>\n<option value="0">Block</option>\n<option value="1">Counter Attack</option>\n<option value="2">Critical Hit</option>\n<option value="3">Defend</option>\n<option value="4">Deflect</option>\n<option value="5">Dodge</option>\n<option value="6">Lunge</option>\n<option value="7">Power Attack</option>\n<option value="8">Spin Attack</option>\n<option value="9">Piercing Strike</option>\n<option value="10">Crush</option>\n<option value="11">Weaken</option>\n<option value="12">Ice Shard</option>\n<option value="13">Fire Blast</option>\n<option value="14">Poison</option>\n</select></td>')
$(`option[value=${e}]`,i).prop("selected",!0),t.append(i)}function C(t){$(t.target).off(),r=$('#pCC a[href*="=pickmove&"] img')
const n=r.eq(0).closest(o).parent().closest(o)
!function(t){const n=$("<tr/>")
d=n.get(0),n.append("<td/>"),r.each(e(b,n)),t.append(n)}(n),$('img[src*="arena/bar_spacer."]',n).attr({width:"15",height:"50"}),function(t){const n=$('<tr><td colspan=32 align=center style="padding-top: 2px;padding-bottom: 2px;"><input class="custombutton" value="Update" type="button"></td></tr>')
$("input",n).on("click",x),t.append(n)}(n)}function y(){if(n())return
const t=$('#pCC b:contains("Setup Combat Moves")')
1===t.length&&(t.addClass("fshLink fshGreen"),t.on("click",C))}export default y
//# sourceMappingURL=setup-3bd5e30f.js.map
