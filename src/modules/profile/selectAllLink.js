import clickThis from '../common/clickThis';
import {createSpan} from '../common/cElement';
import {dropItemsUrl} from '../support/constants';
import {getElementById} from '../common/getElement';
import getElementsByClassName from '../common/getElementsByClassName';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';

function profileSelectAll() {
  var bpTabs = getElementById('backpack_tabs');
  var type = getElementsByClassName('tab-selected', bpTabs)[0]
    .getAttribute('data-type');
  var items = querySelectorArray('#backpackTab_' + type +
    ' li:not(.hcsPaginate_hidden) .backpackItem');
  if (items.length === 0) {return;}
  var checkboxes = querySelectorArray('#backpackTab_' + type +
    ' li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)');
  if (checkboxes.length > 0) {items = checkboxes;}
  items.forEach(clickThis);
}

export default function selectAllLink() {
  // select all link
  var node = querySelector('#profileRightColumn a[href="' +
    dropItemsUrl + '"]');
  if (!node) {return;}
  var allSpan = createSpan({className: 'smallLink', textContent: 'All'});
  onclick(allSpan, profileSelectAll);
  var wrapper = createSpan({innerHTML: '[&nbsp;'});
  insertElement(wrapper, allSpan);
  insertHtmlBeforeEnd(wrapper, '&nbsp;]&nbsp;');
  insertElement(node.parentNode, wrapper);
}
