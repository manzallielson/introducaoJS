function rand({min = 0, max= 1000}){
    /*se fosse c:
    if(min>max){
        var temp = max
        max = min
        min = temp
    }*/

    if(min>max){
        [min,max] = [max,min] // trocando as variaveis de lugar
    }
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}
console.log(rand([50, 100]))
console.log(rand([600]))
console.log(rand([ , 600]))
console.log(rand([700,200]))