import{m as t,i as e,g as r,a4 as n,M as s,t as a,K as c,B as o}from"./calfSystem-4cc738f8.js"
import"./closest-b21303d7.js"
import{c as l}from"./closestTable-6d07ec05.js"
import{i}from"./insertHtmlBeforeBegin-47aa1c44.js"
function u(t,e,r){const n=c(e.cells[0]).replace(":","")
return n?(t[n]={ind:r},function(t){return t.cells[1]&&o(t.cells[1])}(e)&&(t[n].value=Number(c(e.cells[1]).replace("+",""))),t):t}function f(t,e,r){return e+((s=t)[n=r]&&s[n].value?s[n].value:0)
var n,s}function m(t){const e=l(t),r=s(e.rows).reduce(u,{}),n=function(t){return["Attack","Defense","Armor","Damage","HP"].reduce(a(f,t),0)}(r)
var c,o
i((o=e,(c=r).Enhancements?o.rows[c.Enhancements.ind-1]:o.rows[o.rows.length-1]),`<tr class="fshDodgerBlue"><td>Stat Total:</td><td align="right">${n}&nbsp;</td></tr>`)}function d(s){const a=t()
return e(a,s),r("font",a).filter(n("Bonuses")).forEach(m),a.innerHTML}function h(t){t.url.startsWith("fetchitem")&&(t.dataFilter=d)}export default function(){$.ajaxPrefilter(h)}
//# sourceMappingURL=addStatTotalToMouseover-bd5008f4.js.map
