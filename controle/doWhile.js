function rand (min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0

do{
    opcao = rand (-1,10)
    console.log("opcao : " + opcao)
}while (opcao != -1)

console.log("Acabou")