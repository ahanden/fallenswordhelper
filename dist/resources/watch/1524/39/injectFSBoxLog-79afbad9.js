import { c as createSpan } from './createSpan-8fa44734.js';
import { z as getElementById, j as jQueryPresent, K as getElementsByClassName, g as getElementsByTagName, C as getText, f as insertHtmlBeforeEnd, ak as doAddIgnore, Y as sendEvent, Z as jQueryDialog, bX as injectFsBoxContent, o as onclick, i as insertElement } from './calfSystem-d5c49dc8.js';
import { s as set, g as get } from './idb-83942350.js';

function getBoxList(boxList) {
  if (boxList) { return boxList; }
  return '';
}

function storeFSBox(_boxList) {
  let boxList = getBoxList(_boxList);
  const fsbox = getElementsByClassName('message',
    getElementById('minibox-fsbox'))[0].innerHTML;
  if (boxList.indexOf(fsbox) < 0) { boxList = `<br>${fsbox}${boxList}`; }
  if (boxList.length > 10000) { boxList = boxList.substring(0, 10000); }
  set('fsh_fsboxcontent', boxList);
}

function storeMsg(nodediv) {
  let playerName = getElementsByTagName('a', nodediv);
  if (playerName.length === 0) { return; }
  get('fsh_fsboxcontent').then(storeFSBox);
  playerName = getText(playerName[0]);
  insertHtmlBeforeEnd(nodediv,
    `<span class="fshPaleVioletRed">[ <a href="${doAddIgnore
    }${playerName}">Ignore</a> ]</span> `);
}

function openDialog() {
  sendEvent('injectFSBoxLog', 'injectFsBoxContent');
  jQueryDialog(injectFsBoxContent);
}

function fSBoxExists(node) {
  const nodediv = node.lastElementChild;
  insertHtmlBeforeEnd(nodediv, '<br>');
  storeMsg(nodediv);
  const log = createSpan({
    className: 'fshYellow',
    innerHTML: '[ <span class="fshLink">Log</span> ]',
  });
  onclick(log, openDialog);
  insertElement(nodediv, log);
}

function injectFSBoxLog() {
  const node = getElementById('minibox-fsbox');
  if (jQueryPresent() && node) { fSBoxExists(node); }
}

export default injectFSBoxLog;
//# sourceMappingURL=injectFSBoxLog-79afbad9.js.map
