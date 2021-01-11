function setup() {
  createCanvas(400, 400);
  size = 400
  step = 10

  // Each outer loop moves you one step along x-axis
  for(var x = 0; x < size; x += step) {
    // Each inner loop moves you one step along y-axis
    for(var y = 0; y < size; y+= step) {
      strokeWeight(2)
      leftOrRight(x, y, step)
    }
  }
}

function leftOrRight(x, y, step) {
  if (Math.random() >= 0.5) {
    line(x, y, x + step, y + step)
  } else {
    line(x + step, y, x, y + step)
  }
}
