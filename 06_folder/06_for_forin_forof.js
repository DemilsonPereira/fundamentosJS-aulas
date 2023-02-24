const textoPar = 'Par'
const textoImpar = 'Impar'

// for (let index = 0; index < 10; index++) {
//     const decisao = index % 2 === 0 ? textoPar : textoImpar;
//     console.log(`O número ${index} é ${decisao}`)
// }


const minhaListaDeTarefas = [{
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Valorz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Super força'
    }
]

// console.log(minhaListaDeTarefas)


// Percorrendo um array de objetos com contador
for (let index = 0; index < minhaListaDeTarefas.length; index++) {
    const item = minhaListaDeTarefas[index];
    console.log(
        `
         id: ${item.id}
         nome: ${item.nome}
        `
    )
}


// Percorrendo um array de objetos sem contador
for (const index in minhaListaDeTarefas) {
    const item = minhaListaDeTarefas[index]
    console.log(`
        Usando For IN
        Nome: ${item.nome}
`)
}

// Percorrendo um array de objetos sem contador
// Não precisa usar index
for (const item of minhaListaDeTarefas) {
    console.log(`
        Usando For OF
        Nome: ${item.nome}
    `)
}