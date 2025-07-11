let angle = 0;
let colorShift = 0;
let showText = false;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // 角度を度数に
  textAlign(CENTER, CENTER);
  textSize(30);
}

function draw() {
  background(255);

  // 色変化
  let c = color(0, 50 + sin(colorShift) * 100, 200);
  fill(c);
  stroke(0,50 + sin(colorShift) * 100, 200);
  strokeWeight(6);

  translate(width / 2, height / 2);

 
  rotate(angle);

 
  noFill();
  ellipse(0, 0, 150, 80); 
  ellipse(0, 0, 150, 70);
  rotate(90);
  ellipse(0, 0, 100, 100); 
  rotate(-90); 
  fill(c);
  noStroke();
  ellipse(0, 0, 100); 

  angle += 1;
  colorShift += 1;
  
  if (angle > 180) {
    showText = true;
  }

  if (showText) {
    noStroke(0,50 + sin(colorShift) * 100, 200);
    fill(0);
    text("大阪産業大学", 0, 120);
  }
}
