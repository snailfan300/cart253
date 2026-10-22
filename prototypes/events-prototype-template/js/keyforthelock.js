new p5();  // so basically i had this issue in which i was defining the parameters of a p5 arc as a global variable. notably if you try to define variables using stuff like random(), or in my case, radians, above setup, the program will keep rejecting it saying the variables haven't been defined in the current scope or something. however if i moved my global variable to setup, suddenly they wouldn't be global variables anymore and functions would keep rejecting them as well. i believe this is because the p5 library is only initialized at setup, but i genuinely NEEDED my radian parameters defined, so i found the only fix was to force p5 to initialize before setup, hence "new p5()." i'm so bummed...

const lockShackle = { // global variable parameters for the arc portion of the graphic lock, so they can be modified using functions
x: 450,
y: 255,
width: undefined,
height: undefined,
shackle: HALF_PI,

shackles: {

 shackleOpen: PI + PI,
 shackleOpen2: undefined, // arc has a "start" and "stop" position, the "2" variants of the shackles are the "start" positions that do not change which is why they are undefined
 shackleClosed: HALF_PI,
 shackleClosed2: undefined // i'm not sure if including a second undefined "start" position for the second version of the shackle does anything and might be spaghetti code on my part but i'm doing it because i feel indebted
},
entryKey: 8 // key code is for the backspace key. was originally supposed to be key code 16, which i believe is shift, but i couldn't get it to work when testing for some reason. also used to be enter but i believe this one was causing conflicts when being used as an input
}

const textElement = { // text element returns; 2 versions of text display with instructions
  x: undefined,
  y: 60,
  size: 55,
  text: 'find the right key to open the lock',
  texts: {
  var1: 'find the right key to open the lock',
  var2: 'you did it!!',
  }
}

function setup() { // setup with the three musketeers (rectmode, textalign, ellipsemode) because i hate anything that isn't calculated from center
createCanvas(900, 900);
rectMode(CENTER);
textAlign(CENTER);
ellipseMode(CENTER);

}

function draw() { // draw places the lock's graphic elements as well as the text on the canvas. i wanted to make sure i wasn't running any keyIsPressed stuff here since i am well aware that draw updates once every frame or so, which i don't want to happen; i only want my lock to update once and then stop updating
background('#8F3646');

push();
textSize(textElement.size);
text(textElement.text, width/2, textElement.y);
pop();

  //lock shackle
push();
noFill();
strokeWeight(45);
stroke('#A6A698');
arc(lockShackle.x, lockShackle.y, 250, 250, PI - QUARTER_PI, lockShackle.shackle);

//lock body
push();
noStroke();
fill('#A67E47');
rect(width/2, height/2 + 50, 425, 400, 20);

//keyhole
push();
noStroke();
fill('#171104');
ellipse(width/2, height/2 + 20, 80);

triangle(width/2, height/2 + 10, width/2 + 40, height/2 + 140, width/2 - 40, height/2 + 140);
pop();
pop();
pop();
}

//function openLock() {


//function closedLock() {
//}

function keyPressed(event) { // essentially if you press key code 66 (b) and it matches the designated "entry key" value stated in the lockShackle constant, it will run the code block inside, which just changes the arc's "stop" position so it looks like it's been opened + the text will update to show the second variant
if (event.keyCode === lockShackle.entryKey) {
  lockShackle.shackle = lockShackle.shackles.shackleOpen;
  textElement.text = textElement.texts.var2;
}
}
