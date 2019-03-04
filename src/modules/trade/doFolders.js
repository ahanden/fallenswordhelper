import add from '../support/task';
import {def_table} from '../support/constants';
import fallback from '../system/fallback';
import getArrayByTagName from '../common/getArrayByTagName';
import {getElementById} from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';
import getInventoryById from '../ajax/getInventoryById';
import hideElement from '../common/hideElement';
import insertElement from '../common/insertElement';
import insertElementBefore from '../common/insertElementBefore';
import insertHtmlBeforeBegin from '../common/insertHtmlBeforeBegin';
import jQueryNotPresent from '../common/jQueryNotPresent';
import on from '../common/on';
import partial from '../common/partial';
import {createDiv, createTr} from '../common/cElement';
//#if _BETA  //  Timing output
import {time, timeEnd} from '../support/debug';
//#endif

var invItems;

function getItemDiv() {
  var itemDiv = getElementById('item-div');
  if (!itemDiv) {
    itemDiv = createDiv({id: 'item-div', className: 'itemDiv'});
    var itemList = getElementById('item-list');
    var oldItems = getElementsByTagName(def_table, itemList);
    while (oldItems.length) {
      oldItems[0].classList.add('fshBlock');
      insertElement(itemDiv, oldItems[0]);
    }
    insertElementBefore(itemDiv, itemList);
  }
  return itemDiv;
}

function shouldShow(hidden, all, hasFolder) {
  return hidden && fallback(all, hasFolder);
}

function shouldHide(hidden, all, hasFolder) {
  return !hidden && !all && !hasFolder;
}

function hideFolderItem(folderid, el) {
  el.children[0].lastElementChild.children[0].children[0].checked = false;
  var hidden = el.classList.contains('fshHide');
  var all = folderid === 'folderid0';
  var hasFolder = el.classList.contains(folderid);
  if (shouldShow(hidden, all, hasFolder)) {
    el.classList.remove('fshHide');
    el.classList.add('fshBlock'); // show()
  }
  if (shouldHide(hidden, all, hasFolder)) {
    el.classList.remove('fshBlock');
    hideElement(el); // hide()
  }
}

function doHideFolder(evt) {
  var items = getArrayByTagName(def_table, getItemDiv());
  items.forEach(partial(hideFolderItem, evt.target.id));
}

function hideFolder(evt) {
  if (evt.target.nodeName === 'SPAN' &&
      evt.target.id.indexOf('folderid') !== -1) {doHideFolder(evt);}
}

function folderSpan(pair) {
  return ' &ensp;<span id="folderid' + pair[0] +
    '" class="fshLink fshNoWrap" fid=' + pair[0] + '>' +
    pair[1] + '</span> ';
}

function doFolderHeaders(folders) {
  var foldersRow = createTr({
    id: 'fshFolderSelect',
    innerHTML: '<td colspan=6>' +
      '<span id="folderid0" class="fshLink" fid=0>All</span>' +
      ' &ensp;<span id="folderid-1" class="fshLink" fid="-1">Main</span>' +
      Object.entries(folders).map(folderSpan).join('')
  });
  on(foldersRow, 'click', hideFolder);
  var el = getElementById('item-list').parentNode.parentNode;
  insertHtmlBeforeBegin(el, '<tr id="fshShowSTs">' +
    '<td align="center" colspan=6>' +
    '<label><input type="checkbox" id="itemsInSt" checked> ' +
    'Select items in ST</label></td></tr>');
  insertElementBefore(foldersRow, el);
}

function stColor(el, item) {
  if (item.is_in_st) {
    el.classList.add('isInST');
  }
}

function forEachInvItem(el) {
  var checkbox = el.children[0].lastElementChild.children[0].children[0];
  var item = invItems[checkbox.getAttribute('value')];
  if (item) {
    el.classList.add('folderid' + item.folder_id);
    if (invItems.fshHasST) {stColor(el, item);}
    checkbox.classList.add('itemid' + item.item_id);
    checkbox.classList.add('itemtype' + item.type);
  }
}

function processTrade(data) {
  //#if _BETA  //  Timing output

  time('trade.processTrade');

  //#endif
  invItems = data.items;
  // Highlight items in ST
  var nodeList = getArrayByTagName(def_table, getElementById('item-list'));
  nodeList.forEach(forEachInvItem); // TODO unnecessary DOM manipulation
  doFolderHeaders(data.folders);
  //#if _BETA  //  Timing output

  timeEnd('trade.processTrade');

  //#endif
}

function gotInventory(data) {
  add(3, processTrade, [data]);
}

export default function doFolders() { // jQuery.min
  if (jQueryNotPresent()) {return;}
  getInventoryById().then(gotInventory);
}
