import{a3 as a,s as i,c as e,ab as s,F as n,x as d}from"./calfSystem-d49dbbd3.js"
import{h as t}from"./hideElement-a25240d4.js"
import{g as o}from"./getArrayByClassName-511145a8.js"
function c(a,i){o("player-name",a).forEach(i)}function l(a,i){const e=a.dataset.tipped,s=/Last Activity:<\/td><td>(\d+) mins/.exec(e)[1]
s<2?a.classList.add(i.l1):s<5?a.classList.add(i.l2):a.classList.add(i.l3)}function f(i){a(i).forEach(t)}const u=[["hideGuildInfoTrade","#guild-minibox-action-trade","#online-allies-action-trade"],["hideGuildInfoSecureTrade","#guild-minibox-action-secure-trade","#online-allies-action-secure-trade"],["hideGuildInfoBuff","#guild-minibox-action-quickbuff","#online-allies-action-quickbuff"],["hideGuildInfoMessage","#guild-minibox-action-send-message","#online-allies-action-send-message"]]
function r(a,i,n){e[n[0]]&&f(s(n[i],a))}function m(a,e){u.forEach(i(r,a,e))}function b(a,i,s){e.hideBuffSelected&&(f(n(i,a)),t(d(s)))}export{b as a,l as b,c,m as d}
//# sourceMappingURL=doHideBuffSelected-ae69107f.js.map