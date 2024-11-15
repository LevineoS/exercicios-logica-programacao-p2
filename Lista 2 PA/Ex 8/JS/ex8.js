var p1 = parseFloat(prompt("Digite o 1º preço: "));
var p2 = parseFloat(prompt("Digite o 2º preço: "));
var p3 = parseFloat(prompt("Digite o 3º preço: "));

var produtoescolhido;

if(p1 <= p2 && p1 <= p3){;
    produtoescolhido = p1
}else if(p2 <= p1 && p2 <= p3){
    produtoescolhido = p2 
}else{
    produtoescolhido = p3
}

console.log("O mais barato é o de: R$ ", produtoescolhido);
alert("O mais barato é o de: R$ "+ produtoescolhido);