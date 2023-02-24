const Matematica = require('./matematica');

// console.log(Matematica.somar(1, 5));

const readLine = require('readline');
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a operação\n', tipoOperacao => {
            const reusltado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `\nA operação: ${tipoOperacao} de ${valor1} e ${valor2} é ${reusltado}`
            )
            terminal.close();
        })
    });
})