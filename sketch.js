let pos1 = 0;
let pos2 = 0;
let pos3 = 0; 
let pos4 = 0;
let pos5 = 0;
let pos6 = 0;
let pos7 = 0;
let pos8 = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  
  background(0);

  translate(width/2, height/2);

  noFill();
  stroke(250);
  const radius = width * 0.3;
  ellipse(0, 0, radius*2, radius*2);

  fill(240, 140, 20);
  let x7 = cos(radians(pos8)) * radius;
  let y7 = sin(radians(pos8)) * radius;
  ellipse(x7, y7, 70, 70);

  fill(250, 0, 250);
  let x5 = cos(radians(pos6)) * radius;
  let y5 = sin(radians(pos6)) * radius;
  ellipse(x5, y5, 60, 60);

  fill(250);
  let x = cos(radians(pos1)) * radius;
  let y = sin(radians(pos1)) * radius;
  ellipse(x, y, 50, 50);

  fill(250, 250, 0);
  let x4 = cos(radians(pos5)) * radius;
  let y4 = sin(radians(pos5)) * radius;
  ellipse(x4, y4, 40, 40);

  fill(0, 250, 0);
  let x2 = cos(radians(pos3)) * radius;
  let y2 = sin(radians(pos3)) * radius;
  ellipse(x2, y2, 30, 30);

  fill(0, 0, 250);
  let x3 = cos(radians(pos4)) * radius;
  let y3 = sin(radians(pos4)) * radius;
  ellipse(x3, y3, 20, 20);

  fill(250, 0, 0);
  let x1 = cos(radians(pos2)) * radius;
  let y1 = sin(radians(pos2)) * radius;
  ellipse(x1, y1, 15, 15);

  fill(0, 250, 250);
  let x6 = cos(radians(pos7)) * radius;
  let y6 = sin(radians(pos7)) * radius;
  ellipse(x6, y6, 10, 10);
  


  pos8 = pos8 + 0.5;
  pos6 = pos6 + 0.75;
  pos1 = pos1 + 1;
  pos5 = pos5 + 1.25;
  pos3 = pos3 + 1.5;
  pos4 = pos4 + 1.75;
  pos2 = pos2 + 2;
  pos7 = pos7 + 2.25;
  print(pos1);

}
