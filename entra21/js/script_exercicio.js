function terreno() {
    let largura = prompt("Qual a largura do terreno? ")
    let comprimento = prompt("Qual o comprimento do terreno? ")

    let dimensao = largura * comprimento
    alert("O tamanho do terreno é: " + dimensao + "m²")
}

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

function Haras() {
    let cavalos = prompt("Quantos cavalos você tem? ")
    let ferraduras = 4
    let haras = cavalos * ferraduras
    alert("São necessárias " + haras)
}

function VocêViveu() {
    let nome = prompt("Qual o seu nome? ")
    let idade = prompt("Qual sua idade? ")
    let dias_vividos = idade * 365
    alert(nome + "já viveu " + dias_vividos + " dias.")
}

function Gasolina() {
    let preço = prompt("Qual o valor da gasolina? ")
    let pago = prompt("Qual o valor pago? ")
    let litros = preço * pago
    alert("Foi colocado " + litros + " litros de gasolina")
}

function Restaurante() {
    let kg = prompt("Quantos kg tem seu prato? ")
    let preço = kg * 12
    alert("Total a pagar é: " + preço)
}

function Dias() {
    let dia = prompt("Insira o dia: ")
    let mes = prompt("Insira o mês: ")
    let cald = 30 - dia
    let calm = mes * 30 - cald
    alert("Se passaram " + calm + " dias.")
}

function Notas(){
    let nota1 = prompt("Qual sua primeira nota? ")
    let nota2 = prompt("Qual sua segunda nota? ")
    let nota3 = prompt("Qual sua terceira nota? ")
    let peso1 = nota1 * 1  
    let peso2 = nota2 * 2
    let peso3 = nota3 * 3
    let média = peso1 + peso2 + peso3 
    alert("Sua média é " + média)
}