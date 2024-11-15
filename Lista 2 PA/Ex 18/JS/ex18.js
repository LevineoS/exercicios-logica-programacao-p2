var dia = parseInt(prompt("Informe uma data (dd): "));
var mes = parseInt(prompt("Informe um mês (mm): "));
var ano= parseInt(prompt("Informe um ano (aaaa): "));

if (dia > 1 && dia < 31 && mes >= 1 && mes <= 12 && ano > 1){;
    console.log("Essa data é válida. ");
    alert("Essa data é válida.");

}else{;
    console.log("Essa data não é válida. ");
    alert("Essa data não é válida. ");
}