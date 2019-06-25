import ajaxReturnCode from '../app/ajaxReturnCode';
import daStoreItems from '../_dataAccess/daStoreItems';
import errorDialog from '../app/errorDialog';

export default function storeItems(invIdAry) {
  return daStoreItems(invIdAry).then(errorDialog).then(ajaxReturnCode);
}
