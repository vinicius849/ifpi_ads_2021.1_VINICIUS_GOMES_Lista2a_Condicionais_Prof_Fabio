const input = require('prompt-sync')()

// Exemplo de como manipular uma string
function main(){
    // Algarismo de dezenas e unidades pegando NaN, como não tem Number, a variável é uma string
    const numero = input('Digite aqui um número de 2 dígitos: ')
    console.log('Dezenas: ', numero[0])
    console.log('Unidades: ', numero[1])
}
main()
