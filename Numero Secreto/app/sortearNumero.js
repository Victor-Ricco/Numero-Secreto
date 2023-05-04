const maiorMenor = [1, 1000]

const numeroSecreto = gerarNumAleatorio();

function gerarNumAleatorio() {
    return parseInt(Math.random() * maiorMenor[1] + 1)
}

const elementosMaiorMenor = document.querySelectorAll(".valor");
elementosMaiorMenor.forEach(function(element, index) {
    element.innerText = maiorMenor[index]
});

console.log(numeroSecreto);