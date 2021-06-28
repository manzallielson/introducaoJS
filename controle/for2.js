const notas = [6.7, 8.2, 4.1, 8.1, 7.7]

for (let i in notas){

    console.log(i,notas[i])
}

const pessoa = {
    nome : "Austregésio",
    sobrenome: "Siqueira",
    idade: 78,
    peso: 60
}

for (let atributo in pessoa ){
    //console.log(atributo,pessoa[atributo])
    console.log(`${atributo} => ${pessoa[atributo]}`)
}