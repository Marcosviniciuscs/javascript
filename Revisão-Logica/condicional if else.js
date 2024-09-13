/*Para uma pesssoa viajar para o exterior: 
-precisa ser maior de 18 anos 
OU 
acompanhado com os pais 
*/

let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;

if (!comprouBilhete){
    console.log("Não comprou o bilhete");
} else {
    if(idade >= 18){
        console.log("E maior de idade , pode viajar");
    } else{
        console.log("Opa! e menor de idade");
    }
}

let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media: ${media}`);

if (n1 === 0 || n2 === 0){
    console.log("Reprovado");
} else if (media < 7){
    console.log("reprovado. Mas ha como recuperar.");
}else {
    console.log("Aprovado!");
}