let step = 0;
let exploded = false;
let particles = [];
let balloonY;

let x = 200;
let y = 450;
let d = 80;

let x2 = 200;
let y2 = 450;
let d2 = 80;

let x3 = 200;
let y3 = 450;
let d3 = 80;

let x4 = 200;
let y4 = 450;
let d4 = 80;

let x5 = 200;
let y5 = 450;
let d5 = 80;

let x6 = 200;
let y6 = 450;
let d6 = 80;

function explode() {
  for (let i = 0; i < 30; i++) {
    let angle = random(TWO_PI);
    let r = random(5, 8); // パーティクルのサイズ
    let speed = random(2, 5);
    let vx = cos(angle) * speed;
    let vy = sin(angle) * speed;
    particles.push(new Particle(width / 2, balloonY, vx, vy, r));
  }
}

class Particle {
  constructor(x, y, vx, vy, size) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.life = 60;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }

  show() {
    if (this.life > 0) {
      fill(this.color);
      circle(this.x, this.y, this.size);
    }
  }
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  balloonY = height + 50; // 画面下からスタート
  textFont('sans-serif');
}

function draw() {
  background(255);
  drawCircle();//関数を定義する。
  drawCircle2();
  drawCircle3();
  drawCircle4();
  drawCircle5();
  drawCircle6();

  if (!exploded) {
    // 風船が浮上して膨張
    balloonY = lerp(height + 50, 200, constrain(step / 120, 0, 1));
    let balloonSize = lerp(0, 200, constrain(step / 120, 0, 1));
    fill(255, 100, 200);
    circle(width / 2, balloonY, balloonSize);

    if (step >= 120) {
      explode();
      exploded = true;
    }

    step++;
  } else {
    // パーティクル表示
    for (let p of particles) {
      p.update();
      p.show();
    }

    // ロゴ & テキスト表示（破裂後に遅れて登場）
    if (step > 120) {
      // ロゴの顔部分
      stroke(10, 30, 100);
      strokeWeight(10);
      fill(255);
      circle(150, 200, 50);   // 左目
      circle(250, 200, 50);   // 右目
      circle(200, 200, 90);   // 顔輪郭
      line(160, 225, 240, 175); // 口
      noStroke();

      // テキストアニメーション（フェードイン）
      if (step > 140){
      let t = constrain((step - 140) / 50, 0, 1);
      let moveY = lerp(400,300,t);
      let alpha = lerp(0,255,t);
        
      fill(10, 30, 100, alpha);
      textSize(30);
      textAlign(CENTER, CENTER);
      text("大阪産業大学", width / 2, moveY);
      }
    }

    step++;
  }
}

function drawCircle(){
  if(y < -200){
    x = random(400);
    y = 450;
    d = 80;
  }
  stroke(0);
  line(x,y,x,y+80);
  fill(255,182,193);
  noStroke();
  circle(x,y,d);
  y = y - 10
}

function drawCircle2(){
  if(y2 < -220){
    x2 = random(400);
    y2 = 450;
    d2 = 80;
  }
  stroke(0);
  line(x2,y2,x2,y2+80);
  fill(170,240,209);
  noStroke();
  circle(x2,y2,d2);
  y2 = y2 - 10
}

function drawCircle3(){
  if(y3 < -220){
    x3 = random(400);
    y3 = 450;
    d3 = 80;
  }
  stroke(0);
  line(x3,y3,x3,y3+80);
  fill(174,198,207);
  noStroke();
  circle(x3,y3,d3);
  y3 = y3 - 10
}

function drawCircle4(){
  if(y4 < -240){//もしｄが1200を超えたら
    x4 = random(400);
    y4 = 450;
    d4 = 80;
  }
  stroke(0);
  line(x4,y4,x4,y4+80);
  fill(230,230,250);
  noStroke();
  circle(x4,y4,d4);
  y4= y4 - 10
}

function drawCircle5(){
  if(y5 < -260){//もしｄが1200を超えたら
    x5 = random(400);
    y5 = 450;
    d5 = 80;
  }
  stroke(0);
  line(x5,y5,x5,y5+80);
  fill(255,255,204);
  noStroke();
  circle(x5,y5,d5);
  y5 = y5 - 10
}

function drawCircle6(){
  if(y6 < -280){//もしｄが1200を超えたら
    x6 = random(400);
    y6 = 450;
    d6 = 80;
  }
  stroke(0);
  line(x6,y6,x6,y6+80);
  fill(255,213,153);
  noStroke();
  circle(x6,y6,d6);
  y6 = y6 - 10
}