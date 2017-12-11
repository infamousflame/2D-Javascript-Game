var character = {
  x: 200,
  y: 1400,
  width: 200,
  height: 300
}

function checkGrounding(){
  if(intersects(character, ground)){
    character.grounded = true;
  }else{
    character.grounded = false;
  }
}

function jump(intensity){
  
}
