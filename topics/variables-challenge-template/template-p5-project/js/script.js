/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

  let backgroundcolor = {
  fill: {
    r: 160,
    g: 180,
    b: 200,
  }
};

  let birdx = 0;

  let evilragex
  let evilragey


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(backgroundcolor.fill.r, backgroundcolor.fill.g, backgroundcolor.fill.b);

  //decreases g and b values to make him more red
  mrFurious.fill.g = mrFurious.fill.g - 1;
  mrFurious.fill.b = mrFurious.fill.b - 1;

  //turn background color to nighttime
  backgroundcolor.fill.r = backgroundcolor.fill.r - 0.5;
  backgroundcolor.fill.g = backgroundcolor.fill.g - 0.5;
  backgroundcolor.fill.b = backgroundcolor.fill.b - 0.5;

  //moving bird
  birdx = birdx + 5;

  if (birdx > width + 10){
    birdx = -10;
  }

  push();
  noStroke();
  circle(birdx, (height/2 - 90), 20);
  pop();

  //rage constraint

  let minx = random (190, 210);
  let miny = random (190, 210);

  minx = minx + 4;
  miny = miny + 4;

  evilragex = minx + 4;
  evilragey = miny + 4;

  mrFurious.x = evilragex;
  mrFurious.y = evilragey;


  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}
