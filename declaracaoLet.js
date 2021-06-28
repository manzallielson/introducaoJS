let numero = 123
{
    let numero = 321
    console.log("dentro = " + numero)
}
console.log("fora = " + numero) 

let numero2 = 123
function teste(){
    let numero2 = 321
    console.log("dentro = " + numero2)
}
teste()
console.log("fora = " + numero2) 
