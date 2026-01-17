function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

        if (!peso || !altura || altura <= 0) {
            resultado.className = 'resultado mostrar alerta';
            resultado.innerHTML = '⚠️ Preencha os campos corretamente.';
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        let classe = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
            classe = 'alerta';
        } else if (imc < 25) {
            classificacao = 'Peso normal';
            classe = 'normal';
        } else if (imc < 30) {
            classificacao = 'Sobrepeso';
            classe = 'alerta';
        } else {
            classificacao = 'Obesidade';
            classe = 'perigo';
        }

        resultado.className = `resultado mostrar ${classe}`;
        resultado.innerHTML = `
            📊 Seu IMC: <b>${imc}</b><br>
            📌 Classificação: <b>${classificacao}</b>
        `;
    });
}

meuEscopo();
