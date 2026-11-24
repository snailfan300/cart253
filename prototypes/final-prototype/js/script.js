/**
 * title
 * name
 *
 * desc
 */

"use strict";

let bubbles = [];

function setup() {
  createCanvas(700, 500);
  ellipseMode(CENTER);
  colorMode(HSB);

  for (let i = 0; i < 200; i += 1) {

    let x = random(0, 700);
    let y = random(0, 500);
    let size = random(60, 120);
    let velocityX = random(-7, 7);
    let velocityY = random(-7, 7);
    let hues = random(0, 360);

    let bubble = new bubbleClass(x, y, size, velocityX, velocityY, hues);
    bubbles.push(bubble)
  }
}

function draw() {
  background(0, 0, 0);

  for (let bubble of bubbles) {

    bubble.create();

    bubble.move();

    bubble.boundaries();

    bubble.decrease();
  }
}


class bubbleClass {
  constructor(x, y, size, velocityX, velocityY, hues) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.hues = hues;
  }

  create() {
    push();
    noStroke();
    fill(this.hues, 67, 95, 0.2);
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
  this.size = this.size - 0.5;
}
}
