let lspanCount, fitCount;

function setup() {
    DATA.init();
}

function draw() {
    if (DATA.STOP) return;
    DATA.show();
    DATA.update();
}

function mousePressed() {
    DATA.STOP = !DATA.STOP;
    DATA.STOP ? noLoop() : loop();
}