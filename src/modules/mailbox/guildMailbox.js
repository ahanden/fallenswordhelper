import clickThis from '../common/clickThis';
import {closestTable} from '../common/closest';
import dialog from '../ajax/dialog';
import getArrayByTagName from '../common/getArrayByTagName';
import infoBoxFrom from '../common/InfoBoxFrom';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import {pCC} from '../support/layout';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import retryAjax from '../ajax/retryAjax';

function translateReturnInfo(data) {
  var info = infoBoxFrom(data);
  var _r = {r: 1, m: info};
  if (info === 'Item was transferred to the guild store!') {
    _r = {r: 0, m: ''};
  }
  return _r;
}

function guildMailboxTake(href) {
  return retryAjax(href).then(translateReturnInfo).then(dialog);
}

function takeResult(target, data) {
  if (data.r === 0) {
    closestTable(target).nextElementSibling.rows[0].cells[0].innerHTML =
      '<span class="fshGreen">Taken</span>';
  }
}

function guildMailboxEvent(e) { // jQuery.min
  var target = e.target;
  if (target.tagName === 'IMG') {
    e.preventDefault();
    var anchor = target.parentNode.href;
    guildMailboxTake(anchor).then(partial(takeResult, target));
  }
  if (target.className === 'sendLink') {
    getArrayByTagName('img', pCC).forEach(clickThis);
  }
}

export default function guildMailbox() {
  if (jQueryNotPresent()) {return;}
  onclick(pCC, guildMailboxEvent);
  insertHtmlBeforeEnd(querySelector('#pCC td[height="25"]'),
    '<span class="sendLink">Take All</span>');
}
