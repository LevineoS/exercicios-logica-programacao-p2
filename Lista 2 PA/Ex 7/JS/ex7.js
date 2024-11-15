var n1 = parseInt(prompt("Digite o 1º número: "));
var n2 = parseInt(prompt("Digite o 2º número: "));
var n3 = parseInt(prompt("Digite o 3º número: "));

var maior, menor;

if(n1 >= n2 && n1 >= n3){;
    maior = n1
}else if(n2 >= n1 && n2 >= n3){;
    maior = n2
}else{;
    maior = n3 
}
console.log("O número maior é: ", maior);
alert("O número maior é: " + maior);

if(n1 <= n2 && n1 <= n3){;
    menor = n1
}else if(n2 <= n1 && n2 <= n3){
    menor = n2
}else{
    menor = n3
}

console.log("O número menor é: ", menor);
alert("O número menor é: "+ menor);