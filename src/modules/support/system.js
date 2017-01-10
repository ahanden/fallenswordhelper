import calf from './calf';
import dataObj from './dataObj';

function getValue(name) {
  return GM_getValue(name, dataObj.defaults[name]);
}

function getValueJSON(name) {
  var resultJSON = getValue(name);
  var result;
  if (resultJSON) {
    var reviver = function(key, value) {
      if (typeof value === 'string') {
        var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
        if (a) {
          return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
        }
      }
      return value;
    };
    result = JSON.parse(resultJSON, reviver);
  }
  return result;
}

function setValueJSON(name, value) {
  GM_setValue(name, JSON.stringify(value));
}

function setValue(name, value) {
  GM_setValue(name, value);
}

function findNodes(xpath, doc) {
  var nodes = [];
  if (xpath.indexOf('/') === 0) {
    xpath = '.'+xpath;
    // TODO this is likely to be bad
    // this is a chrome fix - needs a .// for xpath
    // where as firefox can function without it.
    // firefox sitll works with .//
  }

  var target;
  // We may have passed in a HTMLDocument object as the context
  // See createDocument with DOMParser below
  // This only matters in Firefox. evaluate will fail silently if 
  // the context is not part of the calling object.
  doc = doc || document;
  if (doc instanceof HTMLDocument) {
    target = doc;
  } else {
    target = document;
  }
  var findQ = target.evaluate(xpath, doc, null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  if (findQ.snapshotLength === 0) {return null;}
  for (var i = 0; i < findQ.snapshotLength; i += 1) {
    nodes.push(findQ.snapshotItem(i));
  }
  return nodes;
}

function findNode(xpath, doc) {
  var nodes = findNodes(xpath, doc);
  if (!nodes) {return null;}
  return nodes[0];
}

function createDocument(details) {
  // Use DOMParser to prevent img src tags downloading
  var parser = new DOMParser();
  var doc = parser.parseFromString(details, 'text/html');
  return doc;
}

function formatDateTime(aDate) {
  var yyyy = aDate.getFullYear();
  var mon = aDate.getMonth() + 1;
  if (mon < 10) {mon = '0' + mon;}
  var dd = aDate.getDate();
  if (dd < 10) {dd = '0' + dd;}

  var hh = aDate.getHours();
  if (hh < 10) {hh = '0' + hh;}
  var mm = aDate.getMinutes();
  if (mm < 10) {mm = '0' + mm;}
  var ss = aDate.getSeconds();
  if (ss < 10) {ss = '0' + ss;}
  return yyyy + '-' + mon + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
}

function xmlhttp(theUrl, func, theCallback) {
  return $.ajax({
    url: theUrl,
    callback: theCallback,
    success: function(responseDetails) {
      if (func) {
        func.call(this, responseDetails, this.callback);
      }
    }
  });
}

function intValue(theText) {
  if (!theText) {return 0;}
  return parseInt(theText.replace(/,/g,''), 10);
}

function getIntFromRegExp(theText, rxSearch) {
  var result;
  var matches = theText.replace(/,/g,'').match(rxSearch);
  if (matches) {
    result = parseInt(matches[1],10);
  } else {
    result = 0;
  }
  return result;
}

function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function convertTextToHtml(inputText) {
  return inputText
    .replace(/</g,'&lt')
    .replace(/>/g,'&gt')
    .replace(/\n/g,'<br>')
    .replace(/\[\/([a-z])\]/g,'<\/\$1>')
    .replace(/\[([a-z])\]/g,'<\$1>');
}

function parseDate(textDate) {
  var textDateSplitSpace = textDate.split(' ');
  var timeText = textDateSplitSpace[0];
  var dateText = textDateSplitSpace[1];
  var dayText = dateText.split('/')[0];
  var monthText = dateText.split('/')[1];
  var months = {'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December'
    };
  var fullMonthText = months[monthText];
  var yearText = dateText.split('/')[2];
  var dateAsDate = new Date(fullMonthText + ' ' + dayText + ', ' +
    yearText + ' ' + timeText + ':00');
  return dateAsDate;
}

function toggleVisibilty(evt) {
  var anItemId = evt.target.getAttribute('linkto');
  var anItem = document.getElementById(anItemId);
  var currentVisibility = anItem.classList.contains('fshHide');
  anItem.classList.toggle('fshHide');
  if (currentVisibility) {
    setValue(anItemId, '');
  } else {
    setValue(anItemId, 'ON');
  }
}

function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i+=1) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function formatLastActivity(last_login) {
  var d, h, m, s;
  s = Math.abs(Math.floor(Date.now() / 1000 - last_login));
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return (d === 0 ? '' : d + ' days, ') +
    (h === 0 ? '' : h + ' hours, ') +
    (m === 0 ? '' : m + ' mins, ') +
    s + ' secs';
}

function path(obj, path, def){
  path = path.split('.');
  var len = path.length;
  for (var i = 0; i < len; i+=1) {
    if (!obj || typeof obj !== 'object') {return def;}
    obj = obj[path[i]];
  }
  if (obj === undefined) {return def;}
  return obj;
}

function stringSort(a,b) {
  var result=0;
  a = path(a, calf.sortBy, 'a');
  b = path(b, calf.sortBy, 'a');
  if (a.toLowerCase() < b.toLowerCase()) {result = -1;}
  if (a.toLowerCase() > b.toLowerCase()) {result = 1;}
  if (!calf.sortAsc) {result = -result;}
  return result;
}

function numberSort(a,b) {
  var result=0;
  if (typeof a.type !== undefined){
    if (a.type > 8) {return 1;} //non equipment items
    if (b.type > 8) {return -1;}
  }
  var valueA = path(a, calf.sortBy, 1);
  var valueB = path(b, calf.sortBy, 1);
  if (typeof valueA === 'string') {
    valueA = parseInt(valueA.replace(/,/g,'').replace(/#/g,''),10);
  }
  if (typeof valueB === 'string') {
    valueB = parseInt(valueB.replace(/,/g,'').replace(/#/g,''),10);
  }
  result = valueA-valueB;
  if (!calf.sortAsc) {result=-result;}
  return result;
}

export default {
  getValue: getValue,
  getValueJSON: getValueJSON,
  setValueJSON: setValueJSON,
  setValue: setValue,
  findNode: findNode,
  findNodes: findNodes,
  createDocument: createDocument,
  formatDateTime: formatDateTime,
  xmlhttp: xmlhttp,
  intValue: intValue,
  getIntFromRegExp: getIntFromRegExp,
  addCommas: addCommas,
  convertTextToHtml: convertTextToHtml,
  parseDate: parseDate,
  toggleVisibilty: toggleVisibilty,
  getUrlParameter: getUrlParameter,
  formatLastActivity: formatLastActivity,
  stringSort: stringSort,
  numberSort: numberSort,
  server: document.location.protocol + '//' +
    document.location.host + '/',
  imageServer: window.HCS && window.HCS.defines &&
    window.HCS.defines.fileserver &&
    window.HCS.defines.fileserver.slice(0, -1),
};