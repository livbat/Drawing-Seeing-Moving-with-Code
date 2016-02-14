// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 270);
  stroke(0); 
  fill(150);
}

function draw() {
  background(255);
  rect(50,50,75,100);
}

// LITERAL OBJECT

var bubble = {
//data
	x:200,
	y:150,

//function
	display: function() {
		stroke(0,225,0);
		ellipse(this.x,this.y,20,20); // this/that reffering to x/y you defined
	}
}