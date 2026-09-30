//"Pent Portrait"
//Joel P.
//Purely visual Javascript proto using P5's 2D primitives to assemble a bust portrait of Pent from Supermental

function setup() {
  createCanvas(500, 500);
}

function draw() {
  colorMode(HSL);
  angleMode(DEGREES);
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(262, 100, 10.2);

  torso();
  hairback();
  ears();
  face();
  hairfront();
  hat();
  eyebrows();

}

function hat(){
  push();
  translate(width/2, 210);

  noStroke();
  fill(175, 10, 97);
  rect(0, -100, 400, 40, 10);

  noStroke();
  fill(175, 10, 97);
  rect(0, -150, 255, 60, 10);

  noStroke();
  fill(252, 90.7, 57.6);
  rect(0, -130, 255, 40, 5);
  pop();

}

function hairfront(){
  push();
  translate(width/2, 210);

  noStroke();
  fill(0, 61.8, 49.2);
  triangle(0, 0, 75, -100, -75, -100);

  ellipse(-90, -70, 120, 50);

  ellipse(90, -70, 120, 50);
  pop();
}

function face(){
  push();
  translate(width/2, 210);

  noStroke();
  fill(36, 98.4, 75.5);
  rect(0, 0, 200, 300, 40);

  //eyebags
  fill(332, 100, 27.5);
  ellipse(55, 25, 70, 100);

  ellipse(-55, 25, 70, 100);

  //eye sclerae
  fill(360, 0, 100);
  ellipse(50, 10, 70, 100);

  ellipse(-50, 10, 70, 100);

  //pupils
  fill(0, 0, 0);
  ellipse(35, 10, 40, 60);

  ellipse(-35, 10, 40, 60);

  fill(0, 61.8, 49.2, 0.3);
  ellipse(35, 20, 25, 30);

  ellipse(-35, 20, 25, 30);

  //nose
  fill(16, 100, 68);
  quad(15, -50, -15, -50, -33, 85, 33, 85);

  //sideburns

  stroke(0, 61.8, 49.2)
  strokeWeight(23);
  line(-100, -50, -100, 90);

  line(100, -50, 100, 90);
  pop();
}

function hairback(){
  push();
  translate(width/2, 210);

  //ellipses are sort of paired together based on where they occur

  noStroke();
  fill(0, 61.8, 49.2);
  ellipse(-140, -50, 100, 60);
  ellipse(-130, 0, 100, 60);

  ellipse(140, -50, 100, 60);
  ellipse(130, 0, 100, 60);

  fill(332, 100, 27.5);
  ellipse(-120, 80, 100, 60);
  ellipse(-110, 120, 100, 50);

  ellipse(120, 80, 100, 60);
  ellipse(110, 120, 100, 50);

  fill(0, 61.8, 49.2);
  ellipse(-110, 40, 70, 100);
  ellipse(100, 40, 70, 100);


  pop();
}

function torso(){
  push();
  translate(width/2, 210);

  //body
  noStroke();
  fill(0, 61.8, 49.2);
  quad(190, 173, -190, 173, -300, 600, 300, 600);

  fill(175, 10, 97);
  quad(100, 170, -100, 170, -200, 600, 200, 600);

  //shirt shadow
  fill(209, 41.3, 53.9);
  triangle(0, 310, 70, 160, -70, 160);

  stroke(209, 41.3, 53.9);
  strokeWeight(5);
  line(70, 127, -117, 260);

  line(-70, 127, 117, 260);

  //shirt collar
  noStroke();
  fill(175, 10, 97);
  triangle(0, 290, 70, 160, -70, 160);

  triangle(120, 260, 110, 150, -20, 160);
  triangle(-120, 260, -110, 150, 20, 160);

  triangle(220, 190, 130, 140, 30, 160);
  triangle(-220, 190, -130, 140, -30, 160);

  //neck
  noStroke();
  fill(36, 98.4, 75.5);
  rect(0, 140, 80, 100, 30);

  //neck shadow
  fill(16, 100, 68);
  rect(0, 115, 80, 100, 20);

  pop();
}

function eyebrows(){
  push();
  translate(width/2, 210);

  noStroke();
  fill(0, 0, 0);

  //i had to sketch the quad points with these circles because it always renders quads in clockwise order and i did something wrong where my quad was twisting over itself so i wanted to block out the coordinates manually vvv

  //circle(-90, -70, 10);
  //circle(-40, -60, 10);
  //circle(-30, -40, 10);
  //circle(-110, -50, 10);

  quad(-90, -70, -30, -60, -20, -30, -110, -40);
  quad(90, -70, 30, -60, 20, -30, 110, -40);
}

function ears(){
  push();
  translate(width/2, 210);

  noStroke();
  fill(36, 98.4, 75.5);
  triangle(-160, 0, -100, 10, -100, 70);
  triangle(160, 0, 100, 10, 100, 70);

  //ear shadows
  fill(16, 100, 68);
  triangle(-140, 10, -100, 20, -100, 60);
  triangle(140, 10, 100, 20, 100, 60);

  pop();
}
