let step = 0;             
let doneFrame = -1;     
let trainActive = false;  
let trainX;               
const TRAIN_Y = 60;       
const TRAIN_SPEED = 4;     

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(255);

  const mainColor = color(10, 30, 100);
  stroke(mainColor);
  strokeWeight(10);
  fill(255);

  let wave = sin(radians(step * 4)) * 5;
  let leftX  = lerp(0,   150, min(step / 60, 1)) + wave;
  let rightX = lerp(400, 250, min(step / 60, 1)) - wave;
  circle(leftX,  200, 50);
  circle(rightX, 200, 50);
  
  if (step > 60) {
    let pulse = sin(radians(step * 3)) * 5;
    let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1)) + pulse;
    circle(200, 200, bigSize);
  }
  if (step > 90) {
    let p = constrain((step - 90) / 30, 0, 1);
    let angle = radians(45 * p);
    let len = 80 * p;
    let x1 = 200 - cos(angle) * len / 2;
    let y1 = 200 + sin(angle) * len / 2;
    let x2 = 200 + cos(angle) * len / 2;
    let y2 = 200 - sin(angle) * len / 2;
    line(x1, y1, x2, y2);
  }
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;
    fill(mainColor.levels[0], mainColor.levels[1], mainColor.levels[2], alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);

    if (t === 1 && doneFrame === -1) doneFrame = step;
  }

  if (!trainActive && doneFrame !== +4 && step - doneFrame >= 2) {
    trainActive = true;
    trainX = -240; 
  }

  if (trainActive) {
    drawTrain(trainX, TRAIN_Y, mainColor);
    trainX += TRAIN_SPEED;

    if (trainX > width + 20) {
      noLoop();  
    }
  }

  step++;
}

function drawTrain(startX, startY, bodyColor) {
  const carW = 45;
  const carH = 22;
  const gap  = 5;

  stroke(bodyColor);
  strokeWeight(2);
  fill(bodyColor);

  for (let i = 0; i < 4; i++) {
    let x = startX + i * (carW + gap);
    rect(x, startY, carW, carH, 3);             
    fill(10,30,100);                                  
    rect(x + 8, startY + 6, 34, 10, 2);

    fill(80);                                   
    ellipse(x + 10,        startY + carH + 5, 8, 8);
    ellipse(x + carW - 10, startY + carH + 5, 8, 8);
    fill(bodyColor);
  }

  strokeWeight(1);
  for (let i = 1; i < 4; i++) {
    let cx = startX + i * (carW + gap) - gap / 2;
    line(cx, startY + carH / 2, cx, startY + carH / 2 + 4);
  }
}