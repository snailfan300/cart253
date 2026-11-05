// Joel P.
// "Hot Fuzz"
// Random squares in random colors that cycle through the whole spectrum of color! Very fun to look at.

let fuzzs = []; // array that holds square objects

function setup() {
  createCanvas(900, 900);
  colorMode(HSB);
  frameRate(7); // lower framerate to make the square generation easier to look at

  for (let f = 0; f < 250; f += 1) { // for loop that creates and pushes squares to the array above
    let x = random(-70, width);
    let y = random(-70, height);
    let size = random(60, 120);
    let hues = random(97, 142);

    let fuzz = new fuzzClass(x, y, size, hues);

    fuzzs.push(fuzz);
  }
}

function draw() {
  background(0, 0, 0, 0.3); // background with alpha to add an afterimage effect

  for (let fuzz of fuzzs) { // for-of statement that creates and moves the square objects i have created

    fuzz.create();

    fuzz.move();
  }
}

class fuzzClass { // class provides variables for my squares using the global variables
  constructor(x, y, size, hues) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hues = hues;
  }

  create() { // creates a square using these guidelines
    push();
    noStroke();
    fill(this.hues, 67, 95, 0.05);
    rect(this.x, this.y, this.size);
    pop();
  }

  move() {
    this.x = random(-50, width); // squares will randomly change position every frame
    this.hues += 3; // increases the HSB hue by 3 every frame

    if (this.hues > 360) { // if the hue value exceeds 360, will loop around to value 0 and will cycle through the whole spectrum
      this.hues = 0;
    }
  }
}
