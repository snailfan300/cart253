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
  hue: undefined,
  saturation: 55,
  brightness: 90
}

const penColor = {
  hue: undefined,
  saturation: 55,
  brightness: 90
}
 function setup() {
   colorMode(HSB);

   backgroundColor.hue = random(0, 360);
   penColor.hue = random(0, 360);

   createCanvas(900, 900);
   background(backgroundColor.hue, backgroundColor.saturation, backgroundColor.brightness); // background is intentionally in setup to stop it from refreshing in draw(). as long as it isn't refreshing constantly my cursor shenanigans will persist on the canvas until i refresh
 }

 function draw() {

   pen();
   textSize(55);

   if (keyIsPressed === true) {
     setup();
   }
 }

 function pen(){ // if this function detects that left click is being held down, it will fill the "pen" with a different color. otherwise, this color will be that of the background. then, if you move your cursor around the canvas, it will erase what you just drew
   push();
 if (mouseIsPressed) {
   fill(penColor.hue, penColor.saturation, penColor.brightness);
 }
   else {
     fill(backgroundColor.hue, backgroundColor.saturation, backgroundColor.brightness);
   }
     noStroke(); //
     circle(mouseX, mouseY, 70); // the 'fills' above will modify that of this circle, which follows the cursor at all times, even as the background color
     pop();
 }
