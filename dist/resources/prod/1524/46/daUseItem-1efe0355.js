import{u as t,w as s,S as e,bs as n,br as u,$ as r}from"./calfSystem-7991d843.js"
function o(t){const s=t.match(/(\d+) x (.*)/)
return{amount:s[1],type:n.indexOf(s[2])}}const a=[["You successfully used",()=>({s:!0})],["You successfully extracted",t=>({r:{item:{n:t.match(/'(.*)'/)[1]}},s:!0})],["You failed to extract",()=>({r:{},s:!0})],["You gained",function(t){const s=t.match(/You gained (.*) Fragments/)
if(s){return{r:{frags:s[1].split(", ").map(o)},s:!0}}e("da/useItem","Bad Msg",t)}]]
function i(t){const n=s(t)
if(!n)return e("da/useItem","No Info"),{s:!1}
{const t=a.find((t=>n.startsWith(t[0])))
if(t)return t[1](n)}return{e:{message:n},s:!1}}function c(s){return t({cmd:"profile",subcmd:"useitem",inventory_id:s}).then(i)}function f(t){return u({subcmd:"useitem",inventory_id:t})}function d(t){return r(f,c,t)}export{d}
//# sourceMappingURL=daUseItem-1efe0355.js.map
