import { c as createInput } from './createInput-6dd456d3.js';
import { c as createLabel } from './createLabel-418a6404.js';
import { y as getElementById, k as on, s as partial, X as sendEvent } from './calfSystem-d1de1997.js';
import { i as insertElementBefore } from './insertElementBefore-9e5d02cd.js';

var css = ".fshCompressor {\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  position: relative;\n}\n\n.fshCompressor > label {\n  position: absolute;\n  top: 100%;\n}\n\n.fshCompressor > input {\n  display: none;\n}\n\n.fshCompressor > label:after {\n  content: \"More ...\";\n}\n\n.fshCompressor > input:checked + label:after {\n  content: \"Less ...\";\n}\n\n.fshCompressor > input ~ div {\n  height: 10em;\n  overflow: hidden;\n}\n\n.fshCompressor > input:checked ~ div {\n  height: 100%;\n}\n";
var modules_09ddb631 = {};

function injectToggle(bioCell) {
  const toggle = insertElementBefore(
    createInput({ id: 'fshCompressToggle', type: 'checkbox' }),
    bioCell,
  );
  on(toggle, 'change', partial(sendEvent, 'bio', 'toggle'));
}

function doCompression(bioCell) {
  bioCell.parentNode.classList.add('fshCompressor');
  injectToggle(bioCell);
  insertElementBefore(
    createLabel({ className: 'sendLink', htmlFor: 'fshCompressToggle' }),
    bioCell,
  );
}

function getFontSize(bioCell) {
  const computedStyle = getComputedStyle(bioCell);
  return parseInt(computedStyle.getPropertyValue('font-size'), 10);
}

function compressBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  if (bioCell.clientHeight / getFontSize(bioCell) > 10) {
    doCompression(bioCell);
  }
}

export default compressBio;
//# sourceMappingURL=compressBio-afa6eb7a.js.map