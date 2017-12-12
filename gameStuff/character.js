var character = {
  x: canvas.width / 2,
  y: canvas.width / 3,
  width: 200,
  height: 300
}

function checkGrounding(){
  if(!direction.jump){
    if(intersects(character, ground)){
      character.grounded = true;
    }else{
      character.grounded = false;
    }
  }else{
    if(intersects(character, ceiling)){
      character.grounded = true;
    }else{
      character.grounded = false;
    }
  }
}
