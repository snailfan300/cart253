/**
 * "Clean Animal"
 * Joel P.
 *
 * I found a way to fix my weird problem from the previous iteration. It actually completely flew over my head because the solution was really just an if statement (as I thought) but I kept messing up the syntax really badly so I had to scrap the idea
 * Some collision-validating code referenced from Pippin Barr's own variants (hi)
 */

function setup() { // canvas always 900x900, and centered shape modes because i find it easier to calculate
  createCanvas(900, 900);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB); // < remains in hsb like the previous iteration because i don't feel like manually switching it back to rgb; i already have the color codes i want in here as is
}

function draw() {
  background(174, 20, 96);

  let headSize = 550; // the size of the animal's head is a defined variable so i can reference it faster in my if-statement
  let x1 = width/2;
  let y1 = height/2 + 70;
  // ^^ x1 and y1 are also for faster referencing, in the case of dist calculations

  // everything below are shape functions for drawing a simple animal vvv
  push();
  noStroke();
  fill(0, 76, 80);
  ellipse(x1, y1, headSize);

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
  // ***

  // below are functions for drawing a sponge object for the cursor, follows the cursor at a slight offset
  //let sponge = mouseX -10;

  push();
  translate (sponge, height/2 - 130);
  noStroke();
  fill(334, 20, 98);
  circle(40, 100, 60);
  circle(70, 70, 80);
  circle(20, 60, 120);
  circle(-40, 110, 60);

  let spongeX = 150; // width of sponge, I'm only really checking the collision/distance horizontally (or on a restricted axis) since originally the sponge cursor object was locked to the x-axis
  
  //sponge
  fill(44, 87, 100);
  rect(0, 0, 150, 210, 20);

  //details
  fill(33, 93, 79)
  circle(30, -40, 40);
  circle(-5, -60, 20);

  pop();

}
