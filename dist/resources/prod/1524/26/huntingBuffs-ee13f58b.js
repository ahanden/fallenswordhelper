import{c as e}from"./calfSystem-a5fc99d4.js"
import{i as n}from"./isChecked-4820f42a.js"
import{h as t}from"./simpleCheckbox-e1941c15.js"
import{i as o}from"./isSelected-09e19637.js"
function s(){return`Hunting Buffs${t("Hunting Buffs","Customize which buffs are designated as hunting buffs. You must type the full name of each buff, separated by commas. Use the checkbox to enable/disable them.")}:`}function i(){return`<input name="showHuntingBuffs" class="fshVMid" type="checkbox" value="on"${n(e.showBuffs)}>`}function u(){return`Enabled Hunting Mode${t("Enabled Hunting Mode","This will determine which list of buffs gets checked on the world screen.")}:<select name="enabledHuntingMode"><option value="1"${o(e.enabledHuntingMode,"1")}>${e.buffsName}</option><option value="2"${o(e.enabledHuntingMode,"2")}>${e.buffs2Name}</option><option value="3"${o(e.enabledHuntingMode,"3")}>${e.buffs3Name}</option></select>`}function f(){return`${s()+i()} ${u()}`}function a(){return`<tr><td class="fshRight">${s()}</td><td colspan="3">${i()} ${u()}</td></tr>`}export{f as a,a as h}
//# sourceMappingURL=huntingBuffs-ee13f58b.js.map
