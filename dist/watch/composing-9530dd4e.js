import { ch as indexAjax, aI as cdn, C as setInnerHtml, aA as querySelectorAll, a1 as setValue, cj as defNeedToCompose, u as partial, a2 as sendEvent, B as setText, i as insertElement, M as querySelectorArray, o as onclick, p as pCC, k as insertHtmlBeforeEnd, al as getArrayByClassName, b6 as contains, S as querySelector, $ as insertHtmlAfterEnd, e as createDiv, U as insertElementAfter, R as once, D as getText, aM as now, c as calf, ck as defLastComposeCheck, j as jQueryPresent, G as getValue, A as getElementById, K as getElementsByClassName, P as insertElementBefore } from './calfSystem-1499e8da.js';
import { c as createInput } from './createInput-130831c0.js';
import { c as createTable } from './createTable-41c9e160.js';
import { p as publish, a as subscribe } from './pubsub-e787efd5.js';
import { r as rnd, g as getRandomInt } from './rnd-32f50b63.js';

function createPotionFromTemplate(tempId) {
  return indexAjax({
    cache: false,
    dataType: 'json',
    data: {
      cmd: 'composing',
      subcmd: 'createajax',
      template_id: tempId,
      fshrnd: rnd(),
    },
  });
}

function randomBackgroundImage() {
  return `url(${cdn}composing/${
    getRandomInt(1, 11)}_${getRandomInt(1, 51)}.png)`;
}

function updateInfoDiv(infoDiv, potName) {
  setInnerHtml('', infoDiv.children[0]);
  infoDiv.children[0].classList.add('fshPot');
  // eslint-disable-next-line no-param-reassign
  infoDiv.children[0].style.backgroundImage = randomBackgroundImage();
  setInnerHtml(`Creating '<span class="fshBold">${potName}</span>' Potion`,
    infoDiv.children[2]);
  setInnerHtml('', infoDiv.children[3]);
}

function amILast() {
  const openTemplates = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)',
  );
  if (openTemplates.length === 0) {
    setValue(defNeedToCompose, false);
  }
}

function createSuccess(temp) {
  const myParent = temp.parentNode;
  if (!myParent) { return; }
  setInnerHtml('<div class="fshScs">Success</div>', myParent);
  updateInfoDiv(myParent.previousElementSibling.previousElementSibling,
    temp[temp.selectedIndex].text);
  amILast();
}

function potionDone(temp, data) {
  const resultNode = temp.parentNode;
  if (!resultNode) { return; }
  if (data.error) {
    setInnerHtml(`<div class="fshScs">${data.error}</div>`, resultNode);
  } else {
    createSuccess(temp);
  }
}

function createPotion(temp) { // jQuery.min
  createPotionFromTemplate(temp.value).then(partial(potionDone, temp));
  // setTimeout(partial(potionDone, temp, {}, 'faked'), 200);
}

function backgroundCreate(target, temp) {
  setInnerHtml('', target);
  target.classList.add('fshSpinner', 'fshSpinner12', 'fshComposingSpinner');
  createPotion(temp);
  publish('quickcreate');
}

function doTableClass(myTable, slotsLeft) {
  myTable.classList.add(`left-${slotsLeft.toString()}`);
}

function quickcreate(myTable) {
  const openTemplates = querySelectorAll('.quickCreate .sendLink');
  doTableClass(myTable, openTemplates.length);
}

function composePots(button, templateId) {
  sendEvent('composing', 'FastComposeButton');
  const openTemplates = querySelectorAll(
    '[id|="composing-template"]:not(#composing-template-multi)',
  );
  if (openTemplates.length < button.value) { return; }
  for (let i = 0; i < button.value; i += 1) {
    openTemplates[i].value = templateId;
    backgroundCreate(openTemplates[i].nextElementSibling.nextElementSibling,
      openTemplates[i]);
  }
}

function handleClick(evt) {
  const button = evt.target;
  const { templateId } = button.dataset;
  if (templateId) { composePots(button, templateId); }
}

function buildButton(val, templateId) {
  return createInput({
    className: 'awesome orange',
    dataset: { templateId },
    type: 'button',
    value: val,
  });
}

function buildCells(template, myRow, compSlot, i) {
  if (i === 0) {
    setText(template[1], myRow.insertCell(-1));
  }
  insertElement(
    myRow.insertCell(-1),
    buildButton((i + 1).toString(), template[0]),
  );
  return myRow;
}

function buildRows(compSlots, openSlots, myTable, template) {
  compSlots.reduce(partial(buildCells, template), myTable.insertRow(-1));
  return myTable;
}

function buildTable(templates, compSlots, openSlots) {
  const myTable = createTable({ id: 'fshFastCompose' });
  doTableClass(myTable, openSlots);
  return templates.reduce(partial(buildRows, compSlots, openSlots), myTable);
}

function keyValuePairs(el) { return [el.value, el.text]; }

function setupFastCompose(fcDiv, compSlots, openSlots) {
  const templates = querySelectorArray('#composing-template-multi option')
    .map(keyValuePairs);
  const myTable = buildTable(templates, compSlots, openSlots);
  insertElement(fcDiv, myTable);
  onclick(pCC, handleClick);
  subscribe('quickcreate', partial(quickcreate, myTable));
}

function drawList(fcDiv) {
  sendEvent('composing', 'FastCompose');
  insertHtmlBeforeEnd(fcDiv, '<br>');
  const compSlots = getArrayByClassName('composing-potion-time', document);
  const openSlots = compSlots.filter(contains('ETA: n/a')).length;
  if (openSlots > 0) {
    setupFastCompose(fcDiv, compSlots, openSlots);
  } else {
    insertHtmlBeforeEnd(fcDiv, 'No open slots!');
  }
}

function fastCompose() {
  const buttonDiv = querySelector('#pCC div.centered');
  insertHtmlAfterEnd(buttonDiv.children[1],
    ' | <label for="fast-compose"><span class="sendLink">'
    + 'Fast Compose</span></label>');
  const fcDiv = createDiv({ className: 'centered' });
  insertElementAfter(fcDiv, buttonDiv);
  const fcCheck = createInput({ id: 'fast-compose', type: 'checkbox' });
  insertElementAfter(fcCheck, buttonDiv);
  once(fcCheck, 'change', partial(drawList, fcDiv));
}

const timeRE = /ETA:\s*(\d+)h\s*(\d+)m\s*(\d+)s/;

function timeRemaining(times, el) {
  const timeArr = timeRE.exec(getText(el));
  if (timeArr) {
    const milli = (timeArr[1] * 3600 + timeArr[2] * 60 + Number(timeArr[3]))
      * 1000 + now;
    return times.concat(milli);
  }
  return times.concat(0);
}

function setNeed(bool) {
  setValue(defNeedToCompose, bool);
}

function parseComposing() {
  if (!calf.enableComposingAlert) { return; }
  const openSlots = getArrayByClassName('composing-potion-time', document);
  const times = openSlots.reduce(timeRemaining, []);
  const eta = Math.min.apply(null, times);
  if (eta === 0) {
    setNeed(true);
  } else {
    setNeed(false);
    setValue(defLastComposeCheck, eta);
  }
}

function moveButtons() {
  if (getValue('moveComposingButtons')) {
    const buttonDiv = getElementById('composing-error-dialog')
      .previousElementSibling;
    buttonDiv.setAttribute('style', 'text-align: right; padding: 0 38px 0 0');
    const top = getElementsByClassName('composing-level', pCC)[0]
      .parentNode;
    insertElementBefore(buttonDiv, top);
  }
}

function injectButton(el) {
  insertHtmlAfterEnd(el, '<span class="quickCreate">'
    + '[<span class="sendLink">Quick Create</span>]</span>');
}

function isOurTarget(target) {
  return target.tagName === 'SPAN' && target.className === 'quickCreate';
}

function doQuickCreate(target) {
  const temp = target.previousElementSibling.previousElementSibling;
  if (temp && temp.value !== 'none') {
    backgroundCreate(target, temp);
    sendEvent('composing', 'QuickCreate');
  }
}

function quickCreate(evt) {
  const target = evt.target.parentNode;
  if (isOurTarget(target)) {
    doQuickCreate(target);
  }
}

function hasJQuery() {
  parseComposing();
  querySelectorArray('input[id^=create-]:not(#create-multi)', pCC)
    .forEach(injectButton);
  onclick(pCC, quickCreate);
  moveButtons();
  fastCompose();
}

function injectComposing() {
  if (jQueryPresent() && pCC) { hasJQuery(); }
}

export default injectComposing;
//# sourceMappingURL=composing-9530dd4e.js.map