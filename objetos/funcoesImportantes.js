const pessoa = {
nome: 'rebeca',
idade: 2,
peso: 10
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))
// var array1 = Object.entries(pessoa)
//array.forEach(...)

Object.entries(pessoa).forEach(([chave,valor])=> console.log(`${chave}: ${valor}`))


Object.defineProperty(pessoa, "dataNascimento",{enumerable: true,writable: false, value: '01/01/2019'})
//enumerable permite vizualizar
//writable permite sub-escrever


pessoa.dataNascimento = "30-jul-2018"
console.log(pessoa)

const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c:3 ,d:4}

const obj = Object.assign(destino,o1,o2)

console.log(destino)
console.log(o1)
console.log(o2)
console.log(obj)