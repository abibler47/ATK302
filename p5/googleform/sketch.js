var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1KYBLcfXfT7AHZASI625VO1a5s2tu8M3zZYejvkJE31E'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Meal));
  }

}


function draw() {
  background('blue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myMeal) {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.Meal = myMeal;


  this.display = function() {

 // put an ellipse here

  ellipse(this.pos.x, this.pos.y, 100, 100)
  text(this.Meal, this.pos.x, this.pos.y)



  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.y > width) {
      this.pos.y = 0;
    }
    if (this.pos.y > 0) {
      this.pos.y = width;
    }
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x > 0) {
      this.pos.x = width;
    }
  }

}
