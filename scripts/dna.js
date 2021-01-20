class DNA {
    geneX = [];

    constructor() {
        this.init();
    }

    init() {
        for (let i = 0; i < DATA.LIFESPAN; i++) {
            this.geneX[i] = p5.Vector.random2D();
            this.geneX[i].setMag(0.2)
        }
    }
}