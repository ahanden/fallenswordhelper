import { n as numberIsNaN } from './numberIsNaN-484c0124.js';
import { s as partial } from './calfSystem-78c09adf.js';

const playerLvlTest = [
  (level, min) => !min,
  (level, min, max) => !max,
  (level, min, max) => numberIsNaN(min) && numberIsNaN(max),
  (level, min, max) => numberIsNaN(min) && level <= max,
  (level, min, max) => min <= level && numberIsNaN(max),
  (level, min, max) => min <= level && level <= max,
];

function condition(level, min, max, fn) { return fn(level, min, max); }

function lvlTest(ary, level, min, max) {
  return ary.some(partial(condition, level, min, max));
}

export { lvlTest as l, playerLvlTest as p };
//# sourceMappingURL=lvlTests-5a9bbb7c.js.map