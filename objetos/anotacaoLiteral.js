const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c } // antes de JS versao 6
const obj2 = {a,b,c}
console.log(obj1, obj2)

const obj3 = {}
const nomeAtributo = 'valor'
const ValorAtributo = 24
console.log(obj3)

const obj4 = {[nomeAtributo]:ValorAtributo}
console.log(obj4)

const obj5 = {
    f1: function(){ },
    f2() { }
}
console.log(obj5)