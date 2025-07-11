let step = 0;
function setup() {
createCanvas(400, 400);
frameRate(60);
}
function draw() {
background(135,206,235);
stroke(10, 30, 100);
strokeWeight(10);
fill(255);
function setup() {
  createCanvas(800, 600); // キャンバスのサイズを設定
  noLoop(); // 描画を1回だけ実行
}

function draw() {
  background(135, 206, 235); // 空の色（薄い青）

  let centerX = width / 2; // 虹の中心X座標
  let centerY = height; // 虹の中心Y座標（画面下）
  let radius = 300; // 虹の半径

  let colors = [
    color(255, 0, 0),    // 赤
    color(255, 165, 0),  // オレンジ
    color(255, 255, 0),  // 黄色
    color(0, 255, 0),    // 緑
    color(0, 0, 255),    // 青
    color(75, 0, 130),   // 藍
    color(238, 130, 238) // 紫
  ];

  noFill(); // 塗りつぶしなし
  strokeWeight(20); // 線の太さ

  for (let i = 0; i < colors.length; i++) {
    stroke(colors[i]); // 線の色を設定
    arc(centerX, centerY, radius * 2, radius * 2, PI, TWO_PI); // 円弧を描画
    radius -= 20; // 次の円弧を少し小さく
  }
}  
  
// 小円アニメーション（上から下）
 let up = lerp(0, 150, min(step / 60, 1));
let  down = lerp(0, 150, min(step / 60, 1));
circle(up, 200, 50);
circle(down, 200, 50);

// 大円アニメーション（拡大）
 let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
if (step > 60) {
circle(200, 200, bigSize);
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
