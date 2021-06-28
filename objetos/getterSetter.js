const sequencia = {
    _xyz: 1,
    // Getter
    get valor() { return this._xyz++ },

    // Setter
    set valor(valor) {
        if(valor > this._xyz) {
            this._xyz = valor
        }
    }
}

console.log(sequencia.valor)
console.log(sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor)
console.log(sequencia.valor)

sequencia.valor = 100

console.log(sequencia.valor)
console.log(sequencia.valor)

sequencia._xyz = 100          // pode mexer mas não deve

console.log(sequencia.valor)
console.log(sequencia.valor)