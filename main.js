img = ""

function preload() {
    img = loadImage('main.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#FF0000')
    text("Study Table", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 450, 350);
}