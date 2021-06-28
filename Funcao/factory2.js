function criarProduto(nome,preco, desconto= 0.1){
    let precoFim = preco-(preco*desconto)
    return {

        nome,
        preco,
        desconto: 0.1,
        precoFinal : precoFim
    }
}

console.log(criarProduto("notebook",3999.99))
console.log(criarProduto("iphone 12",8999.99))