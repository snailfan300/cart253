const miseryBall = {
  x: 450,
  y: 450,
  size: 900,
  color: "#81D930",
  specificKey: 8
}

  const textElement = {
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

function draw() {
  background('#20211E');

  push();
  noStroke();
  fill(miseryBall.color);
  ellipse(miseryBall.x, miseryBall.y, miseryBall.size);
  pop();

  push();
  textSize(textElement.size);
  fill('#81D930');
  stroke('#20211E');
  strokeWeight(10);
  text(textElement.text, width/2, textElement.y);
  pop();

  if (miseryBall.size <= 0) {
    textElement.text = textElement.texts.win
    miseryBall.color = '#20211E'
  }
}

function keyPressed(event) {
  if (event.keyCode === miseryBall.specificKey) {
    miseryBall.size = miseryBall.size - 30;
}
}
