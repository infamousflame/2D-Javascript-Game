function renderColor(ctx, polarity){
  if(!polarity){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "black";
  }else{
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "white";
  }

}
