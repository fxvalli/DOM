const caixa = document.getElementById('caixa');

caixa.addEventListener('mouseover', function () {
    caixa.style.backgroundColor = 'red';
});

caixa.addEventListener('mouseout', function () {
    caixa.style.backgroundColor = 'lightblue';
});
