var nome = "maria"
let valor = 2.3
let idade = 15
var casado = false
let pessoa = { nome: "Lucia", idade: 12}
let cores = ["amarelo", "vermelho", "verde"]

document.writeln(nome + "<br>") //adiciona uma quebra de linha após cada valor
document.writeln(idade + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>") //para exibir o objeto de forma legivel
document.writeln(cores + "<br>") //para exbir o array de forma legivel

document.writeln("<br><hr><br>")

//os operadores atuam sobre os valores (operandos) para produzir um novo valor.
//os operadores aritméticos são os mais comuns:

document.writeln("<hr>"+ "<br>"+"Operadores Aritméticos" +"<br>")
document.writeln(3+2 +"<br>")
document.writeln(8*2 +"<br>")
document.writeln(10/4 +"<br>")
document.writeln(9-5 +"<br>")
document.writeln("<br>"+ "9"+"5 <br>")

//javascript define alguns operadores aritméticas de forma abreviada

var count = 0; //define uma variável
document.writeln(count+ "<br>")

count++;  //incrementa a variável
document.writeln(count+ "<br>")

count--; //descrementa a variável
document.writeln(count+ "<br>")

count += 2; //soma 2: o mesmo que count = count + 2;
document.writeln(count+ "<br>")

count *= 3; //multiplica por 3: o mesmo que count = count * 3;
document.writeln(count+ "<br>")

count  // => 6: nomes de variáveis também são expressões
document.writeln(count+ "<br>")

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que, etc. São avaliados como verdadeiros ou falsos
/*
var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.
x == y // => falso: igualdade
x != y // => verdadeiro: desigualdade
x < y // => verdadeiro: menor que
x <= y // => verdadeiro: menor ou igual a
x > y // => falso: maior que
x >= y // => falso: maior ou igual a
"two" == "three" // => falso: as duas strings são diferentes
"two" > "three" // => verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y) // => verdadeiro: falso é igual a falso

//Os operadores lógicos combinam ou invertem valores booleanos

(x == 2) && (y == 3) // => verdadeiro: as duas comparações são verdadeiras. && é E
(x > 3) || (y < 3) // => falso: nenhuma das comparações é verdadeira. || é OU
!(x == y); // => verdadeiro: ! inverte um valor booleano
*/
var nome = prompt("Qual é o seu nome?");
alert("Olá " + nome);

