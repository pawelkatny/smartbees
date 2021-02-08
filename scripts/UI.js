class UI {
    static DOM = {
        container: 'container',
        lifespan: 'lifespan',
        population: 'population',
        block2: 'block2',
        block3: 'block3',
        flower2: 'flower2',
        flower3: 'flower3',
        pause: 'pause',
        reset: 'reset'
    }

    static init() {
        const pause = document.getElementById(this.DOM.pause);
        const reset = document.getElementById(this.DOM.reset);
        pause.addEventListener('click', () => {
            DATA.pause();
        });
        reset.addEventListener('click', () => {
            DATA.reset();
        })

    }

    static update() {
        const lifespan = document.getElementById(this.DOM.lifespan);
        const population = document.getElementById(this.DOM.population);

        lifespan.innerHTML = DATA.count;
        population.innerHTML = DATA.population;
    }

}