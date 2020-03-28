import {createAnchor} from '../common/cElement';
import {getElementById} from '../common/getElement';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import onclick from '../common/onclick';
import {
  blacksmithUrl,
  cmdUrl,
  def_subcmd,
  dropItemsUrl,
  pointsUrl,
  profileUrl
} from '../support/constants';

function preventHcs(evt) {
  evt.stopPropagation();
}

function statbarWrapper(href, id) {
  var character = getElementById(id);
  if (!character) {return;}
  var myWrapper = createAnchor({href});
  var statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, preventHcs, true);
}

export default function statbar() {
  statbarWrapper(profileUrl, 'statbar-character');
  statbarWrapper(pointsUrl + def_subcmd + 'reserve', 'statbar-stamina');
  statbarWrapper(blacksmithUrl, 'statbar-equipment');
  statbarWrapper(dropItemsUrl, 'statbar-inventory');
  statbarWrapper(pointsUrl, 'statbar-fsp');
  statbarWrapper(cmdUrl + 'bank', 'statbar-gold');
}
