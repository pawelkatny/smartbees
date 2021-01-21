class DNA {
    geneX = [];

    constructor(DNA) {
        if (DNA) {
            this.geneX = DNA;
        } else {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < DATA.LIFESPAN; i++) {
            this.geneX[i] = p5.Vector.random2D();
            this.geneX[i].setMag(0.2)
        }
    }

    crossover(parentB) {
        let newDNA = [],
            midVal;
        midVal = floor(random(this.geneX.length));

        for (let i = 0; i < this.geneX.length; i++) {
            if (i > midVal) {
                newDNA[i] = this.geneX[i];
            } else {
                newDNA[i] = parentB.geneX[i];
            }
        }
        return new DNA(newDNA);
    }
}