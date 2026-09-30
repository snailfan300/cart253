function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();
  noStroke();
  fill(203, 48, 48);
  ellipse(width/2, height/2 + 70, 600, 500);

  //ears
  ellipse(width/2 - 220, height/2 - 200, 150, 300);
  ellipse(width/2 + 220, height/2 - 200, 150, 300);

  //cheeks
  ellipse(width/2 - 270, height/2 + 120, 180, 130);
  ellipse(width/2 - 230, height/2 + 210, 180, 130);

  ellipse(width/2 + 270, height/2 + 120, 180, 130);
  ellipse(width/2 + 230, height/2 + 210, 180, 130);

  fill(203, 48, 48);
  ellipse(width/2, height/2 + 400, 450, 600);
