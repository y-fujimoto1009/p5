let count = 0;
let x = 0;
let y = 200;
let u = 0;
let i = 50;
let x2 = 400;
let y2 = 200;
let u2 = 0;
let i2 = 50;
let x3 = 200;
let y3 = 0;
let u3 = 100;
let i3 = 0;
let x4 = 155;
let y4 = 226;
let u4 = 155;
let i4 = 226;
let x5 = 245;
let y5 = 174;
let u5 = 245;
let i5 = 174;
function setup() {
createCanvas(400, 400);
frameRate(60);
}
function draw() {
count += 1
background(255);
stroke(10, 30, 100);
strokeWeight(10);
fill(255);
if(x < 150){
  x += 3
}
  if(u < 50){
    u += 1
  }
ellipse(x, y, u, i)
if(x2 > 250){
  x2 -= 3
}
if(u2 < 50){
  u2 += 1
}
  ellipse(x2, y2, u2, i2)
if(count >= 50){
  if(y3 < 200){
    y3 += 3
  }
  if(i3 < 100){
    i3 += 2
  }
  ellipse(x3, y3, u3, i3)
}
if(count >= 120){
  if(u4 < 200){
    u4 += 2
  }
  if(i4 > 200){
    i4 -= 1
  }
  line(x4, y4, u4, i4)
  if(u5 > 200){
    u5 -= 2
  }
  if(i5 < 201){
    i5 += 1
  }
  line (x5, y5, u5, i5)
}
  if (count > 120) {
let t = constrain((count - 120) / 60, 0, 1);
let moveX = lerp(0, 10, t);
let alpha = t * 255;
let r = 0
let ree = r
fill(10, 30, 100, alpha);
noStroke();

textSize(ree);
textAlign(CENTER);
text("OSU", width / 2.25, 300 + moveX);
    text("大阪産業大学", width / 4, 300 + moveX);
    text("Osaka Sangyo University", width / 1.35, 300 + moveX);
}
  
  
  
}