function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB);
}

function draw() {
  let backgroundHue = map(mouseY, 0, height, 0, 360);
  background(backgroundHue, 15, 90);

  push();
  noStroke();
  fill(0, 76, 80);
  ellipse(width/2, height/2 + 70, 600, 500);

  //ears
  ellipse(width/2 - 220, height/2 - 200, 150, 300);
  ellipse(width/2 + 220, height/2 - 200, 150, 300);

  //cheeks
  ellipse(width/2 - 270, height/2 + 120, 180, 130);
  ellipse(width/2 - 230, height/2 + 210, 180, 130);

  ellipse(width/2 + 270, height/2 + 120, 180, 130);
  ellipse(width/2 + 230, height/2 + 210, 180, 130);

  ellipse(width/2, height/2 + 400, 450, 600);

  //details
  fill(332, 100, 55);
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

  let sponge = mouseX -10;

  push();
  translate (sponge, height/2 - 130);
  noStroke();
  fill(334, 20, 98);
  circle(40, 100, 60);
  circle(70, 70, 80);
  circle(20, 60, 120);
  circle(-40, 110, 60);

  //sponge
  fill(44, 87, 100);
  rect(0, 0, 150, 210, 20);

  //details
  fill(33, 93, 79)
  circle(30, -40, 40);
  circle(-5, -60, 20);

  pop();

}
