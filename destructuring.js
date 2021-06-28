// operaçao de desestruturaçao ECMAscript 2015

const pessoa = {

nome: "astrogildo",
idade: 15,
endereco:{
    logradouro: "rua Donald Trump",
    numero: 100
    }
}

//console.log(pessoa.nome)
//console.log(pessoa['nome'])

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

const {nome : n, idade :i } = pessoa

console.log(n)
console.log(i)

const {sobrenome , legal = true} = pessoa

console.log(sobrenome) // undefinid
console.log(legal) // true

console.log(pessoa.endereco.logradouro)
const {endereco:{logradouro, numero, cep}}= pessoa

console.log(logradouro)
console.log(numero)
console.log(cep)

//const{ conta : {agencia, cc}} = pessoa
//console.log(agencia)
//console.log(cc)
