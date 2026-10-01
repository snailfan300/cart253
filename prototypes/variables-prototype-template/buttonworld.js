function setup() {
  createCanvas(400, 400);
  }

function draw() {
  background(220);
  //let size = 50
for(var x=0; x<=width; x=x+40){
  for(var y=0; y<=height; y=y+40){
    buttons(x, y, 40);
  }
}
}
