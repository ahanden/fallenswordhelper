import { g as getInventory } from './getInventory-127cfa98.js';

function toObject(acc, curr) {
  if (curr.is_in_st) { acc.fshHasST = true; }
  acc[curr.inv_id] = curr;
  return acc;
}

function rekeyInventory(data) {
  return {
    items: data.items.reduce(toObject, {}),
    folders: data.folders,
  };
}

function getInventoryById() {
  return getInventory().then(rekeyInventory);
}

export { getInventoryById as g };
//# sourceMappingURL=getInventoryById-3858f29d.js.map
