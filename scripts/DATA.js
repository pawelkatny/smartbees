class DATA {
    static LIFESPAN = 500;
    static POPSIZE = 200;
    static MUTATION = 0.005;
    static MAGNITUDE = 0.4;
    static CANVAS = {
        w: 1300,
        h: 1000
    }
    static STOP = false;

    static POPULATION;
    static _LIFESPAN_COUNT;
    static _POPULATION_COUNT;

    static BLOCKS = [];
    static FLOWERS = [];

    //flowers data
    static F1 = {
        color: [0, 178, 255, 100],
        size: 30,
        pos: {
            x: 700,
            y: 150
        },
        fitness: 5,
        show: true
    }

    static F2 = {
        color: [204, 51, 255, 100],
        size: 20,
        pos: {
            x: 100,
            y: 100
        },
        fitness: 10,
        show: true
    }

    static F3 = {
        color: [50, 50, 255, 100],
        size: 15,
        pos: {
            x: 1100,
            y: 70
        },
        fitness: 15,
        show: true
    }

    //blocks data
    static B1 = {
        x: 500,
        y: 500,
        w: 300,
        h: 50,
        show: true
    }

    static B2 = {
        x: 100,
        y: 250,
        w: 200,
        h: 20,
        show: true
    }

    static B3 = {
        x: 900,
        y: 150,
        w: 200,
        h: 10,
        show: true
    }

    //getter and setter for lifespan counter
    static get count() {
        return this._LIFESPAN_COUNT;
    }

    static set count(val) {
        if (isNaN(this._LIFESPAN_COUNT) || val === 0) {
            this._LIFESPAN_COUNT = 0;
        } else {
            this._LIFESPAN_COUNT += val;
        }
    }

    static get population() {
        return this._POPULATION_COUNT;
    }

    static set population(val) {
        if (isNaN(this._LIFESPAN_COUNT) || val === 0) {
            this._POPULATION_COUNT = 0;
        } else {
            this._POPULATION_COUNT += 1;
        }
    }

    static get mutation() {
        return this.MUTATION;
    }

    static set mutation(val) {
        if(!isNaN(val)) {
            this.MUTATION = val;
        }
    }

    static get popSize() {
        return this.POPSIZE;
    }

    static set popSize(val) {
        if(!isNaN(val)) {
            this.POPSIZE = val;
        }
    }

    static calcDistance(pos) {
        let distance = [],
            minDist, index;
        minDist = this.FLOWERS.map(flower => {
            if (flower.show) {
                let d = dist(pos.x, pos.y, flower.pos.x, flower.pos.y);
                distance.push(d);
                return d;
            }
        }).reduce((a, b) => {
            if (b !== undefined) {
                if (a < b) return a;
                else return b;
            }
            return a;
        })

        index = distance.indexOf(minDist);
    
        return {
            minDist,
            index
        };
    }

    //function to check if bee crashed into block
    static isCrashed(pos) {
        return this.BLOCKS.some(block => { 
            if (block.show) {
                return (pos.x > block.pos.x && pos.x < block.pos.x + block.w && pos.y > block.pos.y && pos.y < block.pos.y + block.h);
            }
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

    static reachedFlower(pos) {
        let reachedFlower;
        let {
            minDist,
            index
        } = this.calcDistance(pos);
        if (minDist < this.FLOWERS[index].size * 2) {
            reachedFlower = true;
        } else {
            reachedFlower = false;
        }
        return {
            reachedFlower,
            index
        };
    }

    static init() {
        const canvas = createCanvas(this.CANVAS.w, this.CANVAS.h);
        canvas.parent(UI.DOM.container);
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
        this.population = 0;
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
        rect((width / 2 - 25), (height - 50), 50, 50);

        //draw flowers
        this.FLOWERS.forEach(flower => {
            if (flower.show) {
                flower.draw();
            }
        })

        //draw blocks
        this.BLOCKS.forEach(block => {
            if (block.show) {
                block.draw();
            }
        })

        //draw poopulation of bees
        this.POPULATION.show();
    }

    static pause() {
        this.STOP = !this.STOP;
    }

    static reset() {
        this.POPULATION = new Population();
        this.population = 0;
        this.count = 0;
    }
 
    static update() {
        if (this.count === this.LIFESPAN) {
            this.count = 0;
            this.population = 1;
            this.POPULATION.evaluate();
            this.POPULATION.normalizeFitness();
            this.POPULATION.createMatingPool();
            this.POPULATION.selection();
        }
        this.count = 1;
    }
}