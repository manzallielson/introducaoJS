const valores = [7.7 ,9.8, 5.0, 10.0];
console.log(valores[2],valores[3]);
//5 10
console.log(valores[4]);
//undefined
valores[4] = 2.3;
console.log(valores[4]);
//2.3
valores[10] = -1.23;
console.log(valores);
//[ 7.7, 9.8, 5, 10, 2.3, <5 empty items>, -1.23 ]
console.log("tamanho do array :" + valores.length);
valores.push(3.9);
console.log("tamanho do array :" + valores.length);
console.log(valores);
console.log(valores.pop());
console.log(valores);
console.log(valores.pop());
console.log(valores);
delete valores[4];
console.log(valores);
console.log(typeof valores);
