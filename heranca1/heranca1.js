const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'V40',
    veloMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__ ===null)

function MeuObject(){ }
console.log(typeof Object, typeof MeuObject)
console.log(Object.prototype,MeuObject.prototype)
