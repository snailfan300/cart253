/**
 * "Moving Orange"
 * Joel P.
 *
 * An orange that appears on the canvas. Every time the canvas is clicked or refreshed, the orange will change position.
 */

"use strict";

let randX // random constrained x value
let randY // random constrained y value

function setup() {
  createCanvas(900, 900);
  randX = random (100, 800);
  randY = random (100, 800);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate (randX, randY);
  noStroke();
  fill(139, 245, 39);
  circle(0, 0, 500);
  push();
  fill(255);
  circle (-22.5, -200, 200);
  push();
  noFill();
  stroke(97, 50, 63);
  strokeWeight(40);
  arc(90, -255, 190, 300, PI, PI + QUARTER_PI);
  pop();
  pop();

  if (mouseIsPressed == true){
    setup();
    }
}
