import partial from '../../common/partial';

let invItems;
let itemId;

function guildTagged(o, el) {
  // eslint-disable-next-line no-param-reassign
  el.checked = !el.disabled && invItems[o.invid].guild_tag !== -1;
}

function tickElement(o, el) {
  // eslint-disable-next-line no-param-reassign
  el.checked = !el.disabled && !el.checked;
}

function allOfType(o, el) {
  if (invItems[o.invid] && invItems[o.invid].item_id === itemId) {
    tickElement(o, el);
  }
}

const types = [
  ['guild', guildTagged],
  ['item', allOfType],
  ['checkAll', tickElement],
];

function thisType(type, test) { return test[0] === type; }

function doCheck(how, o) {
  if (!o.injectHere) { return; }
  const tr = o.injectHere.parentNode;
  if (tr.classList.contains('fshHide')) { return; }
  const el = o.el.parentNode.parentNode.previousElementSibling.children[0];
  how(o, el);
}

export default function doCheckboxes(itemsAry, invItems_, type_, itemId_) {
  invItems = invItems_;
  const how = types.find(partial(thisType, type_))[1];
  itemId = Number(itemId_);
  itemsAry.forEach(partial(doCheck, how));
}
