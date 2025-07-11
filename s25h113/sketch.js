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
let leftX = lerp(0, 150, min(step / 60, 1));
let rightX = lerp(400, 250, min(step / 60, 1));
circle(leftX, 200, 50);
circle(rightX, 200, 50);
  //大円
circle(200, 200, 100);
// 斜めラインアニメーション（線が伸びる）
 //if (step > 90) {
let x1 = 160;
let y1 = 225;
let x2 = (160, 240);
let y2 = (230, 175);
line(x1, y1, x2, y2);
//}
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