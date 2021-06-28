function rand({min = 0, max= 1000}){
    const valor = Math.random() * (max-min)+min
    return(valor)
}
var obj = {max:50, min:40}
console.log(rand(obj))
for(;;){
    console.log(rand(obj))  
}
//console.log(rand({min: 950}))
console.log(rand({}))
console.log(rand())