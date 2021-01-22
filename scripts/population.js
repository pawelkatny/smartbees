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
        let maxFitness = 0;
        this.population.forEach(bee => {
            bee.calcFitness();
        })

        this.population.forEach(bee => {
            if (maxFitness < bee.fitness) {
                maxFitness = bee.fitness;
            }
        })
        this.maxFitness = maxFitness;
    }

    normalizeFitness() {
        this.population.forEach(bee => {
            bee.fitness /= this.maxFitness;
        })
    }

    createMatingPool() {
        this.matingPool = [];
        this.population.forEach(bee => {
            let maxBeePool = bee.fitness * 100;

            for(let i = 0; i < maxBeePool; i++) {
                this.matingPool.push(bee);
            }
        })
    }

    selection() {
        let newPopulation = [];
        for (let i = 0; i < DATA.POPSIZE; i++) {
            let child;
            let beeA = random(this.matingPool).dna;
            let beeB = random(this.matingPool).dna;
            child = beeA.crossover(beeB);   
            newPopulation.push(new Bee(child));
        }
        this.population = newPopulation;
    }

    show() {
        for(let i = 0; i < this.population.length; i++) {
            this.population[i].update();
            this.population[i].show();
        }
    }
}