import off from './off';
import on from './on';
import once from './once';
import partial from './partial';

var dragTarget;
var mouseX;
var mouseY;
var offsetX;
var offsetY;
var timer;

function setDragTarget(parent, event) {
  if (parent) {
    dragTarget = parent;
  } else {
    dragTarget = event.target;
  }
}

function setMouseCoord(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function getTransformXY(trans) {
  if (trans === 'none') {return [0, 0];}
  var matrix = trans.match(/(\d+), (\d+), (\d+), (\d+), (-?\d+), (-?\d+)/);
  return [Number(matrix[5]), Number(matrix[6])];
}

function setOffsets() {
  var style = window.getComputedStyle(dragTarget, null);
  var transformXY = getTransformXY(style.transform);
  offsetX = transformXY[0] - mouseX;
  offsetY = transformXY[1] - mouseY;
}

function drawElement(event) {
  if (event.clientX !== mouseX || event.clientY !== mouseY) {
    dragTarget.style.transform =
      'matrix(1, 0, 0, 1, ' + (event.clientX + offsetX).toString() +
      ', ' + (event.clientY + offsetY).toString() + ')';
    setMouseCoord(event);
  }
}

function checkInterval(event) {
  var now = performance.now();
  if (now - timer > 16) {
    drawElement(event);
    timer = now;
  }
}

function dragOver(event) {
  checkInterval(event);
  event.preventDefault();
  return false;
}

function dragDrop(event) {
  drawElement(event);
  off(document.body, 'dragover', dragOver);
  event.preventDefault();
  return false;
}

function setDragImage(event) {
  var img = new Image();
  img.src =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
  event.dataTransfer.setDragImage(img, 0, 0);
}

function dragStart(parent, event) {
  setDragTarget(parent, event);
  setDragImage(event);
  setMouseCoord(event);
  setOffsets();
  timer = 0;
  event.dataTransfer.setData('text/plain', '');
  on(document.body, 'dragover', dragOver);
  once(document.body, 'drop', dragDrop);
}

export default function draggable(element, parent) {
  element.draggable = true;
  on(element, 'dragstart', partial(dragStart, parent));
}
