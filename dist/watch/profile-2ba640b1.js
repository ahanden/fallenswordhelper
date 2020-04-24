import { A as getElementById, u as partial, h as hideElement, b$ as getCustomUrlParameter, a$ as retryAjax, o as onclick, p as pCC, bl as profile, aI as cdn, bt as playerId, k as insertHtmlBeforeEnd, T as createSpan, C as setInnerHtml, i as insertElement, Q as isArray, a2 as sendEvent, e as createDiv, B as setText, K as getElementsByClassName, m as itemRE, n as getArrayByTagName, D as getText, S as querySelector, a3 as jQueryDialog, c0 as insertQuickExtract, al as getArrayByClassName, Z as clickThis, c1 as classHandler, at as hideQTip, G as getValue, c2 as pointsUrl, b7 as getTextTrim, M as querySelectorArray, a as add, aW as shouldBeArray, b4 as currentGuildId, a1 as setValue, bK as guildViewUrl, c3 as joinallUrl, c4 as joinUnderUrl, b_ as recallUserUrl, x as guildSubcmdUrl, c5 as auctionhouseUrl, bB as secureUrl, $ as insertHtmlAfterEnd, g as getElementsByTagName, b as defTable, b6 as contains, c6 as insertQuickWear, ba as cmdUrl, c7 as dropItemsUrl, I as intValue, J as valueText, L as defStatLevel, c8 as defStatVl, H as defCharacterVirtualLevel, aJ as arrayFrom, aE as defStatDefense, aD as defStatAttack, z as jQueryNotPresent, ae as playerName, ab as fallback, Y as getUrlParameter, N as indexPhp, l as on } from './calfSystem-1499e8da.js';
import { n as numberIsNaN } from './numberIsNaN-02f5e218.js';
import './round-8093ed49.js';
import './roundToString-c601143b.js';
import { r as renderBio, b as bioEvtHdl } from './render-13ae52d4.js';
import { t as toLowerCase } from './toLowerCase-c03a5a1f.js';
import './createInput-130831c0.js';
import { i as insertTextBeforeEnd } from './insertTextBeforeEnd-655e8801.js';
import './onlineDot-bdc3542d.js';
import './batch-c565a2ed.js';
import { c as compressBio, a as colouredDots } from './compressBio-08be3a24.js';
import './createLabel-4af5355a.js';
import { c as createTBody } from './createTBody-1200d84b.js';
import { c as createTable } from './createTable-41c9e160.js';
import { c as createButton } from './createButton-612ac40f.js';
import './dialogMsg-eb4f8460.js';
import './closest-84d0d41f.js';
import './closestTable-116d085b.js';
import './insertHtmlBeforeBegin-f93c7a1f.js';
import { a as addStatTotalToMouseover } from './addStatTotalToMouseover-91e70d76.js';
import './all-5a1f9691.js';
import { a as allthen } from './allthen-f12255e2.js';
import { c as chunk } from './chunk-5e917610.js';
import { e as errorDialog, a as equipItem, u as useItem } from './useItem-b5409f4c.js';
import './rnd-32f50b63.js';
import { f as fetchdata } from './fetchdata-9c29229c.js';
import { j as jConfirm } from './jConfirm-2a4c314d.js';
import './dialog-40516655.js';
import './ajaxReturnCode-5beb5291.js';
import './daUseItem-279d89a4.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-d6d85ad0.js';
import { q as quickBuffHref } from './quickBuffHref-381c2f17.js';

let bpc;

function bp() {
  if (!bpc) {
    bpc = getElementById('backpackContainer');
  }
  return bpc;
}

const elementTests = [
  (target) => target.tagName === 'A',
  (target) => Boolean(target.href),
  (target) => target.href.includes('togglesection'),
];

function condition(target, fn) { return fn(target); }

function isSectionToggle(target) {
  return elementTests.every(partial(condition, target));
}

function oldStyleDiv(target) {
  if (target.style.display === 'block') {
    hideElement(target);
  }
  target.removeAttribute('style');
  return 0;
}

function toggleTarget(target) {
  if (target.hasAttribute('style')) {
    oldStyleDiv(target);
  } else {
    target.classList.toggle('fshHide');
  }
}

function toggleSection(target) {
  const sectionId = Number(getCustomUrlParameter(target.href, 'section_id'));
  if (sectionId === 5) {
    toggleTarget(bp());
  } else {
    toggleTarget(target.parentNode.parentNode.nextElementSibling);
  }
}

function testForSection(evt) {
  const { target } = evt;
  if (isSectionToggle(target)) {
    toggleSection(target);
    retryAjax(target.href);
    evt.preventDefault();
  }
}

function ajaxifyProfileSections() {
  onclick(pCC, testForSection);
}

function loadComponents() {
  return profile({ subcmd: 'loadcomponents' });
}

// import { $dataAccess } from './_dataAccess';

function daComponents() {
  // return $dataAccess(loadComponents, components);
  return loadComponents();
}

let componentList;

function tallyComponent(acc, el) {
  acc[el.b] = acc[el.b] || {
    a: el.a,
    b: el.b,
    count: 0,
    del: [],
    v: el.v,
  };
  acc[el.b].count += 1;
  acc[el.b].del.push(el.a);
  return acc;
}

function prepareComponentList(data) {
  componentList = data.r.reduce(tallyComponent, {});
}

function tallyTableRow(acc, comp) {
  return `${acc}<tr><td><img src="${cdn}items/${comp.b
  }.gif" class="fshTblCenter tip-dynamic" data-tipped="fetchitem.php?`
    + `item_id=${comp.b}&inv_id=${comp.a}&t=2&p=${playerId()
    }&vcode=${comp.v}"></td><td>${comp.count
    }</td><td>[<span class="sendLink compDelType" data-compid="${comp.b
    }">Del</span>]</td></tr>`;
}

function makeTallyTbody(data) {
  const tBody = createTBody();
  prepareComponentList(data);
  insertHtmlBeforeEnd(tBody,
    `<tr><td colspan="3">Component Summary</td></tr>${
      Object.values(componentList).reduce(tallyTableRow, '')}`);
  return tBody;
}

function makeTotalCell(tbl) {
  const totRow = tbl.insertRow(-1);
  insertHtmlBeforeEnd(totRow, '<td>Total:</td>');
  const totCell = totRow.insertCell(-1);
  totCell.colSpan = 2;
  return totCell;
}

function makeUsedCount(data) {
  const usedCount = data.r.length;
  const usedCountDom = createSpan();
  setInnerHtml(usedCount, usedCountDom);
  return usedCountDom;
}

function makeTotalRow(tbl, data) {
  const totCell = makeTotalCell(tbl);
  insertElement(totCell, makeUsedCount(data));
  insertTextBeforeEnd(totCell, ` / ${data.h.cm.toString()}`);
}

function makeTallyTable(data) {
  const tbl = createTable({ className: 'fshTblCenter', id: 'fshTally' });
  insertElement(tbl, makeTallyTbody(data));
  makeTotalRow(tbl, data);
  return tbl;
}

function displayComponentTally(target, data) {
  if (!isArray(data.r)) { return; }
  const sumComp = target.parentNode;
  if (sumComp) {
    setInnerHtml('', sumComp);
    insertElement(sumComp, makeTallyTable(data));
  }
}

function countComponent(target) { // jQuery.min
  sendEvent('components', 'countComponent');
  daComponents().then(partial(displayComponentTally, target));
}

function decorateButton(label) {
  const parentDiv = createDiv();
  const innerSpan = createSpan({
    className: `sendLink ${toLowerCase(label).replace(/ /g, '-')}`,
    textContent: label,
  });
  setText('[', parentDiv);
  insertElement(parentDiv, innerSpan);
  insertHtmlBeforeEnd(parentDiv, ']');
  return parentDiv;
}

function destroyComponent(componentIdAry) {
  return profile({ subcmd: 'destroycomponent', removeIndex: componentIdAry });
}

// import { $dataAccess } from './_dataAccess';
// import dropComponent from './fallbacks/dropComponent';

function daDestroyComponent(componentIdAry) {
  // return $dataAccess(destroyComponent, dropComponent, componentIdAry);
  return destroyComponent(componentIdAry);
}

let invTableCache;

function getInvTable() {
  if (!invTableCache) {
    const invTables = getElementsByClassName('inventory-table',
      getElementById('profileRightColumn'));
    if (invTables.length === 2) { [, invTableCache] = invTables; }
  }
  return invTableCache;
}

let visibleCache;

function getComponents(acc, x) {
  const matches = x.dataset.tipped.match(itemRE);
  acc[matches[2]] = x.parentNode.parentNode;
  return acc;
}

function getVisibleComponents() {
  if (!visibleCache) {
    const nodeList = getArrayByTagName('img', getInvTable());
    visibleCache = nodeList.reduce(getComponents, {});
  }
  return visibleCache;
}

function blatElement(visibleComponents, a) {
  if (visibleComponents[a]) { setInnerHtml('', visibleComponents[a]); }
}

function deleteVisible(ary) {
  ary.forEach(partial(blatElement, getVisibleComponents()));
}

function updateUsedCount(del) {
  const invTableParent = getInvTable().parentNode;
  if (!invTableParent) { return; }
  const fshTally = invTableParent.children[2].children[1].children[0];
  if (fshTally.tagName !== 'TABLE') { return; }
  const tallyRows = fshTally.rows;
  const usedCountDom = tallyRows[tallyRows.length - 1].cells[1].children[0];
  let usedCount = Number(getText(usedCountDom));
  usedCount -= del;
  setText(usedCount, usedCountDom);
}

function doSpinner(td) {
  setInnerHtml('', td);
  // eslint-disable-next-line no-param-reassign
  td.className = 'guildTagSpinner';
  // eslint-disable-next-line no-param-reassign
  td.style.backgroundImage = `url('${cdn}ui/misc/spinner.gif')`;
}

function destroyed(data) {
  if (data.s && isArray(data.r)) {
    deleteVisible(data.r);
    updateUsedCount(data.r.length);
  }
}

function removeSpinner(td) { td.parentNode.remove(); }

function destroy(el) {
  return daDestroyComponent(el).then(destroyed);
}

function delCompType(target) { // jQuery.min
  const toDelete = componentList[target.dataset.compid].del;
  const td = target.parentNode;
  doSpinner(td);
  const prm = chunk(30, toDelete).map(destroy);
  allthen(prm, partial(removeSpinner, td));
}

function updateComponentCounts(itemId) {
  const delBtn = querySelector(`#fshTally [data-compid="${itemId}"]`);
  if (!delBtn) { return; }
  const countDom = delBtn.parentNode.parentNode.children[1];
  const count = Number(getText(countDom)) - 1;
  setText(count, countDom);
}

function compDeleted(target, itemId, data) {
  if (data.s) {
    updateComponentCounts(itemId);
    updateUsedCount(1);
    if (target.parentNode) { setInnerHtml('', target.parentNode); }
  }
}

function delComponent(target) { // jQuery.min
  const { tipped } = target.parentNode.children[0].children[0].dataset;
  const matches = tipped.match(itemRE);
  const itemId = matches[1];
  const componentId = matches[2];
  daDestroyComponent([componentId])
    .then(errorDialog)
    .then(partial(compDeleted, target, itemId));
}

const buttonLabels = [
  'Enable Quick Del',
  'Count Components',
  'Quick Extract Components',
];

function addButtons(acc, el) {
  insertElement(acc, decorateButton(el));
  return acc;
}

function componentBtnContainer() {
  return buttonLabels.reduce(addButtons, createDiv({ className: 'fshCenter' }));
}

function quickExtractHandler() {
  sendEvent('components', 'insertQuickExtract');
  jQueryDialog(insertQuickExtract);
}

function addDelBtn(el) {
  insertHtmlBeforeEnd(el.parentNode.parentNode,
    '<span class="compDelBtn">Del</span>');
}

function enableDelComponent(target) {
  sendEvent('components', 'enableDelComponent');
  const quickDelDiv = target.parentNode;
  hideElement(quickDelDiv);
  const cmDiv = quickDelDiv.parentNode;
  insertElement(cmDiv, decorateButton('Delete All Visible'));
  getArrayByTagName('img', getInvTable()).forEach(addDelBtn);
}

function delAllComponent(target) {
  sendEvent('components', 'delAllComponent');
  const thisInvTable = target.parentNode.parentNode.parentNode.children[0];
  getArrayByClassName('compDelBtn', thisInvTable).forEach(clickThis);
}

const classEvts = [
  ['quick-extract-components', quickExtractHandler],
  ['enable-quick-del', enableDelComponent],
  ['delete-all-visible', delAllComponent],
  ['compDelBtn', delComponent],
  ['count-components', countComponent],
  ['compDelType', delCompType],
];

function addComposingButtons(thisInvTable) {
  const compDiv = thisInvTable.parentNode;
  insertElement(compDiv, componentBtnContainer());
  onclick(compDiv, classHandler(classEvts));
}

function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) { return; }
  addComposingButtons(thisInvTable);
}

let disableDeactivatePrompts;
const success = (json) => json && json.response && json.response.response === 0;
const removeskill = (buffId) => fetchdata({ a: 22, id: buffId });

function debuffSuccess(aLink, json) {
  if (success(json)) { setInnerHtml('', aLink.parentNode); }
}

function doDebuff(aLink) { // jQuery.min
  sendEvent('profile', 'doDebuff');
  const buffId = aLink.href.match(/(\d+)$/)[1];
  removeskill(buffId).then(errorDialog).then(partial(debuffSuccess, aLink));
}

function doPrompt(aLink) {
  const hcsOnclick = aLink.getAttribute('onclick');
  const warn = hcsOnclick
    .match(/Are you sure you wish to remove the .* skill\?/)[0];
  jConfirm('Remove Skill', warn, partial(doDebuff, aLink));
}

function checkForPrompt(aLink) {
  if (!disableDeactivatePrompts) {
    doPrompt(aLink);
  } else {
    doDebuff(aLink);
  }
}

function interceptDebuff(e) {
  let aLink = e.target;
  if (aLink.tagName === 'IMG') {
    hideQTip(e.target);
    aLink = aLink.parentNode;
  } else if (aLink.tagName !== 'A') { return; }
  e.stopPropagation();
  e.preventDefault();
  checkForPrompt(aLink);
}

function fastDebuff() {
  const profileRightColumn = getElementById('profileRightColumn');
  if (profileRightColumn) {
    disableDeactivatePrompts = getValue('disableDeactivatePrompts');
    onclick(profileRightColumn.lastElementChild, interceptDebuff, true);
  }
}

function highlightPvpProtection() {
  if (!getValue('highlightPvpProtection')) { return; }
  const pvpp = querySelector(`#profileLeftColumn a[href="${pointsUrl}"]`);
  if (getTextTrim(pvpp.parentNode.nextSibling) !== 'N/A') { // Text Node
    pvpp.parentNode.parentNode.style.cssText = 'border: 3px solid red'; // TODO
  }
}

const THEBACKPACK = 0;
const RESULT = 1;
const SELF = 2;
const INVID = 3;

function restyleBackpack() {
  const bpBack = getElementById('backpack');
  bpBack.className = 'fshBackpack';
  bpBack.removeAttribute('style');
}

function thisInvId(invId, el) { return el.a === invId; }

function backpackRemove(theBackpack, invId) { // jQuery.min
  // remove from srcData
  const i = theBackpack.srcData.findIndex(partial(thisInvId, Number(invId)));
  if (i !== -1) { theBackpack.srcData.splice(i, 1); }
}

function actionResult(ary, data) {
  if (data.r !== 0) {
    ary[SELF].remove();
    return;
  }
  backpackRemove(ary[THEBACKPACK], ary[INVID]);
  ary[SELF].classList.remove('fshSpinner');
  setInnerHtml(`<span class="fastWorn">${ary[RESULT]}</span>`,
    ary[SELF].parentNode);
}

function fastAction(theBackpack, evt, action, result) { // jQuery.min
  sendEvent('profile', `fastAction - ${result}`);
  const { target } = evt;
  const invId = target.parentNode.parentNode.children[0].dataset.inv;
  setText('', target);
  target.className = 'fastAction fshSpinner fshSpinner12';
  action(invId).then(
    partial(actionResult, [theBackpack, result, target, invId]),
  );
}

function evtHdl(theBackpack, evt) {
  if (evt.target.classList.contains('fastWear')) {
    fastAction(theBackpack, evt, equipItem, 'Worn');
  }
  if (evt.target.classList.contains('fastUse')) {
    fastAction(theBackpack, evt, useItem, 'Used');
  }
}

function actionClass(usable) {
  if (usable) { return 'fastUse'; }
  return 'fastWear';
}

function actionText(usable) {
  if (usable) { return 'Use'; }
  return 'Wear';
}

function drawButtons(bp, theSpan) {
  const toUse = theSpan.classList.contains('backpackContextMenuUsable');
  const myDiv = createDiv({
    className: 'fastDiv',
    innerHTML: `<span class="sendLink fastAction ${actionClass(toUse)}">${
      actionText(toUse)}</span>`,
  });
  if (bp.options.checkboxesEnabled) {
    insertElement(myDiv,
      theSpan.parentNode.nextElementSibling.nextElementSibling);
  }
  insertElement(theSpan.parentNode.parentNode, myDiv);
}

function fastWearLinks(bp) {
  const items = querySelectorArray(
    `#backpackTab_${bp.type.toString()
    } .backpackContextMenuEquippable,.backpackContextMenuUsable`,
  );
  items.forEach(partial(drawButtons, bp));
}

function updateSrc(img, gif) {
  const url = `${cdn}ui/misc/${gif}.png`;
  // eslint-disable-next-line no-param-reassign
  if (img.src !== url) { img.src = url; }
}

function doFolder(thisFolder, img) {
  if (img.dataset.folder === thisFolder) {
    updateSrc(img, 'folder_on');
  } else {
    updateSrc(img, 'folder');
  }
}

function fixFolders(theBackpack) {
  querySelectorArray('.backpackFolderImage')
    .forEach(partial(doFolder, String(theBackpack.folderId)));
}

function foundBackpack(backpackContainer, theBackpack) {
  const oldShow = theBackpack._showPage;
  // eslint-disable-next-line no-param-reassign
  theBackpack._showPage = function _showPage(type, page) {
    if (!theBackpack.tabData) { return; }
    fixFolders(theBackpack);
    oldShow.call(theBackpack, type, page);
    fastWearLinks(theBackpack);
  };
  if (getText(getElementById('backpack_current')).length !== 0) {
    add(3, fastWearLinks, [theBackpack]);
  }
  onclick(backpackContainer, partial(evtHdl, theBackpack));
}

function initialiseFastWear() {
  const backpackContainer = getElementById('backpackContainer');
  const theBackpack = $(backpackContainer).data('hcsBackpack');
  if (theBackpack) { foundBackpack(backpackContainer, theBackpack); }
}

function injectFastWear() { // jQuery
  if (!getValue('enableQuickDrink')) { return; }
  restyleBackpack();
  initialiseFastWear();
}

function unequipitem(item) {
  return profile({
    subcmd: 'unequipitem',
    inventory_id: item,
  });
}

// import { $dataAccess } from './_dataAccess';

function daUnequipItem(item) {
  // return $dataAccess(unequipitem, unequip, item);
  return unequipitem(item);
}

let profileCombatSetDiv;

function clearBox(link, json) {
  if (json.s) {
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
  const profileRightColumn = getElementById('profileRightColumn');
  profileCombatSetDiv = getElementById('profileCombatSetDiv');
  const targetBr = profileCombatSetDiv.parentNode.nextElementSibling;
  const nekidDiv = makeButton();
  profileRightColumn.replaceChild(nekidDiv, targetBr);
}

let guildId;
let currentGuildRelationship;
const myGuildMsgs = [
  ['self', 'fshGreen', 'guildSelfMessage'],
  ['friendly', 'fshOliveDrab', 'guildFrndMessage'],
  ['old', 'fshDarkCyan', 'guildPastMessage'],
  ['enemy', 'fshRed', 'guildEnmyMessage'],
];
const typeMapping = [
  ['guildFrnd', 'friendly'],
  ['guildPast', 'old'],
  ['guildEnmy', 'enemy'],
];

function guildAry(pref) {
  const val = shouldBeArray(pref);
  if (val) {
    return val.map(replaceDoubleSpace).map(toLowerCase);
  }
  return [];
}

function expandList(arr) {
  return [guildAry(arr[0]), arr[1]];
}

function buildScenario() {
  return typeMapping.map(expandList);
}

function hasRelationship(txt, el) {
  return el[0].includes(txt);
}

function externalRelationship(_txt) {
  const scenario = buildScenario();
  const txt = replaceDoubleSpace(toLowerCase(_txt));
  const relObj = scenario.find(partial(hasRelationship, txt));
  if (relObj) { return relObj[1]; }
}

function thisGuildId(aLink) {
  const guildIdResult = /guild_id=([0-9]+)/i.exec(aLink.href);
  if (guildIdResult) { return Number(guildIdResult[1]); }
}

function guildRelationship(aLink) {
  guildId = thisGuildId(aLink);
  if (guildId && guildId === currentGuildId()) {
    setValue('guildSelf', getText(aLink));
    return 'self';
  }
  return externalRelationship(getText(aLink));
}

function whichMsg(arr) { return arr[0] === currentGuildRelationship; }

function setMsg(aLink) {
  const thisGuildRel = myGuildMsgs.find(whichMsg);
  aLink.parentNode.classList.add(thisGuildRel[1]);
  insertHtmlBeforeEnd(aLink.parentNode, `<br>${getValue(thisGuildRel[2])}`);
}

function foundGuildLink(aLink) {
  currentGuildRelationship = guildRelationship(aLink);
  if (currentGuildRelationship) {
    setMsg(aLink);
  }
}

function profileInjectGuildRel(isSelf) {
  const aLink = querySelector(
    `#pCC a[href^="${guildViewUrl}"]`,
  );
  if (aLink) {
    foundGuildLink(aLink);
  } else if (isSelf) {
    setValue('guildSelf', '');
  }
}

function joinGroups() {
  if (!getValue('enableMaxGroupSizeToJoin')) {
    return '<a class="quickButton buttonJoinAll tip-static fshJoin" '
      + `href="${joinallUrl}" `
      + 'data-tipped="Join All Groups"></a>&nbsp;&nbsp;';
  }
  const maxGroupSizeToJoin = getValue('maxGroupSizeToJoin');
  return `<a class="quickButton buttonJoinUnder tip-static fshJoin" href="${
    joinUnderUrl}" data-tipped="Join All Groups < ${
    maxGroupSizeToJoin} Members"></a>&nbsp;&nbsp;`;
}

function showRecallButton(playername) {
  if (currentGuildRelationship === 'self') {
    return `<a class="quickButton tip-static fshTempleThree" href="${
      recallUserUrl}${playername}" data-tipped="Recall items from ${
      playername}"></a>&nbsp;&nbsp;`;
  }
  return '';
}

function showRankButton(playerid, playername) {
  if (currentGuildRelationship === 'self' && getValue('showAdmin')) {
    return `<a class="quickButton buttonGuildRank tip-static" href="${
      guildSubcmdUrl}members&subcmd2=changerank&member_id=${
      playerid}" data-tipped="Rank ${
      playername}" style="background-image: url('${cdn}guilds/${
      guildId}_mini.png');"></a>&nbsp;&nbsp;`;
  }
  return '';
}

function profileInjectQuickButton(avyImg, playerid, playername) {
  let newhtml = '<div align="center">';
  newhtml += `<a class="quickButton buttonQuickBuff tip-static fshQuickBuff" ${
    quickBuffHref(playerid)}data-tipped="Buff ${playername
  }"></a>&nbsp;&nbsp;`;
  newhtml += joinGroups();
  newhtml += '<a class="quickButton tip-static fshGold" '
    + `href="${auctionhouseUrl}&type=-3&tid=${
      playerid}" data-tipped="Go to ${
      playername}'s auctions"></a>&nbsp;&nbsp;`;
  newhtml += `<a class="quickButton tip-static fshTempleTwo" href="${
    secureUrl}${playername}" data-tipped="Create Secure Trade to ${
    playername}"></a>&nbsp;&nbsp;`;
  newhtml += showRecallButton(playername);
  newhtml += showRankButton(playerid, playername);
  newhtml += '</div>';
  insertHtmlAfterEnd(avyImg, newhtml);
}

function totalKey(isAllies) {
  if (isAllies) { return 'alliestotal'; }
  return 'enemiestotal';
}

function contactSlots(numberOfContacts, contactsTotal) {
  if (contactsTotal && contactsTotal >= numberOfContacts) {
    return `/${contactsTotal}`;
  }
  return '';
}

function countContacts(isAllies, el) {
  const target = el.parentNode;
  const numberOfContacts = getElementsByTagName(defTable,
    target.nextElementSibling).length - 1;
  insertHtmlBeforeEnd(target,
    `<span class="fshBlue">&nbsp;${numberOfContacts.toString()
    }${contactSlots(numberOfContacts, getValue(totalKey(isAllies)))
    }</span>`);
}

function profileParseAllyEnemy() {
  // Allies/Enemies count/total function
  const headings = querySelectorArray('#profileLeftColumn strong');
  headings.filter(contains('Allies')).forEach(partial(countContacts, true));
  headings.filter(contains('Enemies')).forEach(partial(countContacts, false));
}

function doRender(bioCell) {
  let bioContents = bioCell.innerHTML;
  bioContents = renderBio(bioContents);
  if (bioContents) {
    setInnerHtml(bioContents, bioCell);
  }
}

function selfRender(isSelf) {
  return isSelf && getValue('renderSelfBio');
}

function otherRender(isSelf) {
  return !isSelf && getValue('renderOtherBios');
}

function shouldRender(isSelf) {
  return selfRender(isSelf) || otherRender(isSelf);
}

function testForRender(isSelf, bioCell) {
  if (shouldRender(isSelf)) {
    doRender(bioCell);
  }
}

function profileRenderBio(isSelf) {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  testForRender(isSelf, bioCell);
  if (getValue('enableBioCompressor')) { add(3, compressBio, [bioCell]); }
  onclick(bioCell, bioEvtHdl);
}

function openQwDialog() {
  sendEvent('profile', 'insertQuickWear');
  jQueryDialog(insertQuickWear);
}

function quickWearLink() {
  // quick wear manager link
  const node = querySelector(`#profileRightColumn a[href="${cmdUrl
  }profile&subcmd=togglesection&section_id=2"]`);
  if (!node) { return; }
  const wrap = createSpan({ innerHTML: '&nbsp;[' });
  const qw = createSpan({ className: 'sendLink', innerHTML: 'Quick&nbsp;Wear' });
  insertElement(wrap, qw);
  insertTextBeforeEnd(wrap, ']');
  insertElement(node.parentNode, wrap);
  onclick(qw, openQwDialog);
}

function profileSelectAll() {
  const bpTabs = getElementById('backpack_tabs');
  const type = getElementsByClassName('tab-selected', bpTabs)[0]
    .getAttribute('data-type');
  let items = querySelectorArray(`#backpackTab_${type
  } li:not(.hcsPaginate_hidden) .backpackItem`);
  if (items.length === 0) { return; }
  const checkboxes = querySelectorArray(`#backpackTab_${type
  } li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`);
  if (checkboxes.length > 0) { items = checkboxes; }
  items.forEach(clickThis);
}

function selectAllLink() {
  // select all link
  const node = querySelector(`#profileRightColumn a[href="${
    dropItemsUrl}"]`);
  if (!node) { return; }
  const allSpan = createSpan({ className: 'smallLink', textContent: 'All' });
  onclick(allSpan, profileSelectAll);
  const wrapper = createSpan({ innerHTML: '[&nbsp;' });
  insertElement(wrapper, allSpan);
  insertHtmlBeforeEnd(wrapper, '&nbsp;]&nbsp;');
  insertElement(node.parentNode, wrapper);
}

function sameAsLevel(virtualLevel) {
  return intValue(valueText(
    getElementsByClassName(defStatLevel),
  )) === virtualLevel;
}

function storeVL() {
  // store the VL of the player
  const virtualLevel = parseInt(getText(getElementById(defStatVl)), 10);
  if (sameAsLevel(virtualLevel)) {
    setValue(defCharacterVirtualLevel, ''); // ?
  } else {
    setValue(defCharacterVirtualLevel, virtualLevel);
  }
}

function thisText(thisNode) {
  return arrayFrom(thisNode.childNodes)
    .filter((el) => el.nodeType === 3)
    .map(getTextTrim)
    .join('');
}

function getDefStat() {
  return Number(thisText(getElementById(defStatDefense)));
}

function calcNmvEffect(atkStat, oldTipped) {
  const lvlAry = /\(Level: (\d+)\)/.exec(oldTipped);
  const nmvLvl = Number(lvlAry[1]);
  return Math.floor(atkStat * nmvLvl * 0.0025);
}

function gotAtk(nmvImg, atkStat) {
  const defStat = getDefStat();
  const oldTipped = nmvImg.dataset.tipped;
  const nmvEffect = calcNmvEffect(atkStat, oldTipped);
  // eslint-disable-next-line no-param-reassign
  nmvImg.dataset.tipped = `${oldTipped.slice(0, -15)
  }<br>Attack: ${(atkStat - nmvEffect).toString()
  }&nbsp;&nbsp;Defense: ${(defStat + nmvEffect).toString()
  }</center></div>`;
}

function gotImg(nmvImg) {
  const atkEl = getElementById(defStatAttack);
  if (!atkEl) { return; }
  const atkStat = Number(thisText(atkEl));
  if (!numberIsNaN(atkStat)) { gotAtk(nmvImg, atkStat); }
}

function updateNmv() {
  const nmvImg = querySelector('#profileRightColumn img[src$="/60.png"]');
  if (nmvImg) { gotImg(nmvImg); }
}

function removeStatTable(el) {
  const tde = getElementsByTagName('td', el);
  setInnerHtml(`<span id="${tde[0].id}">${
    tde[0].innerHTML.replace(/&nbsp;/g, ' ').trim()}</span> `
    + `<div class="profile-stat-bonus">${getText(tde[1])}</div>`,
  el.parentNode);
}

function updateStatistics() {
  const charStats = getElementsByTagName(defTable,
    getElementById('profileLeftColumn'))[0];
  getArrayByTagName(defTable, charStats).forEach(removeStatTable);
}

function ifSelf(isSelf) {
  if (isSelf) {
    // self inventory
    fastDebuff();
    profileParseAllyEnemy();
    injectFastWear();
    components();
    quickWearLink();
    selectAllLink();
    storeVL();
    nekidBtn();
    ajaxifyProfileSections();
  }
}

function guildRelationship$1(avyImg, playername, isSelf) {
  // Must be before profileInjectQuickButton
  profileInjectGuildRel(isSelf);
  // It sets up guildId and currentGuildRelationship
  const playerid = fallback(getUrlParameter('player_id'), playerId());
  profileInjectQuickButton(avyImg, playerid, playername);
}

function updateDom(avyImg, playername, isSelf) {
  ifSelf(isSelf);
  guildRelationship$1(avyImg, playername, isSelf);
  updateNmv();
  updateStatistics();
  highlightPvpProtection();
  add(3, profileRenderBio, [isSelf]);
  addStatTotalToMouseover();
  add(3, colouredDots);
}

function updateUrl(e) {
  e.preventDefault();
  const validInputs = arrayFrom(e.target.closest('form').elements)
    .filter((i) => i.type !== 'submit')
    .map((i) => `${i.name}=${i.value}`).join('&');
  window.location = `${indexPhp}?${validInputs}`;
}

function allowBack(isSelf) {
  if (!isSelf) {
    on(querySelector('#profileRightColumn'), 'submit', updateUrl);
  }
}

function injectProfile() { // Legacy
  if (jQueryNotPresent()) { return; }
  const avyImg = querySelector(
    '#profileLeftColumn img[src*="/avatars/"][width="200"]',
  );
  if (!avyImg) { return; }
  const playername = getText(getElementsByTagName('h1', pCC)[0]);
  const isSelf = playername === playerName();
  updateDom(avyImg, playername, isSelf);
  allowBack(isSelf);
}

export default injectProfile;
//# sourceMappingURL=profile-2ba640b1.js.map