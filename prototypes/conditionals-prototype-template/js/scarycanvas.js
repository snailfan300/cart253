/**
 * "Scary Canvas"
 * Joel P.
 *
 * My friend said the colors looked scary. You hold down the cursor to draw, and otherwise you erase.
 * Would be more technically complex (ie. more palettes) but I can't quite figure it out and unfortunately I'm a little behind on starting these because I had electricians in my house all week which sort of stopped me from working properly. It's okay though
 *
 *
 *** Reminder to self: switch to hsl mode and add 2 random variables for pen and brush, so you can change their colors with keyIsPressed ***
 */

 //

const backgroundColor = {
  hue: undefined, // this will be defined as a random value between 0 and 360 (the maximum hue value in hsb mode). you can't declare a random variable above setup because neither p5 nor the universe likes it when you do that
  saturation: 55,
  brightness: 90
}

const penColor = {
  hue: undefined, // ^ see above
  saturation: 55,
  brightness: 90
}
 function setup() {
   colorMode(HSB);

   backgroundColor.hue = random(0, 360);
   penColor.hue = random(0, 360);

   createCanvas(900, 900);
   background(backgroundColor.hue, backgroundColor.saturation, backgroundColor.brightness); // background is intentionally in setup to stop it from refreshing in draw(). as long as it isn't refreshing constantly my cursor shenanigans will persist on the canvas until i refresh
      textAlign(CENTER);
 }

 function draw() {

   pen();
   textSize(55);
   text('click to draw', width/2, 60); // instruction text to get my intent across better
   text('release to erase', width/2, 110);
   text('any key to reroll colors', width/2, 160);

   if (keyIsPressed === true) { // force refresh setup to recalculate the random values; the random value will change if setup is called again
     setup();
   }
 }


// functions vvv

 function pen(){ // if this function detects that left click is being held down, it will fill the "pen" with a different color. otherwise, this color will be that of the background. then, if you move your cursor around the canvas, it will erase what you just drew
   push();
 if (mouseIsPressed) {
   fill(penColor.hue, penColor.saturation, penColor.brightness);
 }
   else {
     fill(backgroundColor.hue, backgroundColor.saturation, backgroundColor.brightness);
   }
     noStroke(); //
     circle(mouseX, mouseY, 40); // the 'fills' above will modify that of this circle, which follows the cursor at all times, even as the background color
     pop();
 }
