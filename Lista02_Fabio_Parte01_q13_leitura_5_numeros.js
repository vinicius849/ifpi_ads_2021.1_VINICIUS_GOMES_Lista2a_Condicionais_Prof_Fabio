const prompt = require('prompt-sync')()


function enumeracao(){
    console.log('Leia 5 números e escreva qual é o maior e o menor deles.')
    var n1 = Number(prompt('Primeiro número: '))
    var n2 = Number(prompt('Segundo número: '))
    var n3 = Number(prompt('Terceiro número: '))
    var n4 = Number(prompt('Quarto número: '))
    var n5 = Number(prompt('Quinto número: '))

    var arr = [n1, n2, n3, n4, n5]
    var min = Math.min(arr);
    var max = Math.max(arr);

    console.log(min); // Esse cálculo vale para o menor valor dentre o intervalo de números 1 a 5.
    console.log(max); // Esse cálculo vale para o maior valor dentre o intervalo de números 1 a 5.
    
    // Verificar a condição
    if(n1 > n2){
        console.log(`O número 1 ${n1} é maior.`)
    }else if(n1 < n2){
        console.log(`O número 2 ${n2} é maior.`)
    }else if(n3 > n1){
        console.log(`O número 3 ${n3} é maior.`)
    }else if(n4 > n5){
        console.log(`O número 4 ${n4} é maior.`)
    }else if(n5 > n1){
        console.log(`O número 5 ${n5} é maior.`)
    }else{
        console.log('Todos os 5 números são diferentes.')
    }

}

enumeracao()