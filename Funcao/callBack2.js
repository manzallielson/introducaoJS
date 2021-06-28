const notas = [7, 8, 5.4, 7.7, 9.3, 2.1, 0.5, 10, 4.3, 2.7]

// soluçao sem callBack

const notasBaixas1= []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callBack
const notasBaixas2 = notas.filter(function (nota){return nota <7})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota<7)

console.log(notasBaixas3)