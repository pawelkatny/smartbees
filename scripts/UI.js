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
        reset: 'reset',
        mutation: 'mutation',
        mutLabel: 'mutLabel'
    }

    static init() {
        const pause = document.getElementById(this.DOM.pause);
        const reset = document.getElementById(this.DOM.reset);
        const block2 = document.getElementById(this.DOM.block2);
        const block3 = document.getElementById(this.DOM.block3);
        const flower2 = document.getElementById(this.DOM.flower2);
        const flower3 = document.getElementById(this.DOM.flower3);
        const mutation = document.getElementById(this.DOM.mutation);
        const mutLabel = document.getElementById(this.DOM.mutLabel);

        block2.checked = 'checked';
        block3.checked = 'checked';
        flower2.checked = 'checked';
        flower3.checked = 'checked';
        mutation.defaultValue = DATA.mutation;
        mutLabel.innerText = `${(DATA.mutation * 100).toFixed(2)} %`;

        pause.addEventListener('click', () => {
            DATA.pause();
        });
        reset.addEventListener('click', () => {
            DATA.reset();
        });

        mutation.addEventListener('change', () => {
            DATA.setMutation(mutation.value);
            mutLabel.innerText = `${(DATA.mutation * 100).toFixed(2)} %`;
            console.log(DATA.mutation)
        })

    }

    static update() {
        const lifespan = document.getElementById(this.DOM.lifespan);
        const population = document.getElementById(this.DOM.population);

        lifespan.innerHTML = DATA.count;
        population.innerHTML = DATA.population;
    }
}