let predictions = [
  'Nothing here yet.',
  'You will be deep-fried in beef tallow tomorrow',
  'One of your friends will get the flu next week',
  'You will receive 550 lbs of herring',
  'Your favorite game will win Game of the Year',
  'You will have a very restful sleep',
  'You will be exempted from all of your exams',
  'You will receive ketchup for Christmas',
  'Your cell phone will short-circuit',
  'You will pull a random muscle in the next hour',
  'A random food item in your house is now moldy',
  'Something scary will happen soon. 👀',
  'You will develop an allergy to lentils'
]

let index = 0;

const button = {
  x: 450,
  y: 450,
  size: 400,
  fill: '#30D99B'
}

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(220);

  let predictionText = predictions[index];

  push();
  noStroke();
  fill(button.fill);
  ellipse(button.x, button.y, button.size);
  pop();

  push();
  textSize(35);
  text(predictionText, width/2, 60);
  pop();


  let cursorDist = dist(mouseX, mouseY, button.x, button.y);

let collision = (cursorDist < button.size/2);

if (collision && mouseIsPressed) {
  index = random(1, 12);
}
}
