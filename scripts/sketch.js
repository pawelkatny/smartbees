let lspanCount, fitCount;

function setup() {
    DATA.init();
    lspanCount = createP();
    fitCount = createP();
}

function draw() {
    DATA.show();
    DATA.update()
    lspanCount.html(DATA.count);
    fitCount.html(DATA._MAXFIT);
}