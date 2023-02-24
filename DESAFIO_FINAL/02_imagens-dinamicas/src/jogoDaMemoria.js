class JogoDaMemoria {
    constructor({
        tela
    }) {
        this.tela = tela;

        this.heroisIniciais = [{
                img: './assets/batman.png',
                name: 'batman'
            },
            {
                img: './assets/cyclops.png',
                name: 'cyclops'
            },
            {
                img: './assets/mulhermaravilha.png',
                name: 'mulhermaravilha'
            },
            {
                img: './assets/flash.png',
                name: 'flash'
            }
        ];
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}