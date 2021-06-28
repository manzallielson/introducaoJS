// function declaration pode ser chamda antes de declarar
function soma(x,y){
    return x+y
}

//function expression nao pode ser chamada antes de declarar

const sub = function(x,y){
    return x-y
}

console.log(soma(3,4))
console.log(sub(3,4))

const mult = function mult(x,y){
    return x*y
}

console.log(mult(3,4))