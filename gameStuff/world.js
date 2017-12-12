function gravity(intensity, polarity){
  if(!character.grounded){
    if(polarity){
      character.y -= intensity;
    }else{
      character.y += intensity;
    }
  }
}

var world = {
  color:true,
  inverse: function(){
    world.color = !world.color;
  }
}

var ceiling = {
  x: 0,
  y: canvas.height * .2,
  width: canvas.width,
  height:1
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
