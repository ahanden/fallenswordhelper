<script>
  import { fade } from 'svelte/transition';
  import draggable from '../../common/draggable';
  import getValue from '../../system/getValue';
  import MenuItems from './MenuItems.svelte';

  let showMenu = $state(false);

  const isFixed = getValue('keepHelperMenuOnScreen');
  const isDraggable = getValue('draggableHelperMenu');

  function maybeDraggable(node) {
    if (isDraggable) draggable(node);
  }

  function doToggle() {
    showMenu = !showMenu;
  }
</script>

<div class="helper-menu" class:helper-menu-fixed={isFixed} use:maybeDraggable>
  <button
    class:helper-menu-move={isDraggable}
    type="button"
    class="toggle"
    onclick={doToggle}
  >
    Helper Menu
  </button>
  {#if showMenu}
    <div class="modal" transition:fade={{ duration: 100 }}>
      <MenuItems {doToggle} />
    </div>
  {/if}
</div>

<style>
  .helper-menu {
    left: 0;
    position: absolute;
    top: 0;
    z-index: 40;
  }
  .helper-menu-fixed {
    position: fixed;
  }
  .toggle {
    background: none;
    border: none;
    color: yellow;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    text-decoration: underline;
    white-space: nowrap;
  }
  .helper-menu-move {
    cursor: move;
  }
  .modal {
    background-color: #e6c270;
    border: 3px solid #ccbb77;
    border-radius: 5px;
    color: black;
    cursor: default;
    font-size: 12px;
    text-align: center;
    text-decoration: none;
  }
</style>
