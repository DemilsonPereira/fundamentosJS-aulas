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
        ]
        this.iconPadrao = './assets/ninja.png';
        this.heroisEncondidos = []
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
                    id: Math.random() / 0.6
                })
            })
            // ordenar aleatoriamente
            .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias);
        // Vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias);
        }, 1000);
    }

    esconderHerois(herois) {
        /* Vamos trocar a imagem de todos os herios existentes
        pelo icone NINJA como fizemos no costrutor, vamos extrair somente o necessario 
        Usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar o que tiver dentro dos parenteses
        quando nao usamos : (exemplo do id), o JS entende que o nome
        é o mesmo valor. Ex. id: id, vira id*/
        const heroiOcultos = herois.map(({
            nome,
            id
        }) => ({
            id,
            nome,
            img: this.iconPadrao
        }))
        // Atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroiOcultos)
        // Guardamos os herois para trabalhar com eles depois
        this.heroiOcultos = heroiOcultos
    }

    jogar() {
        this.embaralhar();
    }
}