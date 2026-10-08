/**
 * "Covid Conscious Green Ball"
 * Joel P.
 *
 * If you remember social distancing this is sort of similar. Bring your cursor too close and the green ball will get scared. :(
 */

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
}

function draw() {
  background(250, 255, 141);

  push();
  noStroke();
  fill("#0DFF35");
  ellipse(scaredGuy.x, scaredGuy.y, scaredGuy.size);
  pop();

  let cursorDist = dist(mouseX, mouseY, scaredGuy.x, scaredGuy.y);

  let collision = (cursorDist < invisibleCircle.size/2 + cursorCircle.size/2);

}
