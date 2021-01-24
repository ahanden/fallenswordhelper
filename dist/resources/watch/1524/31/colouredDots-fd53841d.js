import { b as batch } from './batch-42f379a6.js';
import { H as getValue, aa as querySelectorAll, by as lastActivityRE, A as setInnerHtml } from './calfSystem-91adbec8.js';
import { o as onlineDot } from './onlineDot-f5323202.js';

function changeOnlineDot(contactLink) {
  const lastActivity = lastActivityRE.exec(contactLink.dataset.tipped);
  setInnerHtml(onlineDot({
    min: lastActivity[3],
    hour: lastActivity[2],
    day: lastActivity[1],
  }), contactLink.parentNode.previousElementSibling);
}

function colouredDots() {
  if (!getValue('enhanceOnlineDots')) { return; }
  batch([
    5,
    3,
    querySelectorAll('#pCC a[data-tipped*="Last Activity"]'),
    0,
    changeOnlineDot,
  ]);
}

export { colouredDots as c };
//# sourceMappingURL=colouredDots-fd53841d.js.map