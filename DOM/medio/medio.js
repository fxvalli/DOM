const botaoAdicionar = document.getElementById('adicionarItem');
const input = document.getElementById('itemInput');
const lista = document.getElementById('lista');

botaoAdicionar.addEventListener('click', function () {
    const texto = input.value.trim();
    
    if (texto !== '') {
        const li = document.createElement('li');
        li.textContent = texto;
        lista.appendChild(li);
        input.value = ''; // Limpa o campo de entrada
    } else {
        alert('Digite um texto antes de adicionar!');
    }
});
