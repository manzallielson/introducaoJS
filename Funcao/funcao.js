// funao em js =  first-class object (citizens)
// higher-order function ( linguagem funcional)

// literal
function func1(){}

// armazenar funcao em variavel
const func2 = function(){}

// armazenar funcao em array
let array =[function(a,b){return a+b }, func1,func2]
console.log(array[0](2,3))

// armazenar a funcao em um atributo de objeto
const obj = {}
obj.falar = function() {return "bão ?"}
console.log(obj.falar())



// passar uma funcao como parametro

function chama(func){
    func()
}

chama(function () { console.log ("funcao executando")})


// funao retornando funcao

function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)