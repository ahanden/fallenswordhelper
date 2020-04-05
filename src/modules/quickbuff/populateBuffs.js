import { getElementById } from '../common/getElement';
import outputFormat from '../system/outputFormat';
import querySelector from '../common/querySelector';

function buffTimeLeft(_s) {
  const m = Math.floor(_s / 60);
  const s = _s % 60;
  let buffTimeToExpire = outputFormat(m, 'm');
  if (m > 0 && s > 0) { buffTimeToExpire += ' '; }
  buffTimeToExpire += outputFormat(s, 's');
  return buffTimeToExpire;
}

function timeToExpire(s) {
  const buffTimeToExpire = buffTimeLeft(s);
  return `<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${
    buffTimeToExpire})</span>`;
}

function isAvailable(buff) {
  const elem = querySelector(`#buff-outer input[data-name="${buff}"]`);
  if (elem) {
    return `<span class="quickbuffActivate" data-buffid="${elem.value
    }">Activate</span>`;
  }
  return '<span class="fshRed;">Off</span>';
}

function buffRunning(dict, buff) {
  const s = dict[buff] || 0;
  if (s) { return timeToExpire(s); }
  return isAvailable(buff);
}

function getBuff(dict, buff, inject) {
  inject.innerHTML = buffRunning(dict, buff);
}

function makeDictionary(prev, curr) {
  prev[curr.name] = curr.duration;
  return prev;
}

export default function populateBuffs(responseText) {
  const skl = responseText._skills.reduce(makeDictionary, {});
  getBuff(skl, 'Guild Buffer', getElementById('fshGB'));
  getBuff(skl, 'Buff Master', getElementById('fshBM'));
  getBuff(skl, 'Extend', getElementById('fshExt'));
  getBuff(skl, 'Reinforce', getElementById('fshRI'));
}
