import getElementById from '../../common/getElement';
import keyHandlerEvent from './keyHandlerEvent';
import navigateTo from '../../common/navigateTo';

export default function notWorld(type, href) {
  if (!getElementById('worldPage')) {
    keyHandlerEvent(type);
    navigateTo(href);
  }
}
