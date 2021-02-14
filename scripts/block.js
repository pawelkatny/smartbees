class Block {
    constructor(data) {
        this.pos = {
            x: data.x,
            y: data.y
        }
        this.w = data.w;
        this.h = data.h;
        this.show = data.show;
    }

    draw() {
            push();
            fill(150, 45, 56, 200);
            stroke(100, 25, 30);
            rect(this.pos.x, this.pos.y, this.w, this.h);
            pop();
    }
}