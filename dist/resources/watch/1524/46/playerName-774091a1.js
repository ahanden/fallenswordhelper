import { z as getElementById, C as getText } from './calfSystem-86663d02.js';

let thisPlayerName;

function playerName() {
  if (!thisPlayerName) {
    const statBarCharacter = getElementById('statbar-character');
    if (statBarCharacter) {
      thisPlayerName = getText(statBarCharacter);
    }
  }
  return thisPlayerName;
}

export { playerName as p };
//# sourceMappingURL=playerName-774091a1.js.map
