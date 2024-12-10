function somarNumeros() {
  
    const numero1 = parseFloat(prompt("numero1"));
    const numero2 = parseFloat(prompt("numero2"));
    console.log(numero1)
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    const soma = numero1 + numero2;

    alert(`A soma dos números é: ${soma}`);
}
