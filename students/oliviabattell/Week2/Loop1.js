
// Global variables.

var nFramesInLoop = 10; // For lenticular export, REMEMBER this should be 10 to generate 10 frames.
var nElapsedFrames;
var bRecording;
var x = 0;
var coswave = [];

function setup() {
  createCanvas(1500, 1500);
  bRecording = true;
  nElapsedFrames = 0;
  frameRate (nFramesInLoop);
  noStroke();
}

function draw() {

  // Compute a percentage (0...1) representing where we are in the loop.
  var percentCompleteFraction = 0;
  if (bRecording) { //if recording
    percentCompleteFraction = nElapsedFrames / nFramesInLoop; //percentage through the loop
  }
  else {
    var modFrame = (frameCount % nFramesInLoop); //else if have gone through more than the first 10 frames
    percentCompleteFraction = modFrame / nFramesInLoop; //percentage = modulo / frames in loop
  }

  // Render the design, based on that percentage.
  renderMyDesign (percentCompleteFraction);
  print(percentCompleteFraction);

  // If we're recording the output, save the frame to a file.
  if (bRecording) {
    var  myName = "oliviabattell";
    saveCanvas(myName + "-loop-" + nf(nElapsedFrames));

    nElapsedFrames++;
    println(nElapsedFrames);
    if (nElapsedFrames == nFramesInLoop) {
      bRecording = false;
    }
  }




//===================================================
function keyPressed() {
  // Press a key to export frames to the output folder
  bRecording = true;
  nElapsedFrames = 0;
  println("yes!");
}


//===================================================
function renderMyDesign (percent) {
  //percent 0-whatever number
background(0, 255, 221);

   fill(0); 
   rotate(45);
      strokeWeight(13);
   stroke(255);
  var y1 = percent*-1400;
  var y2 = percent*width;

  for (var i = 0; i < 2100; i+=80)  {
    stroke(coswave[i]*255);
    line(i, y1, i, y2);
  }
   
 // fill(80);
 //  ellipse(x,100,20,20);
 // x=map(percent,0,1,0,width);
  rotate(-45);
 
 //====larger ellipses==== 
  fill(0, 64, 255, 200);
  noStroke();
  ellipse(375, 750, percent*700, percent*700);

  fill(64, 0, 255, 200);
  noStroke();
  ellipse(750, 375, percent*700, percent*700);

  fill(127, 0, 255, 200);
  noStroke();
  ellipse(1125, 750, percent*700, percent*700);

  fill(191, 0, 255, 200);
  noStroke();
  ellipse(750, 1125, percent*700, percent*700);
//===smaller ellipses======
  percent=1-percent;

  fill(153, 102, 255, 180);
  noStroke();
  ellipse(400, 400, percent*200, percent*200);

  fill(102, 102, 255, 180);
  noStroke();
  ellipse(1100, 400, percent*200, percent*200);

  fill(217, 102, 255, 180);
  noStroke();
  ellipse(1100, 1100, percent*200, percent*200);

  fill(255, 155, 255,180);
  noStroke();
  ellipse(400, 1100, percent*200, percent*200);


  }

}