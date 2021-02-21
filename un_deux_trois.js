// an attempt to replicate vera molnár's work un deux trois
// it's not correct but i don't mind - my version is less orderly, more feral

function setup() {
  let size = 900;
  let step = 50;
  let strokeW = 8;
  rectMode(CENTER);

  createCanvas(size + 50, size + 50);
  strokeWeight(strokeW);

  for(let y = 150; y < 900; y+= step) {
    for(let x = 150; x < 900; x+= step) {
      let multipliers = lineMultipliers(y, size);
      let plusOrMinus = Math.random() > 0.5 ? -1 : 1
      let randRotation = Math.random() * 35 * plusOrMinus

      multipliers.forEach(multiplier => drawLine(x, y, step, multiplier, randRotation))
    }
  }
}

function drawLine(currentX, currentY, step, multiplier, rotation) {
  push()
  translate(currentX + (step / 10 * multiplier), currentY)
  rotate(radians(rotation))
  rect(0, 0, 1, step, 2)
  pop()
}

function lineMultipliers(currentY, size) {
  if (currentY < size / 3)
    return [5];
  else if (currentY < (size / 3 + size / 3)) {
    return [2, 8];
  } else {
    return [1, 5, 9];
  }
}
