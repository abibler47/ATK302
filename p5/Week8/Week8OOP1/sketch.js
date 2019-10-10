var myCar1, myCar2, myCar3;

function setup() {
  createCanvas(800, 800);
  myCar1 = new Car();
  myCar2 = new Car();
  myCar3 = new Car();

}

function draw() {
  background(100);
  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();

  myCar3.display();
  myCar3.drive();

}

function mouseReleased() {

}

function Car() {
   this.x = random(width);
   this.y = random(height);
   this.r = random(255);
   this.g = random(255);
   this.b = random(255);
   this.v = random(5, 10);

   this.display = function() {
     fill(this.r, this.g, this.b)
     rect(this.x, this.y, 100, 50);
   }

   this.drive = function() {
     this.x = this.x + this.v;
     if (this.x > width) {
       this.x = 0;
     }
   }
}
