import{t,H as e,G as s,A as o,b as a,p as n,d as r,Z as i}from"./calfSystem-393ab895.js"
import{d as c}from"./dataRows-0805e883.js"
import{g as l}from"./guideButtons-97371e0b.js"
import{h as u}from"./hideElement-d4551277.js"
import{r as m}from"./replaceDoubleSpace-a9060de0.js"
import{s as f}from"./shouldBeArray-c2b21111.js"
import{i as d}from"./interceptSubmit-193429ea.js"
import"./csvSplit-aa512e64.js"
import"./formToUrl-7683ac99.js"
function p(t,e){const a=m(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,a,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
o(l(n,a),e.cells[4])}function g(s){const o=e("hideQuests")?f("hideQuestNames"):[]
c(s.rows,5,0).forEach(t(p,o))}let h,Q,S,b,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,o){return"#FF0000"===t[o].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function E(t,e){x(S,t[e]),x(b,t[e+1]),x(j,t[e+2])}function y(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(Q,e[P]),E(t,0)):(x(h,e[P]),E(t,3))}function B(){e("storeLastQuestPage")&&(!function(){const e=a("a",n);[h,Q,S,b,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
i("lastActiveQuestPage",t),i(N[P],t)}(),y())}function C(){d(),B()
const t=a(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-1d2f3382.js.map