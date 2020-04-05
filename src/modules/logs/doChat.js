import calf from '../support/calf';
import doBuffLink from './doBuffLink';
import {
  attackplayerUrl,
  doAddIgnore,
  secureUrl,
  tradeUrl,
} from '../support/constants';

function removeHTML(buffName) {
  return buffName.replace(/<\/?[^>]+(>|$)/g, '');
}

function reportIgnore(aRow, isGuildMate, playerName) { // Legacy
  let extraPart = '';
  const dateHTML = aRow.cells[1].innerHTML;
  const dateFirstPart = dateHTML
    .substring(0, dateHTML.indexOf('>Report') + 7);
  const dateLastPart = dateHTML
    .substring(dateHTML.indexOf('Message</a>') + 11, dateHTML.length);
  if (!isGuildMate) {
    extraPart = ` | <a title="Add to Ignore List" href="${doAddIgnore
    }${playerName}">Ignore</a>`;
  }
  aRow.cells[1].innerHTML = `${dateFirstPart}</a>${extraPart
  }${dateLastPart}`;
}

function makeFirstPart(messageHTML) {
  return messageHTML.substring(0, messageHTML.indexOf('<small>') + 7);
}

function makeMsgReplyTo(playerName, firstPart) {
  let replyTo = '';
  if (calf.enableChatParsing) {
    replyTo = removeHTML(firstPart.replace(/&nbsp;/g, ' ')).substr(0, 140);
  }
  return `${'[ <span style="cursor:pointer;text-'
  + 'decoration:underline"class="a-reply" target_player="'}${playerName
  }" replyTo="${replyTo}...">Reply</span>`;
}

function makeExtraPart(playerName) {
  return ` | <a href="${tradeUrl}${playerName
  }">Trade</a> | <a title="Secure Trade" href="${
    secureUrl}${playerName}">ST</a>`;
}

function getThirdPart(messageHTML) { // Legacy
  const thirdPart = messageHTML.substring(messageHTML.indexOf('>Reply</a>') + 10,
    messageHTML.indexOf('>Buff</a>') + 9);
  const targetPlayerRE = /quickBuff\((\d+)\)/.exec(thirdPart);
  if (targetPlayerRE) {
    return doBuffLink(targetPlayerRE[1], messageHTML.match(/`~.*?~`/));
  }
  return '';
}

function getAttackPart(playerName) { // Legacy
  if (calf.addAttackLinkToLog) {
    return ` | <a href="${attackplayerUrl}${playerName}">Attack</a>`;
  }
  return '';
}

function makeFourthPart(messageHTML) {
  return messageHTML.substring(messageHTML
    .indexOf('>Trade</a>') + 10, messageHTML.indexOf('</small>'));
}

function makeLastPart(messageHTML) {
  return messageHTML.substring(messageHTML.indexOf('</small>'),
    messageHTML.length);
}

function messageExtras(aRow, playerName) {
  const messageHTML = aRow.cells[2].innerHTML;
  const firstPart = makeFirstPart(messageHTML);
  aRow.cells[2].innerHTML = `${firstPart}<nobr>${
    makeMsgReplyTo(playerName, firstPart)}${makeExtraPart(playerName)
  }${getThirdPart(messageHTML)}${getAttackPart(playerName)
  }${makeFourthPart(messageHTML)}</nobr>${makeLastPart(messageHTML)}`;
}

function isChat(aRow, isGuildMate, playerName) { // Legacy
  reportIgnore(aRow, isGuildMate, playerName);
  messageExtras(aRow, playerName);
}

export default function doChat(messageType, aRow, isGuildMate, playerName) { // Legacy
  if (messageType === 'Chat') { isChat(aRow, isGuildMate, playerName); }
}
