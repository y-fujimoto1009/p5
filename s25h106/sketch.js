let t = 0;                    
let speed = 0.005;         
let ringSize = 12;            
let maxRingSize = 120;        
let state = 'move';          
let c = 0;                    
let cSpeed = 0.02;            
const centerPos = { x: 190, y: 100 };

function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  
  if (state === 'end') {
    
    noStroke();
    text('大阪産業大学', width/2, height/2 + 120/2 + 10);
  } else {
  
    updateAnimation();
  }
}

function updateAnimation() {
}

function draw() {
  background(255);
  stroke(0, 0, 128);    // 紺色の線
  strokeWeight(6);
  noFill();
  drawSShape();

  if (state === 'move') {
    t = min(t + speed, 1);
    let p = pointOnPath(t);
    strokeWeight(4);
    ellipse(p.x, p.y, ringSize);
    if (t >= 1) state = 'toCenter';

  } else if (state === 'toCenter') {
    c = min(c + cSpeed, 1);
    let endP = pointOnPath(1);
    let x = lerp(endP.x, centerPos.x, c);
    let y = lerp(endP.y, centerPos.y, c);
    strokeWeight(4);
    ellipse(x, y, ringSize);
    if (c >= 1) state = 'grow';

  } else if (state === 'grow') {
    ringSize = min(ringSize + 6, maxRingSize);
    strokeWeight(4);
    ellipse(centerPos.x, centerPos.y, ringSize);
    if (ringSize >= maxRingSize) state = 'end';

  } else if (state === 'end') {
    strokeWeight(4);
    ellipse(centerPos.x, centerPos.y, ringSize);
  }
}

function drawSShape() {
  arc(150, 100, 80, 80, PI/2, 3*PI/2);
  line(150, 140, 230, 60);
  arc(230, 100, 80, 80, -PI/2, PI/2);
}


function pointOnPath(tt) {
  if (tt < 0.4) {
    let u = map(tt, 0, 0.4, 0, 1);
    let a = lerp(3 * PI / 2, PI / 2, u);
    return {
      x: 150 + 40 * cos(a),
      y: 100 + 40 * sin(a)
    };
  } else if (tt < 0.6) {
    let u = map(tt, 0.4, 0.6, 0, 1);
    return {
      x: lerp(150, 230, u),
      y: lerp(140, 60, u)
    };
  } else {
    let u = map(tt, 0.6, 1, 0, 1);
    let a = lerp(-PI / 2, PI / 2, u);
    return {
      x: 230 + 40 * cos(a),
      y: 100 + 40 * sin(a)
    };
  }
} 