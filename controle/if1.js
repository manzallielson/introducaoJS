function noticia(nota){

    if(nota<6){
        console.log("Reprovado")
    }else if(nota<10){
        console.log("Aprovado")
    }else if(nota == 10){
        console.log("Aprovado!!!!!!")
    }
    
    }
    
    noticia(6.1)
    noticia(5.9)
    noticia(10)
    
    function ehVerdade(valor) {
        if(valor) console.log("É verdade: " + valor)
    }
    
    ehVerdade()
    ehVerdade(null)
    ehVerdade(undefined)
    ehVerdade(NaN)
    ehVerdade('')
    ehVerdade(0)
    ehVerdade(-1)
    ehVerdade(1)
    ehVerdade(' ')
    ehVerdade('?')
    ehVerdade([])
    ehVerdade([1,2])
    ehVerdade({})
    