class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){ console.log(`meu nome é ${this.nome}`)}
}

const p1 = new Pessoa("jose")
p1.falar()

const criarPessoa = nome => {
    return{
        falar: _ => console.log(`meu nome é ${nome}`)
    }
}
const p2 = criarPessoa("Zenaide")
p2.falar()