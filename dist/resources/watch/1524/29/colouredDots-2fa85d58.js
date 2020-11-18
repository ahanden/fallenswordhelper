import { G as getValue, ab as querySelectorAll, bp as lastActivityRE, A as setInnerHtml } from './calfSystem-b31646eb.js';
import { o as onlineDot } from './onlineDot-faba3c40.js';
import { b as batch } from './batch-9c39837c.js';

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
//# sourceMappingURL=colouredDots-2fa85d58.js.map
