/**
 * Weird Flicker
 * Joel P.
 *
 * Very odd afterimage/alpha channel shenanigans. Uses framerate modifiers to stop draw() from drawing and un-drawing my shapes at a horrific speed (of 60fps)
 */

 "use strict";

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);
  textAlign(CENTER);
}

function draw() {
     background(0, 0, 0, 0.45); // Background color declaration has an alpha channel to produce an afterimage effect when circles/"orbits" are being created
  push();
  textSize(48);
  fill(0, 0, 60);
  text('Hold click to spawn circles', width/2, 60); // Descriptive text with instructions
  text('(Slight flash warning)', width/2, 100);
  pop();

  if (mouseIsPressed === true) { // Slight spaghetti spam esque code but I think it all works out (multiple random "orbits" in different random places with random sizes and colors)
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

    frameRate(8); // Lowered framerate in p5 so the draw() function updating itself at its normal baseline of 60fps won't be incredibly hard to look at
  }
}

function orbit(x, y, size, colour) { // Initially supposed to draw orbiting circles at every mouse press, but rotate effectively does nothing in this script due to draw() updating + the way mouseIsPressed is updating as well. Essentially just draws random circles with alpha channels (very transparent)
  push();
  translate(width/2, height/2);
  noStroke();
  fill(colour, 95, 95, 0.25);
  rotate(frameCount*0.1);
  circle(x, y, size);
}
