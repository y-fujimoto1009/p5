let sx = 100, sy = 250;
let sr = 10;
let x1 = 400, y1 = 560;
let x2 = 450, y2 = 460;
  let x3 = 620, y3 = 460;
  let x4 = 570, y4 = 560;
let cr =250,cy=250,cb=250
let t = 0
  let y = 800

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255); // 背景を白でリセット
  noStroke();

  // ロゴ
  fill(250);
  stroke(cr, cy, cb);
  strokeWeight(10);
  circle(150, 200, 50);
  circle(250, 200, 50);
  circle(200, 200, 90);
  line(160, 225, 240, 175);



  // こて（平行四辺形）
  stroke(10);
  strokeWeight(10);
  fill(100);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  strokeWeight(20);
  line(x1+110, y1-50, x1+200, y1-50);
  //こてが来る
  if(t<200){

  if(x1>90){
    x1 -=2, y1-=2, x2-=2, y2-=2, x3-=2, y3-=2, x4-=2, y4-=2
  }
  }
  if(x1==90){
                cr=250
    cy=0
    cb=0
  }
  
  if ( t>250){

  //こてが離れる
  x1 +=2, y1-=2, x2+=2, y2-=2, x3+=2, y3-=2, x4+=2, y4-=2
    //色変わる

  if (cr >= 8) {
    cr -= 2;
  }
    if (cy >= 28) {
    cy -= 2;
  }
    if (cb <= 190) {
    cb += 2;
  }
  }
    if(t>150){
        // 動きの更新
  sy -= 2;   // 上に移動
  sr += 1; // 徐々に大きく
  // 煙（だんだん大きくなりながら上に昇る）
  fill(150, 150, 150, 100); // 半透明の灰色
  noStroke();
  circle(sx, sy, sr);
  circle(sx+150, sy-40, sr);
  if(t > 170){
  fill(150, 150, 150, 100); // 半透明の灰色
  noStroke();
  circle(sx, sy+40, sr-20);
  circle(sx+150, sy, sr-20);
  
  }
  if(t >210){
  fill(150, 150, 150, 100); // 半透明の灰色
  noStroke();
  circle(sx, sy+80, sr-40);
  circle(sx+150, sy+40, sr-40);
  
  }
        if(t >240){
  fill(150, 150, 150, 100); // 半透明の灰色
  noStroke();
  circle(sx, sy+120, sr-80);
  circle(sx+150, sy+80, sr-80);
  
  }
    }




  // 一定の高さに達したらリセット

  if (sy<-100) {

    sy = -250;
    sr = 10;
  }
  fill(cr,cy,cb,)
  noStroke()
  strokeWeight(0);
  textSize(22);
  textAlign(CENTER);
  text("大阪産業大学",200,y,)
  if (y > 299){
    if(t>300){
   y = y - 10 
   }
  }
  
  
  

  
  t = t +1
}