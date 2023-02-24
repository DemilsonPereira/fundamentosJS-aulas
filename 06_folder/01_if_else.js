let frutaExistenteNoMercado = false;
let temCPUSUficiente = true;


// Obeter valkores do terminal

const args = process.argv
const saldo = args[args.length - 1]
console.log('args', args);
console.log('saldo', saldo);

if (isNaN(saldo)) {
    console.log('Valor invalido!!');
    return;
}