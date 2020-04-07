import getElementById from '../../common/getElement';
import querySelectorAll from '../../common/querySelectorAll';

export default function adjustHeight(theNav, myNav) {
  // first the closed saved variables
  // eslint-disable-next-line no-param-reassign
  myNav.heights = [
    null,
    null,
    // Character
    getElementById('nav-character').nextElementSibling.children
      .length * 22,
    660,
    // Guild
    querySelectorAll('#nav-guild > ul li').length * 22,
    374,
    132,
    132,
    null,
  ];
  if (Number(myNav.state) !== -1) {
    // and now the open one
  // eslint-disable-next-line no-param-reassign
    theNav.children[myNav.state].children[1].style.height = `${myNav.heights[myNav.state]}px`;
  }
}
