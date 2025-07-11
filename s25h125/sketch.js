let myText = "大阪産業大学";
let fixedFontSize = 20;
let maxAlpha = 255;
let currentAlpha = 0;
let fadeInSpeed = 1;

let circleProgress = 0;   // 円の描画進行度 (0からTWO_PIまで)
let drawSpeed = 0.05;     // 円が描かれる速度

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  angleMode(RADIANS);
}

function draw() {
  background(250); 

  if (circleProgress < TWO_PI) {
    circleProgress += drawSpeed;
  }

  fill(255,255,255); 
  stroke(10, 30, 100);
  strokeWeight(10);
  arc(150, 200, 50, 50, 0, min(circleProgress, TWO_PI));
  arc(250, 200, 50, 50, 0, min(circleProgress, TWO_PI));
  arc(200, 200, 100, 100, 0, min(circleProgress, TWO_PI));
  arc(200,200,100,100,0,min(circleProgress,TWO_PI));
  line(150, 225, 240, 175);
  fill(255,255,255);
  textSize(fixedFontSize);
  textAlign(CENTER, CENTER);
  text(myText, width / 2, height / 1.4);

  currentAlpha += fadeInSpeed;
  currentAlpha = constrain(currentAlpha, 0, maxAlpha);
}
