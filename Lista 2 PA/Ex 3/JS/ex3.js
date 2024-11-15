var sexo = prompt("Digite seu sexo, F ou M: ");

if(sexo == 'F' || sexo == 'f'){
    console.log("Seu sexo é feminino. ");
}else if(sexo == 'M' || sexo == 'm'){
    console.log("Seu sexo é masculino. ");
}else{
    console.log("Insira um sexo válido.");
}