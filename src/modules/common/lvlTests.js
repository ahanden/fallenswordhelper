export var playerLvlTest = [
  function(level, min, max) {return isNaN(min) && isNaN(max);},
  function(level, min, max) {return isNaN(min) && level <= max;},
  function(level, min, max) {return min <= level && isNaN(max);},
  function(level, min, max) {return min <= level && level <= max;}
];

export var itemLvlTest;
itemLvlTest = [function(level) {return level === 0;}].concat(playerLvlTest);

export function lvlTest(ary, level, min, max) {
  return ary.some(function(fn) {return fn(level, min, max);});
}