const griglia = document.getElementById('griglia');
const bottone = document.getElementById("bottone");

// CREAZIONE DI UN DIV DI FORMA QUADRATA DENTRO LA GRIGLIA

function creazioneQuadrato(num) {

    const div = document.createElement('div');
    div.classList.add('quadrato');
    div.innerHTML = num;

    return div;
}

// inseriamo il quadrato creato dalla funzione nella griglia
// griglia.append(creazioneQuadrato());

// creazione dei 100 quadratini 

bottone.addEventListener('click', function () {

    for (let i = 1; i <= 100; i++) {
        let elementoCorrente = creazioneQuadrato(i);

        elementoCorrente.addEventListener('click', function () {
            this.classList.toggle('active');
        })

        elementoCorrente.innerHTML = i;
        elementoCorrente.classList.add("text-center", "align-items-center");


        griglia.append(elementoCorrente);
    }

}, { once: true });
