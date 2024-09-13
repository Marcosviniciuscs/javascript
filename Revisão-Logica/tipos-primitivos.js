//string , number (int, floats), boolean
let minha_var = "minha string";
let var1 = 10;
let _var = 10;

let minhavar2 = 'minha "string" com aspas duplas ';
console.log(minhavar2); 

var minhavar3 ='minha template literal';
console.log(minhavar3);


//concatenação
//let idade = 40 ;
//let msg = "Eu possuo " + idade + " anos";
//console.log(msg);

//Mostrar strings e variaveis atraves do "dolar"
let idade1 = 40;
let msg = `Eu possuo ${idade1}`;
console.log(msg);

console.log(typeof msg, typeof idade1, typeof minha_var, "---" , 20);

const n1 = 10;
const n2 = 1.1;
console.log(`O tipo de n1 é ${typeof n1} e o seu valor é ${n1}`);
console.log(`O tipo de n2 é ${typeof n2} é o seu valor é ${n2}`);


const isValid = true;
console.log(`isValid: ${isValid}`);

//undefined, null,symol(ES2015)

let varTeste = null;//Quando crio uma variavel e nao atribuo valor a ela , utilizo atributo null.
console.log(varTeste);
console.log(typeof varTeste);

varTeste = 10;
console.log(typeof varTeste, varTeste);