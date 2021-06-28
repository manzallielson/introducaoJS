const pessoa = {nome : 'João'}
console.log(pessoa)
pessoa.nome = 'benedito'
console.log(pessoa)

//pessoa "aponta" para uma posiçao de memoria
// o que é constante é esse valor de posicao de memoria

pessoa2 = {nome: 'maria'}

//pessoa = pessoa2 da erro TypeError: Assignment to constant variable.

Object.freeze(pessoa)
pessoa.nome = 'André'
pessoa.endereco = 'rua XYZ'
delete pessoa.nome

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Messias'})

pessoaConstante.nome = 'Gabriel'
console.log(pessoaConstante)