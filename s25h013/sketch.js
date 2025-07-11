let step = 0;
let stars = []; 
let finalSparkles = []; 
function setup() {
  createCanvas(400, 400);
  frameRate(60);

  
  for (let i = 0; i < 50; i++) { 
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3), 
      alpha: random(0, 255), 
      speed: random(0.5, 2) 
    });
  }
}

function draw() {
  background(255);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    fill(255, 255, 220, star.alpha);
    noStroke();
    circle(star.x, star.y, star.size);

    star.alpha += star.speed;
    if (star.alpha > 255 || star.alpha < 0) {
      star.speed *= -1;
    }
  }

  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'rgba(0,0,0,0)'; 


  stroke(10, 30, 100);
  strokeWeight(10);
  fill(255);

  let leftX = lerp(0, 150, min(step / 60, 1));
  let rightX = lerp(400, 250, min(step / 60, 1));
  circle(leftX, 200, 50);
  circle(rightX, 200, 50);
  
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1));
  if (step > 60) {

    if (bigSize > 0) { 
      let glowAlpha = map(bigSize, 0, 90, 0, 100); 
      noStroke();
      fill(255, 255, 200, glowAlpha);
      circle(200, 200, bigSize * 1.2);
    }
    // --- きらきら演出ここまで ---

    stroke(10, 30, 100);
    fill(255);
    circle(200, 200, bigSize);
  }

  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2);
  }

  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1);
    let moveY = lerp(20, 0, t);
    let alpha = t * 255;

    if (t > 0.05) { 
      let textGlowAlpha = map(t, 0.05, 1, 0, 80); 
      drawingContext.shadowOffsetX = 0; 
      drawingContext.shadowOffsetY = 0;
      drawingContext.shadowBlur = 10 + sin(frameCount * 0.1) 
      drawingContext.shadowColor = `rgba(255, 255, 150, ${textGlowAlpha})`;
    } else {
      drawingContext.shadowBlur = 0;
      drawingContext.shadowColor = 'rgba(0,0,0,0)'; 
    }

    fill(10, 30, 100, alpha);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("大阪産業大学", width / 2, 300 + moveY);

    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 'rgba(0,0,0,0)'; 
  }

  if (step === 180) { 
    for (let i = 0; i < 200; i++) { 
      finalSparkles.push(new Sparkle(random(width), random(height)));
    }
  }
  
  for (let i = finalSparkles.length - 1; i >= 0; i--) {
    finalSparkles[i].update();
    finalSparkles[i].display();
    if (finalSparkles[i].isFinished()) {
      finalSparkles.splice(i, 1); 
    }
  }
  
  step++;
}

class Sparkle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.lifespan = 255;
    this.size = random(1, 4); 
    this.color = color(255, 255, random(180, 255), this.lifespan); 
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= random(3, 7); 
    this.color.setAlpha(this.lifespan); 
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
  }

  isFinished() {
    return this.lifespan < 0;
  }
}