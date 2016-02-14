var bubbles = [];

function setup() {
    createCanvas(480, 270);
    stroke(0);
    fill(0,0,255);  
    for(var i = 0; i<100; i++){ //fill our array with new Bubble objects
      bubbles[i]= new Bubble(random(width),random(height));
    }
}

function draw() {
    background(255,0,0);
    for(var i = 0; i<bubbles.length; i++){
      bubbles[i].display(); //call the function display from the bubble OBJECT
      bubbles[i].move(); // call the function move from the bubble object.
      println(bubbles.length);
    }
}


function mousePressed(){
  bubbles.push(new Bubbles(mouseX,mouseY))
}

var Bubble = function(dx, dy){  //You can also put arguments in here to pass into the object
  //here we use the 'this' keyword to establish the objects variables.
  this.x= dx;
  this.y= dy;

//the functions are written with a similar syntax to before, but with the 'this'...
  this.display =function(){
    stroke(255);
    strokeWeight(2);
    ellipse(this.x,this.y,20,20); //this.variable name is used...
  }

  //here is another function
  this.move=function(){
    this.x=this.x + random(-1,1);
    this.y=this.y + random(-1,1);
  }
}