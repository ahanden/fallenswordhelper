import { e as insertHtmlBeforeEnd } from './calfSystem-6e4b53e3.js';

function outputResult(result, handle) {
  insertHtmlBeforeEnd(handle,
    `<li class="fshNbrList">${result}</li>`);
}

let lastMsg;

function notSeenErrorMessage(json) {
  return !json.s && lastMsg !== json.e.message;
}

function jsonFail(json, handle) {
  if (notSeenErrorMessage(json)) {
    lastMsg = json.e.message;
    outputResult(json.e.message, handle);
  }
  if (!json.s) { return true; }
}

export { jsonFail as j, outputResult as o };
//# sourceMappingURL=jsonFail-440d6463.js.map