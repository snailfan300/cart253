function setup() {
  createCanvas(900, 900);
  rectMode(CENTER);
  textAlign(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(256);
}

function openLock() {
  push();
  noStroke();

}

function closedLock() {
  push();
  noStroke();
}

function keyPressed(event) {
  if (event.key === "[") {
    openLock();
  }
  else {
    closedLock();
  }
}
