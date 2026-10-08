/**
 * "Scary Canvas"
 * Joel P.
 *
 * My friend said the colors looked scary. You hold down the cursor to draw, and otherwise you erase. Would be more technically complex (ie. more palettes) but I can't quite figure it out and unfortunately I'm a little behind on starting these because I had electricians in my house all week which sort of stopped me from working properly. It's okay though
 */

 //

 function setup() {
   createCanvas(900, 900);
   background("#9A031E");
 }

 function draw() {

   pen();
 }

 function pen(){
 if (mouseIsPressed) {
   fill("#5F0F40");
 }
   else {
     fill("#9A031E")
   }
     noStroke();
     circle(mouseX, mouseY, 100);
 }
