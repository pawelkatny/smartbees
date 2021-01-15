class Bee {
    geneX = [];
    constructor() {
        this.pos = createVector(width/2, height/2);
        this.vel = createVector();
        // this.acc = createVector();
        this.init();
    }

    init() {
        for (let i = 0; i < lifespan; i++) {
            this.geneX[i] = p5.Vector.random2D();
        }
    }

    update() {
        this.acc.add(this.geneX[lifespan]);
        this.vel.add(acc);
        this.pos.add(vel);
    }

    show() {
        point(this.pos.x, this.pos.y, 10, 10)
    }
}