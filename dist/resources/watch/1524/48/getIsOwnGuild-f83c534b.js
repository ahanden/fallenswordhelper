import { c as currentGuildId } from './currentGuildId-df5d894a.js';
import { E as querySelector, aY as guildViewUrl, bG as guildRE } from './calfSystem-2bd62864.js';

let haveGuildALink;
let guildALink;

function getGuildALink() {
  if (!haveGuildALink) {
    guildALink = querySelector(`#pCC a[href^="${guildViewUrl}"]`);
    haveGuildALink = true;
  }
  return guildALink;
}

let haveIsOwnGuild;
let isOwnGuild;

function findGuildId() {
  const guildALink = getGuildALink();
  if (guildALink) {
    const matches = guildRE.exec(guildALink.href);
    if (matches) { return Number(matches[1]); }
  }
}

function getIsOwnGuild() {
  if (!haveIsOwnGuild) {
    isOwnGuild = findGuildId() === currentGuildId();
    haveIsOwnGuild = true;
  }
  return isOwnGuild;
}

export { getIsOwnGuild as a, getGuildALink as g };
//# sourceMappingURL=getIsOwnGuild-f83c534b.js.map