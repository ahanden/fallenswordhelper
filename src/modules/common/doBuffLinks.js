import fallback from '../system/fallback';
import openQuickBuffByName from './openQuickBuffByName';
import {places} from '../support/dataObj';
import {createButton, createLi, createUl} from './cElement';

export default function doBuffLinks(members) {
  // quick buff only supports 16
  var shortList = members.reduce(function(prev, curr, i) {
    var slot = Math.floor(i / 16);
    prev[slot] = fallback(prev[slot], []);
    prev[slot].push(curr);
    return prev;
  }, []).reduce(function(prev, curr, i) {
    var theNames = curr.join(',');
    var modifierWord = places[i];
    var li = createLi();
    var btn = createButton({
      className: 'fshBl fshBls tip-static',
      dataset: {tipped: 'Quick buff functionality from HCS only does 16'},
      textContent: 'Buff ' + modifierWord + ' 16'
    });
    btn.addEventListener('click',
      openQuickBuffByName.bind(null, theNames));
    li.appendChild(btn);
    prev.appendChild(li);
    return prev;
  }, createUl());
  return shortList;
}
