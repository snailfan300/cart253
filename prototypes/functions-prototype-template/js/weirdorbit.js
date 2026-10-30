new p5();

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);

}

function draw() {
   background(220);

  const randomVals = {
    x: random(-100, 100),
    y: random(-100, 100),
    size: random(20, 300),
    colour: random(0, 360)
  }
   if (mouseIsPressed === true) {
     orbit(randomVals.x, randomVals.y, randomVals.size, randomVals.colour);
   }
}

function orbit(x, y, size, colour) {
  push();
  translate(width/2, height/2);
  noStroke();
  fill(colour, 95, 95, 0.65);
  rotate(frameCount*0.1);
  circle(x, y, size);
}
