class UI {
    static DOM = {
        container: 'container',
        lifespan: 'lifespan',
        population: 'population',
        popSize: 'popSize',
        popSizeLabel: 'popSizeLabel',
        block2: 'B2',
        block3: 'B3',
        flower2: 'F2',
        flower3: 'F3',
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
        const popSize = document.getElementById(this.DOM.popSize);
        const popSizeLabel = document.getElementById(this.DOM.popSizeLabel);

        popSize.defaultValue = DATA.popSize;
        popSizeLabel.innerText = DATA.popSize;
        block2.checked = true;
        block3.checked = true;
        flower2.checked = true;
        flower3.checked = true;
        mutation.defaultValue = DATA.mutation;
        mutLabel.innerText = `${(DATA.mutation * 100).toFixed(2)} %`;

        pause.addEventListener('click', () => {
            DATA.pause();
        })

        reset.addEventListener('click', () => {
            DATA.reset();
        })

        popSize.oninput = () => {
            DATA.popSize = popSize.value;
            popSizeLabel.innerText = popSize.value;
        }

        mutation.oninput = () => {
            DATA.mutation = mutation.value;
            mutLabel.innerText = `${(DATA.mutation * 100).toFixed(2)} %`;
        }

        block2.addEventListener('click', () => {
            if (!block2.checked) {
                DATA.BLOCKS[1].show = false;
            } else {
                DATA.BLOCKS[1].show = true;
            }
        })

        block3.addEventListener('click', () => {
            if (!block3.checked) {
                DATA.BLOCKS[2].show = false;
            } else {
                DATA.BLOCKS[2].show = true;
            }
        })

        flower2.addEventListener('click', () => {
            if(!flower2.checked) {
                DATA.FLOWERS[1].show = false;
            } else {
                DATA.FLOWERS[1].show = true;
            }
        })

        flower3.addEventListener('click', () => {
            if(!flower3.checked) {
                DATA.FLOWERS[2].show = false;
            } else {
                DATA.FLOWERS[2].show = true;
            }
        })

    }

    static update() {
        const lifespan = document.getElementById(this.DOM.lifespan);
        const population = document.getElementById(this.DOM.population);

        lifespan.innerHTML = DATA.count;
        population.innerHTML = DATA.population;
    }
}