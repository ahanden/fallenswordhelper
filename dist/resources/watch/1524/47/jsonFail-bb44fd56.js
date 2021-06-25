import { f as insertHtmlBeforeEnd } from './calfSystem-7a121553.js';

function outputResult(result, handle) {
  insertHtmlBeforeEnd(handle,
    `<li class="fshNbrList">${result}</li>`);
}

let lastMsg;

function notSeenErrorMessage(json) {
  return !json.s && lastMsg !== json.e.message;
}

function jsonFail(json, handle) {
  if (!json) { return true; }
  if (notSeenErrorMessage(json)) {
    lastMsg = json.e.message;
    outputResult(json.e.message, handle);
  }
  if (!json.s) { return true; }
}

export { jsonFail as j, outputResult as o };
//# sourceMappingURL=jsonFail-bb44fd56.js.map
