//exercicio 1 
function terreno() {
    let largura = prompt("Qual a largura do terreno? ")
    let comprimento = prompt("Qual o comprimento do terreno? ")

    let dimensao = largura * comprimento
    alert("O tamanho do terreno é: " + dimensao + "m²")
}

//exercicio 2
function Padaria() {
    let pao = prompt("Quantos pães foram vendidos? ")
    let broa = prompt("Quantas broas foram vendidas? ")
    let valor_pao = 0.12
    let valor_broa = 1.50
    let valor_total = valor_pao + valor_broa
    alert("Faturamento arrecadado: " + valor_total)
    let valor_poupança = valor_total * 0.10
    alert("Valor para a poupança: " + valor_poupança)
}

//exercicio3
function Haras() {
    let cavalos = prompt("Quantos cavalos você tem? ")
    let ferraduras = 4
    let haras = cavalos * ferraduras
    alert("São necessárias " + haras)
}
 
//exercicio4
function VocêViveu() {
    let nome = prompt("Qual o seu nome? ")
    let idade = prompt("Qual sua idade? ")
    let dias_vividos = idade * 365
    alert(nome + "já viveu " + dias_vividos + " dias.")
}

//exercicio5
function Gasolina() {
    let preço = prompt("Qual o valor da gasolina? ")
    let pago = prompt("Qual o valor pago? ")
    let litros = preço * pago
    alert("Foi colocado " + litros + " litros de gasolina")
}

//exercicio6
function Restaurante() {
    let kg = prompt("Quantos kg tem seu prato? ")
    let preço = kg * 12
    alert("Total a pagar é: " + preço)
}


//exercicio7
function Dias() {
    let dia = prompt("Insira o dia: ")
    let mes = prompt("Insira o mês: ")
    let cald = 30 - dia
    let calm = mes * 30 - cald
    alert("Se passaram " + calm + " dias.")
}


//exercicio8
function Notas() {
    let nota1 = prompt("Qual sua primeira nota? ")
    let nota2 = prompt("Qual sua segunda nota? ")
    let nota3 = prompt("Qual sua terceira nota? ")
    let peso1 = nota1 * 1
    let peso2 = nota2 * 2
    let peso3 = nota3 * 3
    let média = peso1 + peso2 + peso3
    alert("Sua média é " + média)
}

//exercicio9
function Fábrica() {
    let camisa1 = prompt("Informe a quantidade de blusas pequenas: ")
    let camisa2 = prompt("Informe a quantidade de blusa média: ")
    let camisa3 = prompt("informe a quantidade de blusa grande: ")
    let preço1 = 10
    let preço2 = 12
    let preço3 = 15

    let arrecadado = (camisa1 * preço1) + (camisa2 * preço2) + (camisa3 * preço3)
    alert("Valor arrecadado é: " + arrecadado)
}

//exercicio10 
function Cartesiano() {
    let x1 = Number(prompt("Valor do ponto x1"))
    let y1 = Number(prompt("valor do ponto y1"))
    let x2 = Number(prompt("valor do ponto x2"))
    let y2 = Number(prompt("valor do ponto y2"))
    let calcule = Number(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
    alert(" A distância entre os dois pontos é: " + calcule)
}
 

//exercicio11
function Tempo(){
 let tempo = prompt("Quantidade de dias sem acidentes: ")
 let dias = tempo * 1 
 let mes = tempo / 30
 let ano = tempo / 12
 alert("A quantidade de tempos sem acidentes é de: " + dias + " dias " + mes + " mês " + ano + " ano")
}

//exercicio12
function Salário(){
    let salario = prompt("Qual seu salário? ")
    let aumento = salario * 0.15
    let desconto = aumento * 0.8
    alert("Salário inicial " + salario + " Aumento " + aumento + " desconto" + desconto)
}

//exercicio13
function Inteiro(){
    let centena = prompt("Digite um número em centena: ")
    let dezena = prompt("Digite um número em dezena: ")
    let unidade = prompt("Digite um número em unidade: ")
    alert("Numero centena: " + centena + "\nNúmero dezena: " + dezena + "\nNúmero unidade: " + unidade)
}

//exercicio14
 const raio1 = 10
 const area = calcularAreaPizza(Raio);
 console.log("A área da pizza com raio ${raio} é: ${area.tofixed(2)}cm²")
 let raio = prompt("Digite o valor do raio da pizza:")
 raio = parseFloat(raio) 

