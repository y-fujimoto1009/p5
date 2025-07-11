let step = 0;
let y = 0
let stopy = 200
let y2 =0
let stopy2 = 200
let circleSize = 400;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  y2= height
  }

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  
// 小円アニメーション（左右から）
 ellipse (150, y, 50,50)
  if (y < stopy)
  y +=4
  ellipse (250, y2, 50,50)
  if (y2 > stopy2)
  y2 -=4
  
// 大円アニメーション（拡大）
 fill(255);
  ellipse(width / 2, height / 2, circleSize, circleSize);
  
  // Animate size decreasing smoothly
  if (circleSize > 20) {
    circleSize = lerp(circleSize, 100, 0.05); // smooth shrink
}

  
// 斜めラインアニメーション（線が伸びる）
 if (step > 90) {
  let x1 = 160;
  let y1 = 225;
  let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
  let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
}
  
// テキストアニメーション（フェードイン）
 if (step > 120) {
  let t = constrain((step - 120) / 60, 0, 1);
  let moveY = lerp(20, 0, t);
  let alpha = t * 255;
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);
  }
  step++;
}