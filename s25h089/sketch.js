let step = 0;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
}
function draw() {
  background(255);

  let fadeAlpha = 1.0;
  if (step > 150 && step <= 210) {
    fadeAlpha = map(step, 150, 210, 1.0, 0.0);
  } else if (step > 210) {
    fadeAlpha = 0.0;
  }

  if (fadeAlpha > 0) {
    noFill();
    for (let i = 0; i < 5; i++) {
      let t = (step + i * 30) % 150;
      let alpha = map(t, 0, 150, 100, 0) * fadeAlpha;
      stroke(150, 150, 255, alpha);
      strokeWeight(2);
      circle(200, 200, t * 2);
    }
  }

  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  let smallSize = 0;
  if (step <= 60) {
    smallSize = lerp(0, 50, constrain(step / 60, 0, 1));
  } else {
    smallSize = 50;
  }
  circle(leftX, 200, smallSize);
  circle(rightX, 200, smallSize);

  if (step > 60) {
    let tBig = constrain((step - 60) / 30, 0, 1);
    let bigSize = easeOutBounce(tBig) * 90;
    circle(200, 200, bigSize);
  }

  if (step > 90) {
    let tLine = constrain((step - 90) / 30, 0, 1);
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  if (step > 90) {
    let textStr = "大阪産業大学";
    let tGlobal = constrain((step - 90) / 60, 0, 1);
    let moveY = lerp(20, 0, tGlobal);
    textSize(22);
    noStroke();
    let charWidths = [];
    let totalWidth = 0;
    for (let i = 0; i < textStr.length; i++) {
      let w = textWidth(textStr[i]);
      charWidths.push(w);
      totalWidth += w;
    }
    let startX = width / 2 - totalWidth / 2;
    let x = startX;
    for (let i = 0; i < textStr.length; i++) {
      let delay = i * 8;
      let tChar = constrain((step - 90 - delay) / 30, 0, 1);
      let alpha = tChar * 255;
      fill(10, 30, 100, alpha);
      text(textStr[i], x, 290 + moveY);
      x += charWidths[i];
    }
  }

  step++;
}

function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) return n1 * x * x;
  else if (x < 2 / d1) return n1 * (x -= 1.5 / d1) * x + 0.75;
  else if (x < 2.5 / d1) return n1 * (x -= 2.25 / d1) * x + 0.9375;
  else return n1 * (x -= 2.625 / d1) * x + 0.984375;
}
