var a = parseFloat(prompt("Insira o valor a: "));
var b = parseFloat(prompt("Insira o valor b: "));
var c = parseFloat(prompt("Insira o valor c: "));

if(a == 0){;
    console.log("Se o a é igual a 0, não é uma equação de segundo grau.");
    alert("Se o a é igual a 0, não é uma equação de segundo grau.");

}else{;
    var delta = (b*b) - (4 * a * c);

    if(delta < 0 ){;
    console.log("O delta é igual a zero, não possui raiz.");
    alert("O delta é igual a zero, não possui raiz.");

    }else if(delta == 0){;
    var raiz = -b / (2 * a);
    console.log("O delta é igual a zero, possui uma raiz real. ");
    alert("O delta é igual a zero, possui uma raiz real. ");

    }else{;
        var raiz = -b / (2 * a);
        console.log("O delta é positivo, logo possuindo duas raizes reais. ");
        alert("O delta é positivo, logo possuindo duas raizes reais. ");
    }
}
