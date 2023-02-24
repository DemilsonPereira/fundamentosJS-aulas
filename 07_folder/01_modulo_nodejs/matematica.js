class Matematica {
    static somar(valor1, valor2) {
        return valor1 + valor2;
    }

    static multiplicar(valor1, valor2) {
        return valor1 * valor2;
    }

    static subtrair(valor1, valor2) {
        return valor1 - valor2;
    }

    static dividir(valor1, valor2) {
        return valor1 / valor2;
    }
}

// deixar o arquivo publico
module.exports = Matematica;