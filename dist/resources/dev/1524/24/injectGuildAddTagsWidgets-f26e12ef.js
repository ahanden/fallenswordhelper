import{y as e,c3 as n,o as t,p as a,D as s,b as i,h as l,i as o,R as r,t as c,z as u,aH as m}from"./calfSystem-38898f3e.js"
import{c as p}from"./createInput-c92705dc.js"
import"./guild-fea08105.js"
import{g}from"./guildInventory-8c1723d8.js"
function f(e){return function(e){return g({subcmd2:"takeitem",guildstore_id:e})}(e)}function d(e){o(e.parentNode.nextElementSibling.nextElementSibling,'&nbsp;<span class="sendLink">Fast BP</span>')}function b(e,n){n.s&&(e.removeAttribute("style"),e.className="fshGreen",u("Taken",e))}function h(e){const{target:n}=e
var t
"Check All"===n.value&&s('#pCC input[name="tagIndex[]"]').forEach(r),"sendLink"===n.className&&(f((t=n).parentNode.previousElementSibling.previousElementSibling.children[0].value).then(c(b,t)),u("",t),t.className="guildTagSpinner",t.style.backgroundImage=`url('${m}ui/misc/spinner.gif')`)}function v(){t(a,h),s('#pCC input[name="tagIndex[]"]').forEach(d),function(){const e=p({type:"button",value:"Check All"}),n=i("form",a)
1===n.length&&l(n[0].previousElementSibling.cells[0],e)}()}function k(){e("tagging_cost")?v():n()}export default k
//# sourceMappingURL=injectGuildAddTagsWidgets-f26e12ef.js.map
