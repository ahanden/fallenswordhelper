import { bw as containsText, S as querySelector, bD as ahSearchUrl, k as insertHtmlBeforeEnd, D as getText } from './calfSystem-1499e8da.js';
import { x as xPath } from './xPath-70fd9acb.js';

function isNotBound() {
  return !xPath('.//*[text() = "This item is bound"]');
}

function isNotComponent() {
  return !containsText('Component',
    xPath('.//tr[td/b/text() = "Type:"]/td[2]'));
}

function ahItemHref(name) {
  return `https://www.fallensword.com/${ahSearchUrl}${name}`;
}

function insertAhLink(target) {
  insertHtmlBeforeEnd(target.parentNode, ` [<a href="${
    ahItemHref(getText(target))
  }" target="_blank"><b class="fshBlue">AH</b></a>]`);
}

function itemsView() {
  if (isNotBound() && isNotComponent()) {
    insertAhLink(querySelector('.tHeader').children[0]);
  }
}

export default itemsView;
//# sourceMappingURL=itemsView-9221fa63.js.map