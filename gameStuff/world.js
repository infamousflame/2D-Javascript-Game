function gravity(intensity, toggle){
  if(!character.grounded && toggle){
    character.y += intensity;
  }
}

var ground = {
  x: 0,
  y: canvas.height * .9,
  width: canvas.width,
  height:1
}

function intersects(rect1, rect2){
  if (rect1.x < rect2.x + rect2.width &&
     rect1.x + rect1.width > rect2.x &&
     rect1.y < rect2.y + rect2.height &&
     rect1.height + rect1.y > rect2.y){
       return true;
    }else{
      return false;
    }
}
