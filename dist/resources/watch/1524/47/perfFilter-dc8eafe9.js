import { y as jQueryNotPresent, R as clickThis, z as getElementById, b as createDiv, f as insertHtmlBeforeEnd, i as insertElement, p as pCC, o as onclick } from './calfSystem-7a121553.js';
import { g as getArrayByClassName } from './getArrayByClassName-e195f729.js';
import { g as getInventoryById } from './getInventoryById-ae04b078.js';

let inv;
let target;

function clickOnPerf(el) {
  const thisItem = el.id.replace(`${target}-item-`, '');
  if (inv[thisItem] && inv[thisItem].craft === 'Perfect') { clickThis(el); }
}

function selectPerf() {
  const items = getArrayByClassName('selectable-item',
    getElementById(`${target}-items`));
  if (items.length === 0) { return; } // ?
  items.forEach(clickOnPerf);
}

function drawFilters(data) {
  inv = data.items;
  const buttonDiv = createDiv({ className: 'fshAC' });
  insertHtmlBeforeEnd(buttonDiv,
    '<button class="fshBl">Perfect</button>');
  insertElement(pCC, buttonDiv);
  onclick(buttonDiv, selectPerf);
}

function perfFilter(loc) { // jQuery.min
  if (jQueryNotPresent()) { return; }
  target = loc;
  getInventoryById().then(drawFilters);
}

export { perfFilter as p };
//# sourceMappingURL=perfFilter-dc8eafe9.js.map
