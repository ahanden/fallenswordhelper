import{D as t,as as n,t as e,b as s,d as a,i as o,H as l}from"./calfSystem-dfa26790.js"
function i(t,n){const e=n.parentNode,i=s(a,e.nextElementSibling).length-1
o(e,`<span class="fshBlue">&nbsp;${i.toString()}${function(t,n){return n&&n>=t?`/${n}`:""}(i,l(function(t){return t?"alliestotal":"enemiestotal"}(t)))}</span>`)}function f(){const s=t("#profileLeftColumn strong")
s.filter(n("Allies")).forEach(e(i,!0)),s.filter(n("Enemies")).forEach(e(i,!1))}export default f
//# sourceMappingURL=profileAllyEnemy-7087e8b4.js.map