let lspanCount, fitCount;

function setup() {
    DATA.init();
    UI.init();
}

function draw() {
    if (DATA.STOP) return;
    DATA.show();
    DATA.update();
    UI.update();
}

function mousePressed() {
    // DATA.STOP ? noLoop() : loop();
}