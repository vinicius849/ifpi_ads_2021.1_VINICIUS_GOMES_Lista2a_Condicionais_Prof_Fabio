const prompt = require('prompt-sync')()


function comparacao(){
    console.log('Qual o maior e qual o menor entre os números lidos.')
    var n1 = Number(prompt('Primeiro número: '))
    var n2 = Number(prompt('Segundo número: '))

    var arr = [n1, n2]
    var min = Math.min(arr);
    var max = Math.max(arr);

    console.log(min); // Esse cálculo vale para o menor valor dentre o intervalo de números 1 a 2.
    console.log(max); // Esse cálculo vale para o maior valor dentre o intervalo de números 1 a 2.

    // Estabelecer o maior e o menor
    if(n1 > n2){
        console.log('O número 1 é maior.')
    }
    if(n1 < n2){
        console.log('O número 2 é o maior.')
    }
    
}

comparacao()