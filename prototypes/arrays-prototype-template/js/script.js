// Joel P.
// "Ponder the Orb"
// The gist of it is that you click the orb for a random assortment of weird fortunes. Features cool color gimmicks because they look pleasant and magical

const predictions = [ // array holding numerous strings
  'Nothing here yet.',
  'You will be deep-fried in beef tallow tomorrow',
  'One of your friends will get the flu next week',
  'You will be emailed 550 lbs of herring',
  'Your favorite game will win Game of the Year',
  'You will have a very restful sleep',
  'You will be exempted from all of your exams',
  'You will receive ketchup for Christmas',
  'Your cell phone will short-circuit',
  'You will pull a random muscle in the next hour',
  'A random food item in your house is now moldy',
  'Something scary will happen soon. 👀',
  'You will develop an allergy to lentils',
  'You have been invited to my potluck of peace',
  'Thursday has been deleted from the work week',
  'Silksong update tomorrow',
  'The invasive ladybugs will leave your hometown',
  'Moodle will stop signing you out for a week',
  'You are the winner of this chicken dinner',
  'You will stub your toe in thirty seconds'
]

let index = 0; // set the array to a variable

const crystalball = {
  x: 450,
  y: 450,
  size: 400,
  fill: '#A630A6'
}

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  textAlign(CENTER);
  colorMode(HSB);
}

function draw() {
  background(0, 0, 0, 0.45); // alpha on background for slight color persistence

  let predictionText = predictions[index]; // will be used for the text element later, will set the text to whatever element is at the index in here

  // crystal ball stand
  push();
  noStroke();
  fill('#C28F10');
  triangle(width/2, height/2, 300, 700, 600, 700);
  pop();

  // crystal ball object itself
  push();
  noStroke();
  fill(crystalball.fill);
  ellipse(crystalball.x, crystalball.y, crystalball.size);
  pop();

  // crystal ball details
  push();
  noStroke()

  fill('#882B94');
  ellipse(420, 580, 140, 80);
  ellipse(360, 500, 70);

  fill('#B53AA9');
  ellipse(530, 350, 150, 110);

  pop();

  // text display
  push();
  textSize(40);
  stroke('#FFFFFF');
  fill(0);
  strokeWeight(3);
  text(predictionText, width/2, 60);
  pop();

  // flickering magic circles code
  push();
   if (mouseIsPressed === true) {
    orbit(random(-300, 300), random(-300, 300), random(20, 300), random(0, 360));
    orbit(random(-200, 200), random(-200, 200), random(20, 300), random(0, 360));
    orbit(random(-200, 200), random(-200, 200), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));
    orbit(random(-100, 100), random(-100, 100), random(20, 300), random(0, 360));

    frameRate(8);
   }
  pop();

// collision checker for the orb (orb will not do anything if not interacted with directly)
  let cursorDist = dist(mouseX, mouseY, crystalball.x, crystalball.y);

let collision = (cursorDist < crystalball.size/2);

if (collision && mouseIsPressed) {
  index = (round(random(1, 19))); // will set the index to a random value between 1 and 19, excluding element 0. round ensures the program does not pull decimal values as this will break the program entirely
}
}


// reused orbit code that makes random circles appear when the user clicks *anywhere* on the canvas
function orbit(x, y, size, colour) {
  push();
  translate(width/2, height/2);
  noStroke();
  fill(colour, 95, 95, 0.15);
  rotate(frameCount*0.1);
  circle(x, y, size);
}
