var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background(255);

  fill(250, 200, 0)
  rect(width/2, height/2, 50, 150)

  //case stuff
  switch (myState) {

    case 0:
      fill('red');
      ellipse(width/2, height/2 - 50, 30, 30)
      fill('grey');
      ellipse(width/2, height/2, 30, 30)
      fill('grey');
      ellipse(width/2, height/2 + 50, 30, 30)
      break;

    case 1:
      fill('grey');
      ellipse(width/2, height/2 - 50, 30, 30)
      fill('yellow');
      ellipse(width/2, height/2, 30, 30)
      fill('grey');
      ellipse(width/2, height/2 + 50, 30, 30)
      break;

    case 2:
      fill('grey');
      ellipse(width/2, height/2 - 50, 30, 30)
      fill('grey');
      ellipse(width/2, height/2, 30, 30)
      fill('green');
      ellipse(width/2, height/2 + 50, 30, 30)
      break;

  }

  timer++;

  if (timer > 200 && timer < 300) {
    myState = 1;
  }
  else if (timer >= 300 && timer < 500) {
    myState = 2;
  }
  else if (timer >= 500){
    myState = 0;
    timer = 0;
  }

}
