var morangokg = parseFloat(prompt("Informe quantos kgs de morango você comprou: "));
var macakg = parseFloat(prompt("Informe quantos kgs de maçã você comprou: "));
 
var precomorango;
var precomaca;
var desconto;
 
if(morangokg > 8 || precomorango > 25.00){;
    precomorango = morangokg * 2.20;
    desconto = precomorango * 0.10;
 
}else if(morangokg < 8){;
    precomorango = morangokg * 2.50;
 
}else if(macakg > 8 || precomaca > 25.00){;
    precomaca = macakg * 1.50;
    desconto = precomaca * 0.10;
 
}else{;
    precomaca = macakg * 1.80;
}
 
console.log("O valor a ser pago no morango é: R$ ", precomorango);
alert("O valor a ser pago no morango é: R$ "+ precomorango);
console.log("O valor a ser pago na maçã é: R$ ", precomaca);
alert("O valor a ser pago na maçã é: R$ "+ precomaca);
 