/**
 * "Covid Conscious Green Ball"
 * Joel P.
 *
 * If you remember social distancing this is sort of similar. Bring your cursor too close and the green ball will get scared. :(
 */

 // if you remember social distancing this is exactly like that
  const scaredGuy = {
  x: 450,
  y: 450,
  size: 400,
  fill: "#0DFF35",
  moods: {
   good: "#0DFF35",
   bad: "#FF0D41"
  }
}

  const invisibleCircle = {
    x: 450,
    y: 450,
    size: 700,
    fill: (255, 255, 255, 0),
  }

  const cursorCircle = {
    x: undefined, //not in use because i do not wish to have a cursor object. i think the cursor is funny on its own?
    y: undefined, // ^^^
    size: 60,
    fill: "#000000"
  }

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
  textAlign(CENTER);
}



function draw() {
  background(250, 255, 141);

  push();
  noStroke();
  fill(scaredGuy.fill);
  ellipse(scaredGuy.x, scaredGuy.y, scaredGuy.size);
  pop();

  textSize(55);
  text('social distancing!!', width/2, 60);

  let cursorDist = dist(mouseX, mouseY, scaredGuy.x, scaredGuy.y);

  let collision = (cursorDist < invisibleCircle.size/2 + cursorCircle.size/2);

  if (collision) {
    frownFace();
    scaredGuy.fill = scaredGuy.moods.bad;

  }
  else {
    smileFace();
    scaredGuy.fill = scaredGuy.moods.good;
  }
}

  //functions for the different facial configs vvv
function smileFace() {
  //smile mouth
  push();
  noFill();
  stroke("#1C0F03");
  strokeWeight(15);
  arc(width/2, height/2 + 25, 250, 250, PI + PI, PI);

  //eyes
  push();
  noStroke();
  fill("#1C0F03");
  ellipse(width/2 - 70, height/2 - 30, 30);
  ellipse(width/2 + 70, height/2 - 30, 30);

  pop();
  pop();
}

function frownFace() {
  //frown mouth
  push();
  noFill();
  stroke("#1C0F03");
  strokeWeight(15);
  arc(width/2, height/2 + 125, 250, 250, PI, PI + PI);

  //eyes
  push();
  noStroke();
  fill("#1C0F03");
  ellipse(width/2 - 70, height/2 - 30, 30);
  ellipse(width/2 + 70, height/2 - 30, 30);

  pop();
  pop();
}
