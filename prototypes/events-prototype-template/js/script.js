/**
 * Title of Project
 * Author Name
 *
 * The newer variation of the covid conscious green ball in which you harass the scared guy by clicking on him
 */

"use strict";

// Setup() and global variables remain the same from the previous version
const scaredGuy = {
x: 450,
y: 450,
size: 400,
fill: "#0DFF35",
moods: {
 good: "#0DFF35",
 bad: "#FF0D41"
}
}

const invisibleCircle = {
  x: 450,
  y: 450,
  size: 700,
  fill: (255, 255, 255, 0),
}

const cursorCircle = {
  x: undefined, //not in use because i do not wish to have a cursor object. i think the cursor is funny on its own?
  y: undefined, // ^^^
  size: 60,
  fill: "#000000"
}

const textElement = { // to make the on-screen text controllable with a boolean
  x: undefined,
  y: 60,
  size: 55,
  text: 'do not poke him',

  texts: {
  var1: 'do not poke him',
  var2: 'dear god!!!',
  }
}

function setup() {
createCanvas(900, 900);
ellipseMode(CENTER);
textAlign(CENTER);
}



function draw() { // draw() now displays the text using the elements from the textElement global variable. i put it inside of a push pop out of habit but i'm not entirely super sure if it's necessary here
background(250, 255, 141);

push();
noStroke();
fill(scaredGuy.fill);
ellipse(scaredGuy.x, scaredGuy.y, scaredGuy.size);
pop();

push();
textSize(textElement.size);
text(textElement.text, width/2, textElement.y); // *found out the hard way that you cannot declare a global variable as being 'width/2' if it's declared above setup, which is why the x-pos of the text is 'undefined' and is just width/2 here
pop();


function smileFace() {
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

function frownFace() {
//frown mouth
push();
noFill();
stroke("#1C0F03");
strokeWeight(15);
arc(width/2, height/2 + 125, 250, 250, PI, PI + PI);

//eyes
push();
noStroke();
fill("#1C0F03");
ellipse(width/2 - 70, height/2 - 30, 30);
ellipse(width/2 + 70, height/2 - 30, 30);

pop();
pop();
}

let cursorDist = dist(mouseX, mouseY, scaredGuy.x, scaredGuy.y);

let collision = (cursorDist < scaredGuy.size/2 + cursorCircle.size/2);

if (collision && mouseIsPressed) { // i would've put this in a mousePressed() function but i think it messed up my variable declarations so i decided to use logical And instead
  // basically just checks to see if your cursor is overlapping AND you're clicking at the same time. if both conditions are met, it will run the code block below. i love logical statements
  frownFace();
  scaredGuy.fill = scaredGuy.moods.bad;
  textElement.text = textElement.texts.var2; // the text will change to reflect the dastardly way in which you are hurting my boy

}
else { // *i also would've used mouseReleased() but else effectively does the same thing if you're considering the logical And from the if-statement. cool
  smileFace();
  scaredGuy.fill = scaredGuy.moods.good;
  textElement.text = textElement.texts.var1;
}

}
