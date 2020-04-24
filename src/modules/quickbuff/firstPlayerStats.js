import clickThis from '../common/clickThis';
import getElementById from '../common/getElement';
import getElementsByTagName from '../common/getElementsByTagName';

let retries = 0;

function waitForPlayer(firstPlayer) {
  return !firstPlayer && retries < 9;
}

function haveTargets() {
  const firstPlayer = getElementsByTagName('h1', getElementById('players'))[0];
  if (waitForPlayer(firstPlayer)) {
    retries += 1;
    setTimeout(haveTargets, 100);
    return;
  }
  if (!firstPlayer) { return; }
  clickThis(firstPlayer);
}

export default function firstPlayerStats() {
  const targets = getElementById('targetPlayers').value;
  if (targets) { haveTargets(); }
}
