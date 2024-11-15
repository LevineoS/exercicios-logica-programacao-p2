var salario = parseFloat(prompt("Informe seu salário atual: "));

var aumento, reajuste;


if(salario <= 280){;
    aumento = salario * 0.20;
    reajuste = 20;
}else if(salario >= 280 && salario <= 700){;
    aumento = salario * 0.15
    reajuste = 15
}else if(salario >= 700 && salario <= 1500){;
    aumento = salario * 0.10
    reajuste = 10
}else{
    aumento = salario * 0.05
    reajuste = 5
}

var novosalario = salario + aumento

console.log("Salário antes do reajuste: R$ "+ salario);
console.log("Percentual de aumento: "+ reajuste + "%");
console.log("Valor do aumento: R$"+ aumento);
console.log("Novo salário após o aumento: R$"+ novosalario);

alert("Salário antes do reajuste: R$ "+ salario);
alert("Percentual de aumento: "+ reajuste + "%");
alert("Valor do aumento: R$"+ aumento);
alert("Novo salário após o aumento: R$"+ novosalario);