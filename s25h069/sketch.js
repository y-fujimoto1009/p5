let step = 0;
let chars = ["大", "阪", "産", "業", "大", "学"];
let charScale = [];
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  textSize(22);
  textAlign(CENTER, CENTER);
 for (let i = 0; i < chars.length; i++) {
    charScale.push(0);
  }
}

function draw() {
  background(255);
  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);
  let smallT = constrain(step / 60, 0, 1);
  let smallSize = lerp(0, 50, smallT);
  circle(150, 200, smallSize);
  circle(250, 200, smallSize);
  if (step > 60) {
    let bigT = constrain((step - 60) / 30, 0, 1);
    let bigSize = lerp(0, 90, bigT);
    circle(200, 200, bigSize);
  }
  if (step > 90) {
    let lineT = constrain((step - 90) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, lineT);
    let y2 = lerp(230, 175, lineT);
    line(x1, y1, x2, y2);
  }
  if (step > 120) {
    let textT = constrain((step - 120) / 60, 0, 1);
    fill(10, 30, 100);
    noStroke();
    
    let totalWidth = chars.length * 24;
    let startX = width / 2 - totalWidth / 2;

    for (let i = 0; i < chars.length; i++) {
      let scaleT = constrain((step - 120 - i * 5) / 30, 0, 1);
      let s = lerp(0, 1, scaleT);
      push();
      translate(startX + i * 24, 300);
      scale(s);
      text(chars[i], 0, 0);
      pop();
    }
  }

  step++;
}