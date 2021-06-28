const carrinho = [
    '{"nome": "borracha", "preco": 3.50}',
    '{"nome": "lapis", "preco": 2.50}',
    '{"nome": "caderno", "preco": 20.00}',
    '{"nome": "playstation", "preco": 7000}'
]
// retornar um array só com precos
const paraObjeto = json => JSON.parse(json)
const soPreco = produto=> produto.preco

const resultado = carrinho.map(paraObjeto).map(soPreco)

console.log(resultado)