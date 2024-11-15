var n1 = parseInt(prompt("Digite o 1º número: "));
var n2 = parseInt(prompt("Digite o 2º número: "));
var n3 = parseInt(prompt("Digite o 3º número: "));

var maior;

if(n1 >= n2 && n1 >= n3){;
    maior = n1
}else if(n2 >= n1 && n2 >= n3){;
    maior = n2
}else{;
    maior = n3 
}
console.log("O número maior é: ", maior);
alert("O número maior é: " + maior);