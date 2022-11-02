// VARIABILI GLOBALI 
const griglia = document.getElementById('griglia');
const bottone = document.getElementById("bottone");
let difficolta = document.getElementById('difficolta');
let bomba = [];

// CREAZIONE DI UN DIV DI FORMA QUADRATA DENTRO LA GRIGLIA

function creazioneQuadrato(num) {

    const div = document.createElement('div');
    div.innerHTML = num;

    if (difficolta.value == 1) {

        div.classList.add('quadrato-facile', 'quadrato');

    } else if (difficolta.value == 2) {

        div.classList.add('quadrato-medio', 'quadrato');

    } else {

        div.classList.add('quadrato-difficile', 'quadrato');
        
    }

    return div;
}


// inseriamo il quadrato creato dalla funzione nella griglia
// griglia.append(creazioneQuadrato());

// creazione dei 100 quadratini 

bottone.addEventListener('click', function () {

    if (difficolta.value == 1) {

        for (let i = 1; i <= 100; i++) {
            let elementoCorrente = creazioneQuadrato();

            elementoCorrente.addEventListener('click', function () {

                if (bomba.includes(parseInt(this.innerHTML))) {
                    this.classList.toggle('boom');
                    this.innerHTML = "boom";
                }
                else {

                    if (!this.classList.contains('active')) {
                        this.classList.add('active');
                    }

                }
            })

            elementoCorrente.innerHTML = i;

            griglia.append(elementoCorrente);
        }
    }

    else if (difficolta.value == 2) {

        for (let i = 1; i <= 81; i++) {
            let elementoCorrente = creazioneQuadrato();

            elementoCorrente.addEventListener('click', function () {
                this.classList.toggle('active');
            })

            elementoCorrente.innerHTML = i;

            griglia.append(elementoCorrente);
        }
    }

    else {

        for (let i = 1; i <= 49; i++) {
            let elementoCorrente = creazioneQuadrato();

            elementoCorrente.addEventListener('click', function () {
                this.classList.toggle('active');
            })

            elementoCorrente.innerHTML = i;

            griglia.append(elementoCorrente);
        }

    }

}, { once: true });


// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

function generaBombe() {

    for (let z = 0; z < 16; z++) {
        let randomBomb = Math.floor(Math.random() * 100) + 1;
        if (bomba.includes(randomBomb)) {
            z--;
        } else {
            bomba.push(randomBomb);
        }
    }
}
generaBombe()
console.log(bomba)
