var tall = true;
var charWidth = 110;
var charHeight = 110;
var positionY = 0;
var positionX = 0;

function setup() {

  createCanvas(windowWidth, windowHeight)



}

function draw() {

  background(255)

  fill(120)
  noStroke()
  rect(0, height/2 + 110, width, height/2 + 110);

  fill(15, 210, 90)
  stroke(10, 160, 70)
  strokeWeight(10)
  rect(width/2 + positionX, height/2 + positionY, charWidth, charHeight)

  fill(10, 160, 70)
  noStroke()
  ellipse(width/2 + positionX + 35, height/2 + positionY + 30, 20, 20)
  ellipse(width/2 + positionX + 80, height/2 + positionY + 30, 20, 20)

  line(0, 12, width, 12);
  textSize(100)
  textAlign(CENTER, TOP);
  text('Gelbo - The Slime Boy', 0, 12, width);

  fill(255)
  line(0, 87, width, 87);
  textSize(40)
  textAlign(CENTER, BOTTOM);
  text('Gelbo likes exploring. He has a sword but I dont think he knows how to use it. He just thinks it makes him look cool. Hopefully he doesnt get in any real fights *wink*', 0, height*3/4, width);






  if (mouseIsPressed) {
    if (tall == true) {
      charWidth++;
      charHeight--;
      positionY++;
      if (charWidth % 2 == 0){
        positionX--;
      }

      if (charWidth >=120) {
        tall = false;
      }

    } else{
      charWidth--;
      charHeight++;
      positionY--;
      if (charWidth % 2 == 0){
        positionX++;
      }

      if (charWidth <=100) {
        tall = true;
      }

    }

    fill(200, 200, 250)
    noStroke()
    rect(width/2 - 160, height/2 + 20, 120, 8)
    rect(width/2 - 160, height/2 + 50, 120, 8)
    rect(width/2 - 160, height/2 + 80, 120, 8)

    fill(10, 160, 70)
    triangle(width/2 + positionX + 20, height/2 + positionY + 60, width/2 + positionX + 80, height/2 + positionY + 60, width/2 + positionX + 50, height/2 + positionY + 80)


  } else {
    fill(10, 160, 70)
    rect(width/2 + positionX + 20, height/2 + positionY + 60, 60, 7)
  }
  fill(170)
  rect(width/2 + positionX - 5, height/2 + positionY - 35, 24, 100)
  triangle(width/2 + positionX - 5, height/2 + positionY - 35, width/2 + positionX + 19, height/2 + positionY - 35, width/2 + positionX + 7, height/2 + positionY - 45)

  fill(139,69,19)
  rect(width/2 + positionX - 15, height/2 + positionY + 60, 44, 10)
  rect(width/2 + positionX, height/2 + positionY + 65, 12, 30)

  stroke(170)
  strokeWeight(5)
  ellipse(width/2 + positionX + 100, height/2 + positionY + 80, 55, 55)
}

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY );
}
