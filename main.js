var canvas=document.getElementById('myCanvas');
var ctx=canvas.getContext('2d');

setInterval(draw, 10);

var x=canvas.width/2;
var y=canvas.height -30;
var dx=2;
var dy=-2;
 
function draw(){
  ctx.beginPath();
ctx.arc(x,y,10,0,Math.PI*2,false);
ctx.fillStyle='#0095DD'
ctx.fill();
ctx.closePath();
    x+=dx;
    y+=dy;
  
}



