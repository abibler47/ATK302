var phrog, fly;
var bugs = [];
var myCar1, myCar2, myCar3;
var frogPos;

function setup() {
  createCanvas(800, 800);
  phrog = loadImage('assets/phrog.png');
  fly = loadImage('assets/fly.png');
  for (var i = 0; i < 100; i++) {
    bugs[i] = new Bug();
  }

  frogPos = createVector(width/2, height-80);

}

function draw() {
  background(100);
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].display();
    bugs[i].fly();
    if (bugs[i].pos.dist(frogPos) < 50){
      bugs.splice(i, 1)
    }
  }

  imageMode(CENTER);
  image(phrog, frogPos.x, frogPos.y)
  checkForKeys();
}

function Bug() {
   this.pos = createVector(random(width), random (height));
   this.vel = createVector(random(-5, 5), random(-5, 5));

   this.display = function() {
     fill(255);
     image(fly, this.pos.x, this.pos.y);

   }

   this.fly = function() {
     this.pos.add(this.vel);
     if (this.pos.x > width) {this.pos.x = 0;}
     if (this.pos.x < 0) {this.pos.x = width;}
     if (this.pos.y > width) {this.pos.y = 0;}
     if (this.pos.y < 0 ) {this.pos.y = width;}


   }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;
}
