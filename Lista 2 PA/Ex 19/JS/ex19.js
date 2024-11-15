var numero = parseInt(prompt("Digite um número inteiro menor que 1000: "));

if(numero >= 0 && numero <= 1000){;
    var centenas = (numero / 100);
    var dezenas = ((numero % 100) / 10);
    var unidades = numero % 10

    console.log("Centenas: ", centenas);
    console.log("Dezenas: ", dezenas);
    console.log("Unidades: ", unidades);

}else{
    console.log("Digite um número menor que 1000");
}