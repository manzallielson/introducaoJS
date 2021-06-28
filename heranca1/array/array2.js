// metodos sobre array

const pilotos = ['Vetel','Alonso','Leclerc','Sanz'] 
pilotos.pop() // tira o ultimo elemento (o Sanz bateu)
console.log(pilotos)
pilotos.push('Verstappen')// adiciona elemento na ultima posiçao
console.log(pilotos)
pilotos.shift() // remove o primeiro eposicao
console.log(pilotos)
pilotos.unshift('Hamilton') // adiciona elemento na primeira posicao
console.log(pilotos)

//splice remove e adiciona elementos
// acrescenta no meio da lista 2 posicao que comeca adicionar 
//0 a quantidade de posicoes deletadas

//adicionar
pilotos.splice(2,0,'Bottas','Albers') 
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)


// remover e acrscentar
//adicionou 2 e excluiu 3
pilotos.splice(2,3,'Norris','Perez') 
console.log(pilotos)


//slice
pilotos1 = pilotos.slice(2)
console.log(pilotos1)

pilotos2 = pilotos.slice(1,4)
console.log(pilotos2)