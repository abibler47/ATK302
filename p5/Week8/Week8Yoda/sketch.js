var yodaRight, yodaLeft, yoda;
var bird1, bird2, bird3, bird;
var birds = [];
var birdPics = [];
var myCar1, myCar2, myCar3;
var yodaPos;

function setup() {
  createCanvas(800, 800);
  yodaLeft = loadImage('assets/yodaLeft.gif');
  yodaRight = loadImage('assets/yodaRight.gif');
  yoda = yodaLeft;
  birdPics[0] = loadImage('assets/bird1.png');
  birdPics[1] = loadImage('assets/bird2.png');
  birdPics[2] = loadImage('assets/bird3.png');
  birdPics[3] = loadImage('assets/bird4.png');
  birdPics[4] = loadImage('assets/bird5.png');
  birdPics[5] = loadImage('assets/bird6.png');
  birdPics[6] = loadImage('assets/bird7.png');

  bird = bird1;
  //fly = loadImage('assets/fly.png');
  for (var i = 0; i < 15; i++) {
    birds[i] = new Bird();
  }

  yodaPos = createVector(width/2, height-80);

}

function draw() {
  background(100);
  for (var i = 0; i < birds.length; i++) {
    birds[i].display();
    birds[i].fly();
    if (birds[i].pos.dist(yodaPos) < 50){
      birds.splice(i, 1)
    }
  }

  imageMode(CENTER);
  image(yoda, yodaPos.x, yodaPos.y, 200, 200)

  checkForKeys();
}

function Bird() {
   this.pos = createVector(random(width), random (height));
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
     if (this.pos.x > width) {this.pos.x = 0;}
     if (this.pos.x < 0) {this.pos.x = width;}
     if (this.pos.y > width) {this.pos.y = 0;}
     if (this.pos.y < 0 ) {this.pos.y = width;}




   }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaLeft;
  if (keyCode === RIGHT_ARROW) yoda = yodaRight;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) yodaPos.x = yodaPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) yodaPos.x = yodaPos.x + 5;
  if (keyIsDown(UP_ARROW)) yodaPos.y = yodaPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) yodaPos.y = yodaPos.y + 5;
}
