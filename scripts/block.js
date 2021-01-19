class Block {
    constructor(data) {
        console.log(data)
        this.pos = {
            x: data.x,
            y: data.y
        }
        this.w = data.w;
        this.h = data.h
    }

    draw() {
        push();
        fill(150, 45, 56, 200);
        stroke(100, 25, 30);
        rect(this.pos.x, this.pos.y, this.w, this.h);
    }
}