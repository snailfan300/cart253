// Joel P.
// "title"
//

let fuzzs = [];

function setup() {
  createCanvas(900, 900);
  colorMode(HSB);
  frameRate(9);

  for (let f = 0; f < 200; f += 1) {
    let x = random(-70, width);
    let y = random(-70, height);
    let size = random(60, 120);
    let hues = random(97, 142);

    let fuzz = new fuzzClass(x, y, size, hues);

    fuzzs.push(fuzz);
  }
}

function draw() {
  background(0, 0, 0, 0.3);

  for (let fuzz of fuzzs) {

    fuzz.create();

    fuzz.move();
  }
}

class fuzzClass {
  constructor(x, y, size, hues) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hues = hues;
  }

  create() {
    push();
    noStroke();
    fill(this.hues, 67, 95, 0.05);
    rect(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x = random(-50, width);
    this.hues += 3;

    if (this.hues > 360) {
      this.hues = 0;
    }
  }
}
