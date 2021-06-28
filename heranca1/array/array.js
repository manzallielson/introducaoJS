let  aprovados = new Array('Fulano', 'Beltrano','Sicrano') // quase ninguem usa
console.log(aprovados)

aprovados = ['Fulano', 'Beltrano','Sicrano']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Astrogildo'
aprovados.push('Zeferina')
console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'zoraide'

console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()

console.log(aprovados)
console.log(aprovados.length)

//delete

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)