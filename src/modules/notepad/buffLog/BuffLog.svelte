<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { fshBuffLog } from '../../support/constants';
  import { get, set } from '../../system/idb';

  let { visible = $bindable(true) } = $props();
  let records = $state([]);

  function close() {
    sendEvent('Buff Log', 'close');
    visible = false;
  }

  async function init() {
    const txt = (await get(fshBuffLog)) ?? '';
    records = txt.split('<br>').map((log) => [log.slice(0, 19), log.slice(20)]);
  }

  function clearStorage() {
    set(fshBuffLog, '');
    sendEvent('Buff Log', 'clear storage');
    records = [];
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Buff Log
  {/snippet}
  <div class="top">
    <button onclick={clearStorage} type="button">Clear</button>
  </div>
  <div class="textContainer">
    {#await init() then}
      {#each records as [timestamp, txt], x (x)}
        <br />
        {timestamp}
        {#if txt.startsWith('<')}
          <span class="fshRed">
            {txt.slice(21, -7)}
          </span>
        {:else}
          {txt}
        {/if}
      {/each}
    {/await}
  </div>
</ModalTitled>

<style>
  div {
    width: 620px;
  }
  .top {
    text-align: center;
  }
  .textContainer {
    padding-left: 4px;
  }
</style>
