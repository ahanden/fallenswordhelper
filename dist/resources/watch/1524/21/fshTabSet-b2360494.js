import { i as insertElement, P as once, s as partial, b as createDiv, A as setInnerHtml } from './calfSystem-b0234231.js';
import { c as createInput } from './createInput-d7fbb3f3.js';
import { c as createLabel } from './createLabel-285e2971.js';
import { c as createUl } from './createUl-853d289f.js';
import { p as publish } from './pubsub-93f6159e.js';
import { c as createLi } from './createLi-c684d2a4.js';

var undefined$1 = undefined;

const toggleId = (groupName, i) => groupName + String(i);

function makeRadio(groupName, e, i) {
  return createInput({
    checked: i === 0,
    id: toggleId(groupName, i),
    name: groupName,
    type: 'radio',
  });
}

function makeListItem(groupName, thisDivs, e, i) {
  const thisLi = createLi({ className: 'ui-state-default ui-corner-top' });
  insertElement(thisLi, createLabel({
    htmlFor: toggleId(groupName, i),
    innerHTML: e,
  }));
  if (i !== 0) {
    once(thisLi, 'click', () => {
      publish(toggleId(groupName, i), thisDivs[i]);
    });
  }
  return thisLi;
}

function makeUl(tabs, groupName, thisDivs) {
  const thisUl = createUl({
    className: 'ui-tabs-nav ui-helper-reset ui-helper-clearfix '
      + 'ui-widget-header ui-corner-all',
  });
  const thisItems = tabs.map(partial(makeListItem, groupName, thisDivs));
  thisItems.forEach(partial(insertElement, thisUl));
  return thisUl;
}

const makeDiv = () => createDiv({ className: 'ui-tabs-panel ui-corner-bottom' });

function fshTabSet(container, tabs, groupName) {
  const thisTabSet = createDiv({
    className: 'fshTabSet '
        + 'ui-tabs ui-widget-content ui-corner-all',
  });
  const appendToTabSet = partial(insertElement, thisTabSet);
  const thisRadios = tabs.map(partial(makeRadio, groupName));
  thisRadios.forEach(appendToTabSet);
  const thisDivs = tabs.map(makeDiv);
  publish(toggleId(groupName, 0), thisDivs[0]);
  const thisList = makeUl(tabs, groupName, thisDivs);
  publish(`${groupName}-header`, thisList);
  insertElement(thisTabSet, thisList);
  thisDivs.forEach(appendToTabSet);
  setInnerHtml('', container);
  insertElement(container, thisTabSet);
  return 0;
}

export { fshTabSet as f };
//# sourceMappingURL=fshTabSet-b2360494.js.map
