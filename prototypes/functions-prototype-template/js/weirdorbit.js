function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);
}

function draw() {
   background(220);
   orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
}

function orbit(x, y, size, colour) {
  push();
  translate(width/2, height/2);
  noStroke();
  fill(colour, 95, 95, 0.65);
  rotate(frameCount*0.1);
  circle(x, y, size);
}
