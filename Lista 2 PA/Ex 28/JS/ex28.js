var tipocarne = (prompt("Qual tipo de carne (file, alcatra ou picanha) você comprou?: "));
var kgcarne = parseFloat(prompt("Insira em KG a quantidade de carne que você comprou: "));
var pagamento = (prompt("Qual forma de pagamento? Cartão ou dinheiro?: "));


var precofile;
var precoalcatra;
var precopicanha;
var desconto;


if(tipocarne == "file"){;
    if(kgcarne <= 5){;
        precofile = 4.90;

    }else{;
    precofile = 5.80

    }
}else if(tipocarne == "alcatra"){;
    if(kgcarne <= 5){;
    precoalcatra = 5.90;
    }else{
        precoalcatra = 6.80;
    }
}else if(tipocarne == "picanha"){;
    if(kgcarne <= 5){;
        precopicanha = 6.90;
    }else{;
        precopicanha = 7.80;
    }
}else{
    alert("Tipo de carne inválido! Escolha entre 'File', 'Alcatra' ou 'Picanha'. ");
}

var total = 0;

if(tipocarne == 'file'){;
    total = precofile * kgcarne;
}else if(tipocarne == 'alcatra'){;
    total = precoalcatra * kgcarne;
}else if(tipocarne == 'picanha'){;
    total = precopicanha * kgcarne;
}

var desconto = 0;

if(pagamento == 'cartão'){;
    desconto = total * 0.05;
}

var valortotal = total - desconto


console.log(" CUPOM FISCAL ");
console.log("Tipo de carne: ", tipocarne);
console.log("Quantidade: ", kgcarne.toFixed(2), " Kg");
console.log("Preço total: R$ ", valortotal.toFixed(2));

if (pagamento == 'cartão'){;
    console.log("Desconto de 5%: R$ ", desconto.toFixed(2));
}else{;
    console.log("Sem desconto no dinheiro! ");
}

console.log("Valor a pagar: R$ ", valortotal.toFixed(2));
console.log(" FIM DO CUPOM FISCAL ");