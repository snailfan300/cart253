function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);
  textAlign(CENTER);


}

function draw() {
     background(0, 0, 0, 0.45);
  push();
  textSize(48);
  fill(0, 0, 60);
  text('Hold click to spawn circles', width/2, 60); // Descriptive text with instructions
  text('(Slight flash warning)', width/2, 100);
  pop();

  if (mouseIsPressed === true) {
    orbit(random(-300, 300), random(-300, 300), random(20, 300), random(0, 360));
    orbit(random(-200, 200), random(-200, 200), random(20, 300), random(0, 360));
    orbit(random(-200, 200), random(-200, 200), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));

    frameRate(8);
  }
}

//function mousePressed() {
  //orbit(random(-100, 100), random(-100, 100), random(20, 80), random(0, 360));
//}
function orbit(x, y, size, colour) {
  push();
  translate(width/2, height/2);
  noStroke();
  fill(colour, 95, 95, 0.25);
  rotate(frameCount*0.1);
  circle(x, y, size);
}
