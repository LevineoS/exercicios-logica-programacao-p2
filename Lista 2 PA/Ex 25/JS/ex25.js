var respostaspositivas = 0

var p1 = prompt("Telefonou para a vítima? ").toLowerCase();
var p2 = prompt("Esteve no local do crime? ").toLowerCase();
var p3 = prompt("Mora perto da vítima? ").toLowerCase();
var p4 = prompt("Devia para a vítima? ").toLowerCase();
var p5 = prompt("Já trabalhou com a vítima? ").toLowerCase();

if (p1 == "sim") respostaspositivas++;
if (p2 == "sim") respostaspositivas++;
if (p3 == "sim") respostaspositivas++;
if (p4 == "sim") respostaspositivas++;
if (p5 == "sim") respostaspositivas++;



var pontos;

if(respostaspositivas == 5){;
    pontos = "Assassino!";

}else if(respostaspositivas >= 3){;
    pontos = "Cúmplice";

}else if(respostaspositivas == 2){;
    pontos = "Suspeito";

}else{;
    pontos = "Inocente";
}

console.log("Resultado: ", pontos);
alert("Resultado: "+ pontos)