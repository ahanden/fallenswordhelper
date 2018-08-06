import {createAnchor} from '../common/cElement';
import getValue from '../system/getValue';
import {guideUrl} from '../support/constants';
import insertElement from '../common/insertElement';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import {pCC} from '../support/layout';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import setValue from '../system/setValue';

function containsNewsHead(el) {
  return el.classList.contains('news_head') ||
    el.classList.contains('news_head_tavern');
}

function closestHead(el) {
  if (containsNewsHead(el)) {
    return el;
  }
  if (el.classList.contains('news_left_column')) {return;}
  return closestHead(el.parentNode);
}

function getNewsClass(newsHead) {
  if (newsHead.classList.contains('news_head_tavern')) {
    return '.news_body_tavern';
  }
  return '.news_body';
}

function gotNewsHead(evt, newsHead) { // jQuery
  var newsBody = newsHead.nextElementSibling;
  var newsClass = getNewsClass(newsHead);
  if (!$(newsBody).data('open')) {
    evt.preventDefault();
    $(newsClass).hide().data('open', false);
    $(newsBody).show().data('open', true);
  } else if (evt.target.tagName !== 'A') {
    $(newsBody).hide().data('open', false);
  }
  evt.stopPropagation();
}

function newsEvt(evt) {
  var newsHead = closestHead(evt.target);
  if (newsHead) {gotNewsHead(evt, newsHead);}
}

function fixCollapse() {
  var newsCol = document.getElementsByClassName('news_left_column');
  if (jQueryNotPresent() || newsCol.length !== 1) {return;}
  newsCol[0].addEventListener('click', newsEvt, true);
}

function lookForPvPLadder() {
  var lastLadderReset = getValue('lastLadderReset');
  var rumours = pCC.getElementsByClassName('news_head_tavern');
  Array.prototype.forEach.call(rumours, function(head) {
    if (head.children[1].textContent === 'PvP Ladder') {
      var logTime = parseDateAsTimestamp(head.children[2].textContent);
      if (logTime > lastLadderReset) {
        setValue('lastLadderReset', logTime);
        lastLadderReset = logTime;
      }
    }
  });
}

function addUfsgLinks() {
  var imgs = document.querySelectorAll(
    '.news_body img[src^="https://cdn.fallensword.com/creatures/"]');
  Array.prototype.forEach.call(imgs, function(img) {
    var myName = encodeURIComponent(img.getAttribute('oldtitle'));
    var myLink = createAnchor({
      href: guideUrl + 'creatures&search_name=' + myName,
      target: '_blank'
    });
    img.parentNode.insertBefore(myLink, img);
    insertElement(myLink, img);
  });
}

export default function injectHomePageTwoLink() { // Pref
  var archiveLink = document.querySelector(
    '#pCC a[href="index.php?cmd=&subcmd=viewupdatearchive"]');
  if (!archiveLink) {return;}
  insertHtmlAfterEnd(archiveLink, '&nbsp;<a href="index.php?cmd=' +
    '&subcmd=viewupdatearchive&subcmd2=&page=2&search_text=">' +
    'View Updates Page 2</a>');
  archiveLink = document.querySelector(
    '#pCC a[href="index.php?cmd=&subcmd=viewarchive"]');
  insertHtmlAfterEnd(archiveLink, '&nbsp;<a href="index.php?cmd=' +
    '&subcmd=viewarchive&subcmd2=&page=2&search_text=">View News Page 2</a>');
  fixCollapse(); // Pref
  lookForPvPLadder(); // Pref
  addUfsgLinks(); // Pref
}