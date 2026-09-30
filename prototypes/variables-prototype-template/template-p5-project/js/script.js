/**
 * Title of Project
 * Author Name
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let randX // random constrained x value
let randY // random constrained y value

function setup() {
  createCanvas(900, 900);
  randX = random (100, 800);
  randY = random (100, 800);
}

function draw() {
  background(220);

  push();
  translate (randX, randY);
  noStroke();
  fill(139, 245, 39);
  circle(125, 0, 20);
  push();
  fill(255);
  circle (-22.5, 0, 10)
  pop();
  pop();
}
