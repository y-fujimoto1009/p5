let step = 0;
let bubbles = [];
let faceStep = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  // 自動で小さいバブルを追加
  if (frameCount % 5 === 0) {
    for (let i = 0; i < 2; i++) {
      let b = new Bubble();
      b.d = random(10, 30);  // 小さめのバブルに変更
      b.vy = -random(1, 3);
      bubbles.push(b);
    }
  }

  // バブルアニメーション
  for (let b of bubbles) {
    b.update();
    b.show();
  }
  bubbles = bubbles.filter(b => b.alpha > 0);

  // 顔パーツ
  if (step > 0) {
    let t = constrain(step / 60, 0, 1);
    let circleSize = lerp(0, 50, t);
    noStroke();
    fill(255);
    circle(150, 200, circleSize);
    stroke(10, 30, 100);
    strokeWeight(10);
    arc(150, 200, circleSize, circleSize, 60, 300);
    noStroke();
    fill(255);
    circle(250, 200, circleSize);
    stroke(10, 30, 100);
    strokeWeight(10);
    arc(250, 200, circleSize, circleSize, 240, 480);
  }

  if (step > 60) {
    let t = constrain((step - 60) / 30, 0, 1);
    let angleSpan = lerp(0, 180, t);
    noFill();
    stroke(10, 30, 100);
    strokeWeight(10);
    arc(200, 200, 90, 90, 180, 180 + angleSpan);
    arc(200, 200, 90, 90, 0, angleSpan);
  }

  if (step > 90) {
    let t = constrain((step - 90) / 30, 0, 1);
    stroke(10, 30, 100, 255);
    strokeWeight(10);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, t);
    let y2 = lerp(230, 175, t);
    line(x1, y1, x2, y2);
  }

  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let alpha = t * 255;
    let moveY = lerp(20, 0, t);
    let wobble = sin(radians(frameCount * 3)) * 5;
    let scaleWiggle = 1 + sin(radians(frameCount * 5)) * 0.05;

    push();
    translate(width / 2 + wobble, 300 + moveY);
    scale(scaleWiggle);
    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", 0, 0);
    pop();
  }

  step++;
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height;
    this.d = random(20, 60);
    this.alpha = 150;
    this.vy = random(-1, -3);
    this.vx = random(-0.5, 0.5);
    this.amp = random(10, 20);
    this.freq = random(0.01, 0.03);
    this.baseY = this.y;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy + sin(frameCount * this.freq) * this.amp * 0.01;
    this.alpha -= 1;
  }
  show() {
    fill(173, 216, 230, this.alpha);
    noStroke();
    circle(this.x, this.y, this.d);
  }
}

function mousePressed() {
  for (let i = 0; i < 8; i++) {
    let b = new Bubble();
    b.vy = -random(2, 5);
    bubbles.push(b);
  }
}

