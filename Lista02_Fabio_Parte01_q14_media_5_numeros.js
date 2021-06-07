const prompt = require('prompt-sync')()


function media(){
    console.log('***** ACHE A MÉDIA E NÚMEROS ACIMA DA MÉDIA *****')
}

media()

// Declare as vagas ou variáveis da questão
var n1 = Number(prompt('Primeiro número: '))
var n2 = Number(prompt('Segundo número: '))
var n3 = Number(prompt('Terceiro número: '))
var n4 = Number(prompt('Quarto número: '))
var n5 = Number(prompt('Quinto número: '))

// Chame funções e ache a média simples da questão
var media_simples = (n1 + n2 + n3 + n4 + n5) / 5
console.log('Logo, a média aritmética dos números lidos será: ', media_simples)

// Para achar o maior número, basta só fazer uma função recursiva com uma determinada fórmula em que cada repetição atualiza p/ o menor número.
if (n1 > n2){
    console.log('Número 1 é maior.')
}else if(n2 > n3){
    console.log('Número 2 é maior.')
}if (n3 > n4){
    console.log('Número 3 é maior.')
}else if (n4 > n5){
    console.log('Número 4 é maior.')
}else{
    console.log('Não encontrou-se a média.')
}

var arr = [n4, n5] // Eu suponho por comparação que n4 e n5 são números acima da média em um resultado final.
var max = Math.max(arr); // Um array de valores
    console.log('Esses valores são maiores que a média: ', n4);
    console.log('Esse valor também é maior do que a média: ', n5);
    console.log(max)