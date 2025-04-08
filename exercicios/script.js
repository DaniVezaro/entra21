function encontreAssassino(){
    var contador = 0
    var opcao = prompt ("Você telefonou para a vítima: \n1 - Sim \n2 - Não");
    if(opcao == 1){
        contador++
    }
    opcao = prompt("Esteve no local do crime: \n1 - Sim \n2 - Não")
    if (opcao == 1){
        contador++
    }
    opcao = prompt("Mora perto da vítima: \n1 - Sim \n2 - Não")
    if (opcao == 1){
        contador++
    }
    opcao = prompt("Devia para a vítima: \n1 - Sim \n2 - Não")
    if (opcao == 1){
        contador++
    }
    opcao = prompt("Já trabalhou com a vítima: \n1 - Sim \n2 - Não")
    if (opcao == 1){
        contador++
    }
    
    if (contador < 2){
        alert("Você é inocente")
    } else if (contador == 2){
        alert("Você é suspeito")
    } else if (contador >= 3 && contador <= 4){
        alert("Você é cumplice")
    } else{
        alert("Você é o Assassino!")
    }
}
// estoque médio

function Estoquemédio(){
    var minimo = 0
    const quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque: "))
    const quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque: "))
    if (quantidadeMinima >= 0 && quantidadeMaxima >= 0) {
    const estoquemedio = (quantidadeMinima + quantidadeMaxima) / 2
    alert("O estoque médio é: " + estoquemedio)
    } else {
        alert("Valores inválidos! A quantidade mínima e máxima devem ser maiores ou iguais a zero.")
    } 
}

// Turno em que estuda 

function Turno(){
    let turno = prompt("Qual turno você estuda: \n1 - Matutino \n2 - Vespertino \n3 - Noturno ")
    if(turno <= 1){
        alert("Bom dia")
    }else if(turno == 2){
        alert("Boa tarde")
    }else{ (turno > 3)
    alert ("Boa noite")
    }
}