const tabuleiro = document.getElementById('tabuleiro');

// Conteúdo das cartas
const cartas = ['A', 'A', 'B', 'B', 'C', 'C'];

// Embaralhar as cartas
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar o jogo
let cartasEmbaralhadas = embaralhar(cartas);
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;

// Criar as cartas no DOM
cartasEmbaralhadas.forEach((conteudo, indice) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.valor = conteudo;
    carta.dataset.indice = indice;
    carta.textContent = '?'; // Ocultamos o conteúdo inicialmente
    tabuleiro.appendChild(carta);
});

// Evento de clique nas cartas
tabuleiro.addEventListener('click', function (event) {
    const carta = event.target;

    if (!carta.classList.contains('carta') || carta.classList.contains('revelada') || bloqueio) {
        return;
    }

    // Revelar a carta
    carta.textContent = carta.dataset.valor;
    carta.classList.add('revelada');

    if (!primeiraCarta) {
        // Seleciona a primeira carta
        primeiraCarta = carta;
    } else {
        // Seleciona a segunda carta
        segundaCarta = carta;
        bloqueio = true;

        // Verificar se as cartas combinam
        if (primeiraCarta.dataset.valor === segundaCarta.dataset.valor) {
            // Cartas iguais, mantê-las reveladas
            primeiraCarta = null;
            segundaCarta = null;
            bloqueio = false;
        } else {
            // Cartas diferentes, esconder novamente após 2 segundos
            setTimeout(() => {
                primeiraCarta.textContent = '?';
                primeiraCarta.classList.remove('revelada');
                segundaCarta.textContent = '?';
                segundaCarta.classList.remove('revelada');
                primeiraCarta = null;
                segundaCarta = null;
                bloqueio = false;
            }, 2000);
        }
    }
});
