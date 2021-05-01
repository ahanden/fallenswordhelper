import { c as createStyle } from './createStyle-20851baf.js';
import { d as dataRows } from './dataRows-14d51aab.js';
import { d as doBuffLink, a as doBuffLinkClick } from './doBuffLinkClick-f2a9cc4e.js';
import { I as getValue, E as querySelector, H as getTextTrim, G as playerLinkSelector, e as entries, s as partial, i as insertElement, o as onclick, X as setValue } from './calfSystem-6b7d7ae6.js';
import { p as parseDateAsTimestamp } from './parseDateAsTimestamp-ec66e701.js';

let nowUtc;
let lastCheckUtc;

function findChatTable(logScreen) {
  // if (logScreen === 'Chat') {
  if (['Chat', 'Leader'].includes(logScreen)) {
    return querySelector('#pCC table table table table');
  }
  return querySelector('#pCC > table:last-of-type');
}

function isOldRow(postAgeMins, postDateUtc) {
  return postAgeMins > 20 && postDateUtc <= lastCheckUtc;
}

function getLastCheck(lastCheckScreen) {
  return getValue(lastCheckScreen) || nowUtc;
}

function typeMap(dateColumn, aRow) {
  let rowType = 'old';
  const postDateUtc = parseDateAsTimestamp(getTextTrim(aRow.cells[dateColumn]));
  const postAgeMins = (nowUtc - postDateUtc) / (1000 * 60);
  if (!isOldRow(postAgeMins, postDateUtc)) {
    if (postDateUtc > lastCheckUtc) {
      rowType = 'new';
    } else {
      rowType = 'seen';
    }
  }
  return [aRow, rowType];
}

function doBuffLinks(logScreen, rowTags) {
  if (logScreen === 'Chat') {
    rowTags.filter(([, rowType]) => rowType !== 'old')
      .map(([aRow]) => querySelector(playerLinkSelector, aRow))
      .forEach(doBuffLink);
  }
}

function byType(acc, [aRow, rowType]) {
  const rowNumber = aRow.rowIndex + 1;
  if (acc[rowType]) {
    acc[rowType] = {
      min: Math.min(acc[rowType].min, rowNumber),
      max: Math.max(acc[rowType].min, rowNumber),
    };
  } else {
    acc[rowType] = { min: rowNumber, max: rowNumber };
  }
  return acc;
}

function toStyle(spacing, [rowType, { min, max }]) {
  return `.fshLogColoring tr:nth-of-type(${spacing}n+${min}):nth-of-type(-${
    spacing}n+${max}) {background-color: ${
    rowType === 'old' ? '#CD9E4B' : '#F5F298'};}`;
}

function makeRowStyle(logScreen, rowTags) {
  const spacing = logScreen === 'Chat' ? 4 : 2;
  return entries(rowTags.filter(([, rowType]) => rowType !== 'seen')
    .reduce(byType, {}))
    .map(partial(toStyle, spacing));
}

function processRows(logScreen, dateColumn, chatTable, cols) {
  const rowTags = dataRows(chatTable.rows, cols, 0).map(partial(typeMap, dateColumn));
  doBuffLinks(logScreen, rowTags);
  const rowStyle = makeRowStyle(logScreen, rowTags);
  if (rowStyle.length) {
    insertElement(document.body, createStyle(rowStyle.join('\n')));
  }
}

function doLogColoring(logScreen, dateColumn, chatTable, cols) {
  chatTable.classList.add('fshLogColoring');
  nowUtc = new Date().setUTCSeconds(0, 0) - 1;
  const lastCheckScreen = `last${logScreen}Check`;
  lastCheckUtc = getLastCheck(lastCheckScreen);
  processRows(logScreen, dateColumn, chatTable, cols);
  onclick(chatTable, doBuffLinkClick);
  setValue(lastCheckScreen, nowUtc);
}

function addLogColoring(logScreen, dateColumn, cols) {
  if (!getValue('enableLogColoring')) { return; }
  const chatTable = findChatTable(logScreen);
  if (chatTable) { doLogColoring(logScreen, dateColumn, chatTable, cols); }
}

export { addLogColoring as a };
//# sourceMappingURL=addLogColoring-979ca1ec.js.map
