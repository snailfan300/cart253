/**
 * title
 * name
 *
 * desc
 */

"use strict";

const object = {
  hues: 0,
  keyNumber: 32,
};

let bubbles = [];

function setup() {
  createCanvas(1200, 900);
  ellipseMode(CENTER);
  colorMode(HSB);

  //    let x = random(0, 400);
  //    let y = random(0, 400);
  //    let size = random(60, 120);
  //    let velocityX = random(-7, 7);
  //    let velocityY = random(-7, 7);
  //    let hues = random(0, 360);
}

function draw() {
  background(0, 0, 0, 0.4);

  for (let bubble of bubbles) {
    bubble.create();

    bubble.move();

    bubble.boundaries();

    bubble.decrease();

    bubble.lossVelocity();
  }

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].size <= 0 || bubbles[i].opac <= 0) {
      bubbles.splice(i, 1);
    }
  }

  //change hue of each element in the array?
  bubbles.forEach(hueChange);
}

function hueChange(hue) {
  object.hues = map(bubbles.length, 0, 300, 0, 360) + random(-50, 10);

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].hues >= 360) {
      bubbles[i].hues = 0;
    }
  }
}

function keyPressed(event) {
  if (event.keyCode === object.keyNumber) {
    for (let i = 0; i < 5; i++) {
      let bubble = new bubbleClass(
        random(0, width),
        random(0, height),
        random(120, 360),
        random(-9, 9),
        random(-9, 9),
        object.hues,
        random(0.05, 0.4)
      );
      bubbles.push(bubble);
    }
  }
}

class bubbleClass {
  constructor(x, y, size, velocityX, velocityY, hues, opac) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.hues = object.hues;
    this.opac = opac;
  }

  create() {
    push();
    noStroke();
    fill(this.hues, 67, 95, this.opac);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  boundaries() {
    if (this.x < 0 || this.x > width) {
      this.velocityX = this.velocityX * -1;
    }

    if (this.y < 0 || this.y > height) {
      this.velocityY = this.velocityY * -1;
    }
  }

  decrease() {
    this.size = this.size - 0.2;
    this.hues = this.hues + 0.5;
    this.opac -= 0.0003;
  }

  lossVelocity() {
    this.velocityX = this.velocityX * 0.996;
    this.velocityY = this.velocityY * 0.996;

    if (abs(this.velocityX) < 0.01) {
      this.velocityX = 0;
    }

    if (abs(this.velocityY) < 0.01) {
      this.velocityY = 0;
    }
  }
}
