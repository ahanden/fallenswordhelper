import{x as e,I as t,u as n,$ as r}from"./calfSystem-db2edbef.js"
import{h as s}from"./htmlResult-3119c188.js"
function i(n){return function(t,n){return e({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:t,items:n})}(t("itemRecipient"),n)}function m(e){return function(e,t){return n({cmd:"trade",subcmd:"senditems",xc:window.ajaxXC,target_username:e,sendItemList:t}).then(s)}(t("itemRecipient"),e)}function a(e){return r(i,m,e)}export{a as d}
//# sourceMappingURL=daAjaxSendItemsToRecipient-15b0cd8f.js.map
