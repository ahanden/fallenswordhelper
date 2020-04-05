import { def_table } from '../support/constants';
import getArrayByTagName from '../common/getArrayByTagName';
import { getElementById } from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';

function removeStatTable(el) {
  const tde = getElementsByTagName('td', el);
  el.parentNode.innerHTML = `<span id="${tde[0].id}">${
    tde[0].innerHTML.replace(/&nbsp;/g, ' ').trim()
  }</span> <div class="profile-stat-bonus">${getText(tde[1])}</div>`;
}

export default function updateStatistics() {
  const charStats = getElementsByTagName(def_table,
    getElementById('profileLeftColumn'))[0];
  getArrayByTagName(def_table, charStats).forEach(removeStatTable);
}
