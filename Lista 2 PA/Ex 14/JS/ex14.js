var n1 = parseFloat(prompt("Insira sua 1º nota: "));
var n2 = parseFloat(prompt("Insira sua 2º nota: "));

var media = (n1 + n2) / 2;

var conceito;
var situação;

if(media >= 9.0 && media <= 10.0){;
    conceito = "A";
    situação = "Aprovado!"

}else if(media >= 7.5 && media <= 9.0){;
    conceito = "B";
    situação = "Aprovado!"

}else if(media >= 6.0 && media <= 7.5){;
    conceito = "C";
    situação = "Aprovado!"

}else if(media >= 4.0 && media <= 6.0){;
    conceito = "D";
    situação = "Reprovado!"

}else{;
    conceito = "E";
    situação = "Reprovado!"
}

console.log("Notas: ", n1, " e ", n2);
console.log("Média: ", media);
console.log("Conceito ", conceito);
console.log(situação);

alert("Notas: "+ n1, " e "+ n2);
alert("Média: "+ media);
alert("Conceito: "+ conceito);
alert(situação);