import { g as getArrayByClassName } from './getArrayByClassName-693e501a.js';
import { ag as arrayFrom, s as partial, c as calf, ac as querySelectorAll, M as getElementsByClassName, z as getElementById, H as getTextTrim, h as hasClass, y as jQueryNotPresent, o as onclick } from './calfSystem-86663d02.js';
import { h as hideElement } from './hideElement-452544d4.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-cb406237.js';
import { s as selfIdIs } from './selfIdIs-e7f34ecb.js';

function colouring(parent, colourFn) {
  getArrayByClassName('player-name', parent).forEach(colourFn);
}

function contactColour(el, obj) {
  const onMouseOver = el.dataset.tipped;
  const lastActivityMinutes = /Last Activity:<\/td><td>(\d+) mins/.exec(onMouseOver)[1];
  if (lastActivityMinutes < 2) {
    el.classList.add(obj.l1);
  } else if (lastActivityMinutes < 5) {
    el.classList.add(obj.l2);
  } else {
    el.classList.add(obj.l3);
  }
}

function hideNodeList(nodeList) {
  arrayFrom(nodeList).forEach(hideElement);
}

const hideBtn = [
  [
    'hideGuildInfoTrade',
    '#guild-minibox-action-trade',
    '#online-allies-action-trade',
  ],
  [
    'hideGuildInfoSecureTrade',
    '#guild-minibox-action-secure-trade',
    '#online-allies-action-secure-trade',
  ],
  [
    'hideGuildInfoBuff',
    '#guild-minibox-action-quickbuff',
    '#online-allies-action-quickbuff',
  ],
  [
    'hideGuildInfoMessage',
    '#guild-minibox-action-send-message',
    '#online-allies-action-send-message',
  ],
];

function hideType(context, selector, el) {
  if (calf[el[0]]) {
    hideNodeList(querySelectorAll(el[selector], context));
  }
}

function doHideBtn(context, selector) {
  hideBtn.forEach(partial(hideType, context, selector));
}

function toggleBuffSelected(on, off, evt) {
  evt.preventDefault();
  evt.target.classList.toggle(on);
  evt.target.classList.toggle(off);
}

function selectedBuff(parent, on) {
  const buffBalls = getArrayByClassName(on, parent);
  const sendstring = buffBalls.map((el) => getTextTrim(el.nextElementSibling));
  openQuickBuffByName(sendstring.join());
}

function eventsToHandle([parent, checkOn, checkOff, quickBuff]) {
  return [
    [partial(hasClass, checkOn), partial(toggleBuffSelected, checkOn, checkOff)],
    [partial(hasClass, checkOff), partial(toggleBuffSelected, checkOn, checkOff)],
    [selfIdIs(quickBuff), partial(selectedBuff, parent, checkOn)],
  ];
}

function handleEvent(evtAry, evt) {
  const hdl = evtAry.find((el) => el[0](evt.target));
  if (hdl) { return hdl[1](evt); }
}

function eventHandler([parent, checkOn, checkOff, quickBuff]) {
  return partial(handleEvent, eventsToHandle([parent, checkOn, checkOff, quickBuff]));
}

function doFixBuffSelected([parent, type, checkOn, quickBuff]) { // jQuery
  if (jQueryNotPresent) { return; }
  const checkOff = `${type}-buff-check-off`;
  $(`.${checkOn}`).off('click');
  $(`.${checkOff}`).off('click');
  $(`#${quickBuff}`).off('click');
  onclick(parent.parentNode, eventHandler([parent, checkOn, checkOff, quickBuff]));
}

function doHideBuffSelected(parent, type) {
  const checkOn = `${type}-buff-check-on`;
  const quickBuff = `${type}-quick-buff`;
  if (calf.hideBuffSelected) {
    hideNodeList(getElementsByClassName(checkOn, parent));
    hideElement(getElementById(quickBuff));
  } else if (calf.fixBuffSelected) {
    doFixBuffSelected([parent, type, checkOn, quickBuff]);
  }
}

export { doHideBuffSelected as a, contactColour as b, colouring as c, doHideBtn as d };
//# sourceMappingURL=doHideBuffSelected-c263935c.js.map
