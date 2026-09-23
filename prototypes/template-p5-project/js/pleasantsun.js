//"Pleasant Sun" prototype
//Joel P.
//Purely visual Javascript proto that spawns a handful of concentrated circles, with decreasing alpha values
//Also possesses a few rotating "cloud" objects

function setup() {
  createCanvas(600, 600);
}

function draw() {
  colorMode(HSL);
  angleMode(DEGREES);
  background(219, 62.4, 64.5);
  pleasantcircles();
  cloud();

}

function pleasantcircles(){
  // this function draws a bunch of circles concentrated around the center, almost like a circle with a bunch of "rings?" i wanted it to evoke something sun-like and warm. i also really like symmetry if this wasn't evident already
  noStroke();
  fill(59, 91.1, 64.5);
  circle(300, 300, 300);

  // one thing that got me was that hsl's alpha values are in decimal form, unlike the default rgb system which uses whole numbers 0-100 for the alpha. i wanted to remark on it here before i forgot inevitably
  fill(59, 91.1, 64.5, 0.7);
  circle(300, 300, 400);

  fill(59, 91.1, 64.5, 0.5);
  circle(300, 300, 500);

  fill(59, 91.1, 64.5, 0.3);
  circle(300, 300, 600);

  fill(59, 91.1, 64.5, 0.1);
  circle(300, 300, 700);
}

function cloud(){
  // creates a handful of semi-transparent circles that rotate around the center, some with a bit of offset (with translate) so they look a little more intentionally cloud-like when paired
  push();
  translate(300, 300);
  noStroke();
  rotate(frameCount*1.5);
  fill(360, 100, 100, 0.7);
  circle(40, 40, 80);
  pop();

  push();
  translate(300, 300);
  noStroke();
  rotate(frameCount*1.5);
  fill(360, 100, 100, 0.7);
  circle(70, 40, 50);
  pop();

  push();
  translate(300, 300);
  noStroke();
  rotate(frameCount*0.5);
  fill(360, 100, 100, 0.7);
  circle(200, 200, 70);
  pop();

  push();
  translate(300, 300);
  noStroke();
  rotate(frameCount*0.5);
  fill(360, 100, 100, 0.7);
  circle(200, 250, 100);
  pop();

  push();
  translate(300, 300);
  noStroke();
  rotate(frameCount*0.7);
  fill(360, 100, 100, 0.7);
  circle(120, 120, 30);
  pop();
}
