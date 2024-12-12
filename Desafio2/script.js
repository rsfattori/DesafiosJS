function parOuImpar() {
  
    const numero = parseFloat(prompt("Insira o número"));

    if (isNaN(numero))  {
        alert("Por favor, insira um número válido.");
        return;
    }

    if (numero % 2 === 0) {
        alert(`${numero} é par.`);
    } else {
        alert(`${numero} é ímpar.`);
    }
}
