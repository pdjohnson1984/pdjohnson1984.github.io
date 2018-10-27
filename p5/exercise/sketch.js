function setup() {
createCanvas(480, 120);
}
function draw() {
if (mouseIsPressed) {
 rect(mouseX, mouseY, 80, 80);
 fill(mouseX);
} else {
  arc(mouseX, mouseY, 80,80, PI, TWO_PI+HALF_PI);
}
}
