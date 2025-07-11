function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(20);
  fill(0);
}

let angle = 0;
let textAlpha = 0;

function draw() {
  background(255);
  
  // ロゴ（仮の円形ロゴ）の回転
  push();
  translate(width/2, height/2 - 50);
  rotate(angle);
  stroke(0);
  noFill();
  ellipse(0, 0, 80, 80);
  ellipse(0, 0, 40, 40);
  line(-60, 0, 60, 0); // ロゴっぽい線
  pop();
  
  angle += 1; // 回転
  
  // 大阪産業大学の文字をフェードイン
  if (frameCount > 60 && textAlpha < 255) {
    textAlpha += 3;
  }
  
  fill(0, textAlpha);
  noStroke();
  text("大阪産業大学", width/2, height/2 + 80);
}