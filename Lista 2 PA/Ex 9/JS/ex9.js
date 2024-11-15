var n1 = parseInt(prompt("Digite o 1º número: "));
var n2 = parseInt(prompt("Digite o 2º número: "));
var n3 = parseInt(prompt("Digite o 3º número: "));

var maior, meio, menor;

if(n1 >= n2 && n1 >= n3){;
    maior = n1;
    if(n2 >= n3){;
        meio = n2;
        menor = n3;
    }else{;
        meio = n3;
        menor = n2;
    }
}else if(n2 >= n3 && n2 >= n3){;
    maior = n2;
    if(n1 >= n3){;
        meio = n1
        menor = n3
    }else{
        meio = n3
        menor = n1
    }
}else{
    maior = n3
    if(n1 >= n2){
        meio = n1
        menor = n2
    }else{
        meio = n2
        menor = n1
    }
}

console.log("Os números em ordem são: ", maior, meio, menor);
alert("Os números em ordem são: ", maior, meio, menor);