class Lancamento {
    constructor(nome = "generico",valor =0){
        this.nome = nome
        this.valor = valor
    }
}

const produto =  new Lancamento("iphone 15",25000)
console.log(produto)

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome,profissao = "professor"){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super("silva")
    }
}


const filho = new Filho
console.log(filho)








