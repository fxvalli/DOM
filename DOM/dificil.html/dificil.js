const formulario = document.getElementById('formulario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita envio do formulário

    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();

    if (!emailValor.includes('@') || !emailValor.endsWith('.com')) {
        mensagemErro.textContent = 'Por favor, insira um e-mail válido.';
    } else if (senhaValor.length < 6) {
        mensagemErro.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    } else {
        mensagemErro.textContent = '';
        alert('Formulário enviado com sucesso!');
    }
});
