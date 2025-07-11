let t = 0;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(28);
}

function draw() {
  background(255);
  translate(width / 2, height / 2 - 20);

  stroke(0, 64, 152);
  strokeCap(ROUND);

  let mainR = constrain(t * 2, 0, 100);
  let subOffset = constrain(t * 1.2, 0, 100);
  let subR = constrain(t * 1.5, 0, 60);
  let barLen = constrain(t * 1.5, 0, 150);
  let maxBar = mainR * cos(20);

  strokeWeight(20);
  noFill();
  ellipse(-subOffset, 0, subR); 
  ellipse(subOffset, 0, subR);  

  fill(255);
  strokeWeight(20);
  ellipse(0, 0, mainR * 2);

  // --- テキスト ---
  if (t >= 30) {
    noStroke();
    fill(0, 64, 152);
    text("大阪産業大学", 0, mainR + 60);
  }

  
  push();
  rotate(-20);
  stroke(0, 64, 152);
  strokeWeight(25);
  line(-min(barLen, maxBar), 0, min(barLen, maxBar), 0);
  pop();

  t += 1;
  if (t > 100) noLoop();
}
