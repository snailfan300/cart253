/**
 * "Scary Canvas"
 * Joel P.
 *
 * My friend said the colors looked scary. You hold down the cursor to draw, and otherwise you erase.
 * Would be more technically complex (ie. more palettes) but I can't quite figure it out and unfortunately I'm a little behind on starting these because I had electricians in my house all week which sort of stopped me from working properly. It's okay though
 */

 //

 function setup() {
   createCanvas(900, 900);
   background("#9A031E"); // background is intentionally in setup to stop it from refreshing in draw(). as long as it isn't refreshing constantly my cursor shenanigans will persist on the canvas until i refresh
 }

 function draw() {

   pen();
 }

 function pen(){ // if this function detects that left click is being held down, it will fill the "pen" with a different color. otherwise, this color will be that of the background. then, if you move your cursor around the canvas, it will erase what you just drew
   push();
 if (mouseIsPressed) {
   fill("#5F0F40");
 }
   else {
     fill("#9A031E")
   }
     noStroke(); //
     circle(mouseX, mouseY, 70); // the 'fills' above will modify that of this circle, which follows the cursor at all times, even as the background color
     pop();
 }
