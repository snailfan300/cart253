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

  //details
  fill(140, 0, 65);
  ellipse(width/2 - 220, height/2 -170, 100, 200);
  ellipse(width/2 + 220, height/2 -170, 100, 200);

  ellipse(width/2 - 70, height/2 - 5, 60, 50);
  ellipse(width/2 + 70, height/2 - 5, 60, 50);

  ellipse(width/2, height/2 + 500, 400, 300);

  //eyes and nose
  fill(0);
  ellipse(width/2 -100, height/2 + 40, 70, 30);
  ellipse(width/2 + 100, height/2 + 40, 70, 30);

  ellipse(width/2, height/2 + 100, 80, 50);

  pop();
