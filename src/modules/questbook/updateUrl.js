import closestTable from '../common/closestTable';
import dontPost from '../common/dontPost';

export default function updateUrl(evt) {
  if (evt.target.type !== 'submit') {
    return;
  }
  evt.preventDefault();
  dontPost(closestTable(evt.target).parentNode);
}