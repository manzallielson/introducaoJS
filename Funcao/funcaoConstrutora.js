function Carro(velocidadeMaxima = 200, delta =5){
    let velocidadeAtual =0
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }

    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const mobi = new Carro
mobi.acelerar()
console.log(mobi.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)
Ferrari.acelerar()
Ferrari.acelerar()
Ferrari.acelerar()
console.log(Ferrari.getVelocidadeAtual())