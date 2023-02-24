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
        this.tela.atualizarImagens(this.heroisIniciais);
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }

    embaralhar() {
        const copias = this.heroisIniciais
            // Duplicar os itens
            .concat(this.heroisIniciais)
            // entrar em cada item e criar um id aleatorio
            .map(item => {
                return Object.assign({}, item, {
                    id: Math.random() / 0.5
                })
            })
            // ordenar aleatoriamente
            .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias);
    }

    jogar() {
        this.embaralhar();
    }
}