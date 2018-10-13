import add from '../../support/task';
import getMembrList from '../../ajax/getMembrList';
import getValue from '../../system/getValue';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import moreToDo from '../../common/moreToDo';
import on from '../../common/on';
import {pCC} from '../../support/layout';
import playerName from '../../common/playerName';
import rankPosition from '../../app/guild/ranks/position';
import weightings from './weightings';

var ranks;
var myRank;
var theRows;
var rankCount;
var characterRow;

function notValidRow(thisRankRowNum, targetRowNum, parentTable) {
  return characterRow >= Math.min(thisRankRowNum, targetRowNum) ||
    targetRowNum < 1 ||
    targetRowNum > parentTable.rows.length;
}

function getTargetRowNumber(val) {
  if (val === 'Up') {return -1;}
  return 2;
}

function getPxScroll(val) {
  if (val === 'Up') {return -22;}
  return 22;
}

function overrideUpDown(evt, val) {
  var thisRankRow = evt.target.parentNode.parentNode.parentNode;
  var thisRankRowNum = thisRankRow.rowIndex;
  var targetRowNum = thisRankRowNum + getTargetRowNumber(val);
  var parentTable = thisRankRow.parentNode;
  if (notValidRow(thisRankRowNum, targetRowNum, parentTable)) {return;}
  var matchRankId = evt.target.getAttribute('onclick').match(/rank_id=(\d+)/);
  rankPosition(val.toLowerCase(), matchRankId[1]);
  var injectRow = parentTable.rows[targetRowNum];
  parentTable.insertBefore(thisRankRow, injectRow);
  var pxScroll = getPxScroll(val);
  window.scrollBy(0, pxScroll);
  evt.stopPropagation();
}

function ajaxifyRankControls(evt) {
  var val = evt.target.value;
  if (['Up', 'Down'].includes(val)) {overrideUpDown(evt, val);}
}

function doButtons() {
  weightings();
  if (getValue('ajaxifyRankControls')) {
    on(pCC, 'click', ajaxifyRankControls, true);
  }
}

function isMyRank(rankName) {
  if (rankName === myRank) {
    characterRow = rankCount; // limit for ajaxify later
  }
}

function hasMembers(rankCell, rankName) {
  if (ranks[rankName]) { // has members
    isMyRank(rankName);
    insertHtmlBeforeEnd(rankCell, ' <span class="fshBlue">- ' +
      ranks[rankName].join(', ') + '</span>');
  }
}

function getRankName(rankCell) {
  if (rankCount === 1) {return 'Guild Founder';}
  return rankCell.textContent;
}

function writeMembers(el) {
  var rankCell = el.firstElementChild;
  var rankName = getRankName(rankCell);
  hasMembers(rankCell, rankName);
}

function paintRanks() {
  var limit = performance.now() + 10;
  while (moreToDo(limit, rankCount, theRows)) {
    var el = theRows[rankCount];

    writeMembers(el);

    rankCount += 1;
  }
  if (rankCount < theRows.length) {
    add(3, paintRanks);
  }
}

function findTheRows() {
  var outerTable = pCC.lastElementChild.previousElementSibling;
  if (outerTable.rows && outerTable.rows.length > 7) {
    return outerTable.rows[7].firstElementChild.firstElementChild.rows;
  }
}

function getRanks(membrList) {
  ranks = Object.keys(membrList).reduce(function(prev, curr) {
    if (curr !== 'lastUpdate') {
      var rankName = membrList[curr].rank_name;
      prev[rankName] = prev[rankName] || [];
      prev[rankName].push(curr);
    }
    return prev;
  }, {});
  myRank = membrList[playerName()].rank_name;
  theRows = findTheRows();
  if (theRows) {
    rankCount = 1;
    add(3, paintRanks);
  }
}

export default function injectGuildRanks() { // jQuery.min
  if (jQueryNotPresent()) {return;}
  getMembrList(true).done(function(membrList) {
    add(3, getRanks, [membrList]);
  });
  add(3, doButtons);
}
