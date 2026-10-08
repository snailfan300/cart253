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

}
