/**
 * BOO!!!
 * Joel P.
 *
 * Named after the context in which you throw tomatoes and other similarly disrespectful fruits at people you are not very fond of
 */

"use strict";

const keyDown = { // The keycode for the spacebar; will be referred to later
  specificKey: 32
}
/**
 * Setup contains the usual "center modes" for shapes/objects, also holds the Smiley Guy function so it doesn't repeatedly redraw over my onslaught of projectiles
*/

function setup() {
  createCanvas(900, 900);
  background(250, 255, 141); // Background called in setup so it doesn't erase all my other stuff (if it were to redraw itself in draw())
  ellipseMode(CENTER);
  smileyGuy();

  push();
  textSize(48);
  text('Press spacebar to throw tomatoes at him', width/2, 60); // Descriptive text with instructions
  pop();
}

function draw() { // Draw holds nothing as I don't intend for my functions to update every frame, or to "clear" each other
}

function keyPressed(event) { // When the spacebar is clicked it spawns a tomato at the cursor's position
  if (event.keyCode === keyDown.specificKey) {
    throwTomato(mouseX, mouseY);
  }
}

function throwTomato(x, y) { // Creates tomato objects, using parameters that are to be replaced with mouseX and mouseY later

  // tomato splatter (occurs first due to layering system)
  push();
  noStroke();
  fill("#DE1641");
  ellipse(x + 50, y - 40, 120, 90);
  ellipse(x + 50, y + 20, 110, 60);
  ellipse(x - 60, y - 20, 100, 90);
  ellipse(x - 100, y + 35, 60, 30);
  pop();

  // tomato "body"
  push();
  noStroke();
  fill("#FF0D41");
  ellipse(x, y, 150);
  pop();

  // tomato leaves
  push();
  stroke("#108C0B");
  strokeWeight(32);
  line(x + 30, y - 70, x - 30, y - 40);
  line( x - 30, y - 70, x + 30, y - 40);
  pop();

  // tomato stem
  push();
  noStroke();
  fill("#24AD1F");
  ellipse(x, y - 65, 30);
  pop();
}

function smileyGuy() { // Creates the smiler "target dummy" with various elements

  //body
push();
noStroke();
fill("#0DFF35");
ellipse(width/2, height/2, 400);
pop();
//smile mouth
push();
noFill();
stroke("#1C0F03");
strokeWeight(15);
arc(width/2, height/2 + 25, 250, 250, PI + PI, PI);

//eyes
push();
noStroke();
fill("#1C0F03");
ellipse(width/2 - 70, height/2 - 30, 30);
ellipse(width/2 + 70, height/2 - 30, 30);

pop();
pop();
}
