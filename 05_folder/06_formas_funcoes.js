function minhaFuncao1(parametro1) {
    return `eee`;
}

// Assinando para uma variavel usando função anonima
const minhaFuncao2 = function (parametro1) {
    return `eee ${parametro1}`;
}

// Usando arrow function '() => {}'

const minhaFuncao3 = (parametro1) => {
    return `eee ${parametro1}`;
}

// Quando se tem somente um paramentro não precisa colocar dentro dos parentes

const minhaFuncao4 = parametro1 => `eee ${parametro1}`;


// Criando dentro de objetos

const objeto1 = {
    minhaFuncao: parametro1 => `eee ${parametro1}`
}

// Chamado a funcao dentro do objeto

objeto1.minhaFuncao('test');

const objeto2 = {
    minhaFuncao(parametro1) {
        `eee ${parametro1}`
    }
}

objeto2.minhaFuncao();