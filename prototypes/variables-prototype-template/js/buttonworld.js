/**
 * "Button World"
 * Joel P.
 *
 * Button world, with buttons. Canvas features many circle-shaped button objects that change color when the cursor is hovered over them. When the cursor leaves, the color will revert (using if-else)
 */

function setup() {
  createCanvas(900, 900);
  }

function draw() {
  background(220);
for(var x=0; x<=width; x=x+40){
  for(var y=0; y<=height; y=y+40){
    buttons(x, y, 57);
  }
}
}

function buttons(x, y, d){ // makes scale-shaped "buttons" appear on the canvas
  mouseLocation(x,y,d); // compares the cursor's location to that of any existing button

  let mouseOver = mouseLocation(x, y, d);

  if(mouseOver){
    fill(245, 73, 39)
  }else{
    fill(53, 39, 245)
  }
  noStroke();
  circle(x, y, d); // shape of "button" objects
}

function mouseLocation(x, y, d){

  let mouseDist = dist(mouseX, mouseY, x, y);

  return(mouseDist < (d/2));

}
