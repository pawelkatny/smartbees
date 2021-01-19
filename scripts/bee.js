class Bee {
    constructor() {
        this.pos = createVector(width/2, height);
        this.vel = createVector();
        this.acc = createVector();
        this.dna = new DNA();
    }

    update() {
        this.acc.add(this.dna.geneX[count]);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0)
    }

    show() {
        push();
        noStroke();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        ellipseMode(CENTER);
        fill(255, 204, 0);
        ellipse(0, 0, 5, 10);
        fill(0);
        ellipse(5, 0, 2, 5);
        ellipse(-5, 0, 2, 5);
        pop();
    }
}