var maxcharacters;
var textArea;
var shoutboxPreview;

function updateShoutboxPreview() { // Native
  var textContent = textArea.value;
  var chars = textContent.length;
  if (chars > maxcharacters) {
    textContent = textContent.substring(0, maxcharacters);
    textArea.value = textContent;
    chars = maxcharacters;
  }
  if (!shoutboxPreview) {
    shoutboxPreview = textArea.parentNode.parentNode.parentNode.parentNode
      .insertRow().insertCell();
  }
  shoutboxPreview.innerHTML = '<table class="sbpTbl"><tbody><tr>' +
    '<td class="sbpHdr">Preview (' + chars + '/' + maxcharacters +
    ' characters)</td></tr><tr><td class="sbpMsg"><span>' + textContent +
    '</span></td></tr></tbody></table>';
}

function injectShoutboxWidgets() { // Native
  textArea = document.getElementById('textInputBox');
  textArea.classList.add('fshNoResize');
  textArea.addEventListener('keyup', updateShoutboxPreview);
}

export function newsFsbox() { // Native
  maxcharacters = 100;
  injectShoutboxWidgets();
}

export function newsShoutbox() { // Native
  maxcharacters = 150;
  injectShoutboxWidgets();
}
