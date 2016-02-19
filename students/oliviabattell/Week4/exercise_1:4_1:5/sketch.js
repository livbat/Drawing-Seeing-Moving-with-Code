var mouse;
var center;

function setup() {
  createCanvas(640,360);
}


function draw() {
  background(255);
  var mouse = new createVector(mouseX,mouseY); //location of mouse
  var center = new createVector(width/2,height/2); //center of window
  
  //vector subtraction
  mouse.sub(center);
  //multiply vector, .5 makes it half its original size
  mouse.mult(2);
  
  
  var m = mouse.mag();
fill(0);
rect(0,0,m,10);
  
  
  //draw line to rep vector
  translate(width/2,height/2);
  line(0,0,mouse.x,mouse.y);
}