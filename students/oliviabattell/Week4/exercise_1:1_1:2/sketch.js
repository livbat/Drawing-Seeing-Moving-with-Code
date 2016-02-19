// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-2: Bouncing Ball, with p5.Vector!
var position;
var velocity;

function setup() {
  createCanvas(640,360);
  background(255);
  position = createVector(100,100);
  velocity = createVector(2.5,5);
};

function draw() {
  background(0,0,0,7);
  
  // Add the current speed to the position.
  position.add(velocity);

  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }

  // Display circle at x position
  noStroke();
  fill(50,200,180);
  ellipse(position.x, position.y, 48, 48);
};
