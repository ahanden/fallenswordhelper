import { c as createAnchor } from './createAnchor-a855f662.js';
import { z as getElementById, i as insertElement, o as onclick, bL as profileUrl, ab as pointsUrl, aC as defSubcmd, bU as blacksmithUrl, bV as dropItemsUrl, aa as cmdUrl } from './calfSystem-6b7d7ae6.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-2e64279e.js';
import './insertElementBefore-2bf2da7f.js';

function preventHcs(evt) {
  evt.stopPropagation();
}

function statbarWrapper(href, id) {
  const character = getElementById(`statbar-${id}`);
  if (!character) { return; }
  const myWrapper = createAnchor({ href });
  const statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, preventHcs, true);
}

function statbar() {
  statbarWrapper(profileUrl, 'character');
  statbarWrapper(`${pointsUrl + defSubcmd}reserve`, 'stamina');
  statbarWrapper(blacksmithUrl, 'equipment');
  statbarWrapper(dropItemsUrl, 'inventory');
  statbarWrapper(pointsUrl, 'fsp');
  statbarWrapper(`${cmdUrl}bank`, 'gold');
}

export default statbar;
//# sourceMappingURL=statBar-ab22fde1.js.map
