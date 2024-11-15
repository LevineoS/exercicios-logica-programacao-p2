var valorhora = parseFloat(prompt("Informe o valor da sua hora de trabalho: "));
var horast = parseFloat(prompt("Informe quantas horas você trabalhou no mês: "));

var Bruto = valorhora * horast;

var descIR = 0;

if(Bruto <= 2259.00){;
    descIR = 0;

}else if(Bruto <= 1500){;
    descIR = Bruto * 0.075;

}else if(Bruto <= 2500){;
    descIR = Bruto * 0.15;

}else if(Bruto > 2500 && Bruto <= 4664){;
    descIR = Bruto * 0.224;

}else{
    descIR = Bruto * 0.275;
}

var descSind = Bruto *  0.03;
var fgts = Bruto * 0.08;

var liquido = Bruto - descIR - descSind;

console.log("Salário Bruto: R$ ", Bruto);
console.log("Desconto do Imposto de Renda: R$ ", descIR);
console.log("Desconto do Sindicato(3%): R$ ", descSind);
console.log("FGTS: R$ ", fgts);
console.log("Salário Líquido: R$ ", liquido);

alert("Salário Bruto: R$ "+ Bruto);
alert("Desconto do Imposto de Renda: R$ "+ descIR);
alert("Desconto do Sindicato(3%): R$ " + descSind);
alert("FGTS: R$ "+ fgts);
alert("Salário Líquido: R$ "+ liquido);