class Population {
    population = [];
    constructor() {
        this.init();
    }

    init() {
        for(let i = 0; i < POPSIZE; i++) {
            this.population.push(new Bee());
        }
    }

    show() {
        for(let i = 0; i < this.population.length; i++) {
            this.population[i].update();
            this.population[i].show();
        }
    }
}