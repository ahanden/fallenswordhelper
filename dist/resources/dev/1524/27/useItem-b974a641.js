import{e as r}from"./errorDialog-7f9c11b0.js"
import{i as o}from"./indexAjaxJson-b7f888c6.js"
import{d as e}from"./daUseItem-030e2858.js"
import{d as s}from"./dialog-370f639a.js"
function t(r){return o({cmd:"profile",subcmd:"equipitem",inventory_id:r,ajax:1}).then(s)}const a=r=>({...r,r:r.s?0:1})
function i(o){return e(o).then(r).then(a)}export{a,t as e,i as u}
//# sourceMappingURL=useItem-b974a641.js.map
