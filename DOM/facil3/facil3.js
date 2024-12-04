const campoTexto = document.getElementById('campoTexto');

campoTexto.addEventListener('keydown', function (event) {
    console.log(`Tecla pressionada: ${event.key}`);
});
