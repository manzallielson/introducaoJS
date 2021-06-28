let igualThis = function(param){
    console.log(this === param)
}

igualThis(global)

const obj = {}

igualThis1 = igualThis.bind(obj)
igualThis1(global)
igualThis1(obj)

let igualThisArrow = param => console.log(this === param)

igualThisArrow(global)
igualThisArrow(module.exports)

igualThisArrow1 = igualThisArrow.bind(obj) // bind em arrow function nao faz nada

igualThisArrow1(obj)
igualThisArrow1(module.exports)