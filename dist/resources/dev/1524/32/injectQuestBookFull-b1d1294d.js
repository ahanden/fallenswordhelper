import{t,H as e,G as s,A as a,b as o,p as n,d as r,_ as c}from"./calfSystem-19a5d332.js"
import{d as i}from"./dataRows-22fc1a62.js"
import{g as l}from"./guideButtons-a3bc0ef5.js"
import{h as u}from"./hideElement-7c48eb54.js"
import{r as f}from"./replaceDoubleSpace-856176a4.js"
import{s as m}from"./shouldBeArray-63bb1c4a.js"
import{i as d}from"./interceptSubmit-6d528c47.js"
import"./csvSplit-a4e91aa0.js"
import"./formToUrl-8a3e8d2a.js"
function p(t,e){const o=f(s(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
u(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,u(t)}}(t,o,e)
const n=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
a(l(n,o),e.cells[4])}function g(s){const a=e("hideQuests")?m("hideQuestNames"):[]
i(s.rows,5,0).forEach(t(p,a))}let b,h,Q,S,j,P
const A=[0,3,0,1,2],N=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function v(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function w(t){return e(t)}function x(t,e){e.length>0&&t.setAttribute("href",e)}function E(t,e){x(Q,t[e]),x(S,t[e+1]),x(j,t[e+2])}function y(){const t=N.map(w),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
P<3?(x(h,e[P]),E(t,0)):(x(b,e[P]),E(t,3))}function B(){e("storeLastQuestPage")&&(!function(){const e=o("a",n);[b,h,Q,S,j]=e,P=A.reduce(t(v,e),0)}(),function(){const t=window.location.search
c("lastActiveQuestPage",t),c(N[P],t)}(),y())}function C(){d(),B()
const t=o(r,n)[5]
t&&g(t)}export default C
//# sourceMappingURL=injectQuestBookFull-b1d1294d.js.map
