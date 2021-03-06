import { c as createButton } from './createButton-be35b1eb.js';
import { w as infoBoxFrom, u as indexAjaxData, bv as profile, $ as $dataAccess, z as getElementById, B as setInnerHtml, s as partial, T as sendEvent, m as getArrayByTagName, b as createDiv, i as insertElement, o as onclick } from './calfSystem-86663d02.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-f79bfe63.js';

function formatResults(html) {
  const info = infoBoxFrom(html);
  if (!info) { return { s: true }; }
  return { e: { message: info }, s: false };
}

function unequip(item) {
  return indexAjaxData({
    cmd: 'profile',
    subcmd: 'unequipitem',
    inventory_id: item,
  }).then(formatResults);
}

function unequipitem(item) {
  return profile({
    subcmd: 'unequipitem',
    inventory_id: item,
  });
}

function daUnequipItem(item) {
  return $dataAccess(unequipitem, unequip, item);
}

let profileCombatSetDiv;

function clearBox(link, json) {
  if (json && json.s) {
    setInnerHtml('', link.parentNode);
  }
}

function removeItem(link) {
  const item = /inventory_id=(\d+)/.exec(link.href)[1];
  if (item) {
    daUnequipItem(item).then(partial(clearBox, link));
  }
}

function getNekid() {
  sendEvent('profile', 'nekidBtn');
  const profileBlock = profileCombatSetDiv.nextElementSibling;
  getArrayByTagName('a', profileBlock).forEach(removeItem);
}

function makeButton() {
  const nekidDiv = createDiv({ className: 'fshCenter' });
  const theBtn = createButton({
    className: 'fshBl fshBls',
    textContent: 'Nekid',
  });
  insertTextBeforeEnd(nekidDiv, '[ ');
  insertElement(nekidDiv, theBtn);
  insertTextBeforeEnd(nekidDiv, ' ]');
  onclick(theBtn, getNekid);
  return nekidDiv;
}

function nekidBtn() {
  profileCombatSetDiv = getElementById('profileCombatSetDiv');
  if (!profileCombatSetDiv) { return; }
  const targetBr = profileCombatSetDiv.parentNode.nextElementSibling;
  const nekidDiv = makeButton();
  getElementById('profileRightColumn').replaceChild(nekidDiv, targetBr);
}

export default nekidBtn;
//# sourceMappingURL=nekidBtn-e6799015.js.map
