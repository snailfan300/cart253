// Joel P.
// "title"
//

let fuzzs = [];

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  colorMode(HSB);

  for (let f = 0; f < 100; f += 1) {
    let x = random(-70, width);
    let y = random(-70, height);
    let size = random(60, 120);
    let hues = random(0, 360);

    let fuzz = new fuzzClass(x, y, size, hues);

    fuzzs.push(fuzz);
  }
}

function draw() {
  background(0, 0, 0, 0.8);

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
    fill(this.hues, 67, 95, 0.6);
    rect(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x = random(-50, width);
    this.hues += 1;
  }
}
