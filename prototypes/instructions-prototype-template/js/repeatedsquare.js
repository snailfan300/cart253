//"Repeated Square"
//Joel P.
//Purely visual Javascript proto using a for loop to spawn repeating rotating squares on a black background
//*** Might run poorly on lower-end devices

function setup() {
  createCanvas(600, 600);
}

function draw() {
  colorMode(HSL);
  angleMode(DEGREES);
  rectMode(CENTER);
  background(0);

  creativefunctionname();
}

function creativefunctionname(){
  // ^ you legally have to bear with me on this one because i'm a little sleepy and this was also funnier in my head

  push();
  translate(300, 300);
  rotate(frameCount*0.3);
  noFill();
  stroke(114, 100, 50, 0.45);
  strokeWeight(0.5);
   for (let x = 10; x < 1200; x += 35){
  square(0, 0, x);
   }
  pop();

  // i'm not really used to for loops but the "+=" part at the end had 10 originally and my laptop started running at three frames per second so something tells me i shouldn't be doing that
  //** i am aware this is because i insisted on spawning too many spinning squares
}
