import './viewCreature.postcss';
import calf from '../../../support/calf';
import {createDiv} from '../../../common/cElement';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import {def_viewCreature} from '../../../support/constants';
import evalAnalysis from './evalAnalysis';
import evalArmour from './evalArmour';
import evalAttack from './evalAttack';
import evalCA from './evalCa';
import evalDamage from './evalDamage';
import evalDefence from './evalDefence';
import evalExtraBuffs from './evalExtraBuffs';
import evalHTML from './evalHtml';
import {getElementById} from '../../../common/getElement';
import groupsViewStats from '../../../app/guild/groups/viewStats';
import insertElement from '../../../common/insertElement';
import {isArray} from '../../../common/isArray';
import makeDoNotKillLink from './makeDoNotKillLink';
import myStats from '../../../ajax/myStats';
import partial from '../../../common/partial';
import playerDataObject from '../../../common/playerDataObject';
import playerName from '../../../common/playerName';

var dialogViewCreature;
var combatEvalContainer;
var combatEvaluator;
var groupEvaluator;

function getDialogViewCreature() {
  if (!dialogViewCreature) {
    dialogViewCreature = getElementById('dialog-viewcreature');
  }
}

function getCombatEvalContainer() {
  if (!combatEvalContainer) {
    combatEvalContainer = createDiv();
    insertElement(dialogViewCreature, combatEvalContainer);
    insertElement(dialogViewCreature, createDiv({
      innerHTML: '<span class="fshFooter">' +
        '*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, ' +
        'Sanctuary, Constitution, Fortitude, Chi Strike and ' +
        'Terrorize (if active) and allow for randomness (1.1053). ' +
        'Constitution, NMV, Fortitude and Chi Strike apply to group ' +
        'stats.</span>'
    }));
  }
}

function getCombatEvaluator() {
  if (!combatEvaluator) {
    getCombatEvalContainer();
    combatEvaluator = createDiv();
    insertElement(combatEvalContainer, combatEvaluator);
  }
}

function getGroupEvaluator() {
  if (!groupEvaluator) {
    getCombatEvaluator();
    groupEvaluator = createDiv();
    insertElement(combatEvalContainer, groupEvaluator);
  }
}

function setCombatEvaluator(html) {
  getCombatEvaluator();
  combatEvaluator.innerHTML = html;
}

function setGroupEvalalutor(html) {
  getGroupEvaluator();
  groupEvaluator.innerHTML = html;
}

function superElite(ses, obj, type) {
  // reduce stats if critter is a SE and player has SES cast on them.
  if (type === 3) {
    obj.attack -= Math.ceil(obj.attack * ses);
    obj.defense -= Math.ceil(obj.defense * ses);
    obj.armor -= Math.ceil(obj.armor * ses);
    obj.damage -= Math.ceil(obj.damage * ses);
    obj.hp -= Math.ceil(obj.hp * ses);
  }
}

function creatureData(creature, ses) {
  var obj = {
    name: creature.name,
    'class': creature.creature_class,
    attack: Number(creature.attack),
    defense: Number(creature.defense),
    armor: Number(creature.armor),
    damage: Number(creature.damage),
    hp: Number(creature.hp)
  };
  superElite(ses, obj, creature.type);
  return obj;
}

function biasVars(combat) {
  combat.combatEvaluatorBias = calf.combatEvaluatorBias;
  combat.attackVariable = 1.1053;
  combat.generalVariable = calf.generalVariable;
  combat.hpVariable = calf.hpVariable;
}

function buffProcessing(combat) {
  evalExtraBuffs(combat);
  evalAttack(combat);
  evalDamage(combat);
  evalDefence(combat);
  evalArmour(combat);
  evalAnalysis(combat);
  evalCA(combat);
}

function doCombatEval(data, playerJson, groupData) {
  var combat = {};
  combat.callback = groupData;
  // playerdata
  combat.player = playerDataObject(playerJson);
  biasVars(combat);
  combat.creature = creatureData(data.response.data,
    combat.player.superEliteSlayerMultiplier);
  buffProcessing(combat);
  combat.evaluatorHTML = evalHTML(combat);
  if (groupData.groupExists) {
    setGroupEvalalutor(combat.evaluatorHTML);
  } else {
    setCombatEvaluator(combat.evaluatorHTML);
  }
}

function myGroup(el) {
  return el.members[0].name === playerName();
}

function getGroupId(json) {
  if (isArray(json.r)) {
    return json.r.find(myGroup).id;
  }
}

function processGroupStats(data, playerJson, groupJson) {
  if (!groupJson.r || !groupJson.r.attributes) {return;}
  var attr = groupJson.r.attributes;
  doCombatEval(data, playerJson, {
    groupExists: true,
    groupAttackValue: attr[0].value,
    groupDefenseValue: attr[1].value,
    groupArmorValue: attr[2].value,
    groupDamageValue: attr[3].value,
    groupHPValue: attr[4].value
  });
}

function getGroupStats(data, playerJson, groupId) {
  if (groupId) {
    groupsViewStats(groupId).then(partial(processGroupStats, data, playerJson));
  }
}

function processGroup(data, playerJson) {
  daViewGroups().then(getGroupId)
    .then(partial(getGroupStats, data, playerJson));
}

function processPlayer(data, playerJson) {
  if (data.player.hasGroup) {processGroup(data, playerJson);}
  doCombatEval(data, playerJson, {groupExists: false});
}

function isValidData(data) {
  return data.response && data.response.data;
}

function processCreature(e, data) {
  getDialogViewCreature();
  if (!dialogViewCreature) {return;}
  setCombatEvaluator('');
  setGroupEvalalutor('');
  if (isValidData(data)) {
    makeDoNotKillLink(data.response.data.name, dialogViewCreature);
    myStats(true).then(partial(processPlayer, data));
  }
}

export default function viewCreature() {
  $.subscribe(def_viewCreature, processCreature);
}
