import { S as querySelector, o as onclick, bp as arenaUrl, D as getText, P as insertElementBefore, $ as insertHtmlAfterEnd, u as partial, U as insertElementAfter } from './calfSystem-1499e8da.js';
import { d as dontPost } from './dontPost-f6e0d9ec.js';
import { c as createInput } from './createInput-130831c0.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-f93c7a1f.js';
import { u as updateUrl } from './updateUrl-c7cb7382.js';

function updateGoUrl(e) {
  e.preventDefault();
  dontPost(querySelector('#pCC input[value="completed"]').parentNode);
}

function intercept(val, fn) {
  onclick(querySelector(`#pCC input[value="${val}"]`), fn);
}

function gotoPage(pageId) {
  window.location = `${arenaUrl}completed&page=${pageId}`;
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function injectStartButton() {
  const prevButton = querySelector('#pCC input[value="<"]');
  if (prevButton) {
    const startButton = createInput({ type: 'button', value: '<<' });
    insertElementBefore(startButton, prevButton);
    insertHtmlAfterEnd(startButton, '&nbsp;');
    onclick(startButton, partial(gotoPage, 1));
  }
}

function gotoLastPage() { gotoPage(lastPage()); }

function injectFinishButton() {
  const nextButton = querySelector('#pCC input[value=">"]');
  if (nextButton) {
    const finishButton = createInput({ type: 'button', value: '>>' });
    insertElementAfter(finishButton, nextButton);
    insertHtmlBeforeBegin(finishButton, '&nbsp;');
    onclick(finishButton, gotoLastPage);
  }
}

function completedArenas() {
  injectStartButton();
  injectFinishButton();
  intercept('View', updateUrl);
  intercept('Go', updateGoUrl);
}

export default completedArenas;
//# sourceMappingURL=completedArenas-18c78b19.js.map