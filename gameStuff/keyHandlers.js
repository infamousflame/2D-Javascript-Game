function keyDown(event){
  switch(event.key){
    case "ArrowRight":
      direction.right = true;
      break;
    case "ArrowLeft":
      direction.left = true;
      break;
    case "d":
      direction.right = true;
      break;
    case "a":
      direction.left = true;
      break;
    case " ":
      direction.jump = !direction.jump;
      character.grounded = false;
      break;
    case "j":
      world.inverse();
      break;
  }
}

function keyUp(event){
  switch(event.key){
    case "ArrowRight":
      direction.right = false;
      break;
    case "ArrowLeft":
      direction.left = false;
      break;
    case "d":
      direction.right = false;
      break;
    case "a":
      direction.left = false;
      break;
  }
}

window.addEventListener("keydown", keyDown, false);
window.addEventListener("keyup", keyUp, false);
