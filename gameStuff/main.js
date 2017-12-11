var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width;
var height;
var offset = 2;

var resize = function() {
  width = window.innerWidth * 2;
  height = window.innerHeight * 2;
  canvas.width = width;
  canvas.height = height;
}

window.onresize = resize;
resize();

function draw() {
  ctx.clearRect(0, 0, width, height);
}

function update(progress) {

}

function loop(timestamp) {
  var progress = (timestamp - lastRender);
  update(progress);
  draw();
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

var lastRender = 0;
window.requestAnimationFrame(loop);
