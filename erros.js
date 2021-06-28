function tratamentoDeErro(erro){
    //throw "programa encontrou um problema avise o setor de ti"
    throw{
        nome : erro.name,
        msg  : erro.message,
        date : new Date

    }
}
function imprimirNomeCA(obj){
    try{
    console.log(obj.name.toUpperCase())
    }catch(e){
        tratamentoDeErro(e)
    }
    finally{
    console.log("fim do prgrama")
    }
      
}

const obj = {nome: 'zoraide'}

imprimirNomeCA(obj)