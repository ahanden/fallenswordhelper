import{x as t,$ as e,t as n,V as o}from"./calfSystem-d56087e1.js"
import{g as s,s as r}from"./idb-a1e4e2c2.js"
function i(){return t({cmd:"superelite"})}let c,u,a
function f(){u&&(window.clearTimeout(u),u=!1),a&&(window.clearInterval(a),a=!1)}function l(t,e){const n=t-e.time,o=e.creature.name.replace(" (Super Elite)","");(!c.se[o]||c.se[o]<n)&&(c.se[o]=n)}function m(t){(function(t){return t&&t.t})(t)&&function(t){const e=Number(t.t.split(" ")[1])
c||(c={lastUpdate:0,se:{}}),c.lastUpdate=e
const o=t.r
o&&(o.forEach(n(l,e)),r("fsh_seLog",c))}(t)}function d(){return e(i).then(m)}function p(){return f(),a=window.setInterval(d,3e5),d()}function w(){const t=o-(c&&c.lastUpdate||0)
t>=600?p():u=window.setTimeout(p,1e3*(600-t))}function h(t){t&&(c=t)}function g(){return s("fsh_seLog").then(h)}function U(){g().then(w)}export{f as disableBackgroundChecks,p as doBackgroundCheck,g as getFshSeLog,c as oldLog,U as seLog}
//# sourceMappingURL=seLog-2f95365d.js.map
