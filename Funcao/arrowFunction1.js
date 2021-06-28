function dobro1(a){
    return 2*a
}
console.log(dobro1(1))

let dobro = function(a){  // funçao anonima
    return 2*a
}
console.log(dobro(2))

dobro = (a) => {return 2 * a}
console.log(dobro(3))

dobro = a => 2 * a //return implicito <= nao preciso por retorno

console.log(dobro(4))

let oi = function(){
    return "oi"
}

console.log(dobro(5))

oi = () => "Oi"

console.log(oi)

oi = _=> "Oi"   // mesma coisa que () imitando a linguagem PROLOG

console.log(oi)