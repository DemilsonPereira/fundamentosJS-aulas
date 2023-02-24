const pessoa = {
    _nome: "",
    _idade: 20,

    get nome() {
        return this._nome
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },

    get podeDirigir() {
        return this._idade > 18
    },
    // get idade() {
    //     return this._idade
    // },
    set idade(valor) {
        return this._idade = valor
    }
}

pessoa.nome = 'glenda oliveira'


console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.podeDirigir)
console.log(pessoa.idade)