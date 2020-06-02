import { r as partial, m as cElement, g as getElementsByTagName, d as defTable, p as pCC, a5 as insertHtmlAfterBegin, c as calf, i as insertElement, z as setInnerHtml, v as callApp, L as isArray, x as getElementById, aG as cdn, N as querySelector, ao as hideQTip, T as setValue, D as getValue, k as getArrayByTagName, h as itemRE, w as jQueryNotPresent, a as add, a1 as fallback, bk as ahSearchUrl, ar as guideUrl, aq as defSubcmd, bl as rarity, e as insertHtmlBeforeEnd, ac as sendException, aH as hasClass, o as onclick } from './calfSystem-6e4b53e3.js';
import { b as batch } from './batch-b57e96ed.js';
import { i as insertElementBefore } from './insertElementBefore-6a4c4d6a.js';
import './dialogMsg-ab1e4fbb.js';
import './closest-c88159b8.js';
import './closestTable-86bb79bc.js';
import './insertHtmlBeforeBegin-4da82bee.js';
import { a as addStatTotalToMouseover } from './addStatTotalToMouseover-2b218e32.js';
import { c as chunk } from './chunk-f643a731.js';
import './dialog-e7c94c6d.js';
import './indexAjaxJson-3f2c1d04.js';
import './ajaxReturnCode-873ef21a.js';
import './senditems-05aac690.js';
import { a as ajaxSendItems, d as dropItem } from './dropItem-d17f5d35.js';
import { c as createTr } from './createTr-3f08cffe.js';
import './makeFolderSpan-84bffc01.js';
import { m as makeFolderSpans } from './makeFolderSpans-e1b54118.js';
import { e as eventHandler5 } from './eventHandler5-bc478e0c.js';
import './cmdExport-67d5e685.js';
import './guildStore-a1fd8786.js';
import './getInventory-388e0bde.js';
import { g as getInventoryById } from './getInventoryById-c044b70b.js';
import { t as toggleForce } from './toggleForce-0d836f31.js';
import { s as selfIdIs } from './selfIdIs-1d8c0550.js';

var undefined$1 = undefined;

let invItems;
let itemId;

function guildTagged(o, el) {
  // eslint-disable-next-line no-param-reassign
  el.checked = !el.disabled && invItems[o.invid].guild_tag !== -1;
}

function tickElement(o, el) {
  // eslint-disable-next-line no-param-reassign
  el.checked = !el.disabled && !el.checked;
}

function allOfType(o, el) {
  if (invItems[o.invid] && invItems[o.invid].item_id === itemId) {
    tickElement(o, el);
  }
}

const types = [
  ['guild', guildTagged],
  ['item', allOfType],
  ['checkAll', tickElement],
];

function thisType(type, test) { return test[0] === type; }

function doCheck(how, o) {
  if (!o.injectHere) { return; }
  const tr = o.injectHere.parentNode;
  if (tr.classList.contains('fshHide')) { return; }
  const el = o.el.parentNode.parentNode.previousElementSibling.children[0];
  how(o, el);
}

function doCheckboxes(itemsAry, invItems_, type_, itemId_) {
  invItems = invItems_;
  const how = types.find(partial(thisType, type_))[1];
  itemId = Number(itemId_);
  itemsAry.forEach(partial(doCheck, how));
}

function createTd(props) {
  return cElement('td', props);
}

function extraButtons() {
  const tRows = getElementsByTagName(defTable, pCC)[0].rows;
  insertHtmlAfterBegin(tRows[tRows.length - 2].cells[0],
    '<input id="fshChkAll" value="Check All" type="button">&nbsp;');
}

function doFolderButtons(folders) {
  if (calf.subcmd2 === 'storeitems') {
    const formNode = getElementsByTagName('form', pCC)[0];
    if (formNode) {
      const tr = createTr({ className: 'fshCenter' });
      const insertHere = createTd({ colSpan: 3 });
      insertElement(tr, insertHere);
      insertElementBefore(tr, formNode);
      setInnerHtml(makeFolderSpans(folders), insertHere);
      extraButtons();
    }
  }
}

let insertHere;

function setInsertHere() {
  if (!insertHere) {
    const cltn = getElementsByTagName('form', pCC);
    if (cltn.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      insertHere = cltn[0].previousElementSibling.children[0];
    }
  }
}

function showHideLabel(pref) {
  if (pref) { return 'Hide'; }
  return 'Show';
}

function doToggleButtons(showExtraLinks, showQuickDropLinks) {
  // Option toggle buttons for both screens
  setInsertHere();
  if (insertHere) {
    let inject = `[<span id="fshShowExtraLinks" class="sendLink">${
      showHideLabel(showExtraLinks)} AH and UFSG links</span>]&nbsp;`
      + `[<span id="fshShowQuickDropLinks" class="sendLink">${
        showHideLabel(showQuickDropLinks)} Quick Drop links</span>]&nbsp;`;
    if (calf.subcmd2 === 'storeitems') {
      inject += '[<span id="fshSelectAllGuildLocked" class="sendLink">'
        + ' Select All Guild Locked</span>]&nbsp;';
    }
    setInnerHtml(inject, insertHere);
  }
}

function clearCheck(el) {
  // eslint-disable-next-line no-param-reassign
  el.parentNode.parentNode.previousElementSibling.children[0].checked = false;
}

function displayFolderItems(invItems, folderId, o) {
  const tr = o.injectHere.parentNode;
  const folder = invItems[o.invid].folder_id;
  const force = folderId !== 0 && folderId !== folder;
  toggleForce(tr, force);
  toggleForce(tr.nextElementSibling, force);
}

function updateList(invItems, folderId, o) {
  clearCheck(o.el);
  displayFolderItems(invItems, folderId, o);
}

function hideFolders(itemsAry, invItems, target) {
  batch([
    2,
    3,
    itemsAry,
    0,
    partial(updateList, invItems, Number(target.dataset.folder)),
  ]);
}

function sendtofolder(folderId, itemsAry) {
  return callApp({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    folder_id: folderId,
    folderItem: itemsAry,
  });
}

// import { $dataAccess } from './_dataAccess';

function daSendToFolder(folderId, itemsAry) {
  // return $dataAccess(sendtofolder, moveItems, folderId, itemsAry);
  return sendtofolder(folderId, itemsAry);
}

function checked(o) {
  if (!o.injectHere) { return; }
  return o.injectHere.previousElementSibling.previousElementSibling
    .children[0].checked;
}

const invid = (o) => o.invid;

function itemByInvId(invId, item) {
  return invId.toString() === item.invid;
}

function removeInvId(itemsAry, invId) {
  const o = itemsAry.find(partial(itemByInvId, invId));
  if (o) {
    const tr = o.injectHere.parentNode;
    tr.nextElementSibling.remove();
    tr.remove();
    o.el = null;
    o.invid = null;
    o.injectHere = null;
  }
}

function removeInvIds(itemsAry, json) {
  if (isArray(json.r)) {
    json.r.forEach(partial(removeInvId, itemsAry));
  }
}

function moveList(itemsAry, folderId, list) {
  daSendToFolder(folderId, list).then(partial(removeInvIds, itemsAry));
}

function moveItemsToFolder(itemsAry) { // jQuery.min
  const folderId = getElementById('selectFolderId').value;
  chunk(30, itemsAry.filter(checked).map(invid))
    .forEach(partial(moveList, itemsAry, folderId));
}

function anotherSpinner(target) {
  setInnerHtml(`<img class="quickActionSpinner" src="${
    cdn}ui/misc/spinner.gif" width="15" height="15">`, target);
}

function actionReturn(target, success, data) {
  if (data.r === 1) { return; }
  // eslint-disable-next-line no-param-reassign
  target.style.color = 'green';
  setInnerHtml(success, target);
}

function doAction(target, fn, success) {
  const itemInvId = target.getAttribute('itemInvId');
  fn([itemInvId]).then(partial(actionReturn, target, success));
}

function disableOtherButton(theTd, otherClass) {
  const otherButton = querySelector(otherClass, theTd);
  if (otherButton) {
    otherButton.className = 'quickAction';
    setInnerHtml('', otherButton);
  }
}

function disableCheckbox(theTd) {
  const checkbox = theTd.parentNode.children[0].children[0];
  checkbox.checked = false;
  checkbox.disabled = true;
}

function quickAction(fn, success, otherClass, target) {
  // eslint-disable-next-line no-param-reassign
  target.className = 'quickAction';
  doAction(target, fn, success);
  hideQTip(target);
  anotherSpinner(target);
  const theTd = target.parentNode;
  disableOtherButton(theTd, otherClass);
  disableCheckbox(theTd);
}

let disableItemColoring;
let showExtraLinks;
let showQuickDropLinks;
let showQuickSendLinks;

function setShowExtraLinks() {
  showExtraLinks = !showExtraLinks;
  setValue('showExtraLinks', showExtraLinks);
}

function setShowQuickDropLinks() {
  showQuickDropLinks = !showQuickDropLinks;
  setValue('showQuickDropLinks', showQuickDropLinks);
}

function getPrefs() {
  disableItemColoring = getValue('disableItemColoring');
  showExtraLinks = getValue('showExtraLinks');
  showQuickDropLinks = getValue('showQuickDropLinks');
  showQuickSendLinks = getValue('showQuickSendLinks');
}

let itemsAry;
let itemsHash;

function getItemImg() {
  const allTables = getElementsByTagName(defTable, pCC);
  const lastTable = allTables[allTables.length - 1];
  return getArrayByTagName('img', lastTable);
}

function hasTip(el) { return el.dataset.tipped; }

function getIds(el) {
  const matches = el.dataset.tipped.match(itemRE);
  return [
    el,
    matches[1],
    matches[2],
  ];
}

function tally(acc, curr) {
  acc[curr[1]] = (acc[curr[1]] || 0) + 1;
  return acc;
}

function getInjector(ary) {
  return {
    el: ary[0],
    invid: ary[2],
    injectHere: ary[0].parentNode.parentNode.nextElementSibling,
  };
}

function getItems() {
  addStatTotalToMouseover();
  getPrefs();
  doToggleButtons(showExtraLinks, showQuickDropLinks);
  const imgList = getItemImg();
  const fromTips = imgList.filter(hasTip).map(getIds);
  itemsAry = fromTips.map(getInjector);
  itemsHash = fromTips.reduce(tally, {});
  // Exclude composed pots
  itemsHash[13699] = 1;
}

let extraLinks;
let checkAll;
let dropLinks;
let invItems$1;
let colouring;
let sendLinks;

function afterbegin(o, item) {
  if (fallback(extraLinks, !showExtraLinks)) { return; }
  let pattern = '<span><span class="aHLink">';
  if (!item.bound) {
    pattern += `[<a href="${ahSearchUrl
    }${encodeURIComponent(item.item_name)}">AH</a>]`;
  }
  pattern += `</span>[<a href="${guideUrl}items${defSubcmd
  }view&item_id=${item.item_id}" target="_blank">UFSG</a>]</span>`;
  insertHtmlAfterBegin(o.injectHere, pattern);
}

function itemColouring(o, item) {
  if (!colouring && !disableItemColoring) {
    o.injectHere.classList.add(rarity[item.rarity].clas);
  }
}

const buildTrailer = [
  [
    (item) => !checkAll && itemsHash[item.item_id] !== 1,
    (o, item) => ` [<span linkto="${
      item.item_id}" class="fshLink">Check all</span>]`,
  ],
  [
    (item) => !sendLinks && showQuickSendLinks && !item.bound,
    (o) => ` <span class="quickAction sendLink tip-static" itemInvId="${
      o.invid}" data-tipped="INSTANTLY SENDS THE ITEM. `
      + 'NO REFUNDS OR DO-OVERS! Use at own risk.">[Quick Send]</span>',
  ],
  [
    (item) => !dropLinks && showQuickDropLinks && item.guild_tag === -1,
    (o) => ` <span class="quickAction dropLink tip-static" itemInvId="${
      o.invid}" data-tipped="INSTANTLY DROP THE ITEM. NO REFUNDS `
      + 'OR DO-OVERS! Use at own risk.">[Quick Drop]</span>',
  ],
];

function condition(item, pair) { return pair[0](item); }

function generateHtml(o, item, pair) { return pair[1](o, item); }

function beforeend(o, item) {
  itemColouring(o, item);
  const pattern = buildTrailer.filter(partial(condition, item))
    .map(partial(generateHtml, o, item)).join('');
  if (pattern !== '') { insertHtmlBeforeEnd(o.injectHere, pattern); }
}

function itemWidgets(o) {
  const item = invItems$1[o.invid];
  if (item) {
    afterbegin(o, item);
    beforeend(o, item);
  } else {
    sendException('injectStoreItems: Item not found', false);
  }
}

function doneInvPaint() {
  if (showExtraLinks) { extraLinks = true; }
  checkAll = true;
  colouring = true;
  if (showQuickDropLinks) { dropLinks = true; }
  sendLinks = true;
}

function toggleExtraLinks(o) {
  if (o.injectHere) {
    toggleForce(o.injectHere.children[0], !showExtraLinks);
  }
}

function toggleShowExtraLinks() {
  setShowExtraLinks();
  doToggleButtons(showExtraLinks, showQuickDropLinks);
  if (!extraLinks) {
    batch([5, 3, itemsAry, 0, itemWidgets, doneInvPaint]);
  } else {
    itemsAry.forEach(toggleExtraLinks);
  }
}

function toggleDropLinks(o) {
  toggleForce(querySelector('.dropLink', o.injectHere), !showQuickDropLinks);
}

function toggleShowQuickDropLinks() {
  setShowQuickDropLinks();
  doToggleButtons(showExtraLinks, showQuickDropLinks);
  if (!dropLinks) {
    batch([5, 3, itemsAry, 0, itemWidgets, doneInvPaint]);
  } else {
    itemsAry.forEach(toggleDropLinks);
  }
}

function doCheckboxesByType(type, itemId) {
  doCheckboxes(itemsAry, invItems$1, type, itemId);
}

function selfIds() {
  return [
    [selfIdIs('fshShowExtraLinks'), toggleShowExtraLinks],
    [selfIdIs('fshShowQuickDropLinks'), toggleShowQuickDropLinks],
    [selfIdIs('fshSelectAllGuildLocked'),
      partial(doCheckboxesByType, 'guild', null)],
    [selfIdIs('fshMove'), partial(moveItemsToFolder, itemsAry)],
    [selfIdIs('fshChkAll'), partial(doCheckboxesByType, 'checkAll', null)],
  ];
}

function evts() {
  return selfIds().concat([
    [
      (target) => target.hasAttribute('linkto'),
      (target) => {
        doCheckboxesByType('item', target.getAttribute('linkto'));
      },
    ],
    [partial(hasClass, 'sendLink'),
      partial(quickAction, ajaxSendItems, 'Sent', '.dropLink')],
    [partial(hasClass, 'dropLink'),
      partial(quickAction, dropItem, 'Dropped', '.sendLink')],
    [partial(hasClass, 'fshFolder'), partial(hideFolders, itemsAry, invItems$1)],
  ]);
}

function badData(data) {
  return !data || !data.items || !data.folders;
}

function inventory(data) {
  if (badData(data) || !itemsAry) { return; }
  extraLinks = false;
  checkAll = false;
  invItems$1 = data.items;
  colouring = false;
  dropLinks = false;
  sendLinks = false;
  batch([5, 3, itemsAry, 0, itemWidgets, doneInvPaint]);
  doFolderButtons(data.folders);
  onclick(pCC, eventHandler5(evts()));
}

function injectStoreItems() {
  if (jQueryNotPresent()) { return; }
  getInventoryById().then(inventory);
  add(3, getItems);
}

export default injectStoreItems;
//# sourceMappingURL=injectStoreItems-1acba9a4.js.map