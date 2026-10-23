/**
 * "Disappearing Ball"
 * Joel P.
 *
 * Destroy a measly orb by spamming your backspace key
 */

const miseryBall = { // ball that will be deleted
  x: 450,
  y: 450,
  size: 900,
  color: "#81D930",
  specificKey: 8 // key code 8 is for backspace
}

  const textElement = { // visible text
  x: undefined,
  y: 60,
  size: 55,
  text: 'use [BACKSPACE] to delete this orb',
  color: '#F3FFE8',
  texts: {
  win: 'you killed it!!'
  }
  }

function setup() {
  createCanvas(900, 900);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
}

function draw() { // draws the ball and the on-screen text display
  background('#20211E');

  push(); // draws the ball itself
  noStroke();
  fill(miseryBall.color);
  ellipse(miseryBall.x, miseryBall.y, miseryBall.size);
  pop();

  push(); // draws the text
  textSize(textElement.size);
  fill('#81D930');
  stroke('#20211E');
  strokeWeight(10);
  text(textElement.text, width/2, textElement.y);
  pop();

  if (miseryBall.size <= 0) { // if the ball's size is less than or equal to zero you win the game
    textElement.text = textElement.texts.win
    miseryBall.color = '#20211E' // possible issue in which once the ball attains a negative size it starts to expand whenever you press backspace, my bandage solution was just to hide it in the background to stop this from happening
  }
}

function keyPressed(event) {
  if (event.keyCode === miseryBall.specificKey) { // if the program detects usage of backspace specificallh it will shrink the ball
    miseryBall.size = miseryBall.size - 30;
}
}
