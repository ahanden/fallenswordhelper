import backpack from '../ajax/backpack';
import equipItem from '../ajax/equipItem';
import errorDialog from '../app/errorDialog';
import partial from '../common/partial';
import recallItem from '../ajax/recallItem';
import takeItem from '../ajax/takeItem';
import useItem from '../ajax/useItem';

var deferred = window.jQuery && jQuery.when();

function itemStatus(data) {return data;}

function doAction(fn, item, data) {
  return fn(item).pipe(partial(itemStatus, data));
}

function additionalAction(action, data) {
  if (action === 'wear') {
    return doAction(equipItem, data.b, data);
    // Return takeitem status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, data.b, data);
    // Return takeitem status irrespective of the status of the useitem
  }
}

function takeItemStatus(action, data) {
  if (data.r === 0 && action !== 'take') {
    return additionalAction(action, data);
  }
  return data;
}

export function queueTakeItem(invId, action) {
  // You have to chain them because they could be modifying the backpack
  deferred = deferred.pipe(function pipeTakeToQueue() {
    return takeItem(invId).pipe(partial(takeItemStatus, action));
  });
  return deferred;
}

function gotBackpack(o, data, bpData) {
  // TODO assuming backpack is successful...
  var lastBackpackItem = bpData.items[bpData.items.length - 1].a;
  if (o.action === 'wear') {
    return doAction(equipItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the equipitem
  }
  if (o.action === 'use') {
    return doAction(useItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the useitem
  }
}

function recallItemStatus(o, data) {
  if (data.r === 0 && o.action !== 'recall') {
    return backpack().pipe(partial(gotBackpack, o, data));
  }
  return data;
}

function pipeRecallToQueue(o) {
  return recallItem(o.invId, o.playerId, o.mode).pipe(errorDialog)
    .pipe(partial(recallItemStatus, o));
}

export function queueRecallItem(o) {
  // You have to chain them because they could be modifying the backpack
  deferred = deferred.pipe(partial(pipeRecallToQueue, o));
  return deferred;
}