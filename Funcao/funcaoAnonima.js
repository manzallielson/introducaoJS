const soma = function(x,y){return x+y}

const impResultado = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}


impResultado(3,4)

impResultado(3,4,soma)
impResultado(3,4,function(a,b){return a-b})
impResultado(3,4,(x,y) => x * y )


const pessoa = {
    falar : function (){console.log("bão")}
}


pessoa.falar()