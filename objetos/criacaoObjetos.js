const obj1 = {}
console.log(obj1)

const obj2 = new Object // mesmo efeito que em obj1
console.log(obj2)

// funcoes construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesc = ()=> preco*(1-desc)
}

const p1 = new Produto('lapis',1.99,0.15)
const p2 = new Produto('notebook',4999.,0.20)

console.log(p1.getPrecoComDesc(),p2.getPrecoComDesc())

// funçoes Factory

function criarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        getSalarioFinal(){
            return salario/30* (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('Joao',2000,4)
const f2 = criarFuncionario('Elizabeth',11000,1)
const f3 = criarFuncionario('Elson',3000,0)

console.log(f1.getSalarioFinal(), f2.getSalarioFinal(), f3.getSalarioFinal())

//Objeto create

const filha = Object.create(null)
filha.nome = 'Yasmin'

console.log(filha)


