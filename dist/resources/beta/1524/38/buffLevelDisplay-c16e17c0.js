import{E as e,aa as t}from"./calfSystem-71efcdd9.js"
function n(e){const n=/Level: (\d+)/.exec(e.dataset.tipped)
if(!n)return
const i=n[1]
let l=e.nextElementSibling
e.nextElementSibling||(l=e.parentNode.nextElementSibling),t(l,`<b>(${i})</b><br>`)}function i(){e('#profileRightColumn img[src*="/skills/"]').forEach(n)}export default i
//# sourceMappingURL=buffLevelDisplay-c16e17c0.js.map
