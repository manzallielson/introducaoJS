function area(largura,altura){
    const area = largura * altura
    if (area >20){
        console.log(`valor acima do permitido: ${area}m2`)  // ${area} retorna o valor da funcao
    }

    else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,33,5,21))
console.log(area(3,10))