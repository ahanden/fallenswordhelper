import{m as t,i as e,g as r,aE as n,ap as s,t as a,H as o,C as c}from"./calfSystem-7991d843.js"
import{c as l}from"./closestTable-6d990d22.js"
import{i}from"./insertHtmlBeforeBegin-a672866f.js"
import"./closest-d38ca7fc.js"
function f(t,e,r){const n=o(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&c(t.cells[1])}(e)&&(t[n].value=Number(o(e.cells[1]).replace("+",""))),t):t}function u(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(f,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(u,t),0)}(r)
var o,c
i((c=e,(o=r).Enhancements?c.rows[o.Enhancements.ind-1]:c.rows[c.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function p(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}function h(){$.ajaxPrefilter(p)}export default h
//# sourceMappingURL=addStatTotalToMouseover-b0c19472.js.map
