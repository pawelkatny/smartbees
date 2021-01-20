let lspanCount;

function setup() {
    DATA.init();
    lspanCount = createP();
}

function draw() {
    DATA.show();
    DATA.update()
    lspanCount.html(DATA.count);
}