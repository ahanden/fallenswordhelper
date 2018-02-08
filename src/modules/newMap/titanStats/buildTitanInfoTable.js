import {addRows} from './common';
import insertElement from '../../common/insertElement';
import insertTextBeforeEnd from '../../common/insertTextBeforeEnd';
import {
  cooldownText,
  currentHp,
  currentPct,
  guildKills,
  maxHp,
  statusText,
  totalPct
} from './titanStats';
import {createSpan, createTable, textSpan} from '../../common/cElement';

function makeTitanHpWrapper() {
  var titanHpWrapper = createSpan();
  insertElement(titanHpWrapper, currentHp);
  insertTextBeforeEnd(titanHpWrapper, '/');
  insertElement(titanHpWrapper, maxHp);
  return titanHpWrapper;
}

function makePctWrapper(pct) {
  var pctWrapper = createSpan();
  insertElement(pctWrapper, pct);
  insertTextBeforeEnd(pctWrapper, '%');
  return pctWrapper;
}

export default function buildTitanInfoTable() {
  var titanTbl = createTable({className: 'fshCenter'});
  addRows(titanTbl, [
    [[[2, textSpan('Titan HP'), true], [4, textSpan('Your Guild'), true]]],
    [[[2, makeTitanHpWrapper()], [4, guildKills]]],
    [[[2, textSpan('Current'), true], [4, makePctWrapper(currentPct)]], true],
    [[[2, textSpan('Total'), true], [4, makePctWrapper(totalPct)]], true],
    [[[2, textSpan('Status'), true], [4, statusText]], true],
    [[[6, cooldownText]]],
    [[[2, textSpan('Member'), true], [2, textSpan('Kills'), true],
      [2, textSpan('% of Total'), true]]]
  ]);
  return titanTbl;
}