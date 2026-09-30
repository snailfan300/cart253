/**
 * "Moving Orange"
 * Joel P.
 *
 * An orange that appears on the canvas. Every time the canvas is clicked or refreshed, the orange will change position.
 */

"use strict";

let randX // random constrained x value
let randY // random constrained y value

// Setup contains a 'random x' and a 'random y' variable that each set a random coordinate every time setup is re-triggered. Setup can be intentionally called by clicking the canvas, or refreshing.
function setup() {
  createCanvas(900, 900);
  randX = random (100, 800);
  randY = random (100, 800);
  ellipseMode(CENTER);
}

// Draw contains the shape primitives that make up the orange. I came up with this idea when I was on the bus earlier and I kind of attribute it to me being hungry. Ouch. I do like little cartoon vector oranges so I wanted to reproduce that style in here

function draw() {
  background(126, 247, 231);

// vvv orange base
  push();
  translate (randX, randY);
  noStroke();
  fill(250, 160, 32);
  circle(0, 0, 500);

// vvv orange freckle details
  push();
  fill(230, 108, 15);
  circle(100, 160, 30);
  circle(60, 120, 30);
  circle(130, 120, 30);

// vvv orange leaf
  push();
  fill(133, 240, 20);
  ellipse (-110, -240, 200, 100);

// vvv orange leaf detail
  push();
  fill(64, 199, 8);
  ellipse(-90, -240, 120, 50);

// vvv orange stem
  push();
  noFill();
  stroke(97, 50, 63);
  strokeWeight(80);
  arc(90, -255, 190, 300, PI, PI + QUARTER_PI);

// vvv the twisted pop dungeon (I don't enjoy using function push without calling function pop, it feels like a transgression to me on some level)
//(I also think it's good practice for me either way because I have a bad habit of using push without pop and then getting upset that my visuals are getting displaced everywhere)
  pop();
  pop();
  pop();
  pop();
  pop();

  if (mouseIsPressed == true){
    setup();
    }
}
