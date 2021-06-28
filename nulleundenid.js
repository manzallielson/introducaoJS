let valor;
console.log(valor); // undefined pois nao foi inicializada
valor = null;
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.nome= undefined; // funciona mas não é apropriado
produto.desconto = null;

console.log(produto)
