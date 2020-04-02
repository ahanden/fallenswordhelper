import errorDialog from '../common/errorDialog';
import fetchdata from '../ajax/fetchdata';
import {getElementById} from '../common/getElement';
import getValue from '../system/getValue';
import hideQTip from '../common/hideQTip';
import jConfirm from '../common/jConfirm';
import onclick from '../common/onclick';
import partial from '../common/partial';
import {sendEvent} from '../support/fshGa';

let disableDeactivatePrompts;
const success = json => json && json.response && json.response.response === 0;
const removeskill = buffId => fetchdata({a: 22, id: buffId});

function debuffSuccess(aLink, json) {
  if (success(json)) {aLink.parentNode.innerHTML = '';}
}

function doDebuff(aLink) { // jQuery.min
  sendEvent('profile', 'doDebuff');
  var buffId = aLink.href.match(/(\d+)$/)[1];
  removeskill(buffId).then(errorDialog).then(partial(debuffSuccess, aLink));
}

function doPrompt(aLink) {
  var hcsOnclick = aLink.getAttribute('onclick');
  var warn = hcsOnclick
    .match(/Are you sure you wish to remove the .* skill\?/)[0];
  jConfirm('Remove Skill', warn, partial(doDebuff, aLink));
}

function checkForPrompt(aLink) {
  if (!disableDeactivatePrompts) {
    doPrompt(aLink);
  } else {
    doDebuff(aLink);
  }
}

function interceptDebuff(e) {
  var aLink = e.target;
  if (aLink.tagName === 'IMG') {
    hideQTip(e.target);
    aLink = aLink.parentNode;
  } else if (aLink.tagName !== 'A') {return;}
  e.stopPropagation();
  e.preventDefault();
  checkForPrompt(aLink);
}

export default function fastDebuff() {
  var profileRightColumn = getElementById('profileRightColumn');
  if (profileRightColumn) {
    disableDeactivatePrompts = getValue('disableDeactivatePrompts');
    onclick(profileRightColumn.lastElementChild, interceptDebuff, true);
  }
}
