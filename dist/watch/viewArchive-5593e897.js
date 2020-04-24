import { G as getValue, g as getElementsByTagName, p as pCC, b as defTable, bw as containsText, bs as parseDateAsTimestamp, D as getText, a1 as setValue, $ as insertHtmlAfterEnd } from './calfSystem-69cf053a.js';
import './isChecked-1646059c.js';
import { s as simpleCheckbox } from './simpleCheckbox-7fdf911a.js';
import { c as collapse } from './collapse-e6009938.js';

const ladderResetPref = 'lastLadderReset';
let lastLadderReset;

function checkForPvPLadder(row) {
  if (containsText('PvP Ladder', row.children[1].children[0])) {
    const logTime = parseDateAsTimestamp(
      getText(row.children[1].children[2]).replace('Posted: ', ''),
    );
    if (logTime > lastLadderReset) {
      setValue(ladderResetPref, logTime);
      lastLadderReset = logTime;
    }
  }
}

function testArticle(rowType) { return rowType > 1; }

function setupPref(prefName, rowInjector) {
  insertHtmlAfterEnd(rowInjector, simpleCheckbox(prefName));
}

function viewArchive() {
  lastLadderReset = getValue(ladderResetPref);
  const prefName = 'collapseNewsArchive';
  const theTables = getElementsByTagName(defTable, pCC);
  if (theTables.length > 2) {
    setupPref(prefName, theTables[0].rows[2]);
    collapse({
      prefName,
      theTable: theTables[2],
      headInd: 7,
      articleTest: testArticle,
      extraFn: checkForPvPLadder,
    });
  }
}

export default viewArchive;
//# sourceMappingURL=viewArchive-5593e897.js.map
