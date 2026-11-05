// Joel P.
// "title will go here later"
//

let bubbles = [];

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);

  for (let b = 0; b < 50; b += 1) {

    let x = random(0, 900);
    let y = random(0, 900);
    let size = random(60, 120);
    let velocityX = random(-7, 7);
    let velocityY = random(-7, 7);

    let bubble = new bubbleClass(x, y, size, velocityX, velocityY);

    bubbles.push(bubble);
  }
}

function draw() {
  background(0);

  for (let bubble of bubbles) {

    bubble.create();

    bubble.move();

    bubble.boundaries();
  }
}

class bubbleClass {
  constructor(x, y, size, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  create() {
    push();
    noStroke();
    fill(256);
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
