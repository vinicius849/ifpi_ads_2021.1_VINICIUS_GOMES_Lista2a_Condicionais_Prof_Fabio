const prompt = require('prompt-sync')()


function arrendondamento(){
    console.log('### NÚMEROS INTEIROS ###')
}

arrendondamento()

const numero_1= Number(prompt('Número 1: '))
const numero_2 = Number(prompt('Número 2: '))
const numero_3 = Number(prompt('Número 3: '))

// Processamento e Fim
if (numero_1 ** -1 && numero_1 >= 0.5){
    console.log('Arredonda-se o número para um inteiro.')
}else if (numero_2 ** -1 && numero_2 < 0.5){
    console.log('Arredonda-se o número para a fração inferior.')
}
