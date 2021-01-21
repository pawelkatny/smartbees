class DATA {
    static LIFESPAN = 500;
    static POPSIZE = 20;
    static CANVAS = {
        w: 1300,
        h: 1000
    }
    static POPULATION;
    static _COUNT;

    static BLOCKS = [];
    static FLOWERS = [];

    //flowers data
    static F1 = {
        color: [204, 51, 255, 100],
        size: 20,
        pos: {
            x: 100,
            y: 100
        },
        fitness: 10
    }

    static F2 = {
        color: [0, 178, 255, 100],
        size: 30,
        pos: {
            x: 700,
            y: 150
        },
        fitness: 5
    }

    static F3 = {
        color: [50, 50, 255, 100],
        size: 15,
        pos: {
            x: 1100,
            y: 70
        }, 
        fitness: 15
    }

    //blocks data
    static B1 = {
        x: 500,
        y: 500,
        w: 300,
        h: 50
    }
    
    static B2 = {
        x: 100,
        y: 250,
        w: 200,
        h: 20
    }

    static B3 = {
        x: 1000,
        y: 150,
        w: 200,
        h: 10
    }

    //getter and setter for lifespan counter
    static get count() {
        return this._COUNT;
    }

    static set count(val) {
        if (isNaN(this._COUNT) || val === 0) {
            this._COUNT = 0;
        } else {
            this._COUNT += val;
        }
    }

    //function to check if bee crashed into block
    static isCrashed(pos) {
        return this.BLOCKS.some(block => {
            return (pos.x > block.pos.x && pos.x < block.pos.x + block.w && pos.y > block.pos.y && pos.y < block.pos.y + block.h)
        })
    }
    //checking is bee flew away out of canvas 
    static flewAway(pos) {
        if ((pos.x < 0 || pos.x > DATA.CANVAS.w) || (pos.y < 0 || pos.y > DATA.CANVAS.h)) {
            return true;
        } else {
            return false;
        }
    }

    static init() {
        createCanvas(this.CANVAS.w, this.CANVAS.h);
        background(255);
        //create new flowers and blocks based on the avaible variables
        //looping through DATA object keys and looking foir specific var names
        Object.keys(DATA).forEach(key => {
            if (key[0] === 'F' && !isNaN(key[1])) {
                this.FLOWERS.push(new Flower(DATA[key]));
            }

            if (key[0] === 'B' && !isNaN(key[1])) {
                this.BLOCKS.push(new Block(DATA[key]));
            }
        })

        //create new population
        this.POPULATION = new Population();
    }

    static show() {
        background(255);

        //draw border for canvas
        line(0, 0, 0, height);
        line(0, 0, width, 0);
        line(0, height, width, height);
        line(width, 0, width, height);

        //draw beehive
        fill(255, 204, 0);
        rect((width/2 - 25), (height - 50), 50, 50);

        //draw flowers
        this.FLOWERS.forEach(flower => {
            flower.draw();
        })

        //draw blocks
        this.BLOCKS.forEach(block => {
            block.draw();
        })

        //draw poopulation of bees
        this.POPULATION.show();
    }

    static update() {
        if (this.count === this.LIFESPAN) {
            this.count = 0;
            this.POPULATION.evaluate();
            this.POPULATION.update();
        }
        this.count = 1;
    }
}