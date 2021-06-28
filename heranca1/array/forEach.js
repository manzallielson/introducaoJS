const aprovados = ['Fulano', 'Beltrano','Sicrano']

aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const mostrarAprovados = aprovados=> console.log(aprovados)
aprovados.forEach(mostrarAprovados)