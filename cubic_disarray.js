function setup() {
  createCanvas(600, 800);
  background(255);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  noFill();
  strokeWeight(3);
  var size = 50;
  var across = 9;
  var down = 13;


  for (var x = 0; x < across; x++) {
    for (var y = 0; y < down; y++) {
      var plusOrMinus = Math.random() > 0.5 ? 1 : -1

      push();
      translate(x*size+size, y*size+size);
      rotate(y * plusOrMinus * Math.random() * 3)
      rect(0, 0, size, size);
      pop();
    }
  }
}
