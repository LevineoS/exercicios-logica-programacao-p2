var n1 = parseFloat(prompt("Digite a nota 1: "));
var n2 = parseFloat(prompt("Digite a nota 2: "));

soma = n1 + n2
media = soma/2

if(media == 10){
    console.log("Aluno aprovado com Distinção. ", media);
}else if(media >= 7){
    console.log("Aluno aprovado. ", media);
}else{
    console.log("Aluno reprovado. ", media);
}


