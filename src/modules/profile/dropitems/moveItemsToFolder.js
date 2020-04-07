import chunk from '../../common/chunk';
import { daSendToFolder } from '../../_dataAccess/_dataAccess';
import getElementById from '../../common/getElement';
import isArray from '../../common/isArray';
import partial from '../../common/partial';

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

export default function moveItemsToFolder(itemsAry) { // jQuery.min
  const folderId = getElementById('selectFolderId').value;
  chunk(30, itemsAry.filter(checked).map(invid))
    .forEach(partial(moveList, itemsAry, folderId));
}
