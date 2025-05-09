import { mount } from 'svelte';
import OnlinePlayers from './OnlinePlayers.svelte';
import { pcc } from '../../support/layout';

export default async function injectOnlinePlayers() {
  mount(OnlinePlayers, { target: pcc()});
}
