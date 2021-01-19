let lifespan = 1000;
let bee;
let count = 0;

function setup() {
    createCanvas(1300, 1000);
    background(255);
    bee = new Bee();
}

function draw() {
    background(255);
    //draw border for canvas
    line(0, 0, 0, height);
    line(0, 0, width, 0);
    line(0, height, width, height);
    line(width, 0, width, height);

    bee.update();
    bee.show();
    count++;
}