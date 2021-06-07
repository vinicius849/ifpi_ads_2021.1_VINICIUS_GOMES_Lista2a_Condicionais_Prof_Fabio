const prompt = require('prompt-sync')()

// Entrada de valores
const num_1 = Number(prompt('Valor 1: '))
const num_2 = Number(prompt('Valor 2: '))

function adicao(num_1, num_2){
    console.log('Soma-se os 2 números.')
    const soma = num_1 + num_2
    console.log(soma)
}

return adicao

function subtracao(num_1, num_2){
    console.log('Subtrai-se os 2 números.')
    const diferenca = num_1 - num_2
    console.log(diferenca)
}

return subtracao

function multiplicacao(num_1, num_2){
    console.log('Multiplica-se os 2 números.')
    const multipica = num_1 * num_2
    console.log(multiplica)
}

return multiplicacao

function divisao(num_1, num_2){
    console.log('Dividi-se os 2 números.')
    const dv = num_1 / num_2
    console.log(dv)
}

return divisao