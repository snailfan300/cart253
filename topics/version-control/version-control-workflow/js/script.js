/**
* git example
* sydney perron
* 
* sample code for version control
* draw me a nice pyramid
* also i'm copying this by hand because i cannot
* do it with the apple mouse provided in the lab
* /

"use strict";
/** create a canvas, hides cursor
 */
function setup() {
    // 640x480 canvas
    createCanvas(640, 640);
    // Don't show cursor vvv
    noCursor();
}

function draw(){
    background(0, 0, 0);
    const levels = 10;
    for (let level = levels; level > 0; level--){
        push();
        const shade = map(level, 1, levels, 10, 255);
        noStroke();
        fill(shade, shade, 0);
        rectMode(CENTER);
        rect(320, 320, level * 48, level * 48);
        pop();
    }
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}