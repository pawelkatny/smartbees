class DNA {
    geneX = [];

    constructor(dna) {
        if (dna) {
            this.geneX = dna;
        } else {
            this.init();
        }
    }

    init() {
        for (let i = 0; i < DATA.LIFESPAN; i++) {
            this.geneX[i] = p5.Vector.random2D();
            this.geneX[i].setMag(DATA.MAGNITUDE)
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

    mutation() {
        for (let i = 0; i < this.geneX.length; i++) {
            if (random(1) < DATA.MUTATION) {
                this.geneX[i] = p5.Vector.random2D();
                this.geneX[i].setMag(DATA.MAGNITUDE);
            }
        }
    }
}