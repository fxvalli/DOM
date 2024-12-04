const imagens = ['imagem1.jpg', 'imagem2.jpg', 'imagem3.jpg'];
let indiceAtual = 0;

const imagem = document.getElementById('imagem');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

botaoAnterior.addEventListener('click', function () {
    indiceAtual = (indiceAtual === 0) ? imagens.length - 1 : indiceAtual - 1;
    imagem.src = imagens[indiceAtual];
});

botaoProximo.addEventListener('click', function () {
    indiceAtual = (indiceAtual === imagens.length - 1) ? 0 : indiceAtual + 1;
    imagem.src = imagens[indiceAtual];
});
