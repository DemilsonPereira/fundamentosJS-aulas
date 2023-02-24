// Enquanto não mudar, não para! (Verifica depois executa)
let termoDeParada = true;
let contador = 0;
while (termoDeParada) {
    termoDeParada = contador < 10
    if (contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador++;
}

// Do While Executa depois verifica
// Roda primeira vez e testa a varivel depois!
do {
    console.log('Só uma vez! pois termoDeParada é', termoDeParada);
} while (termoDeParada);