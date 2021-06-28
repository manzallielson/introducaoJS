
var valorInicial = 823.00
var atualizacao = 1.1
valorFinal=0
console.log(valorInicial* atualizacao)


console.log(Math.pow(1.1,13))

console.log(valorInicial*Math.pow(1.1,12))

for(var i =0;i < 12 ;i++){
    //console.log( valorInicial * Math.pow(1.1,i))  // calcula usando Math.pow
    valorInicial = valorInicial* atualizacao
    valorFinal = valorInicial
}
console.log(valorFinal)
console.log(valorInicial)