function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log('Evento de submit capturado.');
        
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        const imc = (peso / (altura * altura)).toFixed(2);
        resultado.innerHTML = `Seu IMC é: ${imc}`;
    });
}
meuEscopo();
