import { z as getElementById, C as getText } from './calfSystem-2bd62864.js';

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
//# sourceMappingURL=playerName-5ee9cf5c.js.map