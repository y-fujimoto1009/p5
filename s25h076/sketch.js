let step = 0;
function setup() {
createCanvas(400, 400);
frameRate(60);
}
function draw() {
background(255);
stroke(10, 30, 100);
strokeWeight(10);
fill(255);
// 小円アニメーション（左右から）
 let upX = lerp(700, 150, min(step / 60, 1));
let downX = lerp(100, 250, min(step / 60, 1));
circle(upX, 200, 50);
circle(downX, 200, 50);
// 大円アニメーション（拡大）
 let bigSize = lerp(100, 90, constrain((step - 60) / 30, 0, 1));
if (step > 60) {
circle(200, 200, bigSize);
}
// 斜めラインアニメーション（線が伸びる）
 if (step > 90) {
let x1 = 160;
let y1 = 225;
let x2 = lerp(100, 240, constrain((step - 90) / 30, 0, 1));
let y2 = lerp(100, 175, constrain((step - 90) / 30, 0, 1));
line(x1, y1, x2, y2);
}
// テキストアニメーション（フェードイン）
 if (step > 120) {
let t = constrain((step - 180) / 60, 0, 1);
let moveY = lerp(20, 0, t);
let alpha = t * 255;
fill(10, 30, 100, alpha);
noStroke();
textSize(50);
   fill(255,0,0);
textAlign(CENTER);
text("大阪産業大学", width / 2, 300 + moveY);
}
step++;
}
