let lspanCount, fitCount;

function setup() {
    DATA.init();
    console.log('setup')

    lspanCount = createP();
    fitCount = createP();
}

function draw() {
    if (DATA.STOP) return;
    DATA.show();
    DATA.update()
    lspanCount.html(DATA.count);
    fitCount.html(DATA._MAXFIT);
}

function mousePressed() {
    DATA.STOP = !DATA.STOP;
    DATA.STOP ? noLoop() : loop();
}