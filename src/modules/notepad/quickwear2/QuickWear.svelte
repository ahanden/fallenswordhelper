<script>
  import daEquipItem from '../../_dataAccess/daEquipItem';
  import daUseItem from '../../_dataAccess/daUseItem';
  import backpack from '../../ajaxQueue/backpack';
  import sendEvent from '../../analytics/sendEvent';
  import alpha from '../../common/alpha';
  import FolderButtons from '../../common/FolderButtons.svelte';
  import fromEntries from '../../common/fromEntries';
  import isArray from '../../common/isArray';
  import ItemImg from '../../common/ItemImg.svelte';
  import LinkBtn from '../../common/LinkBtn.svelte';
  import VirtualList from '../../common/VirtualList.svelte';
  import confirm from '../../modal/confirm.svelte';
  import calf from '../../support/calf';
  import invStore from './invStore';

  const prompt = 'Are you sure you want to use/extract the item?';
  let appInv = {};
  let folders = $state({});
  let items = $state([]);

  const byName = (a, b) => alpha(a.n, b.n);
  const byFolder = (folderId) => (item) =>
    folderId === -2 || item.f === folderId;
  const goodData = (inv) => isArray(inv.folders) && isArray(inv.items);
  const main = ({ a }) => a !== -1;
  const names = ({ a, n }) => [a, n];

  async function init() {
    appInv = await backpack();
    if (!goodData(appInv)) throw new Error('Bad backpack data');
    invStore.set(appInv);
    folders = fromEntries(appInv.folders.filter(main).map(names));
    items = appInv.items.sort(byName);
  }

  function doFilter(FolderId) {
    sendEvent('QuickWear', 'doFilter');
    const selectedFolder = Number(FolderId);
    items = appInv.items.filter(byFolder(selectedFolder)).sort(byName);
  }

  async function doAction(a, prop, fn, verb) {
    sendEvent('QuickWear', `doAction - ${verb}`);
    const i = items.findIndex((el) => el.a === a);
    items[i][prop] = 1;
    const json = await fn(a);
    if (json.s) items[i].used = verb;
  }

  function doWear(a) {
    doAction(a, 'equip', daEquipItem, 'Worn');
  }

  async function doUse(a) {
    const canProceed = calf.disableQuickWearPrompts || (await confirm(prompt));
    if (canProceed) {
      doAction(a, 'use', daUseItem, 'Used');
    }
  }
</script>

<div class="wrapper">
  {#await init() then}
    <div class="folderButtons">
      <FolderButtons {doFilter} {folders} />
    </div>
    <div class="headGrid">
      <div class="headOne">Actions</div>
      <div>Items</div>
    </div>
    <div class="vs">
      <VirtualList {items}>
        {#snippet children({ item })}
          <div class="grid">
            <div class="actionButtons">
              {#if item.used}
                <span class="itemUsed">{item.used}</span>
              {:else}
                <span class="equippable">
                  {#if item.equip}
                    <span class="fshSpinner fshSpin12"></span>
                  {:else}
                    <LinkBtn disabled={!item.eq} onclick={() => doWear(item.a)}>
                      Wear
                    </LinkBtn>
                  {/if}
                </span>
                |
                <span class="usable">
                  {#if item.use}
                    <span class="fshSpinner fshSpin12"></span>
                  {:else}
                    <LinkBtn
                      disabled={item.eq || !(item.u && !item.c)}
                      onclick={() => doUse(item.a)}
                    >
                      Use/Ext
                    </LinkBtn>
                  {/if}
                </span>
              {/if}
            </div>
            <div>
              <ItemImg {item} small="1" t="0" />
            </div>
            <div>
              {item.n}
            </div>
          </div>
        {/snippet}
      </VirtualList>
    </div>
  {/await}
</div>

<style>
  .wrapper {
    width: 552px;
  }
  .vs {
    height: calc(100vh - 220px);
  }
  .folderButtons {
    --button-color: #383838;
    --button-margin: auto 3px;
    --button-size: 1em;
    padding-bottom: 0.5em;
    text-align: center;
  }
  .headGrid {
    background-color: #cd9e4b;
    display: grid;
    grid-template-columns: 120px 400px;
  }
  .headOne {
    text-align: center;
  }
  .grid {
    align-items: center;
    display: grid;
    grid-template-columns: 120px 60px 340px;
    height: 30px;
  }
  .actionButtons {
    --button-size: x-small;
    text-align: center;
  }
  .itemUsed {
    color: green;
    font-weight: bold;
  }
  .equippable,
  .usable {
    display: inline-block;
    position: relative;
  }
  .equippable {
    width: 25px;
  }
  .usable {
    width: 36px;
  }
</style>
