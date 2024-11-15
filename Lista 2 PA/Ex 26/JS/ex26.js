var litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "));
var tipoCombus = prompt("Informe o tipo (A para álcool e G para gasolina): ");

var precoalcool = 3.90;
var precogasolina = 5.50;

var total = 0

if(tipoCombus == 'A'){;
    if (litros <= 20){;
        total = litros * precoalcool * 0.97;

    }else{;
        total = litros * precoalcool * 0.95;
    }
}else if(tipoCombus == 'G'){;
    if(litros <= 20){
        total = litros * precogasolina * 0.96;
        
    }else{
        total = litros * precogasolina * 0.94;
    }

}else{
    console.log("Insira um combustível valído!");
    alert("Insira um combustível válido! ");

}

console.log("O valor a ser pago é: R$ ", total.toFixed(2));
alert("O valor a ser pago é: R$ "+ total.toFixed(2));