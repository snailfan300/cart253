/**
 * Paint Splatter
 * Joel P.
 *
 * I really like p5's randoms so I made a prototype using that as the basis. Not overly technically impressive but I think it's very fun to look at when you're messing with it
 */


"use strict";

const keyDown = { // To be used with keyPressed's validation
  specificKey: 32 // Spacebar keycode
}

function setup() { // Specific functions normally placed in draw() are moved here so they don't get re-drawn every frame
  createCanvas(900, 900);
  background(0);
  ellipseMode(CENTER);
  textAlign(CENTER);
  colorMode(HSB);

  push();
  textSize(35);
  fill(0, 0, 100);
  text('Press spacebar to cover the canvas in paint splatters', width/2, 60);
  pop();

}

function draw() {
}

function keyPressed(event) { // If the spacebar is pressed it creates a random paint splatter somewhere on the canvas with a random size and color
  if (event.keyCode === keyDown.specificKey) {
    paintSplatter(random(0, width), random(0, height), random(50, 400));
  }
}

function paintSplatter(x, y, size) { // The parameters are intended to be replaced with random constraints in the keyPressed()
  push();
  noStroke();
  fill(random(0, 360), 95, 95);
  ellipse(x, y, size);
  ellipse(random(0.5, 2) * x, random(0.5, 2) * y, random(0.5, 2) * size); // Bottom two ellipses should possibly create extra instances of ellipses, so the paint splatters look more "splatter-y" when appearing (and aren't just circles)
  ellipse(random(-1.5, -0.2) * x, random(-1.5, -0.2) * y, random(-1.5, -0.2) * size);
  pop();
}
