import{I as n,A as e,x as t,z as a,s,a8 as i,a9 as l,X as r,e as o,f as c,y as f,O as m}from"./calfSystem-d49dbbd3.js"
import{n as u}from"./numberIsNaN-1742f258.js"
import{i as d}from"./insertTextBeforeEnd-15fdfab0.js"
import{i as p}from"./intValue-2ed328c8.js"
import{c as b}from"./createSpan-d12a564e.js"
import{p as x}from"./parseGoldUpgrades-9d647a19.js"
let g,E
const S={}
function h(n,t){return e(t).includes(n)}function N(n){return g.find(s(h,n))}function j(n,t,a){if(!S[n][a]){const s=function(n,e){return"amount"===e?new RegExp("\\+(\\d+) "+n):/(\d+)\xA0/}(n,a),i=e(t).match(s)[1]
S[n][a]=i}return S[n][a]}function y(n,e,t,a){const s=function(n,e){return j(n,e,"amount")}(n,e),i=function(n,e){return j(n,e.nextElementSibling,"cost")}(n,e)
let l
t*i<=E?(l=t*s,a.className="fshBlue"):(l=Math.floor(E/i)*s,a.className="fshRed"),f(`(+${l} stamina)`,a)}function M(n,e,t){const{target:a}=t,s=Number(a.value),i=function(n,e){if(S[n]||(S[n]={}),!S[n].span){const t=b()
d(e," "),c(e,t),S[n].span=t}return S[n].span}(n,e)
u(s)||0===s?i.className="fshHide":y(n,e,s,i)}function k(n){const e=N(n)
o(e.nextElementSibling.nextElementSibling.nextElementSibling.children[0].rows[0].cells[0].children[0],"keyup",s(M,n,e))}function A(){E=p(e(t("statbar-fsp"))),k("Current"),k("Maximum"),a(`<a href="${i}${l}marketplace">Sell at Marketplace</a>`,N("Gold").nextElementSibling.nextElementSibling.nextElementSibling)}function C(n,e){const t=N(n).nextElementSibling.nextElementSibling
if(t){const n=Number(/(\d+) \/ 115/.exec(t.innerHTML)[1])
r(e,n+5)}}export default function(){"1"===m("type")?x():(g=n("#pCC > table:last-of-type > tbody > tr:nth-child(even) > td:first-child"),C("+1 Max Allies","alliestotal"),C("+1 Max Enemies","enemiestotal"),A())}
//# sourceMappingURL=points-66dd9cc6.js.map
