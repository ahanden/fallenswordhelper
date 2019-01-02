import basicBounty from './basicBounty';
import extend from '../../common/extend';
import {getElementById} from '../../common/getElement';
import getValue from '../../system/getValue';
import getValueJSON from '../../system/getValueJSON';
import {nowSecs} from '../../support/constants';
import setValue from '../../system/setValue';

export var bountyList;
export var wantedList;
export var activeBountyListPosted;
var bountyListRefreshTime;
export var bwNeedsRefresh;
var wantedNames;
export var wantedArray;
export var bountyUrl = 'index.php?no_mobile=1&cmd=bounty&page=';

function hasActiveBounties(activeTable) {
  return !/No bounties active/.test(activeTable.rows[1].cells[0].innerHTML);
}

function bountyData(theCells) {
  return extend(basicBounty(theCells), {progress: theCells[5].textContent});
}

function getAllBounties(activeTable) {
  for (var i = 1; i < activeTable.rows.length - 2; i += 2) {
    var theCells = activeTable.rows[i].cells;
    var thisBounty = bountyData(theCells);
    bountyList.bounty.push(thisBounty);
  }
}

function parseActiveBounty(activeTable) { // Legacy
  if (hasActiveBounties(activeTable)) {
    getAllBounties(activeTable);
  }
}

export function getActiveBountyList(doc) { // Legacy
  var bountyInfo = getElementById('bounty-info', doc);
  if (!bountyInfo) {return;}
  var activeTable = bountyInfo.parentNode.parentNode
    .previousElementSibling.children[0].children[0];
  bountyList = {};
  bountyList.bounty = [];
  bountyList.isRefreshed = true;
  bountyList.lastUpdate = nowSecs;
  if (activeTable) {parseActiveBounty(activeTable);}
  activeBountyListPosted = true;
}

function testBountyList() {
  return bountyList &&
    nowSecs - bountyList.lastUpdate > bountyListRefreshTime;
}

function testWantedList() {
  return wantedList &&
    nowSecs - wantedList.lastUpdate > bountyListRefreshTime;
}

function testCacheInvalid() {
  return testBountyList() || testWantedList();
}

export function invalidateCache() {
  bountyList = getValueJSON('bountyList');
  wantedList = getValueJSON('wantedList');
  bountyListRefreshTime = getValue('bountyListRefreshTime');
  bwNeedsRefresh = getValue('bwNeedsRefresh');
  if (bwNeedsRefresh) {return;}
  if (testCacheInvalid()) {
    bwNeedsRefresh = true; // invalidate cache
  }
}

export function doRefresh() {
  wantedList = {};
  wantedList.bounty = [];
  wantedList.isRefreshed = true;
  wantedList.lastUpdate = nowSecs;
  activeBountyListPosted = false;
  wantedNames = getValue('wantedNames');
  wantedArray = wantedNames.split(/\s*,\s*/);
  setValue('bwNeedsRefresh', false);
}