// jeito antigo pré 2015

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(undefined,2,3) , soma1(1,3,4), soma1(), soma1(2,2),soma1(0,0,0))

//jeito 2, 3 e 4

function soma2(a,b,c){
    a=a !== undefined ? a:1
    b =1 in arguments ? b:1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(0,2,3) , soma2(1,3,4), soma2(), soma2(2,2),soma2(0,0,0))

// jeito novo ECMAScript 2015 

function soma3(a=1,b=1,c=1){
return a + b + c
}

console.log(soma3(0,2,3) , soma3(2,3,4), soma3(), soma3(2,2),soma3(0,0,0))

console.log(soma3(1.1 , 2.5 , 3.0))