//ヘインティハウィ
// 25H104


let x1 = 0;y1 = 0;
let stretch = 50;
let speed = 7;
let x2 = x1 - stretch;
let y2 = y1 - stretch;
let x3 = 400; x4 =  x3 + stretch;
let y3 = 0;y4 = y3 - stretch;
let x5 = 0; y5 = 0;
let x6 = 400;y6 = 300;
let x7 = 195;y7 = 400;
let middistance = 0;
let diameter = 70;
let rb_speed = 4;rbx_speed = 2;
let rb_stopped = false;
let lb_stopped = false;
let state = 0;
let lb_speed = -5.5;
let mid_stopped = false;
let count = 50;
let x1m = 138;
let y1m = 198;
let x2m = 138
let y2m = 198
let smo = 1;
let x11 = 500;
let y11 = 22;
let z = 0;

 
function setup() {
  createCanvas(400, 400);

 
  
  
}

function draw() {
//background(150, 50, 100);
background ( 255,255,255);

if (state === 0 ){
  line1();
}else if ( state === 1){
  line2();
}else if ( state === 2){

  r_ball();
  l_ball();
  middleone();

    if( y5 === 150 && y6 === 150 && y7 === 150 && count >= 0){
    diameter += 0.7;
    middistance += 1;
      x5 += 0.2;
      x6 -= 0.2;
    count --;
  }
  if ( count <= 0){
     middleline();
  }
  if ( y7 === 150 && smo < 10){
    smo ++ ;
  }
  if ( smo === 10){
   name();
  }

}
}
function line1 (){
  line(x1 , y1 ,x2 , y2);
  strokeWeight (5);
  
  x1 += speed;
  y1 += speed;
  x2 += speed;
  y2 += speed;
  if (x2 > 400){
    state = 1;
  }

  
} 
function line2(){
  line ( x3 ,y3 , x4 , y4);
  strokeWeight(5);
  
  x3 -= speed;
  x4 -= speed;
  y3 += speed;
  y4 += speed;
  if ( x4 < 0 ){
    state = 2;
  }
}
function r_ball(){
  
  stroke (0 , 64 ,152);
  strokeWeight (smo);
  fill(255, 255, 255);
  circle (x5 , y5 , diameter );

 if ( !rb_stopped) {
   y5 += rb_speed;
   x5 += rbx_speed;
   
   if ( y5 >= 300 ){
     rb_speed = 0
     rbx_speed = 5.5
   }
   
   if ( x5 >= 255 && rb_speed <= 0){
     rbx_speed = 5.5;
     rb_stopped = true;
  
   }

  }
    if ( y7 <= 300){
    y5 -= 1;
  
  if ( y5 <=150 ){
    y5 = 150;
  }}
}
function l_ball( ){
  
  stroke (0 , 64 ,152);
  strokeWeight (smo);   
  fill(255, 255, 255);
  circle ( x6,y6,diameter);

   if ( !lb_stopped) {
     x6 += lb_speed;
    if (x6 <= 35)  {
      lb_speed *= -1;}
    if ( x6 >= 100 && lb_speed >= 0){
      lb_speed = 1; 

     if ( x6 === 130){
       lb_stopped = true;
       x6 = 130;
     }}}
  if ( y7 <= 300){
    y6 -= 1;
  
  if ( y6 <=150 ){
    y6 = 150;
  }}

}

function middleone(){
 
  
  fill(255, 255, 255);
  stroke (0 , 64 ,152);
  strokeWeight (smo);
  circle (x7 , y7 , middistance );
  if (!mid_stopped){
  if ( middistance < 100){
    middistance ++;
  }
  if ( middistance === 100){
    y7 --;
  if ( y7 === 150 && x7 === 195 ){
    mid_stopped = true;
    y7 = 150;
  }}}

}


function middleline(){
    stroke (0 , 64 ,152);
  if (y5 === 150) {

          line(x1m, y1m, x2m, y2m);
  if (x2m < 253){
      x2m ++;
    }
    if (y2m > 99){
      y2m --;
    }
 
    /* if (y5 === 150) {
  let x1 = 138;
  let y1 = 198;
  let x2 = 253;
  let y2 = 99;
      line(x1, y1, x2, y2);*/
}}
function mousePressed() {
  print("You clicked at: " + mouseX + ", " + mouseY);
}

function name(){
  
noStroke();
textSize(y11);
textAlign(CENTER);
fill(10, 30, 100);
text("大阪産業大学", x11, 300 );
  if (x11 >= 200  ){
    x11 -- ;
    z ++ ;
  }
  if ( x11 < 200 && y11 <= 44){
    y11 ++;
  }
  
}