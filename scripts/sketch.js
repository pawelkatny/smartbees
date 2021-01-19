const LIFESPAN = 500;
const POPSIZE = 500;

let population;
let lspanCount;
let o1, o2, o3; 
let count = 0;

function setup() {
    createCanvas(1300, 1000);
    background(255);
    lspanCount = createP();
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



    population.show();

    if (count === LIFESPAN) {
        count = 0;
        population.update();
    }

    count++;
    lspanCount.html(count);
}