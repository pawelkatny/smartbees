const LIFESPAN = 500;
const POPSIZE = 500;

const F1DATA = {
    color: [204, 51, 255, 100],
    size: 20,
    position: {
        x: 100,
        y: 100
    }
}

const F2DATA = {
    color: [0, 178, 255, 100],
    size: 30,
    position: {
        x: 700,
        y: 150
    }
}

const F3DATA = {
    color: [50, 50, 255, 100],
    size: 15,
    position: {
        x: 1100,
        y: 70
    }
}

const B3 = {
    x: 500,
    y: 500,
    w: 300,
    h: 50
}

let population;
let lspanCount;
let flower1, flower2, flower3;
let o1, o2; 
let count = 0;

function setup() {
    createCanvas(1300, 1000);
    background(255);
    lspanCount = createP();
    flower1 = new Flower(F1DATA);
    flower2 = new Flower(F2DATA);
    flower3 = new Flower(F3DATA);
    o1 = new Block(B3);

    population = new Population();
}

function draw() {
    background(255);
    //draw border for canvas
    line(0, 0, 0, height);
    line(0, 0, width, 0);
    line(0, height, width, height);
    line(width, 0, width, height);

    //draw beehive
    fill(255, 204, 0);
    rect((width/2 - 25), (height - 50), 50, 50);

    //draw flowers
    flower1.draw();
    flower2.draw();
    flower3.draw();

    //draw blocks 
    o1.draw();

    population.show();

    if (count === LIFESPAN) {
        count = 0;
        population.update();
    }

    count++;
    lspanCount.html(count);
}