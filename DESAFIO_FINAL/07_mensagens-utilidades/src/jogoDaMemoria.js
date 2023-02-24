class JogoDaMemoria {
    constructor({
        tela,
        util
    }) {
        this.tela = tela;
        this.util = util;

        this.heroisIniciais = [{
                img: './assets/batman.png',
                nome: 'batman'
            },
            {
                img: './assets/cyclops.png',
                nome: 'cyclops'
            },
            {
                img: './assets/mulhermaravilha.png',
                nome: 'mulhermaravilha'
            },
            {
                img: './assets/flash.png',
                nome: 'flash'
            }
        ]
        this.iconPadrao = './assets/ninja.png';
        this.heroisEncondidos = [];
        this.heroisSelecionados = [];
    }

    inicializar() {
        this.tela.atualizarImagens(this.heroisIniciais);
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
    }

    async embaralhar() {
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
        this.tela.exibirCarregando();
        // Vamos esperar 1 segundo para atualizar a tela
        await this.util.timeout(1000);
        this.esconderHerois(copias);
        this.tela.exibirCarregando(false);
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

    exibirHerois(nomeDoHeroi) {
        // Vamos procurar esse heroi pelo nome em nossos heroisIniciais
        // Vamos obter somente a imagem dele
        const {
            img
        } = this.heroisIniciais.find(({
            nome
        }) => nomeDoHeroi === nome)
        // Vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }

    verificarSelecao(id, nome) {
        const item = {
            id,
            nome
        }
        // Vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch (heroisSelecionados) {
            case 0:
                // adicionar a escolha na lista, esperando pelo proximo click
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // Se a quantidade de escolhidos for 1, significa
                // que o usuário só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [opcao1] = this.heroisSelecionados
                // Zerar itens para não selecionar mais de dois
                this.heroisSelecionados = []
                // Conferimos se os nome e ids batem conforme o esperado
                if (opcao1.nome === item.nome &&
                    // Aqui verificamos se são ids diferentes para o
                    // usuario não clicar duas vezes no mesmo
                    opcao1.id !== item.id
                ) {
                    this.exibirHerois(item.nome)
                    // Como o padrão e true, não precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execução
                    return;
                }
                this.tela.exibirMensagem(false)
                break;
        }
    }

    jogar() {
        this.embaralhar();
    }
}