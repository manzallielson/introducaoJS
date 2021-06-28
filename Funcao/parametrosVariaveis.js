function soma(){    // soma (arguments [])
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,4,2,6,123,8,2.1))
console.log(soma(1,2,' teste '))
console.log(soma(1.1, 2.2 ,'teste'))
console.log(soma('a','b','c'))