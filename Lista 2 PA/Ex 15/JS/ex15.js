var l1 = parseFloat(prompt("Insira o lado 1: "));
var l2 = parseFloat(prompt("Insira o lado 2: "));
var l3 = parseFloat(prompt("Insira o lado 3: "));

if(l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1){;


var triangulo;

if(l1 == l2 && lado == l3){
    triangulo = "Equilátero"

}else if(l1 == l2 || l1 == l3 || l2 == l3){;
    triangulo = "Isósceles"

}else{
    triangulo = "Escaleno"
}

console.log("Os lados são compatíveis com um triângulo.");
console.log("Os lados vão formar um triângulo: ", triangulo);
alert("Os lados vão formar um triângulo: "+ triangulo);
}else{
    console.log("Os lados não são compatíveis com um triângulo.");
}