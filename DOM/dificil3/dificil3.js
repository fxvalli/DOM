let contador = 0;
let intervalo = null;

const tempo = document.getElementById('tempo');
const botaoIniciar = document.getElementById('iniciar');
const botaoParar = document.getElementById('parar');
const botaoZerar = document.getElementById('zerar');

botaoIniciar.addEventListener('click', function () {
    if (intervalo === null) {
        intervalo = setInterval(function () {
            contador++;
            tempo.textContent = `${contador} segundos`;
        }, 1000);
    }
});

botaoParar.addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null;
});

botaoZerar.addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null;
    contador = 0;
    tempo.textContent = '0 segundos';
});
