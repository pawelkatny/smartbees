class Bee {
    constructor(newDNA) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector();
        this.acc = createVector();
        if (newDNA) {
            this.dna = newDNA;
        } else {
            this.dna = new DNA();
        }
        this.crashed = false;
        this.completed = false;
        this.flewAway = false;
    }

    calcFitness() {
        let distance = [],
            minDist, index;
        minDist = DATA.FLOWERS.map(flower => {
            let d = dist(this.pos.x, this.pos.y, flower.pos.x, flower.pos.y);
            distance.push(d);
            return d;
        }).reduce((a, b) => {
            if (a < b) return a;
            else return b;
        })
        index = distance.indexOf(minDist);
        this.fitness = map(minDist, 0, DATA.CANVAS.w, DATA.CANVAS.w, 0);

        if (this.completed) {
            this.fitness *= flowers[index].fitness;
        }

        if (this.crashed || this.flewAway) {
            this.fitness /= 10;
        }

    }

    update() {
        //check if bee crashed into block
        this.crashed = DATA.isCrashed(this.pos);
        //check if bee flew away out of canvas
        this.flewAway = DATA.flewAway(this.pos);

        if (!this.completed && !this.crashed && !this.flewAway) {
            this.acc.add(this.dna.geneX[DATA.count]);
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    show() {
        if (!this.flewAway) { //if bee flew away out of canvas do not draw it 
            push();
            noStroke();
            translate(this.pos.x, this.pos.y);
            rotate(this.pos.angleBetween(this.vel));
            ellipseMode(CENTER);
            fill(255, 204, 0);
            ellipse(0, 0, 5, 10);
            fill(0);
            ellipse(5, 0, 2, 5);
            ellipse(-5, 0, 2, 5);
            pop();
        }
    }
}