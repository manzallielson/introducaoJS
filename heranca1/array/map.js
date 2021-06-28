const nums =  [1,2,3,4,5]

let resultado = nums.map(e => e * 2)
console.log(nums)
console.log(resultado)

const soma10 = e=> e +10
const triplo = e => 3 * e
resultado = nums.map(soma10).map(triplo).map(e=> `R$ ${e},00`)

console.log(resultado)