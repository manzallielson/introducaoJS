// JSON - JavaScript object Notation

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){return a+b+c}
}

convertido = JSON.stringify(obj)
console.log(convertido)
console.log(JSON.parse('{"a":1,  "b": "bom dia", "c": true}'))
console.log(JSON.parse('{"a":1,  "b": "bom dia", "c": true, "d": {"x": 233, "y": 1000},"e":[1,2,3]}'))
