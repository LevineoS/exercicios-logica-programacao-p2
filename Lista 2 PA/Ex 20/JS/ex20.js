var n1 = parseFloat(prompt("Digite a 1º nota: "));
var n2 = parseFloat(prompt("Digite sua 2º nota: "));
var n3 = parseFloat(prompt("Digite sua 3º nota: "));

var media = (n1 + n2 + n3) / 3;

if(media == 10){;
    console.log("Aprovado com Distinção. Média: ", media);
    alert("Aprovado com Distinção. Média: "+ media);

}else if(media >= 7){;
    console.log("Aprovado. Média: ", media);
    alert("Aprovado. Média: "+ media);
    
}else{;
    console.log("Reprovado. Média: ", media);
    alert("Reprovado. Média: "+ media);
}