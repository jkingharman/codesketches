// inefficient and not quite right (circle inside is buggy) but far enough there for a nice effect.

function Circle(x, y, diameter) {
  this.x = x;
  this.y = y;
  this.dia = diameter
}

function setup() {
  createCanvas(800, 800);
  let circles = [];
  let minDia = 5;
  let circleN = 2500;
  let attempts = 2500;

  // minty green
  background(181, 232, 201);

  for (let n = 0; n < circleN; n++) {
    createCircle(minDia, attempts, circles)
  }

  // draw
  for (let cir of circles) {
    circle(cir.x, cir.y, cir.dia)
  }
}

function createCircle(minDia, attempts, circles) {
  let newCircle = new Circle(Math.random() * 800, Math.random() * 800, minDia)

  // try create circle until you get one that's neither inside any other or out of bounds
  for (let n = 0; n < attempts; n++) {
    if (circleInside(newCircle, circles) || circleOutOfBounds(newCircle)) {
      newCircle = new Circle(Math.random() * 800, Math.random() * 800, minDia)
    } else {
      break
    }
  }

  // expand circle until next expansion places it inside some other circle
  for (let n = 0; n < attempts; n++) {
    if (!circleCollides(newCircle, circles) || circleOutOfBounds(newCircle)) {
      newCircle.dia--
      break
    } else {
      newCircle.dia++
    }
  }
  circles.push(newCircle)
}


function circleOutOfBounds(newCircle) {
  let x = newCircle.x
  let y = newCircle.y
  let rad = newCircle.dia / 2

  if (x + rad > 800 || y + rad > 800) {
    return true;
  } else if (x - rad < 0 || y - rad < 0) {
    return true;
  } else {
    return false
  }
}

// TODO: mash logic of collide and inside together
function circleCollides(newCircle, circles) {
    let overlap = circles.filter(function (oldCircle) {
    let a = Math.abs(oldCircle.x - newCircle.x)
    let b = Math.abs(oldCircle.y - newCircle.y)

    let distanceBetweenCircles = Math.sqrt(a*a + b*b)
    return distanceBetweenCircles < (oldCircle.dia / 2) + (newCircle.dia / 2)
  });

  return overlap.length == 0
}

function circleInside(newCircle, circles) {
  let overlap = circles.filter(function (oldCircle) {
    let a = Math.abs(oldCircle.x - newCircle.x)
    let b = Math.abs(oldCircle.y - newCircle.y)

    let distanceBetweenCircles = Math.sqrt(a*a + b*b)
    return distanceBetweenCircles <= (oldCircle.dia / 2)
  });

  return overlap.length != 0
}
