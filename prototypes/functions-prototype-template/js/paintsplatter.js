function setup() {
  createCanvas(900, 900);
  background(255);
  ellipseMode(CENTER);
  textAlign(CENTER);
  colorMode(HSB);

}

function draw() {
}

function mousePressed(event) {
    paintSplatter(random(0, width), random(0, height), random(50, 400));
}

function paintSplatter(x, y, size) {
  push();
  noStroke();
  fill(random(0, 360), 95, 95);
  ellipse(x, y, size);
  pop();
}
