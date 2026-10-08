/**
 * "Covid Conscious Green Ball"
 * Joel P.
 *
 * If you remember social distancing this is sort of similar. Bring your cursor too close and the green ball will get scared. :(
 */

function setup() {
  createCanvas(900, 900);
  ellipseMode(CENTER);
}

function draw() {
  background(250, 255, 141);

  push();
  noStroke();
  fill("#0DFF35");
  ellipse(450, 450, 700);
  pop();

}
