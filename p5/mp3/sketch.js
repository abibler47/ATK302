var gelboRight, gelboLeft, gelbo;
var birds = [];
var birdPics = [];
var gelboPos;
var myState = 0;
var splash, win, end;
var birdAmt = 10;
var timer = 500;
var level = 1;

function setup() {
  createCanvas(800, 800);
  splash = loadImage('assets/gelboSplash.jpg')
  win = loadImage('assets/youwin.jpg')
  end = loadImage('assets/gamaovar.jpg')
  gelboLeft = loadImage('assets/gelboLeft.png');
  gelboRight = loadImage('assets/gelboRight.png');
  gelbo = gelboLeft;
  birdPics[0] = loadImage('assets/star1.png');
  birdPics[1] = loadImage('assets/star2.png');
  birdPics[2] = loadImage('assets/star3.png');
  birdPics[3] = loadImage('assets/star4.png');
  birdPics[4] = loadImage('assets/star5.png');
  birdPics[5] = loadImage('assets/star6.png');

  // bird = bird1;
  //fly = loadImage('assets/fly.png');
  for (var i = 0; i < birdAmt; i++) {
    birds[i] = new Bird();
  }

  gelboPos = createVector(width / 2, height - 80);

  timer = 500;

}

function draw() {


  switch (myState) {
    case 0:
      imageMode(CORNER)
      background(splash);
      break;

    case 1:
      background(200)


      for (var i = 0; i < birds.length; i++) {
        birds[i].display();
        birds[i].fly();
        if (birds[i].pos.dist(gelboPos) < 50) {
          myState = 2;

        }

      }

      timer--;
      if(timer == 0) {
        myState = 3;
      }


      imageMode(CENTER);
      image(gelbo, gelboPos.x, gelboPos.y, 50, 50)
      textSize(30)
      text(timer, 10, 30)
      text("level " + level, 10, 60)

      checkForKeys();
      break;

    case 2:
      imageMode(CORNER)
      background(end);

      break;

    case 3:
      imageMode(CORNER)
      background(win);

      break;
    }









  }

  function Bird() {
    this.pos = createVector(random(width), random(height/2));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.birdNum = 0;
    this.timer = 0;

    this.display = function() {
      fill(255);
      image(birdPics[this.birdNum], this.pos.x, this.pos.y, 80, 80);

      this.timer++
      if (this.timer > 5) {
        this.birdNum = this.birdNum + 1;
        this.timer = 0;
      }


      if (this.birdNum > birdPics.length - 1) this.birdNum = 0;
    }

    this.fly = function() {
      this.pos.add(this.vel);
      if (this.pos.x > width) {
        this.pos.x = 0;
      }
      if (this.pos.x < 0) {
        this.pos.x = width;
      }
      if (this.pos.y > width) {
        this.pos.y = 0;
      }
      if (this.pos.y < 0) {
        this.pos.y = width;
      }




    }

  }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) gelbo = gelboLeft;
    if (keyCode === RIGHT_ARROW) gelbo = gelboRight;
  }

  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) gelboPos.x = gelboPos.x - 5;
    if (keyIsDown(RIGHT_ARROW)) gelboPos.x = gelboPos.x + 5;
    if (keyIsDown(UP_ARROW)) gelboPos.y = gelboPos.y - 5;
    if (keyIsDown(DOWN_ARROW)) gelboPos.y = gelboPos.y + 5;
    if (keyIsDown(80)) myState = 3;
  }

  function mouseReleased() {
    if(myState == 0) {
      myState = 1;
    }
    else if(myState == 2) {
      birdAmt = 10;
      gelboPos = createVector(width / 2, height - 80);
      level = 1;
      timer = 500;


      for (var i = 0; i < birdAmt; i++) {
        var j = new Bird();
        splice(i, j, 1)
        birds[i] = new Bird();
      }
      myState = 0
    }
    else if(myState == 3) {
      birdAmt = birdAmt + 10
      gelboPos = createVector(width / 2, height - 80);
      level++;
      timer = 500;

      for (var i = 0; i < birdAmt; i++) {
        var j = new Bird();
        splice(i, j, 1)
        birds[i] = new Bird();
      }
      myState = 1
    }
  }
