let lifespan = 1000;
const POPSIZE = 500;
let population;
let count = 0;

function setup() {
    createCanvas(1300, 1000);
    background(255);
    population = new Population();
}

function draw() {
    background(255);
    //draw border for canvas
    line(0, 0, 0, height);
    line(0, 0, width, 0);
    line(0, height, width, height);
    line(width, 0, width, height);

    population.show();
    count++;
}