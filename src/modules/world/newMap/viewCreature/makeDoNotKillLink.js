import afterUpdateActionList from '../doNotKill/afterUpdateActionList';
import calf from '../../../support/calf';
import getElementsByClassName from '../../../common/getElementsByClassName';
import insertElement from '../../../common/insertElement';
import isOnList from '../doNotKill/isOnList';
import onclick from '../../../common/onclick';
import setText from '../../../common/setText';
import setValue from '../../../system/setValue';
import {createButton, createDiv} from '../../../common/cElement';

var creatureBody;
var dnkName;
var doNotKillBtn;

function getCreatureBody(dialogViewCreature) {
  if (!creatureBody) {
    var bodyCollection = getElementsByClassName('body', dialogViewCreature);
    if (bodyCollection.length === 1) {
      creatureBody = bodyCollection[0];
    }
  }
}

function doNotKillText() {
  if (isOnList(dnkName)) {
    return 'Remove from do not kill list';
  }
  return 'Add to the do not kill list';
}

function updateText() {
  setText(doNotKillText(), doNotKillBtn);
}

function addRemoveCreature() {
  var index = calf.doNotKillList.indexOf(dnkName);
  if (index === -1) {
    calf.doNotKillList.push(dnkName);
  } else {
    calf.doNotKillList.splice(index, 1);
  }
  updateText();
  setValue('doNotKillList', calf.doNotKillList.join());
  afterUpdateActionList(); // refresh the action list
}

function makeDnkBtn() {
  doNotKillBtn = createButton({
    className: 'fshBl',
    textContent: doNotKillText(),
    type: 'button'
  });
  var btnContainer = createDiv({
    className: 'description',
    innerHTML: '<span class="ui-helper-hidden-accessible">' +
      '<input type="text"></span>'
  });
  insertElement(btnContainer, doNotKillBtn);
  insertElement(creatureBody, btnContainer);
  onclick(doNotKillBtn, addRemoveCreature);
}

function doNotKillLink() {
  if (!doNotKillBtn) {
    makeDnkBtn();
  } else {
    updateText();
  }
}

export default function makeDoNotKillLink(thisName, dialogViewCreature) {
  getCreatureBody(dialogViewCreature);
  if (creatureBody) {
    dnkName = thisName.trim();
    doNotKillLink();
  }
}
