// Joel P.
// "Color Bubbles"
// Randomly-sized bubbles with random colors and velocity that move around the canvas. Uses class with the array to simplify things

let bubbles = [];

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);

  for (let b = 0; b < 200; b += 1) { // Will create 200 bubbles that are then pushed to the array

    let x = random(0, 900); // random x position
    let y = random(0, 900); // random y position
    let size = random(60, 120); // random size
    let velocityX = random(-7, 7); // random horizontal velocity (positive/increasing or negative/decreasing)
    let velocityY = random(-7, 7); // random vertical velocity (positive/increasing or negative/decreasing)
    let hues = random(0, 360); // random hsb hue

    let bubble = new bubbleClass(x, y, size, velocityX, velocityY, hues); // makes a new class using the variables we just defined

    bubbles.push(bubble);
  }
}

function draw() {
  background(0, 0, 0, 0.4); // slight alpha on the background for a very faint afterimage effect when the bubbles move

  for (let bubble of bubbles) { // for... of with my array and class. creates bubbles using my parameters, moves them, and constrains them to the canvas based on their position

    bubble.create();

    bubble.move();

    bubble.boundaries();
  }
}

class bubbleClass { // class holding the information/variables for my bubble object
  constructor(x, y, size, velocityX, velocityY, hues) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.hues = hues;
  }

  create() { // creates a bubble using these instructions from the class, which are in turn just my global variables
    push();
    noStroke();
    fill(this.hues, 67, 95, 0.2);
    ellipse(this.x, this.y, this.size);
  }

  move() { // adds velocity to random positions so they start to move around, usually diagonally
    this.x += this.velocityX;
    this.y += this.velocityY;
}

  boundaries() { // if the x/y of a bubble is less than 0 or greater than the max width/height of the canvas, their velocity is flipped so they come back around instead of just disappearing off the side of the canvas when the program is run
    if (this.x < 0 || this.x > width) {
      this.velocityX = this.velocityX * -1;
    }

    if (this.y < 0 || this.y > width) {
      this.velocityY = this.velocityY * -1;
    }
  }

}
