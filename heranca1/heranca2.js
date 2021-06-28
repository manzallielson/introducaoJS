// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0'   //  <--- NUNCA REPITA ISSO, ESSA CLASSE É A PAI TE TODOS OU SEJA TODOS HERDAM DELA ENTAO NUNCA MECHER

const avo = { attr1 : 'A'}
const pai = {_proto_: avo, attr2: 'B',atributo3:'z'}
const filho = {_proto_: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1 ,filho.attr2, filho.attr3)

const carro ={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velAtual) {
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return`${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo,volvo.velMax)


volvo.aceleraMais(100)
console.log(volvo.status())