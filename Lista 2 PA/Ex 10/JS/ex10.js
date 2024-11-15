var turno = prompt("Informe seu turno, M - matutino, V - vespertino e N - noturno:  ");

if(turno == 'M' || turno == 'm'){;
    console.log("Bom dia!");
    alert("Bom dia!");

}else if(turno == 'V' || turno == 'v'){;
    console.log("Boa Tarde!");
    alert("Boa Tarde!");

}else if(turno == 'N' || turno == 'n'){
    console.log("Boa noite!");
    alert("Boa noite!");
}else{
    console.log("Turma inválida!");
    alert("Turma inválida!");
}

