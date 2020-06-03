import { g as getElementsByTagName, f as on, r as partial, p as pCC, d as defTable, z as setInnerHtml, A as getText } from './calfSystem-03895320.js';
import { d as dontPost } from './dontPost-8839e18d.js';
import { d as dataRows } from './dataRows-40826543.js';
import { s as searchPlayerHref } from './searchPlayerHref-db4ac793.js';

function allowBack(topTable) { // jQuery
  const thisSelect = getElementsByTagName('select', topTable)[0];
  $(thisSelect).off();
  on(thisSelect, 'change', partial(dontPost, pCC));
}

function playerLink(el) {
  const aCell = el.cells[1];
  setInnerHtml(searchPlayerHref(getText(aCell)), aCell);
}

function globalQuest() {
  const topTable = getElementsByTagName(defTable, pCC)[3];
  allowBack(topTable);
  dataRows(topTable.rows, 4, 1).forEach(playerLink);
}

export default globalQuest;
//# sourceMappingURL=globalQuest-7887b461.js.map
