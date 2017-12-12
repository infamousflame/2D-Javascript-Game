function renderColor(ctx, color){
  if(color == "white"){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "black";
  }else{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "white";
  }
}

function renderPlatforms(ctx){
  for(var i = 0; i < platforms.length; i++){
    if(platforms[i].color == "white"){
      ctx.strokeStyle = "white";
    }else{
      ctx.strokeStyle = "black";
    }
    ctx.beginPath();
    ctx.lineWidth="1";
    ctx.rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
    ctx.stroke();
  }
}
