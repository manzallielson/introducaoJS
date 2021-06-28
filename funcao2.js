const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
//arrow function comretorno explicito
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,3))

//arrow com retorno implicito

const subtracao = (a,b)  => a-b
console.log(subtracao(2,3))

const imp = a => console.loag(a)
imp = ("FATEC")
