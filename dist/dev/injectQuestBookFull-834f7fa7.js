import{v as t,G as e,aW as s,b7 as a,C as o,n,o as c,p as r,b as i,c as l,a5 as u}from"./calfSystem-94018cd0.js"
import{d as f}from"./dontPost-cebe2d2a.js"
import{d}from"./dataRows-7580cb04.js"
import"./closest-5434d1b1.js"
import{c as m}from"./closestTable-8f564755.js"
import{r as p}from"./replaceDoubleSpace-b0d3bab9.js"
import{g}from"./guideButtons-3523447c.js"
function b(t,e){const s=p(a(e.cells[0]))
!function(t,e,s){if(t.includes(e)){let t=s
n(t)
for(let e=0;e<3;e++)t=t.nextElementSibling,n(t)}}(t,s,e)
const c=/quest_id=(\d+)/.exec(e.cells[4].innerHTML)[1]
o(g(c,s),e.cells[4])}function Q(a){const o=e("hideQuests")?s("hideQuestNames"):[]
d(a.rows,5,0).forEach(t(b,o))}function P(t){"submit"===t.target.type&&(t.preventDefault(),f(m(t.target).parentNode))}let S,h,j,N,v,A
const w=[0,3,0,1,2],x=["lastNormalActiveQuestPage","lastNormalCompletedQuestPage","lastNormalNotStartedQuestPage","lastSeasonalActiveQuestPage","lastSeasonalCompletedQuestPage","lastSeasonalNotStartedQuestPage"]
function C(t,e,s,a){return"#FF0000"===t[a].children[0].getAttribute("color")?e+s:e}function y(t){return e(t)}function D(t,e){e.length>0&&t.setAttribute("href",e)}function E(t,e){D(j,t[e]),D(N,t[e+1]),D(v,t[e+2])}function F(){const t=x.map(y),e=function(t){return[t[3],t[4],t[5],t[0],t[1],t[2]]}(t)
A<3?(D(h,e[A]),E(t,0)):(D(S,e[A]),E(t,3))}function L(){e("storeLastQuestPage")&&(!function(){const e=i("a",r);[S,h,j,N,v]=e,A=w.reduce(t(C,e),0)}(),function(){const t=window.location.search
u("lastActiveQuestPage",t),u(x[A],t)}(),F())}export default function(){c(r,P),L()
const t=i(l,r)[5]
t&&Q(t)}
//# sourceMappingURL=injectQuestBookFull-834f7fa7.js.map