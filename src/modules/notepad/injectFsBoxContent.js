import {getElementById} from '../common/getElement';
import getMigrate from '../common/getMigrate';
import jQueryNotPresent from '../common/jQueryNotPresent';
import makePageTemplate from './lists/makePageTemplate';
import on from '../common/on';
import {pCC} from '../support/layout';
import {set} from '../system/idb';

function inject(fsboxcontent) {
  getElementById('fsboxdetail').innerHTML = fsboxcontent;
}

function clearFsBox() {
  set('fsh_fsboxcontent', '');
  location.reload();
}

export default function injectFsBoxContent(injector) { // jQuery.min
  if (jQueryNotPresent()) {return;}
  var content = injector || pCC;
  content.innerHTML = makePageTemplate({
    title: 'FS Box Log',
    comment: '',
    spanId: 'fsboxclear',
    button: 'Clear',
    divId: 'fsboxdetail'
  });
  getMigrate('fsh_fsboxcontent').then(inject);
  on(getElementById('fsboxclear'), 'click', clearFsBox, true);
}
