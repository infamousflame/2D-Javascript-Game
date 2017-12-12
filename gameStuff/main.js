var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var direction = {jump:false};
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
  renderColor(ctx, world.color);
  ctx.fillRect(ground.x, ground.y, ground.width, ground.height);
  ctx.fillRect(ceiling.x, ceiling.y, ceiling.width, ceiling.height);
  renderPlatforms(ctx);
  ctx.fillRect(character.x, character.y, character.width, character.height);
}

function update(progress) {
  keyHandle(direction, progress);
  gravity(12, direction.jump);
  allCollisionDetection();
}

function loop(timestamp) {
  var progress = (timestamp - lastRender);

  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

function keyHandle(key, progress){
  if(direction.right && !direction.leftCollide){
    character.x += progress / offset;
  }
  if(direction.left && !direction.rightCollide){
    character.x -= progress / offset;
  }
}

var lastRender = 0;
window.requestAnimationFrame(loop);
