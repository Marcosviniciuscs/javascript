// +  -  *  /  %  **

// OPERADORES ARITMÈTICOS
let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ** n2);

//OPERADORES DE ATRIBUIÇÂO
let n3 = 20 ;

n3 = n3  + 15;

n3 += 15; 

//Incremento e decremento - 
let i = 0;
i += 1;

i -= 1;

i *= 1;

i++;

i--;

//operadores de comparação 

/* igualdade de valor == 

igualdade de valor e tipo ===

< , > , <=, >=

!= valores diferentes 

!== valores de tipos diferentes

*/


console.log(n1, n2 , n3);

console.log(n2 < 10);
console.log(n2 !== 11);


/*Para uma pesssoa viajar para o exterior: 
-precisa ser maior de 18 anos 
OU 
acompanhado com os pais 
*/

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

console.log(`Pode viajar: ${podeViajar}`);

console.log(n1, n2, n3);
n1 = 6;
n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`)
console.log((3*2)**2);
