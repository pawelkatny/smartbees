class Population {
    population = [];
    constructor() {
        this.init();
    }

    init() {
        for(let i = 0; i < DATA.POPSIZE; i++) {
            this.population.push(new Bee());
        }
    }

    update() {
        for(let i = 0; i < this.population.length; i++) {
            this.population[i].pos = createVector(width/2, height);
            this.population[i].vel = createVector();
            this.population[i].acc = createVector();
        }
    }

    evaluate() {
        this.population.forEach(bee => {
            bee.calcFitness();
        })
    }

    show() {
        for(let i = 0; i < this.population.length; i++) {
            this.population[i].update();
            this.population[i].show();
        }
    }
}