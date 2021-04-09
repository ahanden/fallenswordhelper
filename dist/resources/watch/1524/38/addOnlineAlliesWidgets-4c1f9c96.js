import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-36b2e538.js';
import { z as getElementById } from './calfSystem-a8d6dd2c.js';
import './getArrayByClassName-4826b4c1.js';
import './hideElement-9b8f5190.js';
import './openQuickBuffByName-959a1b6e.js';
import './fshOpen-ec83b065.js';
import './selfIdIs-1e8303fe.js';

function alliesColour(el) {
  contactColour(el, {
    l1: 'fshDodgerBlue',
    l2: 'fshLightSkyBlue',
    l3: 'fshPowderBlue',
  });
}

function addOnlineAlliesWidgets() {
  const onlineAlliesList = getElementById('minibox-allies-list');
  if (!onlineAlliesList) { return; }
  doHideBtn(onlineAlliesList, 2);
  doHideBuffSelected(onlineAlliesList, 'ally');
  // add coloring for offline time
  colouring(onlineAlliesList, alliesColour);
}

export default addOnlineAlliesWidgets;
//# sourceMappingURL=addOnlineAlliesWidgets-4c1f9c96.js.map
