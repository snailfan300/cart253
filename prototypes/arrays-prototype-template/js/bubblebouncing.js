// Joel P.
// "title will go here later"
//

let bubbles = [];

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);

  for (let b = 0; b < 200; b += 1) {

    let x = random(0, 900);
    let y = random(0, 900);
    let size = random(60, 120);
    let velocityX = random(-7, 7);
    let velocityY = random(-7, 7);
    let hues = random(0, 360);

    let bubble = new bubbleClass(x, y, size, velocityX, velocityY, hues);

    bubbles.push(bubble);
  }
}

function draw() {
  background(0, 0, 0, 0.2);

  for (let bubble of bubbles) {

    bubble.create();

    bubble.move();

    bubble.boundaries();
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
    fill(this.hues, 95, 95, 0.7);
    ellipse(this.x, this.y, this.size);
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;
}

  boundaries() {
    if (this.x < 0 || this.x > width) {
      this.velocityX = this.velocityX * -1;
    }

    if (this.y < 0 || this.y > width) {
      this.velocityY = this.velocityY * -1;
    }
  }

}
