var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width;
var height;
var direction = {};
var offset = 2;
var isGravity = true;

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
  ctx.fillStyle = "white";
  ctx.fillRect(ground.x, ground.y, ground.width, ground.height);
  ctx.fillRect(character.x, character.y, character.width, character.height);
}

function update(progress) {
  keyHandle(direction, progress);
  gravity(8, isGravity);
  checkGrounding();
}


function loop(timestamp) {
  var progress = (timestamp - lastRender);
  update(progress);
  draw();
  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

function keyHandle(key, progress){
  if(direction.right){
    character.x += progress / offset;
  }
  if(direction.left){
    character.x -= progress / offset;
  }
}

var lastRender = 0;
window.requestAnimationFrame(loop);
