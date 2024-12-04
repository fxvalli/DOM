const botaoToggle = document.getElementById('toggleTexto');
const texto = document.getElementById('texto');

botaoToggle.addEventListener('click', function () {
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        botaoToggle.textContent = 'Esconder';
    } else {
        texto.style.display = 'none';
        botaoToggle.textContent = 'Mostrar';
    }
});
