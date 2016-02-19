var bubbles = [];


function setup() {
  createCanvas(800,500);
    for ( var i = 0; i < 60; i++) {
      bubbles[i] = new Bubble();
  }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}


function draw() {
  background(0,0,0,10);
  for (var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
  
  if (bubbles.length > 100) {
    bubbles.splice(0,1);
  }
}

function Bubble(x, y){
      this.x = x;
      this.y = y;
      this.display = function() {
        stroke(random(0), random (255),random(255));
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        rect(this.x, this.y, 24, 24);
        ellipse(this.x-8,this.y-18,12,12);
        ellipse(this.x+8,this.y-18,12,12);
        ellipse(this.x,this.y+2,11,14);
      },
      this.move = function () {
       this.x = this.x + random(-1,1);
       this.y = this.y + random(-1,1);
      }
    }