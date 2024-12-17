document.getElementById('gerar').onclick = () => {
    const numero = document.querySelector('#numero').value;
    const resultado = document.querySelector('#resultado');

    if (!numero) {
        resultado.textContent = "Por favor, digite um número valido";
        return;
    }

    let tabuada = `Tabuada do ${numero}\n`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }

    resultado.textContent = tabuada;
};
