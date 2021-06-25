import { C as getText, T as sendEvent, x as callApp, $ as $dataAccess, F as querySelectorArray, s as partial, X as setValue, E as querySelector, f as insertHtmlBeforeEnd, k as on, I as getValue, y as jQueryNotPresent, bK as asyncPThree } from './calfSystem-7a121553.js';
import { g as getCheckboxesArray, d as daDropItems, a as getCheckboxes, i as injectStoreItems } from './injectStoreItems-5b61d9ca.js';
import { e as element, t as text, i as insert, b as append, j as set_data, d as detach, s as space, a as attr, k as add_render_callback, m as select_option, l as listen, n as noop, o as destroy_each, r as run_all, p as createEventDispatcher, q as select_value, S as SvelteComponent, f as init, g as safe_not_equal } from './index-9713f701.js';
import { c as chunk } from './chunk-c0e724c2.js';
import { c as closestTable } from './closestTable-dbed07e2.js';
import { c as closestTr } from './closestTr-0db8644e.js';
import { m as moveItem } from './moveItem-7316c42a.js';
import { e as errorDialog } from './errorDialog-1238d963.js';
import { b as simpleCheckboxHtml } from './simpleCheckbox-4ea82834.js';
import './daAjaxSendItemsToRecipient-0a0dbbc1.js';
import './sendItems-adfefca8.js';
import './htmlResult-1deff632.js';
import './getInventoryById-ae04b078.js';
import './getInventory-b9d8aed6.js';
import './guildStore-0480f7b1.js';
import './cmdExport-3ffe3d8a.js';
import './indexAjaxJson-0d19fdb7.js';
import './doStatTotal-e96505ac.js';
import './batch-aba8846e.js';
import './closest-4542e515.js';
import './dialog-a4dfa31d.js';
import './dialogMsg-edbc265b.js';
import './isChecked-5c7617f4.js';

/* src\modules\profile\dropitems\MoveItems.svelte generated by Svelte v3.38.3 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (23:6) {#each folders as folder}
function create_each_block(ctx) {
	let option;
	let t_value = /*getFolderName*/ ctx[3](/*folder*/ ctx[7]) + "";
	let t;
	let option_value_value;

	return {
		c() {
			option = element("option");
			t = text(t_value);
			option.__value = option_value_value = /*getFolderId*/ ctx[2](/*folder*/ ctx[7]);
			option.value = option.__value;
		},
		m(target, anchor) {
			insert(target, option, anchor);
			append(option, t);
		},
		p(ctx, dirty) {
			if (dirty & /*folders*/ 1 && t_value !== (t_value = /*getFolderName*/ ctx[3](/*folder*/ ctx[7]) + "")) set_data(t, t_value);

			if (dirty & /*folders*/ 1 && option_value_value !== (option_value_value = /*getFolderId*/ ctx[2](/*folder*/ ctx[7]))) {
				option.__value = option_value_value;
				option.value = option.__value;
			}
		},
		d(detaching) {
			if (detaching) detach(option);
		}
	};
}

function create_fragment(ctx) {
	let tr;
	let td;
	let span0;
	let t1;
	let select;
	let t2;
	let span1;
	let t4;
	let button;
	let mounted;
	let dispose;
	let each_value = /*folders*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			tr = element("tr");
			td = element("td");
			span0 = element("span");
			span0.textContent = "Move selected items to:";
			t1 = space();
			select = element("select");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			span1 = element("span");
			span1.textContent = " ";
			t4 = space();
			button = element("button");
			button.textContent = "Move";
			attr(select, "class", "customselect");
			if (/*folderId*/ ctx[1] === void 0) add_render_callback(() => /*select_change_handler*/ ctx[5].call(select));
			attr(button, "class", "custombutton");
			attr(button, "type", "button");
			attr(td, "class", "fshCenter");
		},
		m(target, anchor) {
			insert(target, tr, anchor);
			append(tr, td);
			append(td, span0);
			append(td, t1);
			append(td, select);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(select, null);
			}

			select_option(select, /*folderId*/ ctx[1]);
			append(td, t2);
			append(td, span1);
			append(td, t4);
			append(td, button);

			if (!mounted) {
				dispose = [
					listen(select, "change", /*select_change_handler*/ ctx[5]),
					listen(button, "click", /*doMove*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*getFolderId, folders, getFolderName*/ 13) {
				each_value = /*folders*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(select, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*folderId, getFolderId, folders*/ 7) {
				select_option(select, /*folderId*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(tr);
			destroy_each(each_blocks, detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let { folders } = $$props;
	let folderId;
	const getFolderId = folder => folder.parentNode.href.match(/&folder_id=(-?\d+)/i)[1];
	const getFolderName = folder => getText(folder.parentNode.parentNode);

	function doMove() {
		sendEvent("dropitems", "Move to Folder");
		dispatch("move", folderId);
	}

	function select_change_handler() {
		folderId = select_value(this);
		$$invalidate(1, folderId);
		$$invalidate(2, getFolderId);
		$$invalidate(0, folders);
	}

	$$self.$$set = $$props => {
		if ("folders" in $$props) $$invalidate(0, folders = $$props.folders);
	};

	return [folders, folderId, getFolderId, getFolderName, doMove, select_change_handler];
}

class MoveItems extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { folders: 0 });
	}
}

function moveItems(folderId, itemsAry) {
  return moveItem(itemsAry, folderId).then(() => ({ r: itemsAry }));
}

function sendtofolder(folderId, itemsAry) {
  return callApp({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    folder_id: folderId,
    folderItem: itemsAry,
  });
}

function daSendToFolder(folderId, itemsAry) {
  return $dataAccess(sendtofolder, moveItems, folderId, itemsAry);
}

function getCheckedItems() {
  return querySelectorArray('[name="removeIndex[]"]:checked');
}

function removeRow(c) {
  const tr = closestTr(c);
  tr.nextElementSibling.remove();
  tr.remove();
}

async function moveList(folderId, list) {
  const json = await daSendToFolder(folderId, list.map((c) => c.value));
  if (json.s) {
    list.forEach(removeRow);
  }
}

function moveItemsToFolder(e) {
  chunk(30, getCheckedItems()).forEach(partial(moveList, e.detail));
}

function injectMoveItems() {
  const folders = querySelectorArray('#pCC img[src$="/folder.png"]');
  if (folders.length === 0) { return; }
  const flrRow = closestTr(closestTable(folders[0]));
  const app = new MoveItems({
    anchor: flrRow.nextElementSibling,
    props: { folders },
    target: flrRow.parentNode,
  });
  app.$on('move', moveItemsToFolder);
}

function check(mode) {
  getCheckboxesArray().forEach((ctx) => { ctx.checked = Boolean(mode); });
}

const prefAjaxifyDestroy = 'ajaxifyDestroy';
let ajaxifyDestroy;

const destroyChunk = (itemsAry) => {
  daDropItems(itemsAry.map((i) => i.value))
    .then(errorDialog)
    .then((json) => {
      if (!json.s) { return; }
      itemsAry.forEach(removeRow);
    });
};

const checkItems = (e) => {
  if (!e.returnValue || !ajaxifyDestroy) { return; }
  e.preventDefault();
  chunk(30, getCheckedItems()).forEach(destroyChunk);
  sendEvent('dropitems', 'Destroy by AJAX');
};

function changePref() {
  ajaxifyDestroy = !ajaxifyDestroy;
  setValue(prefAjaxifyDestroy, ajaxifyDestroy);
}

const injectPref = () => {
  const submitBtn = querySelector('input[type="submit"]');
  insertHtmlBeforeEnd(submitBtn.parentNode,
    `&nbsp;&nbsp;${simpleCheckboxHtml(prefAjaxifyDestroy)}`);
  on(submitBtn.parentNode, 'change', changePref);
};

function interceptDestroy() {
  injectPref();
  ajaxifyDestroy = getValue(prefAjaxifyDestroy);
  on(document.forms[0], 'submit', checkItems);
  window.check = check;
}

const p3Functions = [
  injectMoveItems,
  injectStoreItems,
  interceptDestroy,
];

function injectProfileDropItems() {
  if (jQueryNotPresent() || !getCheckboxes()) { return; }
  asyncPThree(p3Functions);
}

export default injectProfileDropItems;
//# sourceMappingURL=injectProfileDropItems-68277fbd.js.map
