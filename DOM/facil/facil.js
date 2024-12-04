const botao = document.getElementById('trocarTexto');
const paragrafo = document.getElementById('texto');

botao.addEventListener('click', function () {
    paragrafo.textContent = 'Você clicou no botão!';
});
