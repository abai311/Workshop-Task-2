function setup() {
  createCanvas(400, 400);
    background(220);
}

function mousePressed(){
  setTimeout(makeHouse, 2000, random(0, width), random (0,height), 50, color(255,0,0))
  
}

function makeHouse(xPos, yPos, stories, color){
  fill(color);
  noStroke();
  ellipse(56, 46, 55, 55);
  
  
}