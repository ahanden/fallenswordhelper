import indexAjaxDoc from '../ajax/indexAjaxDoc';
import appMercsView from '../app/guild/mercs/view';
import closestTr from '../common/closestTr';
import getTextTrim from '../common/getTextTrim';
import querySelectorArray from '../common/querySelectorArray';
import regExpFirstCapture from '../common/regExpFirstCapture';
import $dataAccess from './$dataAccess';

const mre = (atr) => new RegExp(`<td>${atr}:</td><td>(\\d+)</td>`);

function toData(i) {
  return {
    id: i.src.split('/').at(-1).split('.')[0],
    name: getTextTrim(closestTr(i).previousElementSibling),
    attributes: ['Attack', 'Defense', 'Armor', 'HP', 'Damage'].map(
      (atr, id) => ({
        id,
        value: Number(regExpFirstCapture(mre(atr), i.dataset.tipped)),
      }),
    ),
  };
}

function parseMercStats(doc) {
  if (!doc) return { s: false };
  const mercElements = querySelectorArray('#pCC img[src*="/mercs/"]', doc);
  const mercs = mercElements.map(toData);
  return { r: { mercs }, s: true };
}

// incomplete
async function mercsView() {
  return parseMercStats(await indexAjaxDoc({ cmd: 'guild', subcmd: 'mercs' }));
}

export default function daMercsView() {
  return $dataAccess(appMercsView, mercsView);
}
