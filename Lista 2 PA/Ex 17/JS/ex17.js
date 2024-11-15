var ano = parseInt(prompt("Digite um ano para verificar se é bissexto: "));

if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){;
console.log("É um ano bissexto.", ano);
alert("O ano é bissexto"+ ano);

}else{;
console.log("Não é um ano bissexto. ", ano);
alert("Não é um ano bissexto"+ ano);
}