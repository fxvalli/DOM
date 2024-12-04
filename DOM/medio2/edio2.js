const botao = document.getElementById('botaoClique');
const contadorParagrafo = document.getElementById('contador');
let contador = 0;

botao.addEventListener('click', function () {
    contador++;
    contadorParagrafo.textContent = `Cliques: ${contador}`;
});
