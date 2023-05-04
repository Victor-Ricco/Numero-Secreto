function verificaValor (chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido</div>`;
    }
    
    if (numMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: O numero deve estar entre ${maiorMenor[0]} e ${maiorMenor[1]}</div>`;
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O numero secreto é ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é menor <i class="fa-solid fa-arrow-down" style="color: #222831;"></i></div>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero secreto é maior <i class="fa-solid fa-arrow-up" style="color: #222831;"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numMaiorMenor(numero) {
    return numero > maiorMenor[1] || numero < maiorMenor[0];
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})
