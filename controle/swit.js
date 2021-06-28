const imprimirResultado = function (nota){
    switch(Math.floor(nota)) {
        case 10:
            console.log("APROVADO!!!!!")
            break
        case 9:
        case 8:
        case 7:
        case 6:
            console.log("Aprovado")
            break
        default:   // Diferente de todos os outros
        console.log("Reprovado")
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)

imprimirResultado(5)
imprimirResultado(0)