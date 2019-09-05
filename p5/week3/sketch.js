// 1)
//function setup() {
//   createCanvas(800,500);
//   textAlign(CENTER);
//   background(200,0,100)
// }
//
// function draw() {
//   fill(0)
//   ellipse(width/2, height/2, 50, 50);
//
//   rect(mouseX, mouseY, 10, 5) ;
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

//2)
// function setup() {
//   createCanvas(800,500);
//   textAlign(CENTER);
//   background(200,0,100)
// }
//
// function draw() {
//   fill(0)
//   rect(mouseX, mouseY, 10, 5) ;
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

// 3)
// function setup() {
//   createCanvas(800,500);
//   textAlign(CENTER);
//   background(200,0,100)
// }
//
// function draw() {
//
//
//   if (mouseIsPressed) {
//     setup();
//   } else {
//     fill(0)
//     rect(mouseX, mouseY, 10, 5) ;
//   }
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

//4)
// function setup() {
//   createCanvas(800,500);
//   background(200,0,100)
//   textSize(16);
//   textAlign(CENTER);
//   text('Andy Bibler', width/2, height/2)
// }
//
// function draw() {
//
//
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

//5)
// function setup() {
//   createCanvas(800,500);
//   background(200,0,100)
//
//   fill(255)
//   ellipse(width/2, 350, 100, 100).
//
//   fill(255)
//   ellipse(width/2, 280, 75, 75);
//
//   fill(255)
//   ellipse(width/2, 230, 50, 50)
// }
//
// function draw() {
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

//6)
// function setup() {
//   createCanvas(800,500);
// }
//
// function draw() {
//   if (mouseIsPressed) {
//     background(random(256), random(256), random(256))
//   }
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
// }

//7)
// var score = 0;
// function setup() {
//   createCanvas(800,500);
//   background(200,0,100)
// }
//
// function draw() {
//   background(200,0,100)
//   textSize(50);
//   textAlign(CENTER);
//   text(score, width/2, height/2)
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
//   score++;
//   draw
// }

//8)
// function setup() {
//   createCanvas(800,500);
//   background(200,0,100)
// }
//
// function draw() {
//
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
//   ellipse(mouseX, mouseY, 50, 50);
// }

//9)
// function setup() {
//   createCanvas(800,500);
//   background(200,0,100)
// }
//
// function draw() {
//
// }
//
// function mouseReleased() {
//   console.log(mouseX + ', ' + mouseY );
//   fill(random(256), 0, 0)
//   stroke(random(256), 0, 0)
//   strokeWeight(random(11))
//   ellipse(mouseX, mouseY, 50, 50);
// }

//10)
function setup() {
  createCanvas(800,500);
  background(200,0,100)
}

function draw() {

}

function mouseReleased() {
  console.log(mouseX + ', ' + mouseY );
  fill(random(256), 0, 0)
  stroke(random(256), 0, 0)
  strokeWeight(random(11))
  ellipse(mouseX, mouseY, random(300), random(300));
  fill(255)
  textSize(10)
  textAlign(CENTER)
  text('Andy', mouseX, mouseY)
}
