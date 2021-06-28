const pessoa = {
    saudacao : "Bom dia",
    falar(){
        console.log('falei',this.saudacao)
    }
}

pessoa.falar() // this =  pessoa

const falar = pessoa.falar
falar()        // this != pessoa

const falar2 =  pessoa.falar.bind(pessoa) // falar2  deve ser executado no contexto de "pessoa"

falar2()       // this =  pessoa
