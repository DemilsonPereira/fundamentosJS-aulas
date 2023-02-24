function nomeDaFuncao(parametro1) {
    // Bloco de codigo
}

function queDiaEHoje() {
    const data = new Date();
    console.log(`Hoje é dia: ${data.getDate()}`);
}

queDiaEHoje();


function soma(valor1, valor2) {
    console.log(`A soma de ${valor1} + ${valor2} é =`, valor1 + valor2);
}

soma(2, 3)

// Funões podem retornar valores

function somaReturn(num1, num2) {
    return num1 + num2;
}

const num1 = 10;
const num2 = 20;
const resultado = somaReturn(num1, num2);

console.log(`O resultado da soma usando o return é ${resultado}`);

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

console.log(`O resultado da multiplicação é:`, multiplicar(10, 20));