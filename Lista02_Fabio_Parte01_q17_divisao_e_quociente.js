const input = require('prompt-sync')()

// Avaliar uma divisão com impressão de resultado
const valor_1 = input('Valor 1: ')
const valor_2 = input('Valor 2: ')
const soma = valor_1 + valor_2

function valores(){

if(valor_1 % valor_2 === 1){
    console.log('A soma das variáveis mais o resto da divisão será: ', soma)
}else if((valor_1 % valor_2 == 2 && valor_1 % 2 == 0)){
    console.log('Diga se o primeiro pelo segundo valor é par ou ímpar: ', soma)
}else if((valor_1 % valor_2 == 3 && valor_1 * valor_2 == soma)){
    console.log('Igualdade de valor igual a 3 mais multiplicação: ', soma)
}else if(valor_1 % valor_2 == 4 && (valor_1 + valor_2) / valor_2){
    console.log('Igualdade de valor igual a 4 mais divisão das variáveis pela segunda variável: ', soma)
}else{
    console.log('Quadrado dos números lidos.')
}

}

valores()