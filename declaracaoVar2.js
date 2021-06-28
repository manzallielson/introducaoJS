var numero = 123
{
    var numero = 321
    console.log("dentro = " + numero)
}
console.log("fora = " + numero) 

var numero2 = 123
function teste(){
    var numero2 = 321
    console.log("dentro = " + numero2)
}
console.log("fora = " + numero2) 
teste()