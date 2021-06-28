const faculdade = 'FATEC';
console.log(faculdade.charAt(4));
console.log(faculdade.charAt(5));
console.log(faculdade.charCodeAt(3));
console.log(faculdade.indexOf('E'));
console.log(faculdade.substring(1));
console.log(faculdade.substring(1,3));
console.log(faculdade.charAt(4));
console.log('ESCOLA '.concat(faculdade).concat(' !!!'));
console.log('ESCOLA ' + faculdade + ' !!!');// + operador de concatenaçao
console.log(faculdade.replace('E','Z'));
console.log(faculdade.replace(faculdade.charAt(3),'Z'));
console.log('ana, maria, pedro'.split(','));

var frase = 'A FATEC é a melhor faculdade de Americana';
console.log(frase.replace(/A/g,'a'));
console.log(frase.replace(/[A-Z]/g,'a'));

