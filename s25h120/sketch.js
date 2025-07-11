let step = 0;

function setup() {
createCanvas(400, 400);
frameRate(60);
}
function draw() {
background(255);
stroke(10, 30, 100);
strokeWeight(13);
fill(255);

 let leftX = lerp(100, 120, min(step / 30, 1));
let rightX = lerp(300, 280, min(step / 30, 1));
circle(leftX, 200, 80);
circle(rightX, 200, 80);
  
  if (step > 60) {
    
  let senterX = lerp(-10,500, min((step - 90) / 30, 1));
  let senterY = lerp(-10,500, min((step - 90) / 30, 1));

circle(senterX, senterY, 230);
  }
  
  if (step > 0) {
    
  let senter2X = lerp(270,100, min((step - 180) / 30, 1));
  let senter2Y = lerp(420,-20, min((step - 180) / 30, 1));

    strokeWeight(5);
circle(senter2X, senter2Y, 20);
    
  }
  
    if (step > 0) {
    
  let bigSize = lerp(0, 150, constrain((step - 270) / 35, 0, 1));
  let senter3Y = lerp(-20,200, min((step - 270) / 35, 1));

    strokeWeight(13);
circle(200, senter3Y, bigSize);
    
  }
  
  if (step > 0) {
    
  let linex1 = lerp(150, 130, constrain((step - 330) / 35, 0, 1));
  let liney1 = lerp(-20,235, min((step - 330) / 35, 1));
  let linex2 = lerp(0, 260, constrain((step - 330) / 35, 0, 1));
  let liney2 = lerp(-20, 170, min((step - 330) / 35, 1));

    strokeWeight(13);
  line(linex1, liney1, linex2, liney2); 
    
  }

   if (step > 120) {
let t = constrain((step - 380) / 60, 0, 1);
let moveY = lerp(20, 0, t);
let alpha = t * 255;
fill(10, 30, 100, alpha);
noStroke();
textSize(30);
textAlign(CENTER);
text("大阪産業大学", width / 2, 330 + moveY);
}
  
  step++;
}