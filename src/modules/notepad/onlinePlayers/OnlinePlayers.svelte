<script>
import onlinePlayersPage from '../../ajax/onlinePlayersPage';
import createDocument from '../../system/createDocument';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';

let query = false;

async function parseOnlinePlayerPage(pageNumber) {
  const pageData = await onlinePlayersPage(pageNumber);
  const playerTable = querySelector(
    '#pCC img',
    createDocument(pageData),
  ).closest('table');
  return querySelectorArray('tr', playerTable)
    .filter((tr) => tr.querySelector('img'))
    .map((tr) => {
      return {
        guildId: querySelector('img', tr).src.match(/\/(\d+)_mini.png$/)[1],
        playerName: querySelector('td:nth-child(2)', tr).innerText,
        playerId: querySelector('td:nth-child(2) a', tr).href.match(/\d+$/),
        level: querySelector('td:nth-child(3)', tr).innerText,
      };
    });
}

async function serialiseRequests(prev, pageNumber) {
  const prevData = await prev;
  const data = await parseOnlinePlayerPage(pageNumber);
  if (prevData) {
    return prevData.concat(data);
  }
  return data;
}

let onlinePlayerList = 0;

function getOnlinePlayers() {
  return Array.from(Array(2).keys())
    .reduce(serialiseRequests, Promise.resolve())
    .then((result) => { onlinePlayerList = result });
}

let onlinePlayerPromise = getOnlinePlayers();


</script>

<strong>Online Players</strong>
<input type="button" value="Refresh">
<div id="online-player-list">
  {#await onlinePlayerPromise}
  {:then}
  <input type="text" bind:value={query}>
  <table class="list">
    {#each onlinePlayerList as player (player.playerId)}
      {#if !query || player.playerName.match(query)}
      <tr>
        <td>
          <a href="https://www.fallensword.com/index.php?cmd=guild&subcmd=view&guild_id={player.guildId}">
            <img src="https://cdn2.fallensword.com/guilds/{player.guildId}_mini.png" width=16 height=16>
          </a>
        </td>
        <td>
          <a href="https://www.fallensword.com/index.php?cmd=profile&player_id={player.playerId}">
            {player.playerName}
          </a>
        </td>
        <td>{player.level}</td>
      </tr>
      {/if}
    {/each}
  </table>
  {/await}
</div>
