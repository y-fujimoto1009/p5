let step = 0; // アニメーションのステップ数を管理する変数
let particles = []; // 煙のパーティクルを格納する配列

function setup() {
  createCanvas(400, 400); // 400x400ピクセルのキャンバスを作成
  frameRate(60); // フレームレートを60fpsに設定
}

function draw() {
  background(255); // キャンバスを白でクリア

  // Vòng tròn nhỏ và lớn sẽ có hiệu ứng nhấp nháy sau khi hoạt ảnh ban đầu của chúng kết thúc
  let circleStrokeAlpha = 255; // Độ trong suốt mặc định cho viền vòng tròn
  if (step > 90) { // Bắt đầu nhấp nháy sau khi vòng tròn lớn đã mở rộng hoàn toàn
    if ((step - 90) % 20 < 10) { // Nhấp nháy cứ sau khoảng 0.33 giây
      circleStrokeAlpha = 255; // Hiển thị
    } else {
      circleStrokeAlpha = 0; // Ẩn
    }
  }
  stroke(10, 30, 100, circleStrokeAlpha); // Đặt màu viền và độ trong suốt cho vòng tròn
  strokeWeight(10); // Đặt độ dày viền là 10 pixel
  fill(255); // Đặt màu tô là trắng

  // Hoạt ảnh vòng tròn nhỏ (từ trái sang phải)
  // Vòng tròn bên trái và bên phải di chuyển cho đến khi bước đạt 60 khung hình (1 giây)
  let leftX = lerp(0, 150, min(step / 60, 1)); // Nội suy tọa độ X của vòng tròn bên trái từ 0 đến 150
  let rightX = lerp(400, 250, min(step / 60, 1)); // Nội suy tọa độ X của vòng tròn bên phải từ 400 đến 250
  circle(leftX, 200, 50); // Vẽ vòng tròn bên trái (đường kính 50)
  circle(rightX, 200, 50); // Vẽ vòng tròn bên phải (đường kính 50)

  // Hoạt ảnh vòng tròn lớn (mở rộng)
  // Bắt đầu khi bước vượt quá 60 khung hình và mở rộng trong 30 khung hình (0.5 giây)
  let bigSize = lerp(0, 90, constrain((step - 60) / 30, 0, 1)); // Nội suy đường kính từ 0 đến 90
  if (step > 60) {
    circle(200, 200, bigSize); // Vẽ vòng tròn lớn ở trung tâm
  }

  // Hoạt ảnh đường chéo (đường kéo dài)
  // Bắt đầu khi bước vượt quá 90 khung hình và đường kéo dài trong 30 khung hình (0.5 giây)
  if (step > 90) {
    let x1 = 160;
    let y1 = 225;
    // Nội suy tọa độ điểm cuối của đường
    let x2 = lerp(160, 240, constrain((step - 90) / 30, 0, 1));
    let y2 = lerp(230, 175, constrain((step - 90) / 30, 0, 1));
    line(x1, y1, x2, y2); // Vẽ đường chéo
  }

  // Hoạt ảnh văn bản (mờ dần và hơi nhô lên, không nhấp nháy)
  // Bắt đầu khi bước vượt quá 120 khung hình và mờ dần trong 60 khung hình (1 giây)
  if (step > 120) {
    let t = constrain((step - 120) / 60, 0, 1); // Tiến độ hoạt ảnh (từ 0 đến 1)
    let moveY = lerp(20, 0, t); // Nội suy tọa độ Y của văn bản từ 20 pixel bên dưới đến vị trí ban đầu
    let alpha = t * 255; // Nội suy độ trong suốt từ 0 đến 255

    // Đảm bảo văn bản hoàn toàn hiển thị sau khi mờ dần
    if (t === 1) {
      alpha = 255; // Đặt độ trong suốt là 255 (hoàn toàn hiển thị)
    }

    fill(10, 30, 100, alpha); // Đặt màu văn bản và độ trong suốt
    noStroke(); // Không có viền cho văn bản
    textSize(22); // Đặt kích thước văn bản là 22
    textAlign(CENTER); // Căn giữa văn bản
    text("大阪産業大学", width / 2, 300 + moveY); // Vẽ văn bản
  }

  // Tạo hạt khói
  // Tạo hạt mới cứ sau 5 khung hình sau khi hoạt ảnh văn bản hoàn tất
  if (step > 180 && step % 5 === 0) { // Sau 180 khung hình, tạo cứ sau 5 khung hình
    let x = width / 2 + random(-10, 10); // Tọa độ X ngẫu nhiên gần trung tâm văn bản
    let y = 300 + random(-5, 5); // Tọa độ Y ngẫu nhiên gần trung tâm văn bản
    particles.push(new Particle(x, y));
  }

  // Cập nhật và vẽ hạt
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].isFinished()) {
      particles.splice(i, 1); // Xóa các hạt đã hết tuổi thọ
    }
  }

  step++; // Tăng bước
}

// Lớp hạt khói
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y); // Vị trí
    this.vel = createVector(random(-0.5, 0.5), random(0.5, 1)); // Vận tốc (hướng xuống)
    this.acc = createVector(0, 0.01); // Gia tốc (hơi hướng xuống)
    this.lifespan = 255; // Tuổi thọ (được sử dụng làm độ trong suốt)
    this.radius = random(5, 15); // Bán kính ban đầu
  }

  update() {
    this.vel.add(this.acc); // Thêm gia tốc vào vận tốc
    this.pos.add(this.vel); // Cập nhật vị trí
    this.lifespan -= 2; // Giảm tuổi thọ (giảm độ trong suốt)
    this.radius += 0.1; // Tăng bán kính dần dần
  }

  display() {
    noStroke(); // Không có viền
    // Đặt màu khói (màu xám nhạt) và độ trong suốt
    fill(200, 200, 200, this.lifespan);
    ellipse(this.pos.x, this.pos.y, this.radius * 2); // Vẽ hình elip
  }

  isFinished() {
    return this.lifespan < 0; // Kiểm tra xem tuổi thọ đã hết chưa
  }
}
