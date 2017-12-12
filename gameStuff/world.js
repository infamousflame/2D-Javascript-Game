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
  colorB: false,
  inverse: function(){
    world.colorB = !world.colorB;
    if(world.colorB){
      world.color = "white";
    }else{
      world.color = "black";
    }
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

var platforms = [];

function createPlatform(x, y, width, height, color){
  platforms.push({
    x: x,
    y: y,
    width: width,
    height: height,
    color: color
  })
}

function checkPlatformCollision(){
  checkReset = false;
  for(var i = 0; i < platforms.length; i++){
    switch (intersectsSides(character, platforms[i])) {
      case "top":
        character.grounded = true;
        checkReset = true;
        break;
      case "bottom":
        character.grounded = true;
        checkReset = true;
        break;
      case "right":
        direction.rightCollide = true;
        checkReset = true;
        break;
      case "left":
        direction.leftCollide = true;
        checkReset = true;
        break;
    }
  }
  if(!checkReset){
    direction.leftCollide = false;
    direction.rightCollide = false;
  }
}

function allCollisionDetection(){
  checkGrounding();
  checkPlatformCollision();
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

function intersectsSides(r1, r2){
    var offset = 10;
    var dx=(r1.x +r1.width/2)-(r2.x  +r2.width/2);
    var dy=(r1.y+r1.height/2)-(r2.y+r2.height/2);
    var width=(r1.width+r2.width)/2;
    var height=(r1.height+r2.height)/2;
    var crossWidth=(width*dy);
    var crossHeight=height*dx;
    var collision='none';
    //
    if(Math.abs(dx)<=width && Math.abs(dy)<=height){
      if(crossWidth>crossHeight){
        collision=(crossWidth>(-crossHeight))?'bottom':'left';
      }else{
        collision=(crossWidth>-(crossHeight))?'right':'top';
      }
    }
    return(collision);
}
