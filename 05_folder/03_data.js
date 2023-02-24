// Meses começam no zero!

const dataAniversario = new Date(2020, 0, 20)
// console.log(dataAniversario);

const primeiraDataDoJS = new Date(0)
// console.log(primeiraDataDoJS);

const hoje = new Date()
console.log(hoje);
console.log(hoje.toString());
console.log(hoje.toLocaleDateString());

//Formato padrão recomendado!
console.log(hoje.toISOString())

const dia = hoje.getDate();
// console.log(dia);
// hoje.setDate(dia + 5);
console.log(hoje);

console.log(`
    Dia: ${hoje.getDate()}
    Mês: ${hoje.getMonth() + 1}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minutos: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
`)