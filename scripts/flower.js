class Flower {
    constructor(data) {
        this.color = data.color;
        this.size = data.size;
        this.pos = data.pos;
    }

    draw() {
        push();
        fill(this.color);
        translate(this.pos.x, this.pos.y);
        noStroke();
        for (let i = 0; i < 5; i++) {
            ellipse(0, 0, this.size, this.size*3);
            rotate(PI / 3);
        }
        pop();
    }
}