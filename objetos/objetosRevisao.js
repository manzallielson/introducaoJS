// Objeto em Javascript = coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Mesa'
produto['marca do produto'] = 'genérica'
produto.preco = 150

console.log(produto)
console.log(produto.nome)
console.log(produto['marca do produto'])

delete produto.preco       // apaga o par chave/valor
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 120000,
    proprietario: {
        nome: "Elson",
        endereco: {
            logadouro: 'Rua ABC, 333',
            cidade: 'Americana'
        }
    },
    condutor: [{
        nome: 'Junior',
        idade: 55
    },
    {
        nome:'José',
        idade: 44
    }],
    calcularSeguro: function(){
        //...
    }
}

carro.proprietario.idade = 32
carro['proprietario']['endereco']['logadouro'] = 'Avanida Brasil, 300'
console.log(carro)