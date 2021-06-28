const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const nota1 = 9.871
const nota2 = 6.937

const total=  nota1*peso1 + nota2*peso2
console.log(total)

const media = total/(peso1 + peso2)
console.log(media)
console.log(media.toFixed(2))
console.log(media.toString(2)) // em binario
console.log(typeof media)
console.log(typeof Number)
console.log(7 / 0) // = infinity
console.log('10'/5) // converte string em numero
console.log('3'+2) // concatena
console.log('3'-2)
console.log((3.2 + 5.4).toFixed(2))
console.log((3.2 + 5.4).toString(2))
console.log(Number((3.2 + 5.4).toFixed(2)).toString(2))


