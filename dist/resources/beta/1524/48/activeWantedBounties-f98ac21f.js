import{u as e,C as t,D as n,bN as s,I as a,U as r,_ as i,z as o,q as c,H as l,c as u,m as d,bR as f,bP as b,B as p,bW as h,h as m,i as y,v as L,y as g,o as v}from"./calfSystem-8af1dca2.js"
import{f as $}from"./functionPasses-8a4ab4e1.js"
import{s as w}from"./shouldBeArray-c0e8ef84.js"
import{i as N}from"./insertElementAfterBegin-a140326f.js"
import{c as x}from"./createSpan-0e686680.js"
import"./csvSplit-a090804f.js"
import"./insertElementBefore-5adb1609.js"
function R(t){return e({cmd:"bounty",page:t})}function k(e){return n("img",e[2]).title}function B(e){const n="A"===(s=e[0]).children[0].tagName?s.children[0]:s.children[0].children[0]
var s
return{target:t(n),link:n.href,lvl:t(n.nextSibling).replace(/[[|\]]/g,""),reward:t(e[2]),rewardType:k(e),posted:t(e[3]),xpLoss:t(e[4])}}let A,T,j,W,P,S
function C(e){return c(B(e),{progress:t(e[5])})}function H(e){(function(e){return!/No bounties active/.test(e.rows[1].cells[0].innerHTML)})(e)&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=C(e.rows[t].cells)
A.bounty.push(n)}}(e)}function M(){return A&&r-A.lastUpdate>W||T&&r-T.lastUpdate>W}function U(e){const t=e[6]
return"[n/a]"!==l(t)?t.children[0].children[0].getAttribute("onclick"):""}const E=[()=>S.includes("*"),e=>S.includes(e),(e,t)=>u.wantedGuildMembers&&"[n/a]"===l(t.cells[6])]
function O(e,t){var n;(function(e,t){return"[active]"!==l(t.cells[6])&&E.some((n=>n(e,t)))})(e,t)&&T.bounty.push((n=t.cells,c(B(n),{offerer:l(n[1].children[0].children[0]),tickets:l(n[5]),accept:U(n)})))}let q,G,X,z,D,I
function K(){return d({className:"minibox"})}function _(){b("bountyList",A),p("",q)
const e=d({innerHTML:`<a href="${h}">Active Bounties</a> `})
X=x({className:"xxsLink",textContent:"Reset"}),m(e,X),m(q,e)
let t=""
if(0===A.bounty.length)t+='<div class="xsOrange">[No active bounties]</div>'
else for(let e=0;e<A.bounty.length;e+=1)t+=`<a href="${A.bounty[e].link}" class="tip-static" data-tipped="${n=A.bounty[e],`Level:  ${n.lvl}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Progress:  ${n.progress}`}">${A.bounty[e].target}</a><br>`
var n
y(q,t)}function F(){b("wantedList",T),p("",G)
const e=d({innerHTML:`<a href="${h}">Wanted Bounties</a> `})
z=x({className:"xxsLink",textContent:"Reset"}),m(e,z),m(G,e)
let t=""
if(0===T.bounty.length)t+='<div class="xsOrange">[No wanted bounties]</div>'
else for(let e=0;e<T.bounty.length;e+=1)t+=`${s=T.bounty[e],s.accept?`<span class="xsGreen" onclick="${s.accept}">[a]</span>&nbsp;`:""}<a class="xsKhaki tip-static" data-tipped="${n=T.bounty[e],`Target Level:  ${n.lvl}<br>Offerer: ${n.offerer}<br>Reward: ${n.reward} ${n.rewardType}<br>XP Loss Remaining: ${n.xpLoss}<br>Posted: ${n.posted}<br>Tickets Req.:  ${n.tickets}`}" href="${T.bounty[e].link}">${T.bounty[e].target}</a><br>`
var n,s
y(G,t)}function J(e){const t=n('#pCC input[name="page"]',e)
if(!t)return
D=Number(t.value),I=Number(t.parentNode.innerHTML.match(/of&nbsp;(\d*)/)[1])
const s=o("bounty-info",e).parentNode.parentNode.nextElementSibling.children[0].children[0]
s&&function(e){for(let t=1;t<e.rows.length-2;t+=2){const n=e.rows[t],s=l(n.cells[0].children[0].children[0])
if("[ No bounties available. ]"===s)break
O(s,n)}}(s)}function Q(e){u.enableActiveBountyList&&!j&&(!function(e){const t=o("bounty-info",e)
if(!t)return
const n=t.parentNode.parentNode.previousElementSibling.children[0].children[0]
A={},A.bounty=[],A.isRefreshed=!0,A.lastUpdate=r,n&&H(n),j=!0}(e),_())}function V(e){const t=L(e)
Q(t),u.enableWantedList&&(J(t),D<I?R(D+1).then(V):F())}const Y=[()=>!A,()=>!T,()=>P]
function Z(e,t){A=s("bountyList"),T=s("wantedList"),W=a("bountyListRefreshTime"),P=a("bwNeedsRefresh"),P||M()&&(P=!0),Y.some($)?(T={},T.bounty=[],T.isRefreshed=!0,T.lastUpdate=r,j=!1,S=w("wantedNames"),i("bwNeedsRefresh",!1),R(1).then(V)):function(e,t){t&&(T.isRefreshed=!1,F()),e&&(A.isRefreshed=!1,_())}(e,t)}function ee(e){e.target===X&&(b("bountyList",null),Z(u.enableActiveBountyList,u.enableWantedList)),e.target===z&&(b("wantedList",null),Z(u.enableActiveBountyList,u.enableWantedList))}function te(){g()||(u.enableWantedList&&(G=K(),N(f,G)),u.enableActiveBountyList&&(q=K(),N(f,q)),q&&v(q,ee),G&&v(G,ee),Z(u.enableActiveBountyList,u.enableWantedList))}export default te
//# sourceMappingURL=activeWantedBounties-f98ac21f.js.map